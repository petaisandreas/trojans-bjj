document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// Pre-select coach when "Book Private Class" is clicked from a coach card
document.querySelectorAll('[data-book-coach]').forEach(btn => {
  btn.addEventListener('click', () => {
    const coach = btn.getAttribute('data-book-coach');
    const select = document.getElementById('session-type');
    select.value = coach === 'eleftheria'
      ? 'Private Class with Eleftheria'
      : 'Private Class with Venizelos';
  });
});

// Booking form -> WhatsApp
const WHATSAPP_NUMBER = '35797605817'; // TROJANS BJJ WhatsApp number

document.getElementById('booking-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const sessionType = document.getElementById('session-type').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const message = document.getElementById('message').value.trim();

  let lines = [
    `Hi TROJANS BJJ! I'd like to book a class.`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Session: ${sessionType}`,
  ];
  if (date) lines.push(`Preferred date: ${date}`);
  if (time) lines.push(`Preferred time: ${time}`);
  if (message) lines.push(`Message: ${message}`);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  window.open(url, '_blank');
});
