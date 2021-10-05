import './_style.sass'
import component from './_uiCheckbox'

component.install = (vue: any) => {
  vue.component('ui-checkbox', component)
}

export default component