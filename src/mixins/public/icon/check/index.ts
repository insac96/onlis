import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import './_style.sass'

@Component
export default class uiIconCheck extends Vue {
  @Prop({ type: Boolean }) checked! : boolean

  render(h: any): VNode {
    const icon = h('i', {
      staticClass: 'ui-icon-check',
      class: [
        {
          'ui-icon-check--checked': this.checked,
        }
      ]
    })

    return icon
  }
}