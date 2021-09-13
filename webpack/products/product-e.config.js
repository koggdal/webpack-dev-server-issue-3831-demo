const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..', '..');

module.exports = {
  name: 'product-e',
  entry: {
    'product-e': [path.join(ROOT_PATH, 'products', 'product-e', 'index.js')],
  },
  output: {
    path: path.join(ROOT_PATH, 'public', 'product-e', 'dist'),
    publicPath: '/products/product-e/dist/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devtool: 'eval-source-map',
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
};
