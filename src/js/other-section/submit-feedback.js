import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  closeModalBtn: document.querySelector('.feedbacks-modal-btn'),
  modal: document.querySelector('.feedbacks-modal'),
  form: document.querySelector('.feedbacks-modal-form'),
  submitBtn: document.querySelector('.feedback-modal-submit'),
  body: document.body,
};

const setSubmitState = isValid => {
  refs.submitBtn.disabled = !isValid;

  refs.submitBtn.style.opacity = isValid ? '1' : '0.5';
  refs.submitBtn.style.cursor = isValid ? 'pointer' : 'not-allowed';
};

const validateForm = () => {
  if (!refs.form && !refs.submitBtn) return;

  const name = refs.form.querySelector('input[name="name"]');
  const message = refs.form.querySelector('textarea[name="message"]');
  const rating = refs.form.querySelector('input[name="rating"]:checked');

  const isNameValid = name && name.value.trim() !== '';
  const isMessageValid = message && message.value.trim() !== '';
  const isRatingSelected = rating !== null;

  const isValid = isNameValid && isMessageValid && isRatingSelected;

  setSubmitState(isValid);
};

const onEscKeyPress = e => {
  if (e.key === 'Escape') closeModal();
};

const openModal = () => {
  refs.modal.classList.remove('is-hidden');
  refs.body.style.overflow = 'hidden';

  document.addEventListener('keydown', onEscKeyPress);
  validateForm();
};

openModal();

const closeModal = () => {
  refs.modal.classList.add('is-hidden');
  refs.body.style.overflow = '';
  document.removeEventListener('keydown', onEscKeyPress);

  refs.form.reset();
  validateForm();
};

refs.form.addEventListener('input', validateForm);
refs.form.addEventListener('change', validateForm);

refs.closeModalBtn.addEventListener('click', closeModal);

refs.modal.addEventListener('click', e => {
  if (e.target === refs.modal) closeModal();
});

validateForm();

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
    name: formData.get('name').trim(),
    rating: Number(formData.get('rating')),
    descr: formData.get('message').trim(),
  };

  try {
    const response = await fetch(
      'https://sound-wave.b.goit.study/api/feedbacks',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorResult = await response.json();
      throw new Error(errorResult.message || 'Something went wrong.');
    }

    iziToast.success({
      title: 'Success',
      message: 'Thank you for your feedback!',
      position: 'topRight',
    });

    closeModal();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  }
});
