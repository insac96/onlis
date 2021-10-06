import './_style.sass'
import component from './_uiList'

component.install = (vue: any) => {
  vue.component('ui-list', component)
}

export default component