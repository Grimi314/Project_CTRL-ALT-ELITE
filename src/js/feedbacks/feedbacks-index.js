import { getDatoFromApi } from '../axios/get-api';
import { renderFeedbacks } from './feedbacks-render';
import { initSwiper } from './feedbacks-swiper';

const response = await getDatoFromApi('/feedbacks', 'limit=3&page=1');
console.log(response.data);
renderFeedbacks(response.data.data);
initSwiper();
