import Swiper from 'swiper/dist/js/swiper.min';

export default class {
  constructor() {
    this.wrap = document.querySelectorAll('.js-catalog__content-lights-main');
    this.addEvents();
  }

  addEvents() {
    this.wrap.forEach(item => {
      const container = item.querySelector('.swiper-container');
      new Swiper(container, {
        slidesPerView: 'auto',
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
      });
    });
  }

}