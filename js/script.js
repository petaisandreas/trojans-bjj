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

// Expanding panels - coach bios and program descriptions share the behaviour
document.querySelectorAll('.coach-toggle, .program-toggle').forEach(toggle => {
  const bio = document.getElementById(toggle.getAttribute('aria-controls'));
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    bio.hidden = isOpen;
  });
});

// Keeps the hero headline sitting on the coaches' chests at any window size.
//
// Doing this in CSS alone needs a hardcoded offset per breakpoint, and those
// only hold at the exact sizes they were measured at - the hero photo is
// portrait inside a box whose shape changes with the viewport, so how much of
// the photo is cropped (and therefore where the chests land on screen) moves
// continuously as the window resizes. Every fixed value tried here was correct
// at one width and wrong at the next. This measures the actual crop instead.
const HERO_CHEST_POINT = 0.46; // chests sit ~43-49% down the source photo

function positionHeroText() {
  const hero = document.querySelector('.hero');
  const content = document.querySelector('.hero-content');
  const h1 = hero && hero.querySelector('h1');
  const img = document.querySelector('.hero-photo img');
  if (!hero || !content || !h1 || !img || !img.naturalWidth) return;

  // Measure with the offset cleared, or each run compounds the last one.
  content.style.transform = 'none';

  const heroRect = hero.getBoundingClientRect();
  const h1Rect = h1.getBoundingClientRect();

  // Recreate what object-fit: cover does, to find where the chests render.
  const scale = Math.max(heroRect.width / img.naturalWidth,
                         heroRect.height / img.naturalHeight);
  const scaledHeight = img.naturalHeight * scale;
  const objectY = (parseFloat(getComputedStyle(img).objectPosition.split(' ')[1]) || 50) / 100;
  const croppedOffTop = (scaledHeight - heroRect.height) * objectY;
  const chestY = HERO_CHEST_POINT * scaledHeight - croppedOffTop;

  const headlineY = (h1Rect.top - heroRect.top) + h1Rect.height / 2;
  let shift = chestY - headlineY;

  // Never at the cost of usability: the button must stay above the fold and
  // the headline must stay clear of the header.
  const btn = content.querySelector('.btn-hero');
  const blockBottom = (btn || h1).getBoundingClientRect().bottom - heroRect.top;
  const maxDown = heroRect.height - blockBottom - 16;
  const maxUp = -((h1Rect.top - heroRect.top) - 16);
  shift = Math.max(Math.min(shift, maxDown), maxUp);

  content.style.transform = `translateY(${Math.round(shift)}px)`;
}

if (document.querySelector('.hero-photo img')) {
  const heroImg = document.querySelector('.hero-photo img');
  if (heroImg.complete) positionHeroText();
  heroImg.addEventListener('load', positionHeroText);
  window.addEventListener('load', positionHeroText);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(positionHeroText, 100);
  });
}

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
    }, 4000);
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
