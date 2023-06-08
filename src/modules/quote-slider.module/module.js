const swiper = new Swiper('.quote-swiper', {
  speed: 300,
  spaceBetween: 20,
  loop: false,
  grabCursor: false,
  perMove:1,
  autoPlay: {
    delay:3000
  },
  centerSlides: true,
  // snapOnRelease: true,
  // sticky:true,
  pagination:{
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});