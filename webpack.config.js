var path = require('path');
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: './src/index.js',
  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ],
  devServer: {
    hot: true,
    quiet: true,
    inline: true,
    stats: false,
    watchOptions: { poll: 1000, ignored: /node_modules/ }
  }
};
