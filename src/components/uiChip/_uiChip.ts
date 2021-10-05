import { VNode } from 'vue'
import { Component, Prop, Model } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { uiLoading, uiIconClose } from '../../mixins/public'
import { returnPX, isUndefined } from '../../util'

@Component
export default class uiChip extends uiComponentColor {

  @Model('model', { type: Boolean , default: undefined }) readonly value!: boolean

  @Prop({ type: String, default: 's' }) size! : string

  @Prop({ type: String, default: null }) color! : string

  @Prop() width! : any

  @Prop({ type: Boolean }) remove! : boolean

  @Prop({ type: String, default: 'zoom' }) effect! : string

  isShow: boolean = true

  // On Click
  onClick (event : any) {
    if(!this.isPointer) return
    this.startRipple(event, this.$el as HTMLElement)
    this.onLink()
    this.$emit('click', event)
  }

  // Remove
  onRemove (event : any) {
    this.startRipple(event, this.$el as HTMLElement)

    setTimeout(() => {
      if(!!isUndefined(this.value)){
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
    const remove = h(uiIconClose, {
      on: {
        click: this.onRemove.bind(this)
      }
    })

    const right = h('div', {
      staticClass: 'ui-chip__right',
      class: {
        'ui-chip__right--loading': !!this.isLoading
      }
    }, [ 
      !!this.isLoading ? h(uiLoading) : remove
    ])

    const chip = h('div', {
      staticClass: 'ui-chip',
      ref: 'chip',
      class: [
        'ui-component',
        'ui-component--inline-flex',
        {
          'ui-component--size--s': !this.size,
          [`ui-component--size--${this.size}`]: !!this.size 
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
          value: !isUndefined(this.value) ? this.value : this.isShow
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