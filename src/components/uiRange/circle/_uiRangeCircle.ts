import { VNode } from 'vue'
import { Model, Component, Prop, Watch } from 'vue-property-decorator'
import { uiComponentColor } from '../../../mixins/component'
import uiProcessCircle from '../../uiProcess/circle/_uiProcessCircle'
import { isUndefined } from '../../../util'

@Component
export default class uiRangeCircle extends uiComponentColor {

  @Model('model', { type: Number }) readonly value!: any

  @Prop({ type: Number, default: 0 }) min! : number

  @Prop({ type: Number, default: 10 }) max! : number

  @Prop({ type: Number, default: 100 }) size! : number 

  @Prop({ type: Number, default: 7 }) line! : number 

  @Prop({ type: Boolean }) hideControl! : boolean

  @Prop({ type: Boolean }) hiddenContent! : boolean

  get isValid () {
    if(!!isUndefined(this.value)) return false
    if(this.max < this.min) return false

    return true
  }

  getValueByPercent (percent : number) {
    if(!this.isValid) return

    const lengthStep = 100 / (this.max - this.min)
    const steps = Math.round(percent / lengthStep)
    let valueRange = steps * lengthStep * (this.max - this.min) * 0.01 + this.min
  
    // Check
    if (valueRange > this.max) {
      valueRange = this.max
    }
    else {
      valueRange = Math.round(valueRange)
    }

    // Update
    this.$emit('model', valueRange)
    this.$emit('change', valueRange)
  }

  get percent () {
    if(!this.isValid) return 0
    if(!this.value) return 0 // If value = null || value = 0

    const lengthStep = 100 / (this.max - this.min)
    const percentNow = (this.value - this.min) * lengthStep

    if(Math.sign(percentNow) == -1){
      return 0
    }
    else if (percentNow > 100) {
      return 100
    }
    else {
      return percentNow
    }
  }

  public render(h : any): VNode {
    return h(uiProcessCircle, {
      props: {
        ...this.$props,
        value: this.percent,
        maxPercent: 100,
        clickChange: true,
        control: !this.hideControl
      },
      on: {
        change: this.getValueByPercent.bind(this)
      }
    }, [
      this.value
    ])
  }
}