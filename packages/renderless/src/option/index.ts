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

export const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

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

      return (
        arr &&
        arr.some((item) => {
          return getObj(item, valueKey) === getObj(target, valueKey)
        })
      )
    }
  }

export const handleGroupDisabled =
  ({ state, vm }) =>
  (val) => {
    state.groupDisabled = val
    vm.groupDisabled = val
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
  ({ select, props, state }) =>
  (query) => {
    const oldVisible = state.visible
    // tiny 新增： 优化判断query是否匹配。 使用正则性能差！
    const newVisible = state.currentLabel.toLowerCase().includes(query.toLowerCase()) || !!props.created

    if (oldVisible !== newVisible) {
      state.visible = newVisible
      select.state.filteredOptionsCount += newVisible ? 1 : -1
    }
  }

export const toggleEvent = ({ props, vm, type }) => {
  const optionEl = vm.$refs.option

  for (let ev in props.events) {
    optionEl[type + 'EventListener'](ev, props.events[ev])
  }
}

export const initValue =
  ({ select, props, constants, vm }) =>
  () => {
    if (select.multiple && props.required) {
      select.state.selectEmitter.emit(constants.EVENT_NAME.initValue, vm)
    }
  }
