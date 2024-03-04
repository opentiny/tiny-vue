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

import {
  px2percent,
  getComputedThresholdValue,
  getleftTopMin,
  getrightBottomMin,
  getAnotherOffset,
  handleMove,
  handleUp,
  handleMousedown,
  buttonMousedown,
  buttonLeftTopClick,
  buttonRightBottomClick,
  computeOffset
} from './index'
import { on, off } from '../common/deps/dom'

export const api = ['state', 'handleMousedown', 'buttonMousedown', 'buttonLeftTopClick', 'buttonRightBottomClick']

export const renderless = (props, hooks, { vm, nextTick, emit, constants }) => {
  const api = {}
  const { computed, reactive } = hooks
  const getUseOffset = useOffset({ nextTick, props, vm, constants, hooks })

  const state = reactive({
    lastClickOffset: 50,
    lastmodelValue: 0.5,
    oldOffset: 0,
    initOffset: 0,
    isMoving: false,
    prefix: constants.PREFIX,
    computedleftTopMin: computed(() => api.getComputedThresholdValue('leftTopMin')),
    computedrightBottomMin: computed(() => api.getComputedThresholdValue('rightBottomMin')),
    wrapperClasses: computed(() => [`${state.prefix}-wrapper`, state.isMoving ? 'no-select' : '']),
    paneClasses: computed(() => [
      `${state.prefix}-pane ${props.scrollable ? 'tiny-split-scroll' : ''}`,
      { [`${state.prefix}-pane-moving`]: state.isMoving }
    ]),
    ...getUseOffset.state
  })

  Object.assign(api, {
    state,
    getleftTopMin: getleftTopMin(state),
    getrightBottomMin: getrightBottomMin(state),
    ...getUseOffset.api,
    handleUp: handleUp({ api, emit, off, state }),
    getAnotherOffset: getAnotherOffset({ vm, state }),
    handleMove: handleMove({ api, emit, props, vm, state }),
    handleMousedown: handleMousedown({ api, emit, on, props, state, vm }),
    buttonMousedown: buttonMousedown(),
    buttonLeftTopClick: buttonLeftTopClick({ emit, props, state }),
    buttonRightBottomClick: buttonRightBottomClick({ emit, props, state }),
    getComputedThresholdValue: getComputedThresholdValue({ api, props, vm, state })
  })

  return api
}

export const useOffset = ({ nextTick, props, vm, constants, hooks }) => {
  const api = {}
  const { computed, onMounted, onUnmounted, reactive, toRefs, watch } = hooks
  const state = reactive({
    offset: 0,
    anotherOffset: computed(() => 100 - state.offset),
    valueIsPx: computed(() => typeof props.modelValue === 'string'),
    isHorizontal: computed(() => props.mode === constants.HORIZONTAL),
    offsetSize: computed(() => (state.isHorizontal ? 'offsetWidth' : 'offsetHeight')),
    leftTopPane: 0,
    totalPane: 0
  })

  Object.assign(api, {
    px2percent,
    computeOffset: computeOffset({ api, nextTick, props, vm, state })
  })

  watch(() => props.modelValue, api.computeOffset, { immediate: true })

  onMounted(() => {
    on(window, 'resize', api.computeOffset)
  })

  onUnmounted(() => {
    off(window, 'resize', api.computeOffset)
  })

  return {
    api,
    state: toRefs(state)
  }
}
