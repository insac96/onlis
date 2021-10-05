import Vue, { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import './_style.sass'

@Component
export default class VsComponent extends Vue {
  @Prop ({ type: String, default: null }) background! : string | null

  @Prop ({ type: String, default: null }) color! : string | null

  @Prop ({ type: String, default: null }) text! : string | null

  @Prop ({ type: Boolean }) large! : boolean

  @Prop ({ type: Boolean }) small! : boolean

  show : boolean = false

  mounted () {
    this.$nextTick(() => {
      this.show = true
    })
  }

  public render(h: any): VNode {
    const text = h('div', {
      staticClass: 'ui-loading-text'
    }, [
      this.text
    ])

    const loading = h('div', {
      staticClass: 'ui-loading',
      class: {
        'ui-loading--large': !!this.large,
        'ui-loading--small': !!this.small
      }
    }, [])

    const root = h('div', {
      staticClass: 'ui-loading-root',
      style: {
        '--ui-loading-background': this.background,
        '--ui-loading-color': this.color
      }
    }, [
      loading,
      this.text && text
    ])

    return h('transition', {
      props: {
        name: 'show'
      }
    }, [
      this.show && root
    ])
  }
}