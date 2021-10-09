import { VNode } from 'vue'
import { Model, Component, Prop } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { uiLoading, uiIconCheck } from '../../mixins/public'
import { returnPX, is_Undefined } from '../../util'

@Component
export default class uiCheckBox extends uiComponentColor {
  @Model('model') readonly model!: any

  @Prop([ String, Object, Number ]) value!: any

  @Prop({ type: Boolean, default: undefined }) checked!: boolean

  @Prop({ type: Boolean }) switch!: boolean

  @Prop({ default: null }) size!: any

  @Prop({ type: Boolean }) labelLeft!: boolean

  @Prop({ type: Boolean }) labelSpace!: boolean

  // Get Checked
  get isChecked () {
    if(!is_Undefined(this.checked)) return this.checked

    if(!!is_Undefined(this.model)) return false

    if(typeof this.model == 'boolean'){
      return this.model
    }
    else if(Array.isArray(this.model)){
      if(!this.value) false 

      const array : any[] = this.model
      let isValueInModel : boolean

      // Check Value
      if(typeof this.value === 'object'){
        isValueInModel = JSON.stringify(array).indexOf(JSON.stringify(this.value)) !== -1
      } 
      else {
        isValueInModel = array.indexOf(this.value) !== -1
      }

      return isValueInModel
    }
    else {
      if(!this.value) return false

      if(this.value === this.model) return true
      else if(JSON.stringify(this.value) === JSON.stringify(this.model)) return true

      return false
    }
  }

  // Input
  onInput () : void {
    if(!is_Undefined(this.checked)) return

    if(!!this.isLoading || !!this.isDisabled) return
    if(!!is_Undefined(this.model)) return

    if(typeof this.model == 'boolean'){
      this.$emit('model', !this.model)
    }
    else if(Array.isArray(this.model)){
      if(!this.value) return

      let array : any[] = this.model
      let isValueInModel : boolean
      let indexValue : number = 0

      // Check Value
      if(typeof this.value === 'object'){
        isValueInModel = JSON.stringify(array).indexOf(JSON.stringify(this.value)) !== -1
      } 
      else {
        isValueInModel = array.indexOf(this.value) !== -1
      }

      // Set Index Value
      array.forEach((item : any, index : number) => {
        if(JSON.stringify(item) === JSON.stringify(this.value)) {
          indexValue = index
        }
      })

      // Update Model
      if (isValueInModel) {
        this.$delete(array, indexValue)
      } else {
        this.$set(array, array.length, this.value)
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
        small: true
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
          'ui-component-fashion--basic': !this.isChecked,
          'ui-component-fashion--full': !!this.isChecked
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