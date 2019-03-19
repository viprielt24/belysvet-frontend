import Choices from 'choices.js';
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
    this.addEvents();
  }

  addEvents() {
    window.selectCities = new Choices(this.distribCitySelect, {
      itemSelectText: '',
      noResultsText: 'Не найдено'
    });

    this.distribMap();
  }

  distribMap() {
    ymaps.ready(function () {
      var markerPath = document.getElementById('map').dataset.mapmarker;
      var myMap = new ymaps.Map('map', {
          center: [55.4707759, 37.6800719],
          zoom: 8,
          // controls: []
        }),
        objectManager = new ymaps.ObjectManager({
          clusterize: true,
          gridSize: 48,
          clusterDisableClickZoom: true
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

          window.selectCities.clearStore();
          window.selectCities.setChoices([
            {value: 'moscow', label: 'Moscow', selected: true},
            {value: 'Two', label: 'Label Two'},
            {value: 'Three', label: 'Label Three'},
          ], 'value', 'label', false);

          let countryName = event.currentTarget.dataset.country;
          objectManager.removeAll();

          switch (countryName) {
            case 'Russia':
              objectManager.add(citiesRussia);
              break;
            case 'Belarus':
              objectManager.add(citiesBelarus);
              break;
            case 'Kazakhstan':
              objectManager.add(citiesKazakhstan);
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