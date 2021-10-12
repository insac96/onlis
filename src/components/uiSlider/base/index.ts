import component from './_uiSlider'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-slider', component)
}

export default component