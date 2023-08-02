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
  dispatchDisplayedValue,
  getDisplayedValue,
  handleDrop,
  handleDragStart
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
  'handleDrop',
  'handleDragStart'
]

const initState = ({ reactive, computed, mode, props, parent, constants }) => {
  const state = reactive({
    mode,
    focused: false,
    hovering: false,
    isComposing: false,
    passwordVisible: false,
    boxVisibility: false,
    textareaCalcStyle: {},
    checkedLable: '',
    sheetvalue: props.modelValue,
    inputSize: computed(() => props.size || state.formItemSize),
    showClear: computed(
      () =>
        props.clearable &&
        !state.inputDisabled &&
        !props.readonly &&
        state.nativeInputValue &&
        (state.focused || state.hovering)
    ),
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
    textareaStyle: computed(() => ({
      ...state.textareaCalcStyle,
      resize: props.resize
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
    hiddenPassword: computed(() => api.hiddenPassword())
  })

  return state
}

const initApi = ({ api, state, dispatch, broadcast, emit, refs, props, CLASS_PREFIX, parent }) => {
  Object.assign(api, {
    state,
    dispatch,
    broadcast,
    showBox: showBox(state),
    clear: clear(emit),
    getInput: getInput(refs),
    handleChange: handleChange(emit),
    watchFormSelect: watchFormSelect({ emit, props, state }),
    calcIconOffset: calcIconOffset({ CLASS_PREFIX, parent }),
    getSuffixVisible: getSuffixVisible({ parent, props, state }),
    calculateNodeStyling: calculateNodeStyling(),
    handleCompositionStart: handleCompositionStart(state),
    handleCompositionUpdate: handleCompositionUpdate(state),
    dispatchDisplayedValue: dispatchDisplayedValue({ state, props, dispatch, api }),
    getDisplayedValue: getDisplayedValue({ state, props }),
    handleDrop: handleDrop(emit),
    handleDragStart: handleDragStart(emit)
  })
}

const mergeApi = ({ storages, api, componentName, props, emit, eventName, nextTick, parent, state, refs }) => {
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
      state
    }),
    handleFocus: handleFocus({ api, emit, state }),
    handleInput: handleInput({ api, emit, nextTick, state }),
    resizeTextarea: resizeTextarea({ api, parent, refs, state }),
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
    hiddenPassword: hiddenPassword({ state, props })
  })
}

const initWatch = ({ watch, state, api, props, nextTick, emit, componentName, eventName }) => {
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
        api.dispatchDisplayedValue()
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
  props,
  { computed, onMounted, onUpdated, reactive, toRefs, watch, inject },
  { vm, refs, parent, emit, constants, nextTick, broadcast, dispatch, mode }
) => {
  const api = {}
  const componentName = constants.COMPONENT_NAME.FormItem
  const eventName = { change: 'form.change', blur: 'form.blur' }
  const CLASS_PREFIX = {
    Input: constants.inputMode(mode),
    InputGroup: constants.inputGroupMode(mode)
  }
  const state = initState({ reactive, computed, mode, props, parent, constants })

  initApi({ api, state, dispatch, broadcast, emit, refs, props, CLASS_PREFIX, parent })

  const storages = useStorageBox({ api, props, reactive, toRefs })

  parent.tinyForm = parent.tinyForm || inject('form', null)

  mergeApi({ api, storages, componentName, emit, eventName, props, state, nextTick, parent, refs })

  initWatch({ watch, state, api, props, nextTick, emit, componentName, eventName })

  onMounted(() => {
    api.setNativeInputValue()
    api.resizeTextarea()
    api.updateIconOffset()
    api.dispatchDisplayedValue()

    dispatch('Select', 'input-mounted', vm.$el)
    dispatch('Tooltip', 'tooltip-update', vm.$el)
  })

  onUpdated(() => {
    nextTick(api.updateIconOffset)
  })

  return api
}
