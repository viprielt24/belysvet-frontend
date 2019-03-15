var critical = require('critical');

critical.generate({
  base: 'build/',
  src: 'home.html',
  dest: 'styles/main.css',
  width: 1300,
  height: 900,
  timeout: 30000
});