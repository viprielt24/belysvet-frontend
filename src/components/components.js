import objectFitImages from 'object-fit-images';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';

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

  /*if (document.querySelector('.js-connect')) {
    import('../pages/connect/js/connect-choices').then(module => {
      new module.default();
    });
  }*/
  if (document.querySelector('.js-connect__callback-range')) {

    /*window.inputPlaceholderInit = import('../layout/js/inputPlaceholder');
    inputPlaceholderInit.then(module => new module.default());*/

    /*import('./header/js/header-cart')
    .then(module => {
      window.HeaderCard = module.default;
      new HeaderCard();
    });*/

    /*window.connectInputRange = import('../pages/connect/js/connect-input-range');
    window.connectInputRange.then(module => new module.default());*/

    import('../pages/connect/js/connect-input-range').then(module => {
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

  if (document.querySelector('.js-batch__list')) {
    import('../components/batch/batch').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-tabs')) {
    import('./tabs/tabs').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-catalog__content-lights-main')) {
    import('../pages/common/js/lightsMain-common').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-catalog-press')) {
    import('../pages/common/js/pressMain-common').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-stack-trigger')) {
    import('../components/stack-popup/stack-popup').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-stack-popup-link')) {
    import('../components/stack-popup/stack-popup-copy').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-prop-wrap')) {
    import('../pages/signone/js/props-toggle').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-catalog-aruna')) {
    import('../components/aruna-item/aruna-item').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-catalog-product-item')) {
    import('../components/product-item/product-item').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-checkout__receive-map')) {
    import('../pages/checkout/checkout').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-propshider')) {
    import('../pages/aruna/js/propshider').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-tagline')) {
    import('../layout/js/tagsLineEvent.js').then(module => {
      new module.default(document.querySelector('.js-tagline'));
    });
  }

  if (document.querySelector('.js-user-sale-item')) {
    import('../pages/user-sale-item/user-sale-item.js').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.js-user-sale-status')) {
    import('../components/userHeaderBlock/userHeaderBlock.js').then(module => {
      new module.default();
    });
  }
  if (document.querySelector('.uhbData__item--warning')) {
    import('../components/userHeaderBlock/warningClose.js').then(module => {
      new module.default();
    });
  }

  if (document.querySelector('.uhbData__dateCalendar')) {
    import('../components/userHeaderBlock/datePicker.js').then(module => {
      new module.default();
    });
  }
});
