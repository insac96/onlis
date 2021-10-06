import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { uiLoading } from '../../mixins/public'
import { returnPX } from '../../util'

@Component
export default class uiButton extends uiComponentColor {

  @Prop() width! : any

  @Prop({ type: String, default: 'full' }) fashion!: string

  @Prop({ type: String, default: 'm' }) size! : string

  @Prop({ type: Boolean }) icon! : boolean

  @Prop({ type: Boolean }) circle! : boolean

  @Prop({ type: Boolean }) block! : boolean

  onClick (event : any) {
    this.startRipple(event, this.$el as HTMLElement)
    this.onLink()
    this.$emit('click', event)
  }

  public render(h: any): VNode {
    return h('button', {
      staticClass: 'ui-button',
      class: [
        'ui-component',
        {
          'ui-button--icon': !!this.icon,
          'ui-button--circle': !!this.circle,
          'ui-button--block': !!this.block
        },
        {
          'ui-component--inline-flex': !this.block,
          'ui-component--flex': !!this.block,
        },
        {
          'ui-component--size--m': !this.size,
          [`ui-component--size--${this.size}`]: !!this.size
        },
        this.classStatus,
        this.classFashion,
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-button-width': !this.block ? returnPX(this.width) : null 
        }
      ],
      attrs: {
        ...this.$attrs,
        active: this.active,
        disabled: this.disabled
      },
      on: {
        ...this.$listeners,
        
        click: this.onClick
      }
    }, [
      !!this.isLoading && h(uiLoading),
      this.$slots.default
    ]) 
  }
}