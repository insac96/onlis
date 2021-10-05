import { returnPX } from '../../../util'
import './_style.sass'

export const uiRipple = (
    event : any, 
    target : HTMLElement,
    addClassRipple : (() => void),
    removeClassRipple : (() => void)
  ) : void => {

  // Get Pos
  const targetPos = target.getBoundingClientRect()
  const posX = !!event ? event.clientX - targetPos.left : '50%'
  const posY = !!event ? event.clientY - targetPos.top : '50%'
  const diameter = Math.max(targetPos.width, targetPos.height);

  // Get All Ripple
  const countRipple = target.querySelectorAll('.ui-ripple-root').length

  // Set Ripple Root
  const rippleRoot = document.createElement('div')
  rippleRoot.className = 'ui-ripple-root'
  rippleRoot.classList.add('ui-ripple-root--only')

  // Set Ripple
  const ripple = document.createElement('div')
  ripple.className = 'ui-ripple'
  ripple.style.left = returnPX(posX)
  ripple.style.top = returnPX(posY)
  ripple.style.width = returnPX(diameter)
  ripple.style.height = returnPX(diameter)

  // Init
  rippleRoot.appendChild(ripple)
  target.appendChild(rippleRoot)

  // Add Class To Target
  if(countRipple < 1){
    addClassRipple()
  }

  // Remove Ripple
  setTimeout(() => {
    target.removeChild(rippleRoot)

    const getRipples = target.querySelectorAll('.ui-ripple-root')
    const newCountRipple = getRipples.length

    if(newCountRipple === 0){
      removeClassRipple()
    }
  }, 600)
}

export const uiRippleFull = (
    event : any, 
    target : HTMLElement, 
    addClassRipple : (() => void),
    removeClassRipple : (() => void)
  ) : void => {

  // Get Pos
  let targetPos = target.getBoundingClientRect()
  const posX = !!event ? event.clientX - targetPos.left : '50%'
  const posY = !!event ? event.clientY - targetPos.top : '50%'
  const diameter = Math.max(targetPos.width, targetPos.height);

  // Get All Ripple Start
  const countRippleStart = target.querySelectorAll('.ui-ripple-root--start').length

  // Set Ripple Root
  const rippleRoot = document.createElement('div')
  rippleRoot.className = 'ui-ripple-root'

  // Set Start And Duplicate for Ripple Root
  if(countRippleStart < 1){
    rippleRoot.classList.add('ui-ripple-root--start')
  }
  else {
    rippleRoot.classList.add('ui-ripple-root--duplicate')
  }

  // Set Ripple
  const ripple = document.createElement('div')
  ripple.className = 'ui-ripple'
  ripple.style.left = returnPX(posX)
  ripple.style.top = returnPX(posY)
  ripple.style.width = returnPX(diameter)
  ripple.style.height = returnPX(diameter)

  // Init
  rippleRoot.appendChild(ripple)
  target.appendChild(rippleRoot)
  
  // Add Class To Target
  if(countRippleStart < 1){
    addClassRipple()
    //target.classList.add('ui-component--ripple')
  }

  //Remove Ripple
  function removeRipple(){
    setTimeout(() => {
      if(rippleRoot.classList.contains('ui-ripple-root--start')){
        ripple.classList.add('ui-ripple--out')
        //target.classList.remove('ui-component--ripple')

        setTimeout(() => {
          removeClassRipple()
          target.removeChild(rippleRoot)
        }, 300)
      }
      else {
        target.removeChild(rippleRoot)
      }
    }, 600)
  }

  //Remove Start Ripple
  function removeStartRipple () {    
    removeRipple()
    target.removeEventListener('mouseleave', removeStartRipple)
  }

  // End
  if(!!rippleRoot.classList.contains('ui-ripple-root--start')){
    target.addEventListener('mouseleave', removeStartRipple)
  }
  else {
    removeRipple()
  }
}