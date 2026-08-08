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

// Coach cards -> profile dialog
const coachDialog = document.getElementById('coach-dialog');
const coachDialogBook = document.getElementById('coach-dialog-book');

document.querySelectorAll('.coach-card').forEach(card => {
  card.querySelector('[data-meet]').addEventListener('click', () => {
    document.getElementById('coach-dialog-name').textContent = card.dataset.coachName;
    document.getElementById('coach-dialog-role').textContent = card.dataset.coachRole;
    document.getElementById('coach-dialog-bio').innerHTML = card.querySelector('.coach-bio').innerHTML;
    coachDialogBook.setAttribute('data-book-coach', card.dataset.coachName);
    coachDialog.showModal();
  });
});

coachDialog.querySelector('[data-close-dialog]').addEventListener('click', () => coachDialog.close());
// Click outside the panel closes it too
coachDialog.addEventListener('click', e => {
  if (e.target === coachDialog) coachDialog.close();
});

// Pre-select the coach when "Book Private Class" is clicked
coachDialogBook.addEventListener('click', () => {
  const coach = coachDialogBook.getAttribute('data-book-coach');
  const select = document.getElementById('session-type');
  const value = `Private Class with ${coach}`;
  if ([...select.options].some(opt => opt.value === value)) select.value = value;
  coachDialog.close();
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
