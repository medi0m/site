/* ==========================================================================
   Uniway — shared UI behavior (nav, theme, language switcher)
   ========================================================================== */

function buildLangMenu(){
  const menu = document.querySelector('.lang-menu');
  if (!menu) return;
  menu.innerHTML = LANGS.map(l =>
    `<button type="button" data-lang="${l.code}">${l.label}</button>`
  ).join('');
  menu.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
      menu.classList.remove('open');
    });
  });
}

function initLangSwitch(){
  const btn = document.querySelector('.lang-btn');
  const menu = document.querySelector('.lang-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
  });
  document.addEventListener('click', () => menu.classList.remove('open'));
}

function initTheme(){
  const btn = document.querySelector('.theme-btn');
  const stored = localStorage.getItem('uniway_theme');
  if (stored) document.documentElement.setAttribute('data-theme', stored);
  updateThemeIcon();
  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme')
      || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('uniway_theme', next);
    updateThemeIcon();
  });
}

function updateThemeIcon(){
  const btn = document.querySelector('.theme-btn');
  if (!btn) return;
  const current = document.documentElement.getAttribute('data-theme')
    || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  btn.textContent = current === 'dark' ? '☀️' : '🌙';
}

function initMobileNav(){
  const burger = document.querySelector('.burger');
  const panel = document.querySelector('.mobile-panel');
  if (!burger || !panel) return;
  burger.addEventListener('click', () => panel.classList.toggle('open'));
}

function markActiveNav(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-panel a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildLangMenu();
  initLangSwitch();
  initTheme();
  initMobileNav();
  markActiveNav();
  applyTranslations();
});
