import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class uiCarouselItem extends Vue {

  static install: (vue: any) => void

  get id () {
    return this._uid
  }

  get parent () {
    return (!!(this.$parent as any) && (this.$parent as any).componentName == 'carousel') ? (this.$parent as any) : null
  }

  get effect () {
    return !!this.parent ? this.parent.effect : null
  }

  get isItemActive () {
    return this.parent.nowID === this.id
  }

  mounted() {
    if(!!this.parent){
      this.parent.items.push(this.id)
    }
  }

  beforeDestroy() {
    if(!!this.parent){
      const itemIndex = this.parent.items.indexOf(this.id)
      this.$delete(this.parent.items, itemIndex)

      this.parent.indexNowItem = itemIndex >= 1 ? itemIndex - 1 : 0
    }
  }
  
  public render(h: any): VNode {
    const item = h('div', {
      staticClass: 'ui-carousel-item-root',
      class: 'ui-component--flex',
      directives: [
        {
          name: 'show',
          value: this.isItemActive
        }
      ]
    }, [
      this.$slots.default
    ]) 

    return h('transition', {
      props: {
        name: this.effect
      }
    }, [
      item
    ])
  }
}