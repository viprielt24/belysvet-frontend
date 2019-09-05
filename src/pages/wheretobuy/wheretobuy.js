import './wheretobuy.css';
import Choices from 'choices.js';
import moscow from '../../images/map/moscow';
import piter from '../../images/map/piter';
import abakan from '../../images/map/abakan';
import armavir from '../../images/map/armavir';
import citiesRussia from '../../images/map/russia';
import citiesUkraine from '../../images/map/ukraine';
import citiesBelarus from '../../images/map/belarus';
import citiesKazakhstan from '../../images/map/kazakhstan';

export default class {
  constructor() {
    this.hideMapTrigger = document.querySelector('.js-wheretobuy__toggle-map');
    this.hideMapSelf = document.querySelector('.js-wheretobuy__map');
    this.hideMapSelfHeight = this.hideMapSelf.clientHeight;
    this.selectOrg = document.querySelector('.js-select-org');

    this.addEvents();
    this.toggleMap();
  }

  addEvents() {
    ymaps.ready(function () {
      var markerPath = document.getElementById('wheretobuyMap').dataset.mapMarker;
      var myMap = new ymaps.Map('wheretobuyMap', {
          center: [55.4707759, 37.6800719],
          zoom: 8,
          controls: []
        }),
        objectManager = new ymaps.ObjectManager({
          clusterize: true,
          gridSize: 0,
          clusterHasBalloon: false,
          clusterDisableClickZoom: true
        });
      objectManager.objects.options.set({
        iconLayout: 'default#image',
        iconImageHref: markerPath,
        iconImageSize: [34, 48]
      });
      myMap.geoObjects.add(objectManager);
      objectManager.add(citiesRussia);

      //добавляем маленький зум справа
      myMap.controls.add('zoomControl',{
        position: { right: 10, top: 230 },
        size: 'small'
      });

      //запрет зума по скроллу
      myMap.behaviors.disable('scrollZoom');

      const partnersWrap = document.querySelector('.js-wheretobuy-partners__wrap');
      const partnersCity = document.querySelector('.js-wheretobuy-partners__title');

      const selectCountry = document.querySelector('.js-select-country');
      const selectCountryInst = new Choices(selectCountry, {
        placeholder: false,
        searchFloor: 2,
        shouldSort: false,
        itemSelectText: '',
        noResultsText: 'Не найдено',
        renderSelectedChoices: true,
        searchPlaceholderValue: 'Поиск',
      });
      const selectCity = document.querySelector('.js-select-city');
      const selectCityInst = new Choices(selectCity, {
        placeholder: false,
        searchFloor: 2,
        shouldSort: false,
        itemSelectText: '',
        noResultsText: 'Не найдено',
        renderSelectedChoices: true,
        searchPlaceholderValue: 'Поиск',
      }).disable();
      //по стране обновляем город, а карту по городу
      selectCountryInst.passedElement.element.addEventListener('change', (event) => {
        let countryName = event.target.value;
        objectManager.removeAll();
        switch (countryName) {
          case 'Russia':
            objectManager.add(citiesRussia);
            selectCityInst.setChoices([
              {value: 'moscow', label: 'Москва', selected: true},
              {value: 'armavir', label: 'Армавир'},
              {value: 'abakan', label: 'Абакан'},
              {value: 'piter', label: 'Санкт-Петербург'},
            ], 'value', 'label', true).enable();
            break;
          case 'Ukraine':
            objectManager.add(citiesUkraine);
            selectCityInst.setChoices([
              {value: 'kiev', label: 'Киев', selected: true},
              {value: 'odessa', label: 'Одесса'},
            ], 'value', 'label', true).enable();
            break;
          case 'Belarus':
            objectManager.add(citiesBelarus);
            selectCityInst.setChoices([
              {value: 'minsk', label: 'Минск', selected: true},
              {value: 'brest', label: 'Брест'},
            ], 'value', 'label', true).enable();
            break;
          case 'Kazakhstan':
            objectManager.add(citiesKazakhstan);
            selectCityInst.setChoices([
              {value: 'astana', label: 'Астана', selected: true},
              {value: 'almati', label: 'Алматы'},
            ], 'value', 'label', true).enable();
            break;
        }
        //центрирование по меткам
        setTimeout(() => {
          myMap.setBounds(objectManager.getBounds());
        }, 1000);

        let cityName = document.querySelector('.js-select-city').value;
        if (cityName) {
          partnersCity.innerText = document.querySelector('.js-select-city').innerText;
          fetch('../../images/map/' + cityName + '.json')
          .then(res => res.json())
          .then(data => {
            let partnerLayout = '';
            data.features.forEach(feature => {
              if (!feature.partner) return;
              partnerLayout += `<div class="wheretobuy-partners__item">
              <div class="wheretobuy-partners__item-name">${feature.partner.name}</div>
              <div class="wheretobuy-partners__item-address">${feature.partner.address}</div>
              <div class="wheretobuy-partners__item-phone">${feature.partner.phone}</div>
              <div class="wheretobuy-partners__item-email-wrap"><a class="wheretobuy-partners__item-email" href="mailto:${feature.partner.email}">${feature.partner.email}</a></div>
              <div class="wheretobuy-partners__item-site-wrap"><a class="wheretobuy-partners__item-site" href="http://feature.partner.site">feature.partner.site</a></div>
            </div>`;
            });
            if (partnerLayout) {
              partnersWrap.innerHTML = partnerLayout;
            } else {
              partnersWrap.innerHTML = '';
            }
            objectManager.removeAll();
            objectManager.add(data);
          });
        }

      });

      //карту по городу
      selectCityInst.passedElement.element.addEventListener('change', (event) => {
        citiesRender(event.target.value)
      });

      const citiesRender = function (name) {
        let cityName = name;
        if (cityName) {
          partnersCity.innerText = document.querySelector('.js-select-city').innerText !== 'Выберите страну' ?
            document.querySelector('.js-select-city').innerText : 'Москва и Московская область';
          fetch('../../images/map/' + cityName + '.json')
          .then(res => res.json())
          .then(data => {
            let partnerLayout = '';
            data.features.forEach(feature => {
              if (!feature.partner) return;
              partnerLayout += `<div class="wheretobuy-partners__item">
              <div class="wheretobuy-partners__item-name">${feature.partner.name}</div>
              <div class="wheretobuy-partners__item-address">${feature.partner.address}</div>
              <div class="wheretobuy-partners__item-phone">${feature.partner.phone}</div>
              <div class="wheretobuy-partners__item-email-wrap"><a class="wheretobuy-partners__item-email" href="mailto:${feature.partner.email}">${feature.partner.email}</a></div>
              <div class="wheretobuy-partners__item-site-wrap"><a class="wheretobuy-partners__item-site" href="http://feature.partner.site">feature.partner.site</a></div>
            </div>`;
            });
            if (partnerLayout) {
              partnersWrap.innerHTML = partnerLayout;
            } else {
              partnersWrap.innerHTML = '';
            }
            objectManager.removeAll();
            objectManager.add(data);
            //центрирование по меткам
            setTimeout(() => {
              myMap.setBounds(objectManager.getBounds());
            }, 100);
          });
        }
      };
      //первый рендер городов Москвы
      citiesRender('moscow')
    });
  }

  toggleMap() {
    this.hideMapSelf.style.height = this.hideMapSelfHeight + 'px';
    this.hideMapTrigger.addEventListener('click', (event) => {
      let target = event.currentTarget;
      if (target.classList.contains('active')) {
        this.hideMapSelf.style.height = this.hideMapSelfHeight + 'px';
        target.classList.remove('active');
      } else {
        this.hideMapSelf.style.height = 0 + 'px';
        target.classList.add('active');
      }
    });
  }
}