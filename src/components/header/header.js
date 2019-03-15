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
      itemSelectText: '',
      noResultsText: 'Не найдено'
    });
  }
}