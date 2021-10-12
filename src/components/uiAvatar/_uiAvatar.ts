import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { uiComponentColor, uiLoading } from '../../mixins'
import { returnPX } from '../../util'

@Component
export default class uiAvatar extends uiComponentColor {

  @Prop({ type: String }) color! : string

  @Prop() size! : any

  @Prop() imgSize! : any

  @Prop({ type: Boolean }) circle! : boolean

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
    const loading = h(uiLoading, { 
      props: { 
        full : true 
      } 
    })

    return h('div', {
      staticClass: 'ui-avatar',
      class: [
        'ui-component',
        [
          'd-inline-flex',
          'align-center',
          'justify-center',
          'user-none',
          'line-normal',
          {
            'ra-50': !!this.circle
          }
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
      },
      directives: [
        {
          name: 'ripple-component',
          value: !!this.ripple && !!this.isPointer
        }
      ]
    }, [
      !!this.isLoading && loading,
      !!this.$slots.text ? this.miniText : this.$slots.default
    ])
  }
}