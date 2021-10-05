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

  installNuxt (ctx : any, inject : any, Vue : VueConstructor, options : IConfigs) : void

  initComponents (Vue : VueConstructor) : void

  initDirectives (Vue : VueConstructor) : void

  initServices (Vue: VueConstructor, options : IConfigs, ctx? : any) : IServices

  updateHydration (Vue: VueConstructor) : void
}