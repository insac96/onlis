import { IIntersectDirective } from '../../../types'

const unbind = (el: HTMLElement) => {
  if (!el._intersect) return

  el._intersect.unobserve(el)
  delete el._intersect
}

const uiIntersect = {
  inserted (el: HTMLElement, binding: IIntersectDirective) {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const value = binding.value
    const { handler, options } = typeof value === 'object' ? value : { handler: value, options: {} }

    const observer = new IntersectionObserver((
      entries: IntersectionObserverEntry[] = [],
      observer: IntersectionObserver
    ) => {
      if (!el._intersect) return

      const isIntersecting = entries.some(entry => entry.isIntersecting)

      if(!!handler){
        handler(entries, observer, isIntersecting)
      }

      if (isIntersecting) {
        unbind(el)
      }
    }, options)

    el._intersect = observer

    observer.observe(el)
  },

  unbind
}

export default uiIntersect