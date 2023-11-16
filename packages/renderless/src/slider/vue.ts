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
  customAppearHook,
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
  'customAppearHook',
  'customAfterAppearHook',
  'inputValueChange'
]

import {
  ISliderProps,
  ISliderState,
  ISharedRenderlessParamHooks,
  ISliderApi,
  ISliderRenderlessParamUtils
} from '@/types'

const initState = ({ reactive, computed, props, api, parent, inject }) => {
  const state: ISliderState = reactive({
    showAutoWidth: inject('showAutoWidth', null),
    tipStyle: {},
    barStyle: {},
    moveStyle: [],
    points: [],
    labels: [],
    isInit: true,
    inputValue: [0, 0],
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
  props: ISliderProps,
  { computed, onBeforeUnmount, onMounted, reactive, watch, inject }: ISharedRenderlessParamHooks,
  { vm, parent, constants, nextTick, emit, mode }: ISliderRenderlessParamUtils
) => {
  const api = {} as ISliderApi
  const state: ISliderState = initState({ reactive, computed, props, api, parent, inject })
  parent.tinyForm = parent.tinyForm || inject('form', null)

  Object.assign(api, {
    state,
    hideTip: hideTip(state),
    formatTipValue: formatTipValue(props),
    setBarStyle: setBarStyle({ props, state }),
    changeActiveValue: changeActiveValue(state),
    bindResize: bindResize({ vm, props, state }),
    setButtonStyle: setButtonStyle({ props, state }),
    calculateValue: calculateValue({ vm, props, state }),
    getActiveButtonValue: getActiveButtonValue(state),
    getActiveButtonIndex: getActiveButtonIndex({ constants, mode, state }),
    setTipStyle: setTipStyle({ vm, constants, mode, props, state }),
    customAfterAppearHook: customAfterAppearHook({ state, props }),
    customBeforeAppearHook: customBeforeAppearHook(props),
    customAppearHook: customAppearHook(),
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

  watch(
    () => props.min,
    (min) => {
      const value = Math.max(props.modelValue, min)
      api.initSlider(value)
      api.setActiveButtonValue(value)
    }
  )
  watch(
    () => props.max,
    (max) => {
      const value = Math.min(props.modelValue, max)
      api.initSlider(Math.min(props.modelValue, max))
      api.setActiveButtonValue(value)
    }
  )
  watch(() => state.activeValue, api.watchActiveValue, { immediate: true })

  watch(
    () => state.leftBtnValue,
    (newVal) => {
      state.inputValue[0] = newVal
    },
    { immediate: true }
  )
  watch(
    () => state.rightBtnValue,
    (newVal) => {
      state.inputValue[1] = newVal
    },
    { immediate: true }
  )

  onMounted(() => {
    api.bindEvent()
    api.getPoints()
    api.getLabels()
  })
  onBeforeUnmount(api.unBindEvent)

  return api
}
