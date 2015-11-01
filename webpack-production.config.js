var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  loader: WebpackStrip.loader('console.log', 'perfLog') // strips out console.log statements
}

devConfig.module.loaders.push(stripLoader); // adds strip loader to dev loaders

module.exports = devConfig; // uses most of dev config
