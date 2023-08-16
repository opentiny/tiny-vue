/**
 * MIT License
 *
 * Copyright (c) 2019 Xu Liangzhan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
import { objectMap } from '@opentiny/vue-renderless/grid/static/'
import { addClass, removeClass } from '@opentiny/vue-renderless/common/deps/dom'
import { emitEvent, getEventTargetNode, getListeners } from '@opentiny/vue-renderless/grid/utils'
import GlobalConfig from '../../config'
import { h, $prefix } from '@opentiny/vue-common'

function renderNoSlotDropdowns({ $slots, _vm, buttonBase, loading, tableListeners }) {
  let loadingVNode = []

  if (loading) {
    loadingVNode = [
      h('i', {
        class: ['tiny-grid-button__loading-icon', GlobalConfig.icon.btnLoading]
      })
    ]
  }

  return h(
    'button',
    {
      ...buttonBase,
      on: objectMap(tableListeners, (cb, type) => (event) => _vm.$emit(type, event))
    },
    loadingVNode.concat($slots.default.call(_vm))
  )
}

function renderHasSlotDropdowns({ $slots, _vm, buttonBase, tableListeners, vSize }) {
  return h(
    'div',
    {
      class: ['tiny-grid-button__dropdown', { [`size__${vSize}`]: vSize }]
    },
    [
      h(
        'button',
        {
          ...buttonBase,
          on: {
            mouseenter: _vm.mouseenterEvent,
            mouseleave: _vm.mouseleaveEvent,
            ...objectMap(tableListeners, (cb, type) => (event) => _vm.$emit(type, event))
          }
        },
        [
          h('span', $slots.default.call(_vm)),
          h('i', {
            class: `tiny-grid-button__dropdown-arrow ${GlobalConfig.icon.dropdownBottom}`
          })
        ]
      ),
      h(
        'div',
        {
          class: 'tiny-grid-button__dropdown-wrapper',
          on: {
            click: _vm.clickDropdownEvent,
            mouseenter: _vm.mouseenterEvent,
            mouseleave: _vm.mouseleaveEvent
          }
        },
        $slots.dropdowns.call(_vm)
      )
    ]
  )
}

function getButtonBase({ disabled, isText, loading, name, type, vSize }) {
  const map = {
    isDisabled: 'is__disabled',
    isLoading: 'is__loading'
  }
  return {
    class: [
      'tiny-grid-button',
      `type__${isText ? type : 'button'}`,
      {
        [`size__${vSize}`]: vSize,
        [`theme__${type}`]: type && !isText,
        [map.isDisabled]: disabled || loading,
        [map.isLoading]: loading
      }
    ],
    attrs: {
      name,
      type: 'button',
      disabled: disabled || loading
    }
  }
}

export default {
  name: `${$prefix}GridButton`,
  inheritAttrs: false,
  props: {
    type: String,
    size: String,
    name: [String, Number],
    disabled: Boolean,
    loading: Boolean
  },
  computed: {
    vSize() {
      return this.size || this.$parent.size || this.$parent.vSize
    }
  },
  render() {
    let { disabled, loading, name, slots: $slots, tableListeners, type, vSize } = this
    let isText = type === 'text'
    let buttonBase = getButtonBase({
      disabled,
      isText,
      loading,
      name,
      type,
      vSize
    })

    return $slots.dropdowns
      ? renderHasSlotDropdowns({
          $slots,
          _vm: this,
          buttonBase,
          tableListeners,
          vSize
        })
      : renderNoSlotDropdowns({
          $slots,
          _vm: this,
          buttonBase,
          loading,
          tableListeners
        })
  },
  methods: {
    clickDropdownEvent(event) {
      let dropdownElem = event.currentTarget
      let wrapperElem = dropdownElem.parentNode
      let { flag, targetElem } = getEventTargetNode(event, dropdownElem, 'tiny-grid-button')

      if (flag) {
        wrapperElem.dataset.active = 'N'
        removeClass(wrapperElem, 'is__active')
        emitEvent(this, 'dropdown-click', [{ name: targetElem.getAttribute('name') }, event])
      }
    },
    mouseenterEvent(event) {
      let dropdownElem = event.currentTarget
      let wrapperElem = dropdownElem.parentNode

      wrapperElem.dataset.active = 'Y'
      addClass(wrapperElem, 'is__active')
    },
    mouseleaveEvent(event) {
      let dropdownElem = event.currentTarget
      let wrapperElem = dropdownElem.parentNode

      wrapperElem.dataset.active = 'N'
      setTimeout(() => {
        if (wrapperElem.dataset.active !== 'Y') {
          removeClass(wrapperElem, 'is__active')
        }
      }, 300)
    }
  },
  setup(props, { slots, attrs, listeners }) {
    const tableListeners = getListeners(attrs, listeners)

    return { slots, tableListeners }
  }
}
