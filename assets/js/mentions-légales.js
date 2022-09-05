const linkCookiesPref = document.getElementById('linkToPref');

linkCookiesPref.addEventListener('click', () => {
    cookiesPrefBanner.classList.replace('hidden-consent', 'visible-consent');
})