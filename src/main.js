import './js/other-section/header.js';
import './js/artists/artists-index.js';

let heavyLoaded = false;

window.addEventListener('load', () => {
  import('./js/other-section/about-us.js');
  import('./js/other-section/footer.js');
});

function loadHeavyOnce() {
  if (heavyLoaded) return;
  heavyLoaded = true;

  import('./js/artists-modal/artists-modal-index.js');
  import('./js/feedbacks/feedbacks-index.js');
  import('./js/other-section/submit-feedback.js');

  window.removeEventListener('pointerdown', loadHeavyOnce);
  window.removeEventListener('keydown', loadHeavyOnce);
}

window.addEventListener('pointerdown', loadHeavyOnce, { once: true });
window.addEventListener('keydown', loadHeavyOnce, { once: true });
