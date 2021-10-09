export type ILayoutProp = 'top' | 'left' | 'right' | 'bottom' | 'clippedTopLeft' | 'clippedTopRight'

export interface ILayout {
  top: number
  clippedTopLeft: boolean
  clippedTopRight: boolean

  bottom: number
  clippedBottomLeft: boolean
  clippedBottomRight: boolean

  left: number
  right: number

  set (location : ILayoutProp, value: number | boolean) : void
  remove (location: ILayoutProp) : void
}
