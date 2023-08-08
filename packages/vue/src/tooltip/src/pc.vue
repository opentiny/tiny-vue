<!-- eslint-disable no-mixed-operators -->
<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/tooltip/vue'
import { $prefix, setup, createComponent, parseVnode, h, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/tooltip/index.less'

export default defineComponent({
  name: $prefix + 'Tooltip',
  componentName: 'Tooltip',
  props: {
    visible: {
      type: String,
      default: () => 'always',
      validator: (value: string) => ['always', 'auto'].includes(value)
    },
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
      default: () => 300
    },
    content: { type: String },
    disabled: { type: Boolean },
    effect: {
      type: String,
      default: () => 'dark'
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
    transition: {
      type: String,
      default: () => 'tiny-fade-in-linear'
    },
    type: {
      type: String,
      validator: (value: string) => Boolean(~['normal', 'warning', 'error', 'info', 'success'].indexOf(value))
    },
    visibleArrow: {
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
        attrContent = vm.content ? h('pre', vm.content) : null
      } else {
        attrContent = vm.content
      }

      return attrContent
    }

    Object.prototype.hasOwnProperty.call(this, 'popperVM') ||
      this.d({
        popperVM: {
          get: () =>
            // 使用适配器里的createComponent创建一个新的vue的vnode节点为一个新组件，挂载到el下面去
            createComponent({
              el: document.createElement('div'),
              propsData: null,
              component: {
                render: () => {
                  let content = getContent(this)
                  let propsData = {
                    attrs: { name: this.transition },
                    on: { 'after-leave': this.doDestroy }
                  }
                  let typeClass = 'is-' + (this.type || this.effect)
                  let mouseenter = () => this.setExpectedState(true)
                  let mouseleave = () => {
                    this.setExpectedState(false)
                    this.debounceClose()
                  }

                  this.$nextTick(() => {
                    if (!this.disabled && this.state.showPopper && content) {
                      this.updatePopper()
                    }
                  })

                  return h('transition', propsData, [
                    <div
                      ref="popper"
                      id={this.state.tooltipId}
                      v-show={!this.disabled && this.state.showPopper && content}
                      appendToBody={this.appendToBody}
                      class={['tiny-tooltip', 'tiny-tooltip__popper', typeClass, this.popperClass]}
                      role="tooltip"
                      aria-hidden={this.disabled || !this.state.showPopper ? 'true' : 'false'}
                      onMouseenter={() => mouseenter()}
                      onMouseleave={() => mouseleave()}>
                      {content}
                    </div>
                  ])
                }
              }
            })
        }
      })

    const stringifyClassObj = (classObj) =>
      Object.keys(classObj)
        .filter((key) => classObj[key])
        .join(' ')

    const stringifyClassArr = (classArr) =>
      classArr
        .filter((item) => item)
        .map((item) =>
          typeof item === 'string' ? item.trim() : typeof item === 'object' ? stringifyClassObj(item) : ''
        )
        .join(' ')

    const addTooltipClass = (bindClass) => {
      let className = ''

      if (bindClass) {
        if (typeof bindClass === 'string') {
          className = bindClass.trim()
        } else if (Array.isArray(bindClass)) {
          className = stringifyClassArr(bindClass)
        } else if (typeof bindClass === 'object') {
          className = stringifyClassObj(bindClass)
        }
      }

      return 'tiny-tooltip ' + className.replace(/\btiny-tooltip\b/g, '').trim()
    }

    // 查找默认的slots, 并把它渲染到组件所在位置上。
    const getFirstElement = () => {
      const slots = this.slots.default && this.slots.default()

      if (!Array.isArray(slots)) return null

      let element = null

      for (let index = 0; index < slots.length; index++) {
        const vnode = parseVnode(slots[index])

        if (vnode && vnode.type) {
          element = vnode
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
