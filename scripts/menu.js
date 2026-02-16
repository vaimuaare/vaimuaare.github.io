export function initMenu() {
  const menu = document.getElementById('nav-menu');
  const toggleBtn = document.getElementById('menu-toggle');

  if (!menu || !toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Smooth scroll helper
  document.querySelectorAll('[data-scroll]').forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.dataset.scroll);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        menu.classList.remove('active');
      }
    });
  });
}
