import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class uiCol extends Vue {
  static install: (vue: any) => any

  @Prop({ type: [String, Number], default: '12' }) w!: string | number

  @Prop({ type: [String, Number], default: '0' }) offset!: string | number

  @Prop({ type: [String, Number], default: '0' }) order!: string | number

  @Prop({ type: [String, Number], default: '0' }) xl!: string | number

  @Prop({ type: [String, Number], default: '0' }) lg!: string | number

  @Prop({ type: [String, Number], default: '0' }) md!: string | number

  @Prop({ type: [String, Number], default: '0' }) sm!: string | number

  @Prop({ type: [String, Number], default: '0' }) xs!: string | number

  public render(h: any): VNode {
    return h('div', {
      staticClass: 'ui-col',
      class: [
        'position-relative',
        `ui-col--w-${this.w}`,
        `ui-col--offset-${this.offset}`,
        `ui-col--xl-${this.xl}`,
        `ui-col--lg-${this.lg}`,
        `ui-col--md-${this.md}`,
        `ui-col--sm-${this.sm}`,
        `ui-col--xs-${this.xs}`,
        `order-${this.order}`
      ]
    }, [
      this.$slots.default 
    ])
  }
}