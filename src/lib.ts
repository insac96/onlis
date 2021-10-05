import { IFramework, IConfigs, IServices } from 'onlis/types'
import * as Services from './services'

export default class Framework implements IFramework {
  static install = (Vue, options = {}) => {
    Vue.prototype.$onlis = this.initServices(Vue, options) 
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
}

export * from './components'
export * from './layouts'
export * from './directives'
import './styles/index.sass'