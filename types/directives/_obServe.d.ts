import { VNodeDirective } from 'vue/types/vnode'

export type IObserveHandler = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver,
  isIntersecting: boolean,
) => void

export interface IObserveDirective extends VNodeDirective {
  value?: ObserveHandler | { handler: IObserveHandler, options?: IntersectionObserverInit }
}