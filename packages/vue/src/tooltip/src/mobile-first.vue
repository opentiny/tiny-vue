<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/tooltip/vue'
import {
  $prefix,
  setup,
  createComponent,
  parseVnode,
  h,
  mergeClass,
  defineComponent,
  $props,
  isEmptyVnode
} from '@opentiny/vue-common'
import { classes } from './token'

export default defineComponent({
  name: $prefix + 'Tooltip',
  componentName: 'Tooltip',
  props: {
    ...$props,
    adjustArrow: {
      type: Boolean,
      default: () => false
    },
    appendToBody: {
      type: Boolean,
      default: () => true
    },
    arrowOffset: {
      type: Number,
      default: () => 0
    },
    boundariesPadding: {
      type: Number,
      default: () => 5
    },
    closeDelay: {
      type: Number,
      default: () => 100
    },
    content: { type: String },
    disabled: { type: Boolean },
    effect: {
      type: String,
      default: () => ''
    },
    enterable: {
      type: Boolean,
      default: () => true
    },
    hideAfter: {
      type: Number,
      default: () => 0
    },
    manual: { type: Boolean },
    modelValue: { type: Boolean },
    offset: {
      default: () => 0
    },
    openDelay: {
      type: Number,
      default: () => 0
    },
    placement: {
      type: String,
      default: () => 'bottom'
    },
    popper: {},
    popperClass: { type: String },
    popperOptions: {
      default: () => ({ gpuAcceleration: false, boundariesPadding: 10 })
    },
    pre: { type: Boolean },
    reference: {},
    renderContent: { type: Function },
    tabindex: {
      type: Number,
      default: () => 0
    },
    transformOrigin: {
      type: [Boolean, String],
      default: () => true
    },
    type: {
      type: String,
      validator: (value) => ~['normal', 'warning', 'error', 'info', 'success'].indexOf(value)
    },
    visibleArrow: {
      type: Boolean,
      default: () => true
    },
    genArrowByHtml: {
      type: Boolean,
      default: () => true
    },
    zIndex: {
      type: String,
      default: () => 'next'
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  },
  render() {
    const getContent = (vm) => {
      let slotContent = vm.slots.content && vm.slots.content()

      if (slotContent) {
        return slotContent
      }

      let attrContent

      if (vm.renderContent) {
        attrContent = vm.renderContent(h, vm.content)
      } else if (vm.pre) {
        attrContent = vm.content ? h('pre', { class: 'whitespace-pre-wrap' }, vm.content) : null
      } else {
        attrContent = vm.content
      }

      return attrContent
    }

    if (!Object.hasOwnProperty.call(this, 'popperVM')) {
      let popperVM = createComponent({
        el: document.createElement('div'),
        component: {
          render: () => {
            let content = getContent(this)
            let propsData = { on: { 'after-leave': this.doDestroy } }
            let mouseenter = () => this.setExpectedState(true)
            let mouseleave = () => {
              this.setExpectedState(false)
              this.debounceClose()
            }

            const xPlacement = this.state.xPlacement || ''
            return h('transition', propsData, [
              <div
                data-tag="tiny-tooltip"
                ref="popper"
                id={this.state.tooltipId}
                v-show={!this.disabled && this.state.showPopper && content}
                appendToBody={this.appendToBody}
                class={mergeClass([
                  classes.tooltip,
                  this.effect === 'dark' ? 'bg-color-text-primary text-color-text-inverse shadow-none' : '',
                  this.effect === 'light' ? 'bg-color-bg-1 text-color-text-primary shadow-md' : '',
                  this.disabled || !this.state.showPopper ? 'hidden' : '',
                  this.popperClass
                ])}
                role="tooltip"
                aria-hidden={this.disabled || !this.state.showPopper ? 'true' : 'false'}
                onMouseenter={() => mouseenter()}
                onMouseleave={() => mouseleave()}>
                {content}
                {this.visibleArrow ? (
                  <div
                    x-arrow
                    class={mergeClass([
                      classes.arrow,
                      classes['placement-' + xPlacement.split('-')[0]],
                      this.effect === 'light' ? classes['placement-' + xPlacement.split('-')[0] + '-light'] : '',
                      this.effect === 'dark' ? classes['placement-' + xPlacement.split('-')[0] + '-dark'] : ''
                    ])}></div>
                ) : (
                  ''
                )}
              </div>
            ])
          }
        }
      })

      this.d({ popperVM: { get: () => popperVM, set: (v) => (popperVM = v) } })
    }

    const stringifyBindClass = (bindClass, removeClassRE) => {
      const trimStr = (str) => (str ? str.trim() : str)

      const stringifyClassArr = (classArr) => {
        const arr = []

        classArr.forEach((item) => {
          if (item && typeof item === 'string') {
            arr.push(trimStr(item))
          } else if (item && typeof item === 'object') {
            arr.push(stringifyClassObj(item))
          }
        })

        return arr.join(' ')
      }

      const stringifyClassObj = (classObj) => {
        const arr = []

        Object.keys(classObj).forEach((key) => {
          if (classObj[key]) {
            arr.push(key)
          }
        })

        return arr.join(' ')
      }

      let className = ''

      if (bindClass) {
        if (typeof bindClass === 'string') {
          className = className + trimStr(bindClass)
        } else if (Array.isArray(bindClass)) {
          className = className + stringifyClassArr(bindClass)
        } else if (typeof bindClass === 'object') {
          className = className + stringifyClassObj(bindClass)
        }
      }

      return trimStr(className.replace(removeClassRE, ''))
    }

    const addTooltipClass = (bindClass) => {
      let className = stringifyBindClass(bindClass, /\btiny-tooltip\b/g)
      return 'tiny-tooltip ' + className
    }

    const getFirstElement = () => {
      const slots = this.slots.default && this.slots.default()

      if (!Array.isArray(slots)) return null

      let element = null

      for (let index = 0; index < slots.length; index++) {
        const vnode = parseVnode(slots[index])

        if (!isEmptyVnode(vnode)) {
          element = vnode
          break
        }
      }

      return element
    }

    const firstElement = getFirstElement()

    if (!firstElement) return null
    const data = firstElement.data || firstElement.props || (firstElement.props = {})

    data.class = addTooltipClass(data.class)

    return firstElement
  }
})
</script>
