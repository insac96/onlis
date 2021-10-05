import { VueConstructor } from 'vue'
import { ILayout } from '../services/_layout'
import { ITheme, IThemeConfigs } from '../services/_theme'
import { IDevice } from '../services/_device'
import { IBreakpoint } from '../services/_breakpoint'

export interface IConfigs {
  ctx? : any
  theme? : IThemeConfigs
}

export interface IServices {
  layout? : ILayout
  breakpoint? : IBreakpoint
  theme? : ITheme
  device? : IDevice
}

export interface IFramework {
  install (Vue : VueConstructor, options : IConfigs) : void

  initComponents (Vue : VueConstructor, options? : IConfigs) : void

  initDirectives (Vue : VueConstructor, options? : IConfigs) : void

  initServices (Vue: VueConstructor, options : IConfigs, ctx? : any) : IServices

  initMixin (Vue: VueConstructor) : void
}