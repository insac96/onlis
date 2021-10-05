import component from './_uiAlert'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-alert', component)
}

export default component