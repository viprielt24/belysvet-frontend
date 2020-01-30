import './checkout.css';

import Swiper from 'swiper/dist/js/swiper.min.js';

export default class {
  constructor() {
    this.receiveScroll();
    this.addEvents();
  }

  addEvents() {
    ymaps.ready(function () {
      var isMobile = document.documentElement.classList.contains('mobile');
      var markerPath = document.getElementById('sdek-map').dataset.mapMarker;
      var markerActivePath = document.getElementById('sdek-map').dataset.mapMarkerActive;
      var tabs = document.querySelectorAll('.js-checkout__receive-item');
      var tabsCoords = [];
      var tabActive = null;

      var myMap = new ymaps.Map('sdek-map', {
          center: [55.812008, 37.493551],
          zoom: 17,
          controls: []
        });
      //добавление меток
      var myGeoObjects = new ymaps.GeoObjectCollection();

      [].forEach.call(tabs, function (tab) {
        var CustomLayoutClass = ymaps.templateLayoutFactory.createClass(
          '<div class="balloon">' +
          '<div class="balloon-content">' +
          '<div class="balloon-content-address">'+ tab.nextElementSibling.nextElementSibling.innerText +'</div>' +
          '</div>' +
          '</div>'
        );

        var coords = [tab.dataset.latitude, tab.dataset.longitude];
        tabsCoords.push(coords);

        myGeoObjects.add(new ymaps.Placemark(coords, {}, {
          iconLayout: 'default#image',
          iconImageHref: markerPath,
          iconImageSize: [19, 28],
          balloonContentLayout: CustomLayoutClass,
          balloonShadow: false,
        }));
      });
      myMap.geoObjects.add(myGeoObjects);

      //клик по метке
      myGeoObjects.events.add('click', function (event) {

        //смена активности метки
        myGeoObjects.each(function (item) {
          item.options.set('iconImageHref', markerPath);
        });
        event.get('target').options.set('iconImageHref', markerActivePath);

        //смена активности таба
        let markCoord = event.get('target').geometry._coordinates[0];
        [].forEach.call(tabs, function (tab, index) {
          let tabCoord = tab.dataset.latitude;
          if (tabCoord === markCoord) {
            tab.checked = true;
            tabActive = index;
          }
        });
      });

      //клик по табу
      [].forEach.call(tabs, function (tab, index) {
        tab.addEventListener('click', function (event) {
          let currentTab = event.currentTarget;
          let tabCoord = currentTab.dataset.latitude;
          tabActive = index;
          myGeoObjects.each(function (item, index) {
            let markCoord = item.geometry._coordinates[0];
            item.options.set('iconImageHref', markerPath);
            if (tabCoord === markCoord) {
              item.options.set('iconImageHref', markerActivePath);
              item.balloon.open();
            }
          });
        });
      });

      //инит первого таба
      tabs[0].click();
    });
  }

  receiveScroll() {
    const lightsContent = document.querySelector('.js-checkout__receive-map .swiper-container');
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
}