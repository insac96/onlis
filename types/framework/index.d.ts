import { VueConstructor } from 'vue'
import { ILayout } from '../services/_layout'
import { ITheme, IThemeConfigs } from '../services/_theme'
import { IDevice, IDeviceConfig } from '../services/_device'
import { IBreakpoint } from '../services/_breakpoint'

export interface IConfigs {
  theme? : IThemeConfigs,
  components? : string[] | null
  directives? : string[] | null
  device? : IDeviceConfig,
  isSSR? : boolean,
  headers? : any
}

export interface IServices {
  layout? : ILayout
  breakpoint? : IBreakpoint
  theme? : ITheme
  device? : IDevice,
  isHydrationRender?: boolean | string
}