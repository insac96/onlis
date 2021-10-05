import './_style.sass'
import component from './_uiCarouselItem'

component.install = (vue: any) => {
  vue.component('ui-carousel-item', component)
}

export default component