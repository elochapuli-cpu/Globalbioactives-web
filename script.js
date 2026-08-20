const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const dropdowns = document.querySelectorAll('.nav-dropdown');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    if (!nav.classList.contains('open')) dropdowns.forEach(d => d.classList.remove('open'));
  });
}

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector('.nav-dropdown-toggle');
  if (!button) return;

  button.addEventListener('click', (event) => {
    event.preventDefault();
    const willOpen = !dropdown.classList.contains('open');
    dropdowns.forEach(d => {
      d.classList.remove('open');
      const b = d.querySelector('.nav-dropdown-toggle');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
    if (willOpen) {
      dropdown.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-dropdown')) {
    dropdowns.forEach(d => {
      d.classList.remove('open');
      const b = d.querySelector('.nav-dropdown-toggle');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    dropdowns.forEach(d => d.classList.remove('open'));
    if (nav && window.innerWidth <= 900) nav.classList.remove('open');
  });
});

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const subject = `Solicitud web GlobalBioActives - ${data.get('interes') || 'Contacto'}`;
    const body = [
      `Nombre: ${data.get('nombre') || ''}`,
      `Empresa: ${data.get('empresa') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `País: ${data.get('pais') || ''}`,
      `Interés: ${data.get('interes') || ''}`,
      '',
      'Mensaje:',
      `${data.get('mensaje') || ''}`
    ].join('\n');

    window.location.href = `mailto:info@globalbioactives.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
