import './registration.css';
import Choices from 'choices.js';

export default class {
  constructor() {
    this.selectCountry = document.querySelector('.js-select-country');
    this.selectCity = document.querySelector('.js-select-city');
    this.selectOrg = document.querySelector('.js-select-org');

    this.addEvents();
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
}