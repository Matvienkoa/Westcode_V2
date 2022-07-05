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