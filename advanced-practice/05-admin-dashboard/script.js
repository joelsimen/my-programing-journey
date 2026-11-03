// Sidebar toggle (mobile)
const sidebar = document.getElementById('sidebar');
document.getElementById('menuBtn').addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Live search filter on the orders table
const searchInput = document.getElementById('searchInput');
const rows = document.querySelectorAll('#ordersTable tbody tr');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.classList.toggle('row-hidden', !text.includes(query));
  });
});

// Simple hand-drawn bar chart on <canvas> — no chart library, pure JS Canvas API.
// Good exercise: try changing the data array and see the chart update.
const canvas = document.getElementById('revenueChart');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = canvas.clientWidth;
  canvas.height = 220;
  drawChart();
}

const data = [
  { day: 'Mon', value: 3200 },
  { day: 'Tue', value: 4100 },
  { day: 'Wed', value: 3800 },
  { day: 'Thu', value: 5200 },
  { day: 'Fri', value: 6100 },
  { day: 'Sat', value: 4700 },
  { day: 'Sun', value: 3900 },
];

function drawChart() {
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const max = Math.max(...data.map(d => d.value));
  const barWidth = w / data.length * 0.5;
  const gap = w / data.length;
  const chartHeight = h - 40;

  data.forEach((d, i) => {
    const barHeight = (d.value / max) * chartHeight;
    const x = i * gap + (gap - barWidth) / 2;
    const y = h - barHeight - 24;

    // bar
    ctx.fillStyle = '#4338ca';
    ctx.beginPath();
    ctx.roundRect(x, y, barWidth, barHeight, 6);
    ctx.fill();

    // value label
    ctx.fillStyle = '#1f2933';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('$' + d.value.toLocaleString(), x + barWidth / 2, y - 8);

    // day label
    ctx.fillStyle = '#7b8794';
    ctx.fillText(d.day, x + barWidth / 2, h - 6);
  });
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
