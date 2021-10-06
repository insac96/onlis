import { IClickOutsideDirective } from '../../../types'
import { attachedRoot } from '../../util'

function checkEvent (e: PointerEvent, el: HTMLElement, binding: IClickOutsideDirective): boolean {
  if (!e) return false

  const root = attachedRoot(el)
  if (root instanceof ShadowRoot && root.host === e.target) return false

  const elements : HTMLElement[] = []
  elements.push(el)

  return !elements.some(el => el.contains(e.target as Node))
}

function handleShadow (el: HTMLElement, callback: Function): void {
  const root = attachedRoot(el)

  callback(document)

  if (root instanceof ShadowRoot) {
    callback(root)
  }
}

const uiClickOutside = {
  inserted (el: HTMLElement, binding: IClickOutsideDirective) {
    const onClick = (e: Event) => {
      let handler = binding.value

      if(typeof handler === 'function'){
        checkEvent(e as PointerEvent, el, binding) && handler(e)
      }
    }

    handleShadow(el, (_window: HTMLElement) => {
      _window.addEventListener('click', onClick, true)
    })

    el._clickOutside = onClick
  },

  unbind (el: HTMLElement) {
    if (!el._clickOutside) return

    handleShadow(el, (_window: HTMLElement) => {
      if (!_window || !el._clickOutside) return
      _window.removeEventListener('click', el._clickOutside, true)
    })

    delete el._clickOutside
  }
}

export default uiClickOutside