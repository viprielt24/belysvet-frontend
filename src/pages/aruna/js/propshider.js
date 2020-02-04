export default class {
  constructor() {
    //elem
    this.triggers = document.querySelectorAll('.js-propshider');
    //func
    this.addEvents();
  }

  addEvents() {
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', evt => {
        const propsWrap = trigger.closest('.js-propshider-wrap');
        const propsTriggers = propsWrap.querySelectorAll('.js-props-toggle');
        propsTriggers.forEach(propsTrigger => {
          propsTrigger.click();
        });
      });
    });
  }
}