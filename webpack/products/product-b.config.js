const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..', '..');

module.exports = {
  name: 'product-b',
  entry: {
    'product-b': [path.join(ROOT_PATH, 'products', 'product-b', 'index.js')],
  },
  output: {
    path: path.join(ROOT_PATH, 'public', 'product-b', 'dist'),
    publicPath: '/products/product-b/dist/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devtool: 'eval-source-map',
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
};
