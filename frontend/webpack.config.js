var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    cssFilename: 'style.css',
    publicPath: '/static/'
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/, include: path.join(__dirname, 'app') },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') }
      ]
  },
  resolve: {
    extensions: [
      '',
      '.js'
    ],
    modulesDirectories: [
      'app',
      'node_modules'
    ]
  }
}
