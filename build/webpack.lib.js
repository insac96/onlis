const path = require("path")
const base = require("./webpack.base.js")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  ...base,

  entry: {
    'index': './src/lib.ts',
    'lib.min': './src/lib.ts',
  },

  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: '[name].js',
    library: 'Onlis',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        include: /(min)\.js$/,
      })
    ]
  }
}