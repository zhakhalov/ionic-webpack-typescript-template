'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
  entry: {
    app: './src/app.ts',
    deps: './src/dependencies.js'
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'bower_components'),
      path.join(__dirname, 'node_modules')
    ],
    modulesDirectories: ['bower_components', 'node_modules'],
    alias: {
      decorators: 'ng-core-decorators/dist/commonjs/decorators',
    }
  },
  devtool: '#inline-source-map',
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },

      // ----------- fonts
      { test: /\.woff($|\?)/, loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff' },
      { test: /\.woff2($|\?)/, loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff' },
      { test: /\.ttf($|\?)/, loader: 'file-loader?prefix=font/' },
      { test: /\.eot($|\?)/, loader: 'file-loader?prefix=font/' },

      // ----------- images
      { test: /\.svg($|\?)/, loader: 'file-loader?prefix=font/&name=img/[hash].[ext]' },
      { test: /\.png($|\?)/, loader: 'file-loader?prefix=font/&name=img/[hash].[ext]' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: process.env.NODE_ENV !== 'production',
      PRODUCTION: process.env.NODE_ENV === 'production'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'deps',
      minChunks: Infinity
    }),
    new BowerWebpackPlugin({
      excludes: [/\*/, /\.css$/]
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new ExtractTextPlugin('[name].bundle.css', {
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from: 'src/index.html', to: 'index.html' },
    ]),
  ],
}

/**
'use strict';

let path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: {
    deps: './src/dependencies',
    app: './src/bootstrap'
  },

  // devtool: 'sourcemap',

  devtool: '#inline-source-map',
  //debug: true,

  resolve: {
    root: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'bower_components'),
      path.join(__dirname, 'node_modules')
    ],
    modulesDirectories: ['bower_components', 'node_modules'],

    alias: {
      angular: 'angular/index.js',
      'angular-leaflet-directive': 'angular-leaflet-directive/dist/angular-leaflet-directive.js',
      'angular-scrolltofixed': 'angular-scrolltofixed/dist/angular-scrolltofixed.js'
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      DEBUG: process.env.NODE_ENV !== 'production',
      PRODUCTION: process.env.NODE_ENV === 'production'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'deps',
      minChunks: Infinity
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    })
  ],

  output: {
    path: path.join(__dirname, 'www'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: [/bower_components/, /node_modules/], loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
      { test: /\.woff($|\?)/, loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff' },
      { test: /\.woff2($|\?)/, loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff' },
      { test: /\.ttf($|\?)/, loader: 'file-loader?prefix=font/' },
      { test: /\.eot($|\?)/, loader: 'file-loader?prefix=font/' },
      { test: /\.svg($|\?)/, loader: 'file-loader?prefix=font/&name=img/[hash].[ext]' },
      { test: /\.png($|\?)/, loader: 'file-loader?prefix=font/&name=img/[hash].[ext]' },
    ]
  }
};

 */