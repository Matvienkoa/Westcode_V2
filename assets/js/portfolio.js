//Titles
const arrowButtons = document.querySelectorAll('.arrow-button');
const textList = document.querySelectorAll('.text-list');
const arrowSVG = document.querySelectorAll('.arrow-svg');

arrowButtons.forEach(button => {
  button.addEventListener('click', () => {
    textList.forEach(text => {
      if(text.dataset.id == button.dataset.id) {
        if(text.classList.contains('hidden')) {
          text.classList.replace('hidden', 'visible')
        } else {
          text.classList.replace('visible', 'hidden')
        }
      }
    })
    arrowSVG.forEach(arrow => {
      if(arrow.dataset.id == button.dataset.id) {
        if(arrow.classList.contains('rotate')) {
          arrow.classList.remove('rotate')
          
        } else {
          arrow.classList.add('rotate')
        }
      }
    })
  })
})

// Swipers
var swiper = new Swiper(".swiper-4", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  speed: 900,
  coverflowEffect: {
    rotate: 5,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
    scale: 0.8,
    
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});