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
      lights: data.lights,
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
      tags: data.tagline
    }
  },
  'press-inner': {
    parameters: {
      page: 'press-inner',
      title: 'Пресс-центр текстовая',
      pageName: 'INEXI TECHNOLOGY — инновации в аварийном освещении',
      crumbs: ['Главная', 'Компания', 'Пресс-центр', 'INEXI TECHNOLOGY — инновации в аварийном освещении'],
      files: data.pressInnerFiles,
      video: {
        poster: '/images/temp/project-inner-video-player.png',
        buttonText: 'смотреть видео',
        iframe: '<iframe id="projectInnerYoutubePlayer" src="https://www.youtube.com/embed/0kNKPYK9cd0?autoplay=1&showinfo=0&modestbranding=1&rel=0&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      }
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
        title: 'Архив и аналоги'
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
      projectsSolution: [
        {
          title: 'Техническое решение №1. Автономная система аварийного освещения с функцией TELECONTROL',
          value: '1',
          selected: false
        },
        {
          title: 'Техническое решение №2. Автономная система аварийного освещения с функциями AUTOTEST, TELECOMAND, FELS и MSS ',
          value: '1',
          selected: false
        },
        {
          title: 'Техническое решение №3. Автономная система аварийного освещения ZARIUS DALI ',
          value: '1',
          selected: false
        },],
      projectsPosition: [
        {
          title: 'BS-ARUNA-81-L1-INEXI2',
          value: '1',
          selected: false
        },
        {
          title: 'BS-ARUNA-81-L2-INEXI2',
          value: '1',
          selected: false
        },
        {
          title: 'BS-ARUNA-81-L3-INEXI2',
          value: '1',
          selected: false
        },
        {
          title: 'BS-ARUNA-81-L4-INEXI2',
          value: '1',
          selected: false
        },
      ],
      projectsSegment: [
        {
          title: 'Медицинские учреждения',
          value: '1',
          selected: false
        },
        {
          title: 'HORECA',
          value: '1',
          selected: false
        },
        {
          title: 'Инфраструктура транспорта и подземные сооружения',
          value: '1',
          selected: false
        },
        {
          title: 'Объекты культуры',
          value: '1',
          selected: false
        },
      ],
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
  'study': {
    parameters: {
      page: 'study',
      title: 'Учебный центр',
      pageName: 'Учебный центр',
      pageDescr: '<div class="row"><div class="col-sm-6"><p>Работа со сложным оборудованием требует специальных знаний. И с каждым годом строительные и монтажные компании понимают смысл этой аксиомы все реалистичнее. <br />Однако никто не научит ваших сотрудников работе с оборудованием лучше, чем его производитель.</p></div><div class="col-sm-6"><p>Компания «Белый свет 2000» оказывает не только информационные сервисные услуги в поддержку клиентам, но и проводит полноценное специализированное обучение в Школе Аварийного Освещения.</p></div></div>',
      crumbs: ['Главная', 'Учебный центр'],
      seminars: data.studySeminars,
      trainings: data.studyTraining,
      tags: data.tagline,
      taglineClear: true,
      more: {
        href: 'javascript:void(0);',
        title: 'Показать еще'
      },
    }
  },
  'lights': {
    parameters: {
      page: 'lights',
      title: 'Световые приборы',
      pageName: 'Световые приборы',
      pageDescr: '<p>Ассортиментный ряд продукции "Белый свет" насчитывает более 9 тысяч позиций, на базе которых можно сформировать готовые комплексные решения для аварийного освещения любого объекта в любой отрасли.</p>',
      crumbs: ['Главная', 'Продукция', 'Световые приборы'],
      tags: data.tagline,
      taglineClear: true,
      lights: data.lights,
      files: data.productsFiles,
      promo: data.promo,
    }
  },
  'connect': {
    parameters: {
      page: 'connect',
      title: 'Связь с компанией',
      pageName: 'Связь с компанией',
      pageDescr: 'Какой-то текст. Компьютеры коренным образом изменили жизнь каждого человека. Несколько десятилетий назад люди даже не знали ничего об этих электронных устройствах, тогда как в наши дни даже маленький ребенок может управлять этой машиной. Почти все современные технологии зависит от компьютеров, которые используются для хранения данных: файлов, секретной информации, банковских операций и прочего.',
      crumbs: ['Главная', 'Связь с компанией'],
      connect: data.connect,
      connectSubject: [
        {
          title: 'Общие вопросы',
          value: '1',
          selected: false
        },
        {
          title: 'Подбор оборудования',
          value: '1',
          selected: false
        },
        {
          title: 'Техническая консультация',
          value: '1',
          selected: false
        },
        {
          title: 'Заявка на проектирование',
          value: '1',
          selected: false
        },
        {
          title: 'Заявка на сервис',
          value: '1',
          selected: false
        }
      ],
    }
  },
  'registration': {
    parameters: {
      page: 'registration',
      title: 'Регистрация',
      pageName: 'Регистрация',
      crumbs: ['Главная', 'Регистрация'],
      registrationCountry: [
        {
          title: 'Россия',
          value: '11234',
          selected: false
        },
        {
          title: 'Украина',
          value: '1',
          selected: false
        },
        {
          title: ' Беларусь',
          value: '1',
          selected: false
        },
        {
          title: ' Казахстан',
          value: '1',
          selected: false
        },
      ],
      registrationCity: [
        {
          title: 'Москва и Московская область',
          value: '1',
          selected: false
        },
        {
          title: 'Санкт-Петербург',
          value: '1',
          selected: false
        },
        {
          title: ' Абакан',
          value: '1',
          selected: false
        },
        {
          title: ' Альметьевск',
          value: '1',
          selected: false
        },
      ],
      registrationOrganization: [
        {
          title: 'Ассоциация «Русский Свет»',
          value: '1',
          selected: false
        },
        {
          title: 'Компания ЭТМ',
          value: '1',
          selected: false
        },
        {
          title: ' АО «Форум Электро»',
          value: '1',
          selected: false
        },
        {
          title: ' ООО «Элком-Электро»',
          value: '1',
          selected: false
        },
      ],
    }
  },
  'brands': {
    parameters: {
      page: 'brands',
      title: 'Торговые марки',
      pageName: 'Торговые марки',
      pageDescr: '<p>Компьютеры коренным образом изменили жизнь каждого человека. Несколько десятилетий назад люди даже не знали ничего об этих электронных устройствах, тогда как в наши дни даже маленький ребенок может управлять этой машиной.</p>',
      crumbs: ['Главная', 'Компания', 'Торговые марки'],
      products: data.products,
      more: {
        href: 'javascript:void(0);',
        title: 'Архив и налоги'
      },
      files: data.productsFiles
    }
  },
  'buyers': {
    parameters: {
      page: 'buyers',
      title: 'Покупателю',
      pageName: 'Покупателю',
      pageDescr: '<p>Какой-то вводный текст про раздел вопрос-ответ, о том что в этом разделе собраны ответы на самые частые вопросы, о том, что если вы не нашли ответа на свой вопрос свяжитесь с нами и мы с удовольствием вам ответим. Какой-то вводный текст про раздел вопрос-ответ, о том что в этом разделе собраны ответы на самые частые вопросы, о том, что если вы не нашли ответа на свой вопрос свяжитесь с нами и мы с удовольствием вам ответим. Какой-то вводный текст про раздел вопрос-ответ, о том что в этом разделе собраны ответы на самые частые вопросы.</p>',
      crumbs: ['Главная', 'Покупателю'],
      career: data.buyers
    }
  },
  'contacts': {
    parameters: {
      page: 'contacts',
      title: 'Контакты',
      pageName: 'Контакты',
      crumbs: ['Главная', 'Компания', 'Контакты'],
      connect: data.connect,
      connectSubject: [
        {
          title: 'Общие вопросы',
          value: '1',
          selected: false
        },
        {
          title: 'Подбор оборудования',
          value: '1',
          selected: false
        },
        {
          title: 'Техническая консультация',
          value: '1',
          selected: false
        },
        {
          title: 'Заявка на проектирование',
          value: '1',
          selected: false
        },
        {
          title: 'Заявка на сервис',
          value: '1',
          selected: false
        }
      ],
    }
  },
  'wheretobuy': {
    parameters: {
      page: 'wheretobuy',
      title: 'Где купить',
      pageName: 'Где купить',
      crumbs: ['Главная', 'Где купить'],
      registrationCountry: [
        {
          title: 'Россия',
          value: 'Russia',
          selected: false
        },
        {
          title: 'Украина',
          value: 'Ukraine',
          selected: false
        },
        {
          title: ' Беларусь',
          value: 'Belarus',
          selected: false
        },
        {
          title: ' Казахстан',
          value: 'Kazakhstan',
          selected: false
        },
      ],
      registrationCity: [
        {
          title: 'Москва и Московская область',
          value: '1',
          selected: false
        },
        {
          title: 'Санкт-Петербург',
          value: '1',
          selected: false
        },
        {
          title: ' Абакан',
          value: '1',
          selected: false
        },
        {
          title: ' Альметьевск',
          value: '1',
          selected: false
        },
      ],
    },
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
