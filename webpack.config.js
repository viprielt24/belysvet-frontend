const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// https://github.com/webpack-contrib/mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// https://github.com/mzgoddard/hard-source-webpack-plugin
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
// https://github.com/NMFR/optimize-css-assets-webpack-plugin
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// https://github.com/webpack-contrib/terser-webpack-plugin
const TerserPlugin = require('terser-webpack-plugin');
// https://github.com/Klathmon/imagemin-webpack-plugin
const ImageminPlugin = require('imagemin-webpack-plugin').default;
// devMode
const devMode = process.env.NODE_ENV !== 'production';

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
/**
 * плагины
 */
const devPlugins = !devMode ? [
  new OptimizeCssAssetsPlugin(),
  new TerserPlugin({
    cache: true,
    parallel: true
  }),
  new ImageminPlugin({
    pngquant: {
      quality: '80'
    }
  })
  // дев мод
] : [
  new HardSourceWebpackPlugin({
    info: {
      // 'none' or 'test'.
      mode: 'none',
      // 'debug', 'log', 'info', 'warn', or 'error'.
      level: 'info',
    },
  })

];
/**
 * правила
 */
const devRules = !devMode ? [
  {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader', 'postcss-loader'
    ],
  },
  // дев мод
] : [
  {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader?sourceMap', 'postcss-loader?sourceMap'
    ],
  },
];
/**
 * конфиг
 */
const config = {
  mode: process.env.NODE_ENV,
  devtool: devMode ? 'inline-source-map' : false,
  entry,
  output: {
    path: PATH.build,
    filename: 'js/[name].js',
    chunkFilename: devMode ? 'js/[name].[chunkhash].js' : 'js/[name].js',
  },
  plugins: [
    new CleanWebpackPlugin('build'),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
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
    ]),
    ...devPlugins
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
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name (file) {
                if (devMode) {
                  return 'fonts/[name].[ext]'
                }
                return '../fonts/[name].[ext]'
              },
            },
          },
        ],
      },
      ...devRules
    ]
  }
};
module.exports = config;
