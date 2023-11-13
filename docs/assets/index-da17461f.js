(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const I=`<div class="contenedor">\r
    <aside class="sidebar">\r
        <div class="sidebar__logo">\r
            <img class="sidebar__logo-imagen" src="./img/logo.png" alt="" />\r
        </div>\r
\r
        <div class="sidebar__generos">\r
            <h3 class="sidebar__titulo">Generos</h3>\r
            <div class="sidebar__contenedor-generos" id="filtro-generos">\r
                <!-- <button class="btn">Acción</button>\r
                <button class="btn">Aventuras</button>\r
                <button class="btn">Sci-fi</button>\r
                <button class="btn">Comedia</button>\r
                <button class="btn">Fantasía</button>\r
                <button class="btn">Musical</button> -->\r
            </div>\r
        </div>\r
\r
        <div class="sidebar__años">\r
            <h3 class="sidebar__titulo">Años</h3>\r
            <div class="sidebar__contenedor-inputs">\r
                <input class="sidebar__input" id="años-min" type="number" min="1950" max="2023" maxlength="4"\r
                    placeholder="1950" />\r
                <span> - </span>\r
                <input class="sidebar__input" id="años-max" type="number" min="1950" max="2023" value="2023"\r
                    maxlength="4" placeholder="2023" />\r
            </div>\r
        </div>\r
\r
        <div class="sidebar__buscar">\r
            <button class="btn btn--100 btn--rojo" id="btn-buscar">Buscar</button>\r
        </div>\r
    </aside>\r
\r
    <main class="main">\r
        <div class="main__filtros">\r
            <button class="btn btn--active" id="movie">\r
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="btn__icono"\r
                    viewBox="0 0 16 16">\r
                    <path\r
                        d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />\r
                </svg>\r
                Peliculas\r
            </button>\r
            <button class="btn" id="tv">\r
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="btn__icono"\r
                    viewBox="0 0 16 16">\r
                    <path\r
                        d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />\r
                </svg>\r
                Series\r
            </button>\r
        </div>\r
\r
        <div class="main__populares" id="populares" data-pagina="1">\r
            <h2 class="main__titulo">Peliculas Populares</h2>\r
            <div class="main__grid">\r
                <!-- <div class="main__media">\r
                    <a href="#" class="main__media-thumb">\r
                        <img class="main__media-img" src="./img/1.png" alt="" />\r
                    </a>\r
                    <p class="main__media-titulo">The boys</p>\r
                    <p class="main__media-fecha">2021</p>\r
                </div> -->\r
            </div>\r
        </div>\r
\r
        <div class="main__paginacion">\r
            <button class="btn" id="pagina-anterior">\r
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="btn__icono"\r
                    viewBox="0 0 16 16">\r
                    <path fill-rule="evenodd"\r
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />\r
                </svg>\r
                Anterior\r
            </button>\r
            <button class="btn" id="pagina-siguiente">\r
                Siguiente\r
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="btn__icono"\r
                    viewBox="0 0 16 16">\r
                    <path fill-rule="evenodd"\r
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />\r
                </svg>\r
            </button>\r
        </div>\r
    </main>\r
\r
    <section class="media" id="media">\r
        <div class="media__contenedor">\r
            <!-- <div class="media__backdrop">\r
                <img src="https://image.tmdb.org/t/p/w500//jsoz1HlxczSuTx0mDl2h0lxy36l.jpg"\r
                    class="media__backdrop-image" />\r
            </div>\r
            <div class="media__imagen">\r
                <img src="https://image.tmdb.org/t/p/w500//4GVIfQVABjKuAWy3fvidPJZE52t.jpg" class="media__poster" />\r
            </div>\r
            <div class="media__info">\r
                <h1 class="media__titulo">Titulo</h1>\r
                <p class="media__fecha">2022</p>\r
                <p class="media__overview">Lorem ipsum dolor sit amet.</p>\r
            </div>\r
            <button class="media__btn">\r
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"\r
                    class="media__btn-icono">\r
                    <path\r
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />\r
                </svg>\r
            </button> -->\r
        </div>\r
    </section>\r
</div>`,m=async(s="movie")=>{const a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWUxZGMxNTdiYzc3MjcyZjNmOGRmOTI0ZWM2MzkxYyIsInN1YiI6IjY1MzQ5OTU1YzhhNWFjMDBjNTA5ZWE2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d4VaA9gpJHbB-9iGPDGRpV_7FHV0Gbb8asHtcS_JIpA"}};if(s==="movie"){const e="https://api.themoviedb.org/3/genre/movie/list?language=es";try{return(await(await fetch(e,a)).json()).genres}catch(n){console.log(n)}}else{const e="https://api.themoviedb.org/3/genre/tv/list?language=es";try{return(await(await fetch(e,a)).json()).genres}catch(n){console.log(n)}}},p=async s=>{const a=document.getElementById("filtro-generos"),e=await m(s);a.innerHTML="",e.forEach(({name:n,id:t})=>{const r=document.createElement("button");r.classList.add("btn"),r.innerText=n,r.setAttribute("data-id",t),a.appendChild(r)})},l=s=>{const a=document.querySelector("#populares .main__grid");a.innerHTML="",s.forEach(e=>{const{title:n,poster_path:t,release_date:r,genero:i,name:o,first_air_date:c,id:d}=e,_=new Date(e=r||c),u=` 
    <div class="main__media" data-id="${d}">
        <a href="#" class="main__media-thumb">
            <img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${t}" alt="${e=o||n}" />
        </a>
        <p class="main__media-titulo">${e=o||n}</p>
        <p class="main__media-fecha">${i}</p>
        <p class="main__media-fecha">${_.getFullYear()}</p>
    </div>`;a.insertAdjacentHTML("beforeend",u)})},g=(s,a)=>{let e=a.find(n=>n.id===s);return(e==null?void 0:e.name)||"Not found gender"},v=async(s="movie")=>{const a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWUxZGMxNTdiYzc3MjcyZjNmOGRmOTI0ZWM2MzkxYyIsInN1YiI6IjY1MzQ5OTU1YzhhNWFjMDBjNTA5ZWE2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d4VaA9gpJHbB-9iGPDGRpV_7FHV0Gbb8asHtcS_JIpA"}};if(s==="movie"){const e="https://api.themoviedb.org/3/movie/popular?language=es-MEX&page=1";try{const r=(await(await fetch(e,a)).json()).results,i=await m(s);return r.forEach(o=>{const{genre_ids:c}=o,d=c[0];o.genero=g(d,i)}),r}catch(n){console.log(n)}}else{const e="https://api.themoviedb.org/3/tv/popular?language=es";try{const r=(await(await fetch(e,a)).json()).results,i=await m(s);return r.forEach(o=>{const{genre_ids:c}=o,d=c[0];o.genero=g(d,i)}),r}catch(n){console.log(n)}}};document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("movie"),a=document.getElementById("tv");s.addEventListener("click",async e=>{e.preventDefault(),p("movie");const n=await v("movie");l(n),s.classList.add("btn--active"),a.classList.remove("btn--active")}),a.addEventListener("click",async e=>{e.preventDefault(),p("series");const n=await v("series");l(n),s.classList.remove("btn--active"),a.classList.add("btn--active")})});document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("filtro-generos");s.addEventListener("click",a=>{var e;a.preventDefault(),document.querySelector(".btn"),a.target.closest("button")&&((e=s.querySelector(".btn--active"))==null||e.classList.remove("btn--active"),a.target.classList.add("btn--active"))})});const h=async(s=1)=>{var o,c;const a=new Date,e=(o=document.querySelector(".main__filtros .btn--active"))==null?void 0:o.id,n=(c=document.querySelector("#filtro-generos .btn--active"))==null?void 0:c.dataset.id,t=document.querySelector("#años-min").value||1950,r=document.querySelector("#años-max").value||a.getFullYear();let i;e==="movie"?i=`https://api.themoviedb.org/3/discover/movie?api_key=85e1dc157bc77272f3f8df924ec6391c&include_adult=true&include_video=false&language=es-MEX&page=${s}&primary_release_date.gte=${t}&primary_release_date.lte=${r}&sort_by=popularity.desc&with_genres=${n}`:e==="tv"&&(i=`https://api.themoviedb.org/3/discover/tv?api_key=85e1dc157bc77272f3f8df924ec6391c&first_air_date.gte=${t}&first_air_date.lte=${r}&include_adult=true&include_null_first_air_dates=false&language=es-MEX&page=${s}&sort_by=popularity.desc&with_genres=${n}`);try{const u=(await(await fetch(i)).json()).results,f=await m(e);return u.forEach(b=>{const{genre_ids:y}=b,w=y[0];b.genero=g(w,f)}),u}catch(d){console.log(d)}};document.addEventListener("DOMContentLoaded",()=>{document.getElementById("btn-buscar").addEventListener("click",async a=>{a.preventDefault();const e=await h();l(e)})});document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("pagina-anterior");document.getElementById("pagina-siguiente").addEventListener("click",async e=>{const n=document.getElementById("populares").dataset.pagina;try{const t=await h(n+1);document.getElementById("populares").setAttribute("data-pagina",parseInt(n)+1),l(t),window.scrollTo(0,0)}catch(t){console.log(t)}}),s.addEventListener("click",async e=>{const n=document.getElementById("populares").dataset.pagina;if(n>1)try{const t=await h(n-1);document.getElementById("populares").setAttribute("data-pagina",parseInt(n)-1),l(t),window.scrollTo(0,0)}catch(t){console.log(t)}})});const L=async s=>{const a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWUxZGMxNTdiYzc3MjcyZjNmOGRmOTI0ZWM2MzkxYyIsInN1YiI6IjY1MzQ5OTU1YzhhNWFjMDBjNTA5ZWE2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d4VaA9gpJHbB-9iGPDGRpV_7FHV0Gbb8asHtcS_JIpA"}},e=document.querySelector(".main__filtros .btn--active").id;try{const n=`https://api.themoviedb.org/3/${e}/${s}?language=es-MEX'`,r=await(await fetch(n,a)).json();return console.log(r),r}catch(n){console.log(n)}};document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("populares"),a=document.getElementById("media");s.addEventListener("click",async e=>{if(e.target.closest(".main__media")){a.classList.add("media--active");const n=e.target.closest(".main__media").dataset.id,t=await L(n),r=`
            <div class="media__backdrop">
                <img src="https://image.tmdb.org/t/p/w500//${t.backdrop_path}"
                    class="media__backdrop-image" />
            </div>
            <div class="media__imagen">
                <img src="https://image.tmdb.org/t/p/w500//${t.poster_path}" class="media__poster" />
            </div>
            <div class="media__info">
                <h1 class="media__titulo">${t.original_title||t.name}</h1>
                <p class="media__fecha">${t.release_date||t.first_air_date}</p>
                <p class="media__overview">${t.overview}</p>
            </div>
            <button class="media__btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
                    class="media__btn-icono">
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
            </button>`;document.querySelector("#media .media__contenedor").innerHTML=r}})});document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("media");s.addEventListener("click",a=>{a.target.closest("button")&&s.classList.remove("media--active")})});const E=s=>{(()=>{const e=document.createElement("div");e.innerHTML=I,document.querySelector(s).append(e)})(),(async()=>{const e=await v();l(e),p("movie")})()};E("#app");
