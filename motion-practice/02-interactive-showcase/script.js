// 1. Cursor glow follows mouse using CSS custom properties (avoids
// re-triggering layout by only updating transform, not top/left)
const cursorGlow = document.getElementById('cursorGlow');
window.addEventListener('mousemove', (e) => {
  cursorGlow.style.setProperty('--x', `${e.clientX - 200}px`);
  cursorGlow.style.setProperty('--y', `${e.clientY - 200}px`);
});

// 2. 3D tilt effect on the main product card, tracked from mouse position
const tiltWrapper = document.getElementById('tiltWrapper');
const tiltCard = document.getElementById('tiltCard');
const shine = document.getElementById('shine');

tiltWrapper.addEventListener('mousemove', (e) => {
  const rect = tiltCard.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -10; // max 10deg tilt
  const rotateY = ((x - centerX) / centerX) * 10;

  tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  shine.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
  shine.style.setProperty('--my', `${(y / rect.height) * 100}%`);
});

tiltWrapper.addEventListener('mouseleave', () => {
  tiltCard.style.transform = 'rotateX(0) rotateY(0) scale(1)';
});

// 3. Same tilt technique applied to the smaller feature cards
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -6;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) translateY(0)';
  });
});

// 4. Magnetic buttons — the inner <span> nudges slightly toward the cursor
document.querySelectorAll('.magnetic-btn').forEach(btn => {
  const span = btn.querySelector('span');
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    span.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    span.style.transform = 'translate(0, 0)';
  });
});
