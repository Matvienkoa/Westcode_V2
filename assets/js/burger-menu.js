const burgerButton = document.getElementById('burger-button');
const burgerCross = document.getElementById('burger-cross');
const navBurgerMenu = document.getElementById('nav-menu-burger');
const header = document.getElementById('header');

burgerButton.addEventListener('click', () => {
    navBurgerMenu.classList.replace('nav-menu-burger-hidden', 'nav-menu-burger-visible')
    burgerButton.classList.replace('burger-button-visible', 'burger-button-hidden')
    burgerCross.classList.replace('burger-cross-hidden', 'burger-cross-visible')
    header.classList.add('header-burger-on')
})

burgerCross.addEventListener('click', () => {
    navBurgerMenu.classList.replace('nav-menu-burger-visible', 'nav-menu-burger-hidden');
    burgerButton.classList.replace('burger-button-hidden', 'burger-button-visible')
    burgerCross.classList.replace('burger-cross-visible', 'burger-cross-hidden')
    header.classList.remove('header-burger-on')
})
