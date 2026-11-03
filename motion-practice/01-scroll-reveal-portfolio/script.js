// 1. Scroll-reveal using IntersectionObserver (the modern, performant way —
// avoids checking scroll position manually on every scroll event)
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // animate once, not every time
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// 2. Parallax background — moves slower than scroll speed for depth
const parallaxBg = document.querySelector('.parallax-bg');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const speed = parseFloat(parallaxBg.dataset.speed);
  parallaxBg.style.transform = `translateY(${scrolled * speed}px)`;
});

// 3. Animated number counters — triggered once when scrolled into view
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400; // ms
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}
