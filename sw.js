if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const c=e=>n(e,o),t={module:{uri:o},exports:d,require:c};i[o]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(s(...e),d)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-44cd0a3a.js",revision:null},{url:"assets/index-86ee7855.css",revision:null},{url:"index.html",revision:"800aed0c37d3e79f029e0f3c881c70d9"},{url:"registerSW.js",revision:"581fd2efe50268702a74e90623f09b5c"},{url:"favicon.ico",revision:"664844691750135b2756fecb186781fc"},{url:"apple-touch-icon.png",revision:"97eb09b68230b90553c53b2ba097303c"},{url:"safari-pinned-tab.svg",revision:"af39a1f62dd3780b99c9eb0da7acb743"},{url:"android-chrome-192x192.png",revision:"845684734343668ef67955129fd0a1fa"},{url:"android-chrome-512x512.png",revision:"1dce4cd9df62b2dd7b51f8dd596cb514"},{url:"manifest.webmanifest",revision:"f93e2892496d841358a6974a02cb9672"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
