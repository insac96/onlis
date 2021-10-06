import { IObserveDirective } from '../../../types'

const unbind = (el: HTMLElement) => {
  if (!el._observe) return

  el._observe.unobserve(el)
  delete el._observe
}

const uiObserve =  {
  inserted (el: HTMLElement, binding: IObserveDirective) {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const value = binding.value
    const { handler, options } = typeof value === 'object' ? value : { handler: value, options: {} }

    const observer = new IntersectionObserver((
      entries: IntersectionObserverEntry[] = [],
      observer: IntersectionObserver
    ) => {
      if (!el._observe) return

      const isIntersecting = entries.some(entry => entry.isIntersecting)

      if(!!handler){
        handler(entries, observer, isIntersecting)
      }

      if (isIntersecting) {
        unbind(el)
      }
    }, options)

    el._observe = observer

    observer.observe(el)
  },

  unbind
}

export default uiObserve