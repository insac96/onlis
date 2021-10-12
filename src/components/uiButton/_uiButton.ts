import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { uiComponentColor, uiLoading } from '../../mixins'
import { returnPX } from '../../util'

@Component
export default class uiButton extends uiComponentColor {

  @Prop() width! : any

  @Prop({ type: String, default: 'full' }) fashion!: string

  @Prop({ type: String, default: 'm' }) size! : string

  @Prop({ type: Boolean }) icon! : boolean

  @Prop({ type: Boolean }) circle! : boolean

  @Prop({ type: Boolean }) block! : boolean

  public render(h: any): VNode {
    const loading = h(uiLoading, { 
      props: { 
        full : true 
      } 
    })

    return h('button', {
      staticClass: 'ui-button',
      class: [
        'ui-component',
        {
          'd-inline-flex': !this.block,
          'd-flex': !!this.block,
        },
        [
          'align-center',
          'justify-center',
          'line-normal',
          'user-none'
        ],
        {
          'ui-size--m': !this.size,
          [`ui-size--${this.size}`]: !!this.size
        },
        {
          'ui-button--icon': !!this.icon,
          'ra-50': !!this.circle
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
      },
      directives: [
        {
          name: 'ripple-component',
          value: !!this.ripple
        }
      ]
    }, [
      !!this.isLoading && loading,
      this.$slots.default
    ]) 
  }
}