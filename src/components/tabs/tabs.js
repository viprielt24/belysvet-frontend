export default class {
  constructor() {
    //elem
    this.tabsWrap = document.querySelectorAll('.js-tabs');
    //func
    this.addEvents();
  }

  addEvents() {
    //ищем все блоки с табами
    this.tabsWrap.forEach(tabWrap => {
      //если не задан начальный таб, то начинаем с 0
      const tabStart = tabWrap.dataset.tabsstart ? tabWrap.dataset.tabsstart : 0;
      this.initTabs(tabWrap, tabStart);
      tabWrap.style.opacity = 1;
    });
  }

  initTabs(tabWrap, tabStart) {
    const tabsHeaderItems = tabWrap.querySelectorAll('.js-tabs-header-item');
    const tabsContentItems = tabWrap.querySelectorAll('.js-tabs-content-item');
    //относительно родителя выбираем заголовки и контент табов
    this.changeTab(tabsHeaderItems, tabsContentItems, tabStart);
  }

  changeTab(tabsHeaderItems, tabsContentItems, tabStart) {

    tabsHeaderItems.forEach((tabsHeaderItem, index) => {

      tabsHeaderItem.addEventListener('click', event => {

        //не вешаем обработку на заголовки табов без контента
        if (tabsContentItems.length - 1 >= index) {
          const tabsHeaderItemCurrent = event.currentTarget;
          const tabsContentName = event.currentTarget.dataset.tabsname !== '' ? event.currentTarget.dataset.tabsname : false;

          //удаляем активный класс через родителя
          tabsHeaderItemCurrent.parentElement.querySelector('.js-tabs-header-item.active').classList.remove('active');

          //добавляем активный класс на кликнутый таб
          tabsHeaderItemCurrent.classList.add('active');

          //скрываем контент по классу
          tabsContentItems.forEach(tabsContentItem => {
            tabsContentItem.classList.add('tabs-content-hidden');
          });

          //кроме найденного по индексу, если не указано название класса в data-tabsname
          if (tabsContentName) {
            tabsContentItems.forEach(tabsContentItem => {

              //показываем контент по названию класса в data-tabsname
              if (tabsContentItem.classList.contains(tabsContentName)) {
                tabsContentItem.classList.remove('tabs-content-hidden');
              }
            });
          } else {
            tabsContentItems[index].classList.remove('tabs-content-hidden');
          }
        }
      });
    });
    //если активный таб указан в data-tabsstart
    tabsHeaderItems[tabStart].click();
  }
}