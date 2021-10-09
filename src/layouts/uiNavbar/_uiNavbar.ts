import { VNode } from 'vue'
import { Component, Prop, Model, Watch } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { returnPX, insertBody } from '../../util'
import uiButton from '../../components/uiButton/_uiButton'

@Component
export default class uiNavbar extends uiComponentColor {

  @Prop({ type: String , default: 'full' }) fashion!: string

  @Prop({ type: String }) color!: string

  @Prop({ type: Number, default: 50 }) height! : number

  @Prop({ type: Boolean }) layout!: boolean

  @Prop({ type: Boolean }) clippedLeft!: boolean

  @Prop({ type: Boolean }) clippedRight!: boolean

  @Prop({ type: Boolean }) sticky!: boolean

  @Prop({ type: Boolean }) square!: boolean

  @Prop({ type: Boolean }) hideOnScroll!: boolean

  @Prop({ type: Boolean }) contentRight!: boolean

  @Prop({ type: Boolean }) contentCenter!: boolean

  @Prop({ type: Boolean }) logoCenter!: boolean

  isHidden : boolean = false

  scrollTop : number = 0

  get isDesktop () {
    return this.$onlis.breakpoint.isDesktop
  }

  get isLayoutDesktop () {
    return !!this.layout 
    && !!this.isDesktop
  }

  // Layout Position
  get layoutService () {
    return this.$onlis.layout
  }

  // Get Width
  get width () {
    if(!this.isLayoutDesktop) return '100%'

    const left = !!this.clippedLeft ? this.layoutService.left : 0
    const right = !!this.clippedRight ? this.layoutService.right : 0

    return `calc(100% - ${left}px - ${right}px)`
  }

  // Get Left
  get left () {
    if(!this.isLayoutDesktop) return 0

    return !!this.clippedLeft ? this.layoutService.left : 0
  }

  // Get Right
  get right () {
    if(!this.isLayoutDesktop) return 0

    return !!this.clippedRight ? this.layoutService.right : 0
  }

  // Set Layout
  setLayout () {
    if(this.height <= 0) return
    if(!this.layout) return

    this.layoutService.set('top', this.height)

    if(!!this.clippedLeft){
      this.layoutService.set('clippedTopLeft', true)
    }
    else {
      this.layoutService.set('clippedTopLeft', false)
    }
    
    if(!!this.clippedRight){
      this.layoutService.set('clippedTopRight', true)
    }
    else {
      this.layoutService.set('clippedTopRight', false)
    }
  }

  // Remove Layout
  removeLayout () {
    if(!this.layout) return
    this.layoutService.remove('top')

    if(!!this.clippedLeft){
      this.layoutService.set('clippedTopLeft', false)
    }
    
    if(!!this.clippedRight){
      this.layoutService.set('clippedTopRight', false)
    }
  }

  // Insert to Parent
  insertNavbar () {
    if(!this.layout) return
    this.$nextTick(() => insertBody(this.$el as HTMLElement))
  }

  // Remove in Parent
  removeNavbar () {
    if(!this.layout) return

    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }

  // Init Scroll
  initScroll () {
    if(!this.hideOnScroll) return
    if(!this.layout) return

    this.scrollTop = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  }

  // Remove Scroll
  removeScroll () {
    if(!this.hideOnScroll) return
    if(!this.layout) return

    window.removeEventListener('scroll', this.onScroll)
  }

  // Hide On Scroll
  onScroll (event : any) {
    const scrollTop = window.pageYOffset

    if (scrollTop > this.scrollTop) {
      this.isHidden = true
    } else {
      this.isHidden = false
    }

    this.scrollTop = scrollTop
  }

  // Watch hideOnScroll
  @Watch('hideOnScroll')
  onHideOnScrollChange(val : boolean){
    if(!!val) {
      this.initScroll()
    }
    else {
      this.removeScroll()
    }
  }

  @Watch('height')
  @Watch('clippedLeft')
  @Watch('clippedRight')
  onPositionChange(){
    this.setLayout()
  }

  // Created
  created () {
    this.setLayout()
  }

  // Mounted
  mounted() {
    this.insertNavbar()
    this.initScroll()
  }

  // BeforeDestroy
  beforeDestroy () {
    this.removeLayout()
    this.removeNavbar()
    this.removeScroll()
  }

  public render(h: any): VNode {
    // Icon
    const icon = h(uiButton, {
      staticClass: 'ui-navbar__icon',
      props: {
        icon: true,
        fashion: 'text',
        color: this.color || null,
        size: 's'
      },
      class: [
        'mr-1',
        'font-size-h6'
      ],
      on: {
        click: () => this.$emit('icon')
      }
    }, [
      this.$slots.icon
    ])

    // Logo
    const logo = h('div', {
      staticClass: 'ui-navbar__logo',
      class: [
        'font-size-xl',
        'font-weight-600',
        'user-none',
        {
          'ui-navbar__logo--center': !!this.logoCenter
        }
      ]
    }, [
      this.$slots.logo
    ])

    // Content
    const content = h('div', {
      staticClass: 'ui-navbar__content',
      class: [
        'd-inline-flex',
        'align-center',
        'px-1',
        {
          'ml-auto': !!this.contentRight,
          'mx-auto': !!this.contentCenter
        }
      ]
    }, [
      this.$slots.default
    ])

    // Right
    const right = h('div', {
      staticClass: 'ui-navbar__right',
      class: [
        'd-inline-flex',
        'align-center',
        {
          'ml-auto': !this.contentRight && !this.contentCenter
        }
      ]
    }, [
      this.$slots.right
    ])

    // Main
    return h('div', {
      staticClass: 'ui-navbar',
      class: [
        'ui-component',
        'd-flex',
        'align-center',
        'px-1',
        {
          'ui-navbar--layout': !!this.layout,
          'ui-navbar--sticky': !!this.sticky,
          'ui-navbar--hidden': !!this.isHidden,
        },
        {
          'rb-0': !!this.square,
          'rbr-0': this.layoutService.right > 0,
          'rbl-0': this.layoutService.left > 0,
        },
        this.classFashion,
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-navbar-height': returnPX(this.height),
          '--ui-navbar-width': returnPX(this.width),
          '--ui-navbar-left': returnPX(this.left),
          '--ui-navbar-right': returnPX(this.right)
        }
      ]
    }, [
      !!this.$slots.icon && icon,
      !!this.$slots.logo && logo,
      content,
      !!this.$slots.right && right
    ])
  }
}