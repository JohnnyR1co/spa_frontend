var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://127.0.0.1:4000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: '/Users/Apple/React/spa_frontend/build',
    filename: 'index.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader', 'eslint-loader'],
      include: path.join(__dirname, 'src')
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
