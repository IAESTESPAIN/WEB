// Language Selector Toggle
function toggleLanguageMenu(event) {
  event.preventDefault();
  const btn = event.target.closest('.language-toggle');
  if (btn) {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !isExpanded);
  }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.language-switcher')) {
    const btns = document.querySelectorAll('.language-toggle');
    btns.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
  }
});

// Close menu on Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const btns = document.querySelectorAll('.language-toggle');
    btns.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
  }
});
