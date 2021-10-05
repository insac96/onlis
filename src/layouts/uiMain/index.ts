import component from './_uiMain'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-main', component)
}

export default component