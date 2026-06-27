import { initTicker } from './ticker.js';
import { initTrivia } from './triviaWidget.js';
import { initSobres } from './sobres.js';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    header.style.transform = current > lastScroll && current > 100
      ? 'translateY(-100%)'
      : 'translateY(0)';
    lastScroll = current;
  }, { passive: true });

  // Fade-up on scroll
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => observer.observe(el));
  }

  initTicker();
  initTrivia();
  initSobres();
});
