const swiperWrapper = document.querySelector('.swiper-wrapper');

import iconsPathStar from '../../img/icon.svg';
const feedbacksLoader = document.querySelector(
  '.swiper .loader-wrapper .loader'
);

export function renderFeedbacks(feedbacks = []) {
  const markup = feedbacks.map(feedback => {
    const { descr, name, rating } = feedback;

    return `
        <div class="swiper-slide">
          <div class="section-feedback-content">
            <div class="rating large value-${Math.round(rating)}">
              <div class="star-container">
                <div class="star">
                  <svg class="star-empty">
                    <use href="${iconsPathStar}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${iconsPathStar}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${iconsPathStar}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${iconsPathStar}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${iconsPathStar}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${iconsPathStar}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${iconsPathStar}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${iconsPathStar}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${iconsPathStar}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${iconsPathStar}#icon-icon-star"></use>
                  </svg>
                </div>
              </div>
            </div>
            <p data-feedback-text class="feedbacks-text">
              ${descr}
            </p>
            <p data-feedback-name class="feedback-name">${name}</p>
          </div>
        </div>
        `;
  });

  clearFeedbacksWrapper();
  hideLoader();

  swiperWrapper.insertAdjacentHTML('beforeend', markup.join(''));
}

function clearFeedbacksWrapper() {
  swiperWrapper.innerHTML = '';
}

export function showLoader() {
  feedbacksLoader.style.display = 'block';
}

export function hideLoader() {
  feedbacksLoader.style.display = 'none';
}
