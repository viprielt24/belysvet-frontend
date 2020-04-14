export default class {
  constructor() {
    // elems
    this.triggers = document.querySelectorAll('.js-stack-popup-link');
    // func
    this.addEvents();
  }

  addEvents() {
    this.triggers.forEach(trigger => {
      const stackInput = trigger.parentElement.parentElement.querySelector('.form-control');

      trigger.addEventListener('click', () => {
        this.stackCopyBuffer(stackInput);
      });
    });
  }

  stackCopyBuffer(stackInput) {
    stackInput.select();
    stackInput.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
  }
}