const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/display.js',
  output: {
    filename: 'display.js',
    path: path.resolve(__dirname, 'dist'),
  },
};