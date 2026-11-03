// Menu category tabs
const menuTabs = document.querySelectorAll('.menu-tab');
const menuItems = document.querySelectorAll('.menu-item');

function showCategory(cat) {
  menuItems.forEach(item => {
    item.classList.toggle('show', item.dataset.cat === cat);
  });
}
showCategory('starters'); // initial state

menuTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    menuTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    showCategory(tab.dataset.cat);
  });
});

// Reservation form validation
const reserveForm = document.getElementById('reserveForm');
const reserveMessage = document.getElementById('reserveMessage');

reserveForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const email = document.getElementById('email').value.trim();

  if (!name || !date || !time || !email) {
    reserveMessage.style.color = '#b91c1c';
    reserveMessage.textContent = 'Please fill in every field.';
    return;
  }

  reserveMessage.style.color = '#2f855a';
  reserveMessage.textContent = `Thanks ${name}, we'll confirm your table for ${date} at ${time} by email.`;
  reserveForm.reset();
});
