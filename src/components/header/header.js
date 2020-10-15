export default class {
  constructor() {
    this.isMobile = document.documentElement.classList.contains('mobile');
    this.parentMenu = document.querySelectorAll('.js-header__menu-parent');
    this.parentTopMenu = document.querySelectorAll('.js-header__top-parent');

    if (this.isMobile) {
      this.mobileMenu = document.querySelector('.js-header-mobile');
      this.mobileMenuBtn = document.querySelector('.header__middle .js-header__burger');
      this.mobileMenuMainBtn = this.mobileMenu.querySelector('.js-header__burger');

      this.mobileMenuSearchBtn = document.querySelector('.js-header-mobile-search-open');
      this.mobileMenuSearch = this.mobileMenu.querySelector('.js-header-mobile__search');
    }

    this.addEvents();
  }

  addEvents() {
    this.menuToggle();
    this.topMenuToggle();

    if (this.isMobile) {
      this.mobileMenuSearchBtn.addEventListener('click', () => {
        this.mobileSearchToggle();
      });

      this.mobileMenuBtn.addEventListener('click', () => {
        this.mobileMenuToggle();
      });

      this.mobileMenuMainBtn.addEventListener('click', () => {
        this.mobileMenuToggle();
      });
    }
  }

  menuToggle() {
    this.parentMenu.forEach(menu => {
      menu.addEventListener('click', (event) => {
        if (menu.classList.contains('is-open')) {
          menu.classList.remove('is-open');
          document.removeEventListener("click", CloseMenuOnOverlay, false);
        } else {
          let openMenu = document.querySelector('.js-header__menu-parent.is-open');
          if (openMenu) {
            openMenu.classList.remove('is-open');
          }
          menu.classList.add('is-open');
          if(menu.classList.contains('list__item--user')){
            document.addEventListener("click", CloseMenuOnOverlay, false);
          }
          if (this.mobileMenu && this.mobileMenu.classList.contains('is-open')) {
            this.mobileMenu.classList.remove('is-open');
            this.mobileMenuBtn.classList.remove('is-active');
            this.mobileMenuMainBtn.classList.remove('is-active');
            setTimeout(() => {
              this.mobileMenuSearch.classList.remove('is-open');
            }, 400);
          }
        }
      });

      this.parentTopMenu.forEach(menu => {
        if (menu.classList.contains('is-open')) {
          menu.classList.remove('is-open');
        }
      });
    });

    function CloseMenuOnOverlay (event) {
      let clickMenu = false;
      let menuIcon = event.target;
      while (menuIcon) {
        if (menuIcon.classList.contains("list__item--user")) {
          clickMenu = true;
          return true;
        } else {
          menuIcon = menuIcon.parentElement;
        }
      }
      if(!clickMenu){
        let menu = document.querySelector('.header__client-item.list__item--user.js-header__menu-parent.is-open');
        if(menu && menu.classList.contains('is-open')) {
          menu.classList.remove('is-open');
        }
      }
    }
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

        this.parentMenu.forEach(menu => {
          if (menu.classList.contains('is-open')) {
            menu.classList.remove('is-open');
          }
        });
      });
    });
  }

  mobileMenuToggle() {
    if (this.mobileMenu.classList.contains('is-open')) {
      this.mobileMenu.classList.remove('is-open');
      this.mobileMenuBtn.classList.remove('is-active');
      this.mobileMenuMainBtn.classList.remove('is-active');
      setTimeout(() => {
        this.mobileMenuSearch.classList.remove('is-open');
      }, 400);
    } else {
      this.mobileMenu.classList.add('is-open');
      this.mobileMenuBtn.classList.add('is-active');
      this.mobileMenuMainBtn.classList.add('is-active');
    }
  }

  mobileSearchToggle() {
    if (this.mobileMenuSearch.classList.contains('is-open')) {
      this.mobileMenuSearch.classList.remove('is-open');
    } else {
      this.mobileMenuSearch.classList.add('is-open');
    }
  }
}