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

  function menuLoader(){
    let bl = gsap.timeline();
    bl.from(".menu-open .header", {opacity: 0, duration: 1}, 1);
    bl.from(".menu", {opacity: 0, duration: 2}, 0);
    bl.from(".menu-container", {y:300, opacity: 0, duration: 1}, 2);
  }


  document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('body').classList.toggle('menu-open');
    if(document.querySelector('body').classList.contains('menu-open')){
      menuLoader();
    }
    else {
      siteLoader();
    }
    
  })

  
}, false);