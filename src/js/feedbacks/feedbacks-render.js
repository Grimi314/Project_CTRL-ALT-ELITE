const swiperWrapper = document.querySelector('.swiper-wrapper');

const openFeedbackModalBtn = document.querySelector(
  '.button-section-feedbacks'
);
const feedbackModal = document.querySelector('[data-modal-feedback]');

openFeedbackModalBtn.addEventListener('click', openFeedbackModal);

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
                    <use href="/img/icon.svg#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="/img/icon.svg#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="/img/icon.svg#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="/img/icon.svg#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="/img/icon.svg#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="/img/icon.svg#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="/img/icon.svg#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="/img/icon.svg#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="/img/icon.svg#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="/img/icon.svg#icon-icon-star"></use>
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

  swiperWrapper.insertAdjacentHTML('beforeend', markup.join(''));
}

function clearFeedbacksWrapper() {
  swiperWrapper.innerHTML = '';
}

function openFeedbackModal(event) {
  feedbackModal.classList.add('.is-hidden');
}
