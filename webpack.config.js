const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rupture = require('rupture');
const nib = require('nib');

module.exports = {
  entry: {
    app: './src/index.js',
    //about: './src/about.js',
  },
  output: {
    path: './server/public/',
    filename: '[name].js',
  },
  devtool: "source-map"
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
      },
      // Font Definitions
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
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
     new webpack.optimize.CommonsChunkPlugin('commons', 'common.js')
   ],
};
