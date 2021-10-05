import component from './_uiSelectOption'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-select-option', component)
}

export default component