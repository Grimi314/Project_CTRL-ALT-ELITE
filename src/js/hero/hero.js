const hero = document.querySelector('.hero');
const button = document.querySelector('.hero-btn-nav');

function setHeroBgStart() {
  const heroRect = hero.getBoundingClientRect();
  const btnRect = button.getBoundingClientRect();

  const offset = btnRect.bottom - heroRect.top + 40;
  hero.style.setProperty('--bg-start', `${offset}px`);
}

setHeroBgStart();
window.addEventListener('resize', setHeroBgStart);
