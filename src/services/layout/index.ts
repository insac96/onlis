import { ILayout } from '../../../types'
import { is_Number, is_Boolean } from '../../util'

export default class Layout implements ILayout {
  // Navbar
  public top = 0 

  public clippedTopLeft = false

  public clippedTopRight = false

  // Footer
  public bottom = 0 

  public clippedBottomLeft = false

  public clippedBottomRight = false

  // Sidebar Left
  public left = 0 

  // Sidebar Right
  public right = 0 

  set (location, value) {
    if(!is_Number(value) && !is_Boolean(value)) return

    this[location] = value
  }

  remove (location) {
    this[location] = 0
  }
}