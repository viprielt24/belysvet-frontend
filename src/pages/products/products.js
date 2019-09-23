import './products.css';

export default class {
  constructor() {
    this.prodWrap = document.querySelector('.js-products');
    this.prodTriggerOpen = document.querySelectorAll('.js-catalog__menu-trigger');
    this.addEvents();
  }

  addEvents() {
    this.menuToggle();
  }

  menuToggle() {
    this.prodTriggerOpen.forEach((triggerOpen, index) => {
      let menuTriggerClose = triggerOpen.parentElement.querySelector('.js-catalog__menu-content-close');

      triggerOpen.addEventListener('click', () => {
        this.menuOpen(triggerOpen, index);
      });

      menuTriggerClose.addEventListener('click', () => {
        this.menuClose(triggerOpen);
      });
    });
  }

  menuOpen(triggerOpen, index) {
    const openedMenu = document.querySelector('.js-catalog__menu-content.is-open');
    if (openedMenu) {
      let openedMenuTrogger = openedMenu.parentElement.querySelector('.js-catalog__menu-trigger');
      this.menuClose(openedMenuTrogger);
    }

    let menu = triggerOpen.parentElement.querySelector('.js-catalog__menu-content');
    let wrapWidth = this.prodWrap.offsetWidth;
    menu.style.display = 'block';
    menu.classList.add('is-open');
    menu.style.width = wrapWidth + 'px';
    menu.style.left = document.documentElement.classList.contains('mobile') ? 16 + 'px' : 15 + 'px';
    if (index % 2) {
      menu.style.left = 'auto'
      menu.style.right = document.documentElement.classList.contains('mobile') ? 16 + 'px' : 15 + 'px';
    }
  }

  menuClose(triggerOpen) {
    let menu = triggerOpen.parentElement.querySelector('.js-catalog__menu-content');
    menu.style.display = 'none';
    menu.classList.remove('is-open');
  }
}