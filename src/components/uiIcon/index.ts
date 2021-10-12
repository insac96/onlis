import component from './_uiIcon'

component.install = (vue: any) => {
  vue.component('ui-icon', component)
}

export default component