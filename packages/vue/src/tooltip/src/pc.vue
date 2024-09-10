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
import {
  $prefix,
  setup,
  createComponent,
  parseVnode,
  h,
  defineComponent,
  $props,
  isEmptyVnode,
  hooks,
  stringifyCssClass,
  deduplicateCssClass
} from '@opentiny/vue-common'
import type { ITinyVm } from '@opentiny/vue-renderless/types/shared.type'
import '@opentiny/vue-theme/tooltip/index.less'
import type { ITooltipApi } from '@opentiny/vue-renderless/types/tooltip.type'

export default defineComponent({
  name: $prefix + 'Tooltip',
  componentName: 'Tooltip',
  props: {
    ...$props,
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
    content: { type: [String, Object] },
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
    },
    contentMaxHeight: {
      type: String
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ITooltipApi
  },
  render() {
    const getContent = (vm: ITinyVm<never>) => {
      let slotContent = vm.slots.content && vm.slots.content()

      if (slotContent && (!hooks.Comment || slotContent[0].type !== hooks.Comment)) {
        return slotContent
      }

      let attrContent: any

      if (vm.renderContent) {
        attrContent = vm.renderContent(h, vm.content)
      } else if (vm.pre) {
        attrContent = vm.content ? h('pre', vm.content) : null
      } else {
        attrContent = vm.content
      }

      return attrContent
    }
    if (!Object.prototype.hasOwnProperty.call(this, 'popperVM')) {
      // tiny 新增： 如果在当前位置立即创建popperVm，会有加载问题，必须在访问 popperVM 时，再创建。
      const _cacheVm = { value: null }
      this.d({
        popperVM: {
          get: () => {
            if (!_cacheVm.value) {
              _cacheVm.value = createComponent({
                el: document.createElement('div'),
                propsData: null,
                component: {
                  render: () => {
                    const content = getContent(this)

                    // 当内容为纯文本时，添加一层wrapper，其他情况（插槽、renderContent）原样输出
                    const addWrapper = typeof parseVnode(content) === 'string'
                    const propsData = {
                      attrs: { name: this.transition },
                      on: { 'after-leave': this.doDestroy }
                    }
                    const typeClass = 'is-' + (this.type || this.effect || 'dark')
                    const mouseenter = () => this.setExpectedState(true)
                    const mouseleave = () => {
                      this.setExpectedState(false)
                      this.debounceClose()
                    }

                    // 直接 updatePopper 会造成scroll事件的绑定，即使tooltip不显示，也在滚动时带来性能影响
                    this.$nextTick(() => {
                      // 取 v-show的条件， v-show时，要更新一下位置
                      if (!this.disabled && this.state.showPopper && content) {
                        this.updatePopper()
                      }
                    })

                    return h('transition', propsData, [
                      <div
                        ref="popper"
                        id={this.state.tooltipId}
                        v-show={!this.disabled && this.state.showPopper && content}
                        class={[
                          'tiny-tooltip',
                          'tiny-tooltip__popper',
                          typeClass,
                          this.popperClass,
                          { 'tiny-tooltip__show-tips': this.state.showContent }
                        ]}
                        style={`max-width:${this.state.tipsMaxWidth}px`}
                        role="tooltip"
                        aria-hidden={this.disabled || !this.state.showPopper ? 'true' : 'false'}
                        onMouseenter={() => mouseenter()}
                        onMouseleave={() => mouseleave()}
                      >
                        {addWrapper ? (
                          <div class="tiny-tooltip__content-wrapper" style={`max-height:${this.contentMaxHeight}`}>
                            {content}
                          </div>
                        ) : (
                          content
                        )}
                      </div>
                    ])
                  }
                }
              })
            }

            return _cacheVm.value
          },

          set: (val) => (_cacheVm.value = val)
        }
      })
    }

    // 查找默认的slots, 并把它渲染到组件所在位置上。
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

    data.class = deduplicateCssClass('tiny-tooltip ' + stringifyCssClass(data.class))

    return firstElement
  }
})
</script>
