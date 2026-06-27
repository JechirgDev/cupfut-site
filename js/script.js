document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    header.style.transform = current > lastScroll && current > 100
      ? 'translateY(-100%)'
      : 'translateY(0)';
    lastScroll = current;
  });
});
