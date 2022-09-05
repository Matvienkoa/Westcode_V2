// Swipers
var swiper = new Swiper(".swiper-1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 70,
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

var swiper = new Swiper(".swiper-2", {
  speed: 600,
  allowTouchMove: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

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

// Swiper 2
const buttons = document.querySelectorAll('.swiper-2-button');
const blocLogo = document.getElementById('bloc-logo');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const activeSlides = document.querySelectorAll('.swiper-slide-active')
    activeSlides.forEach(slide => {
      if(slide.classList.contains('swiper-slide-2')) {
        const dataId = slide.children[0].children[0].dataset.id;
        blocLogo.innerHTML = ''
        blocLogo.innerHTML = `<img src="assets/images/sites/${dataId}" id="customer-logo" class="apparition-logo">`
      }
    })
  })
})



