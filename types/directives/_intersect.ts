import { VNodeDirective } from 'vue/types/vnode'

export type IIntersectHandler = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver,
  isIntersecting: boolean,
) => void

export interface IIntersectDirective extends VNodeDirective {
  value?: IIntersectHandler | { handler: IIntersectHandler, options?: IntersectionObserverInit }
}