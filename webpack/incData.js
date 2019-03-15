// подкючаемся к файловой системе
const fs = require('fs');
const path = require('path');

// вычисляем абсолютный путь до папки
const directoryPath = path.join(__dirname, 'data');

// читаем директорию и получаем массив файлов в ней
let files = fs.readdirSync(directoryPath);

// создаем объект для приема данных и их экспорта
let data = {};

// перебераем файлы
files.forEach(file =>{
  
  // откидываем расширение файла
  let fileName = file.slice(0, -3);
  
  // закидываем данные из файла в свойство объекта с тем же именем, что и у файла
  data[fileName] = require('./data/'+ file);
});

// отправляем в pages.js
module.exports = data;