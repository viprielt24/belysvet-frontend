export default class Preloader {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = "preloadeer";
    this.element.innerHTML = '<div class="preloadeer__img"><div class="preloadeer__title">Загрузка...</div></div>';
    this.header = document.querySelector('.header');
    this.body = document.body;
    this.blockingClass = 'preloadeer--active';
    this.counter = 0;
    this.scrollWidth = window.innerWidth - this.body.offsetWidth;
    this.body.appendChild(this.element);
    // use
    // window.preloader.show();
    // window.preloader.hide();
  }
  show() {
    if (this.counter == 0) {
      this.body.classList.add(this.blockingClass);
      if (this.scrollWidth && this.header) {
        this.header.style.paddingRight = this.scrollWidth + 'px';
        this.body.style.marginRight = this.scrollWidth + 'px';
      }
      // this.body.appendChild(this.element);
    }
    this.counter++;
  }
  hide() {
    if (this.counter == 1) {
      this.body.classList.remove(this.blockingClass);
      if (this.scrollWidth && this.header) {
        this.header.style.paddingRight = '';
        this.body.style.marginRight = '';
      }
      // this.element.parentNode.removeChild(this.element);
    }
    this.counter--;
  }
}
