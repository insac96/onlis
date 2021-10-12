import { Component, Prop } from 'vue-property-decorator'
import uiComponent from '../base'
import { uiRipple } from '../../../directives'
import { getColor } from '../../../util'

@Component({
  directives: {
    'rippleComponent': uiRipple
  }
})
export default class uiComponentColor extends uiComponent {
  // Fashion Props
  @Prop({ type: String }) fashion!: string

  @Prop({ type: String }) fashionActive!: string

  // Border Props
  @Prop({ type: Boolean }) border!: boolean

  @Prop({ type: String }) borderColor!: string

  // Shadow
  @Prop({ type: Boolean, default: true }) shadow!: boolean

  // Color Props
  @Prop({ type: String, default: 'primary' }) color!: string

  @Prop({ type: Boolean }) primary!: boolean

  @Prop({ type: Boolean }) warn!: boolean

  @Prop({ type: Boolean }) success!: boolean

  @Prop({ type: Boolean }) danger!: boolean

  @Prop({ type: Boolean }) dark!: boolean

  @Prop({ type: Boolean }) light!: boolean

  @Prop({ type: Boolean }) child!: boolean

  // Ripple Props
  @Prop({ type: Boolean, default: true }) ripple! : boolean

  // Color
  get isColor () {
    return !!this.color || !!this.isMainColor
  }

  get isMainColor () {
    return !!this.primary
    || !!this.warn
    || !!this.success
    || !!this.danger
    || !!this.dark
    || !!this.light
  }

  get isOtherColor () {
    return !!this.color && !this.isMainColor
  }

  get classColor () {
    return {
      'ui-component--color': !!this.isColor,
      'ui-background--child': !!this.child,
      'ui-color--primary': !!this.primary,
      'ui-color--warn': !!this.warn,
      'ui-color--success': !!this.success,
      'ui-color--danger': !!this.danger,
      'ui-color--dark': !!this.dark,
      'ui-color--light': !!this.light
    }
  }

  get styleColor () {
    return {
      '--ui-color': !!this.isOtherColor ? getColor(this.color) : null,
      '--ui-border-color': getColor(this.borderColor)
    }
  }

  // Other
  get isShadow () {
    return !!this.shadow
    && !this.border 
    && this.fashion !== 'flat' 
    && this.fashion !== 'transparent' 
    && this.fashion !== 'text'
  }

  get isBorder () {
    return !!this.border
    && this.fashion !== 'text'
  }

  // Fashion
  get nowFashion () {
    const fashion = !!this.fashion ? this.fashion : 'basic'

    if(!this.isActive){
      return fashion
    }
    else {
      return !!this.fashionActive ? this.fashionActive : fashion
    }
  }

  get classFashion () {
    return [
      `ui-fashion--${this.nowFashion}`,
      { 'ui-component--border': !!this.isBorder },
      { 'ui-component--shadow': !!this.isShadow }
    ]
  }
}