const { resolve } = require('path')

module.exports = function (moduleOptions = {}) {
  this.nuxt.hook('build:before', () => {
    const options = {
      ...this.options.onlis,
      ...moduleOptions
    }

    this.options.css.push('onlis/dist/onlis.min.css')

    this.addPlugin({
      src: resolve(__dirname, 'plugin.js'),
      fileName: 'onlis.js',
      options
    })
  })
}

module.exports.meta = require('../package.json')