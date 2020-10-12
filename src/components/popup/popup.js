import Swiper from 'swiper/dist/js/swiper.min.js';

export default class {
  constructor() {
    //tabs
    this.popupOpenTrigger = document.querySelectorAll('.js-popup-open');
    this.popupCloseTrigger = document.querySelectorAll('.js-popup-close');
    this.popupWrap = document.querySelectorAll('.popup__wrap');
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
    document.addEventListener("click", event => {
      let clickMobile = false;
      let mobileIcon = event.target;
      while (mobileIcon) {
        if (mobileIcon.classList.contains("header__auth--mobile")) {
          clickMobile = true;
          return true;
        } else {
          mobileIcon = mobileIcon.parentElement;
        }
      }
      this.popupWrap.forEach(elem => {
        // Подключаем обработчик только если есть открыте окна
        if (elem.parentElement.classList.contains("popup--visible")) {
          if (!clickMobile) {
            //если форма авторизации не для моб. версии
            document.addEventListener("click", closeOnOverlay, false);
          }
        }
      });
    });
    let closeOnOverlay = (e) => {
      let CurrentNode = e.target;
      let clickOn = false;
      while (CurrentNode) {
        // Для определения оверлея пройдемся по dom модального окна
        if (CurrentNode.classList.contains("popup__wrap")) {
          clickOn = true;
          return true;
        } else {
          CurrentNode = CurrentNode.parentElement;
        }
      }
      if (!clickOn)
        this.popupClose(e);
      document.removeEventListener("click", closeOnOverlay, false); // Удалим обратчик события на оверлее после закрытия окна
    };
  }

  popupOpen(event) {
    if (this.body.classList.contains('popup-open')) {
      let popupOpened = document.querySelector('.popup--visible');
      popupOpened.querySelector('.js-popup-close').click();
    }
    let targetPopupName = event.currentTarget.dataset.popupname;
    let popupInfo = event.currentTarget.dataset.info;
    let popup = document.querySelector('.js-popup-' + targetPopupName);
    (targetPopupName === 'login') ? this.html.classList.add('popup-login-open') : this.html.classList.add('popup-opened');
    this.body.classList.add('popup-open')
    this.body.style.marginRight = this.scrollFix + 'px';
    // this.orders.style.right = this.ordersRight + this.scrollFix + 'px';
    popup.classList.add('popup--visible');

    let popupInfoElement = popup.querySelector('[name=form_info]');
    if (popupInfoElement) {
      popup.querySelector('[name=form_info]').value = popupInfo;
    }

    if (targetPopupName === 'lights' || targetPopupName === 'add-new-sale-order' || targetPopupName === 'add-new-sale-specification'){
      let popup = document.querySelector('.js-popup-' + targetPopupName);
      const lightsContent = popup.querySelector('.swiper-container');
      const lightsContentBar = lightsContent.querySelector('.swiper-scrollbar');
      new Swiper(lightsContent, {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: lightsContentBar,
        },
        mousewheel: true,
        simulateTouch: false,
        dragSize: 100,
        autoHeight: true,
        observer: true,
        observeParents: true
      });
    }

    if (targetPopupName === 'hinticon'){
      const hintIconDescr = event.currentTarget.dataset.popupcontent;
      const hintIconPopup = document.querySelector('.js-popup-' + targetPopupName);
      const hintIconPopupContent = hintIconPopup.querySelector('.js-popup__content-hint-text');
      hintIconPopupContent.innerText = hintIconDescr;
    }
  }

  popupClose(event) {
    // let targetPopupName = event.currentTarget.dataset.popupname;
    let targetPopupName;
    this.popupWrap.forEach(elem => {
      if (elem.parentElement.classList.contains("popup--visible")) {
        targetPopupName = elem.children[0].children[0].dataset.popupname; //Найдем имя модального окна исходя из тех что открыты в данный момент
      }
    });
    if(typeof(targetPopupName) == 'undefined'){
      targetPopupName = event.currentTarget.dataset.popupname;
    }

    let popup = document.querySelector(".js-popup-" + targetPopupName);
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

/*----------------------------Login Popup--------------------------------------*/
const popupLogin = document.querySelector('.js-popup-login');
popupLogin.addEventListener("click", function(event){
  const e = event;
  if (e.target == this) {
    const html = document.documentElement;
    const body = document.body;
    popupLogin.classList.remove('popup--visible');
    html.classList.remove('popup-opened');
    body.classList.remove('popup-open');
    html.classList.remove('popup-login-open');
  }
});
