import{a as A,i as m,S as K,N as V,P as W}from"./assets/vendor-CVfBIjXf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function x(e,t){return A.get(`https://sound-wave.b.goit.study/api${e}?${t}`)}const G={artists_list:"/artists"};async function J(e=1,t=8){const n=`page=${e}&limit=${t}`;return(await x(G.artists_list,n)).data}const l="/Project_CTRL-ALT-ELITE/assets/icon-Bk7T_pYb.svg",M=document.querySelector(".artists-list"),U="https://placehold.co/640x393";function Q(e){const t=e.map(n=>{const{_id:a,strArtist:s,strBiographyEN:r,strArtistThumb:d,genres:w=[]}=n,L=w.map(k=>`<li class="artists-genres-item">${k}</li>`).join("");return`<li class="artists-card-item">
          <img class="artists-image" src="${d||U}" alt="${s}" />
          <ul class="artists-genres-list">
            ${L}
          </ul>
          <p class="artists-name">${s}</p>
          <p class="artists-information">
            ${r}
          </p>
          <button class="artists-learn-more-card-btn open-artist-modal" data-artist-id="${a}">
            Learn More
            <svg class="caret-right-icon" width="8" height="16">
              <use href="${l}#icon-button-artists"></use>
            </svg>
          </button>
        </li>`}).join("");M.insertAdjacentHTML("beforeend",t),setTimeout(()=>{M.querySelectorAll(".artists-information").forEach(X)},0)}function X(e){const t=e.dataset.fulltext||e.textContent.trim();if(e.dataset.fulltext=t,e.textContent=t,e.scrollHeight<=e.clientHeight)return;const n=t.split(" ");for(;n.length&&e.scrollHeight>e.clientHeight;)n.pop(),e.textContent=n.join(" ")+"..."}let B=null;const Z=document.querySelector("[data-modal]");function ee(e){const t=e.target.closest(".artists-learn-more-card-btn");t&&(B=t.dataset.artistId,se())}function te(){return B}function se(){Z.classList.remove("is-hidden")}async function ne(e){if(!e)throw new Error("Oops...something wrong :(");const{data:t}=await A.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`);return t}async function ae(e){const{genres:t=[],albumsList:n=[],strArtist:a="Unknown artist",strArtistThumb:s="",strBiographyEN:r="",strGender:d="-",strCountry:w="-",intMembers:L="-",intFormedYear:k="-",intDiedYear:O=null}=await ne(e),H=O??"present";function D(c){if(!c||c===0||c==="0")return"—";const u=parseInt(c),S=Math.floor(u/6e4).toString().padStart(2,"0"),z=Math.floor(u%6e4/1e3).toString().padStart(2,"0");return`${S}:${z}`}const R=t.map(c=>`<div data-genres class="section-modal-genres">${c}</div>`).join(""),Y=c=>(c??[]).map(u=>{const S=u.movie?`
          <a data-item-icon-linc href="${u.movie}" class="container-list-item-span-link" target="_blank" rel="noopener noreferrer">
            <svg class="close-svg" width="24" height="24">
                <use href="/img/icon.svg#icon-Youtube"></use>
            </svg>
          </a>`:"";return`
          <li class="section-modal-albume-container-list-item">
          <span data-item-nane class="container-list-item-span">${u.strTrack??"—"}</span>
          <span data-item-time class="container-list-item-span">${D(u.intDuration)}</span>${S}
          </li>
    `}).join(""),_=n.map(c=>`
        <div data-albume-container class="section-modal-albume-container">
          <h3 data-albume-title class="section-modal-albume-container-title">${c.strAlbum??"-"}</h3>

          <ul class="section-modal-albume-container-list">
            <li class="section-modal-albume-container-list-item-selrct">
              <span class="container-list-item-selrct-span">Track</span>
              <span class="container-list-item-selrct-span">Time</span>
              <span class="container-list-item-selrct-span">Link</span>
            </li>
            ${Y(c.tracks)}
          </ul>
    </div>
    `).join(""),i=document.querySelector(".modal-template").content.cloneNode(!0);return i.querySelector("[data-artist-title]").textContent=a,i.querySelector("[data-sex]").textContent=d,i.querySelector("[data-members]").textContent=L,i.querySelector("[data-country]").textContent=w,i.querySelector("[data-biography]").textContent=r,i.querySelector("[data-years]").textContent=`${k}-${H}`,i.querySelector("[data-section-modal-img]").src=s,i.querySelector("[data-section-modal-img]").alt=a,i.querySelector("[data-genres]").innerHTML=R,i.querySelector("[data-albums-wrapper]").innerHTML=_,i}const v=document.querySelector(".backdrop"),T=document.querySelector(".js-modal-content"),C=document.querySelector("[data-modal-loader]"),N=document.querySelector(".modal-close");function P(e){e.key==="Escape"&&y()}function j(e){e.target===v&&y()}function re(){N.addEventListener("click",y),document.addEventListener("keydown",P),v.addEventListener("click",j)}function y(){v.classList.add("is-hidden"),N.removeEventListener("click",y),document.removeEventListener("keydown",P),v.removeEventListener("click",j),p.clearModalContent()}const p={clearModalContent(){T.innerHTML=""},renderModal(e){this.clearModalContent(),T.appendChild(e)},showLoader(){C.classList.remove("is-hidden")},hideLoader(){C.classList.add("is-hidden")},showError(){m.error({message:"Oops...something wrong :(",position:"topRight"})}};async function oe(e){try{p.showLoader(),re();const t=await ae(e);p.renderModal(t)}catch{p.showError()}finally{p.hideLoader()}}const E=8;let g=1;const f=document.querySelector(".artists-load-more-btn"),$=document.querySelector("[data-artists-loader]");M.addEventListener("click",ie);f.addEventListener("click",ce);function ie(e){ee(e);const t=te();t&&oe(t)}async function F(e,t){try{const n=await J(e,t);return Q(n.artists),n.artists||[]}catch{return m.error({message:"Failed to load artists. Please try again."}),[]}}F(g,E);async function ce(){g+=1,f.classList.add("artists-visually-hidden"),$.classList.remove("is-hidden");try{const e=await F(g,E);if($.classList.add("is-hidden"),e.length===0){m.warning({message:"You've load all available artists.There're nomore results."});return}if(e.length<E){m.warning({message:`You've load last ${e.length} artists`});return}f.classList.remove("artists-visually-hidden")}catch{g-=1,$.classList.add("is-hidden"),m.error({message:"Something went wrong while trying to load artists. Please try again"}),f.classList.remove("artists-visually-hidden")}}const I=document.querySelector(".swiper-wrapper");document.querySelector(".button-section-feedbacks");const le=document.querySelector("[data-modal-feedback]");function de(e=[]){const t=e.map(n=>{const{descr:a,name:s,rating:r}=n;return`
        <div class="swiper-slide">
          <div class="section-feedback-content">
            <div class="rating large value-${Math.round(r)}">
              <div class="star-container">
                <div class="star">
                  <svg class="star-empty">
                    <use href="${l}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${l}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${l}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${l}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${l}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${l}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${l}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${l}#icon-icon-star"></use>
                  </svg>
                </div>
                <div class="star">
                  <svg class="star-empty">
                    <use href="${l}#icon-icon-star"></use>
                  </svg>
                  <svg class="star-filled">
                    <use href="${l}#icon-icon-star"></use>
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
        `});ue(),I.insertAdjacentHTML("beforeend",t.join(""))}function ue(){I.innerHTML=""}function me(e){le.classList.toggle(".is-hidden")}function pe(){new K(".swiper",{modules:[V,W],direction:"horizontal",pagination:{el:".swiper-pagination",type:"custom",renderCustom(e,t,n){const a=t===1,s=t===n;return`
        <span class="swiper-pagination-bullet ${a?"swiper-pagination-bullet-active":""}"></span>
        <span class="swiper-pagination-bullet ${!a&&!s?"swiper-pagination-bullet-active":""}"></span>
        <span class="swiper-pagination-bullet ${s?"swiper-pagination-bullet-active":""}"></span>
      `}},Navigation:{nextEl:".swiper-button.next",prevEl:".swiper-button.prev"}})}const ge=document.querySelector(".button-section-feedbacks");ge.addEventListener("click",me);x("/feedbacks","limit=10&page=1").then(e=>{de(e.data.data),pe()});const fe=document.querySelector(".header-burger-btn"),q=document.querySelector(".mobile-menu"),ve=document.querySelector(".mobile-menu .mobile-menu-close-btn"),ye=document.querySelectorAll(".mobile-menu-item");fe.addEventListener("click",()=>{q.classList.add("is-open"),document.body.classList.add("mobile-menu-open")});ve.addEventListener("click",()=>{q.classList.remove("is-open"),document.body.classList.remove("mobile-menu-open")});ye.forEach(e=>{e.addEventListener("click",()=>{q.classList.remove("is-open"),document.body.classList.remove("mobile-menu-open")})});const o={closeModalBtn:document.querySelector(".feedbacks-modal-btn"),modal:document.querySelector(".feedbacks-modal"),form:document.querySelector(".feedbacks-modal-form"),submitBtn:document.querySelector(".feedback-modal-submit"),body:document.body},he=e=>{o.submitBtn.disabled=!e,o.submitBtn.style.opacity=e?"1":"0.5",o.submitBtn.style.cursor=e?"pointer":"not-allowed"},h=()=>{if(!o.form&&!o.submitBtn)return;const e=o.form.querySelector('input[name="name"]'),t=o.form.querySelector('textarea[name="message"]'),n=o.form.querySelector('input[name="rating"]:checked'),a=e&&e.value.trim()!=="",s=t&&t.value.trim()!=="";he(a&&s&&n!==null)},be=e=>{e.key==="Escape"&&b()},b=()=>{o.modal.classList.add("is-hidden"),o.body.style.overflow="",window.removeEventListener("keydown",be),o.form.reset(),h()};o.form.addEventListener("input",h);o.form.addEventListener("change",h);o.closeModalBtn.addEventListener("click",b);o.modal.addEventListener("click",e=>{e.target===o.modal&&b()});h();o.form.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(e.currentTarget),n={name:t.get("name").trim(),rating:Number(t.get("rating")),descr:t.get("message").trim()};try{const a=await fetch("https://sound-wave.b.goit.study/api/feedbacks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!a.ok){const s=await a.json();throw new Error(s.message||"Something went wrong.")}m.success({title:"Success",message:"Thank you for your feedback!",position:"topRight"}),b()}catch(a){m.error({title:"Error",message:a.message,position:"topRight"})}});
//# sourceMappingURL=index.js.map
