#!/usr/bin/env node
// Verificador de seguridad. Se ejecuta después de `astro build` y en CI.
// Falla (exit 1) si encuentra:
//   - secretos o claves en el código fuente o en el sitio compilado
//   - archivos sensibles (.env, llaves, source maps) dentro de dist/
//   - scripts, estilos o manejadores de eventos inline (romperían la CSP)
//   - recursos de terceros (scripts, estilos, fuentes, imágenes)
//   - páginas sin Content-Security-Policy
//   - uso de variables de entorno fuera de las permitidas

import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = fileURLToPath(new URL('..', import.meta.url));
const DIST = join(RAIZ, 'dist');
const IGNORAR = new Set(['node_modules', '.git', '.astro', 'dist']);

const errores = [];
const fallo = (archivo, motivo) => errores.push(`  ✗ ${relative(RAIZ, archivo)}: ${motivo}`);

// Patrones de secretos comunes (proveedores más usados).
const SECRETOS = [
  [/AKIA[0-9A-Z]{16}/, 'clave de acceso de AWS'],
  [/\bsk-(?:ant-|proj-)?[A-Za-z0-9_-]{20,}/, 'API key tipo sk- (OpenAI/Anthropic)'],
  [/\bgh[pousr]_[A-Za-z0-9]{36,}/, 'token de GitHub'],
  [/\bgithub_pat_[A-Za-z0-9_]{22,}/, 'token de GitHub (fine-grained)'],
  [/\bAIza[0-9A-Za-z_-]{35}/, 'API key de Google'],
  [/\bxox[abprs]-[A-Za-z0-9-]{10,}/, 'token de Slack'],
  [/\b[rs]k_live_[0-9A-Za-z]{16,}/, 'llave de Stripe'],
  [/-----BEGIN (?:RSA |EC |OPENSSH |DSA |PGP )?PRIVATE KEY-----/, 'llave privada'],
  [/\beyJ[A-Za-z0-9_-]{10,}\.eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/, 'token JWT'],
  [/(?:api[_-]?key|secret|password|passwd|token)\s*[:=]\s*['"][^'"\s]{12,}['"]/i, 'asignación de credencial'],
  [/https:\/\/hooks\.slack\.com\/services\/[A-Za-z0-9/]+/, 'webhook de Slack'],
  [/https:\/\/discord(?:app)?\.com\/api\/webhooks\/\d+\/[\w-]+/, 'webhook de Discord'],
];

const ARCHIVOS_PROHIBIDOS_DIST = [/^\.env/, /\.pem$/, /\.key$/, /\.p12$/, /\.pfx$/, /\.map$/, /^id_rsa/, /\.pdf$/];
const EXT_TEXTO = new Set(['.html', '.js', '.mjs', '.css', '.json', '.txt', '.xml', '.svg', '.ts', '.astro', '.md', '.yml', '.yaml', '.cjs']);

async function* recorrer(dir) {
  let entradas;
  try {
    entradas = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entradas) {
    if (IGNORAR.has(e.name) && dir === RAIZ) continue;
    if (e.name === 'node_modules' || e.name === '.git') continue;
    const ruta = join(dir, e.name);
    if (e.isDirectory()) yield* recorrer(ruta);
    else yield ruta;
  }
}

function buscarSecretos(ruta, texto) {
  for (const [re, nombre] of SECRETOS) {
    if (re.test(texto)) fallo(ruta, `posible ${nombre}`);
  }
}

// 1. Código fuente
for await (const ruta of recorrer(RAIZ)) {
  const nombre = basename(ruta);
  if (ruta.startsWith(DIST)) continue;
  if (/^\.env(?!\.example$)/.test(nombre)) {
    fallo(ruta, 'archivo .env dentro del proyecto (no debe existir aquí ni subirse)');
    continue;
  }
  if (!EXT_TEXTO.has(extname(ruta)) || nombre === 'package-lock.json') continue;
  if ((await stat(ruta)).size > 2_000_000) continue;
  const texto = await readFile(ruta, 'utf8');
  if (ruta.endsWith('verificar-seguridad.mjs')) continue;
  buscarSecretos(ruta, texto);

  if (/\.(astro|ts|mjs|js)$/.test(ruta)) {
    const usos = texto.match(/import\.meta\.env\.([A-Z_]+)/g) ?? [];
    for (const uso of usos) {
      const v = uso.split('.').pop();
      if (!['BASE_URL', 'SITE', 'DEV', 'PROD', 'MODE'].includes(v)) {
        fallo(ruta, `usa la variable de entorno ${v}; en un sitio estático terminaría pública`);
      }
    }
    if (/\bprocess\.env\b/.test(texto)) {
      fallo(ruta, 'usa process.env; los valores quedarían incrustados en el HTML');
    }
  }
}

// 2. Sitio compilado
let paginas = 0;
try {
  await stat(DIST);
} catch {
  console.error('No existe dist/. Ejecuta `npm run build` primero.');
  process.exit(1);
}

for await (const ruta of recorrer(DIST)) {
  const nombre = basename(ruta);
  if (ARCHIVOS_PROHIBIDOS_DIST.some((re) => re.test(nombre))) {
    fallo(ruta, 'archivo sensible dentro del sitio publicado');
    continue;
  }
  if (!EXT_TEXTO.has(extname(ruta))) continue;
  const texto = await readFile(ruta, 'utf8');
  buscarSecretos(ruta, texto);

  if (extname(ruta) === '.js' && /\beval\s*\(|new Function\s*\(/.test(texto)) {
    fallo(ruta, 'usa eval o new Function');
  }

  if (extname(ruta) !== '.html') continue;
  paginas++;

  if (!/<meta http-equiv="Content-Security-Policy" content="[^"]*script-src 'self'[^"]*"/.test(texto)) {
    fallo(ruta, 'falta la meta Content-Security-Policy');
  }
  if (/'unsafe-inline'|'unsafe-eval'/.test(texto)) {
    fallo(ruta, "la CSP contiene 'unsafe-inline' o 'unsafe-eval'");
  }
  for (const m of texto.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (!/\bsrc=/.test(m[1] ?? '') && (m[2] ?? '').trim() !== '') fallo(ruta, 'script inline');
    const src = /\bsrc="([^"]+)"/.exec(m[1] ?? '')?.[1];
    if (src && /^(https?:)?\/\//.test(src)) fallo(ruta, `script de terceros: ${src}`);
  }
  if (/<style[\s>]/i.test(texto)) fallo(ruta, 'bloque <style> inline');
  if (/\sstyle="/i.test(texto)) fallo(ruta, 'atributo style inline');
  if (/\son[a-z]+\s*=\s*["']/i.test(texto)) fallo(ruta, 'manejador de evento inline (onclick, onload…)');
  if (/javascript:/i.test(texto)) fallo(ruta, 'enlace javascript:');
  for (const m of texto.matchAll(/<(?:link|img|iframe|source|video|audio|embed)\b[^>]*\b(?:href|src)="((?:https?:)?\/\/[^"]+)"/gi)) {
    const tag = m[0];
    if (/rel="canonical"/.test(tag)) continue;
    fallo(ruta, `recurso de terceros: ${m[1]}`);
  }
  for (const m of texto.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)) {
    if (!/rel="[^"]*noopener/.test(m[0])) fallo(ruta, 'enlace target="_blank" sin rel="noopener"');
  }
}

if (paginas === 0) fallo(DIST, 'no se encontraron páginas HTML');

if (errores.length) {
  console.error(`\n🚨 Verificación de seguridad FALLIDA (${errores.length} problema(s)):\n`);
  console.error(errores.join('\n'));
  console.error('');
  process.exit(1);
}

console.log(`\n🦋 Verificación de seguridad OK: ${paginas} página(s), sin secretos, sin código inline, sin terceros.\n`);
