// menu of links
const links = document.querySelectorAll('.dashboard ul.links li.link');

// pages which open when user clicks on a link in menu
const pages = document.querySelectorAll('#progress, #library, #achievements, #wish-list');

// container that contains pages
const content = document.querySelector('.container .content');

/* Removes selection from all links (menu items ) */
function clearLinks() {
    links.forEach((link) => {
        link.classList.remove('selected');
    });
}

function scrollToTop() {
    const link = document.getElementById('scroll-top-link');
    link.click();
}

function openPage(newPage, oldPage) {
    scrollToTop();

    newPage.classList.add('opened');
    newPage.style.display = "flex";

    // animation duration in seconds
    let animDuration = 1.0;
    // animation timing function according to GSAP specification
    let animTimingFunc = 'power2.out';

    gsap.fromTo(`#${newPage.id}`,
                { xPercent: -100 },
                { xPercent: 0, duration: animDuration, ease: animTimingFunc });

    gsap.fromTo(`#${oldPage.id}`,
                { xPercent: 0 },
                { xPercent: 100, duration: animDuration, ease: animTimingFunc });

    setTimeout(() => {
        oldPage.classList.remove('opened');
        oldPage.style.display = "none";
    }, animDuration * 1000);
}

/* Returns page element which is open now */
function getOpenedPage() {
    let result;
    pages.forEach((page) => {
        if (page.classList.contains('opened')) {
            result = page;
        }
    });

    return result;
}

/* Returns page element with given name */
function getPage(pageName) {
    let result;
    pages.forEach((page) => {
        if (page.id === pageName) {
            result = page;
        }
    });

    return result;
}

/* Reports whether or not pages are actively animating */
function isAnimating() {
    return gsap.isTweening('#progress') || gsap.isTweening('#library') || gsap.isTweening('#achievements') || gsap.isTweening('#wish-list');
}

links.forEach((link) => {
    link.addEventListener('click', () => {
        if (link.classList.contains('selected') || isAnimating()) {
            return;
        }

        clearLinks();
        link.classList.add('selected');

        const oldPage = getOpenedPage();
        const newPage = getPage(link.classList[1]);
        openPage(newPage, oldPage);
    });
});