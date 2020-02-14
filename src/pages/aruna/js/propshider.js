export default class {
  constructor() {
    //elem
    this.triggers = document.querySelectorAll('.js-propshider');
    //func
    this.addEvents();
  }

  addEvents() {
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const propsWrap = trigger.closest('.js-propshider-wrap');
        const propsTriggers = propsWrap.querySelectorAll('.js-props-toggle');

        if (trigger.classList.contains('active')) {
          trigger.classList.remove('active');
          trigger.innerText = 'Свернуть характеристики всех товаров';
          propsTriggers.forEach(propsTrigger => {
            const propsTriggersParent = propsTrigger.closest('.js-prop-wrap');
            if (propsTriggersParent.classList.contains('prop-hide')) {
              propsTrigger.click();
            }
          });
        } else {
          trigger.classList.add('active');
          trigger.innerText = 'Развернуть характеристики всех товаров';
          propsTriggers.forEach(propsTrigger => {
            const propsTriggersParent = propsTrigger.closest('.js-prop-wrap');
            if (!propsTriggersParent.classList.contains('prop-hide')) {
              propsTrigger.click();
            }
          });
        }
      });
    });
  }
}