import Swiper from 'swiper/dist/js/swiper.min.js';

export default class {
  constructor() {
    if (!document.querySelector('.js-catalog-review')) return;
    this.wrap = document.querySelector('.js-catalog-review');
    this.container = this.wrap.querySelector('.swiper-container');
    this.pagination = this.wrap.querySelector('.swiper-pagination');
    this.navPrev = this.wrap.querySelector('.swiper-button-prev');
    this.navNext = this.wrap.querySelector('.swiper-button-next');

    this.addEvents();
  }

  addEvents() {
    new Swiper(this.container, {
      loop: true,
      slidesPerView: 1,
      navigation: {
        prevEl: this.navPrev,
        nextEl: this.navNext,
      },
      pagination: {
        el: this.pagination,
        type: 'bullets',
        clickable: true
      },
    });
  }

}