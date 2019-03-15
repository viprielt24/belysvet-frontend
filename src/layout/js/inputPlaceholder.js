export default class InputPlaceholder {
  constructor() {
    this.labels = [...document.querySelectorAll('.js-placeholder')];
    this.addEvents();
  }
  
  addEvents() {
    this.labels.forEach(label => {
      InputPlaceholder.classToggleValue(label);
      InputPlaceholder.classFocusValue(label);
    });
  }
  
  static classToggleValue(label) {
    let formElem = label.querySelector('input') || label.querySelector('textarea');
    if (formElem.value.length === 0) {
      label.classList.remove('has-value');
    } else {
      label.classList.add('has-value');
    }
  }
  
  static classFocusValue(label) {
    let formElem = label.querySelector('input') || label.querySelector('textarea');
    formElem.addEventListener('focus', event => {
      label.classList.add('has-value');
    });
    formElem.addEventListener('blur', event => {
      InputPlaceholder.classToggleValue(label);
    });
  }
}