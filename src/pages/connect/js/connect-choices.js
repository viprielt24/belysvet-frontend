import Choices from 'choices.js';

export default class {
  constructor() {
    this.selects = document.querySelectorAll('.js-connect .js-select-subject');
    this.addEvents();
  }

  addEvents() {
    this.selects.forEach(select => {
      new Choices(select, {
        searchEnabled: false,
        placeholder: false,
        shouldSort: false,
        itemSelectText: '',
        renderSelectedChoices: true,
      });
    });
  }
}