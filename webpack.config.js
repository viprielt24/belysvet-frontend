const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATH = {
  build: path.join(__dirname, 'build'),
  src: path.join(__dirname, 'src')
};
const pages = require('./webpack/pages');

const entry = {
  index: PATH.src + '/index.js'
};
const pagesHTML = [];

for (let pageName in pages) {

  entry[pageName] = PATH.src + `/pages/${pageName}/${pageName}.js`;

}


const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry,
  output: {
    path: PATH.build,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin('build'),
    new extractTextWebpackPlugin('css/[name].css'),
    new CopyWebpackPlugin([
      {
        from: PATH.src + '/images',
        to: PATH.build + '/images'
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: PATH.src + '/layout/js/polyfills.js',
        to: PATH.build + '/js/'
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: PATH.src + '/layout/js/serviceWorkerLogic.js',
        to: PATH.build + '/'
      }
    ]),
    new CopyWebpackPlugin([
      {from: PATH.src + '/layout/js/browserVer.js', to: PATH.build + '/js'}
    ])
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: extractTextWebpackPlugin.extract({
          publicPath: '../',
          fallback: 'style-loader',
          use: ['css-loader?sourceMap', 'postcss-loader?sourceMap']
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)(?!\/draw-module)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              ['@babel/plugin-transform-runtime', {
                'helpers': false,
                'regenerator': true
              }]
            ]
          }
        }
      },
      {
        test: /\.js$/,
        use: 'imports-loader?define=>false',
        include: /node_modules/,
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  }
};
module.exports = config;
