import { VNode } from 'vue'
import { Model, Component, Prop, Watch } from 'vue-property-decorator'
import { uiComponentColor } from '../../../mixins'
import {  
  is_Undefined, is_Array,
  returnPX, toLowerCase,
  getPercentLine, getPercentByValue, getValueByPercent
} from '../../../util'

@Component
export default class uiSlider extends uiComponentColor {

  @Model('model', { type: [ Number, String ] }) readonly value!: any

  @Prop({ type: Number, default: 0 }) min! : number

  @Prop({ type: Number, default: 10 }) max! : number

  @Prop({ type: Number, default: 1 }) skip! : number

  @Prop() steps! : any

  @Prop() width! : any 

  @Prop() size! : any

  @Prop() controlSize! : any 

  @Prop({ type: Boolean }) right! : boolean

  @Prop({ type: Boolean, default: true }) line! : boolean

  @Prop({ type: Boolean, default: true }) control! : boolean

  @Prop({ type: Boolean, default: true }) content! : boolean

  @Prop({ type: Boolean }) tick! : boolean

  @Prop({ type: Boolean }) tickText! : boolean

  @Prop({ type: Boolean, default: true }) clickChange! : boolean

  isControlFocus: boolean = false

  effect: any = null

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

  // Get Type
  get type () {
    return !!this.right ? 'right' : 'left'
  }

  // Percent Position
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
      let posX : number 
      let text : any
      let slot : string

      // Set
      if(!!this.isStepCustom){
        posX = getPercentByValue(index, 1, 0, (this.steps.length - 1))
        text = `${this.steps[index]}`
        slot = `tick-${toLowerCase(text, '-')}`
      }
      else {
        posX = getPercentByValue((index * this.skip), 1, this.min, this.max)
        text = `${index * this.skip + this.min}`
        slot = `tick-${text}`
      }

      // Tick
      const tick = (index !== 0 && (index + 1 !== ticks)) && this.$createElement('div', {
        staticClass: 'ui-slider__tick',
        class: ['position-absolute'],
        style: {
          [`${this.type}`]: `${posX}%`
        }
      })

      // Tick Text
      const tickText = this.$createElement('div', {
        staticClass: 'ui-slider__tickText',
        class: [
          [
            'position-absolute', 
            'font-size-xs', 
            'font-weight-600', 
            'user-none',
            'line-normal'
          ],
          {
            'ui-slider__tickText--start': index === 0,
            'ui-slider__tickText--end': index + 1 === ticks,
          }
        ],
        style: {
          [`${this.type}`]: `${posX}%`
        }
      }, [ 
        !!this.$slots[slot] ? this.$slots[slot] : text
      ])

      // Render
      return [
        !!this.tick && tick,
        !!this.tickText && tickText
      ]
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
  updateValue(event : any) {
    if(!this.isValid) return
    
    const reverse = this.type === 'right'
    let percent : number = getPercentLine(event, this.$el as HTMLElement, reverse)
    let newValue : number

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
    if(!!this.isPointer){
      this.$emit('click', event)
    }
    
    if(!this.clickChange) return
    if(!!event.target.closest('.ui-process__control')) return

    this.updateValue(event)
  }

  // Set Effect
  setEffect () {
    if(!!this.effect) return

    this.effect = setTimeout(() => {
      clearTimeout(this.effect)
      this.effect = null
    }, 1000)
  }

  // Watch Value
  @Watch('value')
  onValueChange (val : number){
    if(!!this.isControlFocus) return

    this.setEffect()
  }

  // Render
  public render(h : any): VNode {
    // Line
    const line = h('div', {
      staticClass: 'ui-slider__line',
      class: ['position-absolute', 'user-none', 'transition'],
      style: {
        'width': `${this.percent}%`,
        [`${this.type}`]: 0
      }
    })

    // Content
    const content = h('div', {
      staticClass: 'ui-slider__content',
      class: [
        ['font-size-s', 'font-weight-600'],
        ['position-absolute', 'user-none', 'transition'],
        {
          'ui-slider__content--show': !!this.effect || !!this.isControlFocus,
          'ui-slider__content--start': this.percent === 0,
          'ui-slider__content--end': this.percent === 100
        }
      ],
      style: {
        [`${this.type}`]: `${this.percent}%`
      }
    }, [
      !!this.$slots.default ? this.$slots.default : this.value
    ])

    // Control
    const control = h('div', {
      staticClass: 'ui-slider__control',
      class: [
        ['position-absolute', 'user-none', 'transition'],
        {
          'ui-slider__control--start': this.percent === 0,
          'ui-slider__control--end': this.percent === 100
        }
      ],
      style: {
        [`${this.type}`]: `${this.percent}%`
      },
      on : {
        touchstart: this.controlFocus,
        mousedown: this.controlFocus
      }
    })

    // Slider
    return h('div', {
      staticClass: 'ui-slider',
      ref: 'slider',
      class: [
        'ui-component',
        ['d-flex', 'align-center', 'justify-center'],
        {
          'ui-slider--grabbing': !!this.isControlFocus,
          'ui-slider--right': !!this.right
        },
        this.classStatus,
        this.classFashion,
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-slider-width': returnPX(this.width),
          '--ui-slider-size': returnPX(this.size),
          '--ui-slider-control': returnPX(this.controlSize),
          '--ui-slider-animation': !!this.isLoading ? `slider-${this.type}-effect` : null
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
      !!this.isValid && this.renderTicks,
      !!this.isValid && (!!this.$slots.default || !!this.content) && content,
      !!this.isValid && (!!this.line || !!this.isLoading) && line,
      !!this.isValid && !!this.control && control,
    ])
  }
}