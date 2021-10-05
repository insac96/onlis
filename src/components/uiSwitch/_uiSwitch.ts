import uiCheckBox from '../uiCheckbox/_uiCheckbox'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class uiSwitch extends uiCheckBox {
  @Prop({ type: Boolean, default: true }) readonly switch!: boolean
}