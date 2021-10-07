import { VueConstructor } from 'vue'
import { IConfigs } from '../../types'
import * as Services from './services'

export default class Framework {
  static install = (Vue : VueConstructor, options : IConfigs = {}) => {
    if(!!options.isSSR){
      this.ssrServiceUpdate(Vue)
    }

    Vue.prototype.$onlis = this.initServices(Vue, options) 
  }

  static initServices = Services.init

  static ssrServiceUpdate = Services.ssrUpdate
}