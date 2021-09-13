const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..', '..');

module.exports = {
  name: 'product-c',
  entry: {
    'product-c': [path.join(ROOT_PATH, 'products', 'product-c', 'index.js')],
  },
  output: {
    path: path.join(ROOT_PATH, 'public', 'product-c', 'dist'),
    publicPath: '/products/product-c/dist/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devtool: 'eval-source-map',
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
};
