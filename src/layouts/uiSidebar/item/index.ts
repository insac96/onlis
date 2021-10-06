import component from './_uiSidebarItem'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-sidebar-item', component)
}

export default component