// Smooth scroll for same-page anchor links
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const targetId = link.getAttribute('href').slice(1);
  if (!targetId) return;
  const targetEl = document.getElementById(targetId);
  if (!targetEl) return;
  e.preventDefault();
  targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
  // Close menu when clicking a link (mobile)
  siteNav.addEventListener('click', (e) => {
    if (e.target.matches('a')) siteNav.classList.remove('open');
  });
}

// Dynamic year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Resume buttons: ensure target works and download triggers
const viewBtn = document.getElementById('viewResume');
const downloadBtn = document.getElementById('downloadResume');
if (viewBtn) {
  viewBtn.addEventListener('click', () => {
    // no-op: anchor opens in new tab; kept for extension (analytics, etc.)
  });
}
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    // download attribute handles it; kept for parity
  });
}

// Optional: Back to top smooth scroll for projects.html footer link with href="#"
document.querySelectorAll('a.to-top').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});