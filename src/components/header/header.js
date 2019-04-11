export default class {
  constructor() {
    this.parentMenu = document.querySelectorAll('.js-header__menu-parent');
    this.addEvents();
  }

  addEvents() {
    this.menuToggle();
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
}