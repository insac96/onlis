import component from './_uiRow'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-row', component)
}

export default component