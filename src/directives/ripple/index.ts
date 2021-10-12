import { IRippleDirective } from '../../../types'
import { is_Boolean } from '../../util'
import './_style.sass'

const uiRipple = {
  bind (el: HTMLElement, binding: IRippleDirective) {
    if(!!el._ripple) return

    const active : boolean = !!is_Boolean(binding.value) ? binding.value : true
    const center : boolean = !!is_Boolean(binding.modifiers.center) ? binding.modifiers.center : false
    const save : boolean = !!is_Boolean(binding.modifiers.save) ? binding.modifiers.save : false

    el._ripple = {
      active: active,
      center: center,
      save: save
    }
  },

  update (el: HTMLElement, binding: IRippleDirective) {
    if(!el._ripple) return

    const active : boolean = !!is_Boolean(binding.value) ? binding.value : true
    el._ripple.active = active
  },

  inserted (el: HTMLElement) {
    if(!el._ripple) return

    const showRipple = (event? : any) : void => {
      if(!el._ripple.active) return

      const countRipple = el.querySelectorAll('.ui-ripple').length
      const position = el.getBoundingClientRect()
      const posX = !el._ripple.center ? `${(event.clientX - position.left)}px` : '50%'
      const posY = !el._ripple.center ? `${(event.clientY - position.top)}px` : '50%'
      const diameter = `${Math.max(position.width, position.height)}px`

      // Check Position EL
      const computedStyle = window.getComputedStyle(el)
      if(!!computedStyle){
        if (computedStyle.position === 'static') {
          el.style.position = 'relative'
          el.dataset.previousPosition = 'static'
        }

        if(computedStyle.zIndex === 'auto') {
          el.style.zIndex = '1'
          el.dataset.previousZIndex = 'auto'
        }
      }
    
      // Ripple Root
      const ripple = document.createElement('div')
      ripple.className = 'ui-ripple'

      // Ripple Content
      const rippleContent = document.createElement('div')
      rippleContent.className = 'ui-ripple__content'
      rippleContent.classList.add(`ui-ripple__content--${!!el._ripple.save ? 'save' : 'default'}`)

      // Set Position Content
      rippleContent.style.left = posX
      rippleContent.style.top = posY
      rippleContent.style.width = diameter
      rippleContent.style.height = diameter

      // Init
      ripple.appendChild(rippleContent)
      el.appendChild(ripple)

      // Get All Ripple
      if(countRipple < 1){
        el.classList.add('ui-component-ripple')
      }

      // Remove Ripple
      setTimeout(() => {
        el.removeChild(ripple)

        const newCountRipple = el.querySelectorAll('.ui-ripple').length

        if(newCountRipple === 0){
          if(el.dataset.previousPosition){
            el.style.position = el.dataset.previousPosition
            delete el.dataset.previousPosition
          }

          if(el.dataset.previousZIndex){
            el.style.zIndex = el.dataset.previousZIndex
            delete el.dataset.previousZIndex
          }

          el.classList.remove('ui-component-ripple')
        }
      }, 600)
    }

    el.addEventListener('mousedown', showRipple)
    el._ripple.handler = showRipple
  },

  unbind (el: HTMLElement) {
    if(!el._ripple) return

    el.removeEventListener('mousedown', el._ripple.handler)
  }
}

export default uiRipple