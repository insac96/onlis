import component from './_uiSwitch'

component.install = (vue: any) => {
  vue.component('ui-switch', component)
}

export default component