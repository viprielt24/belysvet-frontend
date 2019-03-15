const webpack = require('webpack');
const pug = require('pug');
const PugOPTIONS = { pretty: true };
const fs = require('fs');
// const critical = require('critical');

const publicPath = '../';


const pathToPagesJs = publicPath + 'webpack/pages.js';

let pages = require(pathToPagesJs);

let a = webpack( require( publicPath + 'webpack.config.js') );

async function run(){
  return new Promise(res => {
    a.run((err, stats)=>{
      res()
    })
  })
}

run()
  .then(async ()=>{
    let count = 0;
    let errorCount = [];

    console.log('Скомпилирован вебпак');
    console.log('Начало компиляции html');
    for (let pageName in pages) {
      const page = pages[pageName];

      try {
        let template = pug.compileFile( `./src/pages/${pageName}/${pageName}.pug`, PugOPTIONS);
        let result = template(page.parameters);
        await new Promise( (res, rej) => {

          fs.writeFile( `./build/${pageName}.html`,result, () => {
            count++;
            res();
          });

        });
        /**
         * critical css
         */
        /*let html = fs.readFileSync('./build/' + pageName + '.html').toString();
        const links = html.match(/<link.+?>/);

        const newLinks = links.map(link => link.replace(/href="\//), 'href="');

        links.forEach((link, index) => {
          html = html.replace(link, newLinks[index])
        });

        await critical.generate({
          base: 'build/',
          html: html,
          dest: `critical/${pageName}-critical.css`,
          width: 1700,
          height: 900,
        });*/
        /**
         * /critical css
         */

      } catch (e) {
        errorCount.push(pageName);
      }
    }

    console.log(`Сгенерированы html. Успешно: ${count}, с ошибкой: ${errorCount.length}(${errorCount})` );
  });
  /*.then(async () => {

    function replace(html, repData = ''){

      const linkRegex = /<link.+?>/;

      if (linkRegex.test(html)) {
        html = html.replace(linkRegex, repData);
      }

      if (linkRegex.test(html)) {
        replace(html)
      }
      return html;
    }

    for (let pageName in pages) {
      let html = await new Promise(res => {
        // let fn = ()=>{
        //   res(arguments)
        // }
        // fs.readFile(`./build/${pageName}.html`, fn)
        fs.readFile(`./build/${pageName}.html`, (err, data) => res(data.toString()))
      }).catch(err => {
        console.log(`Нету HTML ${pageName}`);
      });

      if (!html) return;

      html = replace(html, `<style>${fs.readFileSync(`./build/critical/${pageName}-critical.css`)}</style>`)

      try {
        fs.mkdirSync('./build/critical/html');
      } catch(err){

      }

      fs.writeFileSync(`./build/critical/html/${pageName}-critical.html`, html);

    }
  });*/



/*

const webpack = require('webpack');
const pug = require('pug');
const PugOPTIONS = {pretty: true};
const fs = require('fs');
const publicPath = '../';
const pages = require('../webpack/pages.js');

console.log(pages);


let a = webpack(require('../webpack.config.js'));
a.run(async (err, stats) => {
  let count = 0;
  let errorCount = [];

  console.log('Скомпилирован вебпак');

  console.log('Начало компиляции html');
  for (let page of pages) {
    let pageName = page.page;

    function setFile(mod) {
      let template = pug.compileFile(`./src/pages/${pageName}/${pageName}.pug`);
      let result = template(page.parameters);
      return new Promise((res, rej) => {

        fs.writeFile(`./build/${pageName + (mod ? '--mobile' : '')}.html`, result, () => {
          count++;
          res();
        });

      });
    }

    try {
      page.parameters.isDesktop = true;
      await setFile();
      page.parameters.isDesktop = false;
      page.parameters.isMobile = true;
      await setFile(true);
    } catch (e) {
      errorCount.push(pageName);
    }
  }

  console.log(`Сгенерированы html. Успешно: ${count}, с ошибкой: ${errorCount.length}(${errorCount})`);
});
return;
*/
