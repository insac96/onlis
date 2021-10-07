const { resolve } = require('path')

module.exports = function (moduleOptions = {}) {
  this.nuxt.hook('build:before', () => {
    let rootPlugin

    // Get Options
    const options = {
      treeShake: false,
      ...this.options.onlis,
      ...moduleOptions
    }

    // Push CSS
    this.options.css.push('onlis/dist/onlis.min.css')

    // SSR
    if(this.options.ssr === true || this.options.mode === 'universal'){
      options.isSSR = true
    }
    else {
      options.isSSR = false
    }

    // TreeShake
    if(!!options.treeShake){
      rootPlugin = 'plugin.lib.js'
      options.components = options.components || []
      options.directives = options.directives || []
    }
    else {
      rootPlugin = 'plugin.js'
    }

    // Set Plugin
    this.addPlugin({
      src: resolve(__dirname, `${rootPlugin}`),
      fileName: 'onlis.js',
      options
    })
  })
}

module.exports.meta = require('../package.json')