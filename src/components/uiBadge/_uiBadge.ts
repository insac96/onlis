import { VNode } from 'vue'
import { Component, Prop, Model } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { returnPX } from '../../util'

@Component
export default class uiBadge extends uiComponentColor {

  @Model('model', { type: Boolean , default: true }) readonly value!: boolean

  @Prop({ type: String, default: 'success' }) color! : any

  @Prop({ type: [ String , Number ] }) text! : string | number

  @Prop() size! : any

  @Prop({ type: Boolean }) left! : boolean

  @Prop({ type: Boolean }) top! : boolean

  @Prop({ type: [ String , Number ] }) zIndex! : string | number

  
  public render(h: any): VNode { 
    const dot = h('div', {
      staticClass: 'ui-badge-dot',
      class: [
        'ui-component',
        'ui-fashion--full',
        'position-absolute',
        [
          'd-flex',
          'align-center',
          'justify-center',
          'ra'
        ],
        [
          'font-size-xs',
          'font-weight-700',
          'text-light',
          'line-normal',
          'transition'
        ],
        {
          'ui-fashion--border': !!this.border,
          'ui-badge-dot--top': !!this.top,
          'ui-badge-dot--left': !!this.left,
          'ui-badge-dot--text': !!this.$slots.text,
        },
        this.classColor,
      ],
      style: [
        this.styleColor
      ],
      directives: [
        {
          name: 'show',
          value: !!this.value
        }
      ]
    }, [ 
      !!this.$slots.text ? this.$slots.text : this.text
    ])

    const dotTransition = h('transition', {
      props: {
        name: 'ui-zoom'
      }
    }, [ 
      dot 
    ])

    return h('div', {
      staticClass: 'ui-badge',
      class: [
        'position-relative',
        {
          'd-inline-flex': !this.block,
          'd-flex': !!this.block
        },
        
      ],
      style: [
        {
          '--ui-badge-size': returnPX(this.size),
          '--ui-badge-z-index': this.zIndex
        }
      ]
    }, [ 
      this.$slots.default,
      dotTransition
    ])
  }
}