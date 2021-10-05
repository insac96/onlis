import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { returnPX } from '../../../util'

@Component
export default class uiList extends Vue {
  static install: (vue: any) => any

  @Prop({ type: Boolean }) space! : boolean

  @Prop({ type: Boolean }) dense! : boolean
  
  public render(h: any): VNode {
    return h('div', {
      staticClass: 'ui-list',
      class: [
        'ui-component--flex',
        {
          'ui-list--space': !!this.space,
          'ui-list--dense': !!this.space && !!this.dense
        }
      ]
    }, [
      this.$slots.default
    ]) 
  }
}