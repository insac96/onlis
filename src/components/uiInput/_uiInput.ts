import { VNode } from 'vue'
import { ISelectOption } from '../../../types'
import { Model, Component, Prop } from 'vue-property-decorator'
import { uiComponentColor, uiLoading, uiIconClose } from '../../mixins'
import { returnPX, getColor } from '../../util'

@Component
export default class uiInput extends uiComponentColor {
  @Model('model') readonly value!: any

  @Prop() width! : any

  @Prop({ type: String }) size! : string

  @Prop({ type: String, default: 'text' }) type! : string

  @Prop({ type: String }) placeholder! : string

  @Prop({ type: Boolean }) readOnly! : boolean

  @Prop({ type: Boolean }) iconFull! : boolean

  @Prop({ type: String }) messageLeftColor! : string

  @Prop({ type: String }) messageRightColor! : string

  @Prop({ type: Boolean }) remove! : boolean

  // Input Change
  onInput (event : any) {
    this.$emit('model', event.target.value)
    this.$emit('input', event.target.value)
  }

  // Icon Remove Click
  onRemove () {
    this.$emit('model', null)
    this.$emit('remove')
  }

  // Render Message
  renderMessage (position? : string) {
    const slotName = `message-${position}`

    return this.$createElement('transition', {
      props: {
        name: 'ui-zoom'
      }
    }, [
      !!this.$slots[`${slotName}`] && this.$createElement('div', {
        staticClass: `ui-input__message--${position}`,
        class: [
          'position-absolute',
          'font-size-xs',
          'font-weight-500',
          'user-none',
          'line-normal',
          'transition',
          'px-2 py-1'
        ],
        style: {
          'top': 'var(--ui-component-size)',
          'left': position === 'left' ? '0' : 'auto',
          'right': position === 'right' ? '0' : 'auto',
          'color': `rgb(var(--ui-input-${slotName}))`
        }
      }, [
        this.$slots[`${slotName}`]
      ])
    ])
  }

  public render(h: any): VNode {
    // Icon Left
    const icon = h('div', {
      staticClass: 'ui-input__icon',
      class: [
        'd-flex',
        'align-center',
        'justify-center',
        'user-none',
        'line-normal',
        'transition',
        {
          'cursor-pointer': !!this.$listeners.icon,
          'ui-input__icon--full': !!this.iconFull
        }
      ],
      on: {
        click: () => this.$emit('icon')
      }
    }, [
      this.$slots.icon
    ])

    // Input Dom
    const inputDom = h('input', {
      staticClass: 'ui-input__dom',
      class: [
        'full-width',
        'transition',
        'pr-2',
        {
          'pl-2': !this.$slots.icon || !!this.iconFull,
        },
        {
          'ui-input__dom--value': !!this.value,
          'ui-input__dom--picker': this.type === 'date' || this.type === 'time'
        }
      ],
      domProps: {
        id: `input-${this._uid}`,
        value: this.value,
        autocomplete: 'off',
        size: ''
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
        input: this.onInput
      }
    })

    // Icon Remove
    const iconRemove = h(uiIconClose, {
      on: {
        click: this.onRemove.bind(this)
      }
    })

    // Icon Right
    const iconRight = h('div', {
      staticClass: 'ui-input__icon-right',
      class: ['pr-2']
    }, [
      !!this.isLoading ? h(uiLoading) : iconRemove
    ])

    // Right
    const right = h('div', {
      staticClass: 'ui-input__right',
      class: [
        'd-flex',
        'align-center',
        'justify-center',
        'pr-1',
        'user-none',
        'line-normal',
      ]
    }, [
      this.$slots.right
    ])

    // Message
    const messageLeft = this.renderMessage('left')
    const messageRight = this.renderMessage('right')

    // Input
    return h('div', {
      slot: 'target',
      ref: 'input',
      staticClass: 'ui-input',
      class: [
        'ui-component',
        {
          'd-flex': !this.inline,
          'd-inline-flex': !!this.inline
        },
        [
          'justify-space-between',
          'align-center',
        ],
        {
          'ui-size--l': !this.size ,
          [`ui-size--${this.size}`]: !!this.size 
        },
        {
          'ui-input--error': !!this.danger || !!this.warn || this.color === 'danger' || this.color === 'warn',
        },
        this.classStatus,
        this.classFashion,
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-input-width': returnPX(this.width),
          '--ui-input-message-left': getColor(this.messageLeftColor),
          '--ui-input-message-right': getColor(this.messageRightColor)
        }
      ],
      directives: [
        {
          name: 'ripple-component',
          value: !!this.ripple
        }
      ]
    }, [
      !!this.$slots.icon && icon,
      inputDom,
      (!!this.isLoading || (!!this.remove && !!this.value)) && iconRight,
      !!this.$slots.right && right,
      messageLeft,
      messageRight
    ])
  }
}