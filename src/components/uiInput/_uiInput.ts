import { VNode } from 'vue'
import { Model, Component, Prop, Watch } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { uiLoading, uiIconClose } from '../../mixins/public'
import { returnPX, getColor } from '../../util'

@Component
export default class uiInput extends uiComponentColor {
  @Model('model') readonly value!: any

  @Prop() width! : any

  @Prop({ type: String, default: 'l' }) size! : string

  @Prop({ type: String, default: 'text' }) type! : string

  @Prop({ type: String }) placeholder! : string

  @Prop({ type: Boolean }) readOnly! : boolean

  @Prop({ type: Boolean }) autoComplete! : boolean

  @Prop({ type: String }) messageColor! : string

  @Prop({ type: String }) messageRightColor! : string

  @Prop({ type: Boolean }) remove! : boolean

  isFocus : boolean = false

  onInput (event : any) {
    this.$emit('model', event.target.value)
    this.$emit('input', event.target.value)
  }

  onClick (event : any) {
    this.startRipple(event, this.$el as HTMLElement)
    this.$emit('click', event)
  }

  onFocus (event : any) {
    this.isFocus = true
    this.$emit('focus', event)
  }

  onBlur (event : any) {   
    this.isFocus = false
    this.$emit('blur', event)
  }

  onRemove () {
    this.$emit('model', null)
    this.$emit('remove')
  }

  public render(h: any): VNode {
    // Icon Remove
    const iconRemove = h(uiIconClose, {
      on: {
        click: this.onRemove.bind(this)
      }
    })

    // Icon Left
    const icon = h('div', {
      staticClass: 'ui-input__icon',
      class: {
        'ui-component--pointer': !!this.$listeners.icon
      },
      on: {
        click: () => this.$emit('icon')
      }
    }, [
      this.$slots.icon
    ])

    // Input Dom
    const inputDom = h('input', {
      staticClass: 'ui-input__dom',
      class: {
        'ui-input__dom--hasValue': !!this.value,
        'ui-input__dom--dateTime': this.type === 'date' || this.type === 'time'
      },
      domProps: {
        id: `input-${this._uid}`,
        value: this.value,
        autocomplete: !!this.autoComplete ? 'on' : 'off'
      },
      attrs: {
        ...this.$attrs,
        type: this.type,
        placeholder: this.placeholder,
        readonly: this.readOnly,
        disabled: this.isDisabled,
      },
      on: {
        ...this.$listeners,

        focus: this.onFocus,
        blur: this.onBlur,
        input: this.onInput,
        click: this.onClick
      }
    })

    // Right
    const right =  h('transition', {
      props: {
        name: 'ui-zoom'
      }
    }, [
      (!!this.isLoading || (!!this.remove && !!this.value)) && h('div', {
        staticClass: 'ui-input__right',
      }, [
        !!this.isLoading ? h(uiLoading) : iconRemove
      ])
    ])

    // Message Left
    const message = h('transition', {
      props: {
        name: 'ui-zoom'
      }
    }, [
      !!this.$slots.message && h('div', {
        staticClass: 'ui-input__message--left',
      }, [
        this.$slots.message
      ])
    ])

    // Message Right
    const messageRight = h('transition', {
      props: {
        name: 'ui-zoom'
      }
    }, [
      !!this.$slots['message-right'] && h('div', {
        staticClass: 'ui-input__message--right',
      }, [
        this.$slots['message-right']
      ])
    ])

    // Input
    return h('div', {
      staticClass: 'ui-input',
      class: [
        'ui-component',
        {
          'ui-component--flex': !this.inline,
          'ui-component--inline-flex': !!this.inline,
        },
        {
          'ui-component--size--l': !this.size ,
          [`ui-component--size--${this.size}`]: !!this.size 
        },
        {
          'ui-input--focus': !!this.isFocus,
          'ui-input--error': !!this.danger || this.color === 'danger',
        },
        {
          'ui-component--loading': !!this.isLoading,
          'ui-component--disabled': !!this.isDisabled,
        },
        this.classFashion,
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-input-width': returnPX(this.width),
          '--ui-input-message-color': getColor(this.messageColor),
          '--ui-input-message-right-color': getColor(this.messageRightColor)
        }
      ]
    }, [
      !!this.$slots.icon && icon,
      inputDom,
      right,
      message,
      messageRight
    ])
  }
}