import component from './_uiProcessCircle'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-process-circle', component)
}

export default component