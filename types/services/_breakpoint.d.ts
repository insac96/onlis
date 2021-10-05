export type IBreakpointProp = 'xs' | 'sm' | 'md' | 'lg'

export interface IBreakpointThresholds {
  xs: number
  sm: number
  md: number
  lg: number
}

export interface IBreakpoint {
  resizeTimeout : any
  isMobile : boolean
  isTablet : boolean
  isDesktop : boolean
  xs : boolean 
  sm : boolean
  md : boolean
  lg : boolean
  xl : boolean
  thresholds : IBreakpointThresholds

  onResize () : void
  update () : void
  getClientWidth () : void
}