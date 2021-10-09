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

  @Prop({ type: Boolean, default: true }) open! : boolean

  @Prop({ type: Boolean }) absolute! : boolean

  @Prop({ type: Boolean }) right! : boolean

  @Prop({ type: Boolean }) square!: boolean
  
  @Prop({ type: Number, default: 250 }) width! : number

  @Prop({ type: Boolean }) preventClose!: boolean

  @Prop({ type: Boolean }) closeOnItem! : boolean

  @Prop({ type: Boolean }) autoScroll! : boolean 

  // Get Position
  get position () {
    return !!this.right ? 'right' : 'left'
  }

  // Is Layout Desktop
  get isLayoutDesktop () {
    return !!this.layout && !!this.$onlis.breakpoint.isDesktop
  }

  // Layout Position
  get layoutService () {
    return this.$onlis.layout
  }

  get height () {
    if(!this.isLayoutDesktop) return '100%'

    const clippedLeft = this.layoutService.clippedTopLeft
    const clippedRight = this.layoutService.clippedTopRight

    if((!clippedLeft && !this.right) || (!clippedRight && !!this.right)) {
      return `calc(100% - ${this.layoutService.top}px)`
    }
    else {
      return '100%'
    }
  }

  // Set Layout
  setLayout () {
    if(this.width <= 0) return
    if(!this.isLayoutDesktop) return

    this.layoutService.set(this.position, this.width)
  }

  // Remove Layout
  removeLayout () {
    if(!this.layout) return

    this.layoutService.remove(this.position)
  }

  // Auto Show if Layout = true and is Desktop
  autoShow () {
    if(!this.isLayoutDesktop) return

    if(!this.open){
      this.$emit('update:open', true)
    }
    else {
      this.setLayout()
    }
  }

  // Auto Hide if Layout = true and isn't Desktop
  autoHide () {
    if(!!this.isLayoutDesktop) return

    if(!!this.open){
      this.$emit('update:open', false)
    }
  }

  // Click OutSide
  clickOutSide (event : any) {
    if(!this.open) return
    if(!!this.preventClose) return

    // Disabled When is Layout and Desktop
    if(!!this.isLayoutDesktop) return
    
    // Update
    this.$emit('update:open', false)
  }

  // Insert to Parent
  insertSidebar () {
    if(!!this.absolute) return

    this.$nextTick(() => {
      insertBody(this.$el as HTMLElement)
    })
  }

  // Remove in Parent
  removeSidebar () {
    if(!!this.absolute) return

    this.removeLayout()

    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }

  // Show
  show () {
    this.insertSidebar()
    this.$nextTick(() => this.$emit('show'))

    this.setLayout()
  }

  hide () {
    this.$nextTick(() => this.$emit('hide'))

    this.removeLayout()
  }

  // Check Open
  @Watch('open')
  onOpenChange(val: boolean) {
    if (!!val) { 
      this.show()
    }
    else {
      this.hide()
    }
  }

  // Watch Layout
  @Watch('isLayoutDesktop')
  onDesktopChange(val : boolean) {
    if(!!val){
      this.autoShow()
    }
    else {
      this.autoHide()
    }
  }

  @Watch('width')
  @Watch('right')
  onPositionChange(){
    this.setLayout()
  }

  // Set Layout when Created
  created() {
    this.autoShow()
  }

  // Insert Sidebar if *open* initial is True
  mounted() {
    if(!!this.open) return this.insertSidebar()
  }

  // Remove Sidebar in Parent
  beforeDestroy () {
    this.removeSidebar()
  }

  // Render
  public render(h: any): VNode {
    const header = h('div', {
      staticClass: 'ui-sidebar__header'
    }, [
      this.$slots.header
    ])

    const body = h('div', {
      staticClass: 'ui-scroll',
      ref: 'body',
      class: [
        'grow-1',
        {
          'ui-scroll--right': !!this.right
        }
      ]
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
        'd-flex',
        'flex-column',
        {
          'ui-sidebar--layout': !!this.isLayoutDesktop,
          'ui-sidebar--left': !this.right,
          'ui-sidebar--right': !!this.right,
          'ui-sidebar--square': !!this.square,
          'ui-sidebar--noRadiusTop': !!this.isLayoutDesktop && this.layoutService.top > 0,
        },
        this.classFashion,
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-sidebar-width': returnPX(this.width),
          '--ui-sidebar-height': this.height
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
      !!this.$slots.header && header,
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