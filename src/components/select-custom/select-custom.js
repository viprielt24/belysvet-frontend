import Choices from 'choices.js';

export default class {
  constructor() {
    //elems
    this.selection = document.querySelectorAll('.js-select-custom');
    //props
    //events
    this.addEvents();
  }

  addEvents() {
    this.selection.forEach(select => {
      new Choices(select, {
        searchFloor: 2,
        shouldSort: false,
        itemSelectText: '',
        noResultsText: 'Не найдено',
        renderSelectedChoices: true,
        searchPlaceholderValue: 'Поиск',
      });
    });
  }
}