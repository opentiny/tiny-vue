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

export const mounted =
  ({ selectEmitter, constants, state, selectVm, updatePopper, destroyPopper, parent }) =>
  () => {
    selectEmitter.on(constants.EVENT_NAME.updatePopper, (keepZIndex) => {
      let hideDrop = false

      if (!state.referenceElm || state.referenceElm.nodeType !== 1) {
        // 触发源如果是用户传递的插槽，则赋值为外侧div
        state.referenceElm = selectVm.$refs.reference ? selectVm.$refs.reference.$el : selectVm.$refs.select // Tiny新逻辑，同步时需谨慎对比逻辑
        selectVm.popperElm = selectVm.state.popperElm = state.popperElm = parent.$el
      }

      if (parent.select.state.visible && !hideDrop) {
        updatePopper(keepZIndex)
        hideDrop = true
      }
    })

    selectEmitter.on(constants.EVENT_NAME.destroyPopper, destroyPopper)
  }

export const closeModal =
  ({ selectVm, state, props }) =>
  ($event, isMask) => {
    if (!props.closeByMask && isMask) return

    selectVm.multiple && selectVm.updateModelValue(state.originValue)
    selectVm.state.visible = false
    selectVm.state.softFocus = false
  }

export const handleQueryChange =
  ({ selectVm }) =>
  (value) => {
    selectVm.handleQueryChange(value)
  }

export const toggleSelectedBox =
  ({ state }) =>
  (show) => {
    if (show) {
      state.selectedArr = state.selected.slice(0)
      state.deletedArr = []
    }
    state.showSelectedBox = show
  }

export const deleteSelected =
  ({ state }) =>
  (option, clear) => {
    if (clear) {
      state.deletedArr = state.selectedArr.slice(0)
      state.selectedArr = []
    } else {
      state.selectedArr = state.selectedArr.filter((item) => item[state.valueField] !== option[state.valueField])
      state.deletedArr.push(option)
    }
  }

export const selectedBoxConfirm =
  ({ state, selectVm }) =>
  () => {
    if (state.deletedArr.length) {
      if (state.deletedArr.length === state.selected.length) {
        selectVm.updateModelValue([])
      } else {
        selectVm.updateModelValue(state.selectedArr.map((item) => item[state.valueField]))
      }
    }
    state.showSelectedBox = false
  }

export const selectDropdownConfirm =
  ({ selectVm }) =>
  () => {
    selectVm.multiple && selectVm.updateModelValue(selectVm.state.modelValue, true)

    selectVm.state.visible = false
    selectVm.state.softFocus = false

    selectVm.$emit('confirm', selectVm.state.modelValue)
    selectVm.emitChange(selectVm.state.modelValue, true)
  }

export const cancelSearch =
  ({ api, state }) =>
  () => {
    state.query = ''
    api.debouncedQueryChange('')
  }

export const handleClear =
  ({ selectVm }) =>
  () => {
    selectVm.deleteSelected()
  }
