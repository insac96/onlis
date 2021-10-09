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

  @Prop() maxWidth! : any

  @Prop() maxHeight! : any

  @Prop({ type: Boolean }) preventClose! : boolean

  @Prop({ type: Boolean }) hideClose! : boolean

  @Prop({ type: Boolean }) shake! : boolean

  @Prop({ type: Boolean }) fullScreen! : boolean

  @Prop({ type: Boolean }) custom! : boolean

  @Prop({ type: Boolean, default: true }) blur! : boolean

  @Prop({ type: Boolean }) bottom! : boolean

  @Prop({ type: Object }) control! : IDialogControl

  isShow: boolean = false

  isShake: boolean = false

  // Control
  get controlConfig () {
    return {
      top: false,
      right: false,
      block: false,
      ...this.control
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
    if(!!this.custom) return this.$emit('custom-close')
    else return this.$emit('model', false)
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

  // Vue Function
  @Watch('value')
  onValueChange(val: boolean) {
    if (!!val) {
      this.show()
    } 
    else {
      this.hide()
    }
  }

  @Watch('shake')
  onShakeChange(val: boolean) {
    if(!val) return

    this.onShake()
    this.$emit('update:shake', false)
  }

  mounted() {
    if(!!this.value) return this.show()
  }

  beforeDestroy () {
    this.removeDialog()
  }

  // Render
  public render(h: any): VNode {
    // Icon Loading
    const loading = h(uiLoading, {
      props: {
        large: true
      }
    })

    // Icon Close
    const close = h(uiIconClose, {
      staticClass: 'ui-dialog__close',
      on: {
        click: this.onClose
      }
    })

    // Title
    const title = h('div', {
      staticClass: 'ui-dialog__title',
      class: [
        'position-relative',
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
      staticClass: 'ui-dialog__header',
      class: [
        'position-relative',
        'pa-2'
      ]
    }, [
      this.$slots.header
    ])

    // Body
    const body = h('div', {
      staticClass: 'ui-dialog__body',
      class: [
        'position-relative',
        'pa-2',
        'grow-1',
        'overflow'
      ]
    }, [
      this.$slots.default
    ])

    // Footer
    const footer = h('div', {
      staticClass: 'ui-dialog__footer',
      class: [
        'position-relative',
        'pa-2'
      ]
    }, [
      this.$slots.footer
    ])

    // Content
    const dialog = h('div', {
      staticClass: 'ui-dialog',
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
      !this.hideClose && !this.loading && close,
      !!this.$slots.title && title,
      !!this.$slots.header && header,
      !!this.$slots.default && body,
      !!this.$slots.footer && footer
    ])

    // OverLay
    const overlay = h('div', {
      staticClass: 'ui-dialog-overlay',
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
      staticClass: 'ui-dialog-control',
      class: [
        'position-absolute',
        'pa-2',
        'overflow-x',
        {
          'ui-dialog-control--block': !!this.controlConfig.block,
          'ui-dialog-control--top': !!this.controlConfig.top,
          'ui-dialog-control--right': !!this.controlConfig.right
        }
      ]
    }, [
      this.$slots.control
    ])

    // Root
    const root = h('div', {
      staticClass: 'ui-dialog-root',
      ref: 'dialog',
      class: [
        [
          'd-flex',
          'justify-center',
          'overflow-hidden'
        ],
        {
          'align-center': !this.bottom,
          'align-end': !!this.bottom
        },
        {
          'position-fixed': !this.absolute,
          'position-absolute': !!this.absolute,
        },
        {
          'ui-dialog-root--blur': !!this.blur,
          'ui-dialog-root--shake': !!this.isShake
        },
        {
          'ui-dialog-root--bottom': !!this.bottom,
          'ui-dialog-root--fullScreen': !!this.fullScreen,
        }
      ],
      style: [
        this.styleColor,
        {
          '--ui-dialog-max-width': returnPX(this.maxWidth),
          '--ui-dialog-max-height': returnPX(this.maxHeight)
        }
      ]
    }, [
      overlay,
      dialog,
      !!this.$slots.control && !this.fullScreen && control
    ])

    // Return
    return h('transition', {
      props: {
        name: 'ui-dialog'
      }
    }, [
      this.isShow && root
    ])
  }
}