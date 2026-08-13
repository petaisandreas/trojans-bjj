// This file is shared by index.html and privacy.html, so anything specific to
// one page is guarded - the privacy page has no booking form or coach cards.

// Makes the site installable to a home screen. Registered from the root so
// its scope covers both pages regardless of which one loads it first.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

// Coach cards -> expanding bio dropdown
document.querySelectorAll('.coach-toggle').forEach(toggle => {
  const bio = document.getElementById(toggle.getAttribute('aria-controls'));
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    bio.hidden = isOpen;
  });
});

// About section background slideshow
const aboutSlideshow = document.getElementById('about-slideshow');
if (aboutSlideshow) {
  const startSlideshow = () => {
    const slides = [...aboutSlideshow.querySelectorAll('img')]
      .filter(img => !img.classList.contains('missing') && img.naturalWidth > 0);

    if (!slides.length) {
      // Nothing to show - let the plain section background stand in
      aboutSlideshow.classList.add('is-empty');
      return;
    }

    slides[0].classList.add('is-active');
    if (slides.length < 2) return;

    let i = 0;
    setInterval(() => {
      slides[i].classList.remove('is-active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-active');
    }, 2500);
  };

  // Wait for the images to settle so we only cycle the ones that actually loaded
  if (document.readyState === 'complete') startSlideshow();
  else window.addEventListener('load', startSlideshow);
}

// Show the Revolut note only when Revolut is the chosen payment method
const paymentSelect = document.getElementById('payment');
const revolutHint = document.getElementById('revolut-hint');
if (paymentSelect && revolutHint) {
  paymentSelect.addEventListener('change', () => {
    revolutHint.hidden = paymentSelect.value !== 'Revolut';
  });
}

// Booking form -> WhatsApp
const WHATSAPP_NUMBER = '35797605817'; // TROJANS BJJ WhatsApp number

const bookingForm = document.getElementById('booking-form');
if (bookingForm) bookingForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const sessionType = document.getElementById('session-type').value;
  const payment = document.getElementById('payment').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const message = document.getElementById('message').value.trim();

  let lines = [
    `Hi TROJANS BJJ! I'd like to book a class.`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Session: ${sessionType}`,
    `Payment: ${payment}`,
  ];
  if (date) lines.push(`Preferred date: ${date}`);
  if (time) lines.push(`Preferred time: ${time}`);
  if (message) lines.push(`Message: ${message}`);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  window.open(url, '_blank');
});
