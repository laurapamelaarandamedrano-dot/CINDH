// Muestra con suavidad los elementos `.reveal` al entrar en pantalla.
const elementos = document.querySelectorAll<HTMLElement>('.reveal');
const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reducir || !('IntersectionObserver' in window)) {
  elementos.forEach((el) => el.classList.add('is-visible'));
} else {
  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-visible');
          observador.unobserve(entrada.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  elementos.forEach((el) => observador.observe(el));
}
