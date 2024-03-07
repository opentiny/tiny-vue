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

export const api = [
  'state',
  'emitSelectRange',
  'adjustCurrentSpinner',
  'handleClick',
  'decrease',
  'increase',
  'amPm',
  'adjustSpinners'
]

const initState = ({ reactive, computed, props, api }) => {
  const state = reactive({
    selectableRange: [],
    currentScrollbar: null,
    hours: computed(() => props.date.getHours()),
    minutes: computed(() => props.date.getMinutes()),
    seconds: computed(() => props.date.getSeconds()),
    hoursList: computed(() =>
      Array.from(getRangeHours(state.selectableRange))
        .map((disabled, hour) => ({ disabled, hour }))
        .filter(({ hour }) => !(hour % state.step.hours))
    ),
    minutesList: computed(() =>
      Array.from(getRangeMinutes(state.selectableRange, state.hours))
        .map((disabled, minute) => ({ disabled, minute }))
        .filter(({ minute }) => !(minute % state.step.minutes))
    ),
    secondsList: computed(() =>
      Array.from(new Array(60))
        .map((item, second) => ({ second }))
        .filter(({ second }) => !(second % state.step.seconds))
    ),
    arrowHourList: computed(() => api.getArrowHourList()),
    arrowMinuteList: computed(() => api.getArrowMinuteList()),
    arrowSecondList: computed(() => api.getArrowSecondList()),
    animationName: '',
    step: computed(() => ({
      hours: props.step.hour * 1 || 1,
      minutes: props.step.minute * 1 || 1,
      seconds: props.step.second * 1 || 1
    }))
  })

  return state
}

export const renderless = (props, { computed, onMounted, reactive, watch, nextTick }, { emit, vm, constants }) => {
  const api = {}
  const state = initState({ reactive, computed, props, api })

  onMounted(() => {
    !props.arrowControl && api.bindScrollEvent()
  })

  Object.assign(api, {
    state,
    amPm: amPm(props),
    typeItemHeight: typeItemHeight({ vm }),
    scrollBarHeight: scrollBarHeight(vm),
    getArrowHourList: getArrowHourList(state),
    getArrowSecondList: getArrowSecondList(state),
    getArrowMinuteList: getArrowMinuteList(state),
    emitSelectRange: emitSelectRange({ emit, state }),
    modifyDateField: modifyDateField({ emit, props, state }),
    bindScrollEvent: bindScrollEvent({ api, vm }),
    adjustSpinners: adjustSpinners({ api, state }),
    adjustSpinner: adjustSpinner({ api, props, vm, state }),
    increase: increase({ api, state }),
    decrease: decrease({ api, state }),
    handleClick: handleClick(api),
    scrollDown: scrollDown({ api, state }),
    handleScroll: handleScroll({ api, vm, state }),
    adjustCurrentSpinner: adjustCurrentSpinner({ api, state })
  })

  watch(
    () => props.date,
    () => {
      const timeType = ['hours', 'minutes', 'seconds']

      timeType.forEach((type) => {
        api.modifyDateField(type, Math.round(state[type] / state.step[type]) * state.step[type])
      })
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
