import { VNode } from 'vue'
import { ISelectOption } from '../../../../types'
import { Model, Component, Prop, Watch } from 'vue-property-decorator'
import { uiComponentColor } from '../../../mixins/component'
import { uiLoading, uiIconClose } from '../../../mixins/public'
import uiClickOutside from '../../../directives/clickOutside'
import uiList from '../../uiList/base/_uiList'
import { getColor, returnPX, insertBody, toLowerCase, is_Undefined } from '../../../util'

@Component({
  directives: {
    'uiClickOutside': uiClickOutside
  }
})
export default class uiSelect extends uiComponentColor {
  componentName: string = 'select'

  @Model('model') readonly value!: any

  // Prop Input
  @Prop() width! : any

  @Prop({ type: String, default: 'l' }) size! : string

  @Prop({ type: String, default: 'text' }) type! : string

  @Prop({ type: String }) placeholder! : string

  @Prop({ type: String }) messageColor! : string

  @Prop({ type: String }) messageRightColor! : string

  @Prop({ type: Boolean }) remove! : boolean

  // Prop Select
  @Prop({ type: Boolean }) filter! : boolean

  @Prop({ type: String, default: 'Search option...' }) placeholderFilter! : string

  @Prop({ type: String, default: 'No data available' }) noDataText! : string

  // Prop Menu
  @Prop({ type: Boolean }) fixed! : boolean

  @Prop({ type: Number, default: 3 }) offset! : any

  @Prop({ type: Boolean }) top! : boolean

  @Prop({ default: null }) maxHeight! : any

  // Data
  textFilter : string = ''

  countFilter: number | null = null

  isShowOptions: boolean = false

  options : ISelectOption[] = []

  // Is Multiple
  get isMultiple () {
    return !!Array.isArray(this.value)
  }

  // Get Label Input
  get labelInput () {
    if(!this.value) return this.placeholder
    if(!!this.isMultiple) return null

    const option : ISelectOption = this.getOptionByValue(this.value)
    return !!option ? option.label : this.placeholder
  }

  // Render list Label if is Multiple
  get renderChips () {
    if(!this.isMultiple) return null
    if(this.value.length < 1) return this.placeholder
    
    else return this.value.map((val : ISelectOption['value'], index : number) => {
      const option : ISelectOption = this.getOptionByValue(val)

      if(!!option){
        return this.$createElement('div', {
          staticClass: 'ui-input__chip',
          class: [
            'd-flex',
            'align-center',
            'justify-center',
            'px-2',
            'ra',
            'line-normal',
            'user-none'
          ]
        }, [
          option.label,
          !!this.remove && this.$createElement(uiIconClose, {
            class: [
              'ml-1',
              `select-chip-${this._uid}`
            ],
            on: {
              click: this.onChipRemove.bind(this, index)
            }
          })
        ])
      }
    })
  }

  // Insert Options
  insertOptions () {
    const options = (this.$refs.options as any).$el as HTMLElement

    insertBody(options)
    this.setPos()
  }

  // Remove Options
  removeOptions () {
    let options = this.$refs.options as HTMLElement

    if(!!this.isShowOptions) {
      this.hideOptions()
    }

    if (options && options.parentNode) {
      options.parentNode.removeChild(options)
    }
  }

  // Set Pos
  setPos () {
    const target = this.$el as HTMLElement
    const options = (this.$refs.options as any).$el as HTMLElement

    // Reset Pos
    options.style.top = ''
    options.style.left = ''

    // Client
    const clientWidth = window.innerWidth || document.documentElement.clientWidth
    const clientScrollTop = !!this.fixed ? 0 : document.documentElement.scrollTop
    const clientScrollLeft = !!this.fixed ? 0 : document.documentElement.scrollLeft

    // Target Pos
    const targetPos = target.getBoundingClientRect()
    const target_left = targetPos.left
    const target_top = targetPos.top
    const target_width = targetPos.width
    const target_height = targetPos.height

    // Set Max-Width
    options.style.maxWidth = returnPX(target_width)

    // Options Pos
    const optionsPos = options.getBoundingClientRect()
    const options_height = optionsPos.height

    // New Options Pos
    let NewPos : {
      top: number | string
      left: number | string
    } = {
      top: 'auto',
      left: 'auto'
    }

    // Set Top
    if(!this.top){
      NewPos.top = (target_top + clientScrollTop) + target_height + this.offset
    }
    else {
      NewPos.top = (target_top + clientScrollTop) - options_height - this.offset
    }

    // Set Left
    NewPos.left = target_left + clientScrollLeft

    // Init

    options.style.top = returnPX(NewPos.top)
    options.style.left = returnPX(NewPos.left)
  }

  // Show Options
  showOptions () {
    if(!!this.isShowOptions) return
    
    this.isShowOptions = true

    this.$nextTick(() => {   
      this.insertOptions()
      window.addEventListener('resize', this.setPos, { passive: true })
    })
  }

  // Hide Options
  hideOptions () {
    this.isShowOptions = false

    if(!!this.filter){
      this.textFilter = ''
      this.countFilter = null
    }

    window.removeEventListener('resize', this.setPos)
  }

  // Click OutSide
  clickOutSide (event : any) {
    if(!this.isShowOptions) return
    if(!!event.target.closest(`#select-${this._uid}`)) return
    this.hideOptions()
  }

  // Get Option By ID
  getOptionByID (id: ISelectOption['id']) {
    return this.options.find(option => option.id === id)
  }

  // Get Option By ID
  getOptionByValue (value: ISelectOption['value']) {
    return this.options.find(option => option.value === value)
  }

  // On Option Click
  onOptionSelect (id : number | string) {
    if(!!is_Undefined(this.value)) return

    const option : ISelectOption = this.getOptionByID(id)
    if(!option) return

    if(!!this.isMultiple){
      let array : any[] = this.value
      let isValueInModel : boolean
      let indexValue : number = 0

      // Check Value
      if(typeof option.value === 'object'){
        isValueInModel = JSON.stringify(array).indexOf(JSON.stringify(option.value)) !== -1
      } 
      else {
        isValueInModel = array.indexOf(option.value) !== -1
      }

      // Set Index Value
      array.forEach((item : any, index : number) => {
        if(JSON.stringify(item) === JSON.stringify(option.value)) {
          indexValue = index
        }
      })

      // Update Model
      if (isValueInModel) {
        this.$delete(array, indexValue)
      } else {
        this.$set(array, array.length, option.value)
      }

      // Update Pos
      this.$nextTick(() => this.setPos())
    }
    else {
      if(option.value !== this.value){
        this.$emit('model', option.value)
      }
      else {
        this.$emit('model', null)
      }

      this.hideOptions()
    }

    this.$emit('change', this.value)
  }

  // Chip Remove Click
  onChipRemove (index: number) {
    this.$delete(this.value, index)

    if(!!this.isShowOptions){
      this.$nextTick(() => this.setPos())
    }
  }

  // On Click
  onClick (event : any) {
    if(!!event.target.closest(`.select-chip-${this._uid}`)) return

    this.startRipple(event, this.$el as HTMLElement)

    if(!this.isShowOptions){
      this.showOptions()
    }
    else {
      this.hideOptions()
    }
    
    this.$emit('click', event)
  }

  // On Remove
  onRemove () {
    this.$emit('model', null)
    this.$emit('change', this.value)
    this.$emit('remove')
  }

  // On Filter
  @Watch('textFilter')
  onTextFilter(val: string) {
    if(!this.filter) return

    if (val) {
      const listFilter = this.options.filter((option : ISelectOption) => {
        const labelLowerCase = toLowerCase(option.label)
        const valLowerCase = toLowerCase(val)

        return labelLowerCase.indexOf(valLowerCase.toLowerCase()) !== -1
      })

      this.countFilter = listFilter.length
    }
    else {
      this.countFilter = null
    }
  }

  // Watch Position
  @Watch('fixed')
  @Watch('offset')
  @Watch('top')
  @Watch('maxHeight')
  onPositionChange () {
    if(!this.isShowOptions) return

    this.setPos()
  }

  // Before Destroy
  beforeDestroy () {
    this.removeOptions()
  }

  public render(h: any): VNode {
    /////////////// Options ////////////////
    // Input Filter
    const inputFilter = h('input', {
      staticClass: 'ui-options__input',
      class: [
        'full-width',
        'pa-2',
        'font-size-s'
      ],
      domProps: {
        value: this.textFilter,
        autocomplete: 'off'
      },
      attrs: {
        type: 'text',
        placeholder: this.placeholderFilter,
      },
      on: {
        input: (event : any) => {
          this.textFilter = event.target.value
        }
      }
    })

    const noData = h('div', {
      staticClass: 'ui-options__noData',
      class: {
        'pa-2': !this.$slots['no-data'],
        'font-size-s': !this.$slots['no-data'],
        'text-center': !this.$slots['no-data']
      }
    }, [
      this.$slots['no-data'] ? this.$slots['no-data'] : this.noDataText
    ])

    const options = h(uiList, {
      staticClass: 'ui-options',
      ref: 'options',
      class: [
        'full-width',
        {
          'position-absolute': !this.fixed,
          'position-fixed': !!this.fixed
        }
      ],
      props: {
        maxHeight: this.maxHeight,
        color: this.color
      },
      directives: [
        {
          name: 'show',
          value: this.isShowOptions
        },
        {
          name: 'ui-click-outside',
          value: this.clickOutSide
        }
      ]
    }, [
      !!this.filter && inputFilter,
      this.countFilter === 0 && noData,
      this.$slots.options
    ])

    const optionsTransition = h('transition', {
      props: {
        name: 'ui-menu'
      }
    }, [
      options
    ])

    /////////////// Input //////////////////
    // Icon Remove
    const iconRemove = h(uiIconClose, {
      on: {
        click: this.onRemove.bind(this)
      }
    })

    // Icon Left
    const icon = h('div', {
      staticClass: 'ui-input__icon',
      class: [
        'position-relative',
        'd-flex',
        'align-center',
        'justify-center',
        'ra',
        'line-normal',
        'user-none',
        'transition',
        'overflow-hidden',
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

    // Center Select
    const center = h('div', {
      staticClass: 'ui-input__center',
      class: [
        [
          'grow-1',
          'full-width',
          'd-flex',
          'align-center',
          'flex-wrap',
          'cursor-pointer',
          'transition',
          'user-none'
        ],
        {
          'ui-input__center--focus': !!this.isShowOptions,
          'ui-input__center--noValue': !this.value || (!!this.isMultiple && this.value.length < 1)
        }
      ],
      domProps: {
        id: `select-${this._uid}`,
      },
      on: {
        ...this.$listeners,
        
        click: this.onClick
      }
    }, [
      !this.isMultiple ? this.labelInput : this.renderChips
    ])

    // Right
    const right = h('div', {
      staticClass: 'ui-input__right',
      class: [
        'position-relative',
        'd-flex',
        'align-center',
        'justify-center',
        'mx-1',
        'line-normal',
        'user-none'
      ]
    }, [
      !!this.isLoading ? h(uiLoading) : iconRemove
    ])
    
    // Transition Right
    const transitionRight =  h('transition', {
      props: {
        name: 'ui-zoom'
      }
    }, [
      (!!this.isLoading || (!!this.remove && !!this.value && !this.isMultiple)) && right
    ])

    // Message Left
    const message = h('transition', {
      props: {
        name: 'ui-zoom'
      }
    }, [
      !!this.$slots.message && h('div', {
        staticClass: 'ui-input__message--left',
        class: [
          'position-absolute',
          'font-size-xs',
          'font-weight-500',
          'user-none',
          'line-normal',
          'transition'
        ]
      }, [
        this.$slots.message
      ])
    ])

    // Message Right
    const messageRight = h('transition', {
      props: {
        name: 'ui-zoom'
      }
    }, [
      !!this.$slots['message-right'] && h('div', {
        staticClass: 'ui-input__message--right',
        class: [
          'position-absolute',
          'font-size-xs',
          'font-weight-500',
          'user-none',
          'line-normal',
          'transition'
        ]
      }, [
        this.$slots['message-right']
      ])
    ])

    // Input
    return h('div', {
      staticClass: 'ui-input',
      class: [
        'ui-component',
        {
          'd-flex': !this.inline,
          'd-inline-flex': !!this.inline,
        },
        [
          'align-center',
          'justify-space-between'
        ],
        {
          'ui-component--size--l': !this.size ,
          [`ui-component--size--${this.size}`]: !!this.size 
        },
        {
          'ui-input--focus': !!this.isShowOptions,
          'ui-input--error': !!this.danger || this.color === 'danger'
        },
        this.classStatus,
        this.classFashion,
        this.classColor
      ],
      style: [
        this.styleColor,
        {
          '--ui-input-width': returnPX(this.width),
          '--ui-input-message-color': getColor(this.messageColor),
          '--ui-input-message-right-color': getColor(this.messageRightColor)
        }
      ],
      attrs: {
        ...this.$attrs
      }
    }, [
      !!this.$slots.icon && icon,
      center,
      transitionRight,
      message,
      messageRight,
      optionsTransition
    ])
  }
}