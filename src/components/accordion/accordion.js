import romanize from 'romanize';

export default class {
  constructor() {
    this.accordionItems = document.querySelectorAll('.js-accordion__item');
    this.accordionItemsNumber = document.querySelectorAll('.js-accordion__num');
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

    this.accordionItemsNumber.forEach(number => {
      let arabNumber = number.innerText;
      number.innerText = romanize(arabNumber) + '.';
    });
  }

  slideDown() {
    this.accordionItems.forEach(item => {
      const itemHeader = item.querySelector('.js-accordion__header');
      const itemContent = item.querySelector('.js-accordion__content');
      const itemContentHeight = itemContent.clientHeight;
      itemContent.style.height = 0;

      itemHeader.addEventListener('click', (event) => {
        //главный аккордеон
        if (item.classList.contains('active')) {
          //аккордеон в аккордеоне закрываем
          item.classList.remove('active');
          if (item.classList.contains('accordion__item--parent')) {
            itemContent.style.height = itemContent.clientHeight + 'px';
            setTimeout(() => {
              itemContent.style.height = 0;
              this.accordInnerReset(item);
            }, 100);
          } else {
            itemContent.style.height = 0;
          }
        } else {
          //аккордеон в аккордеоне открываем
          if (item.classList.contains('accordion__item--parent')) {
            item.classList.add('active');
            //считаем высоту заголовков
            const itemChildsHeaders = item.querySelectorAll('.js-accordion__inner-header');
            let itemChildsHeadersHeight = null;
            itemChildsHeaders.forEach(child => {
              itemChildsHeadersHeight = itemChildsHeadersHeight + child.clientHeight;
            });
            //считаем высоту закрывашки
            const itemChildClose = item.querySelector('.js-accordion__close');
            let itemChildCloseHeight = itemChildClose.clientHeight +
              parseFloat(getComputedStyle(itemChildClose).marginTop);
            //открываем родительский контент и убираем посчитанную высоту
            itemContent.style.height = 26 + itemChildsHeadersHeight + itemChildCloseHeight + 'px';
            setTimeout(() => {
              itemContent.style.height = 'auto';
            }, 300);
          } else {
            item.classList.add('active');
            itemContent.style.height = 52 + itemContentHeight + 'px';
          }
        }
      });
    });
  }

  slideUp() {
    this.accordionItemsCloseUp.forEach(close => {
      close.addEventListener('click', () => {

        const closeParent = close.closest('.js-accordion__item');
        const closeParentContent = closeParent.querySelector('.js-accordion__content');
        closeParent.classList.remove('active');

        if (closeParent.classList.contains('accordion__item--parent')) {
          closeParentContent.style.height = closeParentContent.clientHeight + 'px';
          setTimeout(() => {
            closeParentContent.style.height = 0;
            this.accordInnerReset(closeParent);
          }, 100);
        } else {
          closeParentContent.style.height = 0;
        }
      });
    });
  }

  slideInnerDown() {
    this.accordionInnerItems.forEach(inner => {
      const innerHeader = inner.querySelector('.js-accordion__inner-header');
      const innerContent = inner.querySelector('.js-accordion__inner-content');
      const innerContentHeight = innerContent.clientHeight;
      innerContent.style.height = 0;

      innerHeader.addEventListener('click', (event) => {
        if (inner.classList.contains('active-inner')) {
          inner.classList.remove('active-inner');
          innerContent.style.height = 0;
        } else {
          inner.classList.add('active-inner');
          innerContent.style.height = 48 + innerContentHeight + 'px';
        }
      });
    });
  }

  slideInnerUp() {
    this.accordionInnerItemsCloseUp.forEach(close => {
      close.addEventListener('click', () => {
        const closeParent = close.closest('.js-accordion__inner');
        closeParent.classList.remove('active-inner');
        closeParent.querySelector('.js-accordion__inner-content').style.height = 0;
      });
    });
  }

  accordInnerReset(item) {
    const innerHeaders = item.querySelectorAll('.js-accordion__inner');
    innerHeaders.forEach(header => {
      header.classList.remove('active-inner');
    });

    const innerContents = item.querySelectorAll('.js-accordion__inner-content');
    innerContents.forEach(content => {
      content.style.height = 0;
    });
  }
}