import type { VueConstructor } from 'vue'
import type { IConfigs, IServices } from '../types'
import * as Services from './services'

export default class Framework {
  static install = (Vue : VueConstructor, options : IConfigs = {}) => {
    this.initMixin(Vue)
    
    Vue.prototype.$onlis = this.initServices(Vue, options) 
  }

  static initServices = (Vue : VueConstructor, options : IConfigs, ctx? : any) => {
    const configs : IConfigs = {
      device: {
        ctxHeaders: null
      },
      ...options
    }

    // Set **ctxHeaders** of Device Service
    if(!!ctx) {
      if (typeof ctx.req !== 'undefined') {
        configs.device.ctxHeaders = ctx.req.headers
      }
    }
    else {
      delete configs.device.ctxHeaders
    }

    // Create Services
    const services : IServices = {
      layout: Vue.observable(new Services.Layout()),

      breakpoint: Vue.observable(new Services.Breakpoint()),

      theme: Vue.observable(new Services.Theme(configs.theme)),

      device: Vue.observable(new Services.Device(configs.device)),
      
      isHydrationRender: true
    }

    // Return Services
    return services
  }

  static initMixin = (Vue : VueConstructor) => {
    Vue.mixin({
      mounted () {
        if(!!this.$onlis && !!this.$onlis.isHydrationRender){
          this.$onlis.isHydrationRender = false

          this.$onlis.breakpoint.init()
        }
      }
    })
  }
}

export * from './components'
export * from './layouts'
export * from './directives'

import './styles/index.sass'