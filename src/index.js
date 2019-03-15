import './style.css';
import './layout/layout.js';
import './components/components.js';

document.addEventListener('DOMContentLoaded', event => {

  // дев мод для тестирования шаблонов мобильной/десктопной версии
  import('./layout/js/developmentMode.js').then(module => {
    new module.default();
  });

});