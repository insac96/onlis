import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { uiComponentColor } from '../../mixins/component'
import { uiLoading } from '../../mixins/public'
import { returnPX } from '../../util'

@Component
export default class uiCard extends uiComponentColor {

  @Prop({ default: null }) width! : any

  onClick (event : any) {
    if(!this.isPointer) return
    this.startRipple(event, this.$el as HTMLElement)
    this.onLink()
    this.$emit('click', event)
  }

  renderSlot(name: string, type?: string | null, classDefault: boolean = false) {
    const slot = !!type ? this.$slots[`${name}-${type}`] : this.$slots[`${name}`]
    if(!slot) return null

    return this.$createElement('div', {
      staticClass: `ui-card__${name}`,
      class: [
        !!classDefault ? `ui-card__${name}--default` : null,
        !!type ? `ui-card__${name}--${type}` : null
      ]
    }, [
      slot
    ])
  }

  public render(h: any): VNode {
    // Loading
    const loading = h(uiLoading, {
      props: {
        large: true
      }
    })

    // Img
    const img = h('div', {
      staticClass: 'ui-card__img',
      class: [
        'd-flex',
        'align-center',
        'justify-center'
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
        'user-none',
        'transition'
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
        'pa-2',
        'overflow',
        'transition'
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
      }
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