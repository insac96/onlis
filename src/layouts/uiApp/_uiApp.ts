import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class uiApp extends Vue {
  static install: (vue: any) => void

  get themeService () {
    return this.$onlis.theme
  }

  get colors () {
    return !!this.themeService.dark ? this.themeService.colors.dark : this.themeService.colors.light
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
        {
          '--ui-radius': this.themeService.radius,
        },
        {
          '--ui-primary': this.colors.primary,
          '--ui-danger': this.colors.danger,
          '--ui-warn': this.colors.warn,
          '--ui-success': this.colors.success,
          '--ui-dark': this.colors.dark,
          '--ui-light': this.colors.light,
          '--ui-background': this.colors.background,
          '--ui-content': this.colors.content,
          '--ui-child': this.colors.child,
          '--ui-text': this.colors.text,
          '--ui-gray': this.colors.gray,
          '--ui-disabled': this.colors.disabled,
        }
      ]
    }, [
      this.$slots.default
    ])
  }
}