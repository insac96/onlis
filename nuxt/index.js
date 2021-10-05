import path from 'path'

const nuxtOnlis = function (moduleOptions) {
  this.nuxt.hook('build:before', () => {
    const options = {
      ...this.options.onlis,
      ...moduleOptions
    }

    this.options.css.push('onlis/dist/onlis.min.css')

    this.addPlugin({
      src: path.resolve(__dirname, 'plugin.js'),
      options: options
    })
  })
}

export default nuxtOnlis