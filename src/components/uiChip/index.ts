import './_style.sass'
import component from './_uiChip'

component.install = (vue: any) => {
  vue.component('ui-chip', component)
}

export default component