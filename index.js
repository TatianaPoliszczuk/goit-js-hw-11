import{S as h,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();API_KEY="46122633-b5d9525daa165f05b8fce4913";const g="https://pixabay.com/api/";function p(i,t=1){const n=`${g}?key=${API_KEY}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=12`;return fetch(n).then(o=>{if(!o.ok)throw new Error("Error fetching images");return o.json()}).catch(o=>{throw console.error(o),o})}const u=document.querySelector(".gallery");let l;function y(i){const t=i.map(({webformatURL:n,largeImageURL:o,tags:e,likes:r,views:s,comments:d,downloads:m})=>`
      <li class="gallery__item">
        <a href="${o}">
          <img class="gallery__image" src="${n}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${r}</p>
          <p><b>Views</b> ${s}</p>
          <p><b>Comments</b> ${d}</p>
          <p><b>Downloads</b> ${m}</p>
        </div>
      </li>
    `).join("");u.innerHTML=t,l?l.refresh():l=new h(".gallery a")}function b(){u.innerHTML=""}const L=document.querySelector("#search-form"),f=document.querySelector(".loader");let c="",$=1;L.addEventListener("submit",w);function w(i){if(i.preventDefault(),c=i.currentTarget.elements.searchQuery.value.trim(),c===""){a.error({title:"Error",message:"Please enter a search query."});return}b(),E(),p(c,$).then(t=>{t.hits.length===0?a.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):y(t.hits)}).catch(t=>{a.error({title:"Error",message:"Failed to fetch images. Please try again later."})}).finally(()=>{P()})}a.settings({position:"topRight"});function E(){f.classList.remove("hidden")}function P(){f.classList.add("hidden")}
//# sourceMappingURL=index.js.map
