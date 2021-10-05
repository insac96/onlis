import component from './_uiAvatar'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-avatar', component)
}

export default component