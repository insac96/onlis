import component from './_uiNavbar'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-navbar', component)
}

export default component