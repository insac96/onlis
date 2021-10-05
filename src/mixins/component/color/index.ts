import { Component, Prop } from 'vue-property-decorator'
import uiComponent from '../base'
import { uiRipple, uiRippleFull } from '../../public'
import { getColor } from '../../../util'

@Component
export default class uiComponentColor extends uiComponent {
  // Fashion
  @Prop({ type: String }) fashion!: string

  @Prop({ type: String }) fashionActive!: string

  @Prop({ type: Boolean }) border!: boolean

  // Color
  @Prop({ type: String, default: 'primary' }) color!: string

  @Prop({ type: Boolean }) warn!: boolean

  @Prop({ type: Boolean }) success!: boolean

  @Prop({ type: Boolean }) danger!: boolean

  @Prop({ type: Boolean }) child!: boolean

  // Ripple
  @Prop({ type: Boolean, default: true }) ripple! : boolean

  onRipple: boolean = false

  // Ripple Logic
  addClassRipple () {
    this.onRipple = true
  }

  removeClassRipple () {
    this.onRipple = false
  }

  startRipple (event : any, el : HTMLElement) {
    if(!this.ripple) return

    if(this.fashion === 'flat-full') {
      uiRippleFull(event, el, this.addClassRipple, this.removeClassRipple)
    }
    else {
      uiRipple(event, el, this.addClassRipple, this.removeClassRipple)
    }
  }

  // Color Logic
  get isColor () {
    return !!this.color || !!this.isStatusColor
  }

  get isStatusColor () {
    return !!this.success 
    || !!this.warn 
    || !!this.danger
  }

  get isMainColor () {
    return !this.isStatusColor && (this.color === 'primary' || this.color === 'dark' || this.color === 'light')
  }

  get classColor () {
    return {
      'ui-component--color': !!this.isColor,
      'ui-color--child': !!this.child,
      'ui-color--success': !!this.success,
      'ui-color--warn': !!this.warn,
      'ui-color--danger': !!this.danger,
      [`ui-color--${this.color}`]: !!this.isMainColor
    }
  }

  get styleColor () {
    return {
      '--ui-color': !!this.color && (!this.isStatusColor && !this.isMainColor) ? getColor(this.color) : null
    }
  }

  // Fashion Logic
  get getNowFashion () {
    if(!this.isActive){
      return this.fashion
    }
    else {
      return !!this.fashionActive ? this.fashionActive : this.fashion
    }
  }

  get classFashion () {
    return {
      'ui-component--ripple': !!this.onRipple,
      'ui-component--border': !!this.border && this.fashion !== 'text',
      'ui-component-fashion--basic': !this.fashion,
      [`ui-component-fashion--${this.getNowFashion}`]: !!this.fashion
    }
  }
}