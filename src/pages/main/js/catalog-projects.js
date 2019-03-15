import Swiper from 'swiper/dist/js/swiper.min.js';

export default class {
  constructor() {
    if (!document.querySelector('.js-catalog-projects')) return;
    this.wrap = document.querySelector('.js-catalog-projects');
    this.container = this.wrap.querySelector('.swiper-container');
    this.navPrev = this.wrap.querySelector('.swiper-button-prev');
    this.navNext = this.wrap.querySelector('.swiper-button-next');

    this.addEvents();
  }

  addEvents() {
    new Swiper(this.container, {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        prevEl: this.navPrev,
        nextEl: this.navNext,
      },
    });
  }

}