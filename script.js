const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav-links');
function setMenu(open) {
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  toggle.querySelector('use').setAttribute('href', open ? '#close' : '#menu');
}
toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
window.matchMedia('(min-width: 801px)').addEventListener('change', e => { if(e.matches) setMenu(false); });
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) {entry.target.classList.add('reveal'); observer.unobserve(entry.target);}}), {threshold:.12});
  document.querySelectorAll('.service-grid article, .corporate-grid article, .mentoring-copy, .section-content').forEach(el => observer.observe(el));
}
