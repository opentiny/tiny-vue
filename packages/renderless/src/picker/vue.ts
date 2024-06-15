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
  getPanel,
  getType,
  watchIsRange,
  parseAsFormatAndType,
  watchPickerVisible,
  watchMobileVisible,
  getValueEmpty,
  getMode,
  displayValue,
  typeValueResolveMap,
  formatAsFormatAndType,
  dateFormatter,
  dateParser,
  rangeFormatter,
  rangeParser,
  parsedValue,
  firstInputId,
  secondInputId,
  focus,
  blur,
  parseValue,
  formatToValue,
  parseString,
  formatToString,
  handleMouseEnter,
  handleInput,
  handleChange,
  handleStartInput,
  handleEndInput,
  handleStartChange,
  handleEndChange,
  handleClose,
  handleFocus,
  handleKeydown,
  hidePicker,
  showPicker,
  emitInput,
  isValidValue,
  emitChange,
  mountPicker,
  updateOptions,
  handleClickIcon,
  handlePick,
  handleSelectRange,
  getTimezone,
  getValueFormat,
  watchModelValue,
  computedFormat,
  computedTriggerClass,
  computedHaveTrigger,
  initPopper,
  initGlobalTimezone,
  emitDbTime,
  handleEnterDisplayOnlyContent,
  handleEnterPickerlabel,
  setInputPaddingLeft,
  formatInputValue
} from './index'
import { dateMobileToggle, timeMobileToggle, dateToTimeArray, timeArrayToDate, timeMobileConfirm } from './mb'
import { DATEPICKER } from '../common'
import type {
  IPickerProps,
  IPickerApi,
  ISharedRenderlessParamHooks,
  IPickerRenderlessParamUtils,
  IPickRenderlessParamExtendOptions
} from '@/types'

export const api = [
  'state',
  'btnClick',
  'handleEndChange',
  'handleEndInput',
  'focus',
  'handleFocus',
  'handleStartChange',
  'handleStartInput',
  'handleKeydown',
  'handleClickIcon',
  'handleMouseEnter',
  'handleInput',
  'handleChange',
  'handleClose',
  'handlePick',
  'handleSelectRange',
  'handleSelectChange',
  'popperElm',
  'handleEnterDisplayOnlyContent',
  'handleEnterPickerlabel',
  'timeMobileToggle',
  'timeMobileConfirm',
  'emitInput',
  'dateMobileToggle'
]

const initState = ({ api, reactive, vm, computed, props, utils, parent, breakpoint }) => {
  const state = reactive({
    historyValue: [],
    historyInput: [],
    historyUserInput: [],
    historyUserValue: [],
    startStatus: false,
    endStatus: false,
    date: null,
    pickerVisible: false,
    showClose: false,
    userInput: null,
    valueOnOpen: null,
    popperElm: null,
    unwatchPickerOptions: null,
    ranged: computed(() => state.type.includes(DATEPICKER.Range)),
    reference: computed(() => vm.$refs.reference.$el || vm.$refs.reference),
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    refInput: computed(() => (state.reference ? [].slice.call(state.reference.querySelectorAll('input')) : [])),
    valueIsEmpty: computed(() => api.getValueEmpty()),
    triggerClass: computed(() => api.computedTriggerClass()),
    selectionMode: computed(() => api.getMode()),
    haveTrigger: computed(() => api.computedHaveTrigger()),
    displayValue: computed(() => api.displayValue()),
    parsedValue: computed(() => api.parsedValue()),
    oldValue: props.modelValue,
    pickerSize: computed(() => props.size),
    pickerDisabled: computed(() => props.disabled || state.formDisabled || state.isDisplayOnly),
    firstInputId: computed(() => api.firstInputId()),
    secondInputId: computed(() => api.secondInputId()),
    type: computed(() => api.getType()),
    timezone: computed(() => api.getTimezone()),
    valueFormat: computed(() => getValueFormat({ props, utils })),
    format: computed(() => api.computedFormat()),
    labelTooltip: '',
    displayOnlyTooltip: '',
    isDisplayOnly: computed(() => props.displayOnly || (parent.tinyForm || {}).displayOnly),
    isMobileMode: computed(() => vm.$mode.includes('mobile')),
    dateMobileOption: {
      visible: false,
      type: props.type,
      value: props.modelValue
    },
    timeMobileOption: {
      visible: false,
      type: props.type,
      value: [0, 0, 0]
    },
    isDateMobileComponent: computed(() =>
      [
        DATEPICKER.DateRange,
        DATEPICKER.DateTimeRange,
        DATEPICKER.DateTime,
        DATEPICKER.DatePicker,
        DATEPICKER.Date,
        DATEPICKER.Dates
      ].includes(props.type)
    ),
    isTimeMobileComponent: computed(() =>
      [DATEPICKER.Time, DATEPICKER.TimeRange, DATEPICKER.TimeSelect, DATEPICKER.TimePicker].includes(props.type)
    ),
    showSeconds: computed(() =>
      (state.format || (props.pickerOptions && props.pickerOptions.format) || 'ss').includes('ss')
    )
  })

  return state
}

const initApi = ({ api, props, hooks, state, vnode, others, utils, parent }) => {
  const { t, emit, dispatch, nextTick, vm } = vnode
  const { TimePanel, TimeRangePanel } = others
  const { destroyPopper, popperElm, updatePopper } = initPopper({ props, hooks, vnode })

  state.popperElm = popperElm
  state.picker = null

  Object.assign(api, {
    destroyPopper,
    emitDbTime: emitDbTime({ emit, state, t }),
    hidePicker: hidePicker({ destroyPopper, state }),
    handleSelectChange: ({ tz, date }) => !state.ranged && emit('select-change', { tz, date }),
    getPanel: getPanel(others),
    handleFocus: handleFocus({ emit, vm, state, api }),
    getTimezone: getTimezone({ props, utils }),
    emitChange: emitChange({ api, dispatch, emit, props, state }),
    parsedValue: parsedValue({ api, props, state, t }),
    parseAsFormatAndType: parseAsFormatAndType({ api }),
    typeValueResolveMap: typeValueResolveMap({ api, props, t }),
    updateOptions: updateOptions({ api, props, state }),
    focus: focus({ api, props, vm }),
    handleInput: handleInput({ api, state, props }),
    handleChange: handleChange({ api, state }),
    isValidValue: isValidValue({ api, state }),
    emitInput: emitInput({ api, emit, props, state }),
    handleKeydown: handleKeydown({ api, state }),
    handleEndChange: handleEndChange({ api, state }),
    handleStartChange: handleStartChange({ api, state }),
    handleClickIcon: handleClickIcon({ api, props, state }),
    showPicker: showPicker({ api, nextTick, updatePopper, state }),
    formatToValue: formatToValue({ api, props, state }),
    formatAsFormatAndType: formatAsFormatAndType({ api }),
    parseString: parseString({ api, state }),
    handleClose: handleClose({ api, props, state }),
    displayValue: displayValue({ api, props, state }),
    handlePick: handlePick({ api, state }),
    watchPickerVisible: watchPickerVisible({ api, vm, dispatch, emit, props, state, nextTick }),
    watchMobileVisible: watchMobileVisible({ api, props, state, nextTick }),
    formatToString: formatToString({ api, state }),
    watchIsRange: watchIsRange({ api, state, TimePanel, TimeRangePanel }),
    mountPicker: mountPicker({ api, vm, props, state, updatePopper }),
    watchModelValue: watchModelValue({ api, props, state, dispatch }),
    computedFormat: computedFormat({ props, utils }),
    computedTriggerClass: computedTriggerClass({ props, state }),
    computedHaveTrigger: computedHaveTrigger({ props }),
    setInputPaddingLeft: setInputPaddingLeft({ props, state, vm, nextTick }),
    formatInputValue: formatInputValue({ props, state })
  })

  initApi2({ api, props, state, t, parent })
  initMobileApi({ api, props, state, t, parent })
}

const initApi2 = ({ api, props, state, t, parent }) => {
  Object.assign(api, {
    t,
    state,
    blur: blur(state),
    getMode: getMode({ state }),
    getType: getType({ props, parent }),
    dateParser: dateParser({ t, props }),
    rangeParser: rangeParser(api),
    rangeFormatter: rangeFormatter(api),
    dateFormatter: dateFormatter({ t }),
    getValueEmpty: getValueEmpty(props),
    handleEndInput: handleEndInput({ state, props, api }),
    handleStartInput: handleStartInput({ state, props, api }),
    firstInputId: firstInputId({ props, state }),
    secondInputId: secondInputId({ props, state }),
    handleMouseEnter: handleMouseEnter({ props, state }),
    initGlobalTimezone: initGlobalTimezone({ api, state, props }),
    parseValue: parseValue({ api, props, state }),
    handleSelectRange: handleSelectRange(state),
    handleEnterPickerlabel: handleEnterPickerlabel({ state, props }),
    handleEnterDisplayOnlyContent: handleEnterDisplayOnlyContent({ state, t })
  })
}

const initMobileApi = ({ api, props, state }) => {
  Object.assign(api, {
    dateMobileToggle: dateMobileToggle({ state, props, api }),
    timeMobileToggle: timeMobileToggle({ state, props, api }),
    timeMobileConfirm: timeMobileConfirm({ state, props, api }),
    dateToTimeArray,
    timeArrayToDate: timeArrayToDate({ state, props, api })
  })
}

const initWatch = ({ api, state, props, watch, markRaw }) => {
  watch(
    () => state.type,
    (type) => (state.panel = markRaw(api.getPanel(type))),
    { immediate: true }
  )

  watch(() => [state.dateMobileOption.visible, state.timeMobileOption.visible], api.watchMobileVisible)

  watch(() => state.pickerVisible, api.watchPickerVisible)

  watch(
    () => props.defaultValue,
    (value) => state.picker && (state.picker.state.defaultValue = value)
  )

  watch(
    () => state.parsedValue,
    (value) => state.picker && (state.picker.state.value = value),
    { immediate: true }
  )

  watch(() => props.isRange, api.watchIsRange)

  watch(() => props.modelValue, api.watchModelValue)

  watch(() => props.pickerOptions, api.updateOptions, { deep: true })

  watch(() => props.label, api.setInputPaddingLeft)
}

export const renderless = (
  props: IPickerProps,
  hooks: ISharedRenderlessParamHooks,
  vnode: IPickerRenderlessParamUtils,
  others: IPickRenderlessParamExtendOptions
): IPickerApi => {
  const api = {} as IPickerApi
  const { reactive, computed, watch, onBeforeUnmount, inject, markRaw, onMounted } = hooks
  const { vm, service, parent, useBreakpoint } = vnode
  const { utils = {} } = service || {}
  const breakpoint = useBreakpoint()
  const state = initState({ api, reactive, vm, computed, props, utils, parent, inject, breakpoint })

  parent.tinyForm = parent.tinyForm || inject('form', null)

  initApi({ api, props, hooks, state, vnode, others, utils, parent })
  initWatch({ api, state, props, watch, markRaw })

  api.initGlobalTimezone()

  onMounted(() => {
    api.setInputPaddingLeft()
  })

  parent.$on('handle-clear', (event) => {
    state.showClose = true
    api.handleClickIcon(event)
  })

  onBeforeUnmount(() => {
    api.destroyPopper('remove')

    state.popperElm = null
    state.picker = null
  })

  return api
}
