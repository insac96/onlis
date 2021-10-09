import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class uiListItem extends Vue {

  static install: (vue: any) => any

  componentName: string = 'list-group'

  // Get Parent Sidebar
  get parentList () {
    const parent = this.$parent as any
    if(!parent) return null

    return parent.componentName === 'list' ? parent : null
  }

  public render(h: any): VNode {
    const title = h('div', {
      staticClass: 'ui-list-group__title',
      class: [
        'd-flex',
        'align-center',
        'pa-2',
        'font-size-s',
        'font-weight-700',
        'user-none'
      ]
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
        'd-flex',
        'flex-column'
      ]
    }, [
      title,
      content
    ]) 
  }
}