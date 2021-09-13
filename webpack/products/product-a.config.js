const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..', '..');

module.exports = {
  name: 'product-a',
  entry: {
    'product-a': [path.join(ROOT_PATH, 'products', 'product-a', 'index.js')],
  },
  output: {
    path: path.join(ROOT_PATH, 'public', 'product-a', 'dist'),
    publicPath: '/products/product-a/dist/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devtool: 'eval-source-map',
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
};
