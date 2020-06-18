export default class {
  constructor() {
    this.checkboxParent = document.querySelector('.js-user-sale-status')
    this.checkbox = this.checkboxParent.querySelectorAll('input[name="saleStatus"]');
    this.className = 'uhbData__item--checkboxFinished';
    this.addEvent();
  }
  isCheck(name) {
    return document.querySelector('input[name="' + name + '"]:checked');
  }
  addEvent() {
    this.checkbox.forEach(check => {
      check.addEventListener('change', ()=>{
        if (check.value == 'finished') {
          this.checkboxParent.classList.add(this.className);
        } else {
          this.checkboxParent.classList.remove(this.className);
        }
      })
    });
  }
}