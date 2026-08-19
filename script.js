const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav) nav.classList.remove('open');
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
