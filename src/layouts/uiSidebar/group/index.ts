import component from './_uiSidebarGroup'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-sidebar-group', component)
}

export default component