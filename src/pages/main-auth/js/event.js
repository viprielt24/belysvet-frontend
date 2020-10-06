export default class {
  constructor() {
    if (!document.querySelector('.js-slideToggleBtn')) return;
    this.slideToggleBtn = document.querySelector('.js-slideToggleBtn');
    this.slideToggleWrap = this.slideToggleBtn.closest('.js-slideToggleWrap');
    this.slideToggleData = this.slideToggleWrap.querySelector('.js-slideToggleData');
    this.slideToggleData.style.height = 0;

    this.addEvents();
  }

  addEvents() {
    this.slideToggleBtn.addEventListener('click', (event) => {
      let button = event.currentTarget;
      if (button.classList.contains('active')) {
        this.slideToggleData.style.height = 0;
        button.classList.remove('active');
        button.innerText = 'развернуть';
      } else {
        this.slideToggleData.style.height = this.slideToggleData.scrollHeight + 'px';
        button.classList.add('active');
        button.innerText = 'свернуть';
      }
    });
  }
}