export type ILayoutProp = 'top' | 'left' | 'right' | 'bottom'

export interface ILayout {
  top: number
  bottom: number
  left: number
  right: number

  set (location : ILayoutProp, value: number) : void
  remove (location: ILayoutProp) : void
}
