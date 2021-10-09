import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class uiFlex extends Vue {
  static install: (vue: any) => any

  @Prop({ type: Boolean  }) inline! : boolean

  @Prop({ type: String , default: 'space-between' }) jus! : string

  @Prop({ type: String , default: 'center' }) align! : string

  @Prop({ type: String, default: 'row' }) dir! : string

  @Prop({ type: String, default: 'center' }) content! : string

  @Prop({ type: Boolean }) wrap! : boolean
  
  public render(h: any): VNode {
    return h('div', {
      staticClass: 'ui-flex',
      class: [
        {
          'd-flex': !this.inline,
          'd-inline-flex': !!this.inline
        },
        `justify-${this.jus}`,
        `align-${this.align}`,
        `flex-${this.dir}`,
        `align-content-${this.content}`,
        {
          'flex-wrap': !!this.wrap,
          'flex-nowrap': !this.wrap,
        }
      ]
    }, [
      this.$slots.default
    ]) 
  }
}