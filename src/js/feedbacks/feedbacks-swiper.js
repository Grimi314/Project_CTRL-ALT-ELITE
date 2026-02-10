import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';

export function initSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom(swiper, current, total) {
        const isFirst = current === 1;
        const isLast = current === total;
        const isMiddle = !isFirst && !isLast;

        return `
        <span class="swiper-pagination-bullet ${isFirst ? 'swiper-pagination-bullet-active' : ''}"></span>
        <span class="swiper-pagination-bullet ${isMiddle ? 'swiper-pagination-bullet-active' : ''}"></span>
        <span class="swiper-pagination-bullet ${isLast ? 'swiper-pagination-bullet-active' : ''}"></span>
      `;
      },
    },
    navigation: {
      nextEl: '.swiper-button.next',
      prevEl: '.swiper-button.prev',
    },
  });
}
