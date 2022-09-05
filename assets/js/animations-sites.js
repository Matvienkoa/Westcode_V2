// const header = document.getElementById('header');
const titleSite = document.getElementById('title-site');
const textSite = document.getElementById('text-site');
const buttonSite = document.getElementById('button-site');
const sample = document.getElementById('sample');

window.onload = animationHeader();

function animationHeader() {
    header.classList.add('apparition-header');
    titleSite.classList.add('apparition-title-index');
    textSite.classList.add('apparition-text-index');
    if(buttonSite) {
        buttonSite.classList.add('apparition-button-index');
    }
    sample.classList.add('apparition-video');
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

/*======================Animation Services============================*/
/*================Service 1==============*/
const animService1 = function (entries, observerService1) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            document.querySelector('.service-1').classList.add('service-anim-1')
            observerService1.unobserve(entry.target)
        }
    });
}
const observerService1 = new IntersectionObserver(animService1, options)
observerService1.observe(document.querySelector('#services-box'))

/*================Service 2==============*/
const animService2 = function (entries, observerService2) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            document.querySelector('.service-2').classList.add('service-anim-2')
            observerService2.unobserve(entry.target)
        }
    });
}
const observerService2 = new IntersectionObserver(animService2, options)
observerService2.observe(document.querySelector('#services-box'))

/*================Service 3==============*/
const animService3 = function (entries, observerService3) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            document.querySelector('.service-3').classList.add('service-anim-3')
            observerService3.unobserve(entry.target)
        }
    });
}
const observerService3 = new IntersectionObserver(animService3, options)
observerService3.observe(document.querySelector('#services-box'))

/*================Service 4==============*/
const animService4 = function (entries, observerService4) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            document.querySelector('.service-4').classList.add('service-anim-4')
            observerService4.unobserve(entry.target)
        }
    });
}
const observerService4 = new IntersectionObserver(animService4, options)
observerService4.observe(document.querySelector('#services-box'))

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