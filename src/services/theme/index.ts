import { IConfigs, ITheme, IThemeConfigs } from 'onlis/types'
import { isBoolean, isFunction, isString, isNumber, isObject, getColor, getObject, returnPX } from '../../util'

export default class Theme implements ITheme {
  public dark  = false

  public radius = null

  public colors = {
    dark: {},
    light: {}
  }

  constructor(configs : IConfigs){
    this.initTheme(configs.theme)
  }

  // Dark
  setDark (dark) {
    if(!isBoolean(dark)) return 

    this.dark = dark
  }

  toggleDark () {
    this.dark = !this.dark
  }

  // Set Radius
  setRadius (radius) {
    if(!isString(radius) && !isNumber(radius)) return

    this.radius = returnPX(radius)
  }

  resetRadius () {
    this.radius = null
  }

  // Set Primary
  setPrimary (color, mode?) {
    this.setColor('primary', color, mode)
  }

  resetPrimary (mode?) {
    this.resetColor('primary', mode)
  }

  // Set Color
  setColor (prop, color, mode?) {
    if(!prop || !color || !isString(color)) return

    let newColor = getColor(color)
    
    if(!mode){
      this.colors['light'][prop] = newColor
      this.colors['dark'][prop] = newColor
    }
    else if(mode === 'dark' || mode === 'light'){
      this.colors[mode][prop] = newColor
    }
  }

  resetColor (prop, mode?) {
    if(!prop) return

    if(!mode){
      this.colors['light'][prop] = null
      this.colors['dark'][prop] = null
    }
    else if(mode === 'dark' || mode === 'light'){
      this.colors[mode][prop] = null
    }
  }

  // Save and Load LocalStorage
  save () {
    if (typeof window === 'undefined') return // SSR
    if (typeof localStorage === 'undefined') return

    localStorage.setItem('onlis-theme', JSON.stringify({
      dark: this.dark,
      radius: this.radius,
      colors: this.colors
    }))
  }

  load () {
    if (typeof window === 'undefined') return
    if (typeof localStorage === 'undefined') return

    let themeStore = localStorage.getItem('onlis-theme')

    if(!themeStore) return
    themeStore = JSON.parse(themeStore) as IThemeConfigs

    this.initTheme(themeStore)
  }

  // Init
  initColorsMode (modeColors, mode) {
    if(!modeColors || !isObject(modeColors)) return

    for (const [key, value] of Object.entries(modeColors)) {
      this.setColor(key, value, mode)
    }
  }

  initColors (colors) {
    if(!colors || !isObject(colors)) return

    this.initColorsMode(colors.light, 'light')
    this.initColorsMode(colors.dark, 'dark')
  }

  initTheme (theme) {
    const themeObject = getObject(theme)

    if(!!themeObject){
      this.setDark(themeObject.dark)
      this.setRadius(themeObject.radius)
      this.initColors(themeObject.colors)
    }
  }
}