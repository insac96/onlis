import { VNode } from 'vue'
import { Component, Prop, Model } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { uiLoading, uiIconClose } from '../../mixins/public'
import { returnPX, is_Undefined } from '../../util'

@Component
export default class uiChip extends uiComponentColor {

  @Model('model', { type: Boolean , default: undefined }) readonly value!: boolean

  @Prop({ type: String, default: 's' }) size! : string

  @Prop({ type: String, default: 'full' }) fashion! : string

  @Prop({ type: String }) color! : string

  @Prop() width! : any

  @Prop({ type: Boolean }) remove! : boolean

  @Prop({ type: String, default: 'zoom' }) effect! : string

  isShow: boolean = true

  // Remove
  onRemove (event : any) {
    setTimeout(() => {
      if(!!is_Undefined(this.value)){
        this.isShow = false
      }
      else {
        this.$emit('model', false)
      }

      this.$emit('remove')
    }, 200)
  }

  // Render
  public render(h: any): VNode {
    // Remove
    const remove = h(uiIconClose, {
      on: {
        click: this.onRemove.bind(this)
      }
    })

    // Right
    const right = h('div', {
      staticClass: 'ui-chip__right',
      class: ['ml-1']
    }, [ 
      !!this.isLoading ? h(uiLoading) : remove
    ])

    // Chip
    const chip = h('div', {
      staticClass: 'ui-chip',
      ref: 'chip',
      class: [
        'ui-component',
        [
          'd-inline-flex',
          'align-center',
          'justify-center',
          'line-normal',
          'user-none'
        ],
        {
          'ui-size--s': !this.size,
          [`ui-size--${this.size}`]: !!this.size 
        },
        this.classStatus,
        this.classFashion,
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-chip-width': returnPX(this.width)
        }
      ],
      attrs: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners,
        
        click: this.onClick
      },
      directives: [
        {
          name: 'show',
          value: !is_Undefined(this.value) ? this.value : this.isShow
        },
        {
          name: 'ripple-component',
          value: !!this.ripple && (!!this.isPointer || !!this.remove)
        }
      ]
    }, [
      this.$slots.default,
      (!!this.isLoading || !!this.remove) && right,
    ]) 

    // Transition
    return h('transition', {
      props: {
        name: `ui-${this.effect}`
      }
    }, [ 
      chip 
    ])
  }
}