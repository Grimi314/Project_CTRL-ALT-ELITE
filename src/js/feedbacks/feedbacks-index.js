import iziToast from 'izitoast';
import { getDatoFromApi } from '../axios/get-api';
import { renderFeedbacks } from './feedbacks-render';
import { initSwiper } from './feedbacks-swiper';
import { openModal } from '../other-section/submit-feedback';

const openFeedbackModalBtn = document.querySelector(
  '.button-section-feedbacks'
);

openFeedbackModalBtn.addEventListener('click', openModal);

const response = getDatoFromApi('/feedbacks', 'limit=10&page=1')
  .then(response => {
    renderFeedbacks(response.data.data);
    initSwiper();
  })
  .catch(error => {
    iziToast.error(error);
  });
