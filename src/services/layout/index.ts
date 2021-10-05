import { ILayout } from 'onlis/types'
import { isString, isNumber, returnPX } from '../../util'

export default class Layout implements ILayout {
  public top = 0 // Navbar

  public bottom = 0 // Footer

  public left = 0 // Sidebar Left

  public right = 0 // Sidebar Right

  set (location, value) {
    if(!isNumber(value)) return

    this[location] = returnPX(value)
  }

  remove (location) {
    this[location] = 0
  }
}