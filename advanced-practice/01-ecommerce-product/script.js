// Thumbnail gallery swap
const thumbs = document.querySelectorAll('.thumb');
const mainImage = document.getElementById('mainImage');
thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    mainImage.src = thumb.dataset.full;
  });
});

// Color swatch selection
const swatches = document.querySelectorAll('.swatch');
const selectedColor = document.getElementById('selectedColor');
swatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    swatches.forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');
    selectedColor.textContent = swatch.dataset.color;
  });
});

// Quantity control
let quantity = 1;
const qtyValue = document.getElementById('qtyValue');
document.getElementById('qtyPlus').addEventListener('click', () => {
  quantity++;
  qtyValue.textContent = quantity;
  updateButtonPrice();
});
document.getElementById('qtyMinus').addEventListener('click', () => {
  if (quantity > 1) quantity--;
  qtyValue.textContent = quantity;
  updateButtonPrice();
});

const unitPrice = 249.00;
const addToCartBtn = document.getElementById('addToCartBtn');
function updateButtonPrice() {
  const total = (unitPrice * quantity).toFixed(2);
  addToCartBtn.textContent = `Add to Cart — $${total}`;
}

// Cart count + toast
let cartCount = 0;
const cartCountEl = document.getElementById('cartCount');
const toast = document.getElementById('toast');

addToCartBtn.addEventListener('click', () => {
  cartCount += quantity;
  cartCountEl.textContent = cartCount;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
});

// Accordion info panels
document.querySelectorAll('.info-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
  });
});
