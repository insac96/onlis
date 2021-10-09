import { ISelectOption } from '../../../../types'
import { Model, Component, Prop, Watch } from 'vue-property-decorator'
import { toLowerCase } from '../../../util'
import uiListItem from '../../uiList/item/_uiListItem'

@Component
export default class uiSelectOption extends uiListItem {

  @Prop({ type: String, default: 'flat' }) fashionActive!: string

  onHidden : boolean = false

  get isHidden () {
    return this.onHidden
  }

  get id () {
    return `select-option-${this._uid}`
  }

  get parentSelect () {
    if(!this.parentList) return null

    const parent = this.parentList.$parent 
    if(!parent) return

    return (parent.componentName === 'select') ? parent : null
  }

  get isMultiple () {
    return !!this.parentSelect && !!this.parentSelect.isMultiple
  }

  get isValid () {
    return !!this.parentSelect && !!this.value && !!this.label
  }

  get isPointer () {
    return !!this.isValid
  }

  get isActive () {
    if(!this.isValid) return false

    if(!!this.isMultiple){
      const array : any[] = this.parentSelect.value
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
      return this.parentSelect.value === this.value
    }
  }
  
  // On Click
  onClick (event : any) {
    if(!this.isValid) return

    this.startRipple(event, this.$el as HTMLElement)
    this.parentSelect.onOptionSelect(this.id)
    this.$emit('click', event)
  }

  // Watch Filter
  @Watch('parentSelect.textFilter')
  onTextFilterChange(val: string) {
    if(!this.isValid) return
    if(!this.parentSelect.filter) return
    if(!this.parentSelect.isShowOptions) return

    if (val) {
      const labelLowerCase = toLowerCase(this.label)
      const valLowerCase = toLowerCase(val)
      
      this.onHidden = labelLowerCase.indexOf(valLowerCase.toLowerCase()) === -1
    }
    else {
      this.onHidden = false
    }
  }

  // Watch isShowOptions
  @Watch('parentSelect.isShowOptions')
  onFocusChange(val: boolean) {
    if(!this.isValid) return
    if(!this.parentSelect.filter) return

    if(!val && !!this.onHidden){
      setTimeout(() => {
        this.onHidden = false
      }, 250)
    }
  }

  // Mounted
  mounted() {
    if(!this.isValid) return

    const option : ISelectOption = {
      id: this.id,
      value: this.value,
      label: this.label
    }

    this.parentSelect.options.push(option)
  }

  // Before Destroy
  beforeDestroy () {
    if(!this.isValid) return

    // Update Model
    if(!!this.isActive){
      if(!!this.isMultiple){
        const optionIndex = this.parentSelect.value.findIndex((val) => val === this.value)
        this.$delete(this.parentSelect.value, optionIndex)
      }
      else {
        this.parentSelect.$emit('model', null)
      }
    }

    // Update List Option
    const optionIndex = this.parentSelect.options.findIndex((option : ISelectOption) => option.id === this.id)
    this.$delete(this.parentSelect.options, optionIndex)
  }
}