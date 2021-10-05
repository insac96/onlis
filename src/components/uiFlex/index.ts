import component from './_uiFlex'

component.install = (vue: any) => {
  vue.component('ui-flex', component)
}

export default component