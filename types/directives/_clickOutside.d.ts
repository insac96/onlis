import { VNodeDirective } from 'vue/types/vnode'

export interface IClickOutsideDirective extends VNodeDirective {
  value?: ((e: Event) => void)
}