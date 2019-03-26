export default class {
  constructor() {
    this.accordionItems = document.querySelectorAll('.js-accordion__item');
    this.accordionItemsCloseUp = document.querySelectorAll('.js-accordion__close-text');

    this.accordionInnerItems = document.querySelectorAll('.js-accordion__inner');
    this.accordionInnerItemsCloseUp = document.querySelectorAll('.js-accordion__close-inner');

    this.addEvents();
  }

  addEvents() {
    this.slideDown();
    this.slideUp();
    this.slideInnerDown();
    this.slideInnerUp();
  }

  slideDown() {
    this.accordionItems.forEach(item => {
      const itemHeader = item.querySelector('.js-accordion__header');
      const itemContent = item.querySelector('.js-accordion__content');

      itemHeader.addEventListener('click', (event) => {
        let itemActive = document.querySelector('.js-accordion__item.active');
        if (itemActive && !item.classList.contains('active')) {
          const itemActiveContent = itemActive.querySelector('.js-accordion__content');
          itemActive.classList.remove('active');
          itemActiveContent.style.display = 'none';
        }
        item.classList.add('active');
        itemContent.style.display = '';
      });
    });
  }

  slideUp() {
    this.accordionItemsCloseUp.forEach(close => {
      close.addEventListener('click', () => {
        const closeParent = close.closest('.js-accordion__item');
        closeParent.classList.remove('active');
        closeParent.querySelector('.js-accordion__content').style.display = 'none';
      });
    });
  }

  slideInnerDown() {
    this.accordionInnerItems.forEach(inner => {
      const innerHeader = inner.querySelector('.js-accordion__inner-header');
      const innerContent = inner.querySelector('.js-accordion__inner-content');

      innerHeader.addEventListener('click', (event) => {
        let itemActive = document.querySelector('.js-accordion__inner.active-inner');
        if (itemActive && !inner.classList.contains('active-inner')) {
          const itemActiveContent = itemActive.querySelector('.js-accordion__inner-content');
          itemActive.classList.remove('active-inner');
          itemActiveContent.style.display = 'none';
        }
        inner.classList.add('active-inner');
        innerContent.style.display = '';
      });
    });
  }

  slideInnerUp() {
    this.accordionInnerItemsCloseUp.forEach(close => {
      close.addEventListener('click', () => {
        const closeParent = close.closest('.js-accordion__inner');
        closeParent.classList.remove('active-inner');
        closeParent.querySelector('.js-accordion__inner-content').style.display = 'none';
      });
    });
  }
}