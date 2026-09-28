const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const quoteForm = document.getElementById('quoteForm');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.body.classList.toggle('menu-open', open);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menú');
      document.body.classList.remove('menu-open');
    });
  });
}

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const sector = document.getElementById('sector').value.trim();
    const service = document.getElementById('service').value.trim();
    const message = document.getElementById('message').value.trim();

    const text = [
      'Hola, necesito cotizar un servicio de gasfitería.',
      '',
      `Nombre: ${name}`,
      `Sector: ${sector}`,
      `Servicio: ${service}`,
      `Problema: ${message}`,
      '',
      'Puedo enviar fotos o video por este chat.'
    ].join('\n');

    const url = `https://wa.me/56987572679?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}
