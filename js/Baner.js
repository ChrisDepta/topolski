class Baner {
    constructor(images){
        this.images = images;
        this.imgIndex = 5;
        this.time = 5000;
    }
    changeImg = ()=> {
        if(this.imgIndex < 0) return;
        document.querySelector('.baner__img').style.backgroundImage = `url(${this.images[this.imgIndex]})`;
        this.imgIndex++
        if (this.imgIndex == 7) {
            this.imgIndex = 0
        }
        
        
    }
    banerTimer = ()=> {
        setInterval(() => {
            this.changeImg()
        }, this.time);
    }
}