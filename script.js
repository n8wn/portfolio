// Theme toggle (light/dark mode)
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check local storage for theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches ||
    localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Animate theme icon
function updateThemeIcon() {
  if (document.body.classList.contains('dark')) {
    themeIcon.style.backgroundImage =
      "url('https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/sun.svg')";
  } else {
    themeIcon.style.backgroundImage =
      "url('https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/moon.svg')";
  }
}
updateThemeIcon();

document.body.addEventListener('classChange', updateThemeIcon);
new MutationObserver(updateThemeIcon).observe(document.body, {attributes: true, attributeFilter: ['class']});

// Optional: Button ripple effect for social buttons
document.querySelectorAll('.social-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    this.appendChild(ripple);
    const rect = this.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    setTimeout(() => ripple.remove(), 600);
  });
});