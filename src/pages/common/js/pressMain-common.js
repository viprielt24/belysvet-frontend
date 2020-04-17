import Swiper from 'swiper/dist/js/swiper.min';

export default class {
  constructor() {
    this.wrap = document.querySelectorAll('.js-catalog-press');
    this.addEvents();
  }

  addEvents() {
    this.wrap.forEach(item => {
      const container = item.querySelector('.swiper-container');
      const navPrev = item.querySelector('.swiper-button-prev');
      const navNext = item.querySelector('.swiper-button-next');
      new Swiper(container, {
        slidesPerView: 1,
        navigation: {
          prevEl: navPrev,
          nextEl: navNext,
        },
      });
    });
  }

}