import Choices from 'choices.js'

export default class {
  constructor() {
    //elems
    this.citySelect = document.querySelector('.js-header__top-city-select');
    //props
    //events
    this.addEvents();
  }

  addEvents() {
    new Choices(this.citySelect,{
      searchFloor: 2,
      shouldSort: false,
      itemSelectText: '',
      noResultsText: 'Не найдено',
      renderSelectedChoices: true,
      searchPlaceholderValue: 'Поиск',
    });
  }
}