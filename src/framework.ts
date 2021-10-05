import { IFramework, IConfigs, IServices } from 'onlis/types'
import * as Components from './components'
import * as Layouts from './layouts'
import * as Services from './services'
import * as Directives from './directives'

export default class Framework {
  static install = (Vue, options = {}) => {
    this.initDirectives(Vue)
    this.initComponents(Vue)
    this.initMixin(Vue)

    Vue.prototype.$onlis = this.initServices(Vue, options) 
  }
  
  static initComponents = (Vue) => {
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
      components: null,
      directives: null,
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

  static initMixin = (Vue) => {
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