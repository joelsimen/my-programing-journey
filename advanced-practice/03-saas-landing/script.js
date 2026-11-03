// Mobile hamburger (simple show/hide toggle target left as an exercise —
// try adding a mobile nav panel yourself using this button as the trigger)
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  alert('Exercise: build a mobile nav panel that slides in when this is clicked!');
});

// Pricing monthly/yearly toggle
const billingToggle = document.getElementById('billingToggle');
const monthlyPrices = document.querySelectorAll('.monthly-price');
const yearlyPrices = document.querySelectorAll('.yearly-price');

billingToggle.addEventListener('change', () => {
  const showYearly = billingToggle.checked;
  monthlyPrices.forEach(el => el.classList.toggle('hidden', showYearly));
  yearlyPrices.forEach(el => el.classList.toggle('hidden', !showYearly));
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => item.classList.toggle('open'));
});

// Smooth scroll for anchor nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
