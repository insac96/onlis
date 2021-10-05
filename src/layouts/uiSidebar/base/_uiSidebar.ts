import { VNode } from 'vue'
import { Component, Prop, Model, Watch } from 'vue-property-decorator'
import { uiComponentColor } from '../../../mixins/component'
import { returnPX , insertBody } from '../../../util'
import uiClickOutside from '../../../directives/clickOutside'

@Component({
  directives: {
    'uiClickOutside': uiClickOutside
  }
})
export default class uiSidebar extends uiComponentColor {

  componentName : string = 'sidebar'

  @Model('model', { type: [ String, Number ] }) readonly value!: string | number

  @Prop({ type: Boolean }) layout! : boolean

  @Prop({ type: Boolean }) open! : boolean

  @Prop({ type: Boolean }) absolute! : boolean

  @Prop({ type: Boolean }) right! : boolean
  
  @Prop({ type: Number, default: 250 }) width! : number

  @Prop({ type: Boolean }) preventClose!: boolean

  @Prop({ type: Boolean }) closeOnItem! : boolean

  @Prop({ type: Boolean }) autoScroll! : boolean 

  // Is Desktop
  get isDesktop () {
    return !!this.$onlis.breakpoint.isDesktop
  }

  // Is Layout
  get isLayout () {
    return !!this.layout
  }

  // Layout Service
  get layoutService () {
    return this.$onlis.layout
  }

  // Set Layout
  setLayout () {
    if(!this.isLayout) return
    if(!this.isDesktop) return

    const position = !!this.right ? 'right' : 'left'
    this.layoutService.set(position, this.width)
  }

  // Remove Layout
  removeLayout () {
    if(!this.isLayout) return

    const position = !!this.right ? 'right' : 'left'
    this.layoutService.remove(position)
  }

  // Auto Open when is Desktop
  autoShow () {
    if(!this.isLayout) return
    if(!this.isDesktop) return

    if(!this.open){
      this.$emit('update:open', true)
    }
    else {
      this.setLayout()
    }
  }

  // Auto Hide when is Mobile or Tablet
  autoHide () {
    if(!this.isLayout) return

    if(!!this.open){
      this.$emit('update:open', false)
    }
  }

  // Set Layout when Create
  created () {
    this.autoShow()
  }

  // Watch Desktop
  @Watch('isDesktop')
  onDesktopChange(val : boolean) {
    if(!!val){
      this.autoShow()
    }
    else {
      this.autoHide()
    }
  }

  // Click OutSide
  clickOutSide (event : any) {
    if(!this.open) return
    if(!!this.preventClose) return

    // Disabled When is Layout and Desktop Size
    if(!!this.isLayout && !!this.isDesktop) return
    
    this.$emit('update:open', false)
  }

  // Insert
  insertSidebar () {
    if(!!this.absolute) return

    this.$nextTick(() => {
      insertBody(this.$el as HTMLElement)
    })
  }

  // Remove
  beforeDestroy () {
    if(!!this.absolute) return

    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }

  // Show
  show () {
    this.insertSidebar()

    this.setLayout()

    this.$nextTick(() => this.$emit('open'))
  }

  // Hide 
  hide () {
    this.removeLayout()

    this.$emit('close')
  }

  // Check Value
  @Watch('open')
  onValueChange(val: boolean) {
    if (!!val) return this.show()
    this.hide()
  }

  // Render
  public render(h: any): VNode {
    const logo = h('div', {
      staticClass: 'ui-sidebar__logo'
    }, [
      this.$slots.logo
    ])

    const body = h('div', {
      staticClass: 'ui-scroll',
      ref: 'body',
      class: {
        'ui-scroll--right': !!this.right
      }
    }, [
      h('div', {
        staticClass: 'ui-sidebar__body',
        class: [
          'ui-scroll__content'
        ]
      }, [
        this.$slots.default
      ])
    ])

    const footer = h('div', {
      staticClass: 'ui-sidebar__footer'
    }, [
      this.$slots.footer
    ])

    const sidebar = h('div', {
      staticClass: 'ui-sidebar',
      class: [
        'ui-component',
        'ui-component--flex',
        {
          'ui-component-fashion--basic': !this.fashion || this.fashion !== 'full',
          'ui-component-fashion--full': this.fashion === 'full',
        },
        {
          'ui-sidebar--left': !this.right,
          'ui-sidebar--right': !!this.right,
        },
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-sidebar-width': returnPX(this.width)
        }
      ],
      directives: [
        {
          name: 'show',
          value: this.open
        },
        {
          name: 'ui-click-outside',
          value: this.clickOutSide
        }
      ]
    }, [
      !!this.$slots.logo && logo,
      body,
      !!this.$slots.footer && footer
    ])

    return h('transition', {
      props: {
        name: `ui-${!!this.right ? 'left' : 'right'}`
      }
    }, [
      sidebar
    ])
  }
}