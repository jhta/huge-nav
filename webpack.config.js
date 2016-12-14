const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Stylus mixins
const rupture = require('rupture');
const nib = require('nib');

module.exports = {

  entry: {
    app: './src/index.js',
    render: './src/js/render.js',
    navigation: './src/js/navigation.js',
  },
  output: {
    path: './server/public/',
    filename: '[name].js',
  },
  devtool: "source-map",

  module: {
    loaders: [
      // load for babel ES6
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /(node_modules|public)/,
      },
      //Loader for stylus
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
      },
      // Loader for fonts
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
      },
      //loader for images
      {
        test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
      }
    ]
  },

   stylus: {
    use: [
      rupture(),
      nib()
    ],
    compress: true,
   },

   plugins: [
     new ExtractTextPlugin('[name].css'),
     new webpack.optimize.UglifyJsPlugin()
   ],
};
