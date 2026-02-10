import{a as x,i as u,S as z,N as K,P as V}from"./assets/vendor-CVfBIjXf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function A(e,t){return x.get(`https://sound-wave.b.goit.study/api${e}?${t}`)}const W={artists_list:"/artists"};async function G(e=1,t=8){const n=`page=${e}&limit=${t}`;return(await A(W.artists_list,n)).data}const M=document.querySelector(".artists-list"),J="https://placehold.co/640x393";function U(e){const t=e.map(n=>{const{_id:a,strArtist:s,strBiographyEN:r,strArtistThumb:l,genres:b=[]}=n,w=b.map(L=>`<li class="artists-genres-item">${L}</li>`).join("");return`<li class="artists-card-item">
          <img class="artists-image" src="${l||J}" alt="${s}" />
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
              <use href="/img/icon.svg#icon-button-artists"></use>
            </svg>
          </button>
        </li>`}).join("");M.insertAdjacentHTML("beforeend",t),setTimeout(()=>{M.querySelectorAll(".artists-information").forEach(Q)},0)}function Q(e){const t=e.dataset.fulltext||e.textContent.trim();if(e.dataset.fulltext=t,e.textContent=t,e.scrollHeight<=e.clientHeight)return;const n=t.split(" ");for(;n.length&&e.scrollHeight>e.clientHeight;)n.pop(),e.textContent=n.join(" ")+"..."}let T=null;const X=document.querySelector("[data-modal]");function Z(e){const t=e.target.closest(".artists-learn-more-card-btn");t&&(T=t.dataset.artistId,te())}function ee(){return T}function te(){X.classList.remove("is-hidden")}async function se(e){if(!e)throw new Error("Oops...something wrong :(");const{data:t}=await x.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`);return t}async function ne(e){const{genres:t=[],albumsList:n=[],strArtist:a="Unknown artist",strArtistThumb:s="",strBiographyEN:r="",strGender:l="-",strCountry:b="-",intMembers:w="-",intFormedYear:L="-",intDiedYear:O=null}=await se(e),H=O??"present";function I(c){if(!c||c===0||c==="0")return"—";const d=parseInt(c),k=Math.floor(d/6e4).toString().padStart(2,"0"),_=Math.floor(d%6e4/1e3).toString().padStart(2,"0");return`${k}:${_}`}const D=t.map(c=>`<div data-genres class="section-modal-genres">${c}</div>`).join(""),R=c=>(c??[]).map(d=>{const k=d.movie?`
          <a data-item-icon-linc href="${d.movie}" class="container-list-item-span-link" target="_blank" rel="noopener noreferrer">
            <svg class="close-svg" width="24" height="24">
                <use href="/img/icon.svg#icon-Youtube"></use>
            </svg>
          </a>`:"";return`
          <li class="section-modal-albume-container-list-item">
          <span data-item-nane class="container-list-item-span">${d.strTrack??"—"}</span>
          <span data-item-time class="container-list-item-span">${I(d.intDuration)}</span>${k}
          </li>
    `}).join(""),Y=n.map(c=>`
        <div data-albume-container class="section-modal-albume-container">
          <h3 data-albume-title class="section-modal-albume-container-title">${c.strAlbum??"-"}</h3>

          <ul class="section-modal-albume-container-list">
            <li class="section-modal-albume-container-list-item-selrct">
              <span class="container-list-item-selrct-span">Track</span>
              <span class="container-list-item-selrct-span">Time</span>
              <span class="container-list-item-selrct-span">Link</span>
            </li>
            ${R(c.tracks)}
          </ul>
    </div>
    `).join(""),i=document.querySelector(".modal-template").content.cloneNode(!0);return i.querySelector("[data-artist-title]").textContent=a,i.querySelector("[data-sex]").textContent=l,i.querySelector("[data-members]").textContent=w,i.querySelector("[data-country]").textContent=b,i.querySelector("[data-biography]").textContent=r,i.querySelector("[data-years]").textContent=`${L}-${H}`,i.querySelector("[data-section-modal-img]").src=s,i.querySelector("[data-section-modal-img]").alt=a,i.querySelector("[data-genres]").innerHTML=D,i.querySelector("[data-albums-wrapper]").innerHTML=Y,i}const f=document.querySelector(".backdrop"),$=document.querySelector(".js-modal-content"),C=document.querySelector("[data-modal-loader]"),B=document.querySelector(".modal-close");function N(e){e.key==="Escape"&&v()}function j(e){e.target===f&&v()}function ae(){B.addEventListener("click",v),document.addEventListener("keydown",N),f.addEventListener("click",j)}function v(){f.classList.add("is-hidden"),B.removeEventListener("click",v),document.removeEventListener("keydown",N),f.removeEventListener("click",j),m.clearModalContent()}const m={clearModalContent(){$.innerHTML=""},renderModal(e){this.clearModalContent(),$.appendChild(e)},showLoader(){C.classList.remove("is-hidden")},hideLoader(){C.classList.add("is-hidden")},showError(){u.error({message:"Oops...something wrong :(",position:"topRight"})}};async function re(e){try{m.showLoader(),ae();const t=await ne(e);m.renderModal(t)}catch{m.showError()}finally{m.hideLoader()}}const q=8;let p=1;const g=document.querySelector(".artists-load-more-btn"),S=document.querySelector("[data-artists-loader]");M.addEventListener("click",oe);g.addEventListener("click",ie);function oe(e){Z(e);const t=ee();t&&re(t)}async function P(e,t){try{const n=await G(e,t);return U(n.artists),n.artists||[]}catch{return u.error({message:"Failed to load artists. Please try again."}),[]}}P(p,q);async function ie(){p+=1,g.classList.add("artists-visually-hidden"),S.classList.remove("is-hidden");try{const e=await P(p,q);if(S.classList.add("is-hidden"),e.length===0){u.warning({message:"You've load all available artists.There're nomore results."});return}if(e.length<q){u.warning({message:`You've load last ${e.length} artists`});return}g.classList.remove("artists-visually-hidden")}catch{p-=1,S.classList.add("is-hidden"),u.error({message:"Something went wrong while trying to load artists. Please try again"}),g.classList.remove("artists-visually-hidden")}}const F=document.querySelector(".swiper-wrapper");document.querySelector(".button-section-feedbacks");const ce=document.querySelector("[data-modal-feedback]");function le(e=[]){const t=e.map(n=>{const{descr:a,name:s,rating:r}=n;return`
        <div class="swiper-slide">
          <div class="section-feedback-content">
            <div class="rating large value-${Math.round(r)}">
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
              ${a}
            </p>
            <p data-feedback-name class="feedback-name">${s}</p>
          </div>
        </div>
        `});de(),F.insertAdjacentHTML("beforeend",t.join(""))}function de(){F.innerHTML=""}function ue(e){ce.classList.toggle(".is-hidden")}function me(){new z(".swiper",{modules:[K,V],direction:"horizontal",pagination:{el:".swiper-pagination",type:"custom",renderCustom(e,t,n){const a=t===1,s=t===n;return`
        <span class="swiper-pagination-bullet ${a?"swiper-pagination-bullet-active":""}"></span>
        <span class="swiper-pagination-bullet ${!a&&!s?"swiper-pagination-bullet-active":""}"></span>
        <span class="swiper-pagination-bullet ${s?"swiper-pagination-bullet-active":""}"></span>
      `}},Navigation:{nextEl:".swiper-button.next",prevEl:".swiper-button.prev"}})}const pe=document.querySelector(".button-section-feedbacks");pe.addEventListener("click",ue);A("/feedbacks","limit=10&page=1").then(e=>{le(e.data.data),me()});const ge=document.querySelector(".header-burger-btn"),E=document.querySelector(".mobile-menu"),fe=document.querySelector(".mobile-menu .mobile-menu-close-btn"),ve=document.querySelectorAll(".mobile-menu-item");ge.addEventListener("click",()=>{E.classList.add("is-open"),document.body.classList.add("mobile-menu-open")});fe.addEventListener("click",()=>{E.classList.remove("is-open"),document.body.classList.remove("mobile-menu-open")});ve.forEach(e=>{e.addEventListener("click",()=>{E.classList.remove("is-open"),document.body.classList.remove("mobile-menu-open")})});const o={closeModalBtn:document.querySelector(".feedbacks-modal-btn"),modal:document.querySelector(".feedbacks-modal"),form:document.querySelector(".feedbacks-modal-form"),submitBtn:document.querySelector(".feedback-modal-submit"),body:document.body},ye=e=>{o.submitBtn.disabled=!e,o.submitBtn.style.opacity=e?"1":"0.5",o.submitBtn.style.cursor=e?"pointer":"not-allowed"},y=()=>{if(!o.form&&!o.submitBtn)return;const e=o.form.querySelector('input[name="name"]'),t=o.form.querySelector('textarea[name="message"]'),n=o.form.querySelector('input[name="rating"]:checked'),a=e&&e.value.trim()!=="",s=t&&t.value.trim()!=="";ye(a&&s&&n!==null)},he=e=>{e.key==="Escape"&&h()},h=()=>{o.modal.classList.add("is-hidden"),o.body.style.overflow="",window.removeEventListener("keydown",he),o.form.reset(),y()};o.form.addEventListener("input",y);o.form.addEventListener("change",y);o.closeModalBtn.addEventListener("click",h);o.modal.addEventListener("click",e=>{e.target===o.modal&&h()});y();o.form.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(e.currentTarget),n={name:t.get("name").trim(),rating:Number(t.get("rating")),descr:t.get("message").trim()};try{const a=await fetch("https://sound-wave.b.goit.study/api/feedbacks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!a.ok){const s=await a.json();throw new Error(s.message||"Something went wrong.")}u.success({title:"Success",message:"Thank you for your feedback!",position:"topRight"}),h()}catch(a){u.error({title:"Error",message:a.message,position:"topRight"})}});
//# sourceMappingURL=index.js.map
