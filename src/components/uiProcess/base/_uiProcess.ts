import { VNode } from 'vue'
import { Model, Component, Prop, Watch } from 'vue-property-decorator'
import { uiComponentColor } from '../../../mixins/component'
import { uiLoading } from '../../../mixins/public'
import { returnPX, isPercent } from '../../../util'

@Component
export default class uiProcess extends uiComponentColor {

  @Model('model', { type: Number }) readonly value!: number

  @Prop() width! : any 

  @Prop() size! : any 

  @Prop({ type: Number, default: 100 }) maxPercent! : number

  @Prop({ type: Boolean }) control! : boolean 

  @Prop({ type: Boolean }) center! : boolean 

  @Prop({ type: Boolean }) right! : boolean 

  @Prop({ type: Boolean }) clickChange! : boolean 

  @Prop({ type: Boolean }) hiddenContent! : boolean

  isFocus : boolean = false

  effect : any = null

  // Check Value is Valid
  get isValidValue () {
    return (!!isPercent(this.value) && !!isPercent(this.maxPercent))
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

    const process = this.$el as HTMLElement
    const processPos = process.getBoundingClientRect()

    let width = !!this.center ? (processPos.width / 2) : processPos.width
    let posX : number
    let value : number

    // Check event type and set PosX
    if (event.type == "touchmove") {
      posX = event.targetTouches[0].clientX - processPos.left
    }
    else {
      posX = event.clientX - processPos.left
    }

    // Check Not Center
    if(!this.center) {
      if (Math.sign(posX) == -1) {
        posX = !!this.right ? (0 + width) : 0
      } 
      else if (posX > width) {
        posX = !!this.right ? 0 : width
      }
      else {
        posX = !!this.right ? (width - posX) : posX
      }
    }

    // Is Center
    if(!!this.center) {
      if (Math.sign(posX) == -1 || posX > (width * 2)) {
        posX = width
      }
      else if (posX > width) {
        posX = (posX - width)
      }
      else if (posX < width) {
        posX = (width - posX)
      }
      else {
        posX = 0
      }
    }

    // Set Percent
    value = Math.round((posX / width) * 100)

    // Check Max Percent
    if(value >= this.maxPercent){
      value = this.maxPercent
    }

    // Set Effect
    this.setEffect()

    // Update
    this.$emit('model', value)
    this.$emit('change', value)
  }

  // Get Progress
  get progress () {
    if(!this.isValidValue) return 0
    if(!this.value) return 0 // If value = null || value = 0

    if (this.value >= this.maxPercent){
      return this.maxPercent
    }
    else {
      return this.value
    }
  }

  // Process CLick
  onClick (event : any) {
    this.$emit('click', event)

    if(!this.clickChange) return

    const isControl = event.target.classList.contains('ui-process-control')
    if(!!isControl) return

    this.mouseMove(event)
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
    if(!!this.isFocus) return

    this.setEffect()
  }

  public render(h : any): VNode {
    // Control
    const control = h('button', {
      staticClass: 'ui-process-control',
      on : {
        touchstart: this.focus,
        mousedown: this.focus
      }
    }, [
      !!this.isLoading && h(uiLoading)
    ])

    // Line
    const line = h('div', {
      staticClass: 'ui-process-line',
    })

    // Content
    const content = h('div', {
      staticClass: 'ui-process-content',
      class: {
        'ui-process-content--show': !!this.effect
      }
    }, [
      !!this.$slots.default ? this.$slots.default : (!!this.isValidValue ? this.progress : 0) + '%'
    ])

    return h('div', {
      staticClass: 'ui-process',
      class: [
        'ui-component--flex',
        {
          'ui-process--left': !this.right && !this.center,
          'ui-process--center': !this.right && !!this.center,
          'ui-process--right': !!this.right && !this.center,
          'ui-process--pointer': !!this.clickChange,
          'ui-process--focus': !!this.isFocus
        },
        this.classStatus,
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-process-width': returnPX(this.width),
          '--ui-process-size': returnPX(this.size),
          '--ui-process-value': `${this.progress}%`
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
      line,
      !this.hiddenContent && content,
      !!this.control && control
    ])
  }
}