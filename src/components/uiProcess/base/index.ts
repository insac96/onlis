import component from './_uiProcess'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-process', component)
}

export default component