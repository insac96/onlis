const { resolve } = require('path')

module.exports = function (moduleOptions = {}) {
  this.nuxt.hook('build:before', () => {
    let rootPlugin

    const options = {
      treeShake: false,
      ...this.options.onlis,
      ...moduleOptions
    }

    this.options.css.push('onlis/dist/onlis.min.css')

    if(!!options.treeShake){
      rootPlugin = 'plugin.lib.js'
      options.components = options.components || []
      options.directives = options.directives || []
    }
    else {
      rootPlugin = 'plugin.js'
    }

    this.addPlugin({
      src: resolve(__dirname, `${rootPlugin}`),
      fileName: 'onlis.js',
      options
    })
  })
}

module.exports.meta = require('../package.json')