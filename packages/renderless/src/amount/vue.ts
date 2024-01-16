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

import type {
  IAmountProps,
  IAmountState,
  IAmountRenderlessParamUtils,
  ISharedRenderlessParamHooks,
  IAmountApi,
  IAmountEditorState
} from '@/types'

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

const initState = ({
  reactive,
  computed,
  props,
  $service,
  editorState
}: {
  reactive: ISharedRenderlessParamHooks['reactive']
  computed: ISharedRenderlessParamHooks['computed']
  props: IAmountProps
  $service: any
  editorState: IAmountApi['editorState']
}) => {
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

const initEditorState = ({
  reactive,
  props
}: {
  reactive: ISharedRenderlessParamHooks['reactive']
  props: IAmountProps
}) =>
  reactive<IAmountEditorState>({
    amount: '',
    date: '',
    currency: props.currency,
    lastInput: props.modelValue
  })

const initApi = ({
  api,
  t,
  editorState,
  props,
  state,
  emit,
  refs
}: {
  api: Partial<IAmountApi>
  t: IAmountApi['t']
  editorState: IAmountEditorState
  props: IAmountProps
  state: IAmountState
  emit: IAmountRenderlessParamUtils['emit']
  refs: IAmountRenderlessParamUtils['refs']
}) => {
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
    save: save({ api, state, editorState }),
    reset: reset({ state, editorState }),
    handelClick: handelClick({ api, refs }),
    addOutSideEvent: addOutSideEvent(api),
    watchModelValue: watchModelValue({ api, state }),
    watchCurrency: watchCurrency({ api, state, editorState }),
    toggleVisible: toggleVisible({ api, props, state, editorState })
  })
}

const initWatch = ({
  watch,
  props,
  state,
  api
}: {
  watch: ISharedRenderlessParamHooks['watch']
  props: IAmountProps
  state: IAmountState
  api: IAmountApi
}) => {
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
      // todo format 在 initState 初始化中是一个 ComputedRef<object>，写法是否有误？
      state.format.rounding = value
    }
  )

  watch(
    () => props.digits,
    (value) => {
      // todo format 在 initState 初始化中是一个 ComputedRef<object>，写法是否有误？
      state.format.fraction = value
    }
  )
}

export const renderless = (
  props: IAmountProps,
  { onUnmounted, computed, reactive, watch }: ISharedRenderlessParamHooks,
  { t, emit, refs, service }: IAmountRenderlessParamUtils
) => {
  const api: Partial<IAmountApi> = {}
  const $service = initService(service)
  const editorState = initEditorState({ reactive, props })
  const state: IAmountState = initState({ reactive, computed, props, $service, editorState })

  initApi({ api, t, editorState, props, state, emit, refs })

  api?.getDecimal?.(0) // 初始化Decimal

  initWatch({ watch, props, state, api: api as IAmountApi })

  onUnmounted(() => api?.addOutSideEvent?.(false))

  return api as IAmountApi
}
