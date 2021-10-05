import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { uiComponentColor } from '../../../mixins/component'
import { uiLoading, uiIconArrow } from '../../../mixins/public'
import { returnPX, getColor, is_Undefined } from '../../../util'

@Component
export default class uiSidebarItem extends uiComponentColor {

  @Prop({ type: [ String, Number ]}) value!: string | number

  @Prop({ type: String, default: 'transparent' }) fashion!: string

  @Prop({ type: String, default: 'full' }) fashionActive!: string

  @Prop({ type: String, default: null }) color!: string

  @Prop({ type: Boolean }) target!: boolean

  // Color
  get newClassColor () {
    if(!this.parentRoot) return this.classColor
    
    else return !!this.isColor ? this.classColor : this.parentRoot.classColor
  }

  get newStyleColor () {
    if(!this.parentRoot) return this.styleColor
    
    else return !!this.isColor ? this.styleColor : this.parentRoot.styleColor
  }

  // ID
  get id () {
    return `sidebar-item-${this._uid}`
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

  // Is Group Open
  get isGroupOpen () {
    return !!this.parentGroup ? this.parentGroup.isOpen : false
  }

  // Is Active
  get isActive () {
    if(!this.parentRoot) return false
    if(!!this.target) return false
    else if(!!this.active) return true
    else if(!!this.to && !!this.$route){
      const pathRoute = this.$route.path
      const fullPathRoute = this.$route.fullPath

      return (pathRoute == this.to) || (fullPathRoute == this.to) ? true : false
    }
    else if(!!this.parentRoot.value) return this.parentRoot.value === this.value
    else return false
  }

  // Is Pointer
  get isPointer() {
    return !!this.$listeners.click 
    || !!this.target
    || !!this.to 
    || !!this.href 
    || (!!this.parentRoot && !is_Undefined(this.parentRoot.value) && !!this.value)
  }

  // On Item Click
  onClick (event : any) {
    if(!this.isPointer) return

    // Show Ripple
    this.startRipple(event, this.$el as HTMLElement)

    // If is Target
    if(!!this.target) {
      this.$emit('click', event)
    }

    // Else
    else {
      if(!!this.to || !!this.href){
        this.onLink()
      }
      else if(!!this.parentRoot && !is_Undefined(this.parentRoot.value) && !!this.value){
        this.parentRoot.$emit('model', this.value)
      }

      this.onCloseWhenCLick()
      this.$emit('click', event)
    }
  }

  // Close Sidebar when item Click
  onCloseWhenCLick () {
    if(!this.parentRoot) return
    if(!this.parentRoot.closeOnItem) return
    if(!!this.parentRoot.isLayout && !!this.parentRoot.isDesktop) return

    setTimeout(() => {
      this.parentRoot.$emit('update:open', false)
    }, 200)
  }

  // Auto Scroll
  scrollTo () {
    if(!this.isActive) return
    if(!this.parentRoot) return
    if(!this.parentRoot.autoScroll) return
    this.$el.scrollIntoView()
  }

  // Watch Active
  @Watch('isActive')
  onActiveChange () {
    this.scrollTo()
  }

  // Mounted
  mounted () {
    if(!this.parentRoot) return
    if(!this.parentGroup) return
    if(!this.isActive) return

    this.parentGroup.isOpen = true

    if(!!this.parentGroup.parentGroup){
      this.parentGroup.parentGroup.isOpen = true
    }
  }

  // Render
  public render(h: any): VNode {
    const icon = h('div', {
      staticClass: 'ui-sidebar-item__icon'
    }, [
      this.$slots.icon
    ])

    const content = h('div', {
      staticClass: 'ui-sidebar-item__content',
      class: {
        'ui-sidebar-item__content--notIcon': !this.$slots.icon
      }
    }, [
      this.$slots.default
    ])

    const right = h('div', {
      staticClass: 'ui-sidebar-item__right'
    }, [
      !!this.$slots.right ? this.$slots.right : h(uiIconArrow, {
        props: {
          top: !!this.isGroupOpen
        }
      })
    ])

    return h('div', {
      staticClass: 'ui-sidebar-item',
      domProps: {
        id: this.id
      },
      class: [
        'ui-component',
        'ui-component--flex',
        this.classStatus,
        this.newClassColor,
        this.classFashion
      ],
      style: [
        this.newStyleColor
      ],
      on: {
        ...this.$listeners,

        click: this.onClick
      }
    }, [
      !!this.$slots.icon && icon,
      content,
      !!this.$slots.right || !!this.target && right
    ])
  }
}