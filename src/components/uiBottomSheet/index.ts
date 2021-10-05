import component from './_uiBottomSheet'

component.install = (vue: any) => {
  vue.component('ui-bottom-sheet', component)
}

export default component