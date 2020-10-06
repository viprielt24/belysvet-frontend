import Swiper from 'swiper/dist/js/swiper.min.js';

export default class {
  constructor() {
    if (!document.querySelector('.js-catalog-tech')) return;
    this.wrap = document.querySelector('.js-catalog-tech');
    this.container = this.wrap.querySelector('.swiper-container');
    this.navPrev = this.wrap.querySelector('.swiper-button-prev');
    this.navNext = this.wrap.querySelector('.swiper-button-next');

    this.addEvents();
  }

  addEvents() {
    new Swiper(this.container, {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        prevEl: this.navPrev,
        nextEl: this.navNext,
      },
      breakpoints:{
        1264: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      }
    });
  }

}