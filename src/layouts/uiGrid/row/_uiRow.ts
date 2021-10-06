import { Component, Prop } from 'vue-property-decorator'
import uiFlex from '../../../components/uiFlex/_uiFlex'

@Component
export default class uiRow extends uiFlex {

  @Prop({ type: String, default: 'start' }) jus!: string

  @Prop({ type: String, default: 'start' }) align!: string

  @Prop({ type: Boolean, default: true }) wrap!: boolean

  @Prop({ type: String, default: 'start' }) content! : string
}