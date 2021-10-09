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
          'd-inline-flex': !this.block,
          'd-flex': !!this.block,
          'full-width': !!this.block
        },
        [
          'align-center',
          'justify-center',
          'line-normal',
          'user-none'
        ],
        {
          'ui-button--icon': !!this.icon
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