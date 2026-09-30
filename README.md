# CINDH · Sitio web

Sitio institucional del **Centro de Investigación Interdisciplinaria en Derechos Humanos**,
hecho con [Astro](https://astro.build) y publicado en GitHub Pages.

> *Evidencia para la dignidad. Conocimiento cercano a las personas.*

## Comandos

| Comando             | Qué hace                                                  |
| ------------------- | --------------------------------------------------------- |
| `npm install`       | Instala dependencias (sin ejecutar scripts de terceros)   |
| `npm run dev`       | Servidor local en `http://localhost:4321/CINDH/`          |
| `npm run build`     | Revisa tipos, compila a `dist/` y corre el verificador    |
| `npm run preview`   | Sirve localmente lo compilado                             |
| `npm run seguridad` | Solo el verificador de seguridad                          |

## Editar el contenido

Todos los textos están en [`src/data/sitio.ts`](src/data/sitio.ts). Las páginas están en
[`src/pages/`](src/pages/) y los colores en [`src/styles/global.css`](src/styles/global.css).

## Publicar en GitHub Pages

1. Crea un repositorio llamado **`CINDH`** (si usas otro nombre, cambia `base` en
   [`astro.config.mjs`](astro.config.mjs)).
2. Sube este código a la rama `main`.
3. En el repositorio: **Settings → Pages → Source: GitHub Actions**.
4. Cada `push` a `main` compila, audita, verifica y publica en
   `https://laurapamelaarandamedrano-dot.github.io/CINDH/`.

## Seguridad

Ver [SECURITY.md](SECURITY.md). Regla de oro: **en un sitio estático nunca va una clave
secreta.** Si algún día se necesita una API privada, debe llamarse desde un backend y la
clave guardarse en *Settings → Secrets*, jamás en este repositorio.

Para que el sitio aparezca en buscadores, cambia `INDEXAR` a `true` en
[`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro).
