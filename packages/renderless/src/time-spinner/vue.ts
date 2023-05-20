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
  getArrowHourList,
  getArrowMinuteList,
  bindScrollEvent,
  typeItemHeight,
  scrollBarHeight,
  amPm,
  scrollDown,
  adjustSpinners,
  adjustSpinner,
  adjustCurrentSpinner,
  handleScroll,
  getArrowSecondList,
  increase,
  decrease,
  modifyDateField,
  handleClick,
  emitSelectRange
} from './index'
import { getRangeHours, getRangeMinutes } from '../common/deps/date-util'

export const api = ['state', 'emitSelectRange', 'adjustCurrentSpinner', 'handleClick', 'decrease', 'increase', 'amPm', 'adjustSpinners']

const initState = ({ reactive, computed, props, api }) => {
  const state = reactive({
    selectableRange: [],
    currentScrollbar: null,
    hours: computed(() => props.date.getHours()),
    minutes: computed(() => props.date.getMinutes()),
    seconds: computed(() => props.date.getSeconds()),
    hoursList: computed(() => getRangeHours(state.selectableRange)),
    minutesList: computed(() => getRangeMinutes(state.selectableRange, state.hours)),
    arrowHourList: computed(() => api.getArrowHourList()),
    arrowMinuteList: computed(() => api.getArrowMinuteList()),
    arrowSecondList: computed(() => api.getArrowSecondList()),
    animationName: ''
  })

  return state
}

export const renderless = (props, { computed, onMounted, reactive, watch, nextTick }, { emit, refs, constants }) => {
  const api = {}
  const state = initState({ reactive, computed, props, api })

  onMounted(() => {
    !props.arrowControl && api.bindScrollEvent()
  })

  Object.assign(api, {
    state,
    amPm: amPm(props),
    typeItemHeight: typeItemHeight({ refs }),
    scrollBarHeight: scrollBarHeight(refs),
    getArrowHourList: getArrowHourList(state),
    getArrowSecondList: getArrowSecondList(state),
    getArrowMinuteList: getArrowMinuteList(state),
    emitSelectRange: emitSelectRange({ emit, state }),
    modifyDateField: modifyDateField({ emit, props, state }),
    bindScrollEvent: bindScrollEvent({ api, refs }),
    adjustSpinners: adjustSpinners({ api, state }),
    adjustSpinner: adjustSpinner({ api, props, refs }),
    increase: increase(api),
    decrease: decrease(api),
    handleClick: handleClick(api),
    scrollDown: scrollDown({ api, state }),
    handleScroll: handleScroll({ api, refs }),
    adjustCurrentSpinner: adjustCurrentSpinner({ api, state })
  })

  watch(
    () => props.date,
    () => {
      nextTick(api.adjustSpinners)
    },
    { immediate: true }
  )

  watch(
    () => state.hoursList,
    () => {
      state.animationName = constants.ANIMATIONNAME
    },
    { immediate: true }
  )

  return api
}
