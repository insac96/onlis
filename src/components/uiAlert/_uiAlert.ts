import { VNode } from 'vue'
import { Component, Prop, Model } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { uiLoading, uiIconClose } from '../../mixins/public'
import { returnPX } from '../../util'

@Component
export default class uiAlert extends uiComponentColor {
  @Model('model', { type: Boolean, default: true }) readonly value!: boolean

  @Prop() width! : any

  @Prop() iconSize! : any

  @Prop({ type: Boolean }) center! : boolean

  @Prop({ type: String, default: 'right' }) effect! : string

  onClick (event : any) {
    if(!this.isPointer) return
    this.onLink()
    this.startRipple(event, this.$el as HTMLElement)
    this.$emit('click', event)
  }
  
  public render(h: any): VNode {
    // Left
    const icon = h('div', {
      staticClass: 'ui-alert__left__icon',
      class: {
        'ui-component--pointer': !!this.$listeners.icon
      },
      on: {
        click: (event : any) => {
          if(!this.$listeners.icon) return
          this.startRipple(event, this.$el as HTMLElement)
          this.$emit('icon')
        }
      }
    }, [
      this.$slots.icon
    ])

    const left = h('div', {
      staticClass: 'ui-alert__left'
    }, [
      !!this.$slots.icon ? icon : this.$slots.left
    ])

    // Content
    const title = h('div', {
      staticClass: 'ui-alert__content__title'
    }, [
      this.$slots.title
    ])

    const body = h('div', {
      staticClass: 'ui-alert__content__body'
    }, [
      this.$slots.default
    ])

    const content = h('div', {
      staticClass: 'ui-alert__content'
    }, [
      !!this.$slots.title && title,
      !!this.$slots.default && body
    ])

    //Right
    const right = h('div', {
      staticClass: 'ui-alert__right',
    }, [
      !!this.isLoading ? h(uiLoading) : this.$slots.right
    ])

    // Alert
    const alert = h('div', {
      staticClass: 'ui-alert',

      class: [
        { 
          'ui-alert--center': !!this.center 
        },
        'ui-component',
        'ui-component--flex',
        this.classStatus,
        this.classFashion,
        this.classColor
      ],

      style: [
        this.styleColor,
        { 
          '--ui-alert-width': returnPX(this.width),
          '--ui-alert-icon-size': returnPX(this.iconSize)
        }
      ],

      directives: [
        {
          name: 'show',
          value: !!this.value
        }
      ],

      attrs: this.$attrs,

      on: {
        ...this.$listeners,

        click : this.onClick
      }
    }, [
      (!!this.$slots.left || !!this.$slots.icon) && left,
      content,
      (!!this.$slots.right || !!this.isLoading) && right
    ])

    // Transition
    return h('transition', {
      props: {
        name: `ui-${this.effect}`
      }
    }, [ 
      alert 
    ])
  }
}