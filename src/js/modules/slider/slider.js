export default class Slider {
    // Вместо аргументов передаем в функцию конструктор объект
    constructor({
        container = null, 
        btns = null, 
        next = null, 
        prev = null,
        activeClass ='',
        animate,
        autoplay} = {}){
        this.container = document.querySelector(container);
        try {
            this.slides = this.container.children;
        } catch(e){};
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.slideIndex = 1;

        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;

        // this.prevModule = this.btns = document.querySelectorAll(this.prevModule);
        // this.nextModule = this.btns = document.querySelectorAll(this.nextModule);
    }
}