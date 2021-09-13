const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..', '..');

module.exports = {
  name: 'product-d',
  entry: {
    'product-d': [path.join(ROOT_PATH, 'products', 'product-d', 'index.js')],
  },
  output: {
    path: path.join(ROOT_PATH, 'public', 'product-d', 'dist'),
    publicPath: '/products/product-d/dist/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devtool: 'eval-source-map',
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
};
