import './_style.sass'
import component from './_uiCard'

component.install = (vue: any) => {
  vue.component('ui-card', component)
}

export default component