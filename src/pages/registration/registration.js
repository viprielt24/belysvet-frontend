import './registration.css';
import Choices from 'choices.js';

export default class {
  constructor() {
    this.selectCountry = document.querySelector('.js-select-country');
    this.selectCity = document.querySelector('.js-select-city');
    this.selectOrg = document.querySelector('.js-select-org');

    this.regTags = document.querySelectorAll('.js-reg-tagline .tag');
    this.nondistribWrap = document.querySelector('.js-registration-nondistrib');
    this.distribWrap = document.querySelector('.js-registration-distrib');

    this.addEvents();
    this.tagToggle();
  }

  addEvents() {
    const selectCountryInst = new Choices(this.selectCountry, {
      placeholder: false,
      searchFloor: 2,
      shouldSort: false,
      itemSelectText: '',
      noResultsText: 'Не найдено',
      renderSelectedChoices: true,
      searchPlaceholderValue: 'Поиск',
    });
    const selectCityInst = new Choices(this.selectCity, {
      placeholder: false,
      searchFloor: 2,
      shouldSort: false,
      itemSelectText: '',
      noResultsText: 'Не найдено',
      renderSelectedChoices: true,
      searchPlaceholderValue: 'Поиск',
    }).disable();
    const selectOrgInst = new Choices(this.selectOrg, {
      placeholder: false,
      searchFloor: 2,
      shouldSort: false,
      itemSelectText: '',
      noResultsText: 'Не найдено',
      renderSelectedChoices: true,
      searchPlaceholderValue: 'Поиск',
    }).disable();


    selectCountryInst.passedElement.element.addEventListener('change', (event) => {
      selectCityInst.setChoices([
        {value: 'moscow', label: 'Москва'},
        {value: 'armavir', label: 'Армавир'},
        {value: 'abakan', label: 'Абакан'},
        {value: 'piter', label: 'Санкт-Петербург'},
      ], 'value', 'label', true).enable();
    });

    selectCityInst.passedElement.element.addEventListener('change', (event) => {
      selectOrgInst.setChoices([
        {value: '23', label: 'Ассоциация «Русский Свет»'},
        {value: '43', label: 'Компания ЭТМ'},
        {value: '64', label: ' АО «Форум Электро»'},
        {value: '67', label: ' ООО «Элком-Электро»'},
      ], 'value', 'label', true).enable();
    });
  }

  tagToggle() {
    this.regTags.forEach(tag => {
      tag.addEventListener('click', () => {
        tag.classList.toggle('tag--active');

        if (tag.classList.contains('js-tag-distrib')) {
          if (tag.classList.contains('tag--active')) {
            this.nondistribWrap.style.display = 'none';
            this.distribWrap.style.display = 'block';
          } else {
            this.nondistribWrap.style.display = 'block';
            this.distribWrap.style.display = 'none';
          }
        }
      });
    });
  }
}