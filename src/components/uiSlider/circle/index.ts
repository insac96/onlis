import component from './_uiSliderCircle'
import './_style.sass'

component.install = (vue: any) => {
  vue.component('ui-slider-circle', component)
}

export default component