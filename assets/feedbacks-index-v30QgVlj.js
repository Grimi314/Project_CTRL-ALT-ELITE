import{S as o,N as l,P as d,i as p}from"./vendor-C97g7yHx.js";import{i as s,g as v}from"../index.js";import{openModal as u}from"./submit-feedback-iQy5cpP7.js";const c=document.querySelector(".swiper-wrapper"),g=document.querySelector(".swiper .loader-wrapper .loader");function f(e=[]){const a=e.map(n=>{const{descr:i,name:t,rating:r}=n;return`
        <div class="swiper-slide">
          <div class="section-feedback-content">
            <div class="rating large value-${Math.round(r)}">
              <div class="star-container">
                <div class="star">
                  <svg class="star-empty">
                    <use href="${s}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${s}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${s}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${s}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${s}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${s}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${s}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${s}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${s}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${s}#icon-icon-star"></use>
                  </svg>
                </div>
              </div>
            </div>
            <p data-feedback-text class="feedbacks-text">
              ${i}
            </p>
            <p data-feedback-name class="feedback-name">${t}</p>
          </div>
        </div>
        `});m(),b(),c.insertAdjacentHTML("beforeend",a.join(""))}function m(){c.innerHTML=""}function b(){g.style.display="none"}function w(){new o(".swiper",{modules:[l,d],direction:"horizontal",pagination:{el:".swiper-pagination",type:"custom",renderCustom(e,a,n){const i=a===1,t=a===n;return`
        <span class="swiper-pagination-bullet ${i?"swiper-pagination-bullet-active":""}"></span>
        <span class="swiper-pagination-bullet ${!i&&!t?"swiper-pagination-bullet-active":""}"></span>
        <span class="swiper-pagination-bullet ${t?"swiper-pagination-bullet-active":""}"></span>
      `}},navigation:{nextEl:".swiper-button.next",prevEl:".swiper-button.prev"}})}const h=document.querySelector(".button-section-feedbacks");h.addEventListener("click",u);v("/feedbacks","limit=10&page=1").then(e=>{f(e.data.data),w()}).catch(e=>{p.error(e)});
//# sourceMappingURL=feedbacks-index-v30QgVlj.js.map
