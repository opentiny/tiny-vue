/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import { getObj } from '../common/object'
import { omitText } from '../common/string'

const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

export const isEqual =
  ({ select, state }) =>
  (a, b) => {
    if (!state.isObject) {
      return a === b
    } else {
      const valueKey = select.valueKey
      return getObj(a, valueKey) === getObj(b, valueKey)
    }
  }

export const contains =
  ({ select, state }) =>
  (arr = [], target = null) => {
    if (!state.isObject) {
      return arr && arr.includes(target)
    } else {
      const valueKey = select.valueKey

      return arr && arr.some((item) => getObj(item, valueKey) === getObj(target, valueKey))
    }
  }

export const handleGroupDisabled =
  ({ state, vm }) =>
  (val) => {
    state.groupDisabled = val
    vm.groupDisabled = val
  }

export const hoverItem =
  ({ select, props, state, vm }) =>
  (e) => {
    // 选项超出省略时新增title提示
    const dom = e.target
    const text = dom.textContent
    const font = window.getComputedStyle(dom).font
    const rect = dom.getBoundingClientRect()
    const res = omitText(text, font, rect.width)
    state.showTitle = res.o

    if (!props.disabled && !state.groupDisabled) {
      select.state.hoverIndex = select.state.options.indexOf(vm)
    }
  }

export const selectOptionClick =
  ({ props, state, select, constants, vm }) =>
  () => {
    if (props.disabled !== true && state.groupDisabled !== true) {
      if (select.multiple && props.required === true) return
      select.state.selectEmitter.emit(constants.EVENT_NAME.handleOptionClick, vm, true)
    }
  }

export const queryChange =
  ({ props, state }) =>
  (query) => {
    state.visible = new RegExp(escapeRegexpString(query), 'i').test(state.currentLabel) || !!props.created
  }

export const toggleEvent = ({ props, vm, type }) => {
  const optionEl = vm.$refs.option

  Object.keys(props.events).forEach((ev) => {
    optionEl[type + 'EventListener'](ev, props.events[ev])
  })
}

export const initValue =
  ({ select, props, constants, vm }) =>
  () => {
    if (select.multiple && props.required) {
      select.state.selectEmitter.emit(constants.EVENT_NAME.initValue, vm)
    }
  }
