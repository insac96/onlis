import './_style.sass'
import component from './_uiButton'

component.install = (vue: any) => {
  vue.component('ui-button', component)
}

export default component