import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { returnPX } from '../../util'

@Component
export default class uiMain extends Vue {
  static install: (vue: any) => void

  @Prop({ type: Number, default: 2 }) padding! : number

  get layoutService () {
    return this.$onlis.layout
  }

  public render(h: any): VNode {
    const content = h('div', {
      staticClass: 'ui-main-content',
      class: [
        'transition',
        `pa-${this.padding}`
      ]
    }, [
      this.$slots.default
    ])

    return h('div', {
      staticClass: 'ui-main',
      style: {
        'padding-top': returnPX(this.layoutService.top),
        'padding-bottom': returnPX(this.layoutService.bottom),
        'padding-left': returnPX(this.layoutService.left),
        'padding-right': returnPX(this.layoutService.right)
      }
    }, [
      content
    ])
  }
}