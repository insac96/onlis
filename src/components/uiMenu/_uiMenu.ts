import Vue, { VNode } from 'vue'
import { Component, Prop, Watch, Model } from 'vue-property-decorator'
import { is_Undefined, returnPX, insertBody } from '../../util'
import uiClickOutside from '../../directives/clickOutside'

@Component({
  directives: {
    'uiClickOutside': uiClickOutside
  }
})
export default class uiMain extends Vue {
  static install: (vue: any) => void

  @Model('model', { type: Boolean, default: undefined }) readonly value!: boolean

  @Prop({ type: Boolean }) block! : boolean

  @Prop({ default: null }) width! : any

  @Prop({ default: null }) maxHeight! : any

  @Prop({ type: Boolean }) fixed! : boolean

  @Prop({ type: Boolean }) top! : boolean

  @Prop({ type: Boolean }) right! : boolean

  @Prop({ type: Boolean }) center! : boolean

  @Prop({ type: Number, default: 3 }) offsetY! : any

  @Prop({ type: Number, default: 0 }) offsetX! : any

  @Prop({ type: Boolean }) targetMax! : boolean

  @Prop({ type: Boolean }) targetToggle! : boolean

  @Prop({ type: Boolean }) targetWidth! : boolean

  @Prop({ type: Boolean, default: true }) closeOnContent! : boolean

  isShow : boolean = false

  isMenuHover : boolean = false

  // Has Model
  get hasValue () {
    return !is_Undefined(this.value)
  }

  // Insert to Parent
  insertMenu () {
    this.$nextTick(() => {
      let menu = this.$refs.menu as HTMLElement

      insertBody(menu)
      this.setPos()
      window.addEventListener('resize', this.setPos, { passive: true })
    })
  }

  // Remove in Parent
  removeMenu () {
    let menu = this.$refs.dropdown as HTMLElement

    if(!!this.isShow) {
      this.hide()
    }

    if (menu && menu.parentNode) {
      menu.parentNode.removeChild(menu)
    }
  }

  // Click OutSide
  clickOutSide (event : any) {
    if(!this.isShow) return 
    if(!!this.hasValue) return
    if(!!event.target.closest(`#menu-${this._uid}`)) return

    this.hide()
  }

  // Set Pos
  setPos () {
    const target = this.$refs.target as HTMLElement
    const menu = this.$refs.menu as HTMLElement

    // Reset Pos
    menu.style.maxWidth = ''
    menu.style.top = ''
    menu.style.left = ''

    // Client
    const clientWidth = window.innerWidth || document.documentElement.clientWidth
    const clientScrollTop = !!this.fixed ? 0 : document.documentElement.scrollTop
    const clientScrollLeft = !!this.fixed ? 0 : document.documentElement.scrollLeft

    // Target Pos
    const targetPos = target.getBoundingClientRect()
    const target_left = targetPos.left
    const target_top = targetPos.top
    const target_width = targetPos.width
    const target_height = targetPos.height

    if(!!this.targetMax || !!this.targetWidth){
      menu.style.maxWidth = returnPX(target_width)
    }

    if(!!this.targetWidth){
      menu.style.width = returnPX(target_width)
    }

    // Menu Pos
    const menuPos = menu.getBoundingClientRect()
    const menu_width = menuPos.width
    const menu_height = menuPos.height

    // New Menu Pos
    let NewPos : {
      top: number | string
      left: number | string
    } = {
      top: 'auto',
      left: 'auto'
    }

    // Set Top
    if(!this.top){
      NewPos.top = (target_top + clientScrollTop) + target_height + this.offsetY
    }
    else {
      NewPos.top = (target_top + clientScrollTop) - menu_height - this.offsetY
    }

    // Set Left
    if(!!this.right){
      NewPos.left = (target_left + clientScrollLeft) + (target_width - menu_width) - this.offsetX
    }
    else if (!!this.center) {
      NewPos.left = (target_left + clientScrollLeft) + (target_width / 2) - (menu_width / 2)
    }
    else if (!this.center && !this.right) {
      NewPos.left = (target_left + clientScrollLeft) + this.offsetX
    }

    // Check OutSide
    if((Number(NewPos.left) + menu_width) >= clientWidth){
      NewPos.left = (target_left + clientScrollLeft) + (target_width / 2) - (menu_width / 2)
    }

    // Init
    menu.style.top = returnPX(NewPos.top)
    menu.style.left = returnPX(NewPos.left)
  }

  // Show
  show () {
    if(!this.$slots.default) return

    this.isShow = true
    this.insertMenu()
    this.$nextTick(() => this.$emit('show'))
  }

  // Hide
  hide () {
    if(!this.$slots.default) return

    this.isShow = false
    window.removeEventListener('resize', this.setPos)
    this.$nextTick(() => this.$emit('hide'))
  }

  // Target Click
  targetClick () {
    if(!!this.hasValue){
      if(!!this.targetToggle) return this.$emit('model', !this.value)
      this.$emit('model', true)
    }
    else {
      if(!!this.targetToggle){
        if(!this.isShow) return this.show()
        this.hide()
      }
      else {
        this.show()
      }
    }
  }

  // Content Click
  contentClick () {
    if(!this.closeOnContent) return

    if(!!this.hasValue) {
      this.$emit('model', false)
    }

    setTimeout(() => {
      this.hide()
    }, 100)
  }

  // Watch Value
  @Watch('value')
  onValueChange (val : boolean) {
    if(!!val) {
      this.show()
    } 
    else {
      this.hide()
    }
  }

  // Watch Position
  @Watch('block')
  @Watch('fixed')
  @Watch('width')
  @Watch('maxHeight')
  @Watch('right')
  @Watch('center')
  @Watch('top')
  @Watch('targetMax')
  @Watch('targetWidth')
  @Watch('offsetY')
  @Watch('offsetX')
  onPositionChange () {
    if(!this.isShow) return

    this.setPos()
  }

  // Mounted
  mounted () {
    if(!!this.hasValue && !!this.value) return this.show()
  }

  // Before Destroy
  beforeDestroy () {
    this.removeMenu()
  }

  // Render
  public render(h: any): VNode {
    const menu = h('div', {
      ref: 'menu',
      staticClass: 'ui-menu',
      class: [
        'ra',
        'overflow',
        'ui-component',
        'ui-component--shadow',
        'ui-fashion--basic',
        {
          'position-absolute': !this.fixed,
          'position-fixed': !!this.fixed
        }
      ],
      style: {
        '--ui-menu-width': !this.targetWidth ? returnPX(this.width) : null,
        '--ui-menu-max-height': returnPX(this.maxHeight)
      },
      on: {
        click: this.contentClick
      },
      directives: [
        {
          name: 'show',
          value: this.isShow
        },
        {
          name: 'ui-click-outside',
          value: this.clickOutSide
        }
      ]
    }, [
      this.$slots.default
    ])

    const menuTransition = h('transition', {
      props: {
        name: 'ui-menu'
      }
    }, [
      menu
    ])

    return h('div', {
      ref: 'target',
      staticClass: 'ui-menu-target',
      domProps: {
        id: `menu-${this._uid}`,
      },
      class: [
        'position-relative',
        {
          'd-inline-flex': !this.block,
          'd-flex': !!this.block
        }
      ],
      on: {
        click: this.targetClick
      }
    }, [
      this.$slots.target,
      !!this.$slots.default && menuTransition
    ])
  }
}