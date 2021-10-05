import component from './_uiApp'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-app', component)
}

export default component