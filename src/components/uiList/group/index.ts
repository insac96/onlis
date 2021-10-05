import './_style.sass'
import component from './_uiListGroup'

component.install = (vue: any) => {
  vue.component('ui-list-group', component)
}

export default component