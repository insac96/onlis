import component from './_uiBadge'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-badge', component)
}

export default component