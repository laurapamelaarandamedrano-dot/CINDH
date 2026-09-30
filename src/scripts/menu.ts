// Menú móvil accesible: sin dependencias, sin innerHTML, sin eval.
const boton = document.querySelector<HTMLButtonElement>('.nav__toggle');
const nav = document.querySelector<HTMLElement>('.nav');

if (boton && nav) {
  const etiqueta = boton.querySelector<HTMLElement>('.visually-hidden');

  const fijar = (abierto: boolean) => {
    boton.setAttribute('aria-expanded', String(abierto));
    nav.classList.toggle('is-open', abierto);
    if (etiqueta) {
      etiqueta.textContent = abierto ? 'Cerrar menú de navegación' : 'Abrir menú de navegación';
    }
  };

  boton.addEventListener('click', () => {
    fijar(boton.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      fijar(false);
      boton.focus();
    }
  });

  window.matchMedia('(min-width: 1241px)').addEventListener('change', (e) => {
    if (e.matches) fijar(false);
  });
}
