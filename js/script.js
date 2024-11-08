// arrow with more path to images
const banerImg = [
    "./img/kitchen1.jpg",
    "./img/kitchen2.jpg",
    "./img/kitchen3.jpg",
    "./img/kitchen4.jpg",
    "./img/kitchen5.jpg",
    "./img/kitchen6.jpg",
    "./img/kitchen7.jpg",
];
// baner function in class baner
const baner = new Baner(banerImg);
baner.banerTimer();
//  slider function in class Slider
const btnPrev = document.querySelector('.projects__slider__prev');
const btnNext = document.querySelector('.projects__slider__next');
slider.startSlider();
btnPrev.addEventListener('click', slider.prevSlide);
btnNext.addEventListener('click', slider.nextSlide);
document.addEventListener('keydown', slider.keyDown);