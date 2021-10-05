import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { returnPX } from '../../util'
import { IServices } from 'onlis/types'

@Component
export default class uiApp extends Vue {
  static install: (vue: any) => void

  get themeService () {
    return this.$onlis.theme
  }

  //get breakpointService () {
  //  return this.$onlis.breakpoint
  //}

  get colors () {
    return !!this.themeService.dark ? this.themeService.colors['dark'] : this.themeService.colors['light']
  }

  get styleVars () {
    return {
      '--ui-radius': this.themeService.radius,
      //'--ui-threshold-xs': returnPX(this.breakpointService.thresholds.xs),
      //'--ui-threshold-sm': returnPX(this.breakpointService.thresholds.sm),
      //'--ui-threshold-md': returnPX(this.breakpointService.thresholds.md),
      //'--ui-threshold-lg': returnPX(this.breakpointService.thresholds.lg)
    }
  }

  get styleColors () {
    return {
      '--ui-primary': this.colors['primary'],
      '--ui-danger': this.colors['danger'],
      '--ui-warn': this.colors['warn'],
      '--ui-success': this.colors['success'],
      '--ui-dark': this.colors['dark'],
      '--ui-light': this.colors['light'],
      '--ui-background': this.colors['background'],
      '--ui-content': this.colors['content'],
      '--ui-child': this.colors['child'],
      '--ui-text': this.colors['text'],
      '--ui-gray': this.colors['gray'],
      '--ui-disabled': this.colors['disabled'],
    }
  }

  public render(h: any): VNode {
    return h('div', {
      staticClass: 'ui-app',
      domProps: {
        id: '_app_'
      },
      attrs: {
        ...this.$attrs,

        dark: this.themeService.dark,
      },
      style: [
        this.styleVars,
        this.styleColors
      ]
    }, [
      this.$slots.default
    ])
  }
}