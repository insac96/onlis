import component from './_uiMenu'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-menu', component)
}

export default component