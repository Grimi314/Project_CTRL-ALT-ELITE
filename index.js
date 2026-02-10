import{a as A,i as u,S as V,N as W,P as G}from"./assets/vendor-C97g7yHx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function x(e,t){return A.get(`https://sound-wave.b.goit.study/api${e}?${t}`)}const J={artists_list:"/artists"};async function U(e=1,t=8){const n=`page=${e}&limit=${t}`;return(await x(J.artists_list,n)).data}const i="/Project_CTRL-ALT-ELITE/assets/icon-Bk7T_pYb.svg",E=document.querySelector(".artists-list"),Q="https://placehold.co/640x393";function X(e){const t=e.map(n=>{const{_id:a,strArtist:s,strBiographyEN:r,strArtistThumb:d,genres:L=[]}=n,w=L.map(k=>`<li class="artists-genres-item">${k}</li>`).join("");return`<li class="artists-card-item">
          <img class="artists-image" src="${d||Q}" alt="${s}" />
          <ul class="artists-genres-list">
            ${w}
          </ul>
          <p class="artists-name">${s}</p>
          <p class="artists-information">
            ${r}
          </p>
          <button class="artists-learn-more-card-btn open-artist-modal" data-artist-id="${a}">
            Learn More
            <svg class="caret-right-icon" width="8" height="16">
              <use href="${i}#icon-button-artists"></use>
            </svg>
          </button>
        </li>`}).join("");E.insertAdjacentHTML("beforeend",t),setTimeout(()=>{E.querySelectorAll(".artists-information").forEach(Z)},0)}function Z(e){const t=e.dataset.fulltext||e.textContent.trim();if(e.dataset.fulltext=t,e.textContent=t,e.scrollHeight<=e.clientHeight)return;const n=t.split(" ");for(;n.length&&e.scrollHeight>e.clientHeight;)n.pop(),e.textContent=n.join(" ")+"..."}let B=null;const ee=document.querySelector("[data-modal]");function te(e){const t=e.target.closest(".artists-learn-more-card-btn");t&&(B=t.dataset.artistId,ne())}function se(){return B}function ne(){ee.classList.remove("is-hidden")}async function ae(e){if(!e)throw new Error("Oops...something wrong :(");const{data:t}=await A.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`);return t}async function re(e){const{genres:t=[],albumsList:n=[],strArtist:a="Unknown artist",strArtistThumb:s="",strBiographyEN:r="",strGender:d="-",strCountry:L="-",intMembers:w="-",intFormedYear:k="-",intDiedYear:H=null}=await ae(e),D=H??"present";function R(l){if(!l||l===0||l==="0")return"—";const m=parseInt(l),S=Math.floor(m/6e4).toString().padStart(2,"0"),K=Math.floor(m%6e4/1e3).toString().padStart(2,"0");return`${S}:${K}`}const Y=t.map(l=>`<div data-genres class="section-modal-genres">${l}</div>`).join(""),_=l=>(l??[]).map(m=>{const S=m.movie?`
          <a data-item-icon-linc href="${m.movie}" class="container-list-item-span-link" target="_blank" rel="noopener noreferrer">
            <svg class="close-svg" width="24" height="24">
                <use href="${i}#icon-Youtube"></use>
            </svg>
          </a>`:"";return`
          <li class="section-modal-albume-container-list-item">
          <span data-item-nane class="container-list-item-span">${m.strTrack??"—"}</span>
          <span data-item-time class="container-list-item-span">${R(m.intDuration)}</span>${S}
          </li>
    `}).join(""),z=n.map(l=>`
        <div data-albume-container class="section-modal-albume-container">
          <h3 data-albume-title class="section-modal-albume-container-title">${l.strAlbum??"-"}</h3>

          <ul class="section-modal-albume-container-list">
            <li class="section-modal-albume-container-list-item-selrct">
              <span class="container-list-item-selrct-span">Track</span>
              <span class="container-list-item-selrct-span">Time</span>
              <span class="container-list-item-selrct-span">Link</span>
            </li>
            ${_(l.tracks)}
          </ul>
    </div>
    `).join(""),c=document.querySelector(".modal-template").content.cloneNode(!0);return c.querySelector("[data-artist-title]").textContent=a,c.querySelector("[data-sex]").textContent=d,c.querySelector("[data-members]").textContent=w,c.querySelector("[data-country]").textContent=L,c.querySelector("[data-biography]").textContent=r,c.querySelector("[data-years]").textContent=`${k}-${D}`,c.querySelector("[data-section-modal-img]").src=s,c.querySelector("[data-section-modal-img]").alt=a,c.querySelector("[data-genres]").innerHTML=Y,c.querySelector("[data-albums-wrapper]").innerHTML=z,c}const y=document.querySelector(".backdrop"),T=document.querySelector(".js-modal-content"),C=document.querySelector("[data-modal-loader]"),N=document.querySelector(".modal-close");function P(e){e.key==="Escape"&&h()}function j(e){e.target===y&&h()}function oe(){N.addEventListener("click",h),document.addEventListener("keydown",P),y.addEventListener("click",j)}function h(){y.classList.add("is-hidden"),N.removeEventListener("click",h),document.removeEventListener("keydown",P),y.removeEventListener("click",j),p.clearModalContent()}const p={clearModalContent(){T.innerHTML=""},renderModal(e){this.clearModalContent(),T.appendChild(e)},showLoader(){C.classList.remove("is-hidden")},hideLoader(){C.classList.add("is-hidden")},showError(){u.error({message:"Oops...something wrong :(",position:"topRight"})}};async function ie(e){try{p.showLoader(),oe();const t=await re(e);p.renderModal(t)}catch{p.showError()}finally{p.hideLoader()}}const M=8;let f=1;const v=document.querySelector(".artists-load-more-btn"),$=document.querySelector("[data-artists-loader]");E.addEventListener("click",ce);v.addEventListener("click",le);function ce(e){te(e);const t=se();t&&ie(t)}async function I(e,t){try{const n=await U(e,t);return X(n.artists),n.artists||[]}catch{return u.error({message:"Failed to load artists. Please try again."}),[]}}I(f,M);async function le(){f+=1,v.classList.add("artists-visually-hidden"),$.classList.remove("is-hidden");try{const e=await I(f,M);if($.classList.add("is-hidden"),e.length===0){u.warning({message:"You've load all available artists.There're nomore results."});return}if(e.length<M){u.warning({message:`You've load last ${e.length} artists`});return}v.classList.remove("artists-visually-hidden")}catch{f-=1,$.classList.add("is-hidden"),u.error({message:"Something went wrong while trying to load artists. Please try again"}),v.classList.remove("artists-visually-hidden")}}const O=document.querySelector(".swiper-wrapper");document.querySelector("[data-modal-feedback]");function de(e=[]){const t=e.map(n=>{const{descr:a,name:s,rating:r}=n;return`
        <div class="swiper-slide">
          <div class="section-feedback-content">
            <div class="rating large value-${Math.round(r)}">
              <div class="star-container">
                <div class="star">
                  <svg class="star-empty">
                    <use href="${i}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${i}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${i}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${i}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${i}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${i}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${i}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${i}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${i}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${i}#icon-icon-star"></use>
                  </svg>
                </div>
              </div>
            </div>
            <p data-feedback-text class="feedbacks-text">
              ${a}
            </p>
            <p data-feedback-name class="feedback-name">${s}</p>
          </div>
        </div>
        `});ue(),me(),O.insertAdjacentHTML("beforeend",t.join(""))}function ue(){O.innerHTML=""}function me(){feedbacksLoader.style.display="none"}function pe(){new V(".swiper",{modules:[W,G],direction:"horizontal",pagination:{el:".swiper-pagination",type:"custom",renderCustom(e,t,n){const a=t===1,s=t===n;return`
        <span class="swiper-pagination-bullet ${a?"swiper-pagination-bullet-active":""}"></span>
        <span class="swiper-pagination-bullet ${!a&&!s?"swiper-pagination-bullet-active":""}"></span>
        <span class="swiper-pagination-bullet ${s?"swiper-pagination-bullet-active":""}"></span>
      `}},navigation:{nextEl:".swiper-button.next",prevEl:".swiper-button.prev"}})}const o={closeModalBtn:document.querySelector(".feedbacks-modal-btn"),modal:document.querySelector(".feedbacks-modal"),form:document.querySelector(".feedbacks-modal-form"),submitBtn:document.querySelector(".feedback-modal-submit"),body:document.body},ge=e=>{o.submitBtn.disabled=!e,o.submitBtn.style.opacity=e?"1":"0.5",o.submitBtn.style.cursor=e?"pointer":"not-allowed"},g=()=>{if(!o.form&&!o.submitBtn)return;const e=o.form.querySelector('input[name="name"]'),t=o.form.querySelector('textarea[name="message"]'),n=o.form.querySelector('input[name="rating"]:checked'),a=e&&e.value.trim()!=="",s=t&&t.value.trim()!=="";ge(a&&s&&n!==null)},F=e=>{e.key==="Escape"&&b()},fe=()=>{o.modal.classList.remove("is-hidden"),o.body.style.overflow="hidden",document.addEventListener("keydown",F),g()},b=()=>{o.modal.classList.add("is-hidden"),o.body.style.overflow="",document.removeEventListener("keydown",F),o.form.reset(),g()};o.form.addEventListener("input",g);o.form.addEventListener("change",g);o.closeModalBtn.addEventListener("click",b);o.modal.addEventListener("click",e=>{e.target===o.modal&&b()});g();o.form.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(e.currentTarget),n={name:t.get("name").trim(),rating:Number(t.get("rating")),descr:t.get("message").trim()};try{const a=await fetch("https://sound-wave.b.goit.study/api/feedbacks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!a.ok){const s=await a.json();throw new Error(s.message||"Something went wrong.")}u.success({title:"Success",message:"Thank you for your feedback!",position:"topRight"}),b()}catch(a){u.error({title:"Error",message:a.message,position:"topRight"})}});const ve=document.querySelector(".button-section-feedbacks");ve.addEventListener("click",fe);x("/feedbacks","limit=10&page=1").then(e=>{de(e.data.data),pe()}).catch(e=>{u.error(e)});const ye=document.querySelector(".header-burger-btn"),q=document.querySelector(".mobile-menu"),he=document.querySelector(".mobile-menu .mobile-menu-close-btn"),be=document.querySelectorAll(".mobile-menu-item");ye.addEventListener("click",()=>{q.classList.add("is-open"),document.body.classList.add("mobile-menu-open")});he.addEventListener("click",()=>{q.classList.remove("is-open"),document.body.classList.remove("mobile-menu-open")});be.forEach(e=>{e.addEventListener("click",()=>{q.classList.remove("is-open"),document.body.classList.remove("mobile-menu-open")})});
//# sourceMappingURL=index.js.map
