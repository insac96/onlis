import component from './_uiSidebar'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-sidebar', component)
}

export default component