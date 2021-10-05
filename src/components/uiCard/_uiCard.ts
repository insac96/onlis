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
    //Image
    const defaultImage = this.renderSlot('img', null, true)
    const avatarImage = this.renderSlot('img', 'avatar')

    //Title
    const defaultTitle = this.renderSlot('title')
    const centerTitle = this.renderSlot('title', 'center')
    const rightTitle = this.renderSlot('title', 'right')

    //SubTitle
    const defaultSubtitle = this.renderSlot('subtitle')
    const centerSubtitle = this.renderSlot('subtitle', 'center')
    const rightSubtitle = this.renderSlot('subtitle', 'right')

    //Body
    const body = h('div', {
      staticClass: 'ui-card__body'
    }, [
      this.$slots.default
    ])

    //Footer
    const defaultFooter = this.renderSlot('footer')
    const centerFooter = this.renderSlot('footer', 'center')
    const rightFooter = this.renderSlot('footer', 'right')

    return h('div', {
      staticClass: 'ui-card',
      class: [
        'ui-component',
        'ui-component--flex',
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
      //Loading
      !!this.isLoading && h(uiLoading, {
        props: {
          large: true
        }
      }),
      //Img
      !!this.$slots.img && !this.$slots[`img-avatar`] && defaultImage,
      !this.$slots.img && !!this.$slots[`img-avatar`] && avatarImage,
      //Title
      !!this.$slots.title && !this.$slots[`title-center`] && !this.$slots[`title-right`] && defaultTitle,
      !this.$slots.title && !!this.$slots[`title-center`] && !this.$slots[`title-right`] && centerTitle,
      !this.$slots.title && !this.$slots[`title-center`] && !!this.$slots[`title-right`] && rightTitle,
      //SubTitle
      !!this.$slots.subtitle && !this.$slots[`subtitle-center`] && !this.$slots[`subtitle-right`] && defaultSubtitle,
      !this.$slots.subtitle && !!this.$slots[`subtitle-center`] && !this.$slots[`subtitle-right`] && centerSubtitle,
      !this.$slots.subtitle && !this.$slots[`subtitle-center`] && !!this.$slots[`subtitle-right`] && rightSubtitle,
      //Body
      !!this.$slots.default && body,
      //Footer
      !!this.$slots.footer && !this.$slots[`footer-center`] && !this.$slots[`footer-right`] && defaultFooter,
      !this.$slots.footer && !!this.$slots[`footer-center`] && !this.$slots[`footer-right`] && centerFooter,
      !this.$slots.footer && !this.$slots[`footer-center`] && !!this.$slots[`footer-right`] && rightFooter,
    ]) 
  }
}