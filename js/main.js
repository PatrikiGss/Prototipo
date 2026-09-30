document.documentElement.classList.replace('no-js', 'js');

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = header.querySelector('.menu-toggle');
  const navLinks = [...header.querySelectorAll('.site-nav a[href^="#"]:not([href="#"])')];

  // Menu mobile
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    header.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  header.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });
  // O fundo escurecido é o ::after do cabeçalho: o toque nele chega com o próprio header como alvo
  header.addEventListener('click', (event) => {
    if (event.target === header) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('is-open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  // Contagem de dias até o próximo evento
  document.querySelectorAll('[data-countdown]').forEach((el) => {
    const target = new Date(`${el.dataset.countdown}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = Math.round((target - today) / 864e5);

    if (days > 1) el.textContent = `em ${days} dias`;
    else if (days === 1) el.textContent = 'amanhã';
    else if (days === 0) el.textContent = 'hoje';
    else el.hidden = true;
  });

  // Destaca no menu a seção visível
  const targets = navLinks
    .map((link) => ({ link, section: document.querySelector(link.getAttribute('href')) }))
    .filter((item) => item.section);

  let active = null;
  const markCurrent = () => {
    const line = header.offsetHeight + 16;
    let current = targets[0];

    targets.forEach((item) => {
      const top = item.section.getBoundingClientRect().top;
      if (top <= line && top > current.section.getBoundingClientRect().top) current = item;
    });

    if (current === active) return;
    targets.forEach(({ link }) => link.removeAttribute('aria-current'));
    current.link.setAttribute('aria-current', 'true');
    active = current;
  };

  window.addEventListener('scroll', markCurrent, { passive: true });
  markCurrent();
});
