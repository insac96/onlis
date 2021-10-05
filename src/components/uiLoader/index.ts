import './_style.sass'
import component from './_uiLoader'

component.install = (vue: any) => {
  vue.component('ui-loader', component)
}

export default component