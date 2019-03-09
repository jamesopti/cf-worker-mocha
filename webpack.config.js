// webpack.config.js
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  target: 'node',
  resolve: {
    alias: {
      '@dollarshaveclub/node-fetch$': "@dollarshaveclub/node-fetch/lib/index.js"
    },
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader'
      }
    ]
  },
  entry: {
    test: [
      __dirname + '/test/bootstrap.js',
      __dirname + '/test/test.js'
    ],
  }
};
