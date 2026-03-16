/* ─────────────────────────────────────────
   Hardest Prints — JS interactions
   ───────────────────────────────────────── */

// ── Nav scroll effect ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Scroll reveal ──
const revealEls = () => {
  document.querySelectorAll(
    '.coll-card, .dest__card, .how__step, .testi__card, .about__stat, .about__text, .about__visual'
  ).forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

// ── Stagger children reveal ──
const staggerReveal = () => {
  document.querySelectorAll('.coll-card, .dest__card, .how__step, .testi__card').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
  });
};

// ── Smooth anchor scrolling with offset ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ── Destination card hover label ──
document.querySelectorAll('.dest__card[data-city]').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.setProperty('--hover-label', `"${card.dataset.city}"`);
  });
});

// ── Hamburger (mobile) placeholder ──
const ham = document.querySelector('.nav__hamburger');
if (ham) {
  ham.addEventListener('click', () => {
    // Could open a mobile drawer; simple alert for now
    const links = ['Collections', 'Custom', 'About', 'Reviews'];
    // Future: toggle slide-in menu
  });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  staggerReveal();
  revealEls();
});
