# Seguridad

## Reportar una vulnerabilidad

Si encuentras un problema de seguridad en este sitio, repórtalo de forma privada
en **Security → Report a vulnerability** de este repositorio. No abras un issue público.

## Cómo está protegido el sitio

- **Sin secretos.** Es HTML estático: no usa API keys, `.env` ni variables de entorno.
  Todo lo que se compila queda público, por eso no existe nada privado que filtrar.
- **CSP estricta** en cada página: solo recursos del propio sitio; sin scripts ni estilos
  inline, sin `eval`, sin terceros, sin formularios (`form-action 'none'`).
- **Cero rastreo.** Sin analítica, sin cookies, sin Google Fonts (tipografías locales),
  `referrer: no-referrer`.
- **Verificador automático** (`npm run seguridad`): bloquea la publicación si detecta
  secretos, archivos `.env`/llaves/source maps en `dist/`, código inline o recursos externos.
- **Cadena de suministro:** versiones exactas, `npm ci --ignore-scripts`, `npm audit`,
  GitHub Actions fijadas por SHA, permisos mínimos y Dependabot semanal.
