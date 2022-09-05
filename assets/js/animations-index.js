const background = document.getElementById('background-img');
const titleIndex = document.getElementById('title-index');
const textIndex = document.getElementById('text-index');
const buttonIndex = document.getElementById('button-index');
const video = document.getElementById('video');

window.onload = animationHeader();

function animationHeader() {
    header.classList.add('apparition-header');
    background.classList.add('apparition-background')
    titleIndex.classList.add('apparition-title-index');
    textIndex.classList.add('apparition-text-index');
    buttonIndex.classList.add('apparition-button-index');
    video.classList.add('apparition-video');
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

/*================Service 5==============*/
const animService5 = function (entries, observerService5) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            document.querySelector('.service-5').classList.add('service-anim-5')
            observerService5.unobserve(entry.target)
        }
    });
}
const observerService5 = new IntersectionObserver(animService5, options)
observerService5.observe(document.querySelector('#services-box'))

/*================Service 6==============*/
const animService6 = function (entries, observerService6) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            document.querySelector('.service-6').classList.add('service-anim-6')
            observerService6.unobserve(entry.target)
        }
    });
}
const observerService6 = new IntersectionObserver(animService6, options)
observerService6.observe(document.querySelector('#services-box'))

// Transition
const transition = document.querySelector('.transition');
const links = document.querySelectorAll('.links');

links.forEach(link => {
    link.addEventListener('click', () => {
        transition.classList.replace('transition-off', 'transition-on')
        setTimeout(() => {
            window.location.href = link.dataset.link
        }, 1500)
        setTimeout(() => {
            transition.classList.replace('transition-on', 'transition-off')
        }, 1700)
        
    })
})