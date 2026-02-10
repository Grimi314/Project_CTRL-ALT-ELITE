import{a as A,i as u,S as K,N as V,P as W}from"./assets/vendor-C97g7yHx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function x(e,t){return A.get(`https://sound-wave.b.goit.study/api${e}?${t}`)}const G={artists_list:"/artists"};async function J(e=1,t=8){const n=`page=${e}&limit=${t}`;return(await x(G.artists_list,n)).data}const i="/Project_CTRL-ALT-ELITE/assets/icon-Bk7T_pYb.svg",M=document.querySelector(".artists-list"),U="https://placehold.co/640x393";function Q(e){const t=e.map(n=>{const{_id:a,strArtist:s,strBiographyEN:r,strArtistThumb:d,genres:L=[]}=n,w=L.map(k=>`<li class="artists-genres-item">${k}</li>`).join("");return`<li class="artists-card-item">
          <img class="artists-image" src="${d||U}" alt="${s}" />
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
        </li>`}).join("");M.insertAdjacentHTML("beforeend",t),setTimeout(()=>{M.querySelectorAll(".artists-information").forEach(X)},0)}function X(e){const t=e.dataset.fulltext||e.textContent.trim();if(e.dataset.fulltext=t,e.textContent=t,e.scrollHeight<=e.clientHeight)return;const n=t.split(" ");for(;n.length&&e.scrollHeight>e.clientHeight;)n.pop(),e.textContent=n.join(" ")+"..."}let B=null;const Z=document.querySelector("[data-modal]");function ee(e){const t=e.target.closest(".artists-learn-more-card-btn");t&&(B=t.dataset.artistId,se())}function te(){return B}function se(){Z.classList.remove("is-hidden")}async function ne(e){if(!e)throw new Error("Oops...something wrong :(");const{data:t}=await A.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`);return t}async function ae(e){const{genres:t=[],albumsList:n=[],strArtist:a="Unknown artist",strArtistThumb:s="",strBiographyEN:r="",strGender:d="-",strCountry:L="-",intMembers:w="-",intFormedYear:k="-",intDiedYear:O=null}=await ne(e),H=O??"present";function D(l){if(!l||l===0||l==="0")return"—";const m=parseInt(l),S=Math.floor(m/6e4).toString().padStart(2,"0"),z=Math.floor(m%6e4/1e3).toString().padStart(2,"0");return`${S}:${z}`}const R=t.map(l=>`<div data-genres class="section-modal-genres">${l}</div>`).join(""),Y=l=>(l??[]).map(m=>{const S=m.movie?`
          <a data-item-icon-linc href="${m.movie}" class="container-list-item-span-link" target="_blank" rel="noopener noreferrer">
            <svg class="close-svg" width="24" height="24">
                <use href="${i}#icon-Youtube"></use>
            </svg>
          </a>`:"";return`
          <li class="section-modal-albume-container-list-item">
          <span data-item-nane class="container-list-item-span">${m.strTrack??"—"}</span>
          <span data-item-time class="container-list-item-span">${D(m.intDuration)}</span>${S}
          </li>
    `}).join(""),_=n.map(l=>`
        <div data-albume-container class="section-modal-albume-container">
          <h3 data-albume-title class="section-modal-albume-container-title">${l.strAlbum??"-"}</h3>

          <ul class="section-modal-albume-container-list">
            <li class="section-modal-albume-container-list-item-selrct">
              <span class="container-list-item-selrct-span">Track</span>
              <span class="container-list-item-selrct-span">Time</span>
              <span class="container-list-item-selrct-span">Link</span>
            </li>
            ${Y(l.tracks)}
          </ul>
    </div>
    `).join(""),c=document.querySelector(".modal-template").content.cloneNode(!0);return c.querySelector("[data-artist-title]").textContent=a,c.querySelector("[data-sex]").textContent=d,c.querySelector("[data-members]").textContent=w,c.querySelector("[data-country]").textContent=L,c.querySelector("[data-biography]").textContent=r,c.querySelector("[data-years]").textContent=`${k}-${H}`,c.querySelector("[data-section-modal-img]").src=s,c.querySelector("[data-section-modal-img]").alt=a,c.querySelector("[data-genres]").innerHTML=R,c.querySelector("[data-albums-wrapper]").innerHTML=_,c}const v=document.querySelector(".backdrop"),T=document.querySelector(".js-modal-content"),C=document.querySelector("[data-modal-loader]"),N=document.querySelector(".modal-close");function P(e){e.key==="Escape"&&y()}function j(e){e.target===v&&y()}function re(){N.addEventListener("click",y),document.addEventListener("keydown",P),v.addEventListener("click",j)}function y(){v.classList.add("is-hidden"),N.removeEventListener("click",y),document.removeEventListener("keydown",P),v.removeEventListener("click",j),p.clearModalContent()}const p={clearModalContent(){T.innerHTML=""},renderModal(e){this.clearModalContent(),T.appendChild(e)},showLoader(){C.classList.remove("is-hidden")},hideLoader(){C.classList.add("is-hidden")},showError(){u.error({message:"Oops...something wrong :(",position:"topRight"})}};async function oe(e){try{p.showLoader(),re();const t=await ae(e);p.renderModal(t)}catch{p.showError()}finally{p.hideLoader()}}const q=8;let g=1;const f=document.querySelector(".artists-load-more-btn"),$=document.querySelector("[data-artists-loader]");M.addEventListener("click",ie);f.addEventListener("click",ce);function ie(e){ee(e);const t=te();t&&oe(t)}async function F(e,t){try{const n=await J(e,t);return Q(n.artists),n.artists||[]}catch{return u.error({message:"Failed to load artists. Please try again."}),[]}}F(g,q);async function ce(){g+=1,f.classList.add("artists-visually-hidden"),$.classList.remove("is-hidden");try{const e=await F(g,q);if($.classList.add("is-hidden"),e.length===0){u.warning({message:"You've load all available artists.There're nomore results."});return}if(e.length<q){u.warning({message:`You've load last ${e.length} artists`});return}f.classList.remove("artists-visually-hidden")}catch{g-=1,$.classList.add("is-hidden"),u.error({message:"Something went wrong while trying to load artists. Please try again"}),f.classList.remove("artists-visually-hidden")}}const I=document.querySelector(".swiper-wrapper");document.querySelector(".button-section-feedbacks");const le=document.querySelector(".swiper .loader-wrapper .loader"),de=document.querySelector("[data-modal-feedback]");function ue(e=[]){const t=e.map(n=>{const{descr:a,name:s,rating:r}=n;return`
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
        `});me(),ge(),I.insertAdjacentHTML("beforeend",t.join(""))}function me(){I.innerHTML=""}function pe(e){de.classList.add("is-hidden")}function ge(){le.style.display="none"}function fe(){new K(".swiper",{modules:[V,W],direction:"horizontal",pagination:{el:".swiper-pagination",type:"custom",renderCustom(e,t,n){const a=t===1,s=t===n;return`
        <span class="swiper-pagination-bullet ${a?"swiper-pagination-bullet-active":""}"></span>
        <span class="swiper-pagination-bullet ${!a&&!s?"swiper-pagination-bullet-active":""}"></span>
        <span class="swiper-pagination-bullet ${s?"swiper-pagination-bullet-active":""}"></span>
      `}},navigation:{nextEl:".swiper-button.next",prevEl:".swiper-button.prev"}})}const ve=document.querySelector(".button-section-feedbacks");ve.addEventListener("click",pe);x("/feedbacks","limit=10&page=1").then(e=>{ue(e.data.data),fe()}).catch(e=>{u.error(e)});const ye=document.querySelector(".header-burger-btn"),E=document.querySelector(".mobile-menu"),he=document.querySelector(".mobile-menu .mobile-menu-close-btn"),be=document.querySelectorAll(".mobile-menu-item");ye.addEventListener("click",()=>{E.classList.add("is-open"),document.body.classList.add("mobile-menu-open")});he.addEventListener("click",()=>{E.classList.remove("is-open"),document.body.classList.remove("mobile-menu-open")});be.forEach(e=>{e.addEventListener("click",()=>{E.classList.remove("is-open"),document.body.classList.remove("mobile-menu-open")})});const o={closeModalBtn:document.querySelector(".feedbacks-modal-btn"),modal:document.querySelector(".feedbacks-modal"),form:document.querySelector(".feedbacks-modal-form"),submitBtn:document.querySelector(".feedback-modal-submit"),body:document.body},Le=e=>{o.submitBtn.disabled=!e,o.submitBtn.style.opacity=e?"1":"0.5",o.submitBtn.style.cursor=e?"pointer":"not-allowed"},h=()=>{if(!o.form&&!o.submitBtn)return;const e=o.form.querySelector('input[name="name"]'),t=o.form.querySelector('textarea[name="message"]'),n=o.form.querySelector('input[name="rating"]:checked'),a=e&&e.value.trim()!=="",s=t&&t.value.trim()!=="";Le(a&&s&&n!==null)},we=e=>{e.key==="Escape"&&b()},b=()=>{o.modal.classList.add("is-hidden"),o.body.style.overflow="",document.removeEventListener("keydown",we),o.form.reset(),h()};o.form.addEventListener("input",h);o.form.addEventListener("change",h);o.closeModalBtn.addEventListener("click",b);o.modal.addEventListener("click",e=>{e.target===o.modal&&b()});h();o.form.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(e.currentTarget),n={name:t.get("name").trim(),rating:Number(t.get("rating")),descr:t.get("message").trim()};try{const a=await fetch("https://sound-wave.b.goit.study/api/feedbacks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!a.ok){const s=await a.json();throw new Error(s.message||"Something went wrong.")}u.success({title:"Success",message:"Thank you for your feedback!",position:"topRight"}),b()}catch(a){u.error({title:"Error",message:a.message,position:"topRight"})}});
//# sourceMappingURL=index.js.map
