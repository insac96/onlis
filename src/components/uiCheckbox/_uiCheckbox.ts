import { VNode } from 'vue'
import { Model, Component, Prop } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { uiLoading, uiIconCheck } from '../../mixins/public'
import { returnPX, isUndefined } from '../../util'

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
    if(!isUndefined(this.checked)) return this.checked

    if(!!isUndefined(this.model)) return false

    if(typeof this.model == 'boolean'){
      return this.model
    }
    else if(Array.isArray(this.model)){
      if(!this.value) return

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
  onInput (event: any) {
    if(!isUndefined(this.checked)) return

    if(!!this.isLoading || !!this.isDisabled) return
    if(!!isUndefined(this.model)) return

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

      if(!this.model || this.model !== this.value) return this.$emit('model', this.value)

      this.$emit('model', null) 
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
      domProps: {
        id: this._uid,
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
    const label = h('span', {
      staticClass: 'ui-checkbox-label',
      class: {
        'ui-checkbox-label--right': !this.labelLeft,
        'ui-checkbox-label--left': !!this.labelLeft,
        'ui-checkbox-label--space': !!this.labelSpace,
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
      staticClass: 'ui-switch-text'
    }, [
      !!this.isChecked ? on : off
    ])

    // Icon Switch
    const iconSwitch = h('div', {
      staticClass: 'ui-switch-icon'
    })

    // Checkbox
    const checkbox = h('div', {
      staticClass: 'ui-checkbox',
      class: [
        'ui-component',
        {
          'ui-component-fashion--basic': !this.isChecked,
          'ui-component-fashion--full': !!this.isChecked
        },
        {
          'ui-component--loading': !!this.isLoading,
          'ui-component--disabled': !!this.isDisabled,
        },
        {
          'ui-checkbox--default': !this.switch,
          'ui-checkbox--switch': !!this.switch,
          'ui-checkbox--checked': !!this.isChecked,
          'ui-checkbox--disabled': !!this.isDisabled,
        },
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-checkbox-size': returnPX(this.size)
        }
      ]
    }, [
      !!this.isLoading && loading,
      !!this.switch && textSwitch,
      !!this.switch ? iconSwitch : iconCheckbox
    ])

    // Root
    return h('label', {
      staticClass: 'ui-checkbox-root',
      class: {
        'ui-component--inline-flex': !this.labelSpace,
        'ui-component--flex': !!this.labelSpace,
      },
      attrs: {
        for: this._uid
      }
    }, [
      input,
      checkbox,
      !!this.$slots.default && label
    ]) 
  }
}