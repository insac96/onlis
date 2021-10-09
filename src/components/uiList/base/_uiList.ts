import { VNode } from 'vue'
import { Component, Prop , Model } from 'vue-property-decorator'
import { uiComponentColor } from '../../../mixins/component'
import { returnPX } from '../../../util'

@Component
export default class uiList extends uiComponentColor {

  componentName: string = 'list'

  @Model('model') readonly value!: any

  @Prop() maxHeight! : any
  
  public render(h: any): VNode {
    return h('div', {
      staticClass: 'ui-list',
      class: [
        'ui-component',
        'd-flex',
        'flex-column',
        'overflow-y',
        {
          'ui-component--border': !!this.border,
          'ui-component-fashion--basic': !this.fashion && this.fashion !== 'full',
          'ui-component-fashion--full': this.fashion === 'full',
        },
        this.classColor,
      ],
      style: [
        this.styleColor,
        {
          '--ui-list-max-height': returnPX(this.maxHeight)
        }
      ]
    }, [
      this.$slots.default
    ]) 
  }
}