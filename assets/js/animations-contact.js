const titleContact = document.getElementById('title-contact');
const textContact = document.getElementById('text-contact');
const socialContactText = document.getElementById('social-contact-text');
const socialContactLink1 = document.getElementById('social-contact-link-1');
const socialContactLink2 = document.getElementById('social-contact-link-2');
const form = document.getElementById('form-contact');

window.onload = animationHeader();

function animationHeader() {
    header.classList.add('apparition-header');
    titleContact.classList.add('apparition-title-index');
    textContact.classList.add('apparition-text-index');
    socialContactText.classList.add('apparition-button-index');
    socialContactLink1.classList.add('apparition-button-index');
    socialContactLink2.classList.add('apparition-button-index');
    form.classList.add('apparition-video');
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