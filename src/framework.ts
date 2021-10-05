import { IFramework, IConfigs, IServices } from 'onlis/types'
import * as Components from './components'
import * as Layouts from './layouts'
import * as Services from './services'
import * as Directives from './directives'

export default class Onlis implements IFramework {
  static install = (Vue, options = {}) => {
    this.initDirectives(Vue)
    this.initComponents(Vue)

    Vue.prototype.$onlis = this.initServices(Vue, options)

    this.updateHydration(Vue)
  }
  
  static installNuxt = (ctx, inject, Vue, options = {}) => {
    const services : IServices = this.initServices(Vue, options, ctx)

    inject('onlis', services)
  }
  
  static initComponents =  (Vue) => {
    Object.values(Components).forEach((component) => {
      Vue.use(component)
    })

    Object.values(Layouts).forEach((component) => {
      Vue.use(component)
    })
  }

  static initDirectives = (Vue) => {
    Vue.directive('onlisClickOutside', Directives.uiClickOutside)
    Vue.directive('onlisObserve', Directives.uiObServe)
  }

  static initServices = (Vue, options, ctx?) => {
    const configs : IConfigs = {
      ...options
    }

    if(!!ctx) {
      configs.ctx = ctx
    }

    const services : IServices = {
      layout: Vue.observable(new Services.Layout()),
      breakpoint: Vue.observable(new Services.Breakpoint()),
      theme: Vue.observable(new Services.Theme(configs)),
      device: Vue.observable(new Services.Device(configs)),
      isHydrationRender: true
    }

    return services
  }

  static updateHydration = (Vue) => {
    Vue.mixin({
      mounted () {
        if(!!this.$onlis && !!this.$onlis.isHydrationRender){
          this.$onlis.isHydrationRender = false

          this.$onlis.breakpoint.update()
        }
      }
    })
  }
}