const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..', '..');

module.exports = {
  name: 'product-f',
  entry: {
    'product-f': [path.join(ROOT_PATH, 'products', 'product-f', 'index.js')],
  },
  output: {
    path: path.join(ROOT_PATH, 'public', 'product-f', 'dist'),
    publicPath: '/products/product-f/dist/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devtool: 'eval-source-map',
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
};
