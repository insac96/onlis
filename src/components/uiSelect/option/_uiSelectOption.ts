import Vue, { VNode } from 'vue'
import { Model, Component, Prop, Watch } from 'vue-property-decorator'
import { uiComponentColor } from '../../../mixins/component'
import { toLowerCase, getColor } from '../../../util'
import uiCheckbox from '../../uiCheckbox/_uiCheckbox'
import { ISelectOption } from 'onlis/types'

@Component
export default class uiSelectOption extends uiComponentColor {

  @Prop({ type: [ String, Object, Number ]}) value!: any

  @Prop({ type: String }) label!: string

  @Prop({ type: String, default: 'transparent' }) fashion!: string

  @Prop({ type: String, default: 'flat' }) fashionActive!: string

  @Prop({ type: String, default: null }) color!: string

  isHidden: boolean = false

  get colorProp () {
    if(!!this.isStatusColor || (!!this.parent && !!this.parent.isStatusColor)) return null
    if(!!this.color) return this.color
    if(!!this.parent && !!this.parent.color) return this.parent.color
  }

  colorStatusProp (name: 'isColor' | 'warn' | 'danger' | 'success') {
    return !!this[name] || (!!this.parent && !!this.parent[name])
  }

  get id () {
    return this._uid
  }

  get parent () {
    return (!!(this.$parent as any) && 
    (this.$parent as any).componentName === 'select') 
    ? (this.$parent as any)
    : null
  }

  get isInvalid () {
    return !this.parent || !this.value || !this.label
  }

  get isMultiple () {
    return !!this.parent && !!this.parent.isMultiple
  }

  // Is Active
  get isActive () {
    if(!!this.isInvalid) return false

    if(Array.isArray(this.parent.value)){
      const array : any[] = this.parent.value
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
      return this.parent.value === this.value
    }
  }

  // Option Select
  onClick (event : any) {
    if(!!this.isInvalid) return
    this.startRipple(event, this.$el as HTMLElement)

    this.parent.onOptionSelect(this.id)
  }

  // Vue Function
  mounted() {
    if(!!this.isInvalid) return

    const option : ISelectOption = {
      id: this.id,
      value: this.value,
      label: this.label
    }

    this.parent.options.push(option)
  }

  beforeDestroy () {
    if(!!this.isInvalid) return

    if(!!this.isActive) {
      this.parent.$emit('model', null)
      this.parent.textFilter = ''
    }

    const optionIndex = this.parent.options.findIndex((option : ISelectOption) => option.id === this.id)
    this.$delete(this.parent.options, optionIndex)
  }

  // Check Text Filter
  @Watch('parent.textFilter')
  onTextFilterChange(val: string) {
    if(!!this.isInvalid) return
    if(!this.parent.filter) return
    if(!this.parent.isShowOptions) return

    if (val) {
      const labelLowerCase = toLowerCase(this.label)
      const valLowerCase = toLowerCase(val)
      
      this.isHidden = labelLowerCase.indexOf(valLowerCase.toLowerCase()) === -1
    }
    else {
      this.isHidden = false
    }
  }

  @Watch('parent.isShowOptions')
  onFocusChange(val: boolean) {
    if(!!this.isInvalid) return
    if(!this.parent.filter) return

    if(!val && !!this.isHidden){
      setTimeout(() => {
        this.isHidden = false
      }, 250)
    }
  }

  // Render
  public render(h : any) : VNode {
    const checkbox = h('transition', {
      props: {
        name: 'ui-zoom'
      }
    }, [
      !!this.isActive && h(uiCheckbox, {
        class: [
          'ui-list-item__checkbox',
          {
            'ui-list-item__checkbox--right': !!this.parent && !!this.parent.checkboxRight,
          }
        ],
        props: {
          checked: this.isActive,
          warn: this.colorStatusProp('warn'),
          danger: this.colorStatusProp('danger'),
          success: this.colorStatusProp('success'),
          color: this.colorProp,
          size: 18
        },
        on: {
          click: this.onClick.bind(this)
        }
      })
    ])

    const left = h('div', {
      staticClass: 'ui-list-item__left',
    }, [
      this.$slots.left
    ])

    const title = h('div', {
      staticClass: 'ui-list-item__center__title',
    }, [
      this.$slots.title
    ])

    const body = h('div', {
      staticClass: 'ui-list-item__center__body',
    }, [
      !!this.$slots.default ? this.$slots.default : this.label
    ])

    const center = h('div', {
      staticClass: 'ui-list-item__center',
    }, [
      this.$slots.title && title,
      body
    ])

    const right = h('div', {
      staticClass: 'ui-list-item__right',
    }, [
      this.$slots.right
    ])

    return h('div', {
      staticClass: 'ui-list-item',
      class: [
        'ui-component',
        'ui-component--flex',
        'ui-component--pointer',
        'ui-list-item--center',
        {
          'ui-list-item--hidden': !!this.isHidden,
          'ui-component--disabled': !!this.isInvalid || !!this.isDisabled,
          'ui-component--active': !!this.isActive,
        },
        this.classFashion,
        {
          'ui-component--color': this.colorStatusProp('isColor'),
          'ui-color--child': !!this.child,
          'ui-color--warn': this.colorStatusProp('warn'),
          'ui-color--danger': this.colorStatusProp('danger'),
          'ui-color--success': this.colorStatusProp('success'),
        }
      ],
      style: {
        '--ui-color': !!this.colorProp ? getColor(this.colorProp) : null
      },
      on: {
        click: this.onClick
      }
    }, [
      !this.parent.hideCheckbox && checkbox,
      !!this.$slots.left && left,
      center,
      !!this.$slots.right && right,
    ]) 
  }
}