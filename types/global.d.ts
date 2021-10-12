import Vue, { VueConstructor } from 'vue'
import { IServices } from './framework'

declare module 'vue/types/vue' {
  export interface Vue {
    _uid: any
    $router: any
    $route: any
    $onlis: IServices
  }
}

declare global {
  interface Window {
    Vue: VueConstructor
  }

  interface HTMLElement {
    _clickOutside?: EventListener,
    _ripple?: {
      active?: boolean
      center?: boolean
      save?: boolean
      handler?: EventListener
    },
    _intersect?: IntersectionObserver
  }
}