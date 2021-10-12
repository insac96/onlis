import component from './_uiMain'

component.install = (vue: any) => {
  vue.component('ui-main', component)
}

export default component