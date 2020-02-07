import Choices from 'choices.js';
// scroll animation library
import sal from 'sal.js';
import citiesRussia from '../../../images/map/russia';
import moscow from '../../../images/map/moscow';
import piter from '../../../images/map/piter';
import abakan from '../../../images/map/abakan';
import armavir from '../../../images/map/armavir';
import citiesBelarus from '../../../images/map/belarus';
import citiesKazakhstan from '../../../images/map/kazakhstan';

export default class {
  constructor() {
    if (!document.querySelector('.js-distrib__select')) return;
    this.distribCitySelect = document.querySelector('.js-distrib__select');
    this.distribWrap = document.querySelector('.js-distrib');
    this.addEvents();
  }

  addEvents() {
    window.selectCities = new Choices(this.distribCitySelect, {
      searchFloor: 2,
      shouldSort: false,
      itemSelectText: '',
      noResultsText: 'Не найдено',
      renderSelectedChoices: true,
      searchPlaceholderValue: 'Поиск',
    });

    sal();

    this.distribWrap.addEventListener('sal:in', ({detail}) => {
      const elem = document.createElement('script');
      const elemAttr = elem.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=bb14b62c-4405-4ce3-9db0-762219c7cb4a&lang=ru_RU');
      detail.target.appendChild(elem);
      elem.onload = () => {
        this.distribMap();
      };
    });
  }

  distribMap() {
    ymaps.ready(function () {
      var markerPath = document.getElementById('map').dataset.mapmarker;
      var myMap = new ymaps.Map('map', {
          center: [55.4707759, 37.6800719],
          zoom: 8,
          controls: []
        }),
        objectManager = new ymaps.ObjectManager({
          clusterize: true,
          gridSize: 48,
          hasBalloon: false,
        });
      objectManager.objects.options.set({
        iconLayout: 'default#image',
        iconImageHref: markerPath,
        iconImageSize: [34, 48]
      });
      myMap.geoObjects.add(objectManager);
      objectManager.add(citiesRussia);
      //запрет зума по скроллу
      myMap.behaviors.disable('scrollZoom');

      const distribCitySelect = document.querySelector('.js-distrib__select');

      distribCitySelect.addEventListener('change', (event) => {
        if (event.detail.value) {
          fetch('../../../images/map/' + event.detail.value + '.json')
          .then(res => res.json())
          .then(data => {
            objectManager.removeAll();
            objectManager.add(data);
            //центрирование по меткам
            setTimeout(() => {
              myMap.setBounds(objectManager.getBounds());
            }, 100);
          });
        }
      });


      const distribCountries = document.querySelectorAll('.js-distrib__country-item');

      distribCountries.forEach(country => {
        country.addEventListener('click', (event) => {
          if (country.classList.contains('active')) return;
          document.querySelector('.js-distrib__country-item.active').classList.remove('active');
          country.classList.add('active');

          let countryName = event.currentTarget.dataset.country;
          objectManager.removeAll();

          switch (countryName) {
            case 'Russia':
              objectManager.add(citiesRussia);
              window.selectCities.clearStore();
              window.selectCities.setChoices([
                {value: 'moscow', label: 'Москва', selected: true},
                {value: 'armavir', label: 'Армавир'},
                {value: 'abakan', label: 'Абакан'},
                {value: 'piter', label: 'Санкт-Петербург'},
              ], 'value', 'label', false);
              break;
            case 'Belarus':
              objectManager.add(citiesBelarus);
              window.selectCities.clearStore();
              window.selectCities.setChoices([
                {value: 'minsk', label: 'Минск', selected: true},
                {value: 'brest', label: 'Брест'},
              ], 'value', 'label', false);
              break;
            case 'Kazakhstan':
              objectManager.add(citiesKazakhstan);
              window.selectCities.clearStore();
              window.selectCities.setChoices([
                {value: 'astana', label: 'Астана', selected: true},
                {value: 'almati', label: 'Алматы'},
              ], 'value', 'label', false);
              break;
          }
          //центрирование по меткам
          setTimeout(() => {
            myMap.setBounds(objectManager.getBounds());
          }, 100);
        });
      });
    });
  }
}