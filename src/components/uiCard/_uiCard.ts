import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { uiLoading } from '../../mixins/public'
import { returnPX } from '../../util'

@Component
export default class uiCard extends uiComponentColor {

  @Prop({ default: null }) width! : any

  @Prop({ type: Boolean }) noPadding! : boolean
  

  public render(h: any): VNode {
    // Loading
    const loading = h(uiLoading, {
      props: {
        full: true
      }
    })

    // Img
    const img = h('div', {
      staticClass: 'ui-card__img',
      class: [
        'd-flex',
        'align-center',
        'justify-center',
        'overflow-hidden'
      ]
    }, [
      this.$slots.img
    ])

    // Title
    const title = h('div', {
      staticClass: 'ui-card__title',
      class: [
        'pt-2 px-2',
        'font-size-l',
        'font-weight-700',
        'line-normal',
        'user-none'
      ]
    }, [
      this.$slots.title
    ])

    // Subtitle
    const subtitle = h('div', {
      staticClass: 'ui-card__subtitle',
      class: [
        'px-2',
        'font-size-xs',
        'line-normal',
        'user-none',
        'transition'
      ]
    }, [
      this.$slots.subtitle
    ])

    //Body
    const body = h('div', {
      staticClass: 'ui-card__body',
      class: [
        'position-relative',
        'grow-1',
        'py-2',
        'transition',
        {
          'px-2': !this.noPadding
        }
      ]
    }, [
      this.$slots.default
    ])

    // Footer
    const footer = h('div', {
      staticClass: 'ui-card__footer',
      class: [
        'pb-2 px-2',
        'transition'
      ]
    }, [
      this.$slots.footer
    ])

    // Main
    return h('div', {
      staticClass: 'ui-card',
      class: [
        'ui-component',
        'd-flex',
        'flex-column',
        this.classStatus,
        this.classFashion,
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-card-width': returnPX(this.width)
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
          name: 'ripple-component',
          value: !!this.ripple && !!this.isPointer
        }
      ]
    }, [
      !!this.isLoading && loading,
      !!this.$slots.img && img,
      !!this.$slots.title && title,
      !!this.$slots.subtitle && subtitle,
      !!this.$slots.default && body,
      !!this.$slots.footer && footer
    ]) 
  }
}