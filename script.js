// let photo = document.querySelectorAll('.photo-img--js');

document.addEventListener('DOMContentLoaded', function() {
  
  
  function siteLoader(){
    let tl = gsap.timeline();
    tl.from(".hero-left__title", {y:100, opacity: 0, duration: 1}, 1);
    tl.from(".hero-left__btn", {y:100, opacity: 0, duration: 1}, 1);
    tl.from(".hero-left__descr", {opacity: 0, duration: 3}, 1.5);
    tl.from(".photo-img--one", {opacity: 0, duration: 1}, 2);
    tl.from(".photo-img--two", {opacity: 0, duration: 1}, 2.5);
    tl.from(".photo-img--three", {opacity: 0, duration: 1}, 3);
    tl.from(".photo-descr", {opacity: 0, duration: 1}, 3.5);
  };

  siteLoader();

  let bl = gsap.timeline({paused: true});
    bl.fromTo(".menu-top", {opacity: 0}, {duration:1, opacity: 1});
    bl.fromTo(".menu-bottom", {opacity: 0}, {opacity: 1, duration: 2}); 
    bl.fromTo(".menu-container", {y:1000, opacity: 0}, {y:0, opacity: 1, duration: 1}, 2); 
    
    
document.querySelector('.burger').addEventListener("click", () => {
  document.querySelector('body').classList.add('menu-open');
  bl.play()
  document.querySelector('.close').addEventListener("click", () => {
    bl.reverse()
    setTimeout(function(){document.querySelector('body').classList.remove('menu-open')}, 3000); 
  })
})

  
}, false);