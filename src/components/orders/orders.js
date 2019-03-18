export default class {
  constructor() {
    this.orders = document.querySelector('.js-orders');
    this.ordersTrigger = document.querySelector('.js-orders-trigger');
    this.addEvents();
  }

  addEvents() {
    this.ordersTrigger.addEventListener('click', () => {
      if (this.orders.classList.contains('active')) {
        this.orders.classList.remove('active');
      } else {
        this.orders.classList.add('active');
      }
    });
  }
}