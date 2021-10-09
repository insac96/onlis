import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { uiComponentColor } from '../../../mixins/component'
import { uiLoading } from '../../../mixins/public'

@Component
export default class uiListItem extends uiComponentColor {

  @Prop({ type: [ String, Object, Number ]}) value!: any

  @Prop({ type: String }) label!: string

  @Prop({ type: String, default: 'transparent' }) fashion!: string

  @Prop({ type: String, default: 'full' }) fashionActive!: string

  @Prop({ type: Boolean, default: true }) center! : boolean

  @Prop({ type: String, default: null }) color! : string

  @Prop({ type: Boolean }) hidden!: boolean

  // Color
  get newClassColor () {
    if(!this.parentList) return this.classColor
    
    else return !!this.isColor ? this.classColor : this.parentList.classColor
  }

  get newStyleColor () {
    if(!this.parentList) return this.styleColor
    
    else return !!this.isColor ? this.styleColor : this.parentList.styleColor
  }

  // Get Parent
  get parentList () {
    const parent = this.$parent as any
    if(!parent) return null

    if(parent.componentName === 'list'){
      return parent
    }
    else if (parent.componentName === 'list-group'){
      return !!(parent.parentList) ? (parent.parentList) : null
    }
    else return null
  }

  // Is Active
  get isActive () {
    if(!this.parentList) return false

    if(!!this.active) return true
    else if(!!this.parentList.value) return this.parentList.value === this.value
    else return false
  }

  // Is Hidden
  get isHidden () {
    return !!this.hidden
  }

  // On Click
  onClick (event : any) {
    if(!this.isPointer) return
    this.startRipple(event, this.$el as HTMLElement)
    this.onLink()
    this.$emit('click', event)
  }
  
  public render(h: any): VNode {
    const left = h('div', {
      staticClass: 'ui-list-item__left',
      class: [
        'mr-2',
        'line-normal',
        'transition',
        'user-none'
      ]
    }, [
      this.$slots.left
    ])

    const title = h('div', {
      staticClass: 'ui-list-item__title',
      class: [
        'font-weight-700',
        'line-normal',
        'transition',
        'user-none'
      ]
    }, [
      this.$slots.title
    ])

    const body = h('div', {
      staticClass: 'ui-list-item__body',
      class: [
        'font-size-s',
        'user-none'
      ]
    }, [
      !!this.$slots.default ? this.$slots.default : this.label
    ])

    const center = h('div', {
      class: [
        'grow-1',
        'full-width',
        'd-flex',
        'flex-column'
      ]
    }, [
      this.$slots.title && title,
      body
    ])

    const right = h('div', {
      staticClass: 'ui-list-item__right',
      class: [
        'ml-2',
        'line-normal',
        'transition',
        'user-none'
      ]
    }, [
      this.$slots.right
    ])

    return h('div', {
      staticClass: 'ui-list-item',
      class: [
        'ui-component',
        'd-flex',
        'justify-space-between',
        {
          'align-center': !!this.center,
          'ui-list-item--hidden': !!this.isHidden
        },
        this.classStatus,
        this.classFashion,
        this.newClassColor
      ],
      style: [
        this.newStyleColor
      ],
      attrs: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners,

        click: this.onClick
      }
    }, [
      !!this.isLoading && h(uiLoading),
      !!this.$slots.left && left,
      center,
      !!this.$slots.right && right,
    ]) 
  }
}