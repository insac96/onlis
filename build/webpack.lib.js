const path = require("path")
const base = require("./webpack.base.js")

module.exports = {
  ...base,

  entry: {
    'onlis': './src/lib.ts',
    'onlis.min': './src/lib.ts',
  },

  output: {
    ...base.output,
    path: path.resolve(__dirname, "../lib"),
  }
}