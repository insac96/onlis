import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { uiComponentColor } from '../../../mixins/component'
import { returnPX } from '../../../util'

@Component
export default class uiListItem extends uiComponentColor {

  public render(h: any): VNode {
    const title = h('div', {
      staticClass: 'ui-list-group__title',
    }, [
      !!this.$slots.title ? this.$slots.title : 'Group'
    ])

    const content = h('div', {
      staticClass: 'ui-list-group__content',
    }, [
      this.$slots.default
    ])

    return h('div', {
      staticClass: 'ui-list-group',
      class: [
        'ui-component--flex',
      ]
    }, [
      title,
      content
    ]) 
  }
}