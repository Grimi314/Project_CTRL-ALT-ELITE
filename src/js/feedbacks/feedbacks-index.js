import { getDatoFromApi } from '../axios/get-api';
import { renderFeedbacks, openFeedbackModal } from './feedbacks-render';
import { initSwiper } from './feedbacks-swiper';

const openFeedbackModalBtn = document.querySelector(
  '.button-section-feedbacks'
);

openFeedbackModalBtn.addEventListener('click', openFeedbackModal);

const response = getDatoFromApi('/feedbacks', 'limit=10&page=1').then(
  response => {
    renderFeedbacks(response.data.data);
    initSwiper();
  }
);
