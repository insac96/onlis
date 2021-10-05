import { is_String } from '../helpers'

const hexToRGB = (hex : string) : any => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  
  hex = hex.replace(shorthandRegex, (m: any, r: string, g: string, b: string) => {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

export const getColor = (color : string) : string | null => {
  if(!color) return null
  if(!is_String(color)) return null
  
  if(color === 'primary' 
  || color === 'danger' 
  || color === 'warn' 
  || color === 'success' 
  || color === 'dark'
  || color === 'light'
  || color === 'background' 
  || color === 'content' 
  || color === 'child' 
  || color === 'text'
  || color === 'gray'
  || color === 'disabled' 
  ) return `var(--ui-${color})`

  const isRGB = /^(rgb|rgba)/.test(color)
  const isRGBNumbers = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(color)
  const isHEX = /^(#)/.test(color)

  if (!!isRGB) {
    const arrayColor = color.replace(/[rgba()]/g, '').split(',')
    return `${arrayColor[0]},${arrayColor[1]},${arrayColor[2]}`
  } 
  else if (!!isHEX) {
    const rgb = hexToRGB(color)
    return `${rgb!.r},${rgb!.g},${rgb!.b}`
  } 
  else if (!!isRGBNumbers) {
    return color
  }
  else return null
}