module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-apply': {},
    'postcss-discard-comments': {
      removeAll: true
    },
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'postcss-nested': {}
  }
};
