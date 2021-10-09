import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { returnPX } from '../../util'

@Component
export default class uiLoader extends Vue {
  static install: (vue: any) => any
  
  @Prop({ type: Boolean }) circle! : boolean

  @Prop({ type: Boolean }) block! : boolean

  @Prop({ type: String }) type! : string | null

  @Prop() w! : string | null

  @Prop() h! : string | null

  public render(h: any): VNode {
    return h('div', {
      staticClass: 'ui-loader',
      class: [
        {
          'd-inline-flex': !this.block,
          'd-flex': !!this.block
        },
        [
          'position-relative',
          'transition',
          'overflow-hidden'
        ],
        {
          [`ui-loader--${this.type}`]: !!this.type
        }
      ],
      style: {
        '--ui-loader-width': returnPX(this.w),
        '--ui-loader-height': returnPX(this.h)
      }
    })
  }
}