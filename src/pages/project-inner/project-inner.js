import "./project-inner.css";
import Swiper from 'swiper/dist/js/swiper.min.js';

export default class {
  constructor() {
    this.wrap = document.querySelector('.js-project-inner__slider');
    this.container = this.wrap.querySelector('.swiper-container');
    this.navPrev = this.wrap.querySelector('.swiper-button-prev');
    this.navNext = this.wrap.querySelector('.swiper-button-next');

    this.thumbsWrap = document.querySelector('.js-project-inner__thumbs');
    this.thumbsContainer = this.thumbsWrap.querySelector('.swiper-container');

    this.addEvents();
  }

  addEvents() {
    const thumbs = new Swiper(this.thumbsContainer, {
      slidesPerView: 4,
      spaceBetween: 16,
      loop: true,
      // freeMode: true,
      loopedSlides: 4, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
    });

    const slider = new Swiper(this.container, {
      slidesPerView: 1,
      loop:true,
      loopedSlides: 4, //looped slides should be the same
      navigation: {
        prevEl: this.navPrev,
        nextEl: this.navNext,
      },
    });

    slider.controller.control = thumbs;
    thumbs.controller.control = slider;
  }
}