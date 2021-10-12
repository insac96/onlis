import { VNode } from 'vue'
import { Component, Model, Prop, Watch } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { uiLoading, uiIconClose } from '../../mixins/public'
import { insertBody, returnPX } from '../../util'
import { IDialogControl } from '../../../types'

@Component
export default class uiDialog extends uiComponentColor {

  @Model('model', { type: Boolean }) readonly value!: boolean

  @Prop({ type: Boolean }) absolute! : boolean

  @Prop({ type: Boolean }) top! : boolean

  @Prop({ type: Boolean }) bottom! : boolean

  @Prop({ type: Boolean }) fullScreen! : boolean

  @Prop({ type: Boolean }) noSpace! : boolean

  @Prop({ type: Boolean }) noEffect! : boolean

  @Prop() width! : any

  @Prop() maxHeight! : any

  @Prop({ type: Boolean }) preventClose! : boolean

  @Prop({ type: Boolean }) hideClose! : boolean

  @Prop({ type: Boolean }) custom! : boolean

   @Prop({ type: Boolean }) shake! : boolean

  @Prop({ type: Boolean, default: true }) blur! : boolean

  @Prop({ type: Object }) control! : IDialogControl

  isShow: boolean = false

  isShake: boolean = false

  // Control Position
  get controlConfig () {
    return {
      top: false,
      right: false,
      block: false,
      ...this.control
    }
  }

  // Effect Control
  get effectControl () {
    if(!this.controlConfig.block){
      if(!this.controlConfig.right) return 'ui-right'
      else return 'ui-left'
    }
    else {
      if(!this.controlConfig.top) return 'ui-up'
      else return 'ui-down'
    }
  }

  // Action Shake
  onShake () {
    if(!!this.isShake) return

    this.isShake = true

    setTimeout(() => {
      this.isShake = false
    }, 250)
  }

  // On Close
  onClose () {
    if(!!this.custom){
      this.$emit('custom-close')
    }
    else {
      this.$emit('model', false)
    }
  }

  // Insert to Parent
  insertDialog () {
    if(!!this.absolute) return

    this.$nextTick(() => {
      insertBody(this.$el as HTMLElement)
      document.body.style.overflow = 'hidden'
    })
  }

  // Remove in Parent
  removeDialog () {
    if(!!this.absolute) return

    if(!!this.isShow) {
      this.hide()
    }

    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }

  // Show, Hide
  show () {
    this.isShow = true
    this.insertDialog()
    this.$nextTick(() => this.$emit('show'))
  }

  hide () {
    this.isShow = false
    document.body.style.overflow = ''
    this.$nextTick(() => this.$emit('hide'))
  }

  // Watch Value
  @Watch('value')
  onValueChange(val: boolean) {
    if (!!val) {
      this.show()
    } 
    else {
      this.hide()
    }
  }

  // Watch Shake
  @Watch('shake')
  onShakeChange(val: boolean) {
    if(!val) return

    this.onShake()
    this.$emit('update:shake', false)
  }

  // Mounted
  mounted() {
    if(!!this.value) return this.show()
  }

  // Before Destroy
  beforeDestroy () {
    this.removeDialog()
  }

  // Render
  public render(h: any): VNode {
    // Icon Loading
    const loading = h(uiLoading, {
      props: {
        large: true,
        full: true
      }
    })

    // Icon Close
    const close = h(uiIconClose, {
      staticClass: 'ui-dialog__content__close',
      class: ['position-absolute'],
      on: {
        click: this.onClose
      }
    })

    // Title
    const title = h('div', {
      staticClass: 'ui-dialog__content__title',
      class: [
        'pa-2',
        'font-size-xl',
        'font-weight-700',
        'text-center',
        'line-normal',
        'user-none'
      ]
    }, [
      this.$slots.title
    ])

    // Header
    const header = h('div', {
      staticClass: 'ui-dialog__content__header',
      class: ['pa-2']
    }, [
      this.$slots.header
    ])

    // Body
    const body = h('div', {
      staticClass: 'ui-dialog__content__body',
      class: ['pa-2', 'grow-1']
    }, [
      this.$slots.default
    ])

    // Footer
    const footer = h('div', {
      staticClass: 'ui-dialog__content__footer',
      class: ['pa-2' ]
    }, [
      this.$slots.footer
    ])

    // Content
    const dialog = h('div', {
      staticClass: 'ui-dialog__content',
      class: [
        'ui-component',
        'd-flex',
        'flex-column',
        this.classStatus,
        this.classFashion,
        this.classColor
      ]
    }, [
      !!this.loading && loading,
      (!this.hideClose && !this.loading) && close,
      !!this.$slots.title && title,
      !!this.$slots.header && header,
      !!this.$slots.default && body,
      !!this.$slots.footer && footer
    ])

    // OverLay
    const overlay = h('div', {
      staticClass: 'ui-dialog__overlay',
      class: [
        'position-absolute',
        'cursor-pointer'
      ],
      on: {
        click: () => {
          if(!!this.preventClose || !!this.loading) return this.onShake()

          this.onClose()
        }
      }
    })

    // Control
    const control = h('div', {
      staticClass: 'ui-dialog__control',
      class: [
        'position-absolute',
        'pa-2',
        'overflow-x',
        {
          'ui-dialog__control--block': !!this.controlConfig.block,
          'ui-dialog__control--top': !!this.controlConfig.top,
          'ui-dialog__control--right': !!this.controlConfig.right,
        }
      ],
    }, [
      this.$slots.control
    ])

    // Root
    const root = h('div', {
      staticClass: 'ui-dialog',
      ref: 'dialog',
      class: [
        [
          'd-flex',
          'justify-center',
          'overflow-hidden'
        ],
        {
          'align-start': !!this.top,
          'align-center': !this.top && !this.bottom,
          'align-end': !!this.bottom
        },
        {
          'position-fixed': !this.absolute,
          'position-absolute': !!this.absolute,
        },
        {
          'ui-dialog--blur': !!this.blur,
          'ui-dialog--shake': !!this.isShake
        },
        {
          'ui-dialog--no-space': !!this.noSpace,
          'ui-dialog--no-effect': !!this.noEffect,
          'ui-dialog--center': !this.top && !this.bottom && !this.fullScreen,
          'ui-dialog--top': !!this.top,
          'ui-dialog--bottom': !!this.bottom,
          'ui-dialog--fullScreen': !!this.fullScreen,
        }
      ],
      style: [
        this.styleColor,
        {
          '--ui-dialog-width': returnPX(this.width),
          '--ui-dialog-max-height': returnPX(this.maxHeight)
        }
      ]
    }, [
      overlay,
      dialog,
      (!!this.$slots.control && !this.fullScreen) && control
    ])

    // Return
    return h('transition', {
      props: {
        name: 'effect-dialog'
      }
    }, [
      !!this.isShow && root
    ])
  }
}