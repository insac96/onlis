import { VNode } from 'vue'
import { Model, Component, Prop, Watch } from 'vue-property-decorator'
import { uiComponentColor } from '../../../mixins/component'
import { uiLoading } from '../../../mixins/public'
import { returnPX , is_Percent } from '../../../util'

@Component
export default class uiProcessCircle extends uiComponentColor {

  @Model('model', { type: Number }) readonly value!: number

  @Prop({ type: Number, default: 100 }) size! : number 

  @Prop({ type: Number, default: 7 }) line! : number 

  @Prop({ type: Number, default: 100 }) maxPercent! : number

  @Prop({ type: Boolean }) control! : boolean 

  @Prop({ type: Boolean }) clickChange! : boolean 

  @Prop({ type: Boolean }) hiddenContent! : boolean

  isFocus = false

  // Check Value is Valid
  get isValidValue () {
    return (!!is_Percent(this.value) && !!is_Percent(this.maxPercent))
  }

  // Set SGV
  get svgCircleProp () { 
    const radius = this.size / 2
    const circumference = (this.size - this.line) *  Math.PI

    return {
      'stroke-width': this.line,
      'cx': radius,
      'cy': radius,
      'r': radius - (this.line / 2),
      'stroke-dasharray': `${circumference} ${circumference}`
    }
  }

  get svgProgress () {
    const circumference = (this.size - this.line) *  Math.PI

    return circumference - ((this.progress / 100) * (circumference))
  }

  // Control Focus
  focus () {
    this.isFocus = true

    this.$emit('focus')
    this.$emit('start')

    // Create Event
    window.addEventListener("mousemove", this.mouseMove)
    window.addEventListener("mouseup", this.blur)

    // Support Mobile / Tablet
    if('ontouchstart' in document.documentElement){
      window.addEventListener("touchmove", this.mouseMove, {
        passive: false
      })
      window.addEventListener("touchend", this.blur, {
        passive: false
      })
    }

    // Set Style Body
    document.body.style.overflow = 'hidden'
    document.body.style.cursor = 'grabbing'
  }

  // Control Blur
  blur () {
    this.isFocus = false

    this.$emit('blur')
    this.$emit('end')

    window.removeEventListener("mousemove", this.mouseMove)
    window.removeEventListener("mouseup", this.blur)

    // Support Mobile / Tablet
    if('ontouchstart' in document.documentElement){
      window.removeEventListener("touchmove", this.mouseMove)
      window.removeEventListener("touchend", this.blur)
    } 

    // Set Style Body
    document.body.style.overflow = ''
    document.body.style.cursor = ''
  }

  // Mouse Move
  mouseMove (event: any) {
    if(!this.isValidValue) return

    const processCircle = this.$el as HTMLElement
    const processCirclePos = processCircle.getBoundingClientRect()

		const radius : number = this.size / 2
    
    let posMouseX : number 
    let posMouseY : number 
    let angle : number
    let rotate : number
    let percent : number

    // Set Pos
    if (event.type == "touchmove") {
      posMouseX = event.targetTouches[0].clientX - processCirclePos.left
      posMouseY = event.targetTouches[0].clientY - processCirclePos.top
    }
    else {
      posMouseX = event.clientX - processCirclePos.left
      posMouseY = event.clientY - processCirclePos.top
    }

    // Set Angle
    angle = Math.atan2(radius - posMouseX, radius - posMouseY) * (180 / Math.PI)
    
    // Set Rotate
    if(angle < 0){
      rotate = 0 - angle
    }
    else {
      rotate = 180 + (180 - angle)
    }

    // Set Percent
    percent = Math.round((rotate / 360) * 100)

    // Check Max Percent
    if(percent >= this.maxPercent){
      percent = this.maxPercent
    }

    // Update
    this.$emit('model', percent)
    this.$emit('change', percent)
  }

  // Get Progress
  get progress () {
    if(!this.isValidValue) return 0
    if(!this.value) return 0

    if (this.value >= this.maxPercent){
      return this.maxPercent
    }
    else {
      return this.value
    }
  }

  // Get Control Rotate
  get controlRotate () {
    return this.progress * 360 / 100
  }

  // Process CLick
  onClick (event : any) {
    this.$emit('click', event)

    if(!this.clickChange) return

    const isControl = event.target.classList.contains('ui-process-circle-control__button')
    const isContent = event.target.classList.contains('ui-process-circle-content')
    if(!!isControl || !!isContent) return

    this.mouseMove(event)
  }

  public render(h : any): VNode {
    // Circle Process
    const circle = h('circle', {
      attrs: this.svgCircleProp,
      style: {
        'stroke-dashoffset': this.svgProgress
      }
    })

    // Circle Background
    const circleBG = h('circle', {
      attrs: this.svgCircleProp
    })

    // SVG
    const svg = h('svg', {
      staticClass: 'ui-process-circle-svg',
      attrs: {
        width: '100%',
        height: '100%',
        fill: 'transparent'
      }     
    }, [
      circleBG,
      circle
    ])

    // Control Button
    const controlButton = h('button', {
      staticClass: 'ui-process-circle-control__button',
      on : {
        touchstart: this.focus,
        mousedown: this.focus
      }
    }, [
      !!this.isLoading && h(uiLoading)
    ])

    // Control
    const control = h('div', {
      staticClass: 'ui-process-circle-control',
      style: {
        '--ui-process-circle-rotate': `${this.controlRotate}deg`
      }
    }, [
      controlButton
    ])

    // Content
    const content = h('div', {
      staticClass: 'ui-process-circle-content'
    }, [
      !!this.$slots.default ? this.$slots.default : (!!this.isValidValue ? this.progress : 0) + '%'
    ])

    return h('div', {
      staticClass: 'ui-process-circle',
      class: [
        'ui-component--flex',
        {
          'ui-process-circle--pointer': !!this.clickChange,
          'ui-process-circle--focus': !!this.isFocus
        },
        this.classStatus,
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-process-circle-size': returnPX(this.size),
          '--ui-process-circle-line': returnPX(this.line)
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
      svg,
      !!this.control && control,
      !this.hiddenContent && content
    ])
  }
}