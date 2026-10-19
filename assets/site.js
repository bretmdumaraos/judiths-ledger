(()=>{'use strict';
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));}
const btns=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('.gallery-card')];
btns.forEach(b=>b.addEventListener('click',()=>{const which=b.dataset.filter;btns.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));cards.forEach(c=>c.hidden=which!=='all'&&c.dataset.category!==which)}));
const lb=document.querySelector('#photo-lightbox');if(lb&&typeof lb.showModal==='function'){
let current=0;const pic=lb.querySelector('img'),label=lb.querySelector('.lightbox-caption');
function show(n){current=(n+cards.length)%cards.length;const c=cards[current];pic.src=c.dataset.full;pic.alt=c.dataset.title;label.textContent=c.dataset.title;}
cards.forEach((c,i)=>c.addEventListener('click',()=>{show(i);lb.showModal();}));
lb.querySelector('[data-close]').addEventListener('click',()=>lb.close());
lb.querySelector('[data-prev]').addEventListener('click',()=>show(current-1));
lb.querySelector('[data-next]').addEventListener('click',()=>show(current+1));
lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
lb.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();show(current-1)}if(e.key==='ArrowRight'){e.preventDefault();show(current+1)}});
}
const toc=[...document.querySelectorAll('.toc-links a')];if(toc.length&&'IntersectionObserver'in window){const map=new Map(toc.map(a=>[a.hash.slice(1),a]));const obs=new IntersectionObserver(es=>{for(const e of es){if(e.isIntersecting){toc.forEach(a=>a.classList.remove('active'));map.get(e.target.id)?.classList.add('active')}}},{rootMargin:'-120px 0px -70% 0px'});document.querySelectorAll('.document-body h2[id]').forEach(x=>obs.observe(x));}
})();
