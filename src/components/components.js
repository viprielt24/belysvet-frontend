import objectFitImages from 'object-fit-images';

document.addEventListener('DOMContentLoaded', event => {

  // fix ie html5 element
  document.createElement('header');
  document.createElement('main');
  document.createElement('footer');
  document.createElement('nav');
  document.createElement('section');
  document.createElement('article');
  document.createElement('address');

  if (document.querySelector('.js-select-custom')) {
    import('./select-custom/select-custom').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-orders')) {
    import('./orders/orders').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-popup-open')) {
    import('./popup/popup').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-accordion__header')) {
    import('./accordion/accordion').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-project-inner__slider')) {
    import('../pages/project-inner/project-inner').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-catalog__menu-trigger')) {
    import('../pages/products/products').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-registration')) {
    import('../pages/registration/registration').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-connect')) {
    import('../pages/connect/connect').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-contacts')) {
    import('../pages/contacts/contacts').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-wheretobuy')) {
    import('../pages/wheretobuy/wheretobuy').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-insert-video')) {
    import('./insert-video/insert-video').then(module => {
      new module.default();
    });
  }

  import('./../layout/js/detectIE').then((module) => {
    new module.default;
    if (document.documentElement.classList.contains('ie11')) {
      objectFitImages();
    }
  });

  if (document.querySelector('.js-inputfile')) {
    import('../components/input-file/input-file').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-header')) {
    import('../components/header/header').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-form-validate')) {
    import('../layout/js/validate').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-placeholder')) {
    window.inputPlaceholderInit = import('../layout/js/inputPlaceholder');
    inputPlaceholderInit.then(module => new module.default());
  }

  if (document.querySelector('.js-input-number')) {
    import('../layout/js/inputReset').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-gallery')) {
    import('../components/gallery/gallery').then(module => {
      new module.default();
    });
  }
});
