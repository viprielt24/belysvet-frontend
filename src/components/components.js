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

  if (document.querySelector('.js-header')) {
    import('./header/header').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-orders')) {
    import('./orders/orders').then(module => {
      new module.default();
    });
  }

  import('./../layout/js/detectIE').then((module) => {
    new module.default;
    if (document.documentElement.classList.contains('ie11')) {
      objectFitImages();
    }
  });

  if (document.querySelector('.js-form-validate')) {
    import('../layout/js/validate').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-placeholder')) {
    window.inputPlaceholderInit = import('../layout/js/inputPlaceholder');
    inputPlaceholderInit.then(module => new module.default());
  }

});
