import './connect.css';
import Choices from 'choices.js';

export default class {
  constructor() {
    this.select = document.querySelector('.js-select-subject');
    this.addEvents();
  }

  addEvents() {
    new Choices(this.select, {
      searchEnabled: false,
      placeholder: false,
      shouldSort: false,
      itemSelectText: '',
      renderSelectedChoices: true,
    });
  }
}