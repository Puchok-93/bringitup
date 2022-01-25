import MainSlider from "./modules/slider/slider-main.js";
import MiniSlider from "./modules/slider/slider-mini.js";
import VideoPlayer from './modules/videoPlayer.js';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container:'.page', btns: '.next'});
    const player = new VideoPlayer('.play', '.overlay');

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true

    });

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true

    });

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
    });

    slider.render();
    player.init();
    showUpSlider.init();
    modulesSlider.init();
    feedSlider.init();
});