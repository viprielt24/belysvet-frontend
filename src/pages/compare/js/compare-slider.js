import Swiper from 'swiper/dist/js/swiper.min.js';
import set from '@babel/runtime/helpers/esm/set';

export default class {
  constructor() {
    if (!document.querySelector('.js-compare')) return;
    this.wrap = document.querySelector('.js-compare');
    this.controlWrap = this.wrap.querySelector('.js-compare__maincel-wrap');
    this.paramsName = this.wrap.querySelectorAll('.js-compare__maincel-params-item');
    //-slider
    this.container = this.wrap.querySelector('.swiper-container');
    this.slides = this.wrap.querySelectorAll('.swiper-slide');
    this.navPrev = this.wrap.querySelector('.swiper-button-prev');
    this.navNext = this.wrap.querySelector('.swiper-button-next');
    this.compareSlider = null;

    this.addEvents();
  }

  addEvents() {
    this.slider();
    this.deleteSlide();
    this.equalCardsHeight();
    this.equalParamsHeight();
    this.diffParams();
  }

  slider() {
    this.compareSlider = new Swiper(this.container, {
      roundLengths: true,
      simulateTouch: false,
      slidesPerView: 'auto',
      spaceBetween: 0,
      navigation: {
        prevEl: this.navPrev,
        nextEl: this.navNext,
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 22,
        }
      }
    });
  }

  deleteSlide() {
    this.slides.forEach((slide, index) => {
      let deleteBtn = slide.querySelector('.js-catalog__compare-close');
      deleteBtn.addEventListener('click', () => {
        if (this.compareSlider !== 'undefined') {
          this.slides[index].classList.add('is-hidden');
          setTimeout(() => {
            this.slides[index].remove();
          }, 300);
          // this.compareSlider.removeSlide(index);
          this.compareSlider.update();
        }
      });
    });
  }

  equalCardsHeight() {
    let maxCardHeight = null;
    this.slides.forEach(slide => {
      let cardHeight = slide.querySelector('.js-catalog__item').getBoundingClientRect().height;
      maxCardHeight = Math.max(cardHeight, maxCardHeight);
    });
    this.slides.forEach(slide => {
      let card = slide.querySelector('.js-catalog__item');
      card.style.height = maxCardHeight + 'px';
    });
    this.controlWrap.style.height = maxCardHeight - 1 + 'px';
  }

  equalParamsHeight() {
    const paramsNameHeight = [];
    this.paramsName.forEach((name, index) => {
      paramsNameHeight[index] = name.getBoundingClientRect().height;
    });
    this.slides.forEach(slide => {
      let paramsValue = slide.querySelectorAll('.js-catalog__compare-item');
      paramsValue.forEach((value, index) => {
        value.style.height = paramsNameHeight[index] + 'px';
      });
    });
  }

  diffParams() {
    /**
     * 0-0
     * 1-0
     * 2-0
     * 3-0
     */

    for (var i = 0, len = this.slides.length; i < len; i++) {
      let slideParams = this.slides[i].querySelectorAll('.js-catalog__compare-item');
      // let prevParam = this.slides[0].querySelectorAll('.js-catalog__compare-item')[0];
      let prevParam;


      for (var j = 0, len2 = slideParams.length; j < len2; j++) {
        let param = slideParams[j];
        console.log(this.slides[i].querySelectorAll('.js-catalog__compare-item')[j])

        /*if (!prevParam) {
          prevParam = param;
        } else if (prevParam !== param) {
          console.log(prevParam, param);
          break;
        } else {
          prevParam = param;
        }*/
      }
    }
  }
}