if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>s(e,o),l={module:{uri:o},exports:t,require:c};i[o]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-44cd0a3a.js",revision:null},{url:"assets/index-86ee7855.css",revision:null},{url:"index.html",revision:"800aed0c37d3e79f029e0f3c881c70d9"},{url:"registerSW.js",revision:"581fd2efe50268702a74e90623f09b5c"},{url:"favicon.ico",revision:"664844691750135b2756fecb186781fc"},{url:"apple-touch-icon.png",revision:"97eb09b68230b90553c53b2ba097303c"},{url:"safari-pinned-tab.svg",revision:"af39a1f62dd3780b99c9eb0da7acb743"},{url:"manifest.webmanifest",revision:"09c532f421061fd33400b72184b6d47d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
