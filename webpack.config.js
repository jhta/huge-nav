const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rupture = require('rupture');

module.exports = {
  entry: {
    app: './src/index.js',
    //about: './src/about.js',
  },
  output: {
    path: './server/public/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
      }
     ]
   },
   stylus: {
    use: [rupture()],
   },
   plugins: [
     new ExtractTextPlugin('[name].css'),
     new webpack.optimize.CommonsChunkPlugin('commons', 'common.js')
   ],
};
