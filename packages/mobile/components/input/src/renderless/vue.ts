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
  IInputApi,
  IInputProps,
  IInputState,
  ISharedRenderlessParamHooks,
  IInputRenderlessParamUtils,
  IInputClassPrefixConstants,
  IInputEventNameConstants,
  IInputRenderlessParams
} from '@/types'
import {
  blur,
  showBox,
  watchFormSelect,
  clear,
  focus,
  select,
  getInput,
  textLength,
  handleBlur,
  handleFocus,
  handleInput,
  handleChange,
  calcIconOffset,
  resizeTextarea,
  getSuffixVisible,
  updateIconOffset,
  calcTextareaHeight,
  setNativeInputValue,
  calculateNodeStyling,
  handleCompositionEnd,
  handlePasswordVisible,
  handleCompositionStart,
  handleCompositionUpdate,
  hasSelection,
  handleEnterDisplayOnlyContent,
  hiddenPassword,
  setInputDomValue,
  getDisplayedMaskValue,
  inputStyle,
  handleEnterTextarea,
  handleLeaveTextarea,
  getDisplayOnlyText
} from './index'
import useStorageBox from '../tall-storage/vue-storage-box'

export const api = [
  'blur',
  'showBox',
  'clear',
  'focus',
  'state',
  'select',
  'getInput',
  'handleBlur',
  'handleInput',
  'handleFocus',
  'handleChange',
  'calcIconOffset',
  'resizeTextarea',
  'getSuffixVisible',
  'updateIconOffset',
  'calcTextareaHeight',
  'setNativeInputValue',
  'calculateNodeStyling',
  'handleCompositionEnd',
  'handlePasswordVisible',
  'handleCompositionStart',
  'handleCompositionUpdate',
  'addMemory',
  'searchMemory',
  'selectedMemory',
  'storageData',
  'isMemoryStorage',
  'hasSelection',
  'handleEnterDisplayOnlyContent',
  'hiddenPassword',
  'inputStyle',
  'handleEnterTextarea',
  'handleLeaveTextarea'
]

const initState = ({
  reactive,
  computed,
  mode,
  props,
  parent,
  constants,
  api,
  vm
}: Pick<
  IInputRenderlessParams,
  'reactive' | 'computed' | 'mode' | 'props' | 'parent' | 'constants' | 'api' | 'vm'
>) => {
  const state = reactive({
    mode,
    maskSymbol: constants.MASKSYMBOL,
    focused: false,
    hovering: false,
    isComposing: false,
    passwordVisible: false,
    maskValueVisible: false,
    boxVisibility: false,
    textareaCalcStyle: {},
    checkedLabel: '',
    enteredTextarea: false,
    sheetvalue: props.modelValue,
    inputSize: computed(() => props.size || state.formItemSize),
    inputSizeMf: computed(() => props.size || (parent.tinyForm || {}).size),
    showClear: computed(
      () =>
        props.clearable &&
        !state.inputDisabled &&
        !props.readonly &&
        state.nativeInputValue &&
        (state.focused || state.hovering)
    ),
    textareaHeight: vm.theme === 'saas' ? '28px' : '30px',
    upperLimit: computed(() => parent.$attrs.maxlength),
    textLength: computed(() => textLength(props.modelValue)),
    inputExceed: computed(() => state.isWordLimitVisible && state.textLength > state.upperLimit),
    formItemSize: computed(() => (parent.formItem || {}).formItemSize),
    validateIcon: computed(() => constants.VALIDATE_ICON[state.validateState]),
    showWordLimit: computed(() => props.showWordLimit && parent.$attrs.maxlength),
    inputDisabled: computed(
      () =>
        props.disabled || (parent.tinyForm || {}).disabled || state.isDisplayOnly || (parent.tinyForm || {}).displayOnly
    ),
    validateState: computed(() => (parent.formItem ? parent.formItem.validateState : '')),
    inputStyle: computed(() => api.inputStyle()),
    textareaStyle: computed(() => ({
      ...state.textareaCalcStyle,
      resize: props.resize,
      textAlign: props.textAlign
    })),
    needStatusIcon: computed(() => (parent.tinyForm ? parent.tinyForm.statusIcon : false)),
    showPwdVisible: computed(
      () => props.showPassword && !state.inputDisabled && !props.readonly && (!!state.nativeInputValue || state.focused)
    ),
    nativeInputValue: computed(() =>
      props.modelValue === null || props.modelValue === undefined ? '' : String(props.modelValue)
    ),

    isWordLimitVisible: computed(
      () =>
        ((props.showWordLimit && parent.$attrs.maxlength) || props.counter) &&
        (parent.type === 'text' || parent.type === 'textarea') &&
        !state.inputDisabled &&
        !props.readonly &&
        !props.showPassword
    ),
    isDisplayOnly: computed(
      () =>
        (props.displayOnly || (parent.tinyForm || {}).displayOnly) &&
        ['text', 'textarea', 'password', 'number'].includes(props.type)
    ),
    displayOnlyTooltip: '',
    hiddenPassword: computed(() => api.hiddenPassword()),
    displayedMaskValue: computed(() => api.getDisplayedMaskValue()),
    displayOnlyText: computed(() => api.getDisplayOnlyText())
  })

  return state as IInputState
}

const initApi = ({
  api,
  state,
  dispatch,
  broadcast,
  emit,
  vm,
  props,
  CLASS_PREFIX,
  parent,
  nextTick
}: Pick<
  IInputRenderlessParams,
  'api' | 'state' | 'dispatch' | 'broadcast' | 'emit' | 'refs' | 'props' | 'parent' | 'vm' | 'nextTick'
> & {
  CLASS_PREFIX: IInputClassPrefixConstants
}) => {
  Object.assign(api, {
    state,
    dispatch,
    broadcast,
    showBox: showBox(state),
    clear: clear(emit),
    getInput: getInput(vm),
    handleChange: handleChange(emit),
    watchFormSelect: watchFormSelect({ emit, props, state }),
    calcIconOffset: calcIconOffset({ CLASS_PREFIX, parent }),
    getSuffixVisible: getSuffixVisible({ parent, props, state }),
    calculateNodeStyling: calculateNodeStyling(),
    handleCompositionStart: handleCompositionStart(state),
    handleCompositionUpdate: handleCompositionUpdate(state),
    setInputDomValue: setInputDomValue({ state, props, nextTick, vm }),
    getDisplayOnlyText: getDisplayOnlyText({ parent, props, state }),
    handleEnterTextarea: handleEnterTextarea({ api, state, props, nextTick }),
    handleLeaveTextarea: handleLeaveTextarea({ api, state, props, nextTick, vm }),
    inputStyle: inputStyle({ props })
  })
}

const mergeApi = ({
  storages,
  api,
  componentName,
  props,
  emit,
  eventName,
  nextTick,
  parent,
  state,
  vm
}: Pick<IInputRenderlessParams, 'api' | 'emit' | 'props' | 'state' | 'nextTick' | 'parent' | 'vm'> & {
  storages: ReturnType<typeof useStorageBox>
  componentName: string
  eventName: IInputEventNameConstants
}) => {
  const { storageData, isMemoryStorage, addMemory, searchMemory, selectedMemory } = storages

  return Object.assign(api, {
    addMemory,
    storageData,
    searchMemory,
    selectedMemory,
    isMemoryStorage,
    blur: blur(api),
    focus: focus(api),
    select: select(api),
    handleBlur: handleBlur({
      api,
      componentName,
      emit,
      eventName: eventName.blur,
      props,
      state,
      vm
    }),
    handleFocus: handleFocus({ api, emit, state }),
    handleInput: handleInput({ api, emit, nextTick, state }),
    resizeTextarea: resizeTextarea({ api, parent, vm, state, props }),
    updateIconOffset: updateIconOffset(api),
    calcTextareaHeight: calcTextareaHeight({
      api,
      hiddenTextarea: null,
      props,
      state
    }),
    setNativeInputValue: setNativeInputValue({ api, state }),
    handleCompositionEnd: handleCompositionEnd({ api, state }),
    handlePasswordVisible: handlePasswordVisible({ api, nextTick, state }),
    hasSelection: hasSelection(api),
    handleEnterDisplayOnlyContent: handleEnterDisplayOnlyContent({ state, props }),
    hiddenPassword: hiddenPassword({ state, props }),
    getDisplayedMaskValue: getDisplayedMaskValue({ state })
  })
}

const initWatch = ({
  watch,
  state,
  api,
  props,
  nextTick,
  emit,
  componentName,
  eventName
}: Pick<IInputRenderlessParams, 'watch' | 'state' | 'api' | 'props' | 'nextTick' | 'emit'> & {
  componentName: string
  eventName: IInputEventNameConstants
}) => {
  watch(
    () => props.modelValue,
    (value) => {
      if (state.mode === 'mobile') {
        state.sheetvalue = value
        emit('update:modelValue', value)
      }

      nextTick(api.resizeTextarea)

      if (props.validateEvent) {
        api.dispatch(componentName, eventName.change, [value])
      }

      api.setInputDomValue()
    }
  )

  watch(() => state.maskValueVisible, api.setInputDomValue)

  watch(() => state.inputDisabled, api.setInputDomValue)

  watch(
    () => props.mask,
    () => {
      api.setInputDomValue('mask')
    }
  )

  watch(
    () => props.size,
    () => nextTick(api.resizeTextarea),
    { immediate: true }
  )

  watch(
    () => state.nativeInputValue,
    () => {
      api.setNativeInputValue()
    }
  )

  watch(
    () => props.type,
    () => {
      nextTick(() => {
        api.setNativeInputValue()
        api.resizeTextarea()
        api.updateIconOffset()
      })
    }
  )

  watch(
    () => state.isDisplayOnly,
    () => {
      nextTick(() => {
        api.setNativeInputValue()
        api.resizeTextarea()
        api.updateIconOffset()
      })
    }
  )

  watch(
    () => state.sheetvalue,
    (value) => api.watchFormSelect(value),
    { immediate: true }
  )
}

export const renderless = (
  props: IInputProps,
  { computed, onMounted, onUpdated, reactive, toRefs, watch, inject }: ISharedRenderlessParamHooks,
  { vm, refs, parent, emit, constants, nextTick, broadcast, dispatch, mode }: IInputRenderlessParamUtils
): IInputApi => {
  const api = {} as IInputApi
  const componentName = constants.COMPONENT_NAME.FormItem
  const eventName: IInputEventNameConstants = { change: 'form.change', blur: 'form.blur' }
  const CLASS_PREFIX: IInputClassPrefixConstants = {
    Input: constants.inputMode(mode),
    InputGroup: constants.inputGroupMode(mode)
  }
  const state = initState({ reactive, computed, mode, props, parent, constants, api, vm })

  initApi({ api, state, dispatch, broadcast, emit, refs, props, CLASS_PREFIX, parent, vm, nextTick })

  const storages = useStorageBox({ api, props, reactive, toRefs })

  parent.tinyForm = parent.tinyForm || inject('form', null)

  mergeApi({ api, storages, componentName, emit, eventName, props, state, nextTick, parent, vm })

  initWatch({ watch, state, api, props, nextTick, emit, componentName, eventName })

  onMounted(() => {
    api.setNativeInputValue()
    api.resizeTextarea()
    api.updateIconOffset()
    api.setInputDomValue()

    dispatch('Select', 'input-mounted', vm.$el)
    dispatch('Tooltip', 'tooltip-update', vm.$el)
  })

  onUpdated(() => {
    nextTick(api.updateIconOffset)
  })

  return api
}
