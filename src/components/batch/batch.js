export default class {
  constructor() {
    this.batchWrap = document.querySelector('.js-batch');
    this.batchWrapGbLeft = this.batchWrap.getBoundingClientRect().left;

    this.list = document.querySelector('.js-batch__list');
    this.choose = document.querySelector('.js-batch__choose');
    this.chooseArrow = document.querySelector('.js-batch__list-icon');

    this.chooseIcon = document.querySelector('.js-batch__choose .icon');
    this.chooseIconGbLeft = this.chooseIcon.getBoundingClientRect().left;

    this.addEvents();
  }

  addEvents() {
    this.batchClass();
    this.batchArrow();
  }

  batchClass() {
    this.choose.addEventListener('click', () => {
      this.list.classList.toggle('is-active');
      this.choose.classList.toggle('is-active');
    });
  }

  batchArrow() {
    this.chooseArrow.style.left = this.chooseIconGbLeft - this.batchWrapGbLeft + 3 + 'px';
  }
}