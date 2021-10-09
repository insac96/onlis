import uiDialog from '../uiDialog/_uiDialog'
import { Component, Prop } from 'vue-property-decorator'

interface IControlPos {
  top? : boolean
  right? : boolean
  block? : boolean
}

@Component
export default class uiBottomSheet extends uiDialog {
  @Prop({ type: Boolean, default: true }) readonly bottom!: boolean

  @Prop({ type: Boolean, default: false }) readonly blur!: boolean

  // Control
  get controlConfig () {
    return {
      top: true,
      right: false,
      block: false,
      ...this.control
    }
  }
}