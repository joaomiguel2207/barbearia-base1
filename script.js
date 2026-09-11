const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');

menuToggle?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
});

document.querySelectorAll('.nav a').forEach(link=>{
  link.addEventListener('click',()=>nav.classList.remove('open'));
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.cut-card').forEach(card=>{
  card.addEventListener('click',event=>{
    if(event.target.closest('a')) return;
    card.animate(
      [{transform:'translateY(-7px) scale(1)'},{transform:'translateY(-7px) scale(.985)'},{transform:'translateY(-7px) scale(1)'}],
      {duration:220,easing:'ease-out'}
    );
  });
});

const lightbox=document.querySelector('.lightbox');
const lightboxImg=lightbox?.querySelector('img');
document.querySelectorAll('.gallery-item img').forEach(img=>{
  img.closest('.gallery-item').addEventListener('click',()=>{
    lightboxImg.src=img.src;
    lightboxImg.alt=img.alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  });
});
function closeLightbox(){
  lightbox?.classList.remove('open');
  lightbox?.setAttribute('aria-hidden','true');
}
document.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox) closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeLightbox()});

document.getElementById('year').textContent=new Date().getFullYear();
