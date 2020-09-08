export default class {
  constructor() {
    this.warningCloseTrigger = document.querySelectorAll('.uhbData__icon--close');
    this.separator = document.querySelectorAll('.uhbData__item--separator');
    this.addEvent();
  }
  addEvent() {
    this.warningCloseTrigger.forEach(check => {
      check.addEventListener('click', (event)=>{
        let separator = document.querySelector('.uhbData__item--separator');
        event.target.closest('.uhbData__item--warning').classList.remove('warning--visible');
        event.target.closest('.uhbData__item--warning').classList.add('warning--hidden');
        separator.classList.add('separator--visible');
      })
    });
  }
}