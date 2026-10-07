/*
 * Scroll Listener
 *
 * Adds a class to the body if the page is scrolled at all
 *
 */
define(["version!fly/managers/debug"],function(e){e.init("scroll-listener");!function(){let e=!1;const n=()=>{document.body.classList.toggle("is-scrolled",window.scrollY>0),e=!1};window.addEventListener("scroll",()=>{e||(e=!0,window.requestAnimationFrame(n))},{passive:!0}),n()}()});