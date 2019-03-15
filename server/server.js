const Port = 8080;
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const express = require('express');
const app = express();
const pug = require('pug');
const PugOPTIONS = {pretty: true};
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
const uaParser = require('ua-parser-js');

var os = require("os");

let ip;

try {
  ip = os.networkInterfaces().en0[1].address;
} catch (e) {

}

const pathToPagesJs = './webpack/pages.js';

let pages = require(path.join('../', pathToPagesJs));
let lastUpdatePagesJs = fs.statSync(pathToPagesJs).mtime;

app.listen(Port, '0.0.0.0', () => {
  console.log(`Started on ${Port} port`);
  console.log(`Started on http://${ip}:${Port} port`);
});

app.use((req, res, next) => {
  let newMtime = fs.statSync(path.join('./', pathToPagesJs)).mtime;
  if (+lastUpdatePagesJs != +newMtime) {
    lastUpdatePagesJs = newMtime;

    delete require.cache[require.resolve(path.join('../', pathToPagesJs))];
    pages = require(pathToPagesJs);

  }
  next();
});


for (let pageName in pages) {
  const page = pages[pageName];

  let url = `./src/pages/${pageName}/${pageName}.pug`;
  app.get(page.link || `/${pageName}`, (req, res) => {

    Object.assign(page, pages[pageName]);

    let time = Date.now();
    let template = pug.compileFile(url, PugOPTIONS);
    const cookie = req.headers.cookie;
    const ua = uaParser(req.headers['user-agent']);

    console.log(ua.device.type);

    if (/mobile=true|tablet=true|desktop=true/.test(cookie)) {
      var isMobile = /mobile=true/.test(cookie);
      var isTablet = /tablet=true/.test(cookie);
      var isDesktop = /desktop=true/.test(cookie);
    } else if (ua.device.type == 'tablet') {
      isMobile = true;
      isTablet = true;
      isDesktop = false;
    } else if (ua.device.type == 'mobile') {
      isMobile = true;
      isTablet = false;
      isDesktop = false;
    } else {
      isMobile = false;
      isTablet = false;
      isDesktop = true;
    }

    page.parameters.isMobile = isMobile;
    page.parameters.isTablet = isTablet;
    page.parameters.isDesktop = isDesktop;
    let compilied = template(page.parameters);

    res.header('Content-Type', 'text/html');
    res.header('Content-Encoding', 'gzip');
    zlib.gzip(compilied, (err, data) => {

      res.send(
        data
      );
    });

    console.log(`Время генерации шаблона "${page.parameters.title}":${Date.now() - time}мс`);
  })
}


require('../publicAPI')(app, pages);

const compilier = webpack(require('../webpack.config.js'));
app.use(middleware(compilier, {stats: 'minimal'}));
