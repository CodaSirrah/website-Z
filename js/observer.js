const header = document.querySelector('header');
const sectionOne = document.querySelector('.hero-image');

const sectionOneOptions = {
    rootMargin: '-94px 0px 0px 0px'
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        return (!entry.isIntersecting) ? header.classList.add('nav-scroll') : header.classList.remove('nav-scroll');
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);