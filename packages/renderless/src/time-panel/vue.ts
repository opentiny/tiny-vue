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
  handleKeydown,
  isValidValue,
  scrollDown,
  handleMenuEnter,
  scrollToOption,
  handleClear,
  handleClick,
  parseTime,
  formatTime,
  nextTime,
  compareTime,
  watchValue,
  computItems,
  emitPick,
  emitDestroy
} from './index'
import { DATEPICKER } from '../common'

export const api = ['state', 'handleMenuEnter', 'handleClick', 'handleClear', 'emitDestroy']

const initState = ({ reactive, computed, api }) => {
  const { Start, End, Step } = DATEPICKER

  const state = reactive({
    popperClass: '',
    start: Start,
    end: End,
    step: Step,
    realValue: '',
    defaultValue: '',
    defaultTime: '',
    visible: false,
    minTime: '',
    maxTime: '',
    width: 0,
    lastEmitValue: '',
    items: computed(() => api.computItems()),
    default: computed(() => state.defaultValue || state.defaultTime || ''),
    value: computed({
      get: () => state.realValue || state.default,
      set: (value) => {
        const valid = state.items.some((item) => item.value === value)

        state.realValue = valid ? value : ''
      }
    })
  })

  return state
}

export const renderless = (props, { computed, reactive, watch, nextTick }, { vm, emit: $emit }) => {
  const api = {}
  const emit = props.emitter ? props.emitter.emit : $emit
  const state = initState({ reactive, computed, api })

  Object.assign(api, {
    state,
    parseTime: parseTime(),
    formatTime: formatTime(),
    isValidValue: isValidValue(state),
    scrollToOption: scrollToOption({ vm }),
    emitPick: emitPick({ emit, state }),
    emitDestroy: emitDestroy(emit),
    nextTime: nextTime(api),
    compareTime: compareTime(api),
    handleClick: handleClick(api),
    scrollDown: scrollDown({ api, state }),
    handleClear: handleClear({ api, state }),
    watchValue: watchValue({ api, nextTick }),
    handleKeydown: handleKeydown({ api }),
    computItems: computItems({ api, state }),
    handleMenuEnter: handleMenuEnter({ api, nextTick, state })
  })

  watch(() => state.value, api.watchValue)

  watch(
    () => state.visible,
    () => setTimeout(() => state.fnUpdatePopper && state.fnUpdatePopper())
  )

  return api
}
