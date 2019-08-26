import Swiper from 'swiper/dist/js/swiper.min.js';

export default class {
  constructor() {
    this.wrap = document.querySelector('.js-gallery');
    this.container = this.wrap.querySelector('.swiper-container');
    this.navPrev = this.wrap.querySelector('.swiper-button-prev');
    this.navNext = this.wrap.querySelector('.swiper-button-next');
    this.paging = this.wrap.nextElementSibling.querySelector('.swiper-pagination');

    this.thumbsWrap = document.querySelector('.js-thumbs');
    this.thumbsContainer = this.thumbsWrap.querySelector('.swiper-container');

    this.popupWrap = document.querySelector('.js-project-inner-popup-slider');
    this.popupContainer = this.popupWrap.querySelector('.swiper-container');
    this.popupNavPrev = this.popupWrap.querySelector('.swiper-button-prev');
    this.popupNavNext = this.popupWrap.querySelector('.swiper-button-next');

    this.popupThumbsWrap = document.querySelector('.js-project-inner-popup-thumbs');
    this.popupThumbsContainer = this.popupThumbsWrap.querySelector('.swiper-container');

    this.addEvents();
  }

  addEvents() {
    const thumbs = new Swiper(this.thumbsContainer, {
      slidesPerView: 4,
      spaceBetween: 16,
      loop: true,
      loopedSlides: 4,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
    });

    const slider = new Swiper(this.container, {
      slidesPerView: 1,
      loop: true,
      loopedSlides: 4,
      navigation: {
        prevEl: this.navPrev,
        nextEl: this.navNext,
      },
      pagination: {
        el: this.paging,
        type: 'fraction',
      },
    });

    slider.controller.control = thumbs;
    thumbs.controller.control = slider;

    document.querySelectorAll('.js-contentSwiper-slide').forEach(slide => {
      slide.addEventListener('click', () => {

        const popupThumbs = new Swiper(this.popupThumbsContainer, {
          slidesPerView: 4,
          spaceBetween: 16,
          loop: true,
          loopedSlides: 4,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideToClickedSlide: true,
        });

        const popupSlider = new Swiper(this.popupContainer, {
          initialSlide: slider.activeIndex - 1,
          slidesPerView: 1,
          loop: true,
          loopedSlides: 4,
          navigation: {
            prevEl: this.popupNavPrev,
            nextEl: this.popupNavNext,
          },
        });


        popupSlider.controller.control = popupThumbs;
        popupThumbs.controller.control = popupSlider;

        popupSlider.slideNext();
      });
    });


  }
}