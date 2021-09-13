const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..', '..');

module.exports = {
  name: 'product-g',
  entry: {
    'product-g': [path.join(ROOT_PATH, 'products', 'product-g', 'index.js')],
  },
  output: {
    path: path.join(ROOT_PATH, 'public', 'product-g', 'dist'),
    publicPath: '/products/product-g/dist/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devtool: 'eval-source-map',
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
};
