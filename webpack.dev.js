const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/public/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: 'localhost', // Defaults to `localhost`
    port: 8081, // Defaults to 8080
    proxy: {
      '^/api/*': {
        target: 'http://localhost:8081/api/',
        secure: false
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false
    }),
    new HTMLWebPackPlugin({
      template: './src/public/index.html',
      filename: 'index.html'
      }
    )
  ]
}