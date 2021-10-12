import { VNode } from 'vue'
import { Model, Component, Prop } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { uiLoading, uiIconCheck } from '../../mixins/public'
import { returnPX, is_Undefined, is_Boolean, is_Array } from '../../util'

@Component
export default class uiCheckBox extends uiComponentColor {
  @Model('model', { type: [ String , Number , Array , Boolean ] }) readonly model!: any

  @Prop([ String, Number ]) value!: any

  @Prop({ type: String, default: 'gray' }) borderColor! : any

  @Prop({ type: Boolean, default: undefined }) checked!: boolean

  @Prop({ type: Boolean }) switch!: boolean

  @Prop({ default: null }) size!: any

  @Prop({ type: Boolean }) labelLeft!: boolean

  @Prop({ type: Boolean }) labelSpace!: boolean

  // Get Checked
  get isChecked () {
    if(!is_Undefined(this.checked)) return this.checked
    if(!!is_Undefined(this.model)) return false

    if(!!is_Boolean(this.model)){
      return this.model
    }
    else if(!!is_Array(this.model)){
      if(!this.value) false 
      const indexValue : number = this.model.indexOf(this.value)

      return indexValue !== -1
    }
    else {
      if(!this.value) return false

      return this.value === this.model
    }
  }

  // Input
  onInput () : void {
    if(!!this.isLoading || !!this.isDisabled) return
    if(!is_Undefined(this.checked)) return
    if(!!is_Undefined(this.model)) return

    if(!!is_Boolean(this.model)){
      this.$emit('model', !this.model)
    }
    else if(!!is_Array(this.model)){
      if(!this.value) return

      const indexValue : number = this.model.indexOf(this.value)

      // Update Model
      if (indexValue !== -1) {
        this.$delete(this.model, indexValue)
      } else {
        this.$set(this.model, this.model.length, this.value)
      }
    }
    else {
      if(!this.value) return

      if(!this.model || this.model !== this.value) {
        this.$emit('model', this.value)
      }
      else {
        this.$emit('model', null) 
      }
    }

    this.$emit('input', this.model)
  }

  public render(h: any): VNode {
    // Loading
    const loading = h(uiLoading, {
      props: {
        full: true
      }
    })

    // Icon Checkbox
    const iconCheckbox = h(uiIconCheck, {
      props: {
        checked: this.isChecked
      }
    })

    // Input
    const input = h('input', {
      staticClass: 'ui-checkbox-input',
      class: [
        'position-absolute',
        'visibility-hidden'
      ],
      domProps: {
        id: `checkbox-${this._uid}`,
        checked: this.isChecked,
        disabled: this.isDisabled
      },
      attrs: {
        ...this.$attrs,
        type: 'checkbox'
      },
      on: {
        ...this.$listeners,

        input: this.onInput
      }
    })

    // Label
    const label = h('label', {
      class: [
        'cursor-pointer',
        'user-none',
        // Right
        { 
          'order-3': !this.labelLeft,
          'ml-1': !this.labelLeft && !this.labelSpace,
          'ml-auto': !this.labelLeft && !!this.labelSpace
        },
        // Left
        { 
          'order-1': !!this.labelLeft,
          'mr-1': !!this.labelLeft && !this.labelSpace,
          'mr-auto': !!this.labelLeft && !!this.labelSpace
        }
      ],
      attrs: {
        for: `checkbox-${this._uid}`
      }
    }, [
      this.$slots.default
    ])

    // On
    const on = h('span', {
      directives: [
        {
          name: 'show',
          value: this.isChecked
        }
      ]
    }, [ 
      this.$slots.on 
    ])

    // Off
    const off = h('span', {
      directives: [
        {
          name: 'show',
          value: !this.isChecked
        }
      ]
    }, [ 
      this.$slots.off 
    ])

    // Text Switch
    const textSwitch = h('div', {
      staticClass: 'ui-switch-text',
      class: [
        'd-flex',
        'align-center',
        'font-size-xs',
        'font-weight-600',
        'user-none'
      ]
    }, [
      !!this.isChecked ? on : off
    ])

    // Icon Switch
    const iconSwitch = h('div', {
      staticClass: 'ui-switch-icon'
    })

    // Checkbox
    const checkbox = h('label', {
      staticClass: 'ui-checkbox',
      class: [
        'ui-component',
        [
          'd-flex',
          'align-center',
          'justify-center',
          'order-2',
          'ra',
          'cursor-pointer',
          'overflow-hidden',
          'user-none'
        ],
        {
          'ui-component--shadow': !!this.isShadow,
          'ui-component--border': !!this.isBorder && !this.isChecked,
          'ui-fashion--basic': !this.isChecked,
          'ui-fashion--full': !!this.isChecked
        },
        {
          'ui-checkbox--default': !this.switch,
          'ui-checkbox--switch': !!this.switch,
          'ui-checkbox--checked': !!this.isChecked,
          'ui-checkbox--disabled': !!this.isDisabled,
        },
        this.classStatus,
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-checkbox-size': returnPX(this.size)
        }
      ],
      attrs: {
        for: `checkbox-${this._uid}`
      }
    }, [
      !!this.isLoading && loading,
      !!this.switch && textSwitch,
      !!this.switch ? iconSwitch : iconCheckbox
    ])

    // Root
    return h('div', {
      staticClass: 'ui-checkbox-root',
      class: [
        {
          'd-inline-flex': !this.labelSpace,
          'd-flex': !!this.labelSpace,
        },
        [
          'align-center',
          'position-relative'
        ]
      ]
    }, [
      input,
      checkbox,
      !!this.$slots.default && label
    ]) 
  }
}