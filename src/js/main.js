import MainSlider from "./modules/slider/slider-main.js";
import VideoPlayer from './modules/videoPlayer.js';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({page:'.page', btns: '.next'});
    const player = new VideoPlayer('.play', '.overlay');
    slider.render();
    player.init();
});