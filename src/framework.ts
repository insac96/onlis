import type { VueConstructor } from 'vue'
import type { IConfigs, IServices } from '../types'
import * as Components from './components'
import * as Layouts from './layouts'
import * as Services from './services'
import * as Directives from './directives'

export default class Framework {
  static install = (Vue : VueConstructor, options : IConfigs = {}) => {
    this.initDirectives(Vue)
    this.initComponents(Vue)
    this.initMixin(Vue)

    Vue.prototype.$onlis = this.initServices(Vue, options) 
  }
  
  static initComponents = (Vue : VueConstructor) => {
    Object.values(Components).forEach((component) => {
      Vue.use(component)
    })
    Object.values(Layouts).forEach((component) => {
      Vue.use(component)
    })
  }

  static initDirectives = (Vue : VueConstructor) => {
    Vue.directive('uiClickOutside', Directives.uiClickOutside)
    Vue.directive('uiObserve', Directives.uiObServe)
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