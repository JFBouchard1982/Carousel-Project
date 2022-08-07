const slides = document.getElementsByClassName('carousel-item');
const slideIndicator = document.getElementsByClassName("slide-indicators")
const textEl = document.getElementsByClassName("text-item")
let slidePosition = 0;
const totalSlides = slides.length;
let myIntervale = setInterval(moveToNextSlide, 5000)

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

document.getElementById('pause-button').addEventListener('click', function() {
    clearInterval(myIntervale);
})
document.getElementById("play-button").addEventListener('click', function() {
    myIntervale = setInterval(moveToNextSlide, 5000)
})

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    } for (let indicator of slideIndicator){
        indicator.classList.remove("active-slide");
    } for (let text of textEl){
        text.classList.remove("text-item-visible")
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    slideIndicator[slidePosition].classList.add("active-slide");
    textEl[slidePosition].classList.add("text-item-visible");
}
 
function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    slideIndicator[slidePosition].classList.add("active-slide");
    textEl[slidePosition].classList.add("text-item-visible");
}
