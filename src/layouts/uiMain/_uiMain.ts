import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { IServices } from 'onlis/types'

@Component
export default class uiMain extends Vue {
  static install: (vue: any) => void

  get layoutService () {
    return (this.$onlis as IServices).layout
  }

  public render(h: any): VNode {
    const content = h('div', {
      staticClass: 'ui-main-content',
    }, [
      this.$slots.default
    ])

    return h('div', {
      staticClass: 'ui-main',
      style: {
        'padding-top': this.layoutService.top,
        'padding-bottom': this.layoutService.bottom,
        'padding-left': this.layoutService.left,
        'padding-right': this.layoutService.right
      }
    }, [
      content
    ])
  }
}