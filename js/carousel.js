const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages =document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', ()=>{
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter ++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
})

prevBtn.addEventListener('click', ()=>{
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter --;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
})

carouselSlide.addEventListener('transitionend', ()=> {
    console.log(counter);
    console.log(carouselImages[counter].id);
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
})

prevBtn.addEventListener('click', ()=> {
    
})