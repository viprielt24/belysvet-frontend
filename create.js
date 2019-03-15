var colors = require('colors');
var fs = require('fs');
var action = process.argv[2];

// Text color
// -black
// -red
// -green
// -yellow
// -blue
// -magenta
// -cyan
// -white
// -gray
// -grey
// Background color
// -bgBlack
// -bgRed
// -bgGreen
// -bgYellow
// -bgBlue
// -bgMegenta
// -bgCyan
// property
// -reset
// -bold
// -dim
// -ilatic
// -underline
// -inverse
// -hidden

// -rainbow
// -zebra
// -america
// -trap
// -random

if (action == 'page') {
  // Заготовка для создание страницы
  var pageName = process.argv[3];
  var pageDir = 'src/pages/';
  var pageFolder = pageName;
  var dir = pageDir + pageFolder;
  var js = pageName + '.js';
  var css = pageName + '.css';
  var pug = pageName + '.pug';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    // console.log('\x1b[36m%s\x1b[0m', 'Создана директория для страницы = ' + dir);
    console.log(`[${dir}] Создана директория для страницы`.green);
    
    fs.writeFile(dir + '/' + js, 'import \"./' + css + '\";', function (err) {
      if (err) {
        return console.log(err.red.bold);
      }
      console.log(`[${js}] JavaScript файл создан`.green);
    });
    
    fs.writeFile(dir + '/' + css, '.' + pageName + ' {\n\tborder: 1px solid red;\n}', function (err) {
      if (err) {
        return console.log(err.red.bold);
      }
      console.log(`[${css}] CSS файл создан`.green);
    });
    
    fs.writeFile(dir + '/' + pug, 'extends ../layout.pug\n\nblock content\n\t.content\n\t\t.' + pageName + ' PAGE NAME :: ' + pageName, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log(`[${pug}] PUG файл создан`.green);
    });
    // fs.appendFileSync(componentDir + "/components.css" , '\n@import "' + componentName + '/' + css + '";');
    
  } else {
    console.log(`[Ошибка] страница с именем ${pageName} уже существует, придумайте другое название`.red.bold);
  }
  
} else if (action == 'component') {
  // Заготовка для создание компонента
  var componentName = process.argv[3];
  var componentDir = 'src/components/';
  var componentFolder = componentName;
  var dir = componentDir + componentFolder;
  var js = componentName + '.js';
  var css = componentName + '.css';
  var pug = componentName + '.pug';
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log('Создана директория для компонента = ' + dir);
    
    fs.writeFile(dir + '/' + js, '', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log(`[${js}] JavaScript файл создан`.green);
    });
    
    fs.writeFile(dir + '/' + css, '.' + componentName + ' {\n\tborder: 1px solid red;\n}', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log(`[${css}] CSS файл создан`.green);
    });
    
    fs.writeFile(dir + '/' + pug, 'mixin ' + componentName + '(array)\n\t.' + componentName + ' COMPONENT NAME:' + componentName, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log(`[${pug}] PUG файл создан`.green);
    });
    
    fs.appendFileSync(componentDir + '/components.css', '\n@import "' + componentName + '/' + css + '";');
    console.log(`[components.css] Добавление импорта в файл components.css = @import ${componentName}/${css}`.green);
    
    
    fs.appendFileSync(componentDir + '/mixins.pug', '\ninclude ' + componentName + '/' + pug);
    console.log(`[mixins.pug] добавление инклуда в файл mixins.pug = include ${componentName}/${pug}`.green);
    
  } else {
    console.log(`[Ошибка] компонент с именем ${componentName} уже существует, придумайте другое название`.red.bold);
  }
} else {
  console.log(`[Ошибка] используйте одно из перечисленных действий: page, component`.red.bold);
}
