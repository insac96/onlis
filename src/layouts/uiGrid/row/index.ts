import component from './_uiRow'

component.install = (vue: any) => {
  vue.component('ui-row', component)
}

export default component