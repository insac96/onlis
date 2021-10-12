export const getPercentLine = (event: any, target: HTMLElement, reverse: boolean = false) : number => {

  const targetPos =  target.getBoundingClientRect() 
  const width = targetPos.width
  let posX : number = 0

  // Get Position X
  if (event.type == 'touchmove') {
    posX = event.targetTouches[0].clientX - targetPos.left
  }
  else {
    posX = event.clientX - targetPos.left
  }

  // Check Position X
  if (Math.sign(posX) == -1) {
    posX = !!reverse ? (0 + width) : 0
  } 
  else if (posX > width) {
    posX = !!reverse ? 0 : width
  }
  else {
    posX = !!reverse ? (width - posX) : posX
  }

  // Return Percent
  return (posX / width) * 100
}

export const getPercentCircle = (event: any, target : HTMLElement, sizeCircle : number = 0) : number => {

  const targetPos = target.getBoundingClientRect()
  const radius : number = sizeCircle / 2
  
  let posMouseX : number = 0
  let posMouseY : number = 0
  let rotate : number = 0

  // Set Pos
  if (event.type == "touchmove") {
    posMouseX = event.targetTouches[0].clientX - targetPos.left
    posMouseY = event.targetTouches[0].clientY - targetPos.top
  }
  else {
    posMouseX = event.clientX - targetPos.left
    posMouseY = event.clientY - targetPos.top
  }

  // Set Angle
  const angle = Math.atan2(radius - posMouseX, radius - posMouseY) * (180 / Math.PI)

  // Set Rotate
  if(angle < 0){
    rotate = 0 - angle
  }
  else {
    rotate = 180 + (180 - angle)
  }

  // Set Percent
  return (rotate / 360) * 100
}

export const getPercentByValue = (value: number = 0, skip: number = 1, min : number = 0, max: number = 100) : number => {
  const length = (max - min) / skip
  const percentSteps : number = 100 / length
  let percent : number = value * percentSteps / skip

  // Check And Return
  if(Math.sign(percent) == -1){
    return 0
  }
  else if (percent > 100) {
    return 100
  }
  else {
    return percent
  }
}

export const getValueByPercent = (percent: number = 0, skip : number = 1, min : number = 0, max: number = 100) : any => {
  const length = (max - min) / skip
  const percentSteps : number = 100 / length
  const steps = Math.round(percent / percentSteps)

  let value = steps * percentSteps * (max - min) * 0.01 + min
  value = Math.round(value)

  if (value > max) {
    return max
  }
  else if (value < min) {
    return min
  }
  else {
    return value 
  }
}