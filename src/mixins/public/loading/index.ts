import Vue, { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import './_style.sass'

@Component
export default class VsComponent extends Vue {
  @Prop ({ type: Boolean }) large! : boolean

  @Prop ({ type: Boolean }) small! : boolean

  @Prop ({ type: Boolean }) full! : boolean

  isShow : boolean = false

  mounted () {
    this.$nextTick(() => this.isShow = true)
  }

  public render(h: any): VNode {
    const loading = h('div', {
      staticClass: 'ui-loading',
      class: {
        'ui-loading--large': !!this.large,
        'ui-loading--small': !!this.small
      }
    })

    const root = h('div', {
      staticClass: 'ui-loading-root',
      class: [
        [
          'd-flex',
          'align-center',
          'justify-center',
          'user-none'
        ],
        {
          'ui-loading-root--default': !this.full,
          'ui-loading-root--full': !!this.full
        }
      ]
    }, [
      loading
    ])

    return h('transition', {
      props: {
        name: 'show'
      }
    }, [
      this.isShow && root
    ])
  }
}