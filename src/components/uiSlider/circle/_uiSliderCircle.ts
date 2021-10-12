import { VNode } from 'vue'
import { Model, Component, Prop } from 'vue-property-decorator'
import { uiComponentColor } from '../../../mixins'
import {  
  is_Undefined, is_Array,
  returnPX, toLowerCase,
  getPercentCircle, getPercentByValue, getValueByPercent
} from '../../../util'

@Component
export default class uiProcessCircle extends uiComponentColor {

  @Model('model', { type: [ Number, String ] }) readonly value!: any

  @Prop({ type: Number, default: 0 }) min! : number

  @Prop({ type: Number, default: 10 }) max! : number

  @Prop({ type: Number, default: 1 }) skip! : number

  @Prop() steps! : any

  @Prop({ type: Number, default: 100 }) size! : number

  @Prop({ type: Number, default: 7 }) lineSize! : number

  @Prop() controlSize! : boolean

  @Prop({ type: Boolean, default: true }) line! : boolean

  @Prop({ type: Boolean, default: true }) control! : boolean

  @Prop({ type: Boolean, default: true }) content! : boolean

  @Prop({ type: Boolean }) tick! : boolean

  @Prop({ type: Boolean }) tickIn! : boolean

  @Prop({ type: Boolean }) tickOut! : boolean

  @Prop({ type: Boolean, default: true }) clickChange! : boolean

  isControlFocus: boolean = false

  // Is Valid
  get isValid () {
    return !is_Undefined(this.value) && (this.skip > 0) && (this.max > this.min)
  }

  // Is Step Custom
  get isStepCustom () {
    return !is_Undefined(this.steps) && !!is_Array(this.steps)
  }

  // Is Pointer
  get isPointer () {
    return !!this.clickChange
  }

  // Set SGV
  get svgCircleProp () { 
    const radius = this.size / 2
    const perimeterCircle = (this.size - this.lineSize) *  Math.PI

    return {
      'stroke-width': this.lineSize,
      'cx': radius,
      'cy': radius,
      'r': radius - (this.lineSize / 2),
      'stroke-dasharray': `${perimeterCircle} ${perimeterCircle}`
    }
  }

  get circleProgress () {
    const perimeterCircle = (this.size - this.lineSize) *  Math.PI

    return perimeterCircle - (this.percent / 100) * (perimeterCircle)
  }

  // Control Rotate
  get controlRotate () {
    return this.percent * 360 / 100
  }

  // Percent
  get percent () {
    if(!this.isValid) return 0

    if(!!this.isStepCustom){
      let index = this.steps.indexOf(this.value)
      index = (index !== -1) ? index : 0

      return getPercentByValue(index, 1, 0, (this.steps.length - 1))
    }
    else {
      return getPercentByValue((this.value - this.min), this.skip, this.min, this.max)
    }
  }

  // Render Ticks
  get renderTicks () {
    let ticks : number
    let array : any[]

    // Set Tick
    if(!!this.isStepCustom){
      ticks = this.steps.length
    }
    else {
      ticks = Math.round((this.max - this.min) / this.skip) + 1
    }
    
    // Create Array
    array = Array.from(Array(ticks).keys())

    // Render
    return array.map((index) => {
      let percent : number 
      let rotate : number 
      let text : any
      let slot : string

      // Set
      if(!!this.isStepCustom){
        percent = getPercentByValue(index, 1, 0, (this.steps.length - 1))
        text = `${this.steps[index]}`
        slot = `tick-${toLowerCase(text, '-')}`
      }
      else {
        percent = getPercentByValue((index * this.skip), 1, this.min, this.max)
        text = `${index * this.skip + this.min}`
        slot = `tick-${text}`
      }

      // Set Rotate
      rotate = percent * 360 / 100

      // Tick
      return ((index + 1) !== ticks) && this.$createElement('div', {
        staticClass: 'ui-slider-circle__tick',
        class: [
          ['position-absolute'],
          { 
            'ui-slider-circle__tick--in': !!this.tickIn,
            'ui-slider-circle__tick--out': !!this.tickOut 
          }
        ],
        style: {
          'transform': `rotate(${rotate}deg)`
        }
      })
    })
  }

  // Control Focus
  controlFocus () {
    this.isControlFocus = true

    // Create Event
    window.addEventListener("mousemove", this.updateValue)
    window.addEventListener("mouseup", this.controlBlur)

    // Support Mobile / Tablet
    if('ontouchstart' in document.documentElement){
      window.addEventListener("touchmove", this.updateValue, {
        passive: false
      })
      window.addEventListener("touchend", this.controlBlur, {
        passive: false
      })
    }

    // Set Style Body
    document.body.style.overflow = 'hidden'
    document.body.style.cursor = 'grabbing'

    // Send Event
    this.$emit('control-focus')
  }

  // Control Blur
  controlBlur () {
    this.isControlFocus = false

    // Remove Event
    window.removeEventListener("mousemove", this.updateValue)
    window.removeEventListener("mouseup", this.controlBlur)

    // Support Mobile / Tablet
    if('ontouchstart' in document.documentElement){
      window.removeEventListener("touchmove", this.updateValue)
      window.removeEventListener("touchend", this.controlBlur)
    } 

    // Set Style Body
    document.body.style.overflow = ''
    document.body.style.cursor = ''

    // Send Event
    this.$emit('control-blur')
  }
 
  // Update
  updateValue (event: any) {
    if(!this.isValid) return
    
    const percent : number = getPercentCircle(event, this.$el as HTMLElement, this.size)
    let newValue : any

    // Get Value
    if(!!this.isStepCustom){
      newValue = getValueByPercent(percent, 1, 0, (this.steps.length - 1))
      newValue = this.steps[newValue]
    }
    else {
      newValue = getValueByPercent(percent, this.skip, this.min, this.max)
    }

    // Update
    this.$emit('model', newValue)
    this.$emit('change', newValue)
    if(!!this.isControlFocus) this.$emit('control-move', newValue)
  }

  // Click
  onClick (event : any) {
    this.$emit('click', event)

    if(!this.clickChange) return
    if(!!event.target.closest('.ui-slider-circle__control__button')) return
    if(!!event.target.closest('.ui-slider-circle__content')) return

    this.updateValue(event)
  }

  // Render
  public render(h : any): VNode {
    // SVG
    const svg = h('svg', {
      staticClass: 'ui-slider-circle__svg',
      attrs: {
        width: '100%',
        height: '100%',
        fill: 'transparent'
      }     
    }, [
      (!!this.line || !!this.isLoading) && h('circle', { attrs: this.svgCircleProp }),
      (!!this.line || !!this.isLoading) && h('circle', {
        attrs: this.svgCircleProp,
        class: {
          'ui-status--loading': !!this.isLoading
        },
        style: {
          'stroke-dashoffset': this.circleProgress
        }
      })
    ])

    // Control
    const control = h('div', {
      staticClass: 'ui-slider-circle__control',
      class: [
        ['position-absolute', 'user-none', 'transition']
      ]
    }, [
      h('div', {
        staticClass: 'ui-slider-circle__control__button',
        class: [
          ['position-absolute', 'user-none', 'transition']
        ],
        on : {
          touchstart: this.controlFocus,
          mousedown: this.controlFocus
        }
      })
    ])

    // Content
    const content = h('div', {
      staticClass: 'ui-slider-circle__content',
      class: [
        'position-absolute',
        'font-size-s',
        'font-weight-600',
        'line-normal',
        'user-none'
      ]
    }, [
      !!this.$slots.default ? this.$slots.default : this.value
    ])

    // SLider Circle
    return h('div', {
      staticClass: 'ui-slider-circle',
      class: [
        'ui-component',
        ['d-inline-flex', 'align-center', 'justify-center'],
        {
          'ui-slider-circle--grabbing': !!this.isControlFocus
        },
        this.classStatus,
        this.classFashion,
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-slider-circle-size': returnPX(this.size),
          '--ui-slider-circle-line': returnPX(this.lineSize),
          '--ui-slider-circle-control': returnPX(this.controlSize),
          '--ui-slider-circle-rotate': `${this.controlRotate}deg`
        }
      ],
      attrs: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners,

        click: this.onClick
      }
    }, [
      !!this.isValid && !!this.tick && this.renderTicks,
      svg,
      !!this.isValid && !!this.control && control,
      !!this.isValid && (!!this.$slots.default || !!this.content) && content
    ])
  }
}