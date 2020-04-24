import './registration.css';
import Choices from 'choices.js';

export default class {
  constructor() {
    this.selectCountry = document.querySelector('.js-select-country');
    this.selectCity = document.querySelector('.js-select-city');
    this.selectOrg = document.querySelector('.js-select-org');
    this.selectCustomer = document.querySelector('.js-select-customer');

    this.regTags = document.querySelectorAll('.js-reg-tagline .tag');
    this.nondistribWrap = document.querySelector('.js-registration-nondistrib');
    this.distribWrap = document.querySelector('.js-registration-distrib');
    this.customerWrap = document.querySelector('.js-registration-customer');
    this.customerInput = document.querySelector('.js-registration-customer-other');

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
    const selectCustomerInst = new Choices(this.selectCustomer, {
      placeholder: false,
      searchFloor: 2,
      shouldSort: false,
      itemSelectText: '',
      noResultsText: 'Не найдено',
      renderSelectedChoices: true,
      searchPlaceholderValue: 'Поиск',
    });

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

    selectCustomerInst.setChoices([
      {value: '51', label: 'Монтажная организация'},
      {value: '52', label: 'Генеральный подрядчик'},
      {value: '53', label: 'Заказчик'},
      {value: '54', label: 'Инвестор'},
      {value: '55', label: 'Эксплуатационная организация'},
      {value: '56', label: 'Конечный потребитель'},
      {value: 'drugoe', label: 'Другое'},
    ], 'value', 'label', true).enable();

    selectCustomerInst.passedElement.element.addEventListener('change', (event) => {
      const selectValue = event.detail.value;
      this.customerInput.disabled = selectValue !== 'drugoe';
    })
  }

  tagToggle() {
    this.regTags.forEach(tag => {
      tag.addEventListener('click', () => {
        const activeClassCheck = document.querySelector('.js-reg-tagline .tag.tag--active');

        if (tag.classList.contains('tag--active')) {

          tag.classList.remove('tag--active');

          this.nondistribWrap.style.display = 'block';
          this.distribWrap.style.display = 'none';
          this.customerWrap.style.display = 'none';

        } else {
          if (activeClassCheck !== null) {
            activeClassCheck.classList.remove('tag--active');
          }

          tag.classList.add('tag--active');

          if (tag.classList.contains('js-tag-distrib')) {
            this.nondistribWrap.style.display = 'none';
            this.distribWrap.style.display = 'block';
            this.customerWrap.style.display = 'none';
          } else if (tag.classList.contains('js-tag-customer')) {
            this.nondistribWrap.style.display = 'none';
            this.customerWrap.style.display = 'block';
            this.distribWrap.style.display = 'none';
          } else {
            this.nondistribWrap.style.display = 'block';
            this.distribWrap.style.display = 'none';
            this.customerWrap.style.display = 'none';
          }
        }

        /*if (tag.classList.contains('js-tag-distrib') && tag.classList.contains('tag--active')) {
          this.nondistribWrap.style.display = 'none';
          this.distribWrap.style.display = 'block';
          this.customerWrap.style.display = 'none';
        } else {
          this.nondistribWrap.style.display = 'block';
          this.distribWrap.style.display = 'none';
        }

        if (tag.classList.contains('js-tag-customer')) {
          this.nondistribWrap.style.display = 'none';
          this.customerWrap.style.display = 'block';
          this.distribWrap.style.display = 'none';
        } else {
          this.nondistribWrap.style.display = 'block';
          this.customerWrap.style.display = 'none';
        }*/
      });
    });
  }
}