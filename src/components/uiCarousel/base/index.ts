import './_style.sass'
import component from './_uiCarousel'

component.install = (vue: any) => {
  vue.component('ui-carousel', component)
}

export default component