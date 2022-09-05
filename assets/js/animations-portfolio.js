const titlePortfolio = document.getElementById('title-services-title');
const textPortfolio = document.getElementById('title-services-text');
const mainPortfolio = document.getElementById('background-img-3');

window.onload = animationHeader();

function animationHeader() {
    header.classList.add('apparition-header');
    mainPortfolio.classList.add('apparition-background');
    titlePortfolio.classList.add('apparition-title-index');
    textPortfolio.classList.add('apparition-text-index');
}

// Options
const ratio = .2;

const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio
}

// Apparitions Communes
const handleIntersect1 = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    });
}
const observer = new IntersectionObserver(handleIntersect1, options)
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})

// Transition
const transition = document.querySelector('.transition');
const links = document.querySelectorAll('.links');

links.forEach(link => {
    link.addEventListener('click', () => {
        transition.classList.replace('transition-off', 'transition-on')
        setTimeout(() => {
            window.location.href = link.dataset.link
        }, 1500)
    })
})