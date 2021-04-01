const presetenv = require('postcss-preset-env');
module.exports = {
  plugins: [
    presetenv({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
};
