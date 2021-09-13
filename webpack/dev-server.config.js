const path = require('path');

module.exports = {
  // Provide an empty file to avoid Webpack
  // auto-configuration to a missing file
  entry: [path.join(__dirname, 'empty-dev-server-entry.js')],
  output: {
    filename: 'empty.js',
  },
  stats: {
    colors: true,
    assets: true,
    assetsSort: 'name',
    entrypoints: true,
    children: true,
    modules: true,
    chunks: true,
  },
  infrastructureLogging: {
    level: 'verbose',
  },
  devServer: {
    devMiddleware: {
      writeToDisk: false
    },
    client: {
      webSocketURL: {
        hostname: undefined,
        port: 8085,
      },
      overlay: false,
    },
    hot: true,
    host: '0.0.0.0',
    port: 8085,
  },
};
