import { IConfigs, ITheme, IThemeConfigs } from '../../../types'
import { is_Boolean, is_Object, getColor, getObject, returnPX } from '../../util'

export default class Theme implements ITheme {
  public dark  = false

  public radius = null

  public colors = {
    dark: {
      primary: null,
      danger: null,
      warn: null,
      success: null,
      dark: null,
      light: null,
      background: null,
      content: null,
      child: null,
      text: null,
      gray: null,
      disabled: null,
    },
    light: {
      primary: null,
      danger: null,
      warn: null,
      success: null,
      dark: null,
      light: null,
      background: null,
      content: null,
      child: null,
      text: null,
      gray: null,
      disabled: null,
    }
  }

  constructor(configs : IConfigs){
    this.initTheme(configs.theme as IThemeConfigs)
  }

  // Dark
  public setDark (dark) {
    if(!is_Boolean(dark)) return 

    this.dark = dark
  }

  public toggleDark () {
    this.dark = !this.dark
  }

  // Set Radius
  public setRadius (radius) {
    this.radius = returnPX(radius)
  }

  public resetRadius () {
    this.radius = null
  }

  // Set Primary
  public setPrimary (color, mode) {
    this.setColor('primary', color, mode)
  }

  public resetPrimary (mode) {
    this.resetColor('primary', mode)
  }

  // Set Color
  public setColor (prop, color, mode) {
    if(!prop || !color) return

    const newColor = getColor(color)
    if(!newColor) return
    
    if(!mode){
      this.colors.light[prop] = newColor
      this.colors.dark[prop] = newColor
    }
    else if(mode === 'dark'){
      this.colors.dark[prop] = newColor
    }
    else if(mode === 'light'){
      this.colors.light[prop] = newColor
    }
  }

  public resetColor (prop, mode) {
    if(!prop) return

    if(!mode){
      this.colors.light[prop] = null
      this.colors.dark[prop] = null
    }
    else if(mode === 'dark'){
      this.colors.dark[prop] = null
    }
    else if(mode === 'light'){
      this.colors.light[prop] = null
    }
  }

  // Save and Load LocalStorage
  public save () {
    if (typeof window === 'undefined') return // SSR
    if (typeof localStorage === 'undefined') return

    localStorage.setItem('onlis-theme', JSON.stringify({
      dark: this.dark,
      radius: this.radius,
      colors: this.colors
    }))
  }

  public load () {
    if (typeof window === 'undefined') return
    if (typeof localStorage === 'undefined') return

    const themeStore = localStorage.getItem('onlis-theme')

    if(!themeStore) return
    const themeConfigs = JSON.parse(themeStore) as IThemeConfigs

    this.initTheme(themeConfigs)
  }

  // Init
  public initColorsMode (modeColors, mode) {
    if(!modeColors) return
    if(!is_Object(modeColors)) return

    for (const [key, value] of Object.entries(modeColors)) {
      this.setColor(key, value, mode)
    }
  }

  public initColors (colors) {
    if(!colors) return
    if(!is_Object(colors)) return

    this.initColorsMode(colors.light, 'light')
    this.initColorsMode(colors.dark, 'dark')
  }

  public initTheme (theme) {
    const themeObject = getObject(theme)

    if(!themeObject) return

    this.setDark(themeObject.dark)
    this.setRadius(themeObject.radius)
    this.initColors(themeObject.colors)
  }
}