export default class InputReset {
  constructor() {
    this.inputsNumber = [...document.querySelectorAll('.js-input-number')];
    this.inputEvent = InputReset.edgeUserAgent() ? 'keyup' : 'input';
    this.addEvents();
  }
  
  addEvents() {
    this.inputsNumber.forEach(input => {
      let incrBtn = input.closest('.js-count').querySelector('.js-input-number-incr');
      let decrBtn = input.closest('.js-count').querySelector('.js-input-number-decr');
      let minValue = +input.getAttribute('min') || 1;
      let maxValue = +input.getAttribute('max') || 999;
      
      input.addEventListener('focus', event => {
        let inputOnFocus = event.target;
        
        inputOnFocus.addEventListener(this.inputEvent, evt => {
          let value = evt.target.value;
          if (value < minValue) {
            evt.target.value = minValue;
          } else if (value > maxValue) {
            evt.target.value = maxValue;
          }
        });
        
        inputOnFocus.addEventListener('keydown', evt => {
          let key = evt.charCode || evt.keyCode || 0;
          return (key === 8 ||
            key === 9 ||
            key === 46 ||
            key === 110 ||
            key === 190 ||
            (key >= 35 && key <= 40) ||
            (key >= 48 && key <= 57) ||
            (key >= 96 && key <= 105));
          // https://css-tricks.com/snippets/javascript/javascript-keycodes/
        });
      });
      
      if (incrBtn) {
        incrBtn.addEventListener('click', event => {
          if (input.value >= maxValue) return false;
          input.value++;
        });
      }
      if (incrBtn) {
        decrBtn.addEventListener('click', event => {
          if (input.value <= minValue) return false;
          input.value--;
        });
      }
    });
  }
  
  static edgeUserAgent() {
    return navigator.userAgent.indexOf('Edge') >= 0;
  }
}