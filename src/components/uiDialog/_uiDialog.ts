import { VNode } from 'vue'
import { Component, Model, Prop, Watch } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { uiLoading, uiIconClose } from '../../mixins/public'
import { insertBody, returnPX } from '../../util'
import { IDialogControl } from 'onlis/types'

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
    this.$emit('model', false)
  }

  // Insert, Remove
  insertDialog () {
    if(!!this.absolute) return

    this.$nextTick(() => {
      insertBody(this.$el as HTMLElement)
      document.body.style.overflow = 'hidden'
    })
  }

  beforeDestroy () {
    if(!!this.absolute) return

    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }

  // Show, Hide
  show () {
    this.isShow = true
    this.insertDialog()
    this.$nextTick(() => this.$emit('open'))
  }

  hide () {
    this.isShow = false
    document.body.style.overflow = ''
    this.$emit('close')
  }

  // Vue Function
  mounted() {
    if(this.value) return this.show()
  }

  @Watch('value')
  onValueChange(val: boolean) {
    if (!!val) return this.show()
    this.hide()
  }

  @Watch('shake')
  onShakeChange(val: boolean) {
    if (!!val) {
      this.onShake()
      this.$emit('update:shake', false)
    }
  }

  // Render
  public render(h: any): VNode {
    const loading = h(uiLoading, {
      props: {
        large: true
      }
    })

    const close = h(uiIconClose, {
      staticClass: 'ui-dialog__close',
      on: {
        click: this.onClose
      }
    })

    const title = h('div', {
      staticClass: 'ui-dialog__title'
    }, [
      this.$slots.title
    ])

    const header = h('div', {
      staticClass: 'ui-dialog__header'
    }, [
      this.$slots.header
    ])

    const body = h('div', {
      staticClass: 'ui-dialog__body'
    }, [
      this.$slots.default
    ])

    const footer = h('div', {
      staticClass: 'ui-dialog__footer'
    }, [
      this.$slots.footer
    ])

    const dialog = h('div', {
      staticClass: 'ui-dialog',
      class: [
        'ui-component',
        'ui-component--flex',
        {
          'ui-component--loading': !!this.isLoading,
        },
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

    const overlay = h('div', {
      staticClass: 'ui-dialog-overlay',
      on: {
        click: () => {
          if(!!this.preventClose || !!this.loading) return this.onShake()

          this.onClose()
        }
      }
    })

    const control = h('div', {
      staticClass: 'ui-dialog-control',
      class: {
        'ui-dialog-control--block': !!this.controlConfig.block,
        'ui-dialog-control--top': !!this.controlConfig.top,
        'ui-dialog-control--right': !!this.controlConfig.right
      }
    }, [
      this.$slots.control
    ])

    const root = h('div', {
      staticClass: 'ui-dialog-root',
      ref: 'dialog',
      class: [
        {
          'ui-dialog-root--blur': !!this.blur,
          'ui-dialog-root--shake': !!this.isShake
        },
        {
          'ui-dialog-root--default': !this.bottom,
          'ui-dialog-root--bottom': !!this.bottom,
          'ui-dialog-root--fullScreen': !!this.fullScreen,
        },
        {
          'ui-component--absolute': !!this.absolute,
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
      control
    ])

    return h('transition', {
      props: {
        name: 'ui-dialog'
      }
    }, [
      this.isShow && root
    ])
  }
}