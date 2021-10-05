import Vue, { VNode } from 'vue'
import { Component, Prop, Model, Watch } from 'vue-property-decorator'
import { uiIconArrow } from '../../../mixins/public'
import { returnPX } from '../../../util'
import uiButton from '../../uiButton/_uiButton'

@Component
export default class uiCarousel extends Vue {

  static install: (vue: any) => void

  componentName: string = 'carousel'

  @Prop({ default: null }) width!: any

  @Prop({ default: 300 }) height!: any

  @Prop({ type: Boolean }) transparent!: boolean

  @Prop({ type: Boolean }) child!: boolean

  @Prop({ type: Boolean }) hideArrow!: boolean

  @Prop({ type: Boolean }) arrowHover!: boolean

  @Prop({ type: Number, default: 5000 }) delay!: number

  @Prop({ type: Boolean, default: true }) auto!: boolean

  items : any[] = []

  indexNowItem : number = 0

  onAuto : any = null

  effect : string = ''

  // Now Item
  get nowID () {
    if(this.items.length < 1) return null
    
    return this.items[this.indexNowItem]
  }

  // Next
  next () {
    if(this.indexNowItem === this.items.length - 1){
      this.indexNowItem = 0
    }
    else {
      this.indexNowItem = this.indexNowItem + 1
    }

    this.effect = 'uiCarouselNext'
  }

  // Prev
  prev () {
    if(this.indexNowItem === 0){
      this.indexNowItem = this.items.length - 1
    }
    else {
      this.indexNowItem = this.indexNowItem - 1
    }

    this.effect = 'uiCarouselPrev'
  }

  // Arrow Click
  onArrowClick (type? : string) {
    this.stopSlide()

    if(type == 'next'){
      this.next()
    }
    else {
      this.prev()
    }

    this.startSlide()
  }

  // Start Slide
  startSlide () {
    if(!this.auto) return
    if(!!this.onAuto) return
    if(this.items.length < 2) return

    this.onAuto = setInterval(() => {
      console.log('start')
      this.next()
    }, this.delay);
  }

  // Restart Slide
  restartSlide () {
    if(!this.auto) return
    if(!this.onAuto) return
    
    this.stopSlide()
    window.requestAnimationFrame(this.startSlide)
  }

  // Remove Slide
  stopSlide () {
    if(!this.onAuto) return

    clearTimeout(this.onAuto)
    this.onAuto = undefined
  }

  // Vue Function
  mounted() {
    this.startSlide()
  }

  beforeDestroy() {
    !!this.onAuto && this.stopSlide()
  }

  // Check Items
  @Watch('items')
  onItemsChange(val : any[]){
    if(val.length < 2){
      this.stopSlide()
    }
    else {
      this.startSlide()
    }
  }

  // Check Delay
  @Watch('delay')
  onDelayChange(val : number){
    this.restartSlide()
  }

  // Check Auto
  @Watch('auto')
  onAutoChange(val : boolean){
    if(!!val){
      this.startSlide()
    }
    else {
      this.stopSlide()
    }
  }

  // Render
  public render(h: any): VNode {
    const next = h('div', {
      staticClass: 'ui-carousel__next',
      on: {
        click: () => this.onArrowClick('next')
      }
    }, [
      !!this.$slots.next ? this.$slots.next : h(uiButton, {
        props: {
          icon: true,
          text: true,
          size: 's',
          fullColor: false,
          primary: false
        }
      }, [ 
        h(uiIconArrow, {
          props: {
            left: true
          }
        })
      ])
    ])

    const prev = h('div', {
      staticClass: 'ui-carousel__prev',
      on: {
        click: () => this.onArrowClick('prev')
      }
    }, [
      !!this.$slots.prev ? this.$slots.prev : h(uiButton, {
        props: {
          icon: true,
          text: true,
          size: 's',
          fullColor: false,
          primary: false
        }
      }, [ 
        h(uiIconArrow, {
          props: {
            right: true
          }
        })
      ])
    ])

    const carousel = h('div', {
      staticClass: 'ui-carousel',
    }, [
      this.$slots.default,
      this.items.length > 1 && !this.hideArrow && next,
      this.items.length > 1 && !this.hideArrow && prev,
    ])

    return h('div', {
      staticClass: 'ui-carousel-root',
      class: {
        'ui-component--flex': true,
        'ui-component--child': !!this.child,
        'ui-carousel-root--arrowHover': !!this.arrowHover,
        'ui-carousel-root--transparent': !!this.transparent
      },
      style: {
        '--ui-carousel-width': returnPX(this.width),
        '--ui-carousel-height': returnPX(this.height)
      }
    }, [
      !!this.$slots.default && carousel
    ])
  }
}