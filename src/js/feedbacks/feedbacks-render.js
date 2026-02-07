const swiperWrapper = document.querySelector('.swiper-wrapper');

export function renderFeedbacks(feedbacks = []) {
  const markup = feedbacks.map(feedback => {
    const { descr, name, rating } = feedback;

    return `
        <div class="swiper-slide">
        <span>${Math.round(rating)}</span>
        <h3>${descr}</h3>
        <span>${name}</span>
        </div>
        `;
  });
  clearFeedbacksWrapper();

  swiperWrapper.insertAdjacentHTML('beforeend', markup.join(''));
}

function clearFeedbacksWrapper() {
  swiperWrapper.innerHTML = '';
}
