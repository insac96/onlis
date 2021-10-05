import './_style.sass'
import component from './_uiListItem'

component.install = (vue: any) => {
  vue.component('ui-list-item', component)
}

export default component