import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import './_style.sass'

@Component
export default class uiIconClose extends Vue {
  @Prop({ type: String, default: null }) size! : string | null

  render(h: any): VNode {
    return h('i', {
      staticClass: 'ui-icon-close',
      style: {
        '--ui-icon-close-size': this.size
      },
      on: {
        ...this.$listeners
      }
    })
  }
}