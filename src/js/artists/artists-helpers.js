let selectedArtistId = null;
const modalLayout = document.querySelector('[data-modal]');

export function openMoreInfoById(event) {
  const moreInfoButton = event.target.closest('.artists-learn-more-card-btn');
  if (!moreInfoButton) return;
  selectedArtistId = moreInfoButton.dataset.artistId;
  openModalLayout();
}

export function getSelectedArtistId() {
  return selectedArtistId;
}

function openModalLayout() {
  modalLayout.classList.remove('is-hidden');
}
