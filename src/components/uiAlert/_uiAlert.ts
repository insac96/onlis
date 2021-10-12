import { VNode } from 'vue'
import { Component, Prop, Model } from 'vue-property-decorator'
import { uiComponentColor, uiLoading, uiIconClose } from '../../mixins'
import { returnPX } from '../../util'

@Component
export default class uiAlert extends uiComponentColor {
  @Model('model', { type: Boolean, default: true }) readonly value!: boolean

  @Prop() width! : any

  @Prop() iconSize! : any

  @Prop({ type: Boolean, default: true }) center! : boolean

  @Prop({ type: String, default: 'right' }) effect! : string

  onClick (event : any) {
    if(!this.isPointer) return
    this.onLink()
    this.$emit('click', event)
  }
  
  public render(h: any): VNode {
    // Icon Left
    const icon = h('div', {
      staticClass: 'ui-alert__icon',
      class: [
        'd-flex',
        'align-center',
        'justify-center',
        'ra', 
        'mr-2',
        'line-normal',
        'user-none',
        {
          'cursor-pointer': !!this.$listeners.icon
        }
      ],
      on: {
        click: () => this.$emit('icon')
      }
    }, [
      this.$slots.icon
    ])

    // Left
    const left = h('div', {
      staticClass: 'ui-alert__left',
      class: ['mr-2']
    }, [
      this.$slots.left
    ])

    // Content Title
    const title = h('div', {
      staticClass: 'ui-alert__title',
      class: [
        'user-none',
        'line-normal',
        'font-weight-700'
      ]
    }, [
      this.$slots.title
    ])

    // Content Body
    const body = h('div', {
      staticClass: 'ui-alert__body',
      class: ['font-size-s']
    }, [
      this.$slots.default
    ])

    // Content
    const content = h('div', {
      class: [
        'd-flex',
        'flex-column',
        'full-width',
        'grow-1',
      ]
    }, [
      !!this.$slots.title && title,
      !!this.$slots.default && body
    ])

    // Right
    const right = h('div', {
      staticClass: 'ui-alert__right',
      class: [ 'ml-2' ]
    }, [
      !!this.isLoading ? h(uiLoading) : this.$slots.right
    ])

    // Alert
    const alert = h('div', {
      staticClass: 'ui-alert',
      class: [
        'ui-component',
        'd-flex',
        'justify-space-between',
        {
          'align-center': !!this.center
        },
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
      attrs: this.$attrs,
      on: {
        ...this.$listeners,
        click : this.onClick
      },
      directives: [
        {
          name: 'show',
          value: !!this.value
        },
        {
          name: 'ripple-component',
          value: !!this.ripple && (!!this.isPointer || !!this.$listeners.icon)
        }
      ]
    }, [
      !!this.$slots.icon && icon,
      !!this.$slots.left && !this.$slots.icon && left,
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