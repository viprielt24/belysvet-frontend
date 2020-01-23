export default class {
  constructor() {
    // elems
    this.triggers = document.querySelectorAll('.js-stack-trigger');
    // func
    this.addEvents();
  }

  addEvents() {
    this.triggers.forEach(trigger => {
      const stack = trigger.querySelector('.js-stack-popup');
      const stackWrap = trigger.querySelector('.stack-popup-wrap');
      const stackCloseBtn = trigger.querySelector('.js-stack-popup-close');
      const stackInput = trigger.querySelector('.form-control');
      const stackCopyBtn = trigger.querySelector('.js-stack-popup-link');

      stackCloseBtn.addEventListener('click', () => {
        this.stacksClose(trigger, stack);
      });

      trigger.addEventListener('click', (event) => {
        this.stacksToggle(trigger, stack, stackWrap, stackCloseBtn, event);
      });

      stackCopyBtn.addEventListener('click', () => {
        this.stackCopyBuffer(stackInput);
      });
    });
  }

  stacksToggle(trigger, stack, stackWrap, stackCloseBtn, event) {
    // если попап открыт и клик не на внутренности попапа
    if (stack.classList.contains('is-visible') && !stackWrap.contains(event.target)) {
      this.stacksClose(trigger, stack);
      // если клик не на часть кнопки закрыть
    } else if (!stackCloseBtn.contains(event.target)) {
      trigger.classList.add('is-active');
      stack.classList.add('is-visible');
    }
  }

  stacksClose(trigger, stack) {
    trigger.classList.remove('is-active');
    stack.classList.remove('is-visible');
  }

  stackCopyBuffer(stackInput) {
    stackInput.select();
    stackInput.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
  }
}