const header = require('./header');
const footer = require('./footer');

/**
 * принимаем ассоциативный массив из incData.js
 * use: const regions = data.contactsRegions;
 */
// const data = require('./incData');

// параметры для всех страниц
const parametersInEachPage = {
  header,
  footer,
  items: null
};
// страницы и параметры
const pages = {
  'main': {
    link: '/',
    parameters: {
      page: 'main',
      title: 'Белый свет 2000',
      pageName: 'Главная',
    }
  },
  'press': {
    parameters: {
      page: 'press',
      title: 'Пресс-центр',
      pageName: 'Пресс-центр',
      crumbs:['Главная', 'Компания', 'Пресс-центр'],
      files: [
        {
          'fileType': 'pdf',
          'fileHref': 'javascript:void(0);',
          'fileText': 'Скачать фирменный стиль .PDF',
          'fileSize': '(7.5 Mb)',
        },
      ]
    }
  },
  'press-inner': {
    parameters: {
      page: 'press-inner',
      title: 'Пресс-центр текстовая',
      pageName: 'INEXI TECHNOLOGY — инновации в аварийном освещении',
      crumbs:['Главная', 'Компания', 'Пресс-центр', 'INEXI TECHNOLOGY — инновации в аварийном освещении'],
      files: [
        {
          'fileType': 'pdf',
          'fileHref': 'javascript:void(0);',
          'fileText': 'Скачать статью .PDF',
          'fileSize': '(7.5 Mb)',
        },
        {
          'fileType': 'doc',
          'fileHref': 'javascript:void(0);',
          'fileText': 'Скачать файл с длинным названием .DOCX',
          'fileSize': '(699,4 Kb)',
        },
        {
          'fileType': 'xls',
          'fileHref': 'javascript:void(0);',
          'fileText': 'Скачать файл .XLSX',
          'fileSize': '(699,4 Kb)',
        },
        {
          'fileType': 'zip',
          'fileHref': 'javascript:void(0);',
          'fileText': 'Скачать архив .ZIP',
          'fileSize': '(699,4 Kb)',
        },

      ]
    }
  },
};
// Страницы проекта
pages.pages = {
  parameters: {
    title: 'Страницы проекта',
    pages
  }
};
// прокидываем параметры для всех страниц
for (let pageName in pages) {
  const page = pages[pageName];

  const parameters = page.parameters;
  parameters.page = pageName;
  page.parameters = {};
  Object.assign(page.parameters, parametersInEachPage, parameters);
}

module.exports = pages;
