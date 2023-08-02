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
  bindKeyDown,
  bindMouseDown,
  bindMouseMove,
  bindMouseUp,
  bindEvent,
  unBindEvent,
  bindResize,
  setTipStyle,
  getActiveButtonIndex,
  setActiveButtonValue,
  setBarStyle,
  setButtonStyle,
  initSlider,
  calculateValue,
  changeActiveValue,
  formatTipValue,
  getActiveButtonValue,
  displayTip,
  hideTip,
  autoSlider,
  customBeforeAppearHook,
  customAfterAppearHook,
  watchActiveValue,
  watchModelValue,
  getPoints,
  getLabels,
  inputValueChange
} from './index'

export const api = [
  'state',
  'bindKeyDown',
  'bindMouseDown',
  'bindMouseMove',
  'bindMouseUp',
  'bindEvent',
  'unBindEvent',
  'bindResize',
  'setTipStyle',
  'getActiveButtonIndex',
  'setActiveButtonValue',
  'setBarStyle',
  'setButtonStyle',
  'initSlider',
  'calculateValue',
  'changeActiveValue',
  'formatTipValue',
  'getActiveButtonValue',
  'displayTip',
  'hideTip',
  'autoSlider',
  'customBeforeAppearHook',
  'customAfterAppearHook',
  'inputValueChange'
]

const initState = ({ reactive, computed, props, api, parent }) => {
  const state = reactive({
    tipStyle: {},
    barStyle: {},
    moveStyle: [],
    isInit: true,
    isDrag: false,
    sliderSize: 0,
    showTip: false,
    activeValue: 0,
    activeIndex: 0,
    isDouble: false,
    leftBtnValue: 0,
    sliderOffset: {},
    rightBtnValue: 0,
    leftBtnStyle: {},
    leftBtnPercent: 0,
    leftBtnShow: true,
    rightBtnStyle: '',
    rightBtnPercent: 0,
    rightBtnShow: false,
    innerTrigger: false,
    rangeDiff: computed(() => props.max - props.min),
    tipValue: computed(() => api.formatTipValue(state.activeValue)),
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    disabled: computed(() => props.disabled || state.formDisabled)
  })

  return state
}

export const renderless = (
  props,
  { computed, onBeforeUnmount, onMounted, reactive, watch, inject },
  { parent, constants, nextTick, emit, mode }
) => {
  const api = {}
  const state = initState({ reactive, computed, props, api, parent })

  parent.tinyForm = parent.tinyForm || inject('form', null)

  Object.assign(api, {
    state,
    hideTip: hideTip(state),
    formatTipValue: formatTipValue(props),
    setBarStyle: setBarStyle({ props, state }),
    changeActiveValue: changeActiveValue(state),
    bindResize: bindResize({ parent, props, state }),
    setButtonStyle: setButtonStyle({ props, state }),
    calculateValue: calculateValue({ props, state }),
    getActiveButtonValue: getActiveButtonValue(state),
    getActiveButtonIndex: getActiveButtonIndex({ constants, mode, state }),
    setTipStyle: setTipStyle({ constants, mode, emit, parent, props, state }),
    customAfterAppearHook: customAfterAppearHook({ state, props }),
    customBeforeAppearHook: customBeforeAppearHook(props),
    bindEvent: bindEvent(api),
    autoSlider: autoSlider(api),
    unBindEvent: unBindEvent(api),
    displayTip: displayTip({ api, nextTick, state }),
    bindKeyDown: bindKeyDown({ api, props, state }),
    bindMouseUp: bindMouseUp({ api, emit, state }),
    bindMouseMove: bindMouseMove({ api, nextTick, state }),
    bindMouseDown: bindMouseDown({ api, constants, mode, emit, state }),
    setActiveButtonValue: setActiveButtonValue({ api, emit, props, state }),
    initSlider: initSlider({ api, props, state }),
    watchModelValue: watchModelValue({ api, state }),
    watchActiveValue: watchActiveValue({ api, emit, props, state }),
    getPoints: getPoints({ props, state }),
    getLabels: getLabels({ props, state }),
    inputValueChange: inputValueChange({ props, api, state })
  })

  watch(() => props.modelValue, api.watchModelValue, { immediate: true })
  watch(() => state.activeValue, api.watchActiveValue, { immediate: true })

  onMounted(() => {
    api.bindEvent()
    api.getPoints()
    api.getLabels()
  })

  onBeforeUnmount(api.unBindEvent)

  return api
}
