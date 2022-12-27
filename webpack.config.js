'use strict';

const path = require('path');
const loader = require('css-loader');


module.exports = {
  mode: 'development',
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/src/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
		rules: [{
			test:/.(s*)css$/,
			use: [
        "style-loader",
        "css-loader",
        "sass-loader",
			]
    },
    {
      test: /\.(svg|jpg|png)$/,
      use: {
        loader: 'url-loader',
      },
}]
  },
};
