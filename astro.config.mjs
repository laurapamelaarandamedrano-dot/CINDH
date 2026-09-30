// @ts-check
import { defineConfig } from 'astro/config';

// Sitio 100 % estático para GitHub Pages.
// Si el repositorio se llama distinto de "CINDH", cambia `base`.
export default defineConfig({
  site: 'https://laurapamelaarandamedrano-dot.github.io',
  base: '/CINDH',
  output: 'static',
  trailingSlash: 'always',
  build: {
    // Nunca incrustar CSS: la CSP solo permite hojas de estilo de 'self'.
    inlineStylesheets: 'never',
    format: 'directory',
  },
  // Nada de telemetría ni barra de desarrollo.
  devToolbar: { enabled: false },
  prefetch: false,
  vite: {
    build: {
      // Nunca convertir recursos a data: URIs ni incrustar scripts.
      assetsInlineLimit: 0,
      sourcemap: false,
    },
    // Solo variables con este prefijo podrían llegar al navegador.
    // El sitio no usa ninguna; el verificador falla si alguien lo intenta.
    envPrefix: 'PUBLIC_',
  },
});
