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
  closePopper,
  popInput,
  save,
  reset,
  inputBlur,
  emitChange,
  inputFocus,
  toggleVisible,
  addOutSideEvent,
  handelClick,
  initText,
  onInput,
  getPrecision,
  getDecimal,
  innerFormat,
  getAmountText,
  initService,
  watchModelValue,
  watchCurrency,
  onInputPreprocess,
  initAmount
} from './index'

export const api = [
  't',
  'popInput',
  'state',
  'editorState',
  'save',
  'reset',
  'inputBlur',
  'init',
  'toggleVisible',
  'inputFocus',
  'closePopper',
  'onInput',
  'getAmountText'
]

const initState = ({ reactive, computed, props, $service, editorState }) => {
  const state = reactive({
    visible: false,
    amount: props.modelValue || '',
    currency: props.currency,
    date: props.date,
    overMaxLen: false,
    isFocus: false,
    lock: false,
    amountText: '',
    lastInput: props.modelValue,
    lastCurrency: props.currency,
    lastDate: props.date,
    format: computed(() => ({
      ...getPrecision({ service: $service, props, currency: editorState.currency }),
      prefix: state.currency
    }))
  })

  return state
}

const initEditorState = ({ reactive, props }) =>
  reactive({
    amount: '',
    date: '',
    currency: props.currency,
    lastInput: props.modelValue
  })

const initApi = ({ api, t, editorState, props, state, emit, refs }) => {
  Object.assign(api, {
    state,
    t,
    editorState,
    getDecimal: getDecimal(props),
    innerFormat: innerFormat({ state, props }),
    getAmountText: getAmountText({ state, props }),
    initAmount: initAmount(props),
    onInputPreprocess: onInputPreprocess(props),
    onInput: onInput({ state, props, api }),
    initText: initText({ state }),
    inputFocus: inputFocus({ state, props }),
    inputBlur: inputBlur({ api, props, state }),
    closePopper: closePopper(state),
    emitChange: emitChange({ emit, state }),
    popInput: popInput({ editorState, api, state, props }),
    save: save({ api, state, editorState, props }),
    reset: reset({ api, state, editorState }),
    handelClick: handelClick({ api, refs }),
    addOutSideEvent: addOutSideEvent(api),
    watchModelValue: watchModelValue({ api, state }),
    watchCurrency: watchCurrency({ api, state, editorState }),
    toggleVisible: toggleVisible({ api, props, state, editorState })
  })
}

const initWatch = ({ watch, props, state, api }) => {
  watch(() => props.modelValue, api.watchModelValue, { immediate: true })

  watch(() => props.currency, api.watchCurrency, { immediate: true })

  watch(
    () => props.date,
    (value) => {
      state.date = value
      state.lastDate = value
    },
    { immediate: true }
  )

  watch(
    () => props.rounding,
    (value) => {
      state.format.rounding = value
    }
  )

  watch(
    () => props.digits,
    (value) => {
      state.format.fraction = value
    }
  )
}

export const renderless = (props, { onUnmounted, computed, reactive, watch }, { t, emit, refs, service }) => {
  const api = {}
  const $service = initService(service)
  const editorState = initEditorState({ reactive, props })
  const state = initState({ reactive, computed, props, $service, editorState })

  initApi({ api, t, editorState, props, state, emit, refs })

  api.getDecimal(0) // 初始化Decimal

  initWatch({ watch, props, state, api })

  onUnmounted(() => api.addOutSideEvent(false))

  return api
}
