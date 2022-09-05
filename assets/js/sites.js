// Swipers
var swiper = new Swiper(".swiper-4", {
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 2
    }
  }
});