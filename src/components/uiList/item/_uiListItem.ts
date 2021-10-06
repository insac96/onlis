import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { uiComponentColor } from '../../../mixins/component'
import { uiLoading } from '../../../mixins/public'

@Component
export default class uiListItem extends uiComponentColor {

  @Prop({ type: String, default: 'transparent' }) fashion!: string

  @Prop({ type: String, default: 'full' }) fashionActive!: string

  @Prop({ type: Boolean }) center! : boolean

  onClick (event : any) {
    if(!this.isPointer) return
    this.startRipple(event, this.$el as HTMLElement)
    this.onLink()
    this.$emit('click', event)
  }
  
  public render(h: any): VNode {
    const left = h('div', {
      staticClass: 'ui-list-item__left',
    }, [
      this.$slots.left
    ])

    const title = h('div', {
      staticClass: 'ui-list-item__center__title',
    }, [
      this.$slots.title
    ])

    const body = h('div', {
      staticClass: 'ui-list-item__center__body',
    }, [
      this.$slots.default
    ])

    const center = h('div', {
      staticClass: 'ui-list-item__center',
    }, [
      this.$slots.title && title,
      body
    ])

    const right = h('div', {
      staticClass: 'ui-list-item__right',
    }, [
      this.$slots.right
    ])


    return h('div', {
      staticClass: 'ui-list-item',
      class: [
        'ui-component',
        'ui-component--flex',
        {
          'ui-list-item--center': !!this.center
        },
        this.classStatus,
        this.classFashion,
        this.classColor
      ],
      style: [
        this.styleColor
      ],
      attrs: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners,

        click: this.onClick
      }
    }, [
      !!this.isLoading && h(uiLoading),
      !!this.$slots.left && left,
      center,
      !!this.$slots.right && right,
    ]) 
  }
}