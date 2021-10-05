import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import './_style.sass'

@Component
export default class uiIconArrow extends Vue {
  @Prop({ type: Boolean, default: false }) top!: boolean

  @Prop({ type: Boolean, default: false }) left!: boolean

  @Prop({ type: Boolean, default: false }) right!: boolean

  render(h: any): VNode {
    return h('i', {
      staticClass: 'ui-icon-arrow',
      class: {
        'ui-icon-arrow--top': !!this.top,
        'ui-icon-arrow--left': !!this.left,
        'ui-icon-arrow--right': !!this.right,
      }
    })
  }
}