import component from './_uiDialog'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-dialog', component)
}

export default component