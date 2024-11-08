class Slider {
    constructor(){
        this.slide = document.querySelector('.projects__slider__images');
        this.Images = document.querySelectorAll('.projects__slider__images img');
        this.counter = 0;
        this.size = this.Images[0].clientWidth;
    }
    startSlider = ()=>{
        this.slide.style.transform = `translate(-${this.size * this.counter}px)`;
    }
    prevSlide = ()=>{
        this.slide.style.transition = "transform .4s ease-in-out"
        this.counter--
        this.startSlider()
    }
    nextSlide = ()=>{
        this.slide.style.transition = "transform .4s ease-in-out"
        this.counter++
        this.startSlider()
    }
    keyDown = (e)=>{
        if(e.keyCode === 37){
            this.prevSlide();
        } else if (e.keyCode === 39){
            this.nextSlide();
        } else return
    }
}
const slider = new Slider();