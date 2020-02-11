export default class {
  constructor() {
    this.parentMenu = document.querySelectorAll('.js-header__menu-parent');
    this.parentTopMenu = document.querySelectorAll('.js-header__top-parent');
    this.mobileMenu = document.querySelector('.js-header-mobile');
    this.mobileMenuBtn = document.querySelector('.header__middle .js-header__burger');
    this.mobileMenuMainBtn = this.mobileMenu.querySelector('.js-header__burger');
    this.addEvents();
  }

  addEvents() {
    this.menuToggle();
    this.topMenuToggle();

    this.mobileMenuBtn.addEventListener('click', () => {
      this.mobileMenuToggle();
    });

    this.mobileMenuMainBtn.addEventListener('click', () => {
      this.mobileMenuToggle();
    });
  }

  menuToggle() {
    this.parentMenu.forEach(menu => {
      menu.addEventListener('click', () => {
        if (menu.classList.contains('is-open')) {
          menu.classList.remove('is-open');
        } else {
          let openMenu = document.querySelector('.js-header__menu-parent.is-open');
          if (openMenu) {
            openMenu.classList.remove('is-open');
          }
          menu.classList.add('is-open');
        }
      });
    });
  }

  topMenuToggle() {
    this.parentTopMenu.forEach(menu => {
      menu.addEventListener('click', () => {
        if (menu.classList.contains('is-open')) {
          menu.classList.remove('is-open');
        } else {
          let openMenu = document.querySelector('.js-header__top-parent.is-open');
          if (openMenu) {
            openMenu.classList.remove('is-open');
          }
          menu.classList.add('is-open');
        }
      });
    });
  }

  mobileMenuToggle() {
    if (this.mobileMenu.classList.contains('is-open')) {
      this.mobileMenu.classList.remove('is-open');
      this.mobileMenuBtn.classList.remove('is-active');
      this.mobileMenuMainBtn.classList.remove('is-active');
    } else {
      this.mobileMenu.classList.add('is-open');
      this.mobileMenuBtn.classList.add('is-active');
      this.mobileMenuMainBtn.classList.add('is-active');
    }
  }
}