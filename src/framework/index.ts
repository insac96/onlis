import { VueConstructor } from 'vue'
import { IConfigs } from '../../types'
import * as Components from '../components'
import * as Layouts from '../layouts'
import * as Directives from '../directives'
import * as Services from './services'

export default class Framework {
  static install = (Vue : VueConstructor, options : IConfigs = {}) => {
    this.initComponents(Vue)
    this.initDirectives(Vue)

    if(!!options.isSSR){
      this.ssrServiceUpdate(Vue)
    }

    Vue.prototype.$onlis = this.initServices(Vue, options) 
  }
  
  static initComponents = (Vue : VueConstructor) => {
    const components = {
      ...Components,
      ...Layouts
    }

    for (const name in components) {
      const component = components[name]

      Vue.use(component)
    }
  }

  static initDirectives = (Vue : VueConstructor) => {
    for (const name in Directives) {
      const directive = Directives[name]

      Vue.directive(name, directive)
    }
  }

  static initServices = Services.init

  static ssrServiceUpdate = Services.ssrUpdate
}