import './_style.sass'
import component from './_uiInput'

component.install = (vue: any) => {
  vue.component('ui-input', component)
}

export default component