import{a as T,i as u,S as _,N as z,P as K}from"./assets/vendor-BolKaoap.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function B(e,t){return T.get(`https://sound-wave.b.goit.study/api${e}?${t}`)}const V={artists_list:"/artists"};async function W(e=1,t=8){const n=`page=${e}&limit=${t}`;return(await B(V.artists_list,n)).data}const M=document.querySelector(".artists-list"),G="https://placehold.co/640x393";function J(e){const t=e.map(n=>{const{_id:r,strArtist:s,strBiographyEN:a,strArtistThumb:l,genres:b=[]}=n,L=b.map(w=>`<li class="artists-genres-item">${w}</li>`).join("");return`<li class="artists-card-item">
          <img class="artists-image" src="${l||G}" alt="${s}" />
          <ul class="artists-genres-list">
            ${L}
          </ul>
          <p class="artists-name">${s}</p>
          <p class="artists-information">
            ${a}
          </p>
          <button class="artists-learn-more-card-btn open-artist-modal" data-artist-id="${r}">
            Learn More
            <svg class="caret-right-icon" width="8" height="16">
              <use href="/img/icon.svg#icon-icon-button-artists"></use>
            </svg>
          </button>
        </li>`}).join("");M.insertAdjacentHTML("beforeend",t),setTimeout(()=>{M.querySelectorAll(".artists-information").forEach(U)},0)}function U(e){const t=e.dataset.fulltext||e.textContent.trim();if(e.dataset.fulltext=t,e.textContent=t,e.scrollHeight<=e.clientHeight)return;const n=t.split(" ");for(;n.length&&e.scrollHeight>e.clientHeight;)n.pop(),e.textContent=n.join(" ")+"..."}const Q=document.querySelector("[data-modal]");function X(e){const t=e.target.closest(".artists-learn-more-card-btn");t&&(t.dataset.artistId,Z())}function Z(){Q.classList.remove("is-hidden")}const q=8;let g=1;const p=document.querySelector(".artists-load-more-btn"),S=document.querySelector(".loader");M.addEventListener("click",X);p.addEventListener("click",ee);async function C(e,t){try{const n=await W(e,t);return J(n.artists),n.artists||[]}catch{return u.error({message:"Failed to load artists. Please try again."}),[]}}C(g,q);async function ee(){g+=1,p.classList.add("artists-visually-hidden"),S.classList.remove("artists-visually-hidden");try{const e=await C(g,q);if(S.classList.add("artists-visually-hidden"),e.length===0){u.warning({message:"You've load all available artists.There're nomore results."});return}if(e.length<q){u.warning({message:`You've load last ${e.length} artists`});return}p.classList.remove("artists-visually-hidden")}catch{g-=1,S.classList.add("artists-visually-hidden"),u.error({message:"Something went wrong while trying to load artists. Please try again"}),p.classList.remove("artists-visually-hidden")}}async function te(e){const{data:t}=await T.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`);return t}async function se(e){const{genres:t=[],albumsList:n=[],strArtist:r="Unknown artist",strArtistThumb:s="",strBiographyEN:a="",strGender:l="-",strCountry:b="-",intMembers:L="-",intFormedYear:w="-",intDiedYear:F=null}=await te(e),H=F??"present";function O(c){if(!c||c===0||c==="0")return"—";const d=parseInt(c),k=Math.floor(d/6e4).toString().padStart(2,"0"),Y=Math.floor(d%6e4/1e3).toString().padStart(2,"0");return`${k}:${Y}`}const D=t.map(c=>`<div data-genres class="section-modal-genres">${c}</div>`).join(""),I=c=>(c??[]).map(d=>{const k=d.movie?`
          <a data-item-icon-linc href="${d.movie}" class="container-list-item-span-link" target="_blank" rel="noopener noreferrer">
            <svg class="close-svg" width="24" height="24">
                <use href="/img/icon.svg#icon-Youtube"></use>
            </svg>
          </a>`:"";return`
          <li class="section-modal-albume-container-list-item">
          <span data-item-nane class="container-list-item-span">${d.strTrack??"—"}</span>
          <span data-item-time class="container-list-item-span">${O(d.intDuration)}</span>${k}
          </li>
    `}).join(""),R=n.map(c=>`
        <div data-albume-container class="section-modal-albume-container">
          <h3 data-albume-title class="section-modal-albume-container-title">${c.strAlbum??"-"}</h3>

          <ul class="section-modal-albume-container-list">
            <li class="section-modal-albume-container-list-item-selrct">
              <span class="container-list-item-selrct-span">Track</span>
              <span class="container-list-item-selrct-span">Time</span>
              <span class="container-list-item-selrct-span">Link</span>
            </li>
            ${I(c.tracks)}
          </ul>
    </div>
    `).join(""),i=document.querySelector(".modal-template").content.cloneNode(!0);return i.querySelector("[data-artist-title]").textContent=r,i.querySelector("[data-sex]").textContent=l,i.querySelector("[data-members]").textContent=L,i.querySelector("[data-country]").textContent=b,i.querySelector("[data-biography]").textContent=a,i.querySelector("[data-years]").textContent=`${w}-${H}`,i.querySelector("[data-section-modal-img]").src=s,i.querySelector("[data-section-modal-img]").alt=r,i.querySelector("[data-genres]").innerHTML=D,i.querySelector("[data-albums-wrapper]").innerHTML=R,i}const f=document.querySelector(".backdrop"),$=document.querySelector(".js-modal-content"),x=document.querySelector(".loader"),A=document.querySelector(".modal-close");function N(e){e.key==="Escape"&&v()}function j(e){e.target===f&&v()}function ne(){A.addEventListener("click",v),document.addEventListener("keydown",N),f.addEventListener("click",j)}function v(){f.classList.add("is-hidden"),A.removeEventListener("click",v),document.removeEventListener("keydown",N),f.removeEventListener("click",j),m.clearModalContent()}const m={clearModalContent(){$.innerHTML=""},renderModal(e){this.clearModalContent(),$.appendChild(e)},showLoader(){x.classList.remove("is-hidden")},hideLoader(){x.classList.add("is-hidden")},showError(){u.error({message:"Oops...something wrong :(",position:"topRight"})}};async function ae(e){try{m.showLoader(),ne();const t=await se(e);m.renderModal(t)}catch{m.showError()}finally{m.hideLoader()}}ae("65adae06af9f6d155db4b23a");const P=document.querySelector(".swiper-wrapper"),re=document.querySelector(".button-section-feedbacks"),oe=document.querySelector("[data-modal-feedback]");re.addEventListener("click",le);function ie(e=[]){const t=e.map(n=>{const{descr:r,name:s,rating:a}=n;return`
        <div class="swiper-slide">
          <div class="section-feedback-content">
            <div class="rating large value-${Math.round(a)}">
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
              ${r}
            </p>
            <p data-feedback-name class="feedback-name">${s}</p>
          </div>
        </div>
        `});ce(),P.insertAdjacentHTML("beforeend",t.join(""))}function ce(){P.innerHTML=""}function le(e){oe.classList.add(".is-hidden")}function de(){new _(".swiper",{modules:[z,K],direction:"horizontal",pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button.next",prevEl:".swiper-button.prev"}})}const ue=await B("/feedbacks","limit=3&page=1");ie(ue.data.data);de();const me=document.querySelector(".header-burger-btn"),E=document.querySelector(".mobile-menu"),ge=document.querySelector(".mobile-menu .mobile-menu-close-btn"),pe=document.querySelectorAll(".mobile-menu-item");me.addEventListener("click",()=>{E.classList.add("is-open"),document.body.classList.add("mobile-menu-open")});ge.addEventListener("click",()=>{E.classList.remove("is-open"),document.body.classList.remove("mobile-menu-open")});pe.forEach(e=>{e.addEventListener("click",()=>{E.classList.remove("is-open"),document.body.classList.remove("mobile-menu-open")})});const o={closeModalBtn:document.querySelector(".feedbacks-modal-btn"),modal:document.querySelector(".feedbacks-modal"),form:document.querySelector(".feedbacks-modal-form"),submitBtn:document.querySelector(".feedback-modal-submit"),body:document.body},fe=e=>{o.submitBtn.disabled=!e,o.submitBtn.style.opacity=e?"1":"0.5",o.submitBtn.style.cursor=e?"pointer":"not-allowed"},y=()=>{if(!o.form&&!o.submitBtn)return;const e=o.form.querySelector('input[name="name"]'),t=o.form.querySelector('textarea[name="message"]'),n=o.form.querySelector('input[name="rating"]:checked'),r=e&&e.value.trim()!=="",s=t&&t.value.trim()!=="";fe(r&&s&&n!==null)},ve=e=>{e.key==="Escape"&&h()},h=()=>{o.modal.classList.add("is-hidden"),o.body.style.overflow="",window.removeEventListener("keydown",ve),o.form.reset(),y()};o.form.addEventListener("input",y);o.form.addEventListener("change",y);o.closeModalBtn.addEventListener("click",h);o.modal.addEventListener("click",e=>{e.target===o.modal&&h()});y();o.form.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(e.currentTarget),n={name:t.get("name").trim(),rating:Number(t.get("rating")),descr:t.get("message").trim()};try{const r=await fetch("https://sound-wave.b.goit.study/api/feedbacks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){const s=await r.json();throw new Error(s.message||"Something went wrong.")}u.success({title:"Success",message:"Thank you for your feedback!",position:"topRight"}),h()}catch(r){u.error({title:"Error",message:r.message,position:"topRight"})}});
//# sourceMappingURL=index.js.map
