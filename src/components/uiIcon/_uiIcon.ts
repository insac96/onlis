import { VNode } from 'vue'
import { Component, Prop, Model } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins'

@Component
export default class uiIcon extends uiComponentColor {

  @Prop({ type: String }) color!: string

  @Prop({ type: String }) size!: string

  @Prop({ type: String }) name!: string

  @Prop({ type: Boolean }) left!: boolean

  @Prop({ type: Boolean }) right!: boolean

  get iconService () {
    return this.$onlis.icon
  }

  public render(h : any): VNode {
    return h(`${this.iconService.tab}`, {
      class: [
        'd-inline-flex',
        `${this.iconService.font}`,
        `${this.name}`,
        { 
          [`mr-${this.iconService.left}`] : !!this.left,
          [`ml-${this.iconService.right}`] : !!this.right,
          [`font-size-${this.size}`] : !!this.size 
        },
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          color: !!this.isColor ? `rgb(var(--ui-color))` : null
        }
      ],
      attrs: this.$attrs,
      on: this.$listeners
    })
  }
}