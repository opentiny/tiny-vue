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
  initAmount,
  handleClearClick,
  handleChange,
  closeDetailEidtor,
  openDetailEditor,
  getAmountTextWithoutCurrncy,
  watchUiMode
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
  'getAmountText',
  'handleClearClick',
  'handleChange',
  'openDetailEditor',
  'closeDetailEidtor',
  'uiMode',
  'getAmountTextWithoutCurrncy',
  'watchUiMode'
]

const initState = ({
  reactive,
  computed,
  props,
  $service,
  editorState,
  vm,
  api,
  constants,
  parent
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
    format: computed(() => {
      return {
        ...getPrecision({ service: $service, props, currency: editorState.currency }),
        prefix: state.currency
      }
    }),
    disabled: computed(() => props.disabled || (parent.tinyForm || {}).disabled),
    displayOnly: computed(() => props.displayOnly || (parent.tinyForm || {}).displayOnly),
    theme: vm.theme,
    radioVal: '',
    clearValues: false,
    amountValue: computed(() => api.getAmountText()),
    amountNumberValue: computed(() => api.getAmountTextWithoutCurrncy()),
    filterMenu: constants.FILTER_OPTION,
    editorPhase: 'close' // 'close' | 'selection' | 'currency' | 'date',
  })

  return state
}

const initEditorState = ({
  reactive,
  props
}: {
  reactive: ISharedRenderlessParamHooks['reactive']
  props: IAmountProps
}) => {
  return reactive<IAmountEditorState>({
    amount: '',
    date: '',
    currency: props.currency,
    lastInput: props.modelValue
  })
}

const initUiMode = ({ useBreakpoint }) => {
  return useBreakpoint().current
}

const initApi = ({
  api,
  t,
  editorState,
  props,
  state,
  emit,
  vm,
  uiMode,
  isMobileFirstMode
}: {
  api: Partial<IAmountApi>
  t: IAmountApi['t']
  editorState: IAmountEditorState
  props: IAmountProps
  state: IAmountState
  emit: IAmountRenderlessParamUtils['emit']
}) => {
  Object.assign(api, {
    state,
    t,
    editorState,
    uiMode,
    getDecimal: getDecimal(props),
    innerFormat: innerFormat({ state, props }),
    getAmountText: getAmountText({ state, props }),
    getAmountTextWithoutCurrncy: getAmountTextWithoutCurrncy({ state }),
    initAmount: initAmount({ props, api }),
    onInputPreprocess: onInputPreprocess(props),
    onInput: onInput({ state, props, api }),
    initText: initText({ state }),
    inputFocus: inputFocus({ state, props }),
    inputBlur: inputBlur({ api, props, state }),
    closePopper: closePopper(state),
    emitChange: emitChange({ emit, state, props, api }),
    popInput: popInput({ editorState, api, state, props }),
    save: save({ api, state, editorState }),
    reset: reset({ state, editorState }),
    handelClick: handelClick({ api, vm }),
    addOutSideEvent: addOutSideEvent(api),
    watchModelValue: watchModelValue({ api, state }),
    watchCurrency: watchCurrency({ api, state, editorState }),
    watchUiMode: watchUiMode({ api, isMobileFirstMode }),
    toggleVisible: toggleVisible({ api, props, state, editorState, uiMode, isMobileFirstMode }),
    handleClearClick: handleClearClick({ state, emit, editorState }),
    handleChange: handleChange({ state, emit }),
    openDetailEditor: openDetailEditor({ state }),
    closeDetailEidtor: closeDetailEidtor({ state, props, api })
  })
}

const initWatch = ({
  watch,
  props,
  state,
  api,
  uiMode
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
  watch(uiMode, api.watchUiMode)
}

export const renderless = (
  props: IAmountProps,
  { onUnmounted, computed, reactive, watch, inject }: ISharedRenderlessParamHooks,
  { t, emit, vm, service, parent, constants, isMobileFirstMode, useBreakpoint }: IAmountRenderlessParamUtils
) => {
  const api: Partial<IAmountApi> = {}
  const $service = initService(service)
  const editorState = initEditorState({ reactive, props })
  const state: IAmountState = initState({ reactive, computed, props, $service, editorState, vm, api, constants, parent })
  const uiMode = initUiMode({ useBreakpoint })

  initApi({ api, t, editorState, props, state, emit, vm, uiMode, isMobileFirstMode })

  parent.tinyForm = parent.tinyForm || inject('form', null)

  api?.getDecimal?.(0) // 初始化Decimal

  initWatch({ watch, props, state, api: api as IAmountApi, uiMode })

  onUnmounted(() => api?.addOutSideEvent?.(false))

  parent.$on('handle-clear', (event) => {
    api.handleClearClick(event)
  })

  return api as IAmountApi
}
