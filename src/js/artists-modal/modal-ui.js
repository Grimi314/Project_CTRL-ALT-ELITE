import iziToast from 'izitoast';

const backdrop = document.querySelector('.backdrop');
const modalContent = document.querySelector('.js-modal-content');
const loader = document.querySelector('[data-modal-loader]');
const closeBtn = document.querySelector('.modal-close');

function onEsc(e) {
  if (e.key === 'Escape') closeModal();
}

function onBackdropClick(e) {
  if (e.target === backdrop) closeModal();
}

export function listener() {
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEsc);
  backdrop.addEventListener('click', onBackdropClick);
}

function closeModal() {
  backdrop.classList.add('is-hidden');
  closeBtn.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onEsc);
  backdrop.removeEventListener('click', onBackdropClick);

  func.clearModalContent();
}

export const func = {
  clearModalContent() {
    modalContent.innerHTML = '';
  },
  renderModal(content) {
    this.clearModalContent();
    modalContent.appendChild(content);
  },
  showLoader() {
    loader.classList.remove('is-hidden');
  },
  hideLoader() {
    loader.classList.add('is-hidden');
  },
  showError() {
    iziToast.error({
      message: 'Oops...something wrong :(',
      position: 'topRight',
    });
  },
};
