const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', (e) => {
  e.preventDefault();
  dropdown.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});
