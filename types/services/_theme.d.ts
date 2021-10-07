export type IThemeColorProp = 'primary' | 'danger' | 'warn' | 'success' | 'dark' | 'light' | 'background' | 'content' | 'child' | 'text' | 'gray' | 'disabled'

export interface IThemeColors {
  primary? : string | null
  warn? : string | null
  danger? : string | null
  success? : string | null
  dark? : string | null
  light? : string | null
  background? : string | null
  content? : string | null
  child? : string | null
  text? : string | null
  gray? : string | null
  disabled? : string | null
}

export interface IThemeConfigs {
  dark? : boolean
  radius? : string | null
  colors? : {
    dark?: IThemeColors
    light?: IThemeColors
  }
}

export interface ITheme {
  dark : IThemeConfigs.dark
  radius : IThemeConfigs.radius
  colors : IThemeConfigs.colors

  setDark (dark : boolean) : void
  toggleDark () : void

  setRadius (radius? : string | number) : void
  resetRadius () : void

  setPrimary (color : string, mode? : string) : void
  resetPrimary (mode? : string) : void 

  setColor (prop : IThemeColorProp, color : string, mode? : string) : void
  resetColor (prop : IThemeColorProp, mode? : string) : void

  initColorsMode (modeColors: IThemeColors, mode? : string) : void
  initColors (colors: IThemeConfigs.colors)

  initTheme (theme: IThemeConfigs) : void
}