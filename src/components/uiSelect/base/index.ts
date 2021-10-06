import component from './_uiSelect'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-select', component)
}

export default component