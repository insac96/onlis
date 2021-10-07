import { VueConstructor } from 'vue'
import { IConfigs, IServices } from '../../types'
import * as Services from '../services'

export const init = (Vue : VueConstructor, options : IConfigs, ctx? : any) : IServices => {
  const configs : IConfigs = {
    isSSR: false,
    ...options
  }

  // Set **headers** (Nuxt Context)
  if(!!ctx) {
    configs.headers = (typeof ctx.req !== 'undefined') ? ctx.req.headers : undefined
  }

  // Create Services
  const services : IServices = {
    layout: Vue.observable(new Services.Layout()),
    breakpoint: Vue.observable(new Services.Breakpoint(configs)),
    theme: Vue.observable(new Services.Theme(configs)),
    device: Vue.observable(new Services.Device(configs)),
    isHydrationRender: !!configs.isSSR ? 'ready' : undefined
  }

  // Return Services
  return services
}

export const ssrUpdate = (Vue : VueConstructor) => {
  Vue.mixin({
    beforeCreate() {
      if(!!this.$onlis && this.$onlis.isHydrationRender === 'ready'){
        this.$onlis.isHydrationRender = true

        const device = this.$onlis.device
        this.$onlis.breakpoint.updateFromDevice(device)
      }
    },
    mounted () {
      if(!!this.$onlis && this.$onlis.isHydrationRender === true){
        this.$onlis.isHydrationRender = false

        this.$onlis.breakpoint.init()
      }
    }
  })
}