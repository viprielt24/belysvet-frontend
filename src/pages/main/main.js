import './main.css';

document.addEventListener('DOMContentLoaded', event => {

  import('./js/special').then(module => new module.default);
  import('./js/catalog-review').then(module => new module.default);
  import('./js/catalog-tech').then(module => new module.default);
  import('./js/catalog-segment').then(module => new module.default);
  import('./js/catalog-projects').then(module => new module.default);
  import('./js/distrib').then(module => new module.default);
  import('./js/event').then(module => new module.default);

});



