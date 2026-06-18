(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();let hs=[],ke=null;function F(t,e){hs.push({path:t,pattern:ps(t),handler:e})}function ps(t){const e=t.replace(/\//g,"\\/").replace(/:(\w+)/g,"([^/]+)");return new RegExp(`^${e}$`)}function Fs(t,e){const s=[...e.matchAll(/:(\w+)/g)].map(n=>n[1]),r=t.match(ps(e));if(!r)return{};const i={};return s.forEach((n,a)=>{i[n]=decodeURIComponent(r[a+1])}),i}function It(t){const e=t==="/"?"/":t.replace(/\/$/,"");for(const s of hs)if(s.pattern.test(e))return{route:s,params:Fs(e,s.path)};return null}async function U(t,e=!0){e&&window.history.pushState({},"",t),await gt(t)}async function gt(t){const e=document.getElementById("app");if(!e)return;ke&&(ke(),ke=null);const s=It(t);if(!s){const r=It("/404");if(r){const i=await r.route.handler({});e.innerHTML=i.html,i.init&&i.init(),i.cleanup&&(ke=i.cleanup)}else e.innerHTML='<div style="padding:200px 72px;text-align:center;"><h1 style="font-family:Cormorant Garamond,serif;font-size:4rem;color:var(--gold);">404</h1><p style="color:var(--text-muted);margin-top:16px;">Page not found</p></div>';return}e.style.opacity="0";try{const r=await s.route.handler(s.params);if(e.innerHTML=r.html,requestAnimationFrame(()=>{e.style.transition="opacity .3s ease",e.style.opacity="1"}),window.location.hash){const i=document.querySelector(window.location.hash);i&&setTimeout(()=>i.scrollIntoView({behavior:"smooth"}),100)}else window.scrollTo(0,0);r.init&&r.init(),r.cleanup&&(ke=r.cleanup)}catch(r){console.error("Router error:",r),e.innerHTML='<div style="padding:200px 72px;text-align:center;"><h1 style="font-family:Cormorant Garamond,serif;font-size:2rem;color:var(--gold);">Something went wrong</h1></div>',e.style.opacity="1"}}function zs(){window.addEventListener("popstate",()=>{gt(window.location.pathname)}),document.addEventListener("click",t=>{const e=t.target.closest("a[data-link]");if(!e)return;t.preventDefault();const s=e.getAttribute("href");s&&s!==window.location.pathname&&U(s)}),document.addEventListener("click",t=>{const e=t.target.closest('a[href^="#"]');if(!e)return;const s=e.getAttribute("href");if(s!=="#")if(window.location.pathname==="/"){t.preventDefault();const r=document.querySelector(s);r&&r.scrollIntoView({behavior:"smooth"})}else t.preventDefault(),U("/"),setTimeout(()=>{const r=document.querySelector(s);r&&r.scrollIntoView({behavior:"smooth"})},400)}),gt(window.location.pathname)}let ct=null,qe=null;function Js(){const t=document.getElementById("cursor"),e=document.getElementById("cursor-ring");if(!t||!e)return;let s=0,r=0,i=0,n=0;qe&&document.removeEventListener("mousemove",qe),qe=o=>{i=o.clientX,n=o.clientY,t.style.left=i+"px",t.style.top=n+"px"},document.addEventListener("mousemove",qe),ct&&cancelAnimationFrame(ct);function a(){s+=(i-s)*.12,r+=(n-r)*.12,e.style.left=s+"px",e.style.top=r+"px",ct=requestAnimationFrame(a)}a(),V()}function V(){const t=document.getElementById("cursor");t&&document.querySelectorAll("a, button, .session-card, .g-frame, .testi-card, .p-card, .job-card, [data-hover]").forEach(e=>{e.addEventListener("mouseenter",()=>{t.style.width="18px",t.style.height="18px",t.style.background="var(--gold-light)"}),e.addEventListener("mouseleave",()=>{t.style.width="10px",t.style.height="10px",t.style.background="var(--gold)"})})}function Ks(){return`
    <a href="https://wa.me/9464663405?text=Hi!%20I%27d%20like%20to%20book%20a%20session." target="_blank" id="wa-btn" aria-label="Chat on WhatsApp">
      <div class="wa-ring"></div>
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  `}function Vs(){setTimeout(()=>{const t=document.getElementById("wa-btn");t&&t.classList.add("show")},2e3)}function Gs(){return`
    <div class="mobile-cta-bar" id="mobile-cta-bar">
      <a href="https://wa.me/9464663405?text=Hi!%20I%27d%20like%20to%20book%20a%20session." target="_blank" class="mcta-btn mcta-wa">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span>WhatsApp</span>
      </a>
      <a href="tel:+919417765533" class="mcta-btn mcta-call">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        <span>Call Now</span>
      </a>
      <a href="https://wa.me/9464663405?text=Hi!%20I%27d%20like%20to%20enquire%20about%20Corporate%20Wellness%20Programs." target="_blank" class="mcta-btn mcta-corp">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <span>Corporate</span>
      </a>
    </div>
  `}function re(){return`
    <nav id="navbar">
      <a href="/" data-link class="nav-logo"><img src="/logo.png" alt="DStressHub" class="brand-logo-img"></a>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#sessions">Sessions</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="/corporate" data-link>Corporate</a></li>
        <li><a href="/careers" data-link>Careers</a></li>
        <li><a href="https://wa.me/9464663405?text=Hi!%20I%27d%20like%20to%20book%20a%20session." target="_blank" class="nav-cta">Book Now</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div class="mobile-nav" id="mobile-nav">
      <a href="#about" class="mob-link">About</a>
      <a href="#sessions" class="mob-link">Sessions</a>
      <a href="#how" class="mob-link">How It Works</a>
      <a href="#pricing" class="mob-link">Pricing</a>
      <a href="/corporate" data-link class="mob-link">Corporate</a>
      <a href="/careers" data-link class="mob-link">Careers</a>
      <a href="https://wa.me/9464663405" target="_blank" style="color:var(--gold)">Book Now →</a>
    </div>
  `}function ie(){const t=document.getElementById("hamburger"),e=document.getElementById("mobile-nav"),s=document.getElementById("navbar");if(!t||!e)return;t.addEventListener("click",()=>{t.classList.toggle("open"),e.classList.toggle("open"),document.body.style.overflow=e.classList.contains("open")?"hidden":""}),e.querySelectorAll(".mob-link").forEach(i=>{i.addEventListener("click",()=>{t.classList.remove("open"),e.classList.remove("open"),document.body.style.overflow=""})});const r=()=>{s&&s.classList.toggle("scrolled",window.scrollY>60)};window.addEventListener("scroll",r,{passive:!0}),r()}function ne(){return`
    <footer>
      <div class="footer-inner">
        <div>
          <img src="/logo.png" alt="DStressHub" class="footer-logo-img">
          <p class="footer-tagline">Healing through laughter — one joyful session at a time.</p>
          <div class="footer-socials">
            <a href="#" class="social-btn" aria-label="X (Twitter)"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="https://www.linkedin.com/in/d-stress-hub-679805396/" target="_blank" class="social-btn" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            <a href="https://www.youtube.com/@D-StressHub" target="_blank" class="social-btn" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            <a href="https://www.instagram.com/dstresshub/" target="_blank" class="social-btn" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Navigate</h4>
          <a href="#about">About Us</a>
          <a href="#sessions">Sessions</a>
          <a href="#how">How It Works</a>
          <a href="#gallery">Gallery</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <a href="/corporate" data-link>Corporate Wellness</a>
          <a href="/careers" data-link>Careers</a>
          <a href="/case-studies" data-link>Case Studies</a>
          <a href="/resources" data-link>Resources</a>
          <a href="https://wa.me/9464663405" target="_blank">Enquire</a>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <a href="https://wa.me/9464663405" target="_blank">WhatsApp Us</a>
          <a href="tel:+919417765533">+91 9417765533</a>
          <p>Available Mon–Sat</p>
          <p>9 AM – 8 PM IST</p>
          <p style="margin-top:8px">📍 SCO 75, Second Floor,<br/>Sector 40 C, Chandigarh</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} DStressHub. All rights reserved.</p>
        <p>All sessions conducted by certified laughter yoga practitioners.</p>
      </div>
    </footer>
  `}function j({tag:t,title:e,description:s="",theme:r="dark"}){return`
    <div class="section-tag">
      <div class="line" style="background:${r==="light"?"var(--olive)":"var(--gold)"}"></div>
      <span style="color:${r==="light"?"var(--olive)":"var(--gold)"}">${t}</span>
    </div>
    <h2 style="color:${r==="light"?"var(--text-dark)":"var(--text-light)"}">${e}</h2>
    ${s?`<p style="color:${r==="light"?"var(--text-body)":"var(--text-muted)"};font-size:.95rem;font-weight:300;line-height:1.8;max-width:560px;margin-top:16px;">${s}</p>`:""}
  `}let He=null;function we(){He&&He.disconnect(),He=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add("in")})},{threshold:.12,rootMargin:"0px 0px -30px 0px"}),document.querySelectorAll(".reveal").forEach(t=>{t.classList.remove("in"),He.observe(t)})}function fs(){const t=document.querySelectorAll("[data-count]");if(!t.length)return;const e=new IntersectionObserver(s=>{s.forEach(r=>{if(!r.isIntersecting)return;const i=r.target;if(i.dataset.counted)return;i.dataset.counted="true";const n=parseInt(i.dataset.count,10),a=i.dataset.suffix||"",o=i.dataset.prefix||"",l=2e3,c=performance.now();function d(u){const h=Math.min((u-c)/l,1),p=1-Math.pow(1-h,3),f=Math.floor(p*n);i.textContent=o+f.toLocaleString("en-IN")+a,h<1&&requestAnimationFrame(d)}requestAnimationFrame(d)})},{threshold:.3});t.forEach(s=>e.observe(s))}function Ys(t){t.querySelectorAll(".reveal").forEach(e=>{e.classList.remove("in"),requestAnimationFrame(()=>{requestAnimationFrame(()=>e.classList.add("in"))})})}let Re=null,Ce=null;function Xs(){vs();const t=document.getElementById("hero-bg");t&&(Ce=()=>{t.style.transform=`scale(1.08) translateY(${window.scrollY*.35}px)`},window.addEventListener("scroll",Ce,{passive:!0}));const e=document.querySelectorAll("[data-parallax] .strip-bg");e.length&&(Re=()=>{e.forEach(s=>{const r=s.parentElement.getBoundingClientRect(),i=(window.innerHeight/2-r.top-r.height/2)/window.innerHeight;s.style.transform=`translateY(${i*60}px)`})},window.addEventListener("scroll",Re,{passive:!0}))}function vs(){Ce&&(window.removeEventListener("scroll",Ce),Ce=null),Re&&(window.removeEventListener("scroll",Re),Re=null)}function Qs(){const t=document.getElementById("gallery-track");if(!t)return;let e=!1,s,r;const i=o=>{var l,c;e=!0,t.classList.add("dragging"),s=(o.pageX||((c=(l=o.touches)==null?void 0:l[0])==null?void 0:c.pageX))-t.offsetLeft,r=t.scrollLeft},n=()=>{e=!1,t.classList.remove("dragging")},a=o=>{var c,d;if(!e)return;o.preventDefault();const l=(o.pageX||((d=(c=o.touches)==null?void 0:c[0])==null?void 0:d.pageX))-t.offsetLeft;t.scrollLeft=r-(l-s)*1.5};t.addEventListener("mousedown",i),t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("mouseleave",n),t.addEventListener("mouseup",n),t.addEventListener("touchend",n),t.addEventListener("mousemove",a),t.addEventListener("touchmove",a,{passive:!1})}function Zs(t){return t.toString().toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+|-+$/g,"")}function er(t){return Zs(t)}function tr(t){return new Date(t).toLocaleDateString("en-IN",{year:"numeric",month:"short",day:"numeric"})}function E(t){return`https://wa.me/9464663405?text=${encodeURIComponent(t)}`}function K(t,e="success"){const s=document.getElementById("toast-notification");s&&s.remove();const r=document.createElement("div");r.id="toast-notification",r.className=`toast toast-${e}`,r.textContent=t,document.body.appendChild(r),requestAnimationFrame(()=>r.classList.add("show")),setTimeout(()=>{r.classList.remove("show"),setTimeout(()=>r.remove(),300)},3e3)}function nt(t,e){var s={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(s[r[i]]=t[r[i]]);return s}function sr(t,e,s,r){function i(n){return n instanceof s?n:new s(function(a){a(n)})}return new(s||(s=Promise))(function(n,a){function o(d){try{c(r.next(d))}catch(u){a(u)}}function l(d){try{c(r.throw(d))}catch(u){a(u)}}function c(d){d.done?n(d.value):i(d.value).then(o,l)}c((r=r.apply(t,e||[])).next())})}const rr=t=>t?(...e)=>t(...e):(...e)=>fetch(...e);class Ct extends Error{constructor(e,s="FunctionsError",r){super(e),this.name=s,this.context=r}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class ir extends Ct{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class $t extends Ct{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class jt extends Ct{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var mt;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(mt||(mt={}));class nr{constructor(e,{headers:s={},customFetch:r,region:i=mt.Any}={}){this.url=e,this.headers=s,this.region=i,this.fetch=rr(r)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return sr(this,arguments,void 0,function*(s,r={}){var i;let n,a;try{const{headers:o,method:l,body:c,signal:d,timeout:u}=r;let h={},{region:p}=r;p||(p=this.region);const f=new URL(`${this.url}/${s}`);p&&p!=="any"&&(h["x-region"]=p,f.searchParams.set("forceFunctionRegion",p));let v;c&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)?typeof Blob<"u"&&c instanceof Blob||c instanceof ArrayBuffer?(h["Content-Type"]="application/octet-stream",v=c):typeof c=="string"?(h["Content-Type"]="text/plain",v=c):typeof FormData<"u"&&c instanceof FormData?v=c:(h["Content-Type"]="application/json",v=JSON.stringify(c)):c&&typeof c!="string"&&!(typeof Blob<"u"&&c instanceof Blob)&&!(c instanceof ArrayBuffer)&&!(typeof FormData<"u"&&c instanceof FormData)?v=JSON.stringify(c):v=c;let w=d;u&&(a=new AbortController,n=setTimeout(()=>a.abort(),u),d?(w=a.signal,d.addEventListener("abort",()=>a.abort())):w=a.signal);const y=yield this.fetch(f.toString(),{method:l||"POST",headers:Object.assign(Object.assign(Object.assign({},h),this.headers),o),body:v,signal:w}).catch(I=>{throw new ir(I)}),_=y.headers.get("x-relay-error");if(_&&_==="true")throw new $t(y);if(!y.ok)throw new jt(y);let m=((i=y.headers.get("Content-Type"))!==null&&i!==void 0?i:"text/plain").split(";")[0].trim(),S;return m==="application/json"?S=yield y.json():m==="application/octet-stream"||m==="application/pdf"?S=yield y.blob():m==="text/event-stream"?S=y:m==="multipart/form-data"?S=yield y.formData():S=yield y.text(),{data:S,error:null,response:y}}catch(o){return{data:null,error:o,response:o instanceof jt||o instanceof $t?o.context:void 0}}finally{n&&clearTimeout(n)}})}}const gs=3,Lt=t=>Math.min(1e3*2**t,3e4),ar=[520,503],ms=["GET","HEAD","OPTIONS"];var Nt=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function Ut(t,e){return new Promise(s=>{if(e!=null&&e.aborted){s();return}const r=setTimeout(()=>{e==null||e.removeEventListener("abort",i),s()},t);function i(){clearTimeout(r),s()}e==null||e.addEventListener("abort",i)})}function or(t,e,s,r){return!(!r||s>=gs||!ms.includes(t)||!ar.includes(e))}var lr=class{constructor(t){var e,s,r,i,n;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=t.method,this.url=t.url,this.headers=new Headers(t.headers),this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=(e=t.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=t.signal,this.isMaybeSingle=(s=t.isMaybeSingle)!==null&&s!==void 0?s:!1,this.shouldStripNulls=(r=t.shouldStripNulls)!==null&&r!==void 0?r:!1,this.urlLengthLimit=(i=t.urlLengthLimit)!==null&&i!==void 0?i:8e3,this.retryEnabled=(n=t.retry)!==null&&n!==void 0?n:!0,t.fetch?this.fetch=t.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(t,e){return this.headers=new Headers(this.headers),this.headers.set(t,e),this}retry(t){return this.retryEnabled=t,this}then(t,e){var s=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const a=this.headers.get("Accept");a==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!a||a==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const r=this.fetch;let n=(async()=>{let a=0;for(;;){const c={};s.headers.forEach((u,h)=>{c[h]=u}),a>0&&(c["X-Retry-Count"]=String(a));let d;try{d=await r(s.url.toString(),{method:s.method,headers:c,body:JSON.stringify(s.body,(u,h)=>typeof h=="bigint"?h.toString():h),signal:s.signal})}catch(u){if((u==null?void 0:u.name)==="AbortError"||(u==null?void 0:u.code)==="ABORT_ERR"||!ms.includes(s.method))throw u;if(s.retryEnabled&&a<gs){const h=Lt(a);a++,await Ut(h,s.signal);continue}throw u}if(or(s.method,d.status,a,s.retryEnabled)){var o,l;const u=(o=(l=d.headers)===null||l===void 0?void 0:l.get("Retry-After"))!==null&&o!==void 0?o:null,h=u!==null?Math.max(0,parseInt(u,10)||0)*1e3:Lt(a);await d.text(),a++,await Ut(h,s.signal);continue}return await s.processResponse(d)}})();return this.shouldThrowOnError||(n=n.catch(a=>{var o;let l="",c="",d="";const u=a==null?void 0:a.cause;if(u){var h,p,f,v;const _=(h=u==null?void 0:u.message)!==null&&h!==void 0?h:"",m=(p=u==null?void 0:u.code)!==null&&p!==void 0?p:"";l=`${(f=a==null?void 0:a.name)!==null&&f!==void 0?f:"FetchError"}: ${a==null?void 0:a.message}`,l+=`

Caused by: ${(v=u==null?void 0:u.name)!==null&&v!==void 0?v:"Error"}: ${_}`,m&&(l+=` (${m})`),u!=null&&u.stack&&(l+=`
${u.stack}`)}else{var w;l=(w=a==null?void 0:a.stack)!==null&&w!==void 0?w:""}const y=this.url.toString().length;return(a==null?void 0:a.name)==="AbortError"||(a==null?void 0:a.code)==="ABORT_ERR"?(d="",c="Request was aborted (timeout or manual cancellation)",y>this.urlLengthLimit&&(c+=`. Note: Your request URL is ${y} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((u==null?void 0:u.name)==="HeadersOverflowError"||(u==null?void 0:u.code)==="UND_ERR_HEADERS_OVERFLOW")&&(d="",c="HTTP headers exceeded server limits (typically 16KB)",y>this.urlLengthLimit&&(c+=`. Your request URL is ${y} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(o=a==null?void 0:a.name)!==null&&o!==void 0?o:"FetchError"}: ${a==null?void 0:a.message}`,details:l,hint:c,code:d},data:null,count:null,status:0,statusText:""}})),n.then(t,e)}async processResponse(t){var e=this;let s=null,r=null,i=null,n=t.status,a=t.statusText;if(t.ok){var o,l;if(e.method!=="HEAD"){var c;const h=await t.text();if(h!=="")if(e.headers.get("Accept")==="text/csv")r=h;else if(e.headers.get("Accept")&&(!((c=e.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text")))r=h;else try{r=JSON.parse(h)}catch{if(s={message:h},r=null,e.shouldThrowOnError)throw new Nt({message:h,details:"",hint:"",code:""})}}const d=(o=e.headers.get("Prefer"))===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),u=(l=t.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");d&&u&&u.length>1&&(i=parseInt(u[1])),e.isMaybeSingle&&Array.isArray(r)&&(r.length>1?(s={code:"PGRST116",details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},r=null,i=null,n=406,a="Not Acceptable"):r.length===1?r=r[0]:r=null)}else{const d=await t.text();try{s=JSON.parse(d),Array.isArray(s)&&t.status===404&&(r=[],s=null,n=200,a="OK")}catch{t.status===404&&d===""?(n=204,a="No Content"):s={message:d}}if(s&&e.shouldThrowOnError)throw new Nt(s)}return{success:s===null,error:s,data:r,count:i,status:n,statusText:a}}returns(){return this}overrideTypes(){return this}},cr=class extends lr{throwOnError(){return super.throwOnError()}select(t){let e=!1;const s=(t??"*").split("").map(r=>/\s/.test(r)&&!e?"":(r==='"'&&(e=!e),r)).join("");return this.url.searchParams.set("select",s),this.headers.append("Prefer","return=representation"),this}order(t,{ascending:e=!0,nullsFirst:s,foreignTable:r,referencedTable:i=r}={}){const n=i?`${i}.order`:"order",a=this.url.searchParams.get(n);return this.url.searchParams.set(n,`${a?`${a},`:""}${t}.${e?"asc":"desc"}${s===void 0?"":s?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:e,referencedTable:s=e}={}){const r=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(r,`${t}`),this}range(t,e,{foreignTable:s,referencedTable:r=s}={}){const i=typeof r>"u"?"offset":`${r}.offset`,n=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(i,`${t}`),this.url.searchParams.set(n,`${e-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:t=!1,verbose:e=!1,settings:s=!1,buffers:r=!1,wal:i=!1,format:n="text"}={}){var a;const o=[t?"analyze":null,e?"verbose":null,s?"settings":null,r?"buffers":null,i?"wal":null].filter(Boolean).join("|"),l=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${n}; for="${l}"; options=${o};`),n==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(t){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${t}`),this}};const Dt=new RegExp("[,()]");var fe=class extends cr{throwOnError(){return super.throwOnError()}eq(t,e){return this.url.searchParams.append(t,`eq.${e}`),this}neq(t,e){return this.url.searchParams.append(t,`neq.${e}`),this}gt(t,e){return this.url.searchParams.append(t,`gt.${e}`),this}gte(t,e){return this.url.searchParams.append(t,`gte.${e}`),this}lt(t,e){return this.url.searchParams.append(t,`lt.${e}`),this}lte(t,e){return this.url.searchParams.append(t,`lte.${e}`),this}like(t,e){return this.url.searchParams.append(t,`like.${e}`),this}likeAllOf(t,e){return this.url.searchParams.append(t,`like(all).{${e.join(",")}}`),this}likeAnyOf(t,e){return this.url.searchParams.append(t,`like(any).{${e.join(",")}}`),this}ilike(t,e){return this.url.searchParams.append(t,`ilike.${e}`),this}ilikeAllOf(t,e){return this.url.searchParams.append(t,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(t,e){return this.url.searchParams.append(t,`ilike(any).{${e.join(",")}}`),this}regexMatch(t,e){return this.url.searchParams.append(t,`match.${e}`),this}regexIMatch(t,e){return this.url.searchParams.append(t,`imatch.${e}`),this}is(t,e){return this.url.searchParams.append(t,`is.${e}`),this}isDistinct(t,e){return this.url.searchParams.append(t,`isdistinct.${e}`),this}in(t,e){const s=Array.from(new Set(e)).map(r=>typeof r=="string"&&Dt.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(t,`in.(${s})`),this}notIn(t,e){const s=Array.from(new Set(e)).map(r=>typeof r=="string"&&Dt.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(t,`not.in.(${s})`),this}contains(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cs.{${e.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(e)}`),this}containedBy(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cd.{${e.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(e)}`),this}rangeGt(t,e){return this.url.searchParams.append(t,`sr.${e}`),this}rangeGte(t,e){return this.url.searchParams.append(t,`nxl.${e}`),this}rangeLt(t,e){return this.url.searchParams.append(t,`sl.${e}`),this}rangeLte(t,e){return this.url.searchParams.append(t,`nxr.${e}`),this}rangeAdjacent(t,e){return this.url.searchParams.append(t,`adj.${e}`),this}overlaps(t,e){return typeof e=="string"?this.url.searchParams.append(t,`ov.${e}`):this.url.searchParams.append(t,`ov.{${e.join(",")}}`),this}textSearch(t,e,{config:s,type:r}={}){let i="";r==="plain"?i="pl":r==="phrase"?i="ph":r==="websearch"&&(i="w");const n=s===void 0?"":`(${s})`;return this.url.searchParams.append(t,`${i}fts${n}.${e}`),this}match(t){return Object.entries(t).filter(([e,s])=>s!==void 0).forEach(([e,s])=>{this.url.searchParams.append(e,`eq.${s}`)}),this}not(t,e,s){return this.url.searchParams.append(t,`not.${e}.${s}`),this}or(t,{foreignTable:e,referencedTable:s=e}={}){const r=s?`${s}.or`:"or";return this.url.searchParams.append(r,`(${t})`),this}filter(t,e,s){return this.url.searchParams.append(t,`${e}.${s}`),this}},dr=class{constructor(t,{headers:e={},schema:s,fetch:r,urlLengthLimit:i=8e3,retry:n}){this.url=t,this.headers=new Headers(e),this.schema=s,this.fetch=r,this.urlLengthLimit=i,this.retry=n}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(t,e){const{head:s=!1,count:r}=e??{},i=s?"HEAD":"GET";let n=!1;const a=(t??"*").split("").map(c=>/\s/.test(c)&&!n?"":(c==='"'&&(n=!n),c)).join(""),{url:o,headers:l}=this.cloneRequestState();return o.searchParams.set("select",a),r&&l.append("Prefer",`count=${r}`),new fe({method:i,url:o,headers:l,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(t,{count:e,defaultToNull:s=!0}={}){var r;const i="POST",{url:n,headers:a}=this.cloneRequestState();if(e&&a.append("Prefer",`count=${e}`),s||a.append("Prefer","missing=default"),Array.isArray(t)){const o=t.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(o.length>0){const l=[...new Set(o)].map(c=>`"${c}"`);n.searchParams.set("columns",l.join(","))}}return new fe({method:i,url:n,headers:a,schema:this.schema,body:t,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(t,{onConflict:e,ignoreDuplicates:s=!1,count:r,defaultToNull:i=!0}={}){var n;const a="POST",{url:o,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${s?"ignore":"merge"}-duplicates`),e!==void 0&&o.searchParams.set("on_conflict",e),r&&l.append("Prefer",`count=${r}`),i||l.append("Prefer","missing=default"),Array.isArray(t)){const c=t.reduce((d,u)=>d.concat(Object.keys(u)),[]);if(c.length>0){const d=[...new Set(c)].map(u=>`"${u}"`);o.searchParams.set("columns",d.join(","))}}return new fe({method:a,url:o,headers:l,schema:this.schema,body:t,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(t,{count:e}={}){var s;const r="PATCH",{url:i,headers:n}=this.cloneRequestState();return e&&n.append("Prefer",`count=${e}`),new fe({method:r,url:i,headers:n,schema:this.schema,body:t,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:t}={}){var e;const s="DELETE",{url:r,headers:i}=this.cloneRequestState();return t&&i.append("Prefer",`count=${t}`),new fe({method:s,url:r,headers:i,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Ie(t){"@babel/helpers - typeof";return Ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ie(t)}function ur(t,e){if(Ie(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var r=s.call(t,e);if(Ie(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function hr(t){var e=ur(t,"string");return Ie(e)=="symbol"?e:e+""}function pr(t,e,s){return(e=hr(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Bt(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),s.push.apply(s,r)}return s}function Me(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Bt(Object(s),!0).forEach(function(r){pr(t,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Bt(Object(s)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(s,r))})}return t}var fr=class ys{constructor(e,{headers:s={},schema:r,fetch:i,timeout:n,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(s),this.schemaName=r,this.urlLengthLimit=a;const l=i??globalThis.fetch;n!==void 0&&n>0?this.fetch=(c,d)=>{const u=new AbortController,h=setTimeout(()=>u.abort(),n),p=d==null?void 0:d.signal;if(p){if(p.aborted)return clearTimeout(h),l(c,d);const f=()=>{clearTimeout(h),u.abort()};return p.addEventListener("abort",f,{once:!0}),l(c,Me(Me({},d),{},{signal:u.signal})).finally(()=>{clearTimeout(h),p.removeEventListener("abort",f)})}return l(c,Me(Me({},d),{},{signal:u.signal})).finally(()=>clearTimeout(h))}:this.fetch=l,this.retry=o}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new dr(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new ys(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,s={},{head:r=!1,get:i=!1,count:n}={}){var a;let o;const l=new URL(`${this.url}/rpc/${e}`);let c;const d=p=>p!==null&&typeof p=="object"&&(!Array.isArray(p)||p.some(d)),u=r&&Object.values(s).some(d);u?(o="POST",c=s):r||i?(o=r?"HEAD":"GET",Object.entries(s).filter(([p,f])=>f!==void 0).map(([p,f])=>[p,Array.isArray(f)?`{${f.join(",")}}`:`${f}`]).forEach(([p,f])=>{l.searchParams.append(p,f)})):(o="POST",c=s);const h=new Headers(this.headers);return u?h.set("Prefer",n?`count=${n},return=minimal`:"return=minimal"):n&&h.set("Prefer",`count=${n}`),new fe({method:o,url:l,headers:h,schema:this.schemaName,body:c,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class vr{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const s=globalThis;if(typeof globalThis<"u"&&typeof s.WebSocket<"u")return{type:"native",wsConstructor:s.WebSocket};const r=typeof global<"u"?global:void 0;if(r&&typeof r.WebSocket<"u")return{type:"native",wsConstructor:r.WebSocket};if(typeof globalThis<"u"&&typeof s.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&s.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const i=globalThis.process;if(i){const n=i.versions;if(n&&n.node){const a=n.node,o=parseInt(a.replace(/^v/,"").split(".")[0]);return o>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${o} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${o} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let s=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(s+=`

Suggested solution: ${e.workaround}`),new Error(s)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const gr="2.108.2",mr=`realtime-js/${gr}`,yr="1.0.0",bs="2.0.0",br=bs,wr=1e4,_r=100,te={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},ws={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},yt={connecting:"connecting",closing:"closing",closed:"closed"};class kr{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,s){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return s(this._binaryEncodeUserBroadcastPush(e));let r=[e.join_ref,e.ref,e.topic,e.event,e.payload];return s(JSON.stringify(r))}_binaryEncodeUserBroadcastPush(e){var s;return this._isArrayBuffer((s=e.payload)===null||s===void 0?void 0:s.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var s,r;const i=(r=(s=e.payload)===null||s===void 0?void 0:s.payload)!==null&&r!==void 0?r:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,i)}_encodeJsonUserBroadcastPush(e){var s,r;const i=(r=(s=e.payload)===null||s===void 0?void 0:s.payload)!==null&&r!==void 0?r:{},a=new TextEncoder().encode(JSON.stringify(i)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,s,r){var i,n;const a=e.topic,o=(i=e.ref)!==null&&i!==void 0?i:"",l=(n=e.join_ref)!==null&&n!==void 0?n:"",c=e.payload.event,d=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},u=Object.keys(d).length===0?"":JSON.stringify(d);if(l.length>255)throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`ref length ${o.length} exceeds maximum of 255`);if(a.length>255)throw new Error(`topic length ${a.length} exceeds maximum of 255`);if(c.length>255)throw new Error(`userEvent length ${c.length} exceeds maximum of 255`);if(u.length>255)throw new Error(`metadata length ${u.length} exceeds maximum of 255`);const h=this.USER_BROADCAST_PUSH_META_LENGTH+l.length+o.length+a.length+c.length+u.length,p=new ArrayBuffer(this.HEADER_LENGTH+h);let f=new DataView(p),v=0;f.setUint8(v++,this.KINDS.userBroadcastPush),f.setUint8(v++,l.length),f.setUint8(v++,o.length),f.setUint8(v++,a.length),f.setUint8(v++,c.length),f.setUint8(v++,u.length),f.setUint8(v++,s),Array.from(l,y=>f.setUint8(v++,y.charCodeAt(0))),Array.from(o,y=>f.setUint8(v++,y.charCodeAt(0))),Array.from(a,y=>f.setUint8(v++,y.charCodeAt(0))),Array.from(c,y=>f.setUint8(v++,y.charCodeAt(0))),Array.from(u,y=>f.setUint8(v++,y.charCodeAt(0)));var w=new Uint8Array(p.byteLength+r.byteLength);return w.set(new Uint8Array(p),0),w.set(new Uint8Array(r),p.byteLength),w.buffer}decode(e,s){if(this._isArrayBuffer(e)){let r=this._binaryDecode(e);return s(r)}if(typeof e=="string"){const r=JSON.parse(e),[i,n,a,o,l]=r;return s({join_ref:i,ref:n,topic:a,event:o,payload:l})}return s({})}_binaryDecode(e){const s=new DataView(e),r=s.getUint8(0),i=new TextDecoder;switch(r){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,s,i)}}_decodeUserBroadcast(e,s,r){const i=s.getUint8(1),n=s.getUint8(2),a=s.getUint8(3),o=s.getUint8(4);let l=this.HEADER_LENGTH+4;const c=r.decode(e.slice(l,l+i));l=l+i;const d=r.decode(e.slice(l,l+n));l=l+n;const u=r.decode(e.slice(l,l+a));l=l+a;const h=e.slice(l,e.byteLength),p=o===this.JSON_ENCODING?JSON.parse(r.decode(h)):h,f={type:this.BROADCAST_EVENT,event:d,payload:p};return a>0&&(f.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:f}}_isArrayBuffer(e){var s;return e instanceof ArrayBuffer||((s=e==null?void 0:e.constructor)===null||s===void 0?void 0:s.name)==="ArrayBuffer"}_pick(e,s){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([r])=>s.includes(r)))}}var T;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(T||(T={}));const qt=(t,e,s={})=>{var r;const i=(r=s.skipTypes)!==null&&r!==void 0?r:[];return e?Object.keys(e).reduce((n,a)=>(n[a]=Sr(a,t,e,i),n),{}):{}},Sr=(t,e,s,r)=>{const i=e.find(o=>o.name===t),n=i==null?void 0:i.type,a=s[t];return n&&!r.includes(n)?_s(n,a):bt(a)},_s=(t,e)=>{if(t.charAt(0)==="_"){const s=t.slice(1,t.length);return Rr(e,s)}switch(t){case T.bool:return Er(e);case T.float4:case T.float8:case T.int2:case T.int4:case T.int8:case T.numeric:case T.oid:return Tr(e);case T.json:case T.jsonb:return Ar(e);case T.timestamp:return Cr(e);case T.abstime:case T.date:case T.daterange:case T.int4range:case T.int8range:case T.money:case T.reltime:case T.text:case T.time:case T.timestamptz:case T.timetz:case T.tsrange:case T.tstzrange:return bt(e);default:return bt(e)}},bt=t=>t,Er=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},Tr=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},Ar=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch{return t}return t},Rr=(t,e)=>{if(typeof t!="string")return t;const s=t.length-1,r=t[s];if(t[0]==="{"&&r==="}"){let n;const a=t.slice(1,s);try{n=JSON.parse("["+a+"]")}catch{n=a?a.split(","):[]}return n.map(o=>_s(e,o))}return t},Cr=t=>typeof t=="string"?t.replace(" ","T"):t,ks=t=>{const e=new URL(t);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Oe=t=>typeof t=="function"?t:function(){return t},Or=typeof self<"u"?self:null,ve=typeof window<"u"?window:null,z=Or||ve||globalThis,Pr="2.0.0",xr=1e4,Ir=1e3,J={connecting:0,open:1,closing:2,closed:3},N={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Q={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},wt={longpoll:"longpoll",websocket:"websocket"},$r={complete:4},_t="base64url.bearer.phx.",We=class{constructor(t,e,s,r){this.channel=t,this.event=e,this.payload=s||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(t){this.timeout=t,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(t,e){return this.hasReceived(t)&&e(this.receivedResp.response),this.recHooks.push({status:t,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:t,response:e,_ref:s}){this.recHooks.filter(r=>r.status===t).forEach(r=>r.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,t=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=t,this.matchReceive(t)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}trigger(t,e){this.channel.trigger(this.refEvent,{status:t,response:e})}},Ss=class{constructor(t,e){this.callback=t,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},jr=class{constructor(t,e,s){this.state=N.closed,this.topic=t,this.params=Oe(e||{}),this.socket=s,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new We(this,Q.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Ss(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=N.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(r=>r.send()),this.pushBuffer=[]}),this.joinPush.receive("error",r=>{this.state=N.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=N.closed,this.socket.remove(this)}),this.onError(r=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.isJoining()&&this.joinPush.reset(),this.state=N.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new We(this,Q.leave,Oe({}),this.timeout).send(),this.state=N.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Q.reply,(r,i)=>{this.trigger(this.replyEventName(i),r)})}join(t=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=t,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=N.closed,this.bindings=[]}onClose(t){this.on(Q.close,t)}onError(t){return this.on(Q.error,e=>t(e))}on(t,e){let s=this.bindingRef++;return this.bindings.push({event:t,ref:s,callback:e}),s}off(t,e){this.bindings=this.bindings.filter(s=>!(s.event===t&&(typeof e>"u"||e===s.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(t,e,s=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new We(this,t,function(){return e},s);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(t=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=N.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(Q.close,"leave")},s=new We(this,Q.leave,Oe({}),t);return s.receive("ok",()=>e()).receive("timeout",()=>e()),s.send(),this.canPush()||s.trigger("ok",{}),s}onMessage(t,e,s){return e}filterBindings(t,e,s){return!0}isMember(t,e,s,r){return this.topic!==t?!1:r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:t,event:e,payload:s,joinRef:r}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(t=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=N.joining,this.joinPush.resend(t))}trigger(t,e,s,r){let i=this.onMessage(t,e,s,r);if(e&&!i)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let n=this.bindings.filter(a=>a.event===t&&this.filterBindings(a,e,s));for(let a=0;a<n.length;a++)n[a].callback(i,s,r||this.joinRef())}replyEventName(t){return`chan_reply_${t}`}isClosed(){return this.state===N.closed}isErrored(){return this.state===N.errored}isJoined(){return this.state===N.joined}isJoining(){return this.state===N.joining}isLeaving(){return this.state===N.leaving}},Xe=class{static request(t,e,s,r,i,n,a){if(z.XDomainRequest){let o=new z.XDomainRequest;return this.xdomainRequest(o,t,e,r,i,n,a)}else if(z.XMLHttpRequest){let o=new z.XMLHttpRequest;return this.xhrRequest(o,t,e,s,r,i,n,a)}else{if(z.fetch&&z.AbortController)return this.fetchRequest(t,e,s,r,i,n,a);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(t,e,s,r,i,n,a){let o={method:t,headers:s,body:r},l=null;return i&&(l=new AbortController,setTimeout(()=>l.abort(),i),o.signal=l.signal),z.fetch(e,o).then(c=>c.text()).then(c=>this.parseJSON(c)).then(c=>a&&a(c)).catch(c=>{c.name==="AbortError"&&n?n():a&&a(null)}),l}static xdomainRequest(t,e,s,r,i,n,a){return t.timeout=i,t.open(e,s),t.onload=()=>{let o=this.parseJSON(t.responseText);a&&a(o)},n&&(t.ontimeout=n),t.onprogress=()=>{},t.send(r),t}static xhrRequest(t,e,s,r,i,n,a,o){t.open(e,s,!0),t.timeout=n;for(let[l,c]of Object.entries(r))t.setRequestHeader(l,c);return t.onerror=()=>o&&o(null),t.onreadystatechange=()=>{if(t.readyState===$r.complete&&o){let l=this.parseJSON(t.responseText);o(l)}},a&&(t.ontimeout=a),t.send(i),t}static parseJSON(t){if(!t||t==="")return null;try{return JSON.parse(t)}catch{return console&&console.log("failed to parse JSON response",t),null}}static serialize(t,e){let s=[];for(var r in t){if(!Object.prototype.hasOwnProperty.call(t,r))continue;let i=e?`${e}[${r}]`:r,n=t[r];typeof n=="object"?s.push(this.serialize(n,i)):s.push(encodeURIComponent(i)+"="+encodeURIComponent(n))}return s.join("&")}static appendParams(t,e){if(Object.keys(e).length===0)return t;let s=t.match(/\?/)?"&":"?";return`${t}${s}${this.serialize(e)}`}},Lr=t=>{let e="",s=new Uint8Array(t),r=s.byteLength;for(let i=0;i<r;i++)e+=String.fromCharCode(s[i]);return btoa(e)},de=class{constructor(t,e){e&&e.length===2&&e[1].startsWith(_t)&&(this.authToken=atob(e[1].slice(_t.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=J.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(t){return t.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+wt.websocket),"$1/"+wt.longpoll)}endpointURL(){return Xe.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(t,e,s){this.close(t,e,s),this.readyState=J.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===J.open||this.readyState===J.connecting}poll(){const t={Accept:"application/json"};this.authToken&&(t["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",t,null,()=>this.ontimeout(),e=>{if(e){var{status:s,token:r,messages:i}=e;if(s===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=r}else s=0;switch(s){case 200:i.forEach(n=>{setTimeout(()=>this.onmessage({data:n}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=J.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${s}`)}})}send(t){typeof t!="string"&&(t=Lr(t)),this.currentBatch?this.currentBatch.push(t):this.awaitingBatchAck?this.batchBuffer.push(t):(this.currentBatch=[t],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(t){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},t.join(`
`),()=>this.onerror("timeout"),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(t,e,s){for(let i of this.reqs)i.abort();this.readyState=J.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:t,reason:e,wasClean:s});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",r)):this.onclose(r)}ajax(t,e,s,r,i){let n,a=()=>{this.reqs.delete(n),r()};n=Xe.request(t,this.endpointURL(),e,s,this.timeout,a,o=>{this.reqs.delete(n),this.isActive()&&i(o)}),this.reqs.add(n)}},Nr=class Ee{constructor(e,s={}){let r=s.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,i=>{let{onJoin:n,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Ee.syncState(this.state,i,n,a),this.pendingDiffs.forEach(l=>{this.state=Ee.syncDiff(this.state,l,n,a)}),this.pendingDiffs=[],o()}),this.channel.on(r.diff,i=>{let{onJoin:n,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(i):(this.state=Ee.syncDiff(this.state,i,n,a),o())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return Ee.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,s,r,i){let n=this.clone(e),a={},o={};return this.map(n,(l,c)=>{s[l]||(o[l]=c)}),this.map(s,(l,c)=>{let d=n[l];if(d){let u=c.metas.map(v=>v.phx_ref),h=d.metas.map(v=>v.phx_ref),p=c.metas.filter(v=>h.indexOf(v.phx_ref)<0),f=d.metas.filter(v=>u.indexOf(v.phx_ref)<0);p.length>0&&(a[l]=c,a[l].metas=p),f.length>0&&(o[l]=this.clone(d),o[l].metas=f)}else a[l]=c}),this.syncDiff(n,{joins:a,leaves:o},r,i)}static syncDiff(e,s,r,i){let{joins:n,leaves:a}=this.clone(s);return r||(r=function(){}),i||(i=function(){}),this.map(n,(o,l)=>{let c=e[o];if(e[o]=this.clone(l),c){let d=e[o].metas.map(h=>h.phx_ref),u=c.metas.filter(h=>d.indexOf(h.phx_ref)<0);e[o].metas.unshift(...u)}r(o,c,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;let d=l.metas.map(u=>u.phx_ref);c.metas=c.metas.filter(u=>d.indexOf(u.phx_ref)<0),i(o,c,l),c.metas.length===0&&delete e[o]}),e}static list(e,s){return s||(s=function(r,i){return i}),this.map(e,(r,i)=>s(r,i))}static map(e,s){return Object.getOwnPropertyNames(e).map(r=>s(r,e[r]))}static clone(e){return JSON.parse(JSON.stringify(e))}},Fe={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(t,e){if(t.payload.constructor===ArrayBuffer)return e(this.binaryEncode(t));{let s=[t.join_ref,t.ref,t.topic,t.event,t.payload];return e(JSON.stringify(s))}},decode(t,e){if(t.constructor===ArrayBuffer)return e(this.binaryDecode(t));{let[s,r,i,n,a]=JSON.parse(t);return e({join_ref:s,ref:r,topic:i,event:n,payload:a})}},binaryEncode(t){let{join_ref:e,ref:s,event:r,topic:i,payload:n}=t,a=this.META_LENGTH+e.length+s.length+i.length+r.length,o=new ArrayBuffer(this.HEADER_LENGTH+a),l=new DataView(o),c=0;l.setUint8(c++,this.KINDS.push),l.setUint8(c++,e.length),l.setUint8(c++,s.length),l.setUint8(c++,i.length),l.setUint8(c++,r.length),Array.from(e,u=>l.setUint8(c++,u.charCodeAt(0))),Array.from(s,u=>l.setUint8(c++,u.charCodeAt(0))),Array.from(i,u=>l.setUint8(c++,u.charCodeAt(0))),Array.from(r,u=>l.setUint8(c++,u.charCodeAt(0)));var d=new Uint8Array(o.byteLength+n.byteLength);return d.set(new Uint8Array(o),0),d.set(new Uint8Array(n),o.byteLength),d.buffer},binaryDecode(t){let e=new DataView(t),s=e.getUint8(0),r=new TextDecoder;switch(s){case this.KINDS.push:return this.decodePush(t,e,r);case this.KINDS.reply:return this.decodeReply(t,e,r);case this.KINDS.broadcast:return this.decodeBroadcast(t,e,r)}},decodePush(t,e,s){let r=e.getUint8(1),i=e.getUint8(2),n=e.getUint8(3),a=this.HEADER_LENGTH+this.META_LENGTH-1,o=s.decode(t.slice(a,a+r));a=a+r;let l=s.decode(t.slice(a,a+i));a=a+i;let c=s.decode(t.slice(a,a+n));a=a+n;let d=t.slice(a,t.byteLength);return{join_ref:o,ref:null,topic:l,event:c,payload:d}},decodeReply(t,e,s){let r=e.getUint8(1),i=e.getUint8(2),n=e.getUint8(3),a=e.getUint8(4),o=this.HEADER_LENGTH+this.META_LENGTH,l=s.decode(t.slice(o,o+r));o=o+r;let c=s.decode(t.slice(o,o+i));o=o+i;let d=s.decode(t.slice(o,o+n));o=o+n;let u=s.decode(t.slice(o,o+a));o=o+a;let h=t.slice(o,t.byteLength),p={status:u,response:h};return{join_ref:l,ref:c,topic:d,event:Q.reply,payload:p}},decodeBroadcast(t,e,s){let r=e.getUint8(1),i=e.getUint8(2),n=this.HEADER_LENGTH+2,a=s.decode(t.slice(n,n+r));n=n+r;let o=s.decode(t.slice(n,n+i));n=n+i;let l=t.slice(n,t.byteLength);return{join_ref:null,ref:null,topic:a,event:o,payload:l}}},Ur=class{constructor(t,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||xr,this.transport=e.transport||z.WebSocket||de,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let s=null;try{s=z&&z.sessionStorage}catch{}this.sessionStore=e.sessionStorage||s,this.establishedConnections=0,this.defaultEncoder=Fe.encode.bind(Fe),this.defaultDecoder=Fe.decode.bind(Fe),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==de?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let r=null;ve&&ve.addEventListener&&(ve.addEventListener("pagehide",i=>{this.conn&&(this.disconnect(),r=this.connectClock)}),ve.addEventListener("pageshow",i=>{r===this.connectClock&&(r=null,this.connect())}),ve.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=i=>e.rejoinAfterMs?e.rejoinAfterMs(i):[1e3,2e3,5e3][i-1]||1e4,this.reconnectAfterMs=i=>e.reconnectAfterMs?e.reconnectAfterMs(i):[10,50,100,150,200,250,500,1e3,2e3][i-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(i,n,a)=>{console.log(`${i}: ${n}`,a)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Oe(e.params||{}),this.endPoint=`${t}/${wt.websocket}`,this.vsn=e.vsn||Pr,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Ss(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken}getLongPollTransport(){return de}replaceTransport(t){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=t}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let t=Xe.appendParams(Xe.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return t.charAt(0)!=="/"?t:t.charAt(1)==="/"?`${this.protocol()}:${t}`:`${this.protocol()}://${location.host}${t}`}disconnect(t,e,s){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,t&&t()},e,s)}connect(t){t&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Oe(t)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==de?this.connectWithFallback(de,this.longPollFallbackMs):this.transportConnect())}log(t,e,s){this.logger&&this.logger(t,e,s)}hasLogger(){return this.logger!==null}onOpen(t){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,t]),e}onClose(t){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,t]),e}onError(t){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,t]),e}onMessage(t){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,t]),e}onHeartbeat(t){this.heartbeatCallback=t}ping(t){if(!this.isConnected())return!1;let e=this.makeRef(),s=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let r=this.onMessage(i=>{i.ref===e&&(this.off([r]),t(Date.now()-s))});return!0}transportName(t){switch(t){case de:return"LongPoll";default:return t.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let t;this.authToken&&(t=["phoenix",`${_t}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),t),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(t){return this.sessionStore&&this.sessionStore.getItem(t)}storeSession(t,e){this.sessionStore&&this.sessionStore.setItem(t,e)}connectWithFallback(t,e=2500){clearTimeout(this.fallbackTimer);let s=!1,r=!0,i,n,a=this.transportName(t),o=l=>{this.log("transport",`falling back to ${a}...`,l),this.off([i,n]),r=!1,this.replaceTransport(t),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o("memorized");this.fallbackTimer=setTimeout(o,e),n=this.onError(l=>{this.log("transport","error",l),r&&!s&&(clearTimeout(this.fallbackTimer),o(l))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(s=!0,!r){let l=this.transportName(t);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${l}`,"true"),this.log("transport",`established ${l} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,e),this.ping(l=>{this.log("transport","connected to primary after",l),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Ir,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(t,e,s){if(!this.conn)return t&&t();const r=this.conn;this.waitForBufferDone(r,()=>{e?r.close(e,s||""):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),t&&t()})})}waitForBufferDone(t,e,s=1){if(s===5||!t.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(t,e,s+1)},150*s)}waitForSocketClosed(t,e,s=1){if(s===5||t.readyState===J.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(t,e,s+1)},150*s)}onConnClose(t){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",t),this.triggerChanError(t),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",t)}onConnError(t){this.hasLogger()&&this.log("transport","error",t);let e=this.transport,s=this.establishedConnections;this.triggerStateCallbacks("error",t,e,s),(e===this.transport||s>0)&&this.triggerChanError(t)}triggerChanError(t){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(Q.error,t)})}connectionState(){switch(this.conn&&this.conn.readyState){case J.connecting:return"connecting";case J.open:return"open";case J.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(t){this.off(t.stateChangeRefs),this.channels=this.channels.filter(e=>e!==t)}off(t){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([s])=>t.indexOf(s)===-1)}channel(t,e={}){let s=new jr(t,e,this);return this.channels.push(s),s}push(t){if(this.hasLogger()){let{topic:e,event:s,payload:r,ref:i,join_ref:n}=t;this.log("push",`${e} ${s} (${n}, ${i})`,r)}this.isConnected()?this.encode(t,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(t,e=>this.conn.send(e)))}makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}onConnMessage(t){this.decode(t.data,e=>{let{topic:s,event:r,payload:i,ref:n,join_ref:a}=e;if(n&&n===this.pendingHeartbeatRef){const o=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(i.status==="ok"?"ok":"error",o)}catch(l){this.log("error","error in heartbeat callback",l)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${i.status||""} ${s} ${r} ${n&&"("+n+")"||""}`.trim(),i);for(let o=0;o<this.channels.length;o++){const l=this.channels[o];l.isMember(s,r,i,a)&&l.trigger(r,i,n,a)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(t,...e){try{this.stateChangeCallbacks[t].forEach(([s,r])=>{try{r(...e)}catch(i){this.log("error",`error in ${t} callback`,i)}})}catch(s){this.log("error",`error triggering ${t} callbacks`,s)}}leaveOpenTopic(t){let e=this.channels.find(s=>s.topic===t&&(s.isJoined()||s.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${t}"`),e.leave())}};class Pe{constructor(e,s){const r=Br(s);this.presence=new Nr(e.getChannel(),r),this.presence.onJoin((i,n,a)=>{const o=Pe.onJoinPayload(i,n,a);e.getChannel().trigger("presence",o)}),this.presence.onLeave((i,n,a)=>{const o=Pe.onLeavePayload(i,n,a);e.getChannel().trigger("presence",o)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return Pe.transformState(this.presence.state)}static transformState(e){return e=Dr(e),Object.getOwnPropertyNames(e).reduce((s,r)=>{const i=e[r];return s[r]=Ye(i),s},{})}static onJoinPayload(e,s,r){const i=Ht(s),n=Ye(r);return{event:"join",key:e,currentPresences:i,newPresences:n}}static onLeavePayload(e,s,r){const i=Ht(s),n=Ye(r);return{event:"leave",key:e,currentPresences:i,leftPresences:n}}}function Ye(t){return t.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function Dr(t){return JSON.parse(JSON.stringify(t))}function Br(t){return(t==null?void 0:t.events)&&{events:t.events}}function Ht(t){return t!=null&&t.metas?Ye(t):[]}var Mt;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(Mt||(Mt={}));class qr{get state(){return this.presenceAdapter.state}constructor(e,s){this.channel=e,this.presenceAdapter=new Pe(this.channel.channelAdapter,s)}}function Hr(t){if(t instanceof Error)return t;if(typeof t=="string")return new Error(t);if(t&&typeof t=="object"){const e=t;if(typeof e.code=="number"){const s=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${s}`,{cause:t})}return new Error("channel error: transport failure",{cause:t})}return new Error("channel error: connection lost")}class Mr{constructor(e,s,r){const i=Wr(r);this.channel=e.getSocket().channel(s,i),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,s){return this.channel.on(e,s)}off(e,s){this.channel.off(e,s)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,s,r){let i;try{i=this.channel.push(e,s,r)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>_r){const n=this.channel.pushBuffer.shift();n.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${n.event}`,n.payload())}return i}updateJoinPayload(e){const s=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},s),e)}canPush(){return this.socket.isConnected()&&this.state===te.joined}isJoined(){return this.state===te.joined}isJoining(){return this.state===te.joining}isClosed(){return this.state===te.closed}isLeaving(){return this.state===te.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function Wr(t){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config)}}var Wt;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(Wt||(Wt={}));var me;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(me||(me={}));var Z;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(Z||(Z={}));class xe{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,s={config:{}},r){var i,n;if(this.topic=e,this.params=s,this.socket=r,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},s.config),this.channelAdapter=new Mr(this.socket.socketAdapter,e,this.params),this.presence=new qr(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=ks(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((n=(i=this.params.config)===null||i===void 0?void 0:i.broadcast)===null||n===void 0)&&n.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,s=this.timeout){var r,i,n;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:a,presence:o,private:l}}=this.params,c=(i=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(p=>p.filter))!==null&&i!==void 0?i:[],d=!!this.bindings[me.PRESENCE]&&this.bindings[me.PRESENCE].length>0||((n=this.params.config.presence)===null||n===void 0?void 0:n.enabled)===!0,u={},h={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:d}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(u.access_token=this.socket.accessTokenValue),this._onError(p=>{e==null||e(Z.CHANNEL_ERROR,Hr(p))}),this._onClose(()=>e==null?void 0:e(Z.CLOSED)),this.updateJoinPayload(Object.assign({config:h},u)),this._updateFilterMessage(),this.channelAdapter.subscribe(s).receive("ok",async({postgres_changes:p})=>{if(this.socket._isManualToken()||this.socket.setAuth(),p===void 0){e==null||e(Z.SUBSCRIBED);return}this._updatePostgresBindings(p,e)}).receive("error",p=>{this.state=te.errored;const f=Object.values(p).join(", ")||"error";e==null||e(Z.CHANNEL_ERROR,new Error(f,{cause:p}))}).receive("timeout",()=>{e==null||e(Z.TIMED_OUT)})}return this}_updatePostgresBindings(e,s){var r;const i=this.bindings.postgres_changes,n=(r=i==null?void 0:i.length)!==null&&r!==void 0?r:0,a=[];for(let o=0;o<n;o++){const l=i[o],{filter:{event:c,schema:d,table:u,filter:h}}=l,p=e&&e[o];if(p&&p.event===c&&xe.isFilterValueEqual(p.schema,d)&&xe.isFilterValueEqual(p.table,u)&&xe.isFilterValueEqual(p.filter,h))a.push(Object.assign(Object.assign({},l),{id:p.id}));else{this.unsubscribe(),this.state=te.errored,s==null||s(Z.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=a,this.state!=te.errored&&s&&s(Z.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,s={}){return await this.send({type:"presence",event:"track",payload:e},s.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,s,r){const i=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),n=e===me.PRESENCE||e===me.POSTGRES_CHANGES;if(i&&n)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,s,r)}async httpSend(e,s,r={}){var i;if(s==null)return Promise.reject(new Error("Payload is required for httpSend()"));const n=s instanceof ArrayBuffer||ArrayBuffer.isView(s),a={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":n?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o=new URL(this.broadcastEndpointURL);o.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&o.searchParams.set("private","true");const l={method:"POST",headers:a,body:n?s:JSON.stringify(s)},c=await this._fetchWithTimeout(o.toString(),l,(i=r.timeout)!==null&&i!==void 0?i:this.timeout);if(c.status===202)return{success:!0};if(c.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let d=c.statusText;try{const u=await c.json();d=u.error||u.message||d}catch{}return Promise.reject(new Error(d))}async send(e,s={}){var r,i;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:n,payload:a}=e,o={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(o.Authorization=`Bearer ${this.socket.accessTokenValue}`);const l={method:"POST",headers:o,body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(r=s.timeout)!==null&&r!==void 0?r:this.timeout);return await((i=c.body)===null||i===void 0?void 0:i.cancel()),c.ok?"ok":"error"}catch(c){return c instanceof Error&&c.name==="AbortError"?"timed out":"error"}}else return new Promise(n=>{var a,o,l;const c=this.channelAdapter.push(e.type,e,s.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&n("ok"),c.receive("ok",()=>n("ok")),c.receive("error",()=>n("error")),c.receive("timeout",()=>n("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(s=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>s("ok")).receive("timeout",()=>s("timed out")).receive("error",()=>s("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,s,r){const i=new AbortController,n=setTimeout(()=>i.abort(),r),a=await this.socket.fetch(e,Object.assign(Object.assign({},s),{signal:i.signal}));return clearTimeout(n),a}_on(e,s,r){const i=e.toLocaleLowerCase(),n=this.channelAdapter.on(e,r),a={type:i,filter:s,callback:r,ref:n};return this.bindings[i]?this.bindings[i].push(a):this.bindings[i]=[a],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,s,r)=>{var i,n,a,o,l,c,d;const u=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(u,r))return!1;const h=(i=this.bindings[u])===null||i===void 0?void 0:i.find(p=>p.ref===e.ref);if(!h)return!0;if(["broadcast","presence","postgres_changes"].includes(u))if("id"in h){const p=h.id,f=(n=h.filter)===null||n===void 0?void 0:n.event;return p&&((a=s.ids)===null||a===void 0?void 0:a.includes(p))&&(f==="*"||(f==null?void 0:f.toLocaleLowerCase())===((o=s.data)===null||o===void 0?void 0:o.type.toLocaleLowerCase()))}else{const p=(c=(l=h==null?void 0:h.filter)===null||l===void 0?void 0:l.event)===null||c===void 0?void 0:c.toLocaleLowerCase();return p==="*"||p===((d=s==null?void 0:s.event)===null||d===void 0?void 0:d.toLocaleLowerCase())}else return h.type.toLocaleLowerCase()===u})}_notThisChannelEvent(e,s){const{close:r,error:i,leave:n,join:a}=ws;return s&&[r,i,n,a].includes(e)&&s!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,s,r)=>{if(typeof s=="object"&&"ids"in s){const i=s.data,{schema:n,table:a,commit_timestamp:o,type:l,errors:c}=i;return Object.assign(Object.assign({},{schema:n,table:a,commit_timestamp:o,eventType:l,new:{},old:{},errors:c}),this._getPayloadRecords(i))}return s})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const s in e.bindings)for(const r of e.bindings[s])this._on(r.type,r.filter,r.callback)}static isFilterValueEqual(e,s){return(e??void 0)===(s??void 0)}_getPayloadRecords(e){const s={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(s.new=qt(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(s.old=qt(e.columns,e.old_record)),s}}class Fr{constructor(e,s){this.socket=new Ur(e,s)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,s,r,i=1e4){return new Promise(n=>{setTimeout(()=>n("timeout"),i),this.socket.disconnect(()=>{e(),n("ok")},s,r)})}push(e){this.socket.push(e)}log(e,s,r){this.socket.log(e,s,r)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==yt.connecting}isDisconnecting(){return this.socket.connectionState()==yt.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Ft={HEARTBEAT_INTERVAL:25e3},zr=[1e3,2e3,5e3,1e4],Jr=1e4;function Kr(){const t=new Map;return{get length(){return t.size},clear(){t.clear()},getItem(e){return t.has(e)?t.get(e):null},key(e){var s;return(s=Array.from(t.keys())[e])!==null&&s!==void 0?s:null},removeItem(e){t.delete(e)},setItem(e,s){t.set(e,String(s))}}}function Vr(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return Kr()}const Gr=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Yr{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,s){var r;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new kr,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=n=>n?(...a)=>n(...a):(...a)=>fetch(...a),!(!((r=s==null?void 0:s.params)===null||r===void 0)&&r.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=s.params.apikey;const i=this._initializeOptions(s);this.socketAdapter=new Fr(e,i),this.httpEndpoint=ks(e),this.fetch=this._resolveFetch(s==null?void 0:s.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const s=e.message;throw s.includes("Node.js")?new Error(`${s}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${s}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,s){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,s)}getChannels(){return this.channels}async removeChannel(e){const s=await e.unsubscribe();return s==="ok"&&e.teardown(),s}async removeAllChannels(){const e=this.channels.map(async r=>{const i=await r.unsubscribe();return r.teardown(),i}),s=await Promise.all(e);return await this.disconnect(),s}log(e,s,r){this.socketAdapter.log(e,s,r)}connectionState(){return this.socketAdapter.connectionState()||yt.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,s={config:{}}){const r=`realtime:${e}`,i=this.getChannels().find(n=>n.topic===r);if(i)return i;{const n=new xe(`realtime:${e}`,s,this);return this._cancelPendingDisconnect(),this.channels.push(n),n}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(s=>s.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let s,r=!1;if(e)s=e,r=!0;else if(this.accessToken)try{s=await this.accessToken()}catch(i){this.log("error","Error fetching access token from callback",i),s=this.accessTokenValue}else s=this.accessTokenValue;r?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=s&&(this.accessTokenValue=s,this.channels.forEach(i=>{const n={access_token:s,version:mr};s&&i.updateJoinPayload(n),i.joinedOnce&&i.channelAdapter.isJoined()&&i.channelAdapter.push(ws.access_token,{access_token:s})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(s=>{this.log("error",`Error setting auth in ${e}`,s)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(s=>{this.log("error","error waiting for auth on connect",s)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(s,r)=>{s=="sent"&&this._setAuthSafely(),e&&e(s,r)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=s=>{this.log("worker","worker error",s.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=s=>{s.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let s;if(e)s=e;else{const r=new Blob([Gr],{type:"application/javascript"});s=URL.createObjectURL(r)}return s}_initializeOptions(e){var s,r,i,n,a,o,l,c,d,u,h,p;this.worker=(s=e==null?void 0:e.worker)!==null&&s!==void 0?s:!1,this.accessToken=(r=e==null?void 0:e.accessToken)!==null&&r!==void 0?r:null;const f={};f.timeout=(i=e==null?void 0:e.timeout)!==null&&i!==void 0?i:wr,f.heartbeatIntervalMs=(n=e==null?void 0:e.heartbeatIntervalMs)!==null&&n!==void 0?n:Ft.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(a=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&a!==void 0?a:2*((o=e==null?void 0:e.heartbeatIntervalMs)!==null&&o!==void 0?o:Ft.HEARTBEAT_INTERVAL),f.transport=(l=e==null?void 0:e.transport)!==null&&l!==void 0?l:vr.getWebSocketConstructor(),f.params=e==null?void 0:e.params,f.logger=e==null?void 0:e.logger,f.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),f.sessionStorage=(c=e==null?void 0:e.sessionStorage)!==null&&c!==void 0?c:Vr(),f.reconnectAfterMs=(d=e==null?void 0:e.reconnectAfterMs)!==null&&d!==void 0?d:(_=>zr[_-1]||Jr);let v,w;const y=(u=e==null?void 0:e.vsn)!==null&&u!==void 0?u:br;switch(y){case yr:v=(_,m)=>m(JSON.stringify(_)),w=(_,m)=>m(JSON.parse(_));break;case bs:v=this.serializer.encode.bind(this.serializer),w=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${f.vsn}`)}if(f.vsn=y,f.encode=(h=e==null?void 0:e.encode)!==null&&h!==void 0?h:v,f.decode=(p=e==null?void 0:e.decode)!==null&&p!==void 0?p:w,f.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,f.params=Object.assign(Object.assign({},f.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,f.autoSendHeartbeat=!this.worker}return f}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var $e=class extends Error{constructor(t,e){var s;super(t),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((s=e.icebergType)==null?void 0:s.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function Xr(t,e,s){const r=new URL(e,t);if(s)for(const[i,n]of Object.entries(s))n!==void 0&&r.searchParams.set(i,n);return r.toString()}async function Qr(t){return!t||t.type==="none"?{}:t.type==="bearer"?{Authorization:`Bearer ${t.token}`}:t.type==="header"?{[t.name]:t.value}:t.type==="custom"?await t.getHeaders():{}}function Zr(t){const e=t.fetchImpl??globalThis.fetch;return{async request({method:s,path:r,query:i,body:n,headers:a}){const o=Xr(t.baseUrl,r,i),l=await Qr(t.auth),c=await e(o,{method:s,headers:{...n?{"Content-Type":"application/json"}:{},...l,...a},body:n?JSON.stringify(n):void 0}),d=await c.text(),u=(c.headers.get("content-type")||"").includes("application/json"),h=u&&d?JSON.parse(d):d;if(!c.ok){const p=u?h:void 0,f=p==null?void 0:p.error;throw new $e((f==null?void 0:f.message)??`Request failed with status ${c.status}`,{status:c.status,icebergType:f==null?void 0:f.type,icebergCode:f==null?void 0:f.code,details:p})}return{status:c.status,headers:c.headers,data:h}}}}function ze(t){return t.join("")}var ei=class{constructor(t,e=""){this.client=t,this.prefix=e}async listNamespaces(t){const e=t?{parent:ze(t.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(r=>({namespace:r}))}async createNamespace(t,e){const s={namespace:t.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:s})).data}async dropNamespace(t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${ze(t.namespace)}`})}async loadNamespaceMetadata(t){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ze(t.namespace)}`})).data.properties}}async namespaceExists(t){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${ze(t.namespace)}`}),!0}catch(e){if(e instanceof $e&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(t,e){try{return await this.createNamespace(t,e)}catch(s){if(s instanceof $e&&s.status===409)return;throw s}}};function ue(t){return t.join("")}var ti=class{constructor(t,e="",s){this.client=t,this.prefix=e,this.accessDelegation=s}async listTables(t){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ue(t.namespace)}/tables`})).data.identifiers}async createTable(t,e){const s={};return this.accessDelegation&&(s["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${ue(t.namespace)}/tables`,body:e,headers:s})).data.metadata}async updateTable(t,e){const s=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${ue(t.namespace)}/tables/${t.name}`,body:e});return{"metadata-location":s.data["metadata-location"],metadata:s.data.metadata}}async dropTable(t,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${ue(t.namespace)}/tables/${t.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(t){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ue(t.namespace)}/tables/${t.name}`,headers:e})).data.metadata}async tableExists(t){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${ue(t.namespace)}/tables/${t.name}`,headers:e}),!0}catch(s){if(s instanceof $e&&s.status===404)return!1;throw s}}async createTableIfNotExists(t,e){try{return await this.createTable(t,e)}catch(s){if(s instanceof $e&&s.status===409)return await this.loadTable({namespace:t.namespace,name:e.name});throw s}}},si=class{constructor(t){var r;let e="v1";t.catalogName&&(e+=`/${t.catalogName}`);const s=t.baseUrl.endsWith("/")?t.baseUrl:`${t.baseUrl}/`;this.client=Zr({baseUrl:s,auth:t.auth,fetchImpl:t.fetch}),this.accessDelegation=(r=t.accessDelegation)==null?void 0:r.join(","),this.namespaceOps=new ei(this.client,e),this.tableOps=new ti(this.client,e,this.accessDelegation)}async listNamespaces(t){return this.namespaceOps.listNamespaces(t)}async createNamespace(t,e){return this.namespaceOps.createNamespace(t,e)}async dropNamespace(t){await this.namespaceOps.dropNamespace(t)}async loadNamespaceMetadata(t){return this.namespaceOps.loadNamespaceMetadata(t)}async listTables(t){return this.tableOps.listTables(t)}async createTable(t,e){return this.tableOps.createTable(t,e)}async updateTable(t,e){return this.tableOps.updateTable(t,e)}async dropTable(t,e){await this.tableOps.dropTable(t,e)}async loadTable(t){return this.tableOps.loadTable(t)}async namespaceExists(t){return this.namespaceOps.namespaceExists(t)}async tableExists(t){return this.tableOps.tableExists(t)}async createNamespaceIfNotExists(t,e){return this.namespaceOps.createNamespaceIfNotExists(t,e)}async createTableIfNotExists(t,e){return this.tableOps.createTableIfNotExists(t,e)}};function je(t){"@babel/helpers - typeof";return je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},je(t)}function ri(t,e){if(je(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var r=s.call(t,e);if(je(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ii(t){var e=ri(t,"string");return je(e)=="symbol"?e:e+""}function ni(t,e,s){return(e=ii(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function zt(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),s.push.apply(s,r)}return s}function k(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?zt(Object(s),!0).forEach(function(r){ni(t,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):zt(Object(s)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(s,r))})}return t}var at=class extends Error{constructor(t,e="storage",s,r){super(t),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=s,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function ot(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}var kt=class extends at{constructor(t,e,s,r="storage"){super(t,r,e,s),this.name=r==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=s}toJSON(){return k({},super.toJSON())}},Es=class extends at{constructor(t,e,s="storage"){super(t,s),this.name=s==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function Qe(t,e,s){const r=k({},t),i=e.toLowerCase();for(const n of Object.keys(r))n.toLowerCase()===i&&delete r[n];return r[i]=s,r}function ai(t){const e={};for(const[s,r]of Object.entries(t))e[s.toLowerCase()]=r;return e}const oi=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),li=t=>{if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},St=t=>{if(Array.isArray(t))return t.map(s=>St(s));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([s,r])=>{const i=s.replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace(/[-_]/g,""));e[i]=St(r)}),e},ci=t=>!t||typeof t!="string"||t.length===0||t.length>100||t.trim()!==t||t.includes("/")||t.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(t),Jt=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const s=e.error;if(typeof s.message=="string")return s.message}}return JSON.stringify(t)},di=async(t,e,s,r)=>{if(t!==null&&typeof t=="object"&&"json"in t&&typeof t.json=="function"){const i=t;let n=parseInt(String(i.status),10);Number.isFinite(n)||(n=500),i.json().then(a=>{const o=(a==null?void 0:a.statusCode)||(a==null?void 0:a.code)||n+"";e(new kt(Jt(a),n,o,r))}).catch(()=>{const a=n+"";e(new kt(i.statusText||`HTTP ${n} error`,n,a,r))})}else e(new Es(Jt(t),t,r))},ui=(t,e,s,r)=>{const i={method:t,headers:(e==null?void 0:e.headers)||{}};if(t==="GET"||t==="HEAD"||!r)return k(k({},i),s);if(li(r)){var n;const a=(e==null?void 0:e.headers)||{};let o;for(const[l,c]of Object.entries(a))l.toLowerCase()==="content-type"&&(o=c);i.headers=Qe(a,"Content-Type",(n=o)!==null&&n!==void 0?n:"application/json"),i.body=JSON.stringify(r)}else i.body=r;return e!=null&&e.duplex&&(i.duplex=e.duplex),k(k({},i),s)};async function Se(t,e,s,r,i,n,a){return new Promise((o,l)=>{t(s,ui(e,r,i,n)).then(c=>{if(!c.ok)throw c;if(r!=null&&r.noResolveJson)return c;if(a==="vectors"){const d=c.headers.get("content-type");if(c.headers.get("content-length")==="0"||c.status===204)return{};if(!d||!d.includes("application/json"))return{}}return c.json()}).then(c=>o(c)).catch(c=>di(c,l,r,a))})}function Ts(t="storage"){return{get:async(e,s,r,i)=>Se(e,"GET",s,r,i,void 0,t),post:async(e,s,r,i,n)=>Se(e,"POST",s,i,n,r,t),put:async(e,s,r,i,n)=>Se(e,"PUT",s,i,n,r,t),head:async(e,s,r,i)=>Se(e,"HEAD",s,k(k({},r),{},{noResolveJson:!0}),i,void 0,t),remove:async(e,s,r,i,n)=>Se(e,"DELETE",s,i,n,r,t)}}const hi=Ts("storage"),{get:Le,post:M,put:Et,head:pi,remove:Ot}=hi,D=Ts("vectors");var _e=class{constructor(t,e={},s,r="storage"){this.shouldThrowOnError=!1,this.url=t,this.headers=ai(e),this.fetch=oi(s),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,e){return this.headers=Qe(this.headers,t,e),this}async handleOperation(t){var e=this;try{return{data:await t(),error:null}}catch(s){if(e.shouldThrowOnError)throw s;if(ot(s))return{data:null,error:s};throw s}}};let As;As=Symbol.toStringTag;var fi=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[As]="StreamDownloadBuilder",this.promise=null}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:(await t.downloadFn()).body,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(ot(e))return{data:null,error:e};throw e}}};let Rs;Rs=Symbol.toStringTag;var vi=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[Rs]="BlobDownloadBuilder",this.promise=null}asStream(){return new fi(this.downloadFn,this.shouldThrowOnError)}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:await(await t.downloadFn()).blob(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(ot(e))return{data:null,error:e};throw e}}};const gi={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Kt={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var mi=class extends _e{constructor(t,e={},s,r){super(t,e,r,"storage"),this.bucketId=s}async uploadOrUpdate(t,e,s,r){var i=this;return i.handleOperation(async()=>{let n;const a=k(k({},Kt),r);let o=k(k({},i.headers),t==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;if(typeof Blob<"u"&&s instanceof Blob?(n=new FormData,n.append("cacheControl",a.cacheControl),l&&n.append("metadata",i.encodeMetadata(l)),n.append("",s)):typeof FormData<"u"&&s instanceof FormData?(n=s,n.has("cacheControl")||n.append("cacheControl",a.cacheControl),l&&!n.has("metadata")&&n.append("metadata",i.encodeMetadata(l))):(n=s,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=i.toBase64(i.encodeMetadata(l))),(typeof ReadableStream<"u"&&n instanceof ReadableStream||n&&typeof n=="object"&&"pipe"in n&&typeof n.pipe=="function")&&!a.duplex&&(a.duplex="half")),r!=null&&r.headers)for(const[h,p]of Object.entries(r.headers))o=Qe(o,h,p);const c=i._removeEmptyFolders(e),d=i._getFinalPath(c),u=await(t=="PUT"?Et:M)(i.fetch,`${i.url}/object/${d}`,n,k({headers:o},a!=null&&a.duplex?{duplex:a.duplex}:{}));return{path:c,id:u.Id,fullPath:u.Key}})}async upload(t,e,s){return this.uploadOrUpdate("POST",t,e,s)}async uploadToSignedUrl(t,e,s,r){var i=this;const n=i._removeEmptyFolders(t),a=i._getFinalPath(n),o=new URL(i.url+`/object/upload/sign/${a}`);return o.searchParams.set("token",e),i.handleOperation(async()=>{let l;const c=k(k({},Kt),r);let d=k(k({},i.headers),{"x-upsert":String(c.upsert)});const u=c.metadata;if(typeof Blob<"u"&&s instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),u&&l.append("metadata",i.encodeMetadata(u)),l.append("",s)):typeof FormData<"u"&&s instanceof FormData?(l=s,l.has("cacheControl")||l.append("cacheControl",c.cacheControl),u&&!l.has("metadata")&&l.append("metadata",i.encodeMetadata(u))):(l=s,d["cache-control"]=`max-age=${c.cacheControl}`,d["content-type"]=c.contentType,u&&(d["x-metadata"]=i.toBase64(i.encodeMetadata(u))),(typeof ReadableStream<"u"&&l instanceof ReadableStream||l&&typeof l=="object"&&"pipe"in l&&typeof l.pipe=="function")&&!c.duplex&&(c.duplex="half")),r!=null&&r.headers)for(const[h,p]of Object.entries(r.headers))d=Qe(d,h,p);return{path:n,fullPath:(await Et(i.fetch,o.toString(),l,k({headers:d},c!=null&&c.duplex?{duplex:c.duplex}:{}))).Key}})}async createSignedUploadUrl(t,e){var s=this;return s.handleOperation(async()=>{let r=s._getFinalPath(t);const i=k({},s.headers);e!=null&&e.upsert&&(i["x-upsert"]="true");const n=await M(s.fetch,`${s.url}/object/upload/sign/${r}`,{},{headers:i}),a=new URL(s.url+n.url),o=a.searchParams.get("token");if(!o)throw new at("No token returned by API");return{signedUrl:a.toString(),path:t,token:o}})}async update(t,e,s){return this.uploadOrUpdate("PUT",t,e,s)}async move(t,e,s){var r=this;return r.handleOperation(async()=>await M(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:t,destinationKey:e,destinationBucket:s==null?void 0:s.destinationBucket},{headers:r.headers}))}async copy(t,e,s){var r=this;return r.handleOperation(async()=>({path:(await M(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:t,destinationKey:e,destinationBucket:s==null?void 0:s.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(t,e,s){var r=this;return r.handleOperation(async()=>{let i=r._getFinalPath(t);const n=typeof(s==null?void 0:s.transform)=="object"&&s.transform!==null&&Object.keys(s.transform).length>0;let a=await M(r.fetch,`${r.url}/object/sign/${i}`,k({expiresIn:e},n?{transform:s.transform}:{}),{headers:r.headers});const o=new URLSearchParams;s!=null&&s.download&&o.set("download",s.download===!0?"":s.download),(s==null?void 0:s.cacheNonce)!=null&&o.set("cacheNonce",String(s.cacheNonce));const l=o.toString();return{signedUrl:encodeURI(`${r.url}${a.signedURL}${l?`&${l}`:""}`)}})}async createSignedUrls(t,e,s){var r=this;return r.handleOperation(async()=>{const i=await M(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:e,paths:t},{headers:r.headers}),n=new URLSearchParams;s!=null&&s.download&&n.set("download",s.download===!0?"":s.download),(s==null?void 0:s.cacheNonce)!=null&&n.set("cacheNonce",String(s.cacheNonce));const a=n.toString();return i.map(o=>k(k({},o),{},{signedUrl:o.signedURL?encodeURI(`${r.url}${o.signedURL}${a?`&${a}`:""}`):null}))})}download(t,e,s){const r=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",i=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(i,e.transform),(e==null?void 0:e.cacheNonce)!=null&&i.set("cacheNonce",String(e.cacheNonce));const n=i.toString(),a=this._getFinalPath(t),o=()=>Le(this.fetch,`${this.url}/${r}/${a}${n?`?${n}`:""}`,{headers:this.headers,noResolveJson:!0},s);return new vi(o,this.shouldThrowOnError)}async info(t){var e=this;const s=e._getFinalPath(t);return e.handleOperation(async()=>St(await Le(e.fetch,`${e.url}/object/info/${s}`,{headers:e.headers})))}async exists(t){var e=this;const s=e._getFinalPath(t);try{return await pi(e.fetch,`${e.url}/object/${s}`,{headers:e.headers}),{data:!0,error:null}}catch(i){if(e.shouldThrowOnError)throw i;if(ot(i)){var r;const n=i instanceof kt?i.status:i instanceof Es?(r=i.originalError)===null||r===void 0?void 0:r.status:void 0;if(n!==void 0&&[400,404].includes(n))return{data:!1,error:i}}throw i}}getPublicUrl(t,e){const s=this._getFinalPath(t),r=new URLSearchParams;e!=null&&e.download&&r.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(r,e.transform),(e==null?void 0:e.cacheNonce)!=null&&r.set("cacheNonce",String(e.cacheNonce));const i=r.toString(),n=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${n}/public/${s}`)+(i?`?${i}`:"")}}}async remove(t){var e=this;return e.handleOperation(async()=>await Ot(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:t},{headers:e.headers}))}async list(t,e,s){var r=this;return r.handleOperation(async()=>{const i=k(k(k({},gi),e),{},{prefix:t||""});return await M(r.fetch,`${r.url}/object/list/${r.bucketId}`,i,{headers:r.headers},s)})}async listV2(t,e){var s=this;return s.handleOperation(async()=>{const r=k({},t);return await M(s.fetch,`${s.url}/object/list-v2/${s.bucketId}`,r,{headers:s.headers},e)})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(t,e){return e.width&&t.set("width",e.width.toString()),e.height&&t.set("height",e.height.toString()),e.resize&&t.set("resize",e.resize),e.format&&t.set("format",e.format),e.quality&&t.set("quality",e.quality.toString()),t}};const yi="2.108.2",Be={"X-Client-Info":`storage-js/${yi}`};var bi=class extends _e{constructor(t,e={},s,r){const i=new URL(t);r!=null&&r.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes("storage.supabase.")&&(i.hostname=i.hostname.replace("supabase.","storage.supabase."));const n=i.href.replace(/\/$/,""),a=k(k({},Be),e);super(n,a,s,"storage")}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const s=e.listBucketOptionsToQueryString(t);return await Le(e.fetch,`${e.url}/bucket${s}`,{headers:e.headers})})}async getBucket(t){var e=this;return e.handleOperation(async()=>await Le(e.fetch,`${e.url}/bucket/${t}`,{headers:e.headers}))}async createBucket(t,e={public:!1}){var s=this;return s.handleOperation(async()=>await M(s.fetch,`${s.url}/bucket`,{id:t,name:t,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:s.headers}))}async updateBucket(t,e){var s=this;return s.handleOperation(async()=>await Et(s.fetch,`${s.url}/bucket/${t}`,{id:t,name:t,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:s.headers}))}async emptyBucket(t){var e=this;return e.handleOperation(async()=>await M(e.fetch,`${e.url}/bucket/${t}/empty`,{},{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Ot(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}listBucketOptionsToQueryString(t){const e={};return t&&("limit"in t&&(e.limit=String(t.limit)),"offset"in t&&(e.offset=String(t.offset)),t.search&&(e.search=t.search),t.sortColumn&&(e.sortColumn=t.sortColumn),t.sortOrder&&(e.sortOrder=t.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},wi=class extends _e{constructor(t,e={},s){const r=t.replace(/\/$/,""),i=k(k({},Be),e);super(r,i,s,"storage")}async createBucket(t){var e=this;return e.handleOperation(async()=>await M(e.fetch,`${e.url}/bucket`,{name:t},{headers:e.headers}))}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const s=new URLSearchParams;(t==null?void 0:t.limit)!==void 0&&s.set("limit",t.limit.toString()),(t==null?void 0:t.offset)!==void 0&&s.set("offset",t.offset.toString()),t!=null&&t.sortColumn&&s.set("sortColumn",t.sortColumn),t!=null&&t.sortOrder&&s.set("sortOrder",t.sortOrder),t!=null&&t.search&&s.set("search",t.search);const r=s.toString(),i=r?`${e.url}/bucket?${r}`:`${e.url}/bucket`;return await Le(e.fetch,i,{headers:e.headers})})}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Ot(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}from(t){var e=this;if(!ci(t))throw new at("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const s=new si({baseUrl:this.url,catalogName:t,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(s,{get(i,n){const a=i[n];return typeof a!="function"?a:async(...o)=>{try{return{data:await a.apply(i,o),error:null}}catch(l){if(r)throw l;return{data:null,error:l}}}}})}},_i=class extends _e{constructor(t,e={},s){const r=t.replace(/\/$/,""),i=k(k({},Be),{},{"Content-Type":"application/json"},e);super(r,i,s,"vectors")}async createIndex(t){var e=this;return e.handleOperation(async()=>await D.post(e.fetch,`${e.url}/CreateIndex`,t,{headers:e.headers})||{})}async getIndex(t,e){var s=this;return s.handleOperation(async()=>await D.post(s.fetch,`${s.url}/GetIndex`,{vectorBucketName:t,indexName:e},{headers:s.headers}))}async listIndexes(t){var e=this;return e.handleOperation(async()=>await D.post(e.fetch,`${e.url}/ListIndexes`,t,{headers:e.headers}))}async deleteIndex(t,e){var s=this;return s.handleOperation(async()=>await D.post(s.fetch,`${s.url}/DeleteIndex`,{vectorBucketName:t,indexName:e},{headers:s.headers})||{})}},ki=class extends _e{constructor(t,e={},s){const r=t.replace(/\/$/,""),i=k(k({},Be),{},{"Content-Type":"application/json"},e);super(r,i,s,"vectors")}async putVectors(t){var e=this;if(t.vectors.length<1||t.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await D.post(e.fetch,`${e.url}/PutVectors`,t,{headers:e.headers})||{})}async getVectors(t){var e=this;return e.handleOperation(async()=>await D.post(e.fetch,`${e.url}/GetVectors`,t,{headers:e.headers}))}async listVectors(t){var e=this;if(t.segmentCount!==void 0){if(t.segmentCount<1||t.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(t.segmentIndex!==void 0&&(t.segmentIndex<0||t.segmentIndex>=t.segmentCount))throw new Error(`segmentIndex must be between 0 and ${t.segmentCount-1}`)}return e.handleOperation(async()=>await D.post(e.fetch,`${e.url}/ListVectors`,t,{headers:e.headers}))}async queryVectors(t){var e=this;return e.handleOperation(async()=>await D.post(e.fetch,`${e.url}/QueryVectors`,t,{headers:e.headers}))}async deleteVectors(t){var e=this;if(t.keys.length<1||t.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await D.post(e.fetch,`${e.url}/DeleteVectors`,t,{headers:e.headers})||{})}},Si=class extends _e{constructor(t,e={},s){const r=t.replace(/\/$/,""),i=k(k({},Be),{},{"Content-Type":"application/json"},e);super(r,i,s,"vectors")}async createBucket(t){var e=this;return e.handleOperation(async()=>await D.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}async getBucket(t){var e=this;return e.handleOperation(async()=>await D.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:t},{headers:e.headers}))}async listBuckets(t={}){var e=this;return e.handleOperation(async()=>await D.post(e.fetch,`${e.url}/ListVectorBuckets`,t,{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await D.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}},Ei=class extends Si{constructor(t,e={}){super(t,e.headers||{},e.fetch)}from(t){return new Ti(this.url,this.headers,t,this.fetch)}async createBucket(t){var e=()=>super.createBucket,s=this;return e().call(s,t)}async getBucket(t){var e=()=>super.getBucket,s=this;return e().call(s,t)}async listBuckets(t={}){var e=()=>super.listBuckets,s=this;return e().call(s,t)}async deleteBucket(t){var e=()=>super.deleteBucket,s=this;return e().call(s,t)}},Ti=class extends _i{constructor(t,e,s,r){super(t,e,r),this.vectorBucketName=s}async createIndex(t){var e=()=>super.createIndex,s=this;return e().call(s,k(k({},t),{},{vectorBucketName:s.vectorBucketName}))}async listIndexes(t={}){var e=()=>super.listIndexes,s=this;return e().call(s,k(k({},t),{},{vectorBucketName:s.vectorBucketName}))}async getIndex(t){var e=()=>super.getIndex,s=this;return e().call(s,s.vectorBucketName,t)}async deleteIndex(t){var e=()=>super.deleteIndex,s=this;return e().call(s,s.vectorBucketName,t)}index(t){return new Ai(this.url,this.headers,this.vectorBucketName,t,this.fetch)}},Ai=class extends ki{constructor(t,e,s,r,i){super(t,e,i),this.vectorBucketName=s,this.indexName=r}async putVectors(t){var e=()=>super.putVectors,s=this;return e().call(s,k(k({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async getVectors(t){var e=()=>super.getVectors,s=this;return e().call(s,k(k({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async listVectors(t={}){var e=()=>super.listVectors,s=this;return e().call(s,k(k({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async queryVectors(t){var e=()=>super.queryVectors,s=this;return e().call(s,k(k({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async deleteVectors(t){var e=()=>super.deleteVectors,s=this;return e().call(s,k(k({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}},Ri=class extends bi{constructor(t,e={},s,r){super(t,e,s,r)}from(t){return new mi(this.url,this.headers,t,this.fetch)}get vectors(){return new Ei(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new wi(this.url+"/iceberg",this.headers,this.fetch)}};const Cs="2.108.2",ee=30*1e3,Te=3,dt=Te*ee,Ci=2*ee,Oi="http://localhost:9999",Pi="supabase.auth.token",xi={"X-Client-Info":`gotrue-js/${Cs}`},Tt="X-Supabase-Api-Version",Os={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Ii=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,$i=600*1e3;class Ne extends Error{constructor(e,s,r){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=s,this.code=r}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function g(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class ji extends Ne{constructor(e,s,r){super(e,s,r),this.name="AuthApiError",this.status=s,this.code=r}}function Li(t){return g(t)&&t.name==="AuthApiError"}class W extends Ne{constructor(e,s){super(e),this.name="AuthUnknownError",this.originalError=s}}class G extends Ne{constructor(e,s,r,i){super(e,r,i),this.name=s,this.status=r}}class x extends G{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Je(t){return g(t)&&t.name==="AuthSessionMissingError"}class he extends G{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Ke extends G{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Ve extends G{constructor(e,s=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=s}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function Ni(t){return g(t)&&t.name==="AuthImplicitGrantRedirectError"}class Vt extends G{constructor(e,s=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=s}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class Ui extends G{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class At extends G{constructor(e,s){super(e,"AuthRetryableFetchError",s,void 0)}}function Gt(t){return g(t)&&t.name==="AuthRetryableFetchError"}class Yt extends G{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function Di(t){return g(t)&&t.name==="AuthRefreshDiscardedError"}class Xt extends G{constructor(e,s,r){super(e,"AuthWeakPasswordError",s,"weak_password"),this.reasons=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class Ze extends G{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const et="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Qt=` 	
\r=`.split(""),Bi=(()=>{const t=new Array(128);for(let e=0;e<t.length;e+=1)t[e]=-1;for(let e=0;e<Qt.length;e+=1)t[Qt[e].charCodeAt(0)]=-2;for(let e=0;e<et.length;e+=1)t[et[e].charCodeAt(0)]=e;return t})();function Zt(t,e,s){if(t!==null)for(e.queue=e.queue<<8|t,e.queuedBits+=8;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;s(et[r]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;s(et[r]),e.queuedBits-=6}}function Ps(t,e,s){const r=Bi[t];if(r>-1)for(e.queue=e.queue<<6|r,e.queuedBits+=6;e.queuedBits>=8;)s(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(r===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)}}function es(t){const e=[],s=a=>{e.push(String.fromCodePoint(a))},r={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},n=a=>{Mi(a,r,s)};for(let a=0;a<t.length;a+=1)Ps(t.charCodeAt(a),i,n);return e.join("")}function qi(t,e){if(t<=127){e(t);return}else if(t<=2047){e(192|t>>6),e(128|t&63);return}else if(t<=65535){e(224|t>>12),e(128|t>>6&63),e(128|t&63);return}else if(t<=1114111){e(240|t>>18),e(128|t>>12&63),e(128|t>>6&63),e(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function Hi(t,e){for(let s=0;s<t.length;s+=1){let r=t.charCodeAt(s);if(r>55295&&r<=56319){const i=(r-55296)*1024&65535;r=(t.charCodeAt(s+1)-56320&65535|i)+65536,s+=1}qi(r,e)}}function Mi(t,e,s){if(e.utf8seq===0){if(t<=127){s(t);return}for(let r=1;r<6;r+=1)if((t>>7-r&1)===0){e.utf8seq=r;break}if(e.utf8seq===2)e.codepoint=t&31;else if(e.utf8seq===3)e.codepoint=t&15;else if(e.utf8seq===4)e.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|t&63,e.utf8seq-=1,e.utf8seq===0&&s(e.codepoint)}}function be(t){const e=[],s={queue:0,queuedBits:0},r=i=>{e.push(i)};for(let i=0;i<t.length;i+=1)Ps(t.charCodeAt(i),s,r);return new Uint8Array(e)}function Wi(t){const e=[];return Hi(t,s=>e.push(s)),new Uint8Array(e)}function ce(t){const e=[],s={queue:0,queuedBits:0},r=i=>{e.push(i)};return t.forEach(i=>Zt(i,s,r)),Zt(null,s,r),e.join("")}function Fi(t){return Math.round(Date.now()/1e3)+t}function zi(){return Symbol("auth-callback")}const L=()=>typeof window<"u"&&typeof document<"u",ae={tested:!1,writable:!1},xs=()=>{if(!L())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ae.tested)return ae.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),ae.tested=!0,ae.writable=!0}catch{ae.tested=!0,ae.writable=!1}return ae.writable};function Ji(t){const e={},s=new URL(t);if(s.hash&&s.hash[0]==="#")try{new URLSearchParams(s.hash.substring(1)).forEach((i,n)=>{e[n]=i})}catch{}return s.searchParams.forEach((r,i)=>{e[i]=r}),e}const Is=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),Ki=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",ge=async(t,e,s)=>{await t.setItem(e,JSON.stringify(s))},q=async(t,e)=>{const s=await t.getItem(e);if(!s)return null;try{return JSON.parse(s)}catch{return null}},O=async(t,e)=>{await t.removeItem(e)};class lt{constructor(){this.promise=new lt.promiseConstructor((e,s)=>{this.resolve=e,this.reject=s})}}lt.promiseConstructor=Promise;function Ge(t){const e=t.split(".");if(e.length!==3)throw new Ze("Invalid JWT structure");for(let r=0;r<e.length;r++)if(!Ii.test(e[r]))throw new Ze("JWT not in base64url format");return{header:JSON.parse(es(e[0])),payload:JSON.parse(es(e[1])),signature:be(e[2]),raw:{header:e[0],payload:e[1]}}}async function Vi(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function Gi(t,e){return new Promise((r,i)=>{(async()=>{for(let n=0;n<1/0;n++)try{const a=await t(n);if(!e(n,null,a)){r(a);return}}catch(a){if(!e(n,a)){i(a);return}}})()})}function Yi(t){return("0"+t.toString(16)).substr(-2)}function Xi(){const e=new Uint32Array(56);if(typeof crypto>"u"){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=s.length;let i="";for(let n=0;n<56;n++)i+=s.charAt(Math.floor(Math.random()*r));return i}return crypto.getRandomValues(e),Array.from(e,Yi).join("")}async function Qi(t){const s=new TextEncoder().encode(t),r=await crypto.subtle.digest("SHA-256",s),i=new Uint8Array(r);return Array.from(i).map(n=>String.fromCharCode(n)).join("")}async function Zi(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const s=await Qi(t);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function oe(t,e,s=!1){const r=Xi();let i=r;s&&(i+="/recovery"),await ge(t,`${e}-code-verifier`,i);const n=await Zi(r);return[n,r===n?"plain":"s256"]}const en=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function tn(t){const e=t.headers.get(Tt);if(!e||!e.match(en))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function sn(t){if(!t)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(t<=e)throw new Error("JWT has expired")}function rn(t){switch(t){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const nn=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function X(t){if(!nn.test(t))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function H(t){if(!t.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function ut(){const t={};return new Proxy(t,{get:(e,s)=>{if(s==="__isUserNotAvailableProxy")return!0;if(typeof s=="symbol"){const r=s.toString();if(r==="Symbol(Symbol.toPrimitive)"||r==="Symbol(Symbol.toStringTag)"||r==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${s}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function an(t,e){return new Proxy(t,{get:(s,r,i)=>{if(r==="__isInsecureUserWarningProxy")return!0;if(typeof r=="symbol"){const n=r.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)"||n==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(s,r,i)}return!e.value&&typeof r=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(s,r,i)}})}function ts(t){return JSON.parse(JSON.stringify(t))}const le=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(t)},on=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function ss(t){var e;if(!Ki(t))throw new At(le(t),0);if(on.includes(t.status))throw new At(le(t),t.status);let s;try{s=await t.json()}catch(n){throw new W(le(n),n)}let r;const i=tn(t);if(i&&i.getTime()>=Os["2024-01-01"].timestamp&&typeof s=="object"&&s&&typeof s.code=="string"?r=s.code:typeof s=="object"&&s&&typeof s.error_code=="string"&&(r=s.error_code),r){if(r==="weak_password")throw new Xt(le(s),t.status,((e=s.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(r==="session_not_found")throw new x}else if(typeof s=="object"&&s&&typeof s.weak_password=="object"&&s.weak_password&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.reasons.reduce((n,a)=>n&&typeof a=="string",!0))throw new Xt(le(s),t.status,s.weak_password.reasons);throw new ji(le(s),t.status||500,r)}const ln=(t,e,s,r)=>{const i={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),s))};async function b(t,e,s,r){var i;const n=Object.assign({},r==null?void 0:r.headers);n[Tt]||(n[Tt]=Os["2024-01-01"].name),r!=null&&r.jwt&&(n.Authorization=`Bearer ${r.jwt}`);const a=(i=r==null?void 0:r.query)!==null&&i!==void 0?i:{};r!=null&&r.redirectTo&&(a.redirect_to=r.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await cn(t,e,s+o,{headers:n,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(l):{data:Object.assign({},l),error:null}}async function cn(t,e,s,r,i,n){const a=ln(e,r,i,n);let o;try{o=await t(s,Object.assign({},a))}catch(l){throw console.error(l),new At(le(l),0)}if(o.ok||await ss(o),r!=null&&r.noResolveJson)return o;try{return await o.json()}catch(l){await ss(l)}}function B(t){var e;let s=null;hn(t)&&(s=Object.assign({},t),t.expires_at||(s.expires_at=Fi(t.expires_in)));const r=(e=t.user)!==null&&e!==void 0?e:typeof(t==null?void 0:t.id)=="string"?t:null;return{data:{session:s,user:r},error:null}}function rs(t){const e=B(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((s,r)=>s&&typeof r=="string",!0)&&(e.data.weak_password=t.weak_password),e}function se(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function dn(t){return{data:t,error:null}}function un(t){const{action_link:e,email_otp:s,hashed_token:r,redirect_to:i,verification_type:n}=t,a=nt(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:s,hashed_token:r,redirect_to:i,verification_type:n},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function is(t){return t}function hn(t){return!!t.access_token&&!!t.refresh_token&&!!t.expires_in}const ht=["global","local","others"];class pn{constructor({url:e="",headers:s={},fetch:r,experimental:i}){this.url=e,this.headers=s,this.fetch=Is(r),this.experimental=i??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,s=ht[0]){if(ht.indexOf(s)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${ht.join(", ")}`);try{return await b(this.fetch,"POST",`${this.url}/logout?scope=${s}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(r){if(g(r))return{data:null,error:r};throw r}}async inviteUserByEmail(e,s={}){try{return await b(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:s.data},headers:this.headers,redirectTo:s.redirectTo,xform:se})}catch(r){if(g(r))return{data:{user:null},error:r};throw r}}async generateLink(e){try{const{options:s}=e,r=nt(e,["options"]),i=Object.assign(Object.assign({},r),s);return"newEmail"in r&&(i.new_email=r==null?void 0:r.newEmail,delete i.newEmail),await b(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:i,headers:this.headers,xform:un,redirectTo:s==null?void 0:s.redirectTo})}catch(s){if(g(s))return{data:{properties:null,user:null},error:s};throw s}}async createUser(e){try{return await b(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:se})}catch(s){if(g(s))return{data:{user:null},error:s};throw s}}async listUsers(e){var s,r,i,n,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},d=await b(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(s=e==null?void 0:e.page)===null||s===void 0?void 0:s.toString())!==null&&r!==void 0?r:"",per_page:(n=(i=e==null?void 0:e.perPage)===null||i===void 0?void 0:i.toString())!==null&&n!==void 0?n:""},xform:is});if(d.error)throw d.error;const u=await d.json(),h=(a=d.headers.get("x-total-count"))!==null&&a!==void 0?a:0,p=(l=(o=d.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return p.length>0&&(p.forEach(f=>{const v=parseInt(f.split(";")[0].split("=")[1].substring(0,1)),w=JSON.parse(f.split(";")[1].split("=")[1]);c[`${w}Page`]=v}),c.total=parseInt(h)),{data:Object.assign(Object.assign({},u),c),error:null}}catch(c){if(g(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){X(e);try{return await b(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:se})}catch(s){if(g(s))return{data:{user:null},error:s};throw s}}async updateUserById(e,s){X(e);try{return await b(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:s,headers:this.headers,xform:se})}catch(r){if(g(r))return{data:{user:null},error:r};throw r}}async deleteUser(e,s=!1){X(e);try{return await b(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:s},xform:se})}catch(r){if(g(r))return{data:{user:null},error:r};throw r}}async _listFactors(e){X(e.userId);try{const{data:s,error:r}=await b(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:i=>({data:{factors:i},error:null})});return{data:s,error:r}}catch(s){if(g(s))return{data:null,error:s};throw s}}async _deleteFactor(e){X(e.userId),X(e.id);try{return{data:await b(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(s){if(g(s))return{data:null,error:s};throw s}}async _listOAuthClients(e){var s,r,i,n,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},d=await b(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(s=e==null?void 0:e.page)===null||s===void 0?void 0:s.toString())!==null&&r!==void 0?r:"",per_page:(n=(i=e==null?void 0:e.perPage)===null||i===void 0?void 0:i.toString())!==null&&n!==void 0?n:""},xform:is});if(d.error)throw d.error;const u=await d.json(),h=(a=d.headers.get("x-total-count"))!==null&&a!==void 0?a:0,p=(l=(o=d.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return p.length>0&&(p.forEach(f=>{const v=parseInt(f.split(";")[0].split("=")[1].substring(0,1)),w=JSON.parse(f.split(";")[1].split("=")[1]);c[`${w}Page`]=v}),c.total=parseInt(h)),{data:Object.assign(Object.assign({},u),c),error:null}}catch(c){if(g(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await b(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(g(s))return{data:null,error:s};throw s}}async _getOAuthClient(e){try{return await b(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(g(s))return{data:null,error:s};throw s}}async _updateOAuthClient(e,s){try{return await b(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:s,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(g(r))return{data:null,error:r};throw r}}async _deleteOAuthClient(e){try{return await b(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(g(s))return{data:null,error:s};throw s}}async _regenerateOAuthClientSecret(e){try{return await b(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(g(s))return{data:null,error:s};throw s}}async _listCustomProviders(e){try{const s={};return e!=null&&e.type&&(s.type=e.type),await b(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:s,xform:r=>{var i;return{data:{providers:(i=r==null?void 0:r.providers)!==null&&i!==void 0?i:[]},error:null}}})}catch(s){if(g(s))return{data:{providers:[]},error:s};throw s}}async _createCustomProvider(e){try{return await b(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(g(s))return{data:null,error:s};throw s}}async _getCustomProvider(e){try{return await b(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(g(s))return{data:null,error:s};throw s}}async _updateCustomProvider(e,s){try{return await b(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:s,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(g(r))return{data:null,error:r};throw r}}async _deleteCustomProvider(e){try{return await b(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(g(s))return{data:null,error:s};throw s}}async _adminListPasskeys(e){H(this.experimental),X(e.userId);try{return await b(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(g(s))return{data:null,error:s};throw s}}async _adminDeletePasskey(e){H(this.experimental),X(e.userId),X(e.passkeyId);try{return await b(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(g(s))return{data:null,error:s};throw s}}}function ns(t={}){return{getItem:e=>t[e]||null,setItem:(e,s)=>{t[e]=s},removeItem:e=>{delete t[e]}}}globalThis&&xs()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class fn extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function vn(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function $s(t){if(!/^0x[a-fA-F0-9]{40}$/.test(t))throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);return t.toLowerCase()}function gn(t){return parseInt(t,16)}function mn(t){const e=new TextEncoder().encode(t);return"0x"+Array.from(e,r=>r.toString(16).padStart(2,"0")).join("")}function yn(t){var e;const{chainId:s,domain:r,expirationTime:i,issuedAt:n=new Date,nonce:a,notBefore:o,requestId:l,resources:c,scheme:d,uri:u,version:h}=t;{if(!Number.isInteger(s))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${s}`);if(!r)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(h!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${h}`);if(!((e=t.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)}const p=$s(t.address),f=d?`${d}://${r}`:r,v=t.statement?`${t.statement}
`:"",w=`${f} wants you to sign in with your Ethereum account:
${p}

${v}`;let y=`URI: ${u}
Version: ${h}
Chain ID: ${s}${a?`
Nonce: ${a}`:""}
Issued At: ${n.toISOString()}`;if(i&&(y+=`
Expiration Time: ${i.toISOString()}`),o&&(y+=`
Not Before: ${o.toISOString()}`),l&&(y+=`
Request ID: ${l}`),c){let _=`
Resources:`;for(const m of c){if(!m||typeof m!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${m}`);_+=`
- ${m}`}y+=_}return`${w}
${y}`}class P extends Error{constructor({message:e,code:s,cause:r,name:i}){var n;super(e,{cause:r}),this.__isWebAuthnError=!0,this.name=(n=i??(r instanceof Error?r.name:void 0))!==null&&n!==void 0?n:"Unknown Error",this.code=s}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class tt extends P{constructor(e,s){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s,message:e}),this.name="WebAuthnUnknownError",this.originalError=s}}function bn({error:t,options:e}){var s,r,i;const{publicKey:n}=e;if(!n)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new P({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else if(t.name==="ConstraintError"){if(((s=n.authenticatorSelection)===null||s===void 0?void 0:s.requireResidentKey)===!0)return new P({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:t});if(e.mediation==="conditional"&&((r=n.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new P({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:t});if(((i=n.authenticatorSelection)===null||i===void 0?void 0:i.userVerification)==="required")return new P({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:t})}else{if(t.name==="InvalidStateError")return new P({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:t});if(t.name==="NotAllowedError")return new P({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="NotSupportedError")return n.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new P({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:t}):new P({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:t});if(t.name==="SecurityError"){const a=window.location.hostname;if(js(a)){if(n.rp.id!==a)return new P({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new P({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="TypeError"){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new P({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:t})}else if(t.name==="UnknownError")return new P({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new P({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}function wn({error:t,options:e}){const{publicKey:s}=e;if(!s)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new P({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else{if(t.name==="NotAllowedError")return new P({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="SecurityError"){const r=window.location.hostname;if(js(r)){if(s.rpId!==r)return new P({message:`The RP ID "${s.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new P({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="UnknownError")return new P({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new P({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}class _n{createNewAbortSignal(){if(this.controller){const s=new Error("Cancelling existing WebAuthn API call for new one");s.name="AbortError",this.controller.abort(s)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const Rt=new _n;function as(t){if(!t)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(t);const{challenge:e,user:s,excludeCredentials:r}=t,i=nt(t,["challenge","user","excludeCredentials"]),n=be(e).buffer,a=Object.assign(Object.assign({},s),{id:be(s.id).buffer}),o=Object.assign(Object.assign({},i),{challenge:n,user:a});if(r&&r.length>0){o.excludeCredentials=new Array(r.length);for(let l=0;l<r.length;l++){const c=r[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:be(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function os(t){if(!t)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(t);const{challenge:e,allowCredentials:s}=t,r=nt(t,["challenge","allowCredentials"]),i=be(e).buffer,n=Object.assign(Object.assign({},r),{challenge:i});if(s&&s.length>0){n.allowCredentials=new Array(s.length);for(let a=0;a<s.length;a++){const o=s[a];n.allowCredentials[a]=Object.assign(Object.assign({},o),{id:be(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return n}function ls(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const s=t;return{id:t.id,rawId:t.id,response:{attestationObject:ce(new Uint8Array(t.response.attestationObject)),clientDataJSON:ce(new Uint8Array(t.response.clientDataJSON))},type:"public-key",clientExtensionResults:t.getClientExtensionResults(),authenticatorAttachment:(e=s.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function cs(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const s=t,r=t.getClientExtensionResults(),i=t.response;return{id:t.id,rawId:t.id,response:{authenticatorData:ce(new Uint8Array(i.authenticatorData)),clientDataJSON:ce(new Uint8Array(i.clientDataJSON)),signature:ce(new Uint8Array(i.signature)),userHandle:i.userHandle?ce(new Uint8Array(i.userHandle)):void 0},type:"public-key",clientExtensionResults:r,authenticatorAttachment:(e=s.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function js(t){return t==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)}function st(){var t,e;return!!(L()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((t=navigator==null?void 0:navigator.credentials)===null||t===void 0?void 0:t.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function Ls(t){try{const e=await navigator.credentials.create(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new tt("Browser returned unexpected credential type",e)}:{data:null,error:new tt("Empty credential response",e)}}catch(e){return{data:null,error:bn({error:e,options:t})}}}async function Ns(t){try{const e=await navigator.credentials.get(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new tt("Browser returned unexpected credential type",e)}:{data:null,error:new tt("Empty credential response",e)}}catch(e){return{data:null,error:wn({error:e,options:t})}}}const kn={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},Sn={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function rt(...t){const e=i=>i!==null&&typeof i=="object"&&!Array.isArray(i),s=i=>i instanceof ArrayBuffer||ArrayBuffer.isView(i),r={};for(const i of t)if(i)for(const n in i){const a=i[n];if(a!==void 0)if(Array.isArray(a))r[n]=a;else if(s(a))r[n]=a;else if(e(a)){const o=r[n];e(o)?r[n]=rt(o,a):r[n]=rt(a)}else r[n]=a}return r}function En(t,e){return rt(kn,t,e||{})}function Tn(t,e){return rt(Sn,t,e||{})}class An{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:s,friendlyName:r,signal:i},n){var a;try{const{data:o,error:l}=await this.client.mfa.challenge({factorId:e,webauthn:s});if(!o)return{data:null,error:l};const c=i??Rt.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:d}=o.webauthn.credential_options.publicKey;if(!d.name){const u=r;if(u)d.name=`${d.id}:${u}`;else{const p=(await this.client.getUser()).data.user,f=((a=p==null?void 0:p.user_metadata)===null||a===void 0?void 0:a.name)||(p==null?void 0:p.email)||(p==null?void 0:p.id)||"User";d.name=`${d.id}:${f}`}}d.displayName||(d.displayName=d.name)}switch(o.webauthn.type){case"create":{const d=En(o.webauthn.credential_options.publicKey,n==null?void 0:n.create),{data:u,error:h}=await Ls({publicKey:d,signal:c});return u?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:u}},error:null}:{data:null,error:h}}case"request":{const d=Tn(o.webauthn.credential_options.publicKey,n==null?void 0:n.request),{data:u,error:h}=await Ns(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:d,signal:c}));return u?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:u}},error:null}:{data:null,error:h}}}}catch(o){return g(o)?{data:null,error:o}:{data:null,error:new W("Unexpected error in challenge",o)}}}async _verify({challengeId:e,factorId:s,webauthn:r}){return this.client.mfa.verify({factorId:s,challengeId:e,webauthn:r})}async _authenticate({factorId:e,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:i}={}},n){if(!s)return{data:null,error:new Ne("rpId is required for WebAuthn authentication")};try{if(!st())return{data:null,error:new W("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:s,rpOrigins:r},signal:i},{request:n});if(!a)return{data:null,error:o};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:s,rpOrigins:r,credential_response:l.credential_response}})}catch(a){return g(a)?{data:null,error:a}:{data:null,error:new W("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:i}={}},n){if(!s)return{data:null,error:new Ne("rpId is required for WebAuthn registration")};try{if(!st())return{data:null,error:new W("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(d=>{var u;return(u=d.data)===null||u===void 0?void 0:u.all.find(h=>h.factor_type==="webauthn"&&h.friendly_name===e&&h.status!=="unverified")}).then(d=>d?this.client.mfa.unenroll({factorId:d==null?void 0:d.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:s,rpOrigins:r},signal:i},{create:n});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:s,rpOrigins:r,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return g(a)?{data:null,error:a}:{data:null,error:new W("Unexpected error in register",a)}}}}vn();const Rn={url:Oi,storageKey:Pi,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:xi,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},pe={};class Ue{get jwks(){var e,s;return(s=(e=pe[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&s!==void 0?s:{keys:[]}}set jwks(e){pe[this.storageKey]=Object.assign(Object.assign({},pe[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,s;return(s=(e=pe[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&s!==void 0?s:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){pe[this.storageKey]=Object.assign(Object.assign({},pe[this.storageKey]),{cachedAt:e})}constructor(e){var s,r,i;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const n=Object.assign(Object.assign({},Rn),e);if(this.storageKey=n.storageKey,this.instanceID=(s=Ue.nextInstanceID[this.storageKey])!==null&&s!==void 0?s:0,Ue.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!n.debug,typeof n.debug=="function"&&(this.logger=n.debug),this.instanceID>0&&L()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=n.persistSession,this.autoRefreshToken=n.autoRefreshToken,this.experimental=(r=n.experimental)!==null&&r!==void 0?r:{},this.admin=new pn({url:n.url,headers:n.headers,fetch:n.fetch,experimental:this.experimental}),this.url=n.url,this.headers=n.headers,this.fetch=Is(n.fetch),this.detectSessionInUrl=n.detectSessionInUrl,this.flowType=n.flowType,this.hasCustomAuthorizationHeader=n.hasCustomAuthorizationHeader,this.throwOnError=n.throwOnError,this.lockAcquireTimeout=n.lockAcquireTimeout,n.lock!=null&&(this.lock=n.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new An(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(n.storage?this.storage=n.storage:xs()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=ns(this.memoryStorage)),n.userStorage&&(this.userStorage=n.userStorage)):(this.memoryStorage={},this.storage=ns(this.memoryStorage)),L()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(i=this.broadcastChannel)===null||i===void 0||i.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),(a.data.event==="TOKEN_REFRESHED"||a.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(a.data.event,a.data.session,!1)}catch(o){this._debug("#broadcastChannel","error",o)}})}n.skipAutoInitialize||this.initialize().catch(a=>{this._debug("#initialize()","error",a)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Cs}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())(),await this.initializePromise)}async _initialize(){var e;try{let s={},r="none";if(L()&&(s=Ji(window.location.href),this._isImplicitGrantCallback(s)?r="implicit":await this._isPKCECallback(s)&&(r="pkce")),L()&&this.detectSessionInUrl&&r!=="none"){const{data:i,error:n}=await this._getSessionFromURL(s,r);if(n){if(this._debug("#_initialize()","error detecting session from URL",n),Ni(n)){const l=(e=n.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:n}}return{error:n}}const{session:a,redirectType:o}=i;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(s){return g(s)?this._returnResult({error:s}):this._returnResult({error:new W("Unexpected error during initialization",s)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var s,r,i;try{const n=await b(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.captchaToken}},xform:B}),{data:a,error:o}=n;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(n){if(g(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async signUp(e){var s,r,i;try{let n;if("email"in e){const{email:d,password:u,options:h}=e;let p=null,f=null;this.flowType==="pkce"&&([p,f]=await oe(this.storage,this.storageKey)),n=await b(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:h==null?void 0:h.emailRedirectTo,body:{email:d,password:u,data:(s=h==null?void 0:h.data)!==null&&s!==void 0?s:{},gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken},code_challenge:p,code_challenge_method:f},xform:B})}else if("phone"in e){const{phone:d,password:u,options:h}=e;n=await b(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:d,password:u,data:(r=h==null?void 0:h.data)!==null&&r!==void 0?r:{},channel:(i=h==null?void 0:h.channel)!==null&&i!==void 0?i:"sms",gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:B})}else throw new Ke("You must provide either an email or phone number and a password");const{data:a,error:o}=n;if(o||!a)return await O(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(n){if(await O(this.storage,`${this.storageKey}-code-verifier`),g(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async signInWithPassword(e){try{let s;if("email"in e){const{email:n,password:a,options:o}=e;s=await b(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:rs})}else if("phone"in e){const{phone:n,password:a,options:o}=e;s=await b(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:rs})}else throw new Ke("You must provide either an email or phone number and a password");const{data:r,error:i}=s;if(i)return this._returnResult({data:{user:null,session:null},error:i});if(!r||!r.session||!r.user){const n=new he;return this._returnResult({data:{user:null,session:null},error:n})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:i})}catch(s){if(g(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOAuth(e){var s,r,i,n;return await this._handleProviderSignIn(e.provider,{redirectTo:(s=e.options)===null||s===void 0?void 0:s.redirectTo,scopes:(r=e.options)===null||r===void 0?void 0:r.scopes,queryParams:(i=e.options)===null||i===void 0?void 0:i.queryParams,skipBrowserRedirect:(n=e.options)===null||n===void 0?void 0:n.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e)):this._exchangeCodeForSession(e)}async signInWithWeb3(e){const{chain:s}=e;switch(s){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${s}"`)}}async signInWithEthereum(e){var s,r,i,n,a,o,l,c,d,u,h;let p,f;if("message"in e)p=e.message,f=e.signature;else{const{chain:v,wallet:w,statement:y,options:_}=e;let m;if(L())if(typeof w=="object")m=w;else{const Y=window;if("ethereum"in Y&&typeof Y.ethereum=="object"&&"request"in Y.ethereum&&typeof Y.ethereum.request=="function")m=Y.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof w!="object"||!(_!=null&&_.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");m=w}const S=new URL((s=_==null?void 0:_.url)!==null&&s!==void 0?s:window.location.href),I=await m.request({method:"eth_requestAccounts"}).then(Y=>Y).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!I||I.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const A=$s(I[0]);let $=(r=_==null?void 0:_.signInWithEthereum)===null||r===void 0?void 0:r.chainId;if(!$){const Y=await m.request({method:"eth_chainId"});$=gn(Y)}const Ws={domain:S.host,address:A,statement:y,uri:S.href,version:"1",chainId:$,nonce:(i=_==null?void 0:_.signInWithEthereum)===null||i===void 0?void 0:i.nonce,issuedAt:(a=(n=_==null?void 0:_.signInWithEthereum)===null||n===void 0?void 0:n.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=_==null?void 0:_.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=_==null?void 0:_.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=_==null?void 0:_.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(d=_==null?void 0:_.signInWithEthereum)===null||d===void 0?void 0:d.resources};p=yn(Ws),f=await m.request({method:"personal_sign",params:[mn(p),A]})}try{const{data:v,error:w}=await b(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:p,signature:f},!((u=e.options)===null||u===void 0)&&u.captchaToken?{gotrue_meta_security:{captcha_token:(h=e.options)===null||h===void 0?void 0:h.captchaToken}}:null),xform:B});if(w)throw w;if(!v||!v.session||!v.user){const y=new he;return this._returnResult({data:{user:null,session:null},error:y})}return v.session&&(await this._saveSession(v.session),await this._notifyAllSubscribers("SIGNED_IN",v.session)),this._returnResult({data:Object.assign({},v),error:w})}catch(v){if(g(v))return this._returnResult({data:{user:null,session:null},error:v});throw v}}async signInWithSolana(e){var s,r,i,n,a,o,l,c,d,u,h,p;let f,v;if("message"in e)f=e.message,v=e.signature;else{const{chain:w,wallet:y,statement:_,options:m}=e;let S;if(L())if(typeof y=="object")S=y;else{const A=window;if("solana"in A&&typeof A.solana=="object"&&("signIn"in A.solana&&typeof A.solana.signIn=="function"||"signMessage"in A.solana&&typeof A.solana.signMessage=="function"))S=A.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof y!="object"||!(m!=null&&m.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");S=y}const I=new URL((s=m==null?void 0:m.url)!==null&&s!==void 0?s:window.location.href);if("signIn"in S&&S.signIn){const A=await S.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},m==null?void 0:m.signInWithSolana),{version:"1",domain:I.host,uri:I.href}),_?{statement:_}:null));let $;if(Array.isArray(A)&&A[0]&&typeof A[0]=="object")$=A[0];else if(A&&typeof A=="object"&&"signedMessage"in A&&"signature"in A)$=A;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in $&&"signature"in $&&(typeof $.signedMessage=="string"||$.signedMessage instanceof Uint8Array)&&$.signature instanceof Uint8Array)f=typeof $.signedMessage=="string"?$.signedMessage:new TextDecoder().decode($.signedMessage),v=$.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in S)||typeof S.signMessage!="function"||!("publicKey"in S)||typeof S!="object"||!S.publicKey||!("toBase58"in S.publicKey)||typeof S.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");f=[`${I.host} wants you to sign in with your Solana account:`,S.publicKey.toBase58(),..._?["",_,""]:[""],"Version: 1",`URI: ${I.href}`,`Issued At: ${(i=(r=m==null?void 0:m.signInWithSolana)===null||r===void 0?void 0:r.issuedAt)!==null&&i!==void 0?i:new Date().toISOString()}`,...!((n=m==null?void 0:m.signInWithSolana)===null||n===void 0)&&n.notBefore?[`Not Before: ${m.signInWithSolana.notBefore}`]:[],...!((a=m==null?void 0:m.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${m.signInWithSolana.expirationTime}`]:[],...!((o=m==null?void 0:m.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${m.signInWithSolana.chainId}`]:[],...!((l=m==null?void 0:m.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${m.signInWithSolana.nonce}`]:[],...!((c=m==null?void 0:m.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${m.signInWithSolana.requestId}`]:[],...!((u=(d=m==null?void 0:m.signInWithSolana)===null||d===void 0?void 0:d.resources)===null||u===void 0)&&u.length?["Resources",...m.signInWithSolana.resources.map($=>`- ${$}`)]:[]].join(`
`);const A=await S.signMessage(new TextEncoder().encode(f),"utf8");if(!A||!(A instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");v=A}}try{const{data:w,error:y}=await b(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:f,signature:ce(v)},!((h=e.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(p=e.options)===null||p===void 0?void 0:p.captchaToken}}:null),xform:B});if(y)throw y;if(!w||!w.session||!w.user){const _=new he;return this._returnResult({data:{user:null,session:null},error:_})}return w.session&&(await this._saveSession(w.session),await this._notifyAllSubscribers("SIGNED_IN",w.session)),this._returnResult({data:Object.assign({},w),error:y})}catch(w){if(g(w))return this._returnResult({data:{user:null,session:null},error:w});throw w}}async _exchangeCodeForSession(e){const s=await q(this.storage,`${this.storageKey}-code-verifier`),[r,i]=(s??"").split("/");try{if(!r&&this.flowType==="pkce")throw new Ui;const{data:n,error:a}=await b(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:r},xform:B});if(await O(this.storage,`${this.storageKey}-code-verifier`),a)throw a;if(!n||!n.session||!n.user){const o=new he;return this._returnResult({data:{user:null,session:null,redirectType:null},error:o})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(i==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",n.session)),this._returnResult({data:Object.assign(Object.assign({},n),{redirectType:i??null}),error:a})}catch(n){if(await O(this.storage,`${this.storageKey}-code-verifier`),g(n))return this._returnResult({data:{user:null,session:null,redirectType:null},error:n});throw n}}async signInWithIdToken(e){try{const{options:s,provider:r,token:i,access_token:n,nonce:a}=e,o=await b(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:i,access_token:n,nonce:a,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},xform:B}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const d=new he;return this._returnResult({data:{user:null,session:null},error:d})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(s){if(g(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOtp(e){var s,r,i,n,a;try{if("email"in e){const{email:o,options:l}=e;let c=null,d=null;this.flowType==="pkce"&&([c,d]=await oe(this.storage,this.storageKey));const{error:u}=await b(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(s=l==null?void 0:l.data)!==null&&s!==void 0?s:{},create_user:(r=l==null?void 0:l.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:c,code_challenge_method:d},redirectTo:l==null?void 0:l.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:u})}if("phone"in e){const{phone:o,options:l}=e,{data:c,error:d}=await b(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(i=l==null?void 0:l.data)!==null&&i!==void 0?i:{},create_user:(n=l==null?void 0:l.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(a=l==null?void 0:l.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:d})}throw new Ke("You must provide either an email or phone number.")}catch(o){if(await O(this.storage,`${this.storageKey}-code-verifier`),g(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async verifyOtp(e){var s,r;try{let i,n;"options"in e&&(i=(s=e.options)===null||s===void 0?void 0:s.redirectTo,n=(r=e.options)===null||r===void 0?void 0:r.captchaToken);const{data:a,error:o}=await b(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:i,xform:B});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(i){if(g(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithSSO(e){var s,r,i,n,a;try{let o=null,l=null;this.flowType==="pkce"&&([o,l]=await oe(this.storage,this.storageKey));const c=await b(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(r=(s=e.options)===null||s===void 0?void 0:s.redirectTo)!==null&&r!==void 0?r:void 0}),!((i=e==null?void 0:e.options)===null||i===void 0)&&i.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:l}),headers:this.headers,xform:dn});return!((n=c.data)===null||n===void 0)&&n.url&&L()&&!(!((a=e.options)===null||a===void 0)&&a.skipBrowserRedirect)&&window.location.assign(c.data.url),this._returnResult(c)}catch(o){if(await O(this.storage,`${this.storageKey}-code-verifier`),g(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:s},error:r}=e;if(r)throw r;if(!s)throw new x;const{error:i}=await b(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:s.access_token});return this._returnResult({data:{user:null,session:null},error:i})})}catch(e){if(g(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const s=`${this.url}/resend`;if("email"in e){const{email:r,type:i,options:n}=e;let a=null,o=null;this.flowType==="pkce"&&([a,o]=await oe(this.storage,this.storageKey));const{error:l}=await b(this.fetch,"POST",s,{headers:this.headers,body:{email:r,type:i,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken},code_challenge:a,code_challenge_method:o},redirectTo:n==null?void 0:n.emailRedirectTo});return l&&await O(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:l})}else if("phone"in e){const{phone:r,type:i,options:n}=e,{data:a,error:o}=await b(this.fetch,"POST",s,{headers:this.headers,body:{phone:r,type:i,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a==null?void 0:a.message_id},error:o})}throw new Ke("You must provide either an email or phone number and a type")}catch(s){if(await O(this.storage,`${this.storageKey}-code-verifier`),g(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,s){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),i=(async()=>(await r,await s()))();return this.pendingInLock.push((async()=>{try{await i}catch{}})()),i}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=s();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const i=[...this.pendingInLock];await Promise.all(i),this.pendingInLock.splice(0,i.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const s=await this.__loadSession();return await e(s)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const s=await q(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",s),s!==null&&(this._isValidSession(s)?e=s:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const r=e.expires_at?e.expires_at*1e3-Date.now()<dt:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",e.expires_at),!r){if(this.userStorage){const a=await q(this.userStorage,this.storageKey+"-user");a!=null&&a.user?e.user=a.user:e.user=ut()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const a={value:this.suppressGetSessionWarning};e.user=an(e.user,a),a.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:i,error:n}=await this._callRefreshToken(e.refresh_token);if(n){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const o=await q(this.storage,this.storageKey);if(o&&o.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:n})}return this._returnResult({data:{session:i},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let s;return this.lock!=null?s=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):s=await this._getUser(),s.data.user&&(this.suppressGetSessionWarning=!0),s}async _getUser(e){try{return e?await b(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:se}):await this._useSession(async s=>{var r,i,n;const{data:a,error:o}=s;if(o)throw o;return!(!((r=a.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new x}:await b(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(n=(i=a.session)===null||i===void 0?void 0:i.access_token)!==null&&n!==void 0?n:void 0,xform:se})})}catch(s){if(g(s))return Je(s)&&(await this._removeSession(),await O(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:s});throw s}}async updateUser(e,s={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,s)):await this._updateUser(e,s)}async _updateUser(e,s={}){try{return await this._useSession(async r=>{const{data:i,error:n}=r;if(n)throw n;if(!i.session)throw new x;const a=i.session;let o=null,l=null;this.flowType==="pkce"&&e.email!=null&&([o,l]=await oe(this.storage,this.storageKey));const{data:c,error:d}=await b(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:s==null?void 0:s.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:l}),jwt:a.access_token,xform:se});if(d)throw d;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),this._returnResult({data:{user:a.user},error:null})})}catch(r){if(await O(this.storage,`${this.storageKey}-code-verifier`),g(r))return this._returnResult({data:{user:null},error:r});throw r}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new x;const s=Date.now()/1e3;let r=s,i=!0,n=null;const{payload:a}=Ge(e.access_token);if(a.exp&&(r=a.exp,i=r<=s),i){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};n=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});n={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:r-s,expires_at:r},await this._saveSession(n),await this._notifyAllSubscribers("SIGNED_IN",n)}return this._returnResult({data:{user:n.user,session:n},error:null})}catch(s){if(g(s))return this._returnResult({data:{session:null,user:null},error:s});throw s}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async s=>{var r;if(!e){const{data:a,error:o}=s;if(o)throw o;e=(r=a.session)!==null&&r!==void 0?r:void 0}if(!(e!=null&&e.refresh_token))throw new x;const{data:i,error:n}=await this._callRefreshToken(e.refresh_token);return n?this._returnResult({data:{user:null,session:null},error:n}):i?this._returnResult({data:{user:i.user,session:i},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(s){if(g(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async _getSessionFromURL(e,s){var r;try{if(!L())throw new Ve("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Ve(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(s){case"implicit":if(this.flowType==="pkce")throw new Vt("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Ve("Not a valid implicit grant flow url.");break;default:}if(s==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Vt("No code detected.");const{data:m,error:S}=await this._exchangeCodeForSession(e.code);if(S)throw S;const I=new URL(window.location.href);return I.searchParams.delete("code"),window.history.replaceState(window.history.state,"",I.toString()),{data:{session:m.session,redirectType:(r=m.redirectType)!==null&&r!==void 0?r:null},error:null}}const{provider_token:i,provider_refresh_token:n,access_token:a,refresh_token:o,expires_in:l,expires_at:c,token_type:d}=e;if(!a||!l||!o||!d)throw new Ve("No session defined in URL");const u=Math.round(Date.now()/1e3),h=parseInt(l);let p=u+h;c&&(p=parseInt(c));const f=p-u;f*1e3<=ee&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${h}s`);const v=p-h;u-v>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",v,p,u):u-v<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",v,p,u);const{data:w,error:y}=await this._getUser(a);if(y)throw y;const _={provider_token:i,provider_refresh_token:n,access_token:a,expires_in:h,expires_at:p,refresh_token:o,token_type:d,user:w.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:_,redirectType:e.type},error:null})}catch(i){if(g(i))return this._returnResult({data:{session:null,redirectType:null},error:i});throw i}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){const s=await q(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&s)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async s=>{var r;const{data:i,error:n}=s;if(n&&!Je(n))return this._returnResult({error:n});const a=(r=i.session)===null||r===void 0?void 0:r.access_token;if(a){const{error:o}=await this.admin.signOut(a,e);if(o&&!(Li(o)&&(o.status===404||o.status===401||o.status===403)||Je(o)))return this._returnResult({error:o})}return e!=="others"&&(await this._removeSession(),await O(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const s=zi(),r={id:s,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",s),this.stateChangeEmitters.delete(s)}};return this._debug("#onAuthStateChange()","registered callback with id",s),this.stateChangeEmitters.set(s,r),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(s)}):await this._emitInitialSession(s)))(),{data:{subscription:r}}}async _emitInitialSession(e){return await this._useSession(async s=>{var r,i;try{const{data:{session:n},error:a}=s;if(a)throw a;await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",n)),this._debug("INITIAL_SESSION","callback id",e,"session",n)}catch(n){await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",n),Je(n)?console.warn(n):console.error(n)}})}async resetPasswordForEmail(e,s={}){let r=null,i=null;this.flowType==="pkce"&&([r,i]=await oe(this.storage,this.storageKey,!0));try{return await b(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:r,code_challenge_method:i,gotrue_meta_security:{captcha_token:s.captchaToken}},headers:this.headers,redirectTo:s.redirectTo})}catch(n){if(await O(this.storage,`${this.storageKey}-code-verifier`),g(n))return this._returnResult({data:null,error:n});throw n}}async getUserIdentities(){var e;try{const{data:s,error:r}=await this.getUser();if(r)throw r;return this._returnResult({data:{identities:(e=s.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(s){if(g(s))return this._returnResult({data:null,error:s});throw s}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var s;try{const{data:r,error:i}=await this._useSession(async n=>{var a,o,l,c,d;const{data:u,error:h}=n;if(h)throw h;const p=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await b(this.fetch,"GET",p,{headers:this.headers,jwt:(d=(c=u.session)===null||c===void 0?void 0:c.access_token)!==null&&d!==void 0?d:void 0})});if(i)throw i;return L()&&!(!((s=e.options)===null||s===void 0)&&s.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),this._returnResult({data:{provider:e.provider,url:r==null?void 0:r.url},error:null})}catch(r){if(g(r))return this._returnResult({data:{provider:e.provider,url:null},error:r});throw r}}async linkIdentityIdToken(e){return await this._useSession(async s=>{var r;try{const{error:i,data:{session:n}}=s;if(i)throw i;const{options:a,provider:o,token:l,access_token:c,nonce:d}=e,u=await b(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(r=n==null?void 0:n.access_token)!==null&&r!==void 0?r:void 0,body:{provider:o,id_token:l,access_token:c,nonce:d,link_identity:!0,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:B}),{data:h,error:p}=u;return p?this._returnResult({data:{user:null,session:null},error:p}):!h||!h.session||!h.user?this._returnResult({data:{user:null,session:null},error:new he}):(h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("USER_UPDATED",h.session)),this._returnResult({data:h,error:p}))}catch(i){if(await O(this.storage,`${this.storageKey}-code-verifier`),g(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}})}async unlinkIdentity(e){try{return await this._useSession(async s=>{var r,i;const{data:n,error:a}=s;if(a)throw a;return await b(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(i=(r=n.session)===null||r===void 0?void 0:r.access_token)!==null&&i!==void 0?i:void 0})})}catch(s){if(g(s))return this._returnResult({data:null,error:s});throw s}}async _refreshAccessToken(e){const s="#_refreshAccessToken()";this._debug(s,"begin");try{const r=Date.now();return await Gi(async i=>(i>0&&await Vi(200*Math.pow(2,i-1)),this._debug(s,"refreshing attempt",i),await b(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:B})),(i,n)=>{const a=200*Math.pow(2,i);return n&&Gt(n)&&Date.now()+a-r<ee})}catch(r){if(this._debug(s,"error",r),g(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}finally{this._debug(s,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,s){const r=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:s.redirectTo,scopes:s.scopes,queryParams:s.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",s,"url",r),L()&&!s.skipBrowserRedirect&&window.location.assign(r),{data:{provider:e,url:r},error:null}}async _recoverAndRefresh(){var e,s;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const i=await q(this.storage,this.storageKey);if(i&&this.userStorage){let a=await q(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:i.user},await ge(this.userStorage,this.storageKey+"-user",a)),i.user=(e=a==null?void 0:a.user)!==null&&e!==void 0?e:ut()}else if(i&&!i.user&&!i.user){const a=await q(this.storage,this.storageKey+"-user");a&&(a!=null&&a.user)?(i.user=a.user,await O(this.storage,this.storageKey+"-user"),await ge(this.storage,this.storageKey,i)):i.user=ut()}if(this._debug(r,"session from storage",i),!this._isValidSession(i)){this._debug(r,"session is not valid"),i!==null&&await this._removeSession();return}const n=((s=i.expires_at)!==null&&s!==void 0?s:1/0)*1e3-Date.now()<dt;if(this._debug(r,`session has${n?"":" not"} expired with margin of ${dt}s`),n){if(this.autoRefreshToken&&i.refresh_token){const{error:a}=await this._callRefreshToken(i.refresh_token);a&&(Di(a)?this._debug(r,"refresh discarded by commit guard",a):this._debug(r,"refresh failed",a))}}else if(i.user&&i.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(i.access_token);!o&&(a!=null&&a.user)?(i.user=a.user,await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)):this._debug(r,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(r,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",i)}catch(i){this._debug(r,"error",i),console.error(i);return}finally{this._debug(r,"end")}}async _callRefreshToken(e){var s,r;if(!e)throw new x;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const i="#_callRefreshToken()";this._debug(i,"begin");try{this.refreshingDeferred=new lt;const n=await q(this.storage,this.storageKey),{data:a,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!a.session)throw new x;const l=await q(this.storage,this.storageKey);if(n!==null&&(l===null||l.refresh_token!==n.refresh_token)){this._debug(i,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:l?"replaced":"cleared"});const h={data:null,error:new Yt};return this.refreshingDeferred.resolve(h),h}const d=this._sessionRemovalEpoch;if(await this._saveSession(a.session),this._sessionRemovalEpoch!==d){this._debug(i,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await O(this.storage,this.storageKey),this.userStorage&&await O(this.userStorage,this.storageKey+"-user");const h={data:null,error:new Yt};return this.refreshingDeferred.resolve(h),h}await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const u={data:a.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(u),u}catch(n){if(this._debug(i,"error",n),g(n)){const a={data:null,error:n};if(!Gt(n)){const o=await q(this.storage,this.storageKey);!!(o!=null&&o.expires_at&&o.expires_at*1e3>Date.now())?this._debug(i,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:a,expiresAt:Date.now()+Ci},(s=this.refreshingDeferred)===null||s===void 0||s.resolve(a),a}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(n),n}finally{this.refreshingDeferred=null,this._debug(i,"end")}}async _notifyAllSubscribers(e,s,r=!0){const i=`#_notifyAllSubscribers(${e})`;this._debug(i,"begin",s,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:e,session:s});const n=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,s)}catch(l){n.push(l)}});if(await Promise.all(a),n.length>0){for(let o=0;o<n.length;o+=1)console.error(n[o]);throw n[0]}}finally{this._debug(i,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await O(this.storage,`${this.storageKey}-code-verifier`);const s=Object.assign({},e),r=s.user&&s.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!r&&s.user&&await ge(this.userStorage,this.storageKey+"-user",{user:s.user});const i=Object.assign({},s);delete i.user;const n=ts(i);await ge(this.storage,this.storageKey,n)}else{const i=ts(s);await ge(this.storage,this.storageKey,i)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await O(this.storage,this.storageKey),await O(this.storage,this.storageKey+"-code-verifier"),await O(this.storage,this.storageKey+"-user"),this.userStorage&&await O(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&L()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(s){console.error("removing visibilitychange callback failed",s)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),ee);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const s=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=s,s&&typeof s=="object"&&typeof s.unref=="function"?s.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(s)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const s=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,s&&clearTimeout(s)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async s=>{const{data:{session:r}}=s;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((r.expires_at*1e3-e)/ee);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${ee}ms, refresh threshold is ${Te} ticks`),i<=Te&&await this._callRefreshToken(r.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof fn)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async s=>{const{data:{session:r}}=s;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((r.expires_at*1e3-e)/ee);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${ee}ms, refresh threshold is ${Te} ticks`),i<=Te&&await this._callRefreshToken(r.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!L()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const s=`#_onVisibilityChanged(${e})`;if(this._debug(s,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(s,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(s,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,s,r){const i=[`provider=${encodeURIComponent(s)}`];if(r!=null&&r.redirectTo&&i.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r!=null&&r.scopes&&i.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){const[n,a]=await oe(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(n)}`,code_challenge_method:`${encodeURIComponent(a)}`});i.push(o.toString())}if(r!=null&&r.queryParams){const n=new URLSearchParams(r.queryParams);i.push(n.toString())}return r!=null&&r.skipBrowserRedirect&&i.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${e}?${i.join("&")}`}async _unenroll(e){try{return await this._useSession(async s=>{var r;const{data:i,error:n}=s;return n?this._returnResult({data:null,error:n}):await b(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token})})}catch(s){if(g(s))return this._returnResult({data:null,error:s});throw s}}async _enroll(e){try{return await this._useSession(async s=>{var r,i;const{data:n,error:a}=s;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await b(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(r=n==null?void 0:n.session)===null||r===void 0?void 0:r.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((i=l==null?void 0:l.totp)===null||i===void 0)&&i.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(s){if(g(s))return this._returnResult({data:null,error:s});throw s}}async _verify(e){const s=async()=>{try{return await this._useSession(async r=>{var i;const{data:n,error:a}=r;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?ls(e.webauthn.credential_response):cs(e.webauthn.credential_response)})}:{code:e.code}),{data:l,error:c}=await b(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:o,headers:this.headers,jwt:(i=n==null?void 0:n.session)===null||i===void 0?void 0:i.access_token});return c?this._returnResult({data:null,error:c}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+l.expires_in},l)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",l),this._returnResult({data:l,error:c}))})}catch(r){if(g(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,s):s()}async _challenge(e){const s=async()=>{try{return await this._useSession(async r=>{var i;const{data:n,error:a}=r;if(a)return this._returnResult({data:null,error:a});const o=await b(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(i=n==null?void 0:n.session)===null||i===void 0?void 0:i.access_token});if(o.error)return o;const{data:l}=o;if(l.type!=="webauthn")return{data:l,error:null};switch(l.webauthn.type){case"create":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:as(l.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:os(l.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(r){if(g(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,s):s()}async _challengeAndVerify(e){const{data:s,error:r}=await this._challenge({factorId:e.factorId});return r?this._returnResult({data:null,error:r}):await this._verify({factorId:e.factorId,challengeId:s.id,code:e.code})}async _listFactors(){var e;const{data:{user:s},error:r}=await this.getUser();if(r)return{data:null,error:r};const i={all:[],phone:[],totp:[],webauthn:[]};for(const n of(e=s==null?void 0:s.factors)!==null&&e!==void 0?e:[])i.all.push(n),n.status==="verified"&&i[n.factor_type].push(n);return{data:i,error:null}}async _getAuthenticatorAssuranceLevel(e){var s,r,i,n;if(e)try{const{payload:p}=Ge(e);let f=null;p.aal&&(f=p.aal);let v=f;const{data:{user:w},error:y}=await this.getUser(e);if(y)return this._returnResult({data:null,error:y});((r=(s=w==null?void 0:w.factors)===null||s===void 0?void 0:s.filter(S=>S.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(v="aal2");const m=p.amr||[];return{data:{currentLevel:f,nextLevel:v,currentAuthenticationMethods:m},error:null}}catch(p){if(g(p))return this._returnResult({data:null,error:p});throw p}const{data:{session:a},error:o}=await this.getSession();if(o)return this._returnResult({data:null,error:o});if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:l}=Ge(a.access_token);let c=null;l.aal&&(c=l.aal);let d=c;((n=(i=a.user.factors)===null||i===void 0?void 0:i.filter(p=>p.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(d="aal2");const h=l.amr||[];return{data:{currentLevel:c,nextLevel:d,currentAuthenticationMethods:h},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async s=>{const{data:{session:r},error:i}=s;return i?this._returnResult({data:null,error:i}):r?await b(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:r.access_token,xform:n=>({data:n,error:null})}):this._returnResult({data:null,error:new x})})}catch(s){if(g(s))return this._returnResult({data:null,error:s});throw s}}async _approveAuthorization(e,s){try{return await this._useSession(async r=>{const{data:{session:i},error:n}=r;if(n)return this._returnResult({data:null,error:n});if(!i)return this._returnResult({data:null,error:new x});const a=await b(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:i.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&L()&&!(s!=null&&s.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(r){if(g(r))return this._returnResult({data:null,error:r});throw r}}async _denyAuthorization(e,s){try{return await this._useSession(async r=>{const{data:{session:i},error:n}=r;if(n)return this._returnResult({data:null,error:n});if(!i)return this._returnResult({data:null,error:new x});const a=await b(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:i.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&L()&&!(s!=null&&s.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(r){if(g(r))return this._returnResult({data:null,error:r});throw r}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:s},error:r}=e;return r?this._returnResult({data:null,error:r}):s?await b(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:s.access_token,xform:i=>({data:i,error:null})}):this._returnResult({data:null,error:new x})})}catch(e){if(g(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async s=>{const{data:{session:r},error:i}=s;return i?this._returnResult({data:null,error:i}):r?(await b(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new x})})}catch(s){if(g(s))return this._returnResult({data:null,error:s});throw s}}async fetchJwk(e,s={keys:[]}){let r=s.keys.find(o=>o.kid===e);if(r)return r;const i=Date.now();if(r=this.jwks.keys.find(o=>o.kid===e),r&&this.jwks_cached_at+$i>i)return r;const{data:n,error:a}=await b(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!n.keys||n.keys.length===0||(this.jwks=n,this.jwks_cached_at=i,r=n.keys.find(o=>o.kid===e),!r)?null:r}async getClaims(e,s={}){try{let r=e;if(!r){const{data:p,error:f}=await this.getSession();if(f||!p.session)return this._returnResult({data:null,error:f});r=p.session.access_token}const{header:i,payload:n,signature:a,raw:{header:o,payload:l}}=Ge(r);if(!(s!=null&&s.allowExpired))try{sn(n.exp)}catch(p){throw new Ze(p instanceof Error?p.message:"JWT validation failed")}const c=!i.alg||i.alg.startsWith("HS")||!i.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(i.kid,s!=null&&s.keys?{keys:s.keys}:s==null?void 0:s.jwks);if(!c){const{error:p}=await this.getUser(r);if(p)throw p;return{data:{claims:n,header:i,signature:a},error:null}}const d=rn(i.alg),u=await crypto.subtle.importKey("jwk",c,d,!0,["verify"]);if(!await crypto.subtle.verify(d,u,a,Wi(`${o}.${l}`)))throw new Ze("Invalid JWT signature");return{data:{claims:n,header:i,signature:a},error:null}}catch(r){if(g(r))return this._returnResult({data:null,error:r});throw r}}async signInWithPasskey(e){var s,r,i;H(this.experimental);try{if(!st())return this._returnResult({data:null,error:new W("Browser does not support WebAuthn",null)});const{data:n,error:a}=await this._startPasskeyAuthentication({options:{captchaToken:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.captchaToken}});if(a||!n)return this._returnResult({data:null,error:a});const o=os(n.options),l=(i=(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.signal)!==null&&i!==void 0?i:Rt.createNewAbortSignal(),{data:c,error:d}=await Ns({publicKey:o,signal:l});if(d||!c)return this._returnResult({data:null,error:d??new W("WebAuthn ceremony failed",null)});const u=cs(c);return this._verifyPasskeyAuthentication({challengeId:n.challenge_id,credential:u})}catch(n){if(g(n))return this._returnResult({data:null,error:n});throw n}}async registerPasskey(e){var s,r;H(this.experimental);try{if(!st())return this._returnResult({data:null,error:new W("Browser does not support WebAuthn",null)});const{data:i,error:n}=await this._startPasskeyRegistration();if(n||!i)return this._returnResult({data:null,error:n});const a=as(i.options),o=(r=(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.signal)!==null&&r!==void 0?r:Rt.createNewAbortSignal(),{data:l,error:c}=await Ls({publicKey:a,signal:o});if(c||!l)return this._returnResult({data:null,error:c??new W("WebAuthn ceremony failed",null)});const d=ls(l);return this._verifyPasskeyRegistration({challengeId:i.challenge_id,credential:d})}catch(i){if(g(i))return this._returnResult({data:null,error:i});throw i}}async _startPasskeyRegistration(){H(this.experimental);try{return await this._useSession(async e=>{const{data:{session:s},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!s)return this._returnResult({data:null,error:new x});const{data:i,error:n}=await b(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:s.access_token,body:{}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:i,error:null})})}catch(e){if(g(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){H(this.experimental);try{return await this._useSession(async s=>{const{data:{session:r},error:i}=s;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new x});const{data:n,error:a}=await b(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:r.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:n,error:null})})}catch(s){if(g(s))return this._returnResult({data:null,error:s});throw s}}async _startPasskeyAuthentication(e){var s;H(this.experimental);try{const{data:r,error:i}=await b(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.captchaToken}}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})}catch(r){if(g(r))return this._returnResult({data:null,error:r});throw r}}async _verifyPasskeyAuthentication(e){H(this.experimental);try{const{data:s,error:r}=await b(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:B});return r?this._returnResult({data:null,error:r}):(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),this._returnResult({data:s,error:null}))}catch(s){if(g(s))return this._returnResult({data:null,error:s});throw s}}async _listPasskeys(){H(this.experimental);try{return await this._useSession(async e=>{const{data:{session:s},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!s)return this._returnResult({data:null,error:new x});const{data:i,error:n}=await b(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:s.access_token,xform:a=>({data:a,error:null})});return n?this._returnResult({data:null,error:n}):this._returnResult({data:i,error:null})})}catch(e){if(g(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){H(this.experimental);try{return await this._useSession(async s=>{const{data:{session:r},error:i}=s;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new x});const{data:n,error:a}=await b(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:n,error:null})})}catch(s){if(g(s))return this._returnResult({data:null,error:s});throw s}}async _deletePasskey(e){H(this.experimental);try{return await this._useSession(async s=>{const{data:{session:r},error:i}=s;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new x});const{error:n}=await b(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,noResolveJson:!0});return n?this._returnResult({data:null,error:n}):this._returnResult({data:null,error:null})})}catch(s){if(g(s))return this._returnResult({data:null,error:s});throw s}}}Ue.nextInstanceID={};const Cn=Ue,On="2.108.2";let Ae="",it;if(typeof Deno<"u"){var pt;Ae="deno",it=(pt=Deno.version)===null||pt===void 0?void 0:pt.deno}else if(typeof document<"u")Ae="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")Ae="react-native";else{var ft;Ae="node",it=typeof process<"u"?(ft=process.version)===null||ft===void 0?void 0:ft.replace(/^v/,""):void 0}const Us=[`runtime=${Ae}`];it&&Us.push(`runtime-version=${it}`);const Pn={"X-Client-Info":`supabase-js/${On}; ${Us.join("; ")}`},xn={headers:Pn},In={schema:"public"},$n={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},jn={},Ln={enabled:!1,respectSamplingDecision:!0};function Nn(t,e,s,r){function i(n){return n instanceof s?n:new s(function(a){a(n)})}return new(s||(s=Promise))(function(n,a){function o(d){try{c(r.next(d))}catch(u){a(u)}}function l(d){try{c(r.throw(d))}catch(u){a(u)}}function c(d){d.done?n(d.value):i(d.value).then(o,l)}c((r=r.apply(t,[])).next())})}let vt=null;const Un="@opentelemetry/api";function Dn(){return vt===null&&(vt=import(Un).catch(()=>null)),vt}function Bn(){return Nn(this,void 0,void 0,function*(){try{const t=yield Dn();if(!t||!t.propagation||!t.context)return null;const e={};t.propagation.inject(t.context.active(),e);const s=e.traceparent;return s?{traceparent:s,tracestate:e.tracestate,baggage:e.baggage}:null}catch{return null}})}function qn(t){if(!t||typeof t!="string")return null;const e=t.split("-");if(e.length!==4)return null;const[s,r,i,n]=e;if(s.length!==2||r.length!==32||i.length!==16||n.length!==2)return null;const a=/^[0-9a-f]+$/i;return!a.test(s)||!a.test(r)||!a.test(i)||!a.test(n)||r==="00000000000000000000000000000000"||i==="0000000000000000"?null:{version:s,traceId:r,parentId:i,traceFlags:n,isSampled:(parseInt(n,16)&1)===1}}function Hn(t,e){if(!t||!e||e.length===0)return!1;let s;if(t instanceof URL)s=t;else try{s=new URL(t)}catch{return!1}for(const r of e)try{if(typeof r=="string"){if(Mn(s.hostname,r))return!0}else if(r instanceof RegExp){if(r.test(s.hostname))return!0}else if(typeof r=="function"&&r(s))return!0}catch{continue}return!1}function Mn(t,e){if(e===t)return!0;if(e.startsWith("*.")){const s=e.slice(2);if(t.endsWith(s)&&(t===s||t.endsWith("."+s)))return!0}return!1}function Wn(t){const e=[];try{const s=new URL(t);e.push(s.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function De(t){"@babel/helpers - typeof";return De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},De(t)}function Fn(t,e){if(De(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var r=s.call(t,e);if(De(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function zn(t){var e=Fn(t,"string");return De(e)=="symbol"?e:e+""}function Jn(t,e,s){return(e=zn(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function ds(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),s.push.apply(s,r)}return s}function R(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?ds(Object(s),!0).forEach(function(r){Jn(t,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):ds(Object(s)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(s,r))})}return t}const Kn=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),Vn=()=>Headers,Gn=(t,e,s,r,i)=>{const n=Kn(r),a=Vn(),o=(i==null?void 0:i.enabled)===!0,l=(i==null?void 0:i.respectSamplingDecision)!==!1,c=o?Wn(e):null;return async(d,u)=>{var h;const p=(h=await s())!==null&&h!==void 0?h:t;let f=new a(u==null?void 0:u.headers);if(f.has("apikey")||f.set("apikey",t),f.has("Authorization")||f.set("Authorization",`Bearer ${p}`),c){const v=await Yn(d,c,l);v&&(v.traceparent&&!f.has("traceparent")&&f.set("traceparent",v.traceparent),v.tracestate&&!f.has("tracestate")&&f.set("tracestate",v.tracestate),v.baggage&&!f.has("baggage")&&f.set("baggage",v.baggage))}return n(d,R(R({},u),{},{headers:f}))}};async function Yn(t,e,s){if(!Hn(typeof t=="string"||t instanceof URL?t:t.url,e))return null;const r=await Bn();if(!r||!r.traceparent)return null;if(s){const i=qn(r.traceparent);if(i&&!i.isSampled)return null}return r}function us(t){return typeof t=="boolean"?{enabled:t}:t}function Xn(t){return t.endsWith("/")?t:t+"/"}function Qn(t,e){var s,r,i,n,a,o;const{db:l,auth:c,realtime:d,global:u}=t,{db:h,auth:p,realtime:f,global:v}=e,w=us(t.tracePropagation),y=us(e.tracePropagation),_={db:R(R({},h),l),auth:R(R({},p),c),realtime:R(R({},f),d),storage:{},global:R(R(R({},v),u),{},{headers:R(R({},(s=v==null?void 0:v.headers)!==null&&s!==void 0?s:{}),(r=u==null?void 0:u.headers)!==null&&r!==void 0?r:{})}),tracePropagation:{enabled:(i=(n=w==null?void 0:w.enabled)!==null&&n!==void 0?n:y==null?void 0:y.enabled)!==null&&i!==void 0?i:!1,respectSamplingDecision:(a=(o=w==null?void 0:w.respectSamplingDecision)!==null&&o!==void 0?o:y==null?void 0:y.respectSamplingDecision)!==null&&a!==void 0?a:!0},accessToken:async()=>""};return t.accessToken?_.accessToken=t.accessToken:delete _.accessToken,_}function Zn(t){const e=t==null?void 0:t.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(Xn(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var ea=class extends Cn{constructor(t){super(t)}},ta=class{constructor(t,e,s){var r,i;this.supabaseUrl=t,this.supabaseKey=e;const n=Zn(t);if(!e)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",n),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",n),this.storageUrl=new URL("storage/v1",n),this.functionsUrl=new URL("functions/v1",n);const a=`sb-${n.hostname.split(".")[0]}-auth-token`,o={db:In,realtime:jn,auth:R(R({},$n),{},{storageKey:a}),global:xn,tracePropagation:Ln},l=Qn(s??{},o);if(this.settings=l,this.storageKey=(r=l.auth.storageKey)!==null&&r!==void 0?r:"",this.headers=(i=l.global.headers)!==null&&i!==void 0?i:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(d,u)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(u)} is not possible`)}});else{var c;this.auth=this._initSupabaseAuthClient((c=l.auth)!==null&&c!==void 0?c:{},this.headers,l.global.fetch)}this.fetch=Gn(e,t,this._getAccessToken.bind(this),l.global.fetch,l.tracePropagation),this.realtime=this._initRealtimeClient(R({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},l.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(d=>this.realtime.setAuth(d)).catch(d=>console.warn("Failed to set initial Realtime auth token:",d)),this.rest=new fr(new URL("rest/v1",n).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch,timeout:l.db.timeout,urlLengthLimit:l.db.urlLengthLimit}),this.storage=new Ri(this.storageUrl.href,this.headers,this.fetch,s==null?void 0:s.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new nr(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,e={},s={head:!1,get:!1,count:void 0}){return this.rest.rpc(t,e,s)}channel(t,e={config:{}}){return this.realtime.channel(t,e)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var t=this,e,s;if(t.accessToken)return await t.accessToken();const{data:r}=await t.auth.getSession();return(e=(s=r.session)===null||s===void 0?void 0:s.access_token)!==null&&e!==void 0?e:t.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:e,detectSessionInUrl:s,storage:r,userStorage:i,storageKey:n,flowType:a,lock:o,debug:l,throwOnError:c,experimental:d,lockAcquireTimeout:u,skipAutoInitialize:h},p,f){const v={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new ea({url:this.authUrl.href,headers:R(R({},v),p),storageKey:n,autoRefreshToken:t,persistSession:e,detectSessionInUrl:s,storage:r,userStorage:i,flowType:a,lock:o,debug:l,throwOnError:c,experimental:d,fetch:f,lockAcquireTimeout:u,skipAutoInitialize:h,hasCustomAuthorizationHeader:Object.keys(this.headers).some(w=>w.toLowerCase()==="authorization")})}_initRealtimeClient(t){return new Yr(this.realtimeUrl.href,R(R({},t),{},{params:R(R({},{apikey:this.supabaseKey}),t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,e)=>{this._handleTokenChanged(t,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(t,e,s){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==s?(this.changedAccessToken=s,this.realtime.setAuth(s)):t==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const sa=(t,e,s)=>new ta(t,e,s);function ra(){if(typeof window<"u")return!1;const t=globalThis.process;if(!t)return!1;const e=t.version;if(e==null)return!1;const s=e.match(/^v(\d+)\./);return s?parseInt(s[1],10)<=18:!1}ra()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const ia="https://uupqtdgkwkchydrzyvco.supabase.co",na="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1cHF0ZGdrd2tjaHlkcnp5dmNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3NjMzMTYsImV4cCI6MjA5NzMzOTMxNn0.PjzCAEhNThVxAwJ7MBysDEKuV2qiHwNwlIcazDbAoBc",C=sa(ia,na);async function aa(){if(!C)return[];const{data:t,error:e}=await C.from("jobs").select("*").eq("status","published").order("created_at",{ascending:!1});return e?(console.error("Error fetching jobs:",e),[]):t||[]}async function oa(t){if(!C)return null;const{data:e,error:s}=await C.from("jobs").select("*").eq("slug",t).eq("status","published").single();return s?(console.error("Error fetching job:",s),null):e}async function la(t){if(!C)return null;const{data:e,error:s}=await C.from("jobs").select("*").eq("id",t).single();return s?(console.error("Error fetching job by ID:",s),null):e}async function ca(){if(!C)return[];const{data:t,error:e}=await C.from("jobs").select("*").order("created_at",{ascending:!1});return e?(console.error("Error fetching all jobs:",e),[]):t||[]}async function da(t){if(!C)return null;const{data:e,error:s}=await C.from("jobs").insert([t]).select().single();return s?(console.error("Error creating job:",s),null):e}async function Ds(t,e){if(!C)return null;const{data:s,error:r}=await C.from("jobs").update(e).eq("id",t).select().single();return r?(console.error("Error updating job:",r),null):s}async function ua(t){if(!C)return!1;const{error:e}=await C.from("jobs").delete().eq("id",t);return e?(console.error("Error deleting job:",e),!1):!0}async function ha(t,e){return C?await C.auth.signInWithPassword({email:t,password:e}):{error:{message:"Supabase not configured"}}}async function Bs(){C&&await C.auth.signOut()}async function Pt(){if(!C)return null;const{data:{session:t}}=await C.auth.getSession();return t}async function pa(t){if(!C)return null;const{data:e,error:s}=await C.from("leads").insert([t]).select().single();return s?(console.error("Error submitting lead:",s),null):e}const fa="/assets/Tata-Logo-DOe6PKKQ.png",va="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.2.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='layer'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20652%20652'%20style='enable-background:new%200%200%20652%20652;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23DDAD7F;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M251.6,456.4c-6.6-17.3-32.2-37.6-32.2-37.6c-19.7-17.3-32.8-41.2-35.8-52.5l-7.8-2.4v131.2h11.9v-88.9%20c6,17.3,35.2,40,35.2,40s22.7,19.1,33.4,45.3l7.2,3.6V365.7h-11.9V456.4z'/%3e%3cpath%20class='st0'%20d='M131.7,367.5c-20.3,32.2-35.8,40.6-58.5,63.2c-19.1,19.1-33.4,40.6-26.3,64.4h22.1%20c-4.8-11.9-1.2-25.1,1.8-29.8h54.3v29.8h13.7V363.3C138.9,363.3,134.7,362.7,131.7,367.5%20M125.2,456.4H75.1%20c7.8-20.9,37.6-33.4,50.1-56.7V456.4z'/%3e%3cpath%20class='st0'%20d='M15.4,477.9l11.3-92.5c3-12.5,4.8-19.1,20.9-32.2C36.3,352,30.9,358.6,22,358h-70.4%20c-14.3-1.2-17.9,11.3-15.5,16.1c1.8-4.2,4.2-4.2,8.4-4.8h66.8c0,0-8.4,9.5-10.1,22.7c0,0-7.2,79.9-6,105%20c1.2,50.1,38.8,77.6,56.1,75.2C23.2,546.5,12.4,515.4,15.4,477.9'/%3e%3cpath%20class='st0'%20d='M434.7,120.6'/%3e%3cpath%20class='st0'%20d='M394.2,295.9c4.2,1.8,7.2,0.6,1.8-3.6c-31.6-20.3-50.1-68.6-51.9-109.8v-82.3c6.6,4.2,19.1,4.8,19.1,4.8h47.7%20c12.5,0,19.1,4.2,23.9,15.5c4.2-19.7-8.4-37.6-28-37.6H353c-13.7,0.6-32.2-10.7-32.2-10.7v90.1%20C320.8,253.6,370.9,292.4,394.2,295.9'/%3e%3cpath%20class='st0'%20d='M308.3,72.2c0,0-17.9,11.3-32.2,10.7h-53.7c-19.1,0-32.2,17.9-28,37.6c5.4-11.3,11.9-15.5,24.4-15.5h47.1%20c0,0,12.5-0.6,19.1-4.8v82.3c-1.8,41.1-20.3,89.5-51.9,109.7c-5.4,4.2-2.4,5.4,1.8,3.6c23.3-3.6,73.4-42.3,73.4-133.6V72.2z'/%3e%3crect%20x='305.9'%20y='365.7'%20class='st0'%20width='16.7'%20height='129.4'/%3e%3cpath%20class='st0'%20d='M648.9,349.6'/%3e%3cpath%20class='st0'%20d='M693.6,465.9c10.7-14.9,17.3-40,3.6-64.4c-12.5-23.3-47.7-44.7-48.3-51.9c-17.3,13.7-31.6,25.6-39.4,43.5%20c-8.4,17.9-10.7,43.5,0,65.6c11.9,24.5,25.7,37.6,41.8,53.7c11.3,12.5,32.8,37.6,25.7,59.7c5.4,0,12.5-13.1,13.7-17.9%20c3-15.5,1.2-23.3-5.4-34.6c-4.2-7.7-13.1-15.5-19.7-23.2C675.1,488.6,685.3,477.3,693.6,465.9%20M656,487.4L656,487.4%20c-13.7-11.3-22.1-20.9-30.4-39.4c-8.4-16.7-8.9-36.4-5.4-50.1c4.2-14.9,14.3-25.6,23.9-33.4c10.7,7.8,22.1,17.3,30.4,31%20c13.7,23.3,13.7,40,4.8,62.6C673.9,471.3,668,479,656,487.4'/%3e%3cpolygon%20class='st0'%20points='553.5,446.2%20506.3,446.2%20506.3,365.7%20489,365.7%20489,491.6%20506.3,491.6%20506.3,456.4%20553.5,456.4%20553.5,493.4%20571.4,493.4%20571.4,365.7%20553.5,365.7%20'/%3e%3cpath%20class='st0'%20d='M431.2,423.6c-17.3-8.9-32.2-14.9-45.9-25.6c-7.2-6-7.2-16.7-0.6-21.5c7.2-5.4,19.1-4.8,27.4-0.6%20c7.8,4.8,10.1,10.1,16.1,15.5c4.2,3.6,8.4,5.4,12.5,4.2c-1.8-8.4-7.2-16.1-14.3-22.7c-16.7-14.3-45.3-10.7-56.1,0.6%20c-12.5,13.7-8.4,26.8,3.6,38.8c13.7,13.7,38.2,19.1,57.8,37.6c9.5,8.9,11.3,22.7-1.8,31c-8.9,5.4-24.4,7.2-38.2,1.8%20c-9.5-4.2-13.7-7.7-20.3-16.7c-4.2-6.5-7.7-11.3-18.5-11.3c1.8,16.1,14.3,29.2,30.4,35.8c20.9,7.8,44.2,6.6,62.6-6%20C468.2,469.5,462.8,440.3,431.2,423.6'/%3e%3cpath%20class='st0'%20d='M314.8,310.8c-9.5,0-16.7,7.2-16.7,16.7c0,8.9,7.2,16.7,16.7,16.7c8.4,0,16.1-7.8,16.1-16.7%20C331,318,323.2,310.8,314.8,310.8'/%3e%3c/g%3e%3c/svg%3e",ga="/assets/roots-analysis-logo-DHWE0SrV.png",ma="/assets/icuerious-logo-wN-Xyugd.jpg",ya="/assets/ed-chd-logo-CL6eA_yA.jpg",ba="/assets/Rajiv_Gandhi_National_Institute_of_Youth_Development_Logo-CBKFTsy1.png";async function wa(){return{html:`
    ${re()}
    
    <!-- Hero Section -->
    <section id="hero">
      <div class="hero-bg" id="hero-bg"></div>
      <div class="hero-image-col reveal right">
        <div class="hero-photo">
          <img src="/hero-right.jpeg" alt="Laughter wellness session">
        </div>
      </div>
      <div class="hero-inner">
        <div class="hero-eyebrow reveal d1">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">Corporate Wellness · Laughter Wellness · Emotional Wellbeing</span>
        </div>
        <h1 class="reveal d2">Rediscover<br/>the Healing<br/>Power of <em>Laughter.</em></h1>
        <p class="hero-sub reveal d3">Science-backed burnout prevention, laughter wellness & stress management programs that transform workplace culture and bring genuine joy.</p>
        <div class="hero-buttons reveal d4">
          <a href="${E("Hi! I'd like to book a laughter wellness session.")}" target="_blank" class="btn-gold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right:8px;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Book a Session
          </a>
          <a href="/corporate" data-link class="btn-outline">Corporate Enquiry</a>
          <a href="#sessions" style="font-size:.8rem;color:var(--text-muted);letter-spacing:.12em;text-transform:uppercase;text-decoration:none;margin-left:12px;">Explore Programs ↓</a>
        </div>
      </div>
      <div class="hero-scroll-hint">
        <div class="scroll-line"></div>
        <span class="scroll-label">Scroll to explore</span>
      </div>
    </section>

    <!-- Trust Stats -->
    <div class="stats-strip">
      <div class="stats-grid">
        <div class="stat-item reveal up">
          <div class="stat-number"><span data-count="5000" data-suffix="+">0</span></div>
          <div class="stat-label">Participants Reached</div>
        </div>
        <div class="stat-item reveal up d1">
          <div class="stat-number"><span data-count="100" data-suffix="+">0</span></div>
          <div class="stat-label">Sessions Conducted</div>
        </div>
        <div class="stat-item reveal up d2">
          <div class="stat-number"><span data-count="50" data-suffix="+">0</span></div>
          <div class="stat-label">Organizations Served</div>
        </div>
        <div class="stat-item reveal up d3">
          <div class="stat-number">4.9/5</div>
          <div class="stat-label">Average Feedback</div>
        </div>
      </div>
    </div>

    <!-- Ticker -->
    <div class="ticker">
      <div class="ticker-track">
        <!-- Set 1 -->
        <div class="ticker-item">Laughter Yoga <div class="ticker-dot"></div></div>
        <div class="ticker-item">Stress Relief <div class="ticker-dot"></div></div>
        <div class="ticker-item">Corporate Wellness <div class="ticker-dot"></div></div>
        <div class="ticker-item">Employee Engagement <div class="ticker-dot"></div></div>
        <div class="ticker-item">Burnout Prevention <div class="ticker-dot"></div></div>
        <div class="ticker-item">Team Building <div class="ticker-dot"></div></div>
        <div class="ticker-item">Emotional Intelligence <div class="ticker-dot"></div></div>
        <div class="ticker-item">Book via WhatsApp <div class="ticker-dot"></div></div>
        <!-- Set 2 -->
        <div class="ticker-item">Laughter Yoga <div class="ticker-dot"></div></div>
        <div class="ticker-item">Stress Relief <div class="ticker-dot"></div></div>
        <div class="ticker-item">Corporate Wellness <div class="ticker-dot"></div></div>
        <div class="ticker-item">Employee Engagement <div class="ticker-dot"></div></div>
        <div class="ticker-item">Burnout Prevention <div class="ticker-dot"></div></div>
        <div class="ticker-item">Team Building <div class="ticker-dot"></div></div>
        <div class="ticker-item">Emotional Intelligence <div class="ticker-dot"></div></div>
        <div class="ticker-item">Book via WhatsApp <div class="ticker-dot"></div></div>
      </div>
    </div>

    <!-- About Section -->
    <section id="about">
      <div class="about-grid">
        <div class="about-collage reveal left">
          <div class="col-img col-a"><img src="/collage-main.jpeg" alt="Laughter yoga group"></div>
          <div class="col-img col-b"><img src="/collage-right.jpg" alt="Outdoor laughter therapy"></div>
          <div class="col-badge">Certified<br/>Practitioners</div>
        </div>
        <div class="about-text reveal right d2">
          ${j({tag:"Our Philosophy",title:"We believe joy<br/>is the <em>deepest</em><br/>form of healing.",theme:"dark"})}
          <div class="about-divider"></div>
          <p class="body">In today's fast-paced corporate world, stress isn't just inevitable, it's epidemic. DStressHub was founded with a singular mission: to reintroduce genuine joy and emotional resilience into the workplace and everyday life through the scientifically proven benefits of laughter therapy.</p>
          <div class="about-divider" style="margin:32px 0;"></div>
          <div class="about-features">
            <div class="feat-row">
              <div class="feat-num">01</div>
              <div>
                <div class="feat-title">Science-Backed Methods</div>
                <div class="feat-desc">Our programs combine laughter exercises with yogic breathing (Pranayama) to increase oxygen flow and trigger endorphin release.</div>
              </div>
            </div>
            <div class="feat-row">
              <div class="feat-num">02</div>
              <div>
                <div class="feat-title">No Experience Required</div>
                <div class="feat-desc">You don't need a sense of humor or to be happy. We use intentional laughter that eventually transitions into genuine, contagious joy.</div>
              </div>
            </div>
            <div class="feat-row">
              <div class="feat-num">03</div>
              <div>
                <div class="feat-title">Immediate Results</div>
                <div class="feat-desc">Participants report reduced stress, elevated mood, and improved team cohesion after just a single 45-minute session.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Logos -->
    <section class="logo-section">
      <div class="logo-inner reveal up">
        ${j({tag:"Trusted By",title:"Leading organizations<br/><em>choose DStressHub.</em>",theme:"light"})}
        <div class="logo-grid">
          <div class="logo-item"><img src="${fa}" alt="Tata Groups"></div>
          <div class="logo-item"><img src="${va}" alt="Tanishq"></div>
          <div class="logo-item"><img src="${ga}" alt="Roots Analysis"></div>
          <div class="logo-item"><img src="${ma}" alt="ICuerious"></div>
          <div class="logo-item"><img src="${ya}" alt="Education Chandigarh"></div>
          <div class="logo-item"><img src="${ba}" alt="Rajiv Gandhi National Institute"></div>
        </div>
      </div>
    </section>

    <!-- Parallax Strip 1 -->
    <section class="parallax-strip strip-1" data-parallax>
      <div class="strip-bg"></div>
      <div class="strip-overlay"></div>
      <div class="strip-content reveal up">
        <h2 class="strip-quote">"Laughter is the shortest distance between two people."</h2>
        <div class="strip-attr">— Victor Borge</div>
      </div>
    </section>

    <!-- Corporate Wellness -->
    <section class="corp-wellness-section">
      <div class="max-w reveal up">
        ${j({tag:"Corporate Programs",title:"Comprehensive wellness<br/><em>for your organization.</em>",theme:"dark"})}
      </div>
      <div class="corp-grid">
        <div class="corp-card reveal up d1">
          <div class="corp-icon">🧠</div>
          <h3>Stress Management</h3>
          <p>Equip teams with practical tools to manage workplace stress and build resilience.</p>
        </div>
        <div class="corp-card reveal up d2">
          <div class="corp-icon">🤝</div>
          <h3>Team Building</h3>
          <p>Foster genuine connections through shared laughter and collaborative exercises.</p>
        </div>
        <div class="corp-card reveal up d3">
          <div class="corp-icon">💡</div>
          <h3>Employee Engagement</h3>
          <p>Boost morale and create a culture where people enjoy showing up to work.</p>
        </div>
        <div class="corp-card reveal up d1">
          <div class="corp-icon">🔥</div>
          <h3>Burnout Prevention</h3>
          <p>Proactive wellness programs that address burnout before it takes hold.</p>
        </div>
        <div class="corp-card reveal up d2">
          <div class="corp-icon">👑</div>
          <h3>Leadership Wellness</h3>
          <p>Help leaders model healthy stress management and emotional awareness.</p>
        </div>
        <div class="corp-card reveal up d3">
          <div class="corp-icon">❤️</div>
          <h3>Emotional Intelligence</h3>
          <p>Develop empathy, self-awareness, and emotional regulation through experiential learning.</p>
        </div>
      </div>
      <div style="text-align:center; margin-top:48px;" class="reveal up">
        <a href="/corporate" data-link class="btn-gold">Request Corporate Proposal</a>
      </div>
    </section>

    <!-- Sessions Section -->
    <section id="sessions">
      <div class="sessions-inner">
        <div class="sessions-header reveal up">
          <div>
            ${j({tag:"Our Programs",title:"Find the right<br/><em>session for you.</em>",theme:"light"})}
          </div>
          <div>
            <p class="body-dark">Whether you are an individual seeking peace, a community looking to bond, or an organization aiming to reduce corporate burnout, we have a tailored program designed for your specific needs.</p>
          </div>
        </div>
        <div class="sessions-grid">
          <div class="session-card reveal up d1">
            <div class="card-number">01</div>
            <div class="card-icon">👫</div>
            <div class="card-cat">Most Popular</div>
            <h3>Group Laughter Session</h3>
            <p>Join our community laughter circles. Experience the contagious energy of group laughter therapy, perfect for releasing built-up tension and making genuine connections.</p>
            <div class="card-meta">
              <span class="meta-tag">45 Min</span>
              <span class="meta-tag">Up to 20 pax</span>
            </div>
            <a href="${E("Hi! I am interested in joining a Group Laughter Session.")}" target="_blank" class="card-link">Book via WhatsApp →</a>
          </div>
          <div class="session-card reveal up d2">
            <div class="card-number">02</div>
            <div class="card-icon">🧘</div>
            <div class="card-cat">Deeply Personal</div>
            <h3>Private 1-on-1 Session</h3>
            <p>A highly personalized session tailored to your emotional state. We focus intensely on your specific stress triggers using targeted breathing and laughter techniques.</p>
            <div class="card-meta">
              <span class="meta-tag">45 Min</span>
              <span class="meta-tag">Just You</span>
            </div>
            <a href="${E("Hi! I am interested in booking a Private 1-on-1 Session.")}" target="_blank" class="card-link">Book via WhatsApp →</a>
          </div>
          <div class="session-card reveal up d3">
            <div class="card-number">03</div>
            <div class="card-icon">🏢</div>
            <div class="card-cat">Corporate Wellness</div>
            <h3>Workplace Workshop</h3>
            <p>Transform your office environment. This workshop is designed specifically for teams to break down silos, reduce corporate burnout, and improve overall productivity.</p>
            <div class="card-meta">
              <span class="meta-tag">90 Min</span>
              <span class="meta-tag">5 - 20 pax</span>
            </div>
            <a href="${E("Hi! I am interested in a Workplace Wellness Workshop for my team.")}" target="_blank" class="card-link">Book via WhatsApp →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section id="how">
      <div class="how-inner">
        <div class="how-header reveal up">
          ${j({tag:"The Process",title:"Your journey<br/><em>to a lighter self.</em>",theme:"dark"})}
        </div>
        <div class="how-steps">
          <div class="how-step reveal up d1">
            <div class="step-n">01</div>
            <div class="step-icon">💬</div>
            <div class="step-title">Message Us</div>
            <div class="step-desc">Reach out via WhatsApp to discuss your needs.</div>
          </div>
          <div class="how-step reveal up d2">
            <div class="step-n">02</div>
            <div class="step-icon">📅</div>
            <div class="step-title">Confirm Slot</div>
            <div class="step-desc">We'll schedule a time that works best for you.</div>
          </div>
          <div class="how-step reveal up d3">
            <div class="step-n">03</div>
            <div class="step-icon">🚶</div>
            <div class="step-title">Arrive & Let Go</div>
            <div class="step-desc">Join the session with an open mind. No experience needed.</div>
          </div>
          <div class="how-step reveal up d4">
            <div class="step-n">04</div>
            <div class="step-icon">✨</div>
            <div class="step-title">Feel the Shift</div>
            <div class="step-desc">Leave feeling energized, relaxed, and genuinely joyful.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Parallax Strip 2 -->
    <section class="parallax-strip strip-2" data-parallax>
      <div class="strip-bg"></div>
      <div class="strip-overlay"></div>
      <div class="strip-content reveal up">
        <h2 class="strip-quote">"We don't laugh because we're happy, we're happy because we laugh."</h2>
        <div class="strip-attr">— William James</div>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="case-section" id="case-studies">
      <div class="max-w reveal up">
        ${j({tag:"Success Stories",title:"Real outcomes,<br/><em>real transformation.</em>",theme:"light"})}
      </div>
      <div class="case-grid">
        <div class="case-card reveal up d1">
          <div class="case-card-header">
            <span class="case-org">IT Company</span>
            <span class="case-type">Corporate</span>
          </div>
          <div class="case-card-body">
            <div class="case-label">The Challenge</div>
            <p class="case-text">Employee burnout and declining team morale across departments.</p>
            <div class="case-label">The Program</div>
            <p class="case-text">4-week Workplace Wellness Workshop Series</p>
            <div class="case-label">The Results</div>
            <div class="case-results">
              <span class="case-result">95% Participation</span>
              <span class="case-result">↑ 40% Engagement</span>
              <span class="case-result">Positive Feedback</span>
            </div>
          </div>
        </div>
        <div class="case-card reveal up d2">
          <div class="case-card-header">
            <span class="case-org">Educational Institution</span>
            <span class="case-type">Education</span>
          </div>
          <div class="case-card-body">
            <div class="case-label">The Challenge</div>
            <p class="case-text">Student stress and exam anxiety affecting performance.</p>
            <div class="case-label">The Program</div>
            <p class="case-text">School Wellness & Laughter Program</p>
            <div class="case-label">The Results</div>
            <div class="case-results">
              <span class="case-result">200+ Students Reached</span>
              <span class="case-result">Reduced Anxiety</span>
              <span class="case-result">Teacher Adoption</span>
            </div>
          </div>
        </div>
        <div class="case-card reveal up d3">
          <div class="case-card-header">
            <span class="case-org">Community Org</span>
            <span class="case-type">Non-Profit</span>
          </div>
          <div class="case-card-body">
            <div class="case-label">The Challenge</div>
            <p class="case-text">Social isolation among senior citizens.</p>
            <div class="case-label">The Program</div>
            <p class="case-text">Community Laughter Circles Program</p>
            <div class="case-label">The Results</div>
            <div class="case-results">
              <span class="case-result">300+ Participants</span>
              <span class="case-result">Weekly Retention</span>
              <span class="case-result">Joy & Connection</span>
            </div>
          </div>
        </div>
      </div>
      <a href="/case-studies" data-link class="gallery-view-all reveal up" style="display:block;text-align:center;margin-top:48px;">View All Case Studies →</a>
    </section>

    <!-- Gallery -->
    <section id="gallery">
      <div class="gallery-header reveal up">
        <div style="max-width:500px;">
          ${j({tag:"Gallery",title:"Moments of<br/><em>pure joy.</em>",theme:"dark"})}
        </div>
        <a href="${E("Hi! I'd like to book a session.")}" target="_blank" class="gallery-view-all">Book a Session →</a>
      </div>
      <div class="gallery-track reveal up d2" id="gallery-track">
        <div class="g-frame gf-1">
          <img src="/Morning-workshop.jpg" alt="Group Session" class="g-photo">
          <div class="g-overlay"><div class="g-label">Group Session</div></div>
        </div>
        <div class="g-frame gf-2">
          <img src="/Recording%202026-03-11%20154616.gif" alt="Morning Workshop" class="g-photo">
          <div class="g-overlay"><div class="g-label">Morning Workshop</div></div>
        </div>
        <div class="g-frame gf-3">
          <img src="/coorp-session.jpg" alt="Corporate Team" class="g-photo">
          <div class="g-overlay"><div class="g-label">Corporate Team</div></div>
        </div>
        <div class="g-frame gf-4">
          <img src="/image.png" alt="Private Session" class="g-photo">
          <div class="g-overlay"><div class="g-label">Private Session</div></div>
        </div>
        <div class="g-frame gf-5">
          <img src="/outdoor-treat.gif" alt="Outdoor Retreat" class="g-photo">
          <div class="g-overlay"><div class="g-label">Outdoor Retreat</div></div>
        </div>
        <div class="g-frame gf-6">
          <img src="/image%20copy.png" alt="Online Session" class="g-photo">
          <div class="g-overlay"><div class="g-label">Online Session</div></div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing">
      <div class="pricing-inner">
        <div class="pricing-header reveal up">
          ${j({tag:"Investment",title:"Transparent pricing for<br/><em>invaluable peace.</em>",theme:"light"})}
        </div>

        <div class="pricing-tabs reveal scale">
          <button class="p-tab active" data-tab="offline">Offline</button>
          <button class="p-tab" data-tab="online">Online</button>
          <button class="p-tab" data-tab="corporate">Corporate</button>
          <button class="p-tab" data-tab="workshops">Workshops</button>
        </div>

        <!-- Offline Pricing -->
        <div class="pricing-panel active" id="panel-offline">
          <h3 class="pricing-cat-title reveal up">Offline Sessions</h3>
          <div class="pricing-grid cols-2">
            <div class="p-card reveal up d1">
              <div class="p-card-badge">Basic</div>
              <h4 class="p-plan-name">1 Session</h4>
              <div class="p-price"><sup>₹</sup>1500<span>/person</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> 45 Min Session</li>
                <li class="p-detail-row"><span>🧘</span> 1-5 People</li>
                <li class="p-detail-row"><span>😄</span> Basic Laughter Exercises</li>
              </ul>
              <a href="${E("Hi! I want to book 1 offline session (₹1500/person).")}" target="_blank" class="p-book-btn">Book Plan</a>
            </div>
            <div class="p-card reveal up d2">
              <div class="p-card-badge">Standard</div>
              <h4 class="p-plan-name">1 Session</h4>
              <div class="p-price"><sup>₹</sup>1200<span>/person</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> 45 Min Sessions</li>
                <li class="p-detail-row"><span>🧘</span> 6-10 People</li>
                <li class="p-detail-row"><span>😌</span> Advanced Relaxation</li>
              </ul>
              <a href="${E("Hi! I want to book 12 offline sessions (₹1200/person).")}" target="_blank" class="p-book-btn">Book Plan</a>
            </div>
            
          </div>
        </div>

        <!-- Online Pricing -->
        <div class="pricing-panel" id="panel-online">
          <h3 class="pricing-cat-title">Online Sessions</h3>
          <div class="pricing-grid">
            <div class="p-card reveal up d1">
              <div class="p-card-badge">Euphoria</div>
              <h4 class="p-plan-name">Plan-1</h4>
              <div class="p-price"><sup>₹</sup>999<span>/Session</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> 45 Minutes</li>
                <li class="p-detail-row"><span>👥</span> 1-4 People</li>
                <li class="p-detail-row"><span>💻</span> Online Live Session</li>
              </ul>
              <a href="${E("Hi! I want to book Euphoria Plan-1 (₹999 per Session).")}" target="_blank" class="p-book-btn">Book Plan</a>
            </div>
            <div class="p-card reveal up d2">
              <div class="p-card-badge">Euphoria</div>
              <h4 class="p-plan-name">Plan-2</h4>
              <div class="p-price"><sup>₹</sup>1999<span>/Session</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> 45 Minutes</li>
                <li class="p-detail-row"><span>👥</span> 5-10 People</li>
                <li class="p-detail-row"><span>💻</span> Online Live Session</li>
              </ul>
              <a href="${E("Hi! I want to book Euphoria Plan-2 (₹1999 per Session).")}" target="_blank" class="p-book-btn">Book Plan</a>
            </div>
            <div class="p-card reveal up d3">
              <div class="p-card-badge">Euphoria</div>
              <h4 class="p-plan-name">Plan-3</h4>
              <div class="p-price"><sup>₹</sup>3999<span>/Session</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> 45 Minutes</li>
                <li class="p-detail-row"><span>👥</span> 11-25 People</li>
                <li class="p-detail-row"><span>💻</span> Online Live Session</li>
              </ul>
              <a href="${E("Hi! I want to book Euphoria Plan-3 (₹3999 per Session).")}" target="_blank" class="p-book-btn">Book Plan</a>
            </div>
            <div class="p-card reveal up d4">
              <div class="p-card-badge">Euphoria</div>
              <h4 class="p-plan-name">Plan-4</h4>
              <div class="p-price"><sup>₹</sup>5999<span>/Session</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> 45 Minutes</li>
                <li class="p-detail-row"><span>👥</span> 26-50 People</li>
                <li class="p-detail-row"><span>💻</span> Online Live Session</li>
              </ul>
              <a href="${E("Hi! I want to book Euphoria Plan-4 (₹5999 per Session).")}" target="_blank" class="p-book-btn">Book Plan</a>
            </div>
          </div>
        </div>

        <!-- Corporate Pricing -->
        <div class="pricing-panel" id="panel-corporate">
          <h3 class="pricing-cat-title">Corporate Plans</h3>
          <div class="pricing-grid">
            <div class="p-card reveal up d1">
              <div class="p-card-badge">Corporate</div>
              <h4 class="p-plan-name">Giggle Plan</h4>
              <div class="p-price"><sup>₹</sup>5,999<span>/session</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> 45 Minutes</li>
                <li class="p-detail-row"><span>👥</span> 10 – 19 People</li>
                <li class="p-detail-row"><span>📍</span> Offline – At Your Premises</li>
              </ul>
              <a href="${E("Hi! I want to book the Giggle Plan (₹5,999 per session).")}" target="_blank" class="p-book-btn">Enquire Now</a>
            </div>
            <div class="p-card reveal up d2">
              <div class="p-card-badge">Corporate</div>
              <h4 class="p-plan-name">Double Giggle Plan</h4>
              <div class="p-price"><sup>₹</sup>11,999<span>/session</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> 90 Minutes</li>
                <li class="p-detail-row"><span>👥</span> 10 – 19 People</li>
                <li class="p-detail-row"><span>📍</span> Offline – At Your Premises</li>
              </ul>
              <a href="${E("Hi! I want to book the Double Giggle Plan (₹11,999 per session).")}" target="_blank" class="p-book-btn">Enquire Now</a>
            </div>
            <div class="p-card reveal up d3">
              <div class="p-card-badge">Corporate</div>
              <h4 class="p-plan-name">Chuckle Plan</h4>
              <div class="p-price"><sup>₹</sup>20,999<span>/month</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> 45 Min per session</li>
                <li class="p-detail-row"><span>👥</span> Up to 40 People</li>
                <li class="p-detail-row"><span>📅</span> 4 Sessions total</li>
                <li class="p-detail-row"><span>📍</span> Offline – At Your Premises</li>
              </ul>
              <a href="${E("Hi! I want to book the Chuckle Plan up to 40 people (₹20,999 per month).")}" target="_blank" class="p-book-btn">Enquire Now</a>
            </div>
            <div class="p-card reveal up d4">
              <div class="p-card-badge">Corporate</div>
              <h4 class="p-plan-name">Chuckle Plan</h4>
              <div class="p-price"><sup>₹</sup>30,999<span>/month</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> 45 Min per session</li>
                <li class="p-detail-row"><span>👥</span> 41 – 100 People</li>
                <li class="p-detail-row"><span>📅</span> 4 Sessions total</li>
                <li class="p-detail-row"><span>📍</span> Offline – At Your Premises</li>
              </ul>
              <a href="${E("Hi! I want to book the Chuckle Plan for 41-100 people (₹30,999 per month).")}" target="_blank" class="p-book-btn">Enquire Now</a>
            </div>
          </div>
        </div>

        <!-- Workshops Pricing -->
        <div class="pricing-panel" id="panel-workshops">
          <h3 class="pricing-cat-title" style="margin-bottom:24px;">Half Day Sessions</h3>
          <div class="pricing-grid cols-3" style="margin-bottom:60px;">
            <div class="p-card reveal up d1">
              <div class="p-card-badge">Half Day</div>
              <h4 class="p-plan-name">Cheerful Plan-1</h4>
              <div class="p-price"><sup>₹</sup>9,999<span>/session</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> Half-day Workshop</li>
                <li class="p-detail-row"><span>👥</span> Up to 20 People</li>
                <li class="p-detail-row"><span>📍</span> Offline – At Your Premises</li>
              </ul>
              <a href="${E("Hi! I want to book the Cheerful Plan-1 half-day workshop (₹9,999).")}" target="_blank" class="p-book-btn">Enquire Now</a>
            </div>
            <div class="p-card reveal up d2">
              <div class="p-card-badge">Half Day</div>
              <h4 class="p-plan-name">Cheerful Plan-2</h4>
              <div class="p-price"><sup>₹</sup>15,999<span>/session</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> Half-day Workshop</li>
                <li class="p-detail-row"><span>👥</span> 20-40 People</li>
                <li class="p-detail-row"><span>📍</span> Offline – At Your Premises</li>
              </ul>
              <a href="${E("Hi! I want to book the Cheerful Plan-2 half-day workshop (₹15,999).")}" target="_blank" class="p-book-btn">Enquire Now</a>
            </div>
            <div class="p-card reveal up d3">
              <div class="p-card-badge">Half Day</div>
              <h4 class="p-plan-name">Cheerful Plan-3</h4>
              <div class="p-price"><sup>₹</sup>20,999<span>/session</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> Half-day Workshop</li>
                <li class="p-detail-row"><span>👥</span> 40-100 People</li>
                <li class="p-detail-row"><span>📍</span> Offline – At Your Premises</li>
              </ul>
              <a href="${E("Hi! I want to book the Cheerful Plan-3 half-day workshop (₹20,999).")}" target="_blank" class="p-book-btn">Enquire Now</a>
            </div>
          </div>

          <h3 class="pricing-cat-title" style="margin-bottom:24px;">Full Day Sessions</h3>
          <div class="pricing-grid cols-3">
            <div class="p-card reveal up d1">
              <div class="p-card-badge">Full Day</div>
              <h4 class="p-plan-name">Joyful Plan-1</h4>
              <div class="p-price"><sup>₹</sup>17,999<span>/session</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> Full-day Workshop</li>
                <li class="p-detail-row"><span>👥</span> Up to 20 People</li>
                <li class="p-detail-row"><span>📍</span> Offline – At Your Premises</li>
              </ul>
              <a href="${E("Hi! I want to book the Joyful Plan-1 full-day workshop (₹17,999).")}" target="_blank" class="p-book-btn">Enquire Now</a>
            </div>
            <div class="p-card reveal up d2">
              <div class="p-card-badge">Full Day</div>
              <h4 class="p-plan-name">Joyful Plan-2</h4>
              <div class="p-price"><sup>₹</sup>24,999<span>/session</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> Full-day Workshop</li>
                <li class="p-detail-row"><span>👥</span> 21-40 People</li>
                <li class="p-detail-row"><span>📍</span> Offline – At Your Premises</li>
              </ul>
              <a href="${E("Hi! I want to book the Joyful Plan-2 full-day workshop (₹24,999).")}" target="_blank" class="p-book-btn">Enquire Now</a>
            </div>
            <div class="p-card reveal up d3">
              <div class="p-card-badge">Full Day</div>
              <h4 class="p-plan-name">Joyful Plan-3</h4>
              <div class="p-price"><sup>₹</sup>34,999<span>/session</span></div>
              <div class="p-divider"></div>
              <ul class="p-details">
                <li class="p-detail-row"><span>⏱</span> Full-day Workshop</li>
                <li class="p-detail-row"><span>👥</span> 41-100 People</li>
                <li class="p-detail-row"><span>📍</span> Offline – At Your Premises</li>
              </ul>
              <a href="${E("Hi! I want to book the Joyful Plan-3 full-day workshop (₹34,999).")}" target="_blank" class="p-book-btn">Enquire Now</a>
            </div>
          </div>
        </div>

        <div class="pricing-note reveal up">
          <strong>Note:</strong> All sessions are conducted by Certified Laughter Wellness Coach. Custom packages are available for larger groups or special requirements. Please contact us to discuss your specific needs.
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews-section">
      <div class="reviews-inner">
        <div class="reveal up">
          ${j({tag:"What People Say",title:"Reviews from<br/><em>our participants.</em>",theme:"dark"})}
        </div>
        <div class="reviews-summary reveal up">
          <div class="reviews-big-rating">4.9</div>
          <div>
            <div class="reviews-stars">★★★★★</div>
            <div class="reviews-count">Based on participant feedback</div>
          </div>
        </div>
        <div class="reviews-grid">
          <div class="review-card reveal up d1">
            <div class="review-stars">★★★★★</div>
            <div class="review-text">"Really great session! We thought we understood laughter before, but after attending your session, we realized what true laughter actually feels like. Thank you for such an enriching experience."</div>
            <div class="review-author">
              <strong>Dr. Mandeep Kaur</strong>
              <span style="display:block; font-size:.72rem; margin-top:4px; opacity:0.7;">Professor @Panjab University</span>
            </div>
          </div>
          <div class="review-card reveal up d2">
            <div class="review-stars">★★★★★</div>
            <div class="review-text">"Thank you for being a part of our 14th Founders Day celebration and for bringing such positive energy to the session. We truly appreciate your contribution and look forward to collaborating again! :)"</div>
            <div class="review-author">
              <strong>Aditi Gupta</strong>
              <span style="display:block; font-size:.72rem; margin-top:4px; opacity:0.7;">VP of Human Resources, iCuerious Research Services Chandigarh</span>
            </div>
          </div>
          <div class="review-card reveal up d3">
            <div class="review-stars">★★★★★</div>
            <div class="review-text">"Loved it Rajat. The DstressHub team visited our office and lightened the day for us! Kudos to Rajat"</div>
            <div class="review-author">
              <strong>Gaurav Chaudhary</strong>
              <span style="display:block; font-size:.72rem; margin-top:4px; opacity:0.7;">CEO at Roots Analysis</span>
            </div>
          </div>
          <div class="review-card reveal up d1">
            <div class="review-stars">★★★★★</div>
            <div class="review-text">"Loved the 1:1 online wellness session, Sir. It was exactly what I needed to de-stress and lighten my day!"</div>
            <div class="review-author">
              <strong>Aarav Shourie</strong>
              <span style="display:block; font-size:.72rem; margin-top:4px; opacity:0.7;">Student at Chitkara University</span>
            </div>
          </div>
          <div class="review-card reveal up d2">
            <div class="review-stars">★★★★★</div>
            <div class="review-text">"It was a really fun friday 😂"</div>
            <div class="review-author">
              <strong>Nandini</strong>
              <span style="display:block; font-size:.72rem; margin-top:4px; opacity:0.7;">HR Manager</span>
            </div>
          </div>
          <div class="review-card reveal up d3">
            <div class="review-stars">★★★★★</div>
            <div class="review-text">"It was truly enriching and wonderful session Grateful for the experience"</div>
            <div class="review-author">
              <strong>Mir Gowhar</strong>
              <span style="display:block; font-size:.72rem; margin-top:4px; opacity:0.7;">Professor @University of Kashmir</span>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Lead Generation Form (Stress Audit) -->
    <section class="lead-section" id="stress-audit">
      <div class="lead-inner">
        <div class="reveal left">
          ${j({tag:"Free Assessment",title:"Get your free<br/><em>Wellness Audit.</em>",theme:"light"})}
          <p class="body-dark" style="margin-top:24px; margin-bottom:24px;">Discover the hidden stress triggers in your organization. Our free audit helps you understand your team's emotional wellbeing and provides actionable insights.</p>
          <ul style="list-style:none; padding:0;">
            <li style="margin-bottom:12px; font-size:.9rem; color:var(--text-body);"><span style="color:var(--gold); margin-right:8px;">✓</span> Identify burnout risks</li>
            <li style="margin-bottom:12px; font-size:.9rem; color:var(--text-body);"><span style="color:var(--gold); margin-right:8px;">✓</span> Measure team morale</li>
            <li style="margin-bottom:12px; font-size:.9rem; color:var(--text-body);"><span style="color:var(--gold); margin-right:8px;">✓</span> Get customized recommendations</li>
          </ul>
        </div>
        <div class="lead-form reveal right">
          <div class="lead-progress">
            <div class="step active" id="lead-step-1-ind"></div>
            <div class="step" id="lead-step-2-ind"></div>
            <div class="step" id="lead-step-3-ind"></div>
            <div class="step" id="lead-step-4-ind"></div>
          </div>
          
          <form id="lead-form-el">
            <!-- Step 1 -->
            <div id="lead-step-1">
              <div class="form-group">
                <label>Your Name</label>
                <input type="text" id="lead-name" required placeholder="John Doe">
              </div>
              <div class="form-group">
                <label>Organization</label>
                <input type="text" id="lead-org" required placeholder="Acme Corp">
              </div>
            </div>

            <!-- Step 2 -->
            <div id="lead-step-2" style="display:none;">
              <div class="form-group">
                <label>Team Size</label>
                <select id="lead-size">
                  <option value="1-10">1-10 Employees</option>
                  <option value="11-50">11-50 Employees</option>
                  <option value="51-200">51-200 Employees</option>
                  <option value="200+">200+ Employees</option>
                </select>
              </div>
              <div class="form-group">
                <label>Industry</label>
                <select id="lead-industry">
                  <option value="IT">IT & Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Non-Profit">Non-Profit / NGO</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <!-- Step 3 -->
            <div id="lead-step-3" style="display:none;">
              <div class="form-group">
                <label>Key Challenges (Select all that apply)</label>
                <div class="checkbox-group">
                  <label class="checkbox-label"><input type="checkbox" value="Burnout" class="lead-challenge"> Burnout</label>
                  <label class="checkbox-label"><input type="checkbox" value="Low Morale" class="lead-challenge"> Low Morale</label>
                  <label class="checkbox-label"><input type="checkbox" value="High Turnover" class="lead-challenge"> High Turnover</label>
                  <label class="checkbox-label"><input type="checkbox" value="Stress & Anxiety" class="lead-challenge"> Stress & Anxiety</label>
                  <label class="checkbox-label"><input type="checkbox" value="Remote Disconnect" class="lead-challenge"> Remote Disconnect</label>
                </div>
              </div>
            </div>

            <!-- Step 4 -->
            <div id="lead-step-4" style="display:none;">
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" id="lead-email" required placeholder="john@acmecorp.com">
              </div>
              <div class="form-group">
                <label>Phone Number (WhatsApp)</label>
                <input type="tel" id="lead-phone" required placeholder="+91 98765 43210">
              </div>
            </div>

            <div style="display:flex; gap:16px; margin-top:32px;">
              <button type="button" class="btn-outline" id="lead-back-btn" style="display:none; color:var(--text-dark); border-color:var(--cream-dark);">Back</button>
              <button type="button" class="btn-gold" id="lead-next-btn" style="flex:1;">Next Step →</button>
              <button type="submit" class="btn-gold" id="lead-submit-btn" style="display:none; flex:1;">Get My Free Assessment</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta">
      <div class="cta-inner">
        <h2 class="reveal left">Ready to laugh your<br/><em>stress away?</em></h2>
        <div class="cta-buttons reveal right d2">
          <a href="${E("Hi! I'd like to book a session.")}" target="_blank" class="btn-dark">Book a Session</a>
          <a href="${E("Hi! I have a question about your programs.")}" target="_blank" class="btn-wa">Chat on WhatsApp</a>
        </div>
      </div>
    </section>

    ${ne()}
  `,init:()=>{ie(),we(),fs(),Xs(),Qs(),V();const r=document.querySelectorAll(".p-tab"),i=document.querySelectorAll(".pricing-panel");r.forEach(h=>{h.addEventListener("click",()=>{r.forEach(v=>v.classList.remove("active")),i.forEach(v=>v.classList.remove("active")),h.classList.add("active");const p="panel-"+h.dataset.tab,f=document.getElementById(p);f.classList.add("active"),Ys(f),V()})});let n=1;const a=4,o=document.getElementById("lead-next-btn"),l=document.getElementById("lead-back-btn"),c=document.getElementById("lead-submit-btn"),d=document.getElementById("lead-form-el"),u=()=>{for(let h=1;h<=a;h++){document.getElementById("lead-step-"+h).style.display=h===n?"block":"none";const p=document.getElementById("lead-step-"+h+"-ind");h<=n?p.classList.add("active"):p.classList.remove("active")}l.style.display=n>1?"block":"none",n===a?(o.style.display="none",c.style.display="block"):(o.style.display="block",c.style.display="none")};o.addEventListener("click",()=>{if(n===1&&(!document.getElementById("lead-name").value||!document.getElementById("lead-org").value)){K("Please fill in name and organization.","error");return}n<a&&(n++,u())}),l.addEventListener("click",()=>{n>1&&(n--,u())}),d.addEventListener("submit",async h=>{h.preventDefault();const p=document.getElementById("lead-name").value,f=document.getElementById("lead-org").value,v=document.getElementById("lead-size").value,w=document.getElementById("lead-industry").value,y=document.getElementById("lead-email").value,_=document.getElementById("lead-phone").value,m=Array.from(document.querySelectorAll(".lead-challenge:checked")).map(I=>I.value);if(await pa({name:p,organization:f,team_size:v,industry:w,email:y,phone:_,challenges:m})){K("Assessment request submitted! Redirecting to WhatsApp...","success");const I=`Hi DStressHub! I just submitted a Free Stress Audit request.
*Name:* ${p}
*Organization:* ${f}
*Team Size:* ${v}
*Challenges:* ${m.join(", ")||"None specified"}`;setTimeout(()=>{window.open(E(I),"_blank"),d.reset(),n=1,u()},1500)}else K("Error submitting form. Please try again.","error")})},cleanup:()=>{vs()}}}async function _a(){const t=await aa(),e=()=>{if(t.length===0)return`
        <div class="jobs-empty reveal up">
          <p style="margin-bottom:16px;">We don't have open positions right now, but we're always looking for passionate people. Drop us a message!</p>
          <a href="${E("Hi! I am interested in future opportunities at DStressHub.")}" target="_blank" class="btn-outline">Say Hello</a>
        </div>
      `;let i='<div class="jobs-grid">';return t.forEach((n,a)=>{const o=`d${a%4+1}`;i+=`
        <div class="job-card reveal up ${o}">
          <h3>${n.title}</h3>
          <div class="job-meta">
            <span class="job-tag">${n.employment_type}</span>
            <span class="job-tag">${n.location}</span>
            <span class="job-tag">${n.department||"General"}</span>
          </div>
          <a href="/careers/job/${n.slug}" data-link class="card-link" style="margin-top:auto;">View & Apply →</a>
        </div>
      `}),i+="</div>",i};return{html:`
    ${re()}
    
    <!-- Hero -->
    <section class="careers-hero">
      <div class="careers-hero-bg"></div>
      <div class="careers-hero-inner">
        <div class="hero-eyebrow reveal d1">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">Join Our Mission</span>
        </div>
        <h1 class="reveal d2">Join <em>DStressHub</em></h1>
        <p class="hero-sub reveal d3">Help us build happier, healthier workplaces through wellness, laughter, and emotional wellbeing.</p>
        <a href="#positions" class="btn-gold reveal d4">View Open Positions</a>
      </div>
    </section>

    <!-- Why Work With Us -->
    <section class="why-section">
      <div class="max-w reveal up">
        ${j({tag:"Why DStressHub",title:"More than a job —<br/><em>a purpose.</em>",theme:"light"})}
      </div>
      <div class="why-grid">
        <div class="why-card reveal up d1">
          <div class="why-icon">🌱</div>
          <h3>Meaningful Impact</h3>
          <p>Help transform lives through science-backed wellness programs.</p>
        </div>
        <div class="why-card reveal up d2">
          <div class="why-icon">🏠</div>
          <h3>Flexible Work Culture</h3>
          <p>Remote and hybrid opportunities. We trust you to do great work.</p>
        </div>
        <div class="why-card reveal up d3">
          <div class="why-icon">📈</div>
          <h3>Growth Opportunities</h3>
          <p>Continuous training, mentorship, and career development pathways.</p>
        </div>
        <div class="why-card reveal up d4">
          <div class="why-icon">💚</div>
          <h3>Wellness First</h3>
          <p>We practice what we teach. Your wellbeing is our priority.</p>
        </div>
      </div>
    </section>

    <!-- Positions -->
    <section class="positions-section" id="positions">
      <div class="positions-inner">
        <div class="reveal up">
          ${j({tag:"Open Positions",title:"Find your role<br/><em>at DStressHub.</em>",theme:"dark"})}
        </div>
        ${e()}
      </div>
    </section>

    <!-- Hiring Process -->
    <section class="hiring-section">
      <div class="max-w">
        <div class="reveal up" style="text-align:center; display:flex; flex-direction:column; align-items:center; margin-bottom:80px;">
          ${j({tag:"Our Process",title:"From application<br/><em>to offer.</em>",theme:"dark"})}
        </div>
        <div class="how-steps">
          <div class="how-step reveal up d1">
            <div class="step-n">01</div>
            <div class="step-icon">📝</div>
            <div class="step-title">Apply Online</div>
            <div class="step-desc">Submit your application via our quick Google Form.</div>
          </div>
          <div class="how-step reveal up d2">
            <div class="step-n">02</div>
            <div class="step-icon">👋</div>
            <div class="step-title">Initial Screening</div>
            <div class="step-desc">A brief chat to align on culture and expectations.</div>
          </div>
          <div class="how-step reveal up d3">
            <div class="step-n">03</div>
            <div class="step-icon">🎙️</div>
            <div class="step-title">Interview Round</div>
            <div class="step-desc">Meet the team and discuss your skills in depth.</div>
          </div>
          <div class="how-step reveal up d4">
            <div class="step-n">04</div>
            <div class="step-icon">🎉</div>
            <div class="step-title">Offer Letter</div>
            <div class="step-desc">Welcome to the DStressHub family!</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="emp-testi-section">
      <div class="max-w">
        <div class="reveal up" style="text-align:center; display:flex; flex-direction:column; align-items:center; margin-bottom:64px;">
          ${j({tag:"Our Team",title:"What our team<br/><em>has to say.</em>",theme:"dark"})}
        </div>
        <div class="testi-grid">
          <div class="testi-card reveal up d1">
            <div class="testi-text">"Joining DStressHub was the best career decision. Every day I help people rediscover joy — that's incredibly fulfilling."</div>
            <div class="testi-author">
              <div class="testi-avatar">A</div>
              <div>
                <div class="testi-name">Ananya R.</div>
                <div class="testi-role">Wellness Facilitator</div>
              </div>
            </div>
          </div>
          <div class="testi-card reveal up d2">
            <div class="testi-text">"The flexibility and trust here is unmatched. I work remotely and still feel deeply connected to the mission."</div>
            <div class="testi-author">
              <div class="testi-avatar">K</div>
              <div>
                <div class="testi-name">Karan D.</div>
                <div class="testi-role">Program Coordinator</div>
              </div>
            </div>
          </div>
          <div class="testi-card reveal up d3">
            <div class="testi-text">"I started as a fresher and the team invested in my growth. Now I lead corporate workshops independently."</div>
            <div class="testi-author">
              <div class="testi-avatar">M</div>
              <div>
                <div class="testi-name">Meera T.</div>
                <div class="testi-role">Senior Facilitator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="careers-faq-section">
      <div class="max-w">
        <div class="reveal up" style="margin-bottom:64px;">
          ${j({tag:"Questions",title:"Frequently asked<br/><em>questions.</em>",theme:"dark"})}
        </div>
        <div class="faq-list reveal up">
          <div class="faq-item">
            <div class="faq-q">Is remote work available? <span class="faq-icon">+</span></div>
            <div class="faq-a"><p>Yes! We offer remote and hybrid opportunities for most roles. Our team works across India with flexible schedules.</p></div>
          </div>
          <div class="faq-item">
            <div class="faq-q">Are freshers eligible? <span class="faq-icon">+</span></div>
            <div class="faq-a"><p>Absolutely. We value enthusiasm and willingness to learn. Training and mentorship are provided for all new team members.</p></div>
          </div>
          <div class="faq-item">
            <div class="faq-q">Will training be provided? <span class="faq-icon">+</span></div>
            <div class="faq-a"><p>Yes. Every team member goes through our comprehensive laughter therapy certification and facilitation training program.</p></div>
          </div>
          <div class="faq-item">
            <div class="faq-q">Is part-time work available? <span class="faq-icon">+</span></div>
            <div class="faq-a"><p>We offer part-time and freelance opportunities for facilitators and content creators. Reach out to discuss options.</p></div>
          </div>
        </div>
      </div>
    </section>

    ${ne()}
  `,init:()=>{ie(),we(),V(),document.querySelectorAll(".faq-q").forEach(i=>{i.addEventListener("click",()=>{const n=i.parentElement,a=n.classList.contains("open");document.querySelectorAll(".faq-item").forEach(o=>o.classList.remove("open")),a||n.classList.add("open")})})}}}async function ka(t){const e=await oa(t.slug);if(!e)return{html:`
        ${re()}
        <div class="job-detail-page" style="display:flex;align-items:center;justify-content:center;text-align:center;">
          <div>
            <h1 style="font-family:'Cormorant Garamond',serif;font-size:3rem;color:var(--gold);margin-bottom:16px;">Job Not Found</h1>
            <p style="color:var(--text-muted);margin-bottom:32px;">The position you're looking for doesn't exist or is no longer available.</p>
            <a href="/careers" data-link class="btn-outline">Back to Careers</a>
          </div>
        </div>
        ${ne()}
      `,init:()=>{ie(),V()}};const s=a=>!a||a.length===0?"":`<ul>${a.map(o=>`<li>${o}</li>`).join("")}</ul>`,r=e.google_form_link||E(`Hi! I'm interested in applying for the ${e.title} position.`);return{html:`
    ${re()}
    
    <div class="job-detail-page">
      <div class="job-detail-inner">
        <a href="/careers" data-link class="job-detail-back reveal d1">← Back to Careers</a>
        
        <div class="job-detail-header reveal up d2">
          <h1>${e.title}</h1>
          <div class="job-detail-badges">
            <span class="job-badge type">${e.employment_type}</span>
            <span class="job-badge location">${e.location}</span>
            ${e.department?`<span class="job-badge location">${e.department}</span>`:""}
            ${e.experience_required?`<span class="job-badge location">${e.experience_required}</span>`:""}
          </div>
        </div>

        ${e.description?`
        <div class="job-detail-section reveal up">
          <h3>Overview</h3>
          <p>${e.description.replace(/\n/g,"<br/>")}</p>
        </div>`:""}

        ${e.responsibilities&&e.responsibilities.length>0?`
        <div class="job-detail-section reveal up">
          <h3>Responsibilities</h3>
          ${s(e.responsibilities)}
        </div>`:""}

        ${e.requirements&&e.requirements.length>0?`
        <div class="job-detail-section reveal up">
          <h3>Requirements</h3>
          ${s(e.requirements)}
        </div>`:""}

        ${e.benefits&&e.benefits.length>0?`
        <div class="job-detail-section reveal up">
          <h3>Benefits</h3>
          ${s(e.benefits)}
        </div>`:""}

        ${e.salary_range?`
        <div class="job-detail-section reveal up">
          <h3>Salary Range</h3>
          <p>${e.salary_range}</p>
        </div>`:""}

        <div class="reveal up" style="margin-top:56px; border-top:1px solid rgba(245,240,232,.1); padding-top:40px;">
          <a href="${r}" target="_blank" class="job-apply-btn">Apply Now →</a>
        </div>
      </div>
    </div>

    ${ne()}
  `,init:()=>{ie(),we(),V()}}}async function Sa(){return{html:`
    ${re()}
    
    <section class="corp-hero">
      <div class="corp-hero-bg"></div>
      <div class="corp-hero-inner">
        <div class="hero-eyebrow reveal d1">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">Corporate Solutions</span>
        </div>
        <h1 class="reveal d2">Transform Your<br/><em>Workplace Culture.</em></h1>
        <p class="hero-sub reveal d3">Empower your team with science-backed laughter therapy to reduce burnout, improve emotional intelligence, and foster genuine connection.</p>
        <a href="#enquiry" class="btn-gold reveal d4">Request a Proposal</a>
      </div>
    </section>

    <!-- Trust Stats -->
    <div class="stats-strip">
      <div class="stats-grid">
        <div class="stat-item reveal up">
          <div class="stat-number"><span data-count="30" data-suffix="%">0</span></div>
          <div class="stat-label">Reduction in Stress</div>
        </div>
        <div class="stat-item reveal up d1">
          <div class="stat-number"><span data-count="45" data-suffix="%">0</span></div>
          <div class="stat-label">Increase in Morale</div>
        </div>
        <div class="stat-item reveal up d2">
          <div class="stat-number"><span data-count="50" data-suffix="+">0</span></div>
          <div class="stat-label">Corporate Clients</div>
        </div>
        <div class="stat-item reveal up d3">
          <div class="stat-number">4.9/5</div>
          <div class="stat-label">Average Rating</div>
        </div>
      </div>
    </div>

    <!-- Programs -->
    <section class="corp-programs-section">
      <div class="max-w">
        <div class="reveal up" style="margin-bottom:64px;">
          ${j({tag:"Our Offerings",title:"Tailored programs for<br/><em>modern teams.</em>",theme:"dark"})}
        </div>
        <div class="corp-grid">
          <div class="corp-card reveal up d1">
            <div class="corp-icon">🏢</div>
            <h3>Lunch & Learn Sessions</h3>
            <p>A quick, 45-minute interactive session to introduce the science of laughter and provide immediate stress relief during the workday.</p>
          </div>
          <div class="corp-card reveal up d2">
            <div class="corp-icon">🤝</div>
            <h3>Team Building Workshops</h3>
            <p>Half-day programs designed to break down silos, improve communication, and build psychological safety through shared joy.</p>
          </div>
          <div class="corp-card reveal up d3">
            <div class="corp-icon">👑</div>
            <h3>Leadership Retreats</h3>
            <p>Equip managers with emotional regulation tools to lead with empathy, manage team stress, and prevent collective burnout.</p>
          </div>
          <div class="corp-card reveal up d1">
            <div class="corp-icon">📅</div>
            <h3>Ongoing Wellness Programs</h3>
            <p>Weekly or monthly sessions integrated into your company's wellness calendar for sustained emotional wellbeing.</p>
          </div>
          <div class="corp-card reveal up d2">
            <div class="corp-icon">🌐</div>
            <h3>Virtual Remote Sessions</h3>
            <p>Engage distributed teams with high-energy online laughter sessions that combat screen fatigue and isolation.</p>
          </div>
          <div class="corp-card reveal up d3">
            <div class="corp-icon">🎨</div>
            <h3>Custom Engagements</h3>
            <p>Have a specific goal? We design bespoke programs tailored to your organizational challenges and culture.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Enquiry Form -->
    <section class="corp-enquiry-section" id="enquiry">
      <div class="max-w">
        <div class="reveal up" style="text-align:center;">
          ${j({tag:"Enquiry",title:"Ready to bring joy to<br/><em>your organization?</em>",theme:"light"})}
        </div>
        
        <form class="corp-enquiry-form reveal up d2" id="corp-form">
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" id="c-name" required placeholder="John Doe">
          </div>
          <div class="form-group">
            <label>Company Name</label>
            <input type="text" id="c-company" required placeholder="Acme Corp">
          </div>
          <div class="form-group">
            <label>Work Email</label>
            <input type="email" id="c-email" required placeholder="john@acmecorp.com">
          </div>
          <div class="form-group">
            <label>Phone Number (WhatsApp)</label>
            <input type="tel" id="c-phone" required placeholder="+91 98765 43210">
          </div>
          <div class="form-group">
            <label>Estimated Team Size</label>
            <select id="c-size">
              <option value="10-50">10-50 Employees</option>
              <option value="51-200">51-200 Employees</option>
              <option value="200-500">200-500 Employees</option>
              <option value="500+">500+ Employees</option>
            </select>
          </div>
          <div class="form-group">
            <label>Message / Requirements</label>
            <textarea id="c-msg" placeholder="Tell us about your team and goals..."></textarea>
          </div>
          <button type="submit" class="btn-gold" style="width:100%; justify-content:center;">Submit Enquiry</button>
        </form>
      </div>
    </section>

    ${ne()}
  `,init:()=>{ie(),we(),fs(),V();const s=document.getElementById("corp-form");s&&s.addEventListener("submit",r=>{r.preventDefault();const i=document.getElementById("c-name").value,n=document.getElementById("c-company").value,a=document.getElementById("c-size").value,o=document.getElementById("c-msg").value,l=`Hi DStressHub! I'd like to request a Corporate Proposal.
*Name:* ${i}
*Company:* ${n}
*Team Size:* ${a}
*Message:* ${o}`;window.open(E(l),"_blank"),s.reset()})}}}async function Ea(){return{html:`
    ${re()}
    
    <section class="careers-hero" style="min-height: 400px; height: 50vh;">
      <div class="careers-hero-bg"></div>
      <div class="careers-hero-inner">
        <div class="hero-eyebrow reveal d1">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">Impact & Results</span>
        </div>
        <h1 class="reveal d2">Case <em>Studies</em></h1>
        <p class="hero-sub reveal d3">Discover how organizations have transformed their culture through our programs.</p>
      </div>
    </section>

    <section class="case-section" style="background:var(--bg-dark);">
      <div class="case-grid">
        <!-- Case 1 -->
        <div class="case-card reveal up d1">
          <div class="case-card-header">
            <span class="case-org">Global Tech Corp</span>
            <span class="case-type">IT & Software</span>
          </div>
          <div class="case-card-body" style="background:var(--bg-mid);">
            <div class="case-label">The Challenge</div>
            <p class="case-text" style="color:var(--text-light)">High burnout rates, missed deadlines, and poor cross-departmental communication following a major restructuring.</p>
            <div class="case-label">The Solution</div>
            <p class="case-text" style="color:var(--text-light)">A 12-week comprehensive program including bi-weekly virtual laughter sessions and leadership emotional regulation workshops.</p>
            <div class="case-label">The Results</div>
            <div class="case-results">
              <span class="case-result" style="background:var(--bg-dark);color:var(--gold);">↓ 40% Reported Stress</span>
              <span class="case-result" style="background:var(--bg-dark);color:var(--gold);">↑ 25% Productivity</span>
            </div>
          </div>
        </div>

        <!-- Case 2 -->
        <div class="case-card reveal up d2">
          <div class="case-card-header">
            <span class="case-org">City Hospital</span>
            <span class="case-type">Healthcare</span>
          </div>
          <div class="case-card-body" style="background:var(--bg-mid);">
            <div class="case-label">The Challenge</div>
            <p class="case-text" style="color:var(--text-light)">Severe compassion fatigue and emotional exhaustion among frontline nursing staff.</p>
            <div class="case-label">The Solution</div>
            <p class="case-text" style="color:var(--text-light)">Integration of 15-minute "Laughter Breaks" at shift changes, plus monthly deep-relaxation retreats.</p>
            <div class="case-label">The Results</div>
            <div class="case-results">
              <span class="case-result" style="background:var(--bg-dark);color:var(--gold);">↓ Absenteeism</span>
              <span class="case-result" style="background:var(--bg-dark);color:var(--gold);">Improved Patient Care Ratings</span>
            </div>
          </div>
        </div>

        <!-- Case 3 -->
        <div class="case-card reveal up d3">
          <div class="case-card-header">
            <span class="case-org">Creative Agency</span>
            <span class="case-type">Media & Design</span>
          </div>
          <div class="case-card-body" style="background:var(--bg-mid);">
            <div class="case-label">The Challenge</div>
            <p class="case-text" style="color:var(--text-light)">Creative blocks, intense pitch stress, and a highly competitive internal culture hindering collaboration.</p>
            <div class="case-label">The Solution</div>
            <p class="case-text" style="color:var(--text-light)">Monthly in-person "Play & Joy" workshops designed to break down ego barriers and stimulate creative thinking.</p>
            <div class="case-label">The Results</div>
            <div class="case-results">
              <span class="case-result" style="background:var(--bg-dark);color:var(--gold);">Enhanced Collaboration</span>
              <span class="case-result" style="background:var(--bg-dark);color:var(--gold);">↑ Pitch Win Rate</span>
            </div>
          </div>
        </div>
      </div>
      
      <div style="text-align:center; margin-top:80px;" class="reveal up">
        <a href="/corporate" data-link class="btn-gold">Transform Your Team</a>
      </div>
    </section>

    ${ne()}
  `,init:()=>{ie(),we(),V()}}}async function Ta(){return{html:`
    ${re()}
    
    <section class="careers-hero" style="min-height: 400px; height: 50vh;">
      <div class="careers-hero-bg"></div>
      <div class="careers-hero-inner">
        <div class="hero-eyebrow reveal d1">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">Knowledge Hub</span>
        </div>
        <h1 class="reveal d2">Articles & <em>Resources</em></h1>
        <p class="hero-sub reveal d3">Insights on stress management, the science of laughter, and workplace wellbeing.</p>
      </div>
    </section>

    <section style="background:var(--bg-light); padding:120px 0;">
      <div class="max-w">
        <div style="text-align:center; color:var(--text-muted); font-size:1.2rem; font-family:'Cormorant Garamond',serif; font-style:italic;" class="reveal up">
          Our blog and resources hub is currently being curated.<br/>Please check back soon for articles on wellness and laughter therapy.
        </div>
      </div>
    </section>

    ${ne()}
  `,init:()=>{ie(),we(),V()}}}async function Aa(){return await Pt()?(U("/admin/jobs"),{html:""}):{html:`
    <div class="admin-page">
      <div class="admin-login">
        <div class="login-card">
          <h1>DStress<span>Hub</span></h1>
          <p class="login-sub">Sign in to manage job listings</p>
          <form id="admin-login-form">
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" id="login-email" required placeholder="admin@dstresshub.com">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" id="login-password" required placeholder="••••••••">
            </div>
            <button type="submit" class="btn-gold" style="width:100%; margin-top:16px;">Sign In</button>
            <div id="login-error" class="login-error" style="display:none;"></div>
          </form>
        </div>
      </div>
    </div>
  `,init:()=>{const r=document.getElementById("admin-login-form");r&&r.addEventListener("submit",async i=>{i.preventDefault();const n=document.getElementById("login-email").value,a=document.getElementById("login-password").value,o=document.getElementById("login-error"),l=r.querySelector("button");l.textContent="Signing in...",l.disabled=!0,o.style.display="none";const{error:c}=await ha(n,a);c?(o.textContent=c.message||"Invalid login credentials",o.style.display="block",l.textContent="Sign In",l.disabled=!1):U("/admin/jobs")})}}}async function Ra(){if(!await Pt())return U("/admin"),{html:""};const e=await ca();return{html:`
    <div class="admin-page">
      <div class="admin-layout">
        <div class="admin-sidebar">
          <div class="admin-sidebar-logo">DStress<span>Hub</span></div>
          <div class="admin-sidebar-nav">
            <a href="/admin/jobs" data-link class="active">Job Listings</a>
            <a href="/admin/jobs/new" data-link>Create Job</a>
            <a href="/" data-link target="_blank">View Live Site</a>
          </div>
          <div class="admin-sidebar-footer">
            <button id="sign-out-btn" class="admin-btn" style="width:100%;text-align:left;border:none;">Sign Out</button>
          </div>
        </div>
        
        <div class="admin-content">
          <div class="admin-header">
            <h1>Job Listings</h1>
            <a href="/admin/jobs/new" data-link class="btn-gold" style="font-size:.75rem;padding:12px 24px;">Create New Job</a>
          </div>
          
          <div style="background:rgba(255,255,255,.02); border:1px solid rgba(245,240,232,.06); border-radius:4px; overflow-x:auto;">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${e.length===0?'<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:32px;">No jobs found. Create one to get started.</td></tr>':e.map(n=>`
      <tr>
        <td><strong>${n.title}</strong></td>
        <td>${n.department||"—"}</td>
        <td><span class="status-badge ${n.status}">${n.status}</span></td>
        <td>${tr(n.created_at)}</td>
        <td>
          <div class="admin-actions">
            <button class="admin-btn edit-btn" data-id="${n.id}">Edit</button>
            <button class="admin-btn toggle-btn" data-id="${n.id}" data-status="${n.status}">
              ${n.status==="published"?"Unpublish":"Publish"}
            </button>
            <button class="admin-btn danger delete-btn" data-id="${n.id}">Delete</button>
          </div>
        </td>
      </tr>
    `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,init:()=>{document.querySelectorAll(".edit-btn").forEach(a=>{a.addEventListener("click",()=>U(`/admin/jobs/edit/${a.dataset.id}`))}),document.querySelectorAll(".toggle-btn").forEach(a=>{a.addEventListener("click",async()=>{const o=a.dataset.id,l=a.dataset.status,c=l==="published"?"draft":"published";a.textContent="Wait...",await Ds(o,{status:c})?(K(`Job ${c} successfully`),U("/admin/jobs",!1)):(K("Failed to update status","error"),a.textContent=l==="published"?"Unpublish":"Publish")})}),document.querySelectorAll(".delete-btn").forEach(a=>{a.addEventListener("click",async()=>{confirm("Are you sure you want to delete this job? This cannot be undone.")&&(a.textContent="Wait...",await ua(a.dataset.id)?(K("Job deleted"),U("/admin/jobs",!1)):(K("Failed to delete","error"),a.textContent="Delete"))})});const n=document.getElementById("sign-out-btn");n&&n.addEventListener("click",async()=>{await Bs(),U("/admin")})}}}async function qs(t){if(!await Pt())return U("/admin"),{html:""};const s=!!(t!=null&&t.id);let r=null;if(s&&(r=await la(t.id),!r))return K("Job not found","error"),U("/admin/jobs"),{html:""};const i=l=>(l||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),n=(l,c=[])=>(c.length===0&&(c=[""]),c.map(d=>`
      <div class="list-field-item">
        <input type="text" name="${l}[]" value="${i(d)}">
        <button type="button" class="remove-btn">×</button>
      </div>
    `).join(""));return{html:`
    <div class="admin-page">
      <div class="admin-layout">
        <div class="admin-sidebar">
          <div class="admin-sidebar-logo">DStress<span>Hub</span></div>
          <div class="admin-sidebar-nav">
            <a href="/admin/jobs" data-link>Job Listings</a>
            <a href="/admin/jobs/new" data-link class="${s?"":"active"}">Create Job</a>
            <a href="/" data-link target="_blank">View Live Site</a>
          </div>
          <div class="admin-sidebar-footer">
            <button id="sign-out-btn" class="admin-btn" style="width:100%;text-align:left;border:none;">Sign Out</button>
          </div>
        </div>
        
        <div class="admin-content">
          <div class="admin-header">
            <h1>${s?"Edit Job":"Create New Job"}</h1>
            <a href="/admin/jobs" data-link class="admin-btn">Cancel</a>
          </div>
          
          <form id="job-form" class="job-form">
            <div class="form-group">
              <label>Job Title *</label>
              <input type="text" id="title" required value="${i(r==null?void 0:r.title)}">
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>Department</label>
                <input type="text" id="department" value="${i(r==null?void 0:r.department)}" placeholder="e.g. Facilitation">
              </div>
              <div class="form-group">
                <label>Location *</label>
                <input type="text" id="location" required value="${i((r==null?void 0:r.location)||"Remote, India")}">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Employment Type *</label>
                <select id="employment_type" required>
                  <option value="Full-time" ${(r==null?void 0:r.employment_type)==="Full-time"?"selected":""}>Full-time</option>
                  <option value="Part-time" ${(r==null?void 0:r.employment_type)==="Part-time"?"selected":""}>Part-time</option>
                  <option value="Contract" ${(r==null?void 0:r.employment_type)==="Contract"?"selected":""}>Contract</option>
                  <option value="Freelance" ${(r==null?void 0:r.employment_type)==="Freelance"?"selected":""}>Freelance</option>
                </select>
              </div>
              <div class="form-group">
                <label>Experience Required</label>
                <input type="text" id="experience" value="${i(r==null?void 0:r.experience_required)}" placeholder="e.g. 2-4 years">
              </div>
            </div>

            <div class="form-group">
              <label>Salary Range</label>
              <input type="text" id="salary" value="${i(r==null?void 0:r.salary_range)}" placeholder="e.g. ₹4,00,000 - ₹6,00,000">
            </div>

            <div class="form-group">
              <label>Overview / Description</label>
              <textarea id="description" required>${i(r==null?void 0:r.description)}</textarea>
            </div>

            <div class="form-group">
              <label>Responsibilities</label>
              <div class="list-field" id="responsibilities-list">
                ${n("responsibilities",r==null?void 0:r.responsibilities)}
              </div>
              <button type="button" class="add-item-btn" data-target="responsibilities-list">+ Add Responsibility</button>
            </div>

            <div class="form-group">
              <label>Requirements</label>
              <div class="list-field" id="requirements-list">
                ${n("requirements",r==null?void 0:r.requirements)}
              </div>
              <button type="button" class="add-item-btn" data-target="requirements-list">+ Add Requirement</button>
            </div>

            <div class="form-group">
              <label>Benefits</label>
              <div class="list-field" id="benefits-list">
                ${n("benefits",r==null?void 0:r.benefits)}
              </div>
              <button type="button" class="add-item-btn" data-target="benefits-list">+ Add Benefit</button>
            </div>

            <div class="form-group">
              <label>Google Form Link (For Applications)</label>
              <input type="url" id="google_form_link" value="${i(r==null?void 0:r.google_form_link)}" placeholder="https://forms.gle/...">
            </div>

            <div class="form-group">
              <label>Status</label>
              <select id="status">
                <option value="draft" ${(r==null?void 0:r.status)==="draft"?"selected":""}>Draft (Hidden)</option>
                <option value="published" ${(r==null?void 0:r.status)==="published"?"selected":""}>Published (Visible)</option>
              </select>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-gold">Save Job</button>
              <a href="/admin/jobs" data-link class="btn-outline" style="color:var(--text-dark); border-color:var(--cream-dark);">Cancel</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,init:()=>{document.querySelectorAll(".add-item-btn").forEach(u=>{u.addEventListener("click",()=>{const h=u.dataset.target,p=document.getElementById(h),f=h.split("-")[0],v=document.createElement("div");v.className="list-field-item",v.innerHTML=`
          <input type="text" name="${f}[]" value="">
          <button type="button" class="remove-btn">×</button>
        `,p.appendChild(v),l(v.querySelector(".remove-btn"))})});const l=u=>{u.addEventListener("click",()=>u.closest(".list-field-item").remove())};document.querySelectorAll(".remove-btn").forEach(l);const c=document.getElementById("job-form");c.addEventListener("submit",async u=>{u.preventDefault();const h=c.querySelector('button[type="submit"]');h.textContent="Saving...",h.disabled=!0;const p=w=>{const y=document.querySelectorAll(`input[name="${w}[]"]`);return Array.from(y).map(_=>_.value.trim()).filter(_=>_)},f={title:document.getElementById("title").value.trim(),department:document.getElementById("department").value.trim(),location:document.getElementById("location").value.trim(),employment_type:document.getElementById("employment_type").value,experience_required:document.getElementById("experience").value.trim(),salary_range:document.getElementById("salary").value.trim(),description:document.getElementById("description").value.trim(),responsibilities:p("responsibilities"),requirements:p("requirements"),benefits:p("benefits"),google_form_link:document.getElementById("google_form_link").value.trim(),status:document.getElementById("status").value};let v;s?v=await Ds(t.id,f):(f.slug=er(f.title),v=await da(f)),v?(K("Job saved successfully","success"),U("/admin/jobs")):(K("Failed to save job. Check console.","error"),h.textContent="Save Job",h.disabled=!1)});const d=document.getElementById("sign-out-btn");d&&d.addEventListener("click",async()=>{await Bs(),U("/admin")})}}}async function Ca(){return{html:`
    ${re()}
    <div style="min-height:100vh; background:var(--bg-dark); display:flex; align-items:center; justify-content:center; text-align:center; padding:0 24px;">
      <div>
        <h1 style="font-family:'Cormorant Garamond',serif; font-size:6rem; color:var(--gold); line-height:1;">404</h1>
        <h2 style="font-family:'Cormorant Garamond',serif; font-size:2rem; font-weight:300; color:var(--text-light); margin-bottom:16px;">Page Not Found</h2>
        <p style="color:var(--text-muted); margin-bottom:32px;">The page you are looking for doesn't exist or has been moved.</p>
        <a href="/" data-link class="btn-gold">Return Home</a>
      </div>
    </div>
    ${ne()}
  `,init:()=>{ie(),V()}}}var Oa=()=>{window.va||(window.va=function(...e){window.vaq||(window.vaq=[]),window.vaq.push(e)})},Pa="@vercel/analytics",xa="2.0.1";function Hs(){return typeof window<"u"}function Ms(){try{const t="production"}catch{}return"production"}function Ia(t="auto"){if(t==="auto"){window.vam=Ms();return}window.vam=t}function $a(){return(Hs()?window.vam:Ms())||"production"}function xt(){return $a()==="development"}function ja(t){return t.scriptSrc?ye(t.scriptSrc):xt()?"https://va.vercel-scripts.com/v1/script.debug.js":t.basePath?ye(`${t.basePath}/insights/script.js`):"/_vercel/insights/script.js"}function La(t,e){var s;let r=t;if(e)try{r={...(s=JSON.parse(e))==null?void 0:s.analytics,...t}}catch{}Ia(r.mode);const i={sdkn:Pa+(r.framework?`/${r.framework}`:""),sdkv:xa};return r.disableAutoTrack&&(i.disableAutoTrack="1"),r.viewEndpoint&&(i.viewEndpoint=ye(r.viewEndpoint)),r.eventEndpoint&&(i.eventEndpoint=ye(r.eventEndpoint)),r.sessionEndpoint&&(i.sessionEndpoint=ye(r.sessionEndpoint)),xt()&&r.debug===!1&&(i.debug="false"),r.dsn&&(i.dsn=r.dsn),r.endpoint?i.endpoint=r.endpoint:r.basePath&&(i.endpoint=ye(`${r.basePath}/insights`)),{beforeSend:r.beforeSend,src:ja(r),dataset:i}}function ye(t){return t.startsWith("http://")||t.startsWith("https://")||t.startsWith("/")?t:`/${t}`}function Na(t={debug:!0},e){var s;if(!Hs())return;const{beforeSend:r,src:i,dataset:n}=La(t,e);if(Oa(),r&&((s=window.va)==null||s.call(window,"beforeSend",r)),document.head.querySelector(`script[src*="${i}"]`))return;const a=document.createElement("script");a.src=i;for(const[o,l]of Object.entries(n))a.dataset[o]=l;a.defer=!0,a.onerror=()=>{const o=xt()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${i}. ${o}`)},document.head.appendChild(a)}F("/",async()=>wa());F("/corporate",async()=>Sa());F("/careers",async()=>_a());F("/careers/job/:slug",async t=>ka(t));F("/case-studies",async()=>Ea());F("/resources",async()=>Ta());F("/admin",async()=>Aa());F("/admin/jobs",async()=>Ra());F("/admin/jobs/new",async()=>qs({}));F("/admin/jobs/edit/:id",async t=>qs(t));F("/404",async()=>Ca());document.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("div");t.innerHTML=Ks(),document.body.appendChild(t.firstElementChild),Vs();const e=document.createElement("div");e.innerHTML=Gs(),document.body.appendChild(e.firstElementChild),Js(),zs(),Na()});
