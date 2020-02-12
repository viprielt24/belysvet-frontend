import romanize from 'romanize';

export default class {
  constructor() {
    this.accordionsWrap = document.querySelectorAll('.accordion');
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

    this.accordionsWrap.forEach(accordionWrap => {
      accordionWrap.style.opacity = '1';
    });
  }

  slideDown() {
    this.accordionItems.forEach(item => {
      const itemHeader = item.querySelector('.js-accordion__header');
      const itemContent = item.querySelector('.js-accordion__content');
      //кнопа закрыть главного аккордеона
      // const itemContentCloseBtn = item.querySelector('.js-accordion__close');
      // const itemContentCloseBtnHeight = itemContentCloseBtn.clientHeight;

      //считаем высоту контента
      // let itemContentHeight = itemContent.clientHeight;
      let itemContentHeight = Math.max(
        itemContent.scrollHeight,
        itemContent.offsetHeight,
        itemContent.clientHeight,
      );
      itemContent.style.height = 0;
      //считаем высоту закрывашки контента
      const itemChildCloseHeight = item.querySelector('.js-accordion__close').clientHeight;

      itemHeader.addEventListener('click', (event) => {
        //главный аккордеон
        if (item.classList.contains('active')) {
          //аккордеон в аккордеоне закрываем
          item.classList.remove('active');
          if (item.classList.contains('accordion__item--parent')) {
            const itemContentWrapH = itemContent.querySelector('.accordion__content-wrap').clientHeight;
            const itemContentFilesH = itemContent.querySelector('.files') !== null ? itemContent.querySelector('.files').clientHeight : 0;
            const itemContentParentWrapH = itemContent.querySelector('.js-accordion__inner-wrap').clientHeight;
            itemContent.style.height = itemContentWrapH + itemContentFilesH + itemContentParentWrapH + itemChildCloseHeight + 'px';
            setTimeout(() => {
              itemContent.style.height = 0;
              this.accordInnerReset(item);
            }, 50);
          } else {
            const itemContentWrapH = itemContent.querySelector('.accordion__content-wrap').clientHeight;
            itemContent.style.height = itemContentWrapH + itemChildCloseHeight + 'px';
            setTimeout(()=>{
              itemContent.style.height = 0;
            },100)
          }
        } else {
          //аккордеон в аккордеоне открываем
          if (item.classList.contains('accordion__item--parent')) {
            item.classList.add('passive');
            const itemContentWrapH = itemContent.querySelector('.accordion__content-wrap').clientHeight;
            const itemContentFilesH = itemContent.querySelector('.files') !== null ? itemContent.querySelector('.files').clientHeight : 0;
            const itemContentParentWrapH = itemContent.querySelector('.js-accordion__inner-wrap').clientHeight;
            itemContent.style.height = itemContentWrapH + itemContentFilesH + itemContentParentWrapH + itemChildCloseHeight + 'px';
            setTimeout(() => {
              item.classList.remove('passive');
              item.classList.add('active');
              itemContent.style.height = 'auto';
            }, 600);
          } else {
            //главный аккордеон открываем
            item.classList.add('passive');
            const itemContentWrapH = itemContent.querySelector('.accordion__content-wrap').clientHeight;
            itemContent.style.height = itemContentWrapH + itemChildCloseHeight + 'px';
            setTimeout(()=>{
              item.classList.remove('passive');
              item.classList.add('active');
              itemContent.style.height = 'auto'
            },600)
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
        const closeParentWrapH = closeParent.querySelector('.accordion__content-wrap').clientHeight;
        const itemContentFilesH = closeParent.querySelector('.files') !== null ? itemContent.querySelector('.files').clientHeight:0;
        const itemContentParentWrapH = closeParent.querySelector('.js-accordion__inner-wrap') !== null ? closeParent.querySelector('.js-accordion__inner-wrap').clientHeight:0;
        const itemChildCloseHeight = closeParent.querySelector('.js-accordion__close').clientHeight;
        closeParent.classList.remove('active');

        if (closeParent.classList.contains('accordion__item--parent')) {
          closeParentContent.style.height = closeParentContent.clientHeight + 'px';
          setTimeout(() => {
            closeParentContent.style.height = 0;
            this.accordInnerReset(closeParent);
          }, 100);
        } else {
          closeParentContent.style.height = closeParentWrapH + itemChildCloseHeight + 'px';
          setTimeout(()=>{
            closeParentContent.style.height = 0;
          },100)
        }
      });
    });
  }

  slideInnerDown() {
    this.accordionInnerItems.forEach(inner => {
      const innerHeader = inner.querySelector('.js-accordion__inner-header');
      const innerContent = inner.querySelector('.js-accordion__inner-content');
      const innerContentWrapH = innerContent.querySelector('.accordion__inner-content-wrap').clientHeight;
      const innerContentCloseH = innerContent.querySelector('.accordion__close').clientHeight;
      innerContent.style.height = 0;

      innerHeader.addEventListener('click', (event) => {
        if (inner.classList.contains('active-inner')) {
          inner.classList.remove('active-inner');
          innerContent.style.height = 0;
        } else {
          inner.classList.add('active-inner');
          innerContent.style.height = innerContentWrapH + innerContentCloseH + 'px';
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