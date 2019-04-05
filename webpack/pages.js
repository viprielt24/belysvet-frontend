const header = require('./header');
const footer = require('./footer');

/**
 * принимаем ассоциативный массив из incData.js
 * use: const regions = data.contactsRegions;
 */
const data = require('./incData');

// параметры для всех страниц
const parametersInEachPage = {
  header,
  footer,
  items: null,
  cities: data.cities
};
// страницы и параметры
const pages = {
  'main': {
    link: '/',
    parameters: {
      page: 'main',
      title: 'Белый свет 2000',
      pageName: 'Главная',
      news: data.news,
      article: data.article,
      products: data.products,
      tech: data.tech,
      promo: data.promo,
      projects: data.projects,
    }
  },
  'press': {
    parameters: {
      page: 'press',
      title: 'Пресс-центр',
      pageName: 'Пресс-центр',
      crumbs: ['Главная', 'Компания', 'Пресс-центр'],
      news: data.news,
      article: data.article,
      more: {
        href: 'javascript:void(0);',
        title: 'Больше новостей'
      },
      files: [
        {
          type: 'pdf',
          href: 'javascript:void(0);',
          text: 'Скачать фирменный стиль .PDF',
          size: '(7.5 Mb)',
        },
      ],
      tags: [
        {
          title: 'Продукция',
          active: true
        },
        {
          title: 'Жизнь компании',
          active: false
        },
        {
          title: 'Обучение и мероприятия',
          active: false
        },
        {
          title: 'Тег 1',
          active: false
        },
        {
          title: 'Тег 2',
          active: false
        },

      ]
    }
  },
  'press-inner': {
    parameters: {
      page: 'press-inner',
      title: 'Пресс-центр текстовая',
      pageName: 'INEXI TECHNOLOGY — инновации в аварийном освещении',
      crumbs: ['Главная', 'Компания', 'Пресс-центр', 'INEXI TECHNOLOGY — инновации в аварийном освещении'],
      files: data.pressInnerFiles
    }
  },
  'normative': {
    parameters: {
      page: 'normative',
      title: 'Обзор нормативной базы',
      pageName: 'Обзор нормативной базы',
      crumbs: ['Главная', 'Компания', 'Обзор нормативной базы'],
      normative: data.normative
    }
  },
  'project-inner': {
    parameters: {
      page: 'project-inner',
      title: 'ТЦ «Мега Белая дача» - холлы и магазины',
      pageName: 'ТЦ «Мега Белая дача» - холлы и магазины',
      crumbs: ['Главная', 'Компания', 'ТЦ «Мега Белая дача» - холлы и магазины'],
      files: [
        {
          'fileType': 'pdf',
          'fileHref': 'javascript:void(0);',
          'fileText': '1. Федеральный закон Российской Федерации от 30.12.2009 No 384-Фз «Технический регламент о безопасности зданий и сооружений».',
          'fileSize': '(7.5 Mb)',
        },
      ],
      video: {
        poster: '/images/temp/project-inner-video-player.png',
        buttonText: 'смотреть видео',
        iframe: '<iframe id="projectInnerYoutubePlayer" src="https://www.youtube.com/embed/0kNKPYK9cd0?autoplay=1&showinfo=0&modestbranding=1&rel=0&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      }
    }
  },
  'career': {
    parameters: {
      page: 'career',
      title: 'Карьера',
      pageName: 'Карьера',
      pageDescr: '<p>Если Вы хотите работать в динамично развивающейся компании, мечтаете о стабильной и достойно оплачиваемой работе, готовы проявить на деле свои таланты, добро пожаловать в «Белый Свет».</p><p>Мы смогли стать лидерами отечественного рынка аварийного освещения благодаря и тем, кто работает со дня основания компании, и тем, кто приходит к нам со свежими идеями.</p>',
      crumbs: ['Главная', 'Компания', 'Карьера'],
      career: data.career
    }
  },
  'tech': {
    parameters: {
      page: 'tech',
      title: 'Технические решения',
      pageName: 'Технические решения',
      pageDescr: '<p>В 2017 году команда компании «Белый свет» провела большую исследовательскую работу, чтобы классифицировать и максимально подробно и понятно представить описание и принципы действия технических решений аварийного освещения, именно поэтому было принято решение разделить полученный материал на два каталога.</p>',
      crumbs: ['Главная', 'Технические решения'],
      tech: data.tech,
      files: data.productsFiles,
      promo: data.promo,
    }
  },
  'products': {
    parameters: {
      page: 'products',
      title: 'Продукция',
      pageName: 'Продукция',
      pageDescr: '<p>Ассортиментный ряд продукции "Белый свет" насчитывает более 9 тысяч позиций, на базе которых можно сформировать готовые комплексные решения для аварийного освещения любого объекта в любой отрасли.</p>',
      crumbs: ['Главная', 'Продукция'],
      products: data.products,
      more: {
        href: 'javascript:void(0);',
        title: 'Архив и налоги'
      },
      files: data.productsFiles
    }
  },
  'projects': {
    parameters: {
      page: 'projects',
      title: 'Проекты',
      pageName: 'Проекты',
      pageDescr: '<p>Требовалось оборудование, применявшееся ранее на объектах. Организация аварийного освещения на базе Централизованной системы аварийного освещения BS-ELECTRO положительно зарекомендовало себя на развлекательных объектах — театрах, цирках, выставочных комплексах.</p>',
      crumbs: ['Главная', 'Компания', 'Проекты'],
      projects: data.projects,
      more: {
        href: 'javascript:void(0);',
        title: 'Больше новостей'
      },
    }
  },
  'company': {
    parameters: {
      page: 'company',
      title: 'Компания',
      pageName: 'Компания',
      crumbs: ['Главная', 'Компания'],
      company: data.company
    }
  },
  'thanks': {
    parameters: {
      page: 'thanks',
      title: 'Спасибо',
      pageName: 'Спасибо',
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
