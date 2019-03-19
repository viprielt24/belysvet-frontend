export default class {
  constructor() {
    //tabs
    this.popupOpenTrigger = document.querySelectorAll('.js-popup-open');
    this.popupCloseTrigger = document.querySelectorAll('.js-popup-close');
    this.html = document.documentElement;
    this.body = document.body;
    this.orders = document.querySelector('.js-orders');
    this.ordersRight = parseFloat(getComputedStyle(this.orders).right);
    this.scrollFix = window.innerWidth - this.body.clientWidth;
    //events
    this.addEvents();
  }

  addEvents() {
    this.popupOpenTrigger.forEach(openLink => {
      openLink.addEventListener('click', (event) => {
        this.popupOpen(event);
      });
    });

    this.popupCloseTrigger.forEach(closeLink => {
      closeLink.addEventListener('click', (event) => {
        this.popupClose(event);
      });
    });
  }

  popupOpen(event) {
    if (this.body.classList.contains('popup-open')) {
      let popupOpened = document.querySelector('.popup--visible');
      popupOpened.querySelector('.js-popup-close').click();
    }
    let targetPopupName = event.currentTarget.dataset.popupname;
    let popupInfo = event.currentTarget.dataset.info;
    let popup = document.querySelector('.js-popup-' + targetPopupName);
    this.html.classList.add('popup-opened');
    this.body.classList.add('popup-open');
    this.body.style.marginRight = this.scrollFix + 'px';
    // this.orders.style.right = this.ordersRight + this.scrollFix + 'px';
    popup.classList.add('popup--visible');

    let popupInfoElement = popup.querySelector('[name=form_info]');
    if (popupInfoElement) {
      popup.querySelector('[name=form_info]').value = popupInfo;
    }
  }

  popupClose(event) {
    let targetPopupName = event.currentTarget.dataset.popupname;
    let popup = document.querySelector('.js-popup-' + targetPopupName);
    let popupInfo = popup.querySelector('[name=form_info]');
    if (popupInfo) {
      popup.querySelector('[name=form_info]').value = 'Отправка запроса';
    }

    setTimeout(() => {
      this.html.classList.remove('popup-opened');
      this.body.style.marginRight = 0;
      // this.orders.style.right = this.ordersRight + 'px';
    }, 300);
    this.body.classList.remove('popup-open');
    popup.classList.remove('popup--visible');
  }
}