import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { uiLoading } from '../../mixins/public'
import { returnPX } from '../../util'

@Component
export default class uiAvatar extends uiComponentColor {

  @Prop({ type: String, default: null }) color! : string

  @Prop() size! : any

  @Prop() imgSize! : any

  // On Click
  onClick (event : any) {
    if(!this.isPointer) return
    this.startRipple(event, this.$el as HTMLElement)
    this.onLink()
    this.$emit('click', event)
  }

  // Mini Text
  get miniText () {
    if(!this.$slots.text) return this.$slots.default
    const [nodeText] = this.$slots.text
    
    if(!nodeText.text) return this.$slots.default
    const text = nodeText.text.trim()

    return text.split(/\s/g).map((item) => {
      return item[0]
    })
  }
  
  // Render
  public render(h: any): VNode {
    return h('div', {
      staticClass: 'ui-avatar',
      class: [
        'ui-component',
        [
          'd-inline-flex',
          'align-center',
          'justify-center',
          'user-none',
          'line-normal'
        ],
        this.classStatus,
        this.classFashion,
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-avatar-size': returnPX(this.size),
          '--ui-avatar-img-size': returnPX(this.imgSize)
        }
      ],
      attrs: {
        ...this.$attrs,
      },
      on: {
        ...this.$listeners,

        click : this.onClick
      }
    }, [
      !!this.isLoading && h(uiLoading),
      !!this.$slots.text ? this.miniText : this.$slots.default
    ])
  }
}