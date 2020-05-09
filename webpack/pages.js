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
  cities: data.cities,
  batch: data.batch,
  spec: data.spec,
  partners: data.partners,
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
  ]
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
      segments: data.segments,
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
      tags: data.tagline,
      taglineClear: true,
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
  'projects': {
    parameters: {
      page: 'projects',
      title: 'Проекты',
      pageName: 'Проекты',
      pageDescr: '<p>Требовалось оборудование, применявшееся ранее на объектах. Организация аварийного освещения на базе Централизованной системы аварийного освещения BS-ELECTRO положительно зарекомендовало себя на развлекательных объектах — театрах, цирках, выставочных комплексах.</p>',
      crumbs: ['Главная', 'Компания', 'Проекты'],
      projects: data.projects,
      projectsSolution: data.solutions,
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
  'normative': {
    parameters: {
      page: 'normative',
      title: 'Обзор нормативной базы',
      pageName: 'Обзор нормативной базы',
      crumbs: ['Главная', 'Компания', 'Обзор нормативной базы'],
      normative: data.normative
    }
  },
  'study': {
    parameters: {
      page: 'study',
      title: 'Обучение',
      pageName: 'Обучение',
      pageDescr: '<p>Работа со сложным оборудованием требует специальных знаний. И с каждым годом строительные и монтажные компании понимают смысл этой аксиомы все реалистичнее. <br />Однако никто не научит ваших сотрудников работе с оборудованием лучше, чем его производитель.</p><p>Компания «Белый свет 2000» оказывает не только информационные сервисные услуги в поддержку клиентам, но и проводит полноценное специализированное обучение в Школе Аварийного Освещения.</p>',
      crumbs: ['Главная', 'Обучение'],
      seminars: data.studySeminars,
      trainings: data.studyTraining,
      article: data.article,
      tags: data.tagline,
      taglineClear: true,
      more: {
        href: 'javascript:void(0);',
        title: 'Показать еще'
      },
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
  'lights': {
    parameters: {
      page: 'lights',
      title: 'Световые приборы',
      pageName: 'Световые приборы',
      catalogDescr: '<p>Ассортиментный ряд продукции "Белый свет" насчитывает более 9 тысяч позиций, на базе которых можно сформировать готовые комплексные решения для аварийного освещения любого объекта в любой отрасли.</p>',
      crumbs: ['Главная', 'Продукция', 'Световые приборы'],
      tags: data.tagline,
      taglineClear: true,
      lights: data.lights,
      files: data.productsFiles,
      promo: data.promo,
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
  'connect': {
    parameters: {
      page: 'connect',
      title: 'Связь с компанией',
      pageName: 'Связь с компанией',
      pageDescr: 'Какой-то текст. Компьютеры коренным образом изменили жизнь каждого человека. Несколько десятилетий назад люди даже не знали ничего об этих электронных устройствах, тогда как в наши дни даже маленький ребенок может управлять этой машиной. Почти все современные технологии зависит от компьютеров, которые используются для хранения данных: файлов, секретной информации, банковских операций и прочего.',
      crumbs: ['Главная', 'Связь с компанией'],
      connect: data.connect,
      connectSubject: data.connectSubject,
      connectFrom: data.connectFrom,
      connectTo: data.connectTo,
      connectTime: data.connectTime,
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
  'contacts': {
    parameters: {
      page: 'contacts',
      title: 'Контакты',
      pageName: 'Контакты',
      crumbs: ['Главная', 'Компания', 'Контакты'],
      connect: data.connect,
      connectSubject: data.connectSubject,
      connectFrom: data.connectFrom,
      connectTo: data.connectTo,
      connectTime: data.connectTime,
    }
  },
  'thanks': {
    parameters: {
      page: 'thanks',
      title: 'Спасибо',
      pageName: 'Спасибо',
    }
  },
  'brands': {
    parameters: {
      page: 'brands',
      title: 'Торговые марки',
      pageName: 'Торговые марки',
      pageDescr: '<p>Компьютеры коренным образом изменили жизнь каждого человека. Несколько десятилетий назад люди даже не знали ничего об этих электронных устройствах, тогда как в наши дни даже маленький ребенок может управлять этой машиной.</p>',
      crumbs: ['Главная', 'Компания', 'Торговые марки'],
      products: data.brands,
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
      title: 'Часто задаваемые вопросы',
      pageName: 'Часто задаваемые вопросы',
      pageDescr: '<p>Какой-то вводный текст про раздел вопрос-ответ, о том что в этом разделе собраны ответы на самые частые вопросы, о том, что если вы не нашли ответа на свой вопрос свяжитесь с нами и мы с удовольствием вам ответим. Какой-то вводный текст про раздел вопрос-ответ, о том что в этом разделе собраны ответы на самые частые вопросы, о том, что если вы не нашли ответа на свой вопрос свяжитесь с нами и мы с удовольствием вам ответим. Какой-то вводный текст про раздел вопрос-ответ, о том что в этом разделе собраны ответы на самые частые вопросы.</p>',
      crumbs: ['Главная', 'Покупателю', 'Как купить?'],
      buyers: data.buyers
    }
  },
  'wheretobuy': {
    parameters: {
      page: 'wheretobuy',
      title: 'Где купить',
      pageName: 'Где купить',
      crumbs: ['Главная', 'Где купить'],
      wheretobuy: data.wheretobuy,
      registrationDealers: [
        {
          title: 'Дилер 1',
          value: 'dealer-1',
          selected: false
        },
        {
          title: 'Дилер 2',
          value: 'dealer-2',
          selected: false
        },
        {
          title: 'Дилер 3',
          value: 'dealer-3',
          selected: false
        },
        {
          title: 'Дилер 4',
          value: 'dealer-4',
          selected: false
        },
      ],
      registrationCountry: [
        {
          title: 'Россия',
          value: 'Russia',
          selected: true
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
          value: 'moscow',
          selected: true
        },
        {
          title: 'Санкт-Петербург',
          value: 'piter',
          selected: false
        },
        {
          title: ' Армавир',
          value: 'armavir',
          selected: false
        },
        {
          title: ' Абакан',
          value: 'abakan',
          selected: false
        },
      ],
    },
  },
  'aruna': {
    parameters: {
      page: 'aruna',
      title: 'Световые приборы аварийного освещения, серия ARUNA / KONTUR',
      pageName: 'Световые приборы аварийного освещения, серия ARUNA / KONTUR',
      crumbs: ['Главная', 'Продукция', 'Световые приборы аварийного освещения', 'Световые приборы аварийного освещения ARUNA'],
      lights: data.lights,
      tags: data.signone,
      tagsCompatibility: data.compatibility,
      parts: data.parts,
      files: data.productsFiles,
      galleryCounter: true,
      galleryCopyright: true,
      uid: data.uid,
      purpose: data.purpose,
      projectsSolution: data.solutions,
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
    }
  },
  'aruna-product': {
    parameters: {
      page: 'aruna-product',
      title: 'Световой прибор аварийного освещения BS-ARUNA-81-L1-INEXI2',
      pageName: 'Световой прибор аварийного освещения BS-ARUNA-81-L1-INEXI2',
      crumbs: ['Главная', 'Продукция', 'Световые приборы аварийного освещения', 'Световые приборы аварийного освещения ARUNA', 'Световой прибор аварийного освещения BS-ARUNA-81-L1-INEXI2'],
      lights: data.lights,
      productItems: data.productItems,
      tags: data.signone,
      tagsCompatibility: data.compatibility,
      parts: data.parts,
      files: data.productsFiles,
      galleryCounter: true,
      galleryCopyright: true,
      uid: data.uid,
      purpose: data.purpose,
      projectsSolution: data.solutions,
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
    }
  },

  'empowers': {
    parameters: {
      page: 'empowers',
      title: 'Блоки аварийного питания',
      pageName: 'Блоки аварийного питания',
      crumbs: ['Главная', 'Продукция', 'Блоки аварийного питания'],
      catalogTitle: 'Блоки аварийного питания с функцией TELECONTROL',
      catalogDescr: '<p>Групповая аккумуляторная установка (ГаУ) — источник электроснабжения со стандартным выходным напряжением, предназначенный для питания нескольких потребителей в пределах одной пожарной зоны и состоящий как минимум из одной аккумуляторной батареи, автоматического зарядного, контрольно-испытательного и распределительного устройств.</p>',
      tags: data.tagline,
      taglineClear: true,
      lights: data.empowers,
      files: data.productsFiles,
      promo: data.promo,
    }
  },
  'emunit': {
    parameters: {
      page: 'emunit',
      title: 'Блок аварийного питания INEXI',
      pageName: 'Блок аварийного питания INEXI',
      crumbs: ['Главная', 'Продукция', 'Блоки аварийного питания', 'Серия INEXI'],
      tags: data.emunit,
      parts: data.parts,
      files: data.productsFiles,
      galleryCounter: true,
      galleryCopyright: true,
    }
  },
  'shields': {
    parameters: {
      page: 'shields',
      title: 'Щиты аварийного освещения',
      pageName: 'Щиты аварийного освещения',
      crumbs: ['Главная', 'Продукция', 'Щиты аварийного освещения'],
      tags: data.tagline,
      taglineClear: true,
      lights: data.shields,
      files: data.productsFiles,
      promo: data.promo,
      catalogDescr: '<p>Щит аварийного освещения — устройство, в котором установлены аппараты защиты и коммутации групповых цепей световых приборов аварийного освещения (аО), а также дополнительное оборудование, предназначенное для:</p> <ul> <li>контроля и управления групповыми цепями аО,</li> <li>контроля конечных цепей рабочего освещения (РО),</li> <li>индикации состояния групповых цепей аО и РО,</li> <li>приема сигналов от системы пожарной сигнализации (аПС),</li> <li>приема и передачи сигналов в удаленные устройства мониторинга и управления системой аварийного освещения.</li></ul>'
    }
  },
  'stands': {
    parameters: {
      page: 'stands',
      title: 'Центральные аккумуляторные установки и источники бесперебойного питания',
      pageName: 'Центральные аккумуляторные установки и источники бесперебойного питания',
      crumbs: ['Главная', 'Продукция', 'Центральные аккумуляторные установки и источники бесперебойного питания'],
      tags: data.tagline,
      taglineClear: true,
      lights: data.stands,
      files: data.productsFiles,
      promo: data.promo,
      catalogDescr: '<p>Центральная аккумуляторная установка (ЦаУ) — источник электроснабжения со стандартным напряжением выхода, обычно предназначенный для питания нескольких потребителей и состоящий как минимум из одной аккумуляторной батареи, автоматического зарядного, контрольно-испытательного и распределительного устройств.</p>'
    }
  },
  'panels': {
    parameters: {
      page: 'panels',
      title: 'Пульты управления аварийным освещением',
      pageName: 'Пульты управления аварийным освещением',
      crumbs: ['Главная', 'Продукция', 'Пульты управления аварийным освещением'],
      tags: data.tagline,
      taglineClear: true,
      lights: data.panels,
      files: data.productsFiles,
      promo: data.promo,
      catalogDescr: '<p>Дистанционный пульт (Белый свет — пульт управления аварийным освещением) — элемент системы, получающий и/или передающий информацию от световых приборов аварийного освещения и/или для них, который также может осуществлять индикацию результатов испытаний.</p>'
    }
  },
  'signs': {
    parameters: {
      page: 'signs',
      title: 'Знаки безопасности',
      pageName: 'Знаки безопасности',
      crumbs: ['Главная', 'Продукция', 'Знаки безопасности'],
      lights: data.signs,
      files: data.productsFiles,
      promo: data.promo,
      catalogDescr: '<p>Компания «Белый свет» поддерживает государственную программу по созданию доступной среды для маломобильных групп населения. В нашем ассортименте вы можете подобрать все необходимые для этого знаки безопасности.</p>'
    }
  },
  'signone': {
    parameters: {
      page: 'signone',
      title: 'Знак безопасности серии BL-1515',
      pageName: 'Знак безопасности серии BL-1515',
      crumbs: ['Главная', 'Продукция', 'Знаки безопасности', 'Серия BL-1515'],
      tags: data.signone,
      tagsCompatibility: data.compatibility,
      parts: data.parts,
      files: data.productsFiles,
      galleryCounter: true,
      galleryCopyright: true,
      uid: data.uid,
      purpose: data.purpose,
    }
  },
  'accessories': {
    parameters: {
      page: 'accessories',
      title: 'Аксессуары',
      pageName: 'Аксессуары',
      crumbs: ['Главная', 'Продукция', 'Аксессуары'],
      tags: data.tagline,
      taglineClear: true,
      lights: data.accessories,
      files: data.productsFiles,
      promo: data.promo,
      catalogDescr: '<p>Дистанционный пульт (Белый свет — пульт управления аварийным освещением) — элемент системы, получающий и/или передающий информацию от световых приборов аварийного освещения и/или для них, который также может осуществлять индикацию результатов испытаний.</p>'
    }
  },
  'controls': {
    parameters: {
      page: 'controls',
      title: 'Элементы управления',
      pageName: 'Элементы управления',
      crumbs: ['Главная', 'Продукция', 'Элементы управления'],
      tags: data.tagline,
      taglineClear: true,
      lights: data.controls,
      files: data.productsFiles,
      promo: data.promo,
      catalogDescr: '<p>Системы управления и локальные сети систем освещения безопасности должны быть независимыми от управления и локальных сетей для общего освещения; связь обеих систем могут осуществлять только устройства, которые гарантируют разъединение/изоляцию обеих шин друг от друга. Отказ в системах управления и локальных сетях общего освещения не должен влиять на выполнение функций освещения безопасности.</p>'
    }
  },
  'batteries': {
    parameters: {
      page: 'batteries',
      title: 'Аккумуляторные батареи',
      pageName: 'Аккумуляторные батареи',
      crumbs: ['Главная', 'Продукция', 'Аккумуляторные батареи'],
      tags: data.tagline,
      taglineClear: true,
      lights: data.batteries,
      files: data.productsFiles,
      promo: data.promo,
      catalogDescr: '<p>Групповая аккумуляторная установка (ГаУ) — источник электроснабжения со стандартным выходным напряжением, предназначенный для питания нескольких потребителей в пределах одной пожарной зоны и состоящий как минимум из одной аккумуляторной батареи, автоматического зарядного, контрольно-испытательного и распределительного устройств.</p>'
    }
  },
  'autonomous': {
    parameters: {
      page: 'autonomous',
      title: 'Автономные аварийные светильники эвакуационного освещения из состава рабочих светильников',
      pageName: 'Автономные аварийные светильники эвакуационного освещения из состава рабочих светильников',
      catalogDescr: '<p>Ассортиментный ряд продукции "Белый свет" насчитывает более 9 тысяч позиций, на базе которых можно сформировать готовые комплексные решения для аварийного освещения любого объекта в любой отрасли.</p>',
      crumbs: ['Главная', 'Продукция', 'Автономные аварийные светильники эвакуационного освещения из состава рабочих светильников'],
      tags: data.tagline,
      taglineClear: true,
      lights: data.autonomous,
      files: data.productsFiles,
      promo: data.promo,
    }
  },
  'archive': {
    parameters: {
      page: 'archive',
      title: 'Архив и аналоги',
      pageName: 'Архив и аналоги',
      pageDescr: '<p>В этом разделе вы сможете найти информацию о том, какие новые модели заменили наши прошлые разработки, а также узнать, какие наши модели по своим характеристикам и назначению схожи с моделями наших конкурентов.</p>',
      crumbs: ['Главная', 'Продукция', 'Архив и аналоги'],
      tags: data.tagline,
      taglineClear: true,
      lights: data.archive,
      files: data.productsFiles,
      promo: data.promo,
      projectsSolution: [
        {
          title: 'Conversion Kit LED',
          value: '1',
          selected: false
        },
        {
          title: 'Conversion Kit Power LED',
          value: '2',
          selected: false
        },
        {
          title: 'Conversion Kit TM',
          value: '3',
          selected: false
        },
        {
          title: 'DL Small LED',
          value: '3',
          selected: false
        },
      ]
    }
  },
  'compare': {
    parameters: {
      page: 'compare',
      title: 'Список сравнения',
      pageName: 'Список сравнения',
      crumbs: ['Главная', 'Продукция', 'Список сравнения'],
      lights: data.compare,
      tags: [
        {
          title: 'Световые приборы (14)',
          active: true
        },
        {
          title: 'Блоки аварийного питания (7)',
        },
        {
          title: 'Щиты аварийного освещения (5)',
        },
        {
          title: 'Пульты управления авайриным освещением (8)',
        },
      ]
    }
  },
  'card-empty': {
    parameters: {
      page: 'card-empty',
      title: 'Ваша корзина пуста',
      pageName: 'Ваша корзина пуста',
      crumbs: ['Главная', 'Продукция', 'Ваша корзина пуста'],
      lights: data.lights,
      files: data.productsFiles,
      promo: data.promo,
    }
  },
  'checkout': {
    parameters: {
      page: 'checkout',
      title: 'Оформление заказа',
      pageName: 'Оформление заказа',
      crumbs: ['Главная', 'Продукция', 'Корзина', 'Оформление заказа'],
      llc: [
        {
          title: '«Русский свет»',
          value: '1',
          selected: false,
        },
        {
          title: '«Свет-привет»',
          value: '2',
          selected: false,
        },
        {
          title: '«ЛЕД-Свет»',
          value: '3',
          selected: false,
        },
        {
          title: '«iLampochka»',
          value: '4',
          selected: false,
        }
      ]
    }
  },
  'solution': {
    parameters: {
      page: 'solution',
      title: 'Техническое решение №1',
      pageName: 'Техническое решение №1 <span>Автономная система аварийного освещения с функцией TELECONTROL</span>',
      crumbs: ['Главная', 'Технические решения', 'Техническое решение №1 Автономная система аварийного освещения с функцией TELECONTROL'],
      tags: [
        {
          title: 'Щит аварийного освещения',
        },
        {
          title: 'Пульт управления аварийным освещением',
        },
        {
          title: 'Световые приборы',
        },
        {
          title: 'Блоки аварийного питания',
        },
      ],
      files: data.productsFiles,
      galleryCounter: true,
      galleryCopyright: true,
      promo: data.promo,
    }
  },
  'card': {
    parameters: {
      page: 'card',
      title: 'Корзина',
      pageName: 'Корзина',
      crumbs: ['Главная', 'Продукция', 'Корзина'],
    }
  },
  'sale': {
    parameters: {
      page: 'sale',
      title: 'Акции',
      pageName: 'Акции',
      crumbs: ['Главная', 'Компания', 'Акции'],
      pageDescr: '<p>Какой-то вводный текст про проекты, про их сложность, про надежность и последующее обслуживание и т.п. Какой-то вводный текст про проекты, про их сложность, про надежность и последующее обслуживание и т.п. Какой-то вводный текст про проекты, про их сложность, про надежность и последующее обслуживание и т.п.</p>',
      sale: data.sale,
      more: {
        href: 'javascript:void(0);',
        title: 'смотреть прошедшие акции'
      }
    }
  },
  'homepage-user-empty': {
    parameters: {
      page: 'homepage-user',
      title: 'Личный кабинет Покупателя (ЮЛ)',
      pageName: 'Личный кабинет покупателя',
      crumbs: ['Главная', 'Личный кабинет Покупателя (ЮЛ)'],
    }
  },
  'homepage-user': {
    parameters: {
      page: 'homepage-user',
      title: 'Личный кабинет Покупателя (ЮЛ)',
      pageName: 'Личный кабинет покупателя',
      crumbs: ['Главная', 'Личный кабинет Покупателя (ЮЛ)'],
    }
  },
  'user-announce': {
    parameters: {
      page: 'user-announce',
      title: 'Коммуникации',
      pageName: 'Коммуникации',
      crumbs: ['Главная', 'Личный кабинет Покупателя (ЮЛ)', 'Коммуникации'],
      pageDescr: '<p>Какой-то вводный текст про раздел, про сообщения, для чего они и как ими пользоваться. Какой-то вводный текст про раздел, про сообщения, для чего они и как ими пользоваться.Какой-то вводный текст про раздел, про сообщения, для чего они и как ими пользоваться.Какой-то вводный текст про раздел, про сообщения, для чего они и как ими пользоваться.</p>',
      tags: [
        {
          title: 'Не прочитано',
          active: true
        },
        {
          title: 'Реклама',
          active: false
        },
        {
          title: 'Персональное',
          active: false
        },
        {
          title: 'Тег 4',
          active: false
        },
        {
          title: 'Тег 5',
          active: false
        },
      ],
      communication: data.communicationList,
      person: data.personManager,
      taglineClear: true,
      connect: data.connect,
      connectSubject: data.connectSubject,
      connectFrom: data.connectFrom,
      connectTo: data.connectTo,
      connectTime: data.connectTime,
    }
  },
  'user-docs': {
    parameters: {
      page: 'user-docs',
      title: 'Документы',
      pageName: 'Документы',
      crumbs: ['Главная', 'Личный кабинет Покупателя (ЮЛ)', 'Документы'],
      pageDescr: '<p>Какой-то вводный текст про раздел, про документы, для чего они и как ими пользоваться. Какой-то вводный текст про раздел, про документы, для чего они и как ими пользоваться. Какой-то вводный текст про раздел, про документы, для чего они и как ими пользоваться. Какой-то вводный текст про раздел, про документы, для чего они и как ими пользоваться.</p>',
      filesСontract: {
        title: 'Договоры',
        files: data.filesContract
      },
      filesDocs: {
        title: 'Документы',
        files: data.filesDocs
      },
      fileMore: {
        title: 'Еще какие-то документы',
        files: data.filesMore
      }
    }
  },
  'user-objects': {
    parameters: {
      page: 'user-objects',
      title: 'Объекты',
      pageName: 'Объекты',
      crumbs: ['Главная', 'Личный кабинет Покупателя (ЮЛ)', 'Объекты'],
      pageDescr: '<p>Какой-то вводный текст про раздел, про объекты, для чего они и как ими пользоваться. Какой-то вводный текст про раздел, про объекты, для чего они и как ими пользоваться.Какой-то вводный текст про раздел, про объекты, для чего они и как ими пользоваться.Какой-то вводный текст про раздел, про объекты, для чего они и как ими пользоваться.</p>',
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
          value: 'moscow',
          selected: false
        },
        {
          title: 'Санкт-Петербург',
          value: 'piter',
          selected: false
        },
        {
          title: ' Армавир',
          value: 'armavir',
          selected: false
        },
        {
          title: ' Абакан',
          value: 'abakan',
          selected: false
        },
      ],
    }
  },
  'user-objects-item': {
    parameters: {
      page: 'user-objects-item',
      title: 'Торговый центр «Дружба»',
      pageName: 'Торговый центр «Дружба»',
      crumbs: ['Главная', 'Личный кабинет Покупателя (ЮЛ)', 'Объекты', 'Торговый центр «Дружба»'],
      files: data.productsFiles,
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
