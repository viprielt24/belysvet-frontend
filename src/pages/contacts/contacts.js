import './contacts.css';

export default class {
  constructor() {

    this.addEvents();
  }

  addEvents() {
    ymaps.ready(function () {
      var isMobile = document.documentElement.classList.contains('mobile');
      var markerPath = document.getElementById('contactsMap1').dataset.mapMarker;
      var myMap = new ymaps.Map('contactsMap1', {
          center: isMobile ? [55.812708, 37.495851] : [55.812008, 37.493551],
          zoom: isMobile ? 16 : 17,
          controls: []
        }),
        MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
          '<div class="balloon">' +
          '<div class="balloon-title">ООО "Белый свет 2000"</div>' +
          '<div class="balloon-content">' +
          '<div class="balloon-content-address">Москва, Факультетский переулок, дом 12 (заезд с ул. Царева)</div>' +
          '<div class="balloon-content-phone">+7 (495) 785-17-67</div>' +
          '<div class="balloon-content-email"><a href="mailto:info@belysvet.ru">info@belysvet.ru</a></div>' +
          '</div>' +
          '</div>'
        ),
        myPlacemark = new ymaps.Placemark([55.812008, 37.493551], {}, {
          balloonLayout: MyBalloonLayout,
          iconLayout: 'default#image',
          iconImageHref: markerPath,
          iconImageSize: [19, 28],
          balloonPanelMaxMapArea: 0,
          hideIconOnBalloonOpen: false,
          balloonOffset: isMobile ? [20, 35, 0, 0] : [20, -10, 0, 0]
        });
      //балун открыт сразу
        myMap.geoObjects.add(myPlacemark);
        myPlacemark.balloon.open();
      //запрет зума по скроллу
      myMap.behaviors.disable('scrollZoom');
    });
    ymaps.ready(function () {
      var isMobile = document.documentElement.classList.contains('mobile');
      var markerPath = document.getElementById('contactsMap2').dataset.mapMarker;
      var myMap = new ymaps.Map('contactsMap2', {
          center: isMobile ? [55.879611, 37.495200] : [55.879011, 37.492716],
          zoom: isMobile ? 16 : 17,
          controls: []
        }),
        MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
          '<div class="balloon">' +
          '<div class="balloon-title">Склад ООО "Белый свет 2000"</div>' +
          '<div class="balloon-content">' +
          '<div class="balloon-content-address">Москва, ул. Маршала Федоренко, 3, стр.1</div>' +
          '<div class="balloon-content-phone">+7 (985) 778-25-92</div>' +
          '</div>' +
          '</div>'
        ),
        myPlacemark = new ymaps.Placemark([55.878751, 37.492916], {}, {
          balloonLayout: MyBalloonLayout,
          iconLayout: 'default#image',
          iconImageHref: markerPath,
          iconImageSize: [19, 28],
          balloonPanelMaxMapArea: 0,
          hideIconOnBalloonOpen: false,
          balloonOffset: isMobile ? [20, 35, 0, 0] : [20, -10, 0, 0]
        });
      //балун открыт сразу
        myMap.geoObjects.add(myPlacemark);
        myPlacemark.balloon.open();
      //запрет зума по скроллу
      myMap.behaviors.disable('scrollZoom');
    });
    ymaps.ready(function () {
      var isMobile = document.documentElement.classList.contains('mobile');
      var markerPath = document.getElementById('contactsMap3').dataset.mapMarker;
      var myMap = new ymaps.Map('contactsMap3', {
          center: isMobile ?  [59.801206, 30.384200] : [59.800806, 30.380996],
          zoom: isMobile ? 16 : 17,
          controls: []
        }),
        MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
          '<div class="balloon">' +
          '<div class="balloon-title">Склад ООО "Белый свет 2000"</div>' +
          '<div class="balloon-content">' +
          '<div class="balloon-content-address">г. Санкт-Петербург, пос. Шушары, ул. Пушкинская, 25, корп. 1, стр. 1</div>' +
          '<div class="balloon-content-phone">+7 (911) 740-75-70</div>' +
          '</div>' +
          '</div>'
        ),
        myPlacemark = new ymaps.Placemark([59.800306, 30.381896], {}, {
          balloonLayout: MyBalloonLayout,
          iconLayout: 'default#image',
          iconImageHref: markerPath,
          iconImageSize: [19, 28],
          balloonPanelMaxMapArea: 0,
          hideIconOnBalloonOpen: false,
          balloonOffset: isMobile ? [20, 25, 0, 0] : [20, -10, 0, 0]
        });
      //балун открыт сразу
        myMap.geoObjects.add(myPlacemark);
        myPlacemark.balloon.open();
      //запрет зума по скроллу
      myMap.behaviors.disable('scrollZoom');
    });
  }
}