if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let a={};const o=s=>i(s,l),u={module:{uri:l},exports:a,require:o};e[l]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),a)))}}define(["./workbox-ab24e45d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_.25019607.js",revision:null},{url:"assets/_name_.0b65a404.js",revision:null},{url:"assets/_name_.a650d476.js",revision:null},{url:"assets/404.f53acb36.js",revision:null},{url:"assets/about_.2a3d2a89.js",revision:null},{url:"assets/about.1789c18c.js",revision:null},{url:"assets/coursework.f8a1fd96.js",revision:null},{url:"assets/home.bd2a0400.js",revision:null},{url:"assets/index.dde319e6.css",revision:null},{url:"assets/index.f758a8fa.js",revision:null},{url:"assets/MainPhoto_TapKeyboard.7d958c88.js",revision:null},{url:"assets/projects.f1103855.js",revision:null},{url:"assets/README.bdd7ebd3.js",revision:null},{url:"assets/virtual_pwa-register.9dd16875.js",revision:null},{url:"assets/workbox-window.prod.es5.6954f450.js",revision:null},{url:"index.html",revision:"ae0389aa24f47cd5e2b489a046aa54c8"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"f1b0079ae567b6c314a07e2930e8eac1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));