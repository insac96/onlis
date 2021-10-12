import { VueConstructor } from 'vue'
import { ILayout } from '../services/_layout'
import { ITheme, IThemeConfigs } from '../services/_theme'
import { IDevice, IDeviceConfig } from '../services/_device'
import { IBreakpoint } from '../services/_breakpoint'
import { IIcon, IIconConfig } from '../services/_breakpoint'

export interface IConfigs {
  components? : string[] | null
  directives? : string[] | null
  theme? : IThemeConfigs
  device? : IDeviceConfig
  icon? : IIconConfig
  isSSR? : boolean,
  headers? : any
}

export interface IServices {
  layout? : ILayout
  breakpoint? : IBreakpoint
  theme? : ITheme
  device? : IDevice
  icon? : IIcon
  isHydrationRender?: boolean | string | undefined
}