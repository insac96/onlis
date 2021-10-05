declare module 'onlis/types' {
  export * from 'onlis/types/components'
  export * from 'onlis/types/directives'
  export * from 'onlis/types/services'
  export * from 'onlis/types/framework'
}

declare module 'onlis/types/components' {
  export { ISelectOption } from './components/_uiSelect'
  export { IDialogControl } from './components/_uiDialog'
}

declare module 'onlis/types/directives' {
  export { IClickOutsideDirective }  from './directives/_clickOutside'
  export { IObserveDirective, IObserveHandler }  from './directives/_obServe'
}

declare module 'onlis/types/services' {
  export { ILayout, ILayoutProp } from './services/_layout'
  export { IBreakpoint, IBreakpointProp, IBreakpointThresholds } from './services/_breakpoint'
  export { IDevice } from './services/_device'
  export { ITheme, IThemeConfigs, IThemeColors, IThemeColorProp } from './services/_theme'
}

declare module 'onlis/types/framework' {
  export { IFramework, IServices, IConfigs } from './framework'
}