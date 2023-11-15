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

import { emitEvent } from '../common/event'

export const leftClick =
  ({ api, props, vm, state }) =>
  () => {
    if (state.leftLength >= 0) {
      return
    }

    state.leftLength = state.leftLength + (state.blockWidth + state.blockMargin) * props.wheelBlocks
    vm.$refs.insider.style.left = state.leftLength + 'px'

    api.changeState()
  }

export const rightClick =
  ({ api, props, vm, state }) =>
  () => {
    if (state.blockWrapper < Math.abs(state.leftLength) + state.wrapperWidth) {
      return
    }

    state.leftLength = state.leftLength - (state.blockWidth + state.blockMargin) * props.wheelBlocks
    vm.$refs.insider.style.left = state.leftLength + 'px'

    api.changeState()
  }

export const blockClick =
  ({ emit, state }) =>
  ({ item, index }) => {
    if (!emitEvent(emit, 'before-click')) {
      return
    }

    state.currentIndex = index

    emit('click', item, index)
  }

export const changeState =
  ({ state }) =>
  () => {
    const contentWidth = state.blockWrapper

    state.showLeft = !(parseInt(state.leftLength, 10) >= 0)
    state.showRight = contentWidth <= Math.abs(state.leftLength) + state.wrapperWidth
  }

export const mouseEvent =
  ({ api, state }) =>
  (e) => {
    if (e.wheelDelta >= 0) {
      if (state.leftLength < 0) {
        api.leftClick()
      }
    } else {
      if (state.blockWrapper > Math.abs(state.leftLength) + state.wrapperWidth) {
        api.rightClick()
      }
    }
  }

export const changeSize =
  ({ props, state, vm }) =>
  () => {
    state.wrapperWidth = vm.$refs.wrapper.offsetWidth
    state.blockWidth = parseInt(((1 - (props.initBlocks - 1) * 0.02) / props.initBlocks) * state.wrapperWidth, 10)
    state.blockMargin = parseInt(state.wrapperWidth * 0.02, 10)
    state.blockWrapper = props.modelValue.length * state.blockWidth + (props.modelValue.length - 1) * state.blockMargin
  }

export const swipeleft =
  ({ api, state }) =>
  () => {
    if (state.blockWrapper > Math.abs(state.leftLength) + state.wrapperWidth) {
      api.rightClick()
    }
  }

export const swiperight =
  ({ api, state }) =>
  () => {
    if (state.leftLength < 0) {
      api.leftClick()
    }
  }
