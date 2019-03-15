import('./js/preloader').then((module) => {
  window.preloader = new module.default;
  // use
  // window.preloader.show();
  // window.preloader.hide();
});