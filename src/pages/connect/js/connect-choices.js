import Choices from 'choices.js';

export default class ConnectChoices {
  constructor() {
    this.selects = document.querySelectorAll('.js-connect .js-select-subject');
    this.selectsFrom = document.querySelector('.js-connect .js-select-connect-from');
    this.selectsTo = document.querySelector('.js-connect .js-select-connect-to');
    this.selectsInst;
    this.selectsFromInst;
    this.selectsToInst;
    this.addEvents();
  }

  addEvents() {
    this.selects.forEach(select => {
      this.selectsInst = new Choices(select, {
        searchEnabled: false,
        placeholder: false,
        shouldSort: false,
        itemSelectText: '',
        renderSelectedChoices: true,
      });
    });

    this.selectsFromInst = new Choices(this.selectsFrom, {
      searchEnabled: false,
      placeholder: false,
      shouldSort: false,
      itemSelectText: '',
      renderSelectedChoices: true,
    });

    this.selectsToInst = new Choices(this.selectsTo, {
      searchEnabled: false,
      placeholder: false,
      shouldSort: false,
      itemSelectText: '',
      renderSelectedChoices: true,
    });
  }
}