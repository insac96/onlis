import component from './_uiRange'

component.install = (vue: any) => {
  vue.component('ui-range', component)
}

export default component