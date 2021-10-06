import component from './_uiCol'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-col', component)
}

export default component