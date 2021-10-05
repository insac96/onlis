import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class uiComponent extends Vue {
  static install: (vue: any) => void

  // Status
  @Prop({ type: Boolean }) active! : boolean

  @Prop({ type: Boolean }) disabled! : boolean

  @Prop({ type: Boolean }) loading! : boolean

  // Block
  @Prop({ type: Boolean }) inline! : boolean

  @Prop({ type: Boolean }) block! : boolean

  // Link
  @Prop({ default: null }) to! : any

  @Prop({ type: String }) href! : string

  @Prop({ type: Boolean }) self! : boolean

  // Is Status
  get isActive() {
    return !!this.active
  }

  get isLoading() {
    return !!this.loading
  }

  get isDisabled() {
    return !!this.disabled
  }

  // Is Pointer
  get isPointer() {
    return !!this.$listeners.click || !!this.to || !!this.href
  }

  // Class Status
  get classStatus () {
    return {
      'ui-component--active': !!this.isActive,
      'ui-component--disabled': !!this.isDisabled,
      'ui-component--loading': !!this.isLoading,
      'ui-component--pointer': !!this.isPointer,
    }
  }

  // On Link Active
  onLink () {
    if (!!this.to) {
      if(!this.$router) return
      this.$router.push(this.to)
    } 
    else if (!!this.href) {
      window.open(this.href, !this.self ? '_blank' : '_self')
    }
  }
}