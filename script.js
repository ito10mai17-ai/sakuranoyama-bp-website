(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.global-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const LINE_URL = 'https://lin.ee/RKEljXL';

  document.querySelectorAll('[data-line-link]').forEach((link) => {
    link.href = LINE_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
})();
