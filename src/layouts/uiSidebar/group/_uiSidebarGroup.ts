import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { uiComponent } from '../../../mixins/component'

@Component
export default class uiSidebarGroup extends uiComponent {

  componentName : string = 'sidebar-group'

  isOpen : boolean = false

  // ID
  get id () {
    return `sidebar-group-${this._uid}`
  }

  // Get Parent Sidebar
  get parentRoot () {
    const parent = this.$parent as any
    if(!parent) return null

    if(parent.componentName === 'sidebar'){
      return parent
    }
    else if (parent.componentName === 'sidebar-group'){
      return !!(parent.parentRoot) ? (parent.parentRoot) : null
    }
    else return null
  }

  // Get Parent Group
  get parentGroup () {
    const parent = this.$parent as any
    if(!parent) return null

    return parent.componentName === 'sidebar-group' ? parent : null
  }

  // Target Click
  onTargetClick () {
    this.isOpen = !this.isOpen
  }

  // Render
  public render(h: any): VNode {
    const target = h('div', {
      staticClass: 'ui-sidebar-group__target',
      on: {
        click: this.onTargetClick
      }
    }, [
      this.$slots.target
    ])

    const child = h('div', {
      staticClass: 'ui-sidebar-group__child',
      directives: [
        {
          name: 'show',
          value: this.isOpen
        }
      ]
    }, [
      this.$slots.child
    ])

    const childTransition = h('transition', {
      props: {
        name: !!this.parentRoot ? `ui-${!!this.parentRoot.right ? 'left' : 'right'}` : 'ui-show'
      }
    }, [
      child
    ])

    return h('div', {
      staticClass: 'ui-sidebar-group',
      domProps: {
        id: this.id
      },
      class: {
        'ui-component--disabled': !!this.isDisabled
      }
    }, [
      !!this.$slots.target && target,
      !!this.$slots.child && childTransition
    ])
  }
}