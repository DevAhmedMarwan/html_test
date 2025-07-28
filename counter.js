let count = 0;

function updateDisplay() {
  document.getElementById('counter-value').textContent = count;
}

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}

// Initialize display on page load
window.onload = updateDisplay;