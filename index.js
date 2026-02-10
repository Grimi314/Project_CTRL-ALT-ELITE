import{a as P,i as u,S as V,N as W,P as G}from"./assets/vendor-C97g7yHx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function j(e,t){return P.get(`https://sound-wave.b.goit.study/api${e}?${t}`)}const J={artists_list:"/artists"};async function U(e=1,t=8){const n=`page=${e}&limit=${t}`;return(await j(J.artists_list,n)).data}const i="/Project_CTRL-ALT-ELITE/assets/icon-Bk7T_pYb.svg",f=document.querySelector(".artists-list"),Q="https://placehold.co/640x393";function X(e){const t=f.querySelectorAll(".artists-card-item").length,n=e.map((a,s)=>{const{_id:r,strArtist:d,strBiographyEN:L,strArtistThumb:S,genres:k=[]}=a,$=k.map(M=>`<li class="artists-genres-item">${M}</li>`).join(""),E=t+s<4?"eager":"lazy";return`<li class="artists-card-item">
          <img class="artists-image" src="${S||Q}" alt="${d}" loading="${E}"
        decoding="async"/>
          <ul class="artists-genres-list">
            ${$}
          </ul>
          <p class="artists-name">${d}</p>
          <p class="artists-information">
            ${L}
          </p>
          <button class="artists-learn-more-card-btn open-artist-modal" data-artist-id="${r}">
            Learn More
            <svg class="caret-right-icon" width="8" height="16">
              <use href="${i}#icon-button-artists"></use>
            </svg>
          </button>
        </li>`}).join("");f.insertAdjacentHTML("beforeend",n),setTimeout(()=>{f.querySelectorAll(".artists-information").forEach(Z)},0)}function Z(e){const t=e.dataset.fulltext||e.textContent.trim();if(e.dataset.fulltext=t,e.textContent=t,e.scrollHeight<=e.clientHeight)return;const n=t.split(" ");for(;n.length&&e.scrollHeight>e.clientHeight;)n.pop(),e.textContent=n.join(" ")+"..."}let I=null;const ee=document.querySelector("[data-modal]");function te(e){const t=e.target.closest(".artists-learn-more-card-btn");t&&(I=t.dataset.artistId,ne())}function se(){return I}function ne(){ee.classList.remove("is-hidden")}async function ae(e){if(!e)throw new Error("Oops...something wrong :(");const{data:t}=await P.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`);return t}async function re(e){const{genres:t=[],albumsList:n=[],strArtist:a="Unknown artist",strArtistThumb:s="",strBiographyEN:r="",strGender:d="-",strCountry:L="-",intMembers:S="-",intFormedYear:k="-",intDiedYear:$=null}=await ae(e),x=$??"present";function E(l){if(!l||l===0||l==="0")return"—";const m=parseInt(l),q=Math.floor(m/6e4).toString().padStart(2,"0"),K=Math.floor(m%6e4/1e3).toString().padStart(2,"0");return`${q}:${K}`}const M=t.map(l=>`<div data-genres class="section-modal-genres">${l}</div>`).join(""),_=l=>(l??[]).map(m=>{const q=m.movie?`
          <a data-item-icon-linc href="${m.movie}" class="container-list-item-span-link" target="_blank" rel="noopener noreferrer">
            <svg class="close-svg" width="24" height="24">
                <use href="${i}#icon-Youtube"></use>
            </svg>
          </a>`:"";return`
          <li class="section-modal-albume-container-list-item">
          <span data-item-nane class="container-list-item-span">${m.strTrack??"—"}</span>
          <span data-item-time class="container-list-item-span">${E(m.intDuration)}</span>${q}
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
    `).join(""),c=document.querySelector(".modal-template").content.cloneNode(!0);return c.querySelector("[data-artist-title]").textContent=a,c.querySelector("[data-sex]").textContent=d,c.querySelector("[data-members]").textContent=S,c.querySelector("[data-country]").textContent=L,c.querySelector("[data-biography]").textContent=r,c.querySelector("[data-years]").textContent=`${k}-${x}`,c.querySelector("[data-section-modal-img]").src=s,c.querySelector("[data-section-modal-img]").alt=a,c.querySelector("[data-genres]").innerHTML=M,c.querySelector("[data-albums-wrapper]").innerHTML=z,c}const h=document.querySelector(".backdrop"),B=document.querySelector(".js-modal-content"),N=document.querySelector("[data-modal-loader]"),O=document.querySelector(".modal-close");function F(e){e.key==="Escape"&&b()}function H(e){e.target===h&&b()}function oe(){O.addEventListener("click",b),document.addEventListener("keydown",F),h.addEventListener("click",H)}function b(){h.classList.add("is-hidden"),O.removeEventListener("click",b),document.removeEventListener("keydown",F),h.removeEventListener("click",H),p.clearModalContent()}const p={clearModalContent(){B.innerHTML=""},renderModal(e){this.clearModalContent(),B.appendChild(e)},showLoader(){N.classList.remove("is-hidden")},hideLoader(){N.classList.add("is-hidden")},showError(){u.error({message:"Oops...something wrong :(",position:"topRight"})}};async function ie(e){try{p.showLoader(),oe();const t=await re(e);p.renderModal(t)}catch{p.showError()}finally{p.hideLoader()}}const A=8;let y=1;const v=document.querySelector(".artists-load-more-btn"),T=document.querySelector("[data-artists-loader]");f.addEventListener("click",ce);v.addEventListener("click",le);function ce(e){te(e);const t=se();t&&ie(t)}async function D(e,t){try{const n=await U(e,t);return X(n.artists),n.artists||[]}catch{return u.error({message:"Failed to load artists. Please try again."}),[]}}D(y,A);async function le(){y+=1,v.classList.add("artists-visually-hidden"),T.classList.remove("is-hidden");try{const e=await D(y,A);if(T.classList.add("is-hidden"),e.length===0){u.warning({message:"You've load all available artists.There're nomore results."});return}if(e.length<A){u.warning({message:`You've load last ${e.length} artists`});return}v.classList.remove("artists-visually-hidden")}catch{y-=1,T.classList.add("is-hidden"),u.error({message:"Something went wrong while trying to load artists. Please try again"}),v.classList.remove("artists-visually-hidden")}}const R=document.querySelector(".swiper-wrapper"),de=document.querySelector(".swiper .loader-wrapper .loader");function ue(e=[]){const t=e.map(n=>{const{descr:a,name:s,rating:r}=n;return`
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
        `});me(),pe(),R.insertAdjacentHTML("beforeend",t.join(""))}function me(){R.innerHTML=""}function pe(){de.style.display="none"}function ge(){new V(".swiper",{modules:[W,G],direction:"horizontal",pagination:{el:".swiper-pagination",type:"custom",renderCustom(e,t,n){const a=t===1,s=t===n;return`
        <span class="swiper-pagination-bullet ${a?"swiper-pagination-bullet-active":""}"></span>
        <span class="swiper-pagination-bullet ${!a&&!s?"swiper-pagination-bullet-active":""}"></span>
        <span class="swiper-pagination-bullet ${s?"swiper-pagination-bullet-active":""}"></span>
      `}},navigation:{nextEl:".swiper-button.next",prevEl:".swiper-button.prev"}})}const o={closeModalBtn:document.querySelector(".feedbacks-modal-btn"),modal:document.querySelector(".feedbacks-modal"),form:document.querySelector(".feedbacks-modal-form"),submitBtn:document.querySelector(".feedback-modal-submit"),body:document.body},fe=e=>{o.submitBtn.disabled=!e,o.submitBtn.style.opacity=e?"1":"0.5",o.submitBtn.style.cursor=e?"pointer":"not-allowed"},g=()=>{if(!o.form&&!o.submitBtn)return;const e=o.form.querySelector('input[name="name"]'),t=o.form.querySelector('textarea[name="message"]'),n=o.form.querySelector('input[name="rating"]:checked'),a=e&&e.value.trim()!=="",s=t&&t.value.trim()!=="";fe(a&&s&&n!==null)},Y=e=>{e.key==="Escape"&&w()},ye=()=>{o.modal.classList.remove("is-hidden"),o.body.style.overflow="hidden",document.addEventListener("keydown",Y),g()},w=()=>{o.modal.classList.add("is-hidden"),o.body.style.overflow="",document.removeEventListener("keydown",Y),o.form.reset(),g()};o.form.addEventListener("input",g);o.form.addEventListener("change",g);o.closeModalBtn.addEventListener("click",w);o.modal.addEventListener("click",e=>{e.target===o.modal&&w()});g();o.form.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(e.currentTarget),n={name:t.get("name").trim(),rating:Number(t.get("rating")),descr:t.get("message").trim()};try{const a=await fetch("https://sound-wave.b.goit.study/api/feedbacks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!a.ok){const s=await a.json();throw new Error(s.message||"Something went wrong.")}u.success({title:"Success",message:"Thank you for your feedback!",position:"topRight"}),w()}catch(a){u.error({title:"Error",message:a.message,position:"topRight"})}});const ve=document.querySelector(".button-section-feedbacks");ve.addEventListener("click",ye);j("/feedbacks","limit=10&page=1").then(e=>{ue(e.data.data),ge()}).catch(e=>{u.error(e)});const he=document.querySelector(".header-burger-btn"),C=document.querySelector(".mobile-menu"),be=document.querySelector(".mobile-menu .mobile-menu-close-btn"),we=document.querySelectorAll(".mobile-menu-item");he.addEventListener("click",()=>{C.classList.add("is-open"),document.body.classList.add("mobile-menu-open")});be.addEventListener("click",()=>{C.classList.remove("is-open"),document.body.classList.remove("mobile-menu-open")});we.forEach(e=>{e.addEventListener("click",()=>{C.classList.remove("is-open"),document.body.classList.remove("mobile-menu-open")})});
//# sourceMappingURL=index.js.map
