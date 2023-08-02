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
  getConfig,
  deleteTag,
  getCheckedNodes,
  updateStyle,
  handleSuggestionClick,
  handleDelete,
  handleSuggestionKeyDown,
  getSuggestions,
  handleExpandChange,
  computePresentText,
  focusFirstNode,
  handleClear,
  handleInput,
  handleBlur,
  handleFocus,
  handleKeyDown,
  handleDropdownLeave,
  toggleDropDownVisible,
  computePresentTags,
  selfMounted,
  watchCheckedValue,
  computClearVisible,
  computePresentContent,
  watchValue,
  setInputHeightToTag,
  presentTextHandler,
  handleBeforeUpdate,
  showPlaceholder,
  calcCollapseTags,
  watchInputHover,
  handleMouseenter,
  handleMouseleave
} from './index'
import { removeResizeListener } from '../common/deps/resize-event'
import userPopper from '../common/deps/vue-popper'
import { DATEPICKER } from '../common'

export const api = [
  'state',
  'getCheckedNodes',
  'computePresentText',
  'handleSuggestionClick',
  'handleSuggestionKeyDown',
  'handleExpandChange',
  'handleDropdownLeave',
  'handleDelete',
  'deleteTag',
  'handleClear',
  'handleInput',
  'handleBlur',
  'handleFocus',
  'toggleDropDownVisible',
  'handleKeyDown',
  'handleMouseenter',
  'handleMouseleave'
]

const initState = ({ reactive, props, computed, parent, api, t, constants, refs, inject }) => {
  const state = reactive({
    showAutoWidth: inject('showAutoWidth', null),
    dropDownVisible: false,
    checkedValue: props.modelValue || null,
    inputHover: false,
    inputValue: null,
    presentText: null,
    presentTags: [],
    checkedNodes: [],
    filtering: false,
    suggestions: [],
    inputInitialHeight: 0,
    pressDeleteCount: 0,
    realSize: computed(() => props.size),
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    displayOnly: computed(() => props.displayOnly),
    disabled: computed(() => props.disabled || state.isDisplayOnly || state.formDisabled),
    tagSize: computed(() => (~['small', 'mini'].indexOf(state.realSize) ? 'mini' : 'small')),
    isDisabled: computed(() => state.disabled),
    isDisplayOnly: computed(() => state.displayOnly || (parent.auiForm || {}).displayOnly),
    config: computed(() => api.getConfig()),
    multiple: computed(() => state.config.multiple),
    leafOnly: computed(() => !state.config.checkStrictly),
    readonly: computed(() => !props.filterable || state.multiple),
    clearBtnVisible: computed(() => api.computClearVisible()),
    panel: computed(() => refs.panel),
    placeholder: computed(() => props.placeholder || t(constants.placeholder)),
    inputValues: computed(() => (state.multiple ? state.presentText : state.inputValue)),
    collapseTagsLength: 0,
    isHidden: false,
    tooltipVisible: false,
    tooltipContent: ''
  })

  return state
}

const initApi = ({ api, state, constants, dispatch, emit, refs, props, updatePopper, nextTick, parent, t }) => {
  Object.assign(api, {
    state,
    handleFocus: handleFocus(emit),
    handleClear: handleClear(state),
    getCheckedNodes: getCheckedNodes(state),
    deleteTag: deleteTag({ emit, state }),
    handleDropdownLeave: handleDropdownLeave(state),
    focusFirstNode: focusFirstNode({ refs, state }),
    computClearVisible: computClearVisible({ props, state }),
    showPlaceholder: showPlaceholder({ props, state, t, constants }),
    updateStyle: updateStyle({ parent, refs, state, updatePopper, nextTick, props }),
    getSuggestions: getSuggestions({ nextTick, props, state, updatePopper }),
    handleExpandChange: handleExpandChange({ constants, emit, dispatch, nextTick, state, updatePopper }),
    getConfig: getConfig({ parent, props }),
    setInputHeightToTag: setInputHeightToTag({ nextTick, parent, state }),
    handleSuggestionClick: handleSuggestionClick({ api, state }),
    handleDelete: handleDelete({ api, state }),
    computePresentText: computePresentText({ props, state }),
    handleSuggestionKeyDown: handleSuggestionKeyDown({ api }),
    handleInput: handleInput({ api, state, refs }),
    handleKeyDown: handleKeyDown({ api }),
    watchValue: watchValue({ api, state }),
    computePresentTags: computePresentTags({ api, props, state }),
    computePresentContent: computePresentContent({ api, state }),
    watchCheckedValue: watchCheckedValue({ api, emit, state }),
    toggleDropDownVisible: toggleDropDownVisible({ emit, nextTick, refs, state, updatePopper }),
    selfMounted: selfMounted({ api, parent, props, refs, state }),
    handleBeforeUpdate: handleBeforeUpdate({ props, api, state }),
    handleBlur: handleBlur({ constants, dispatch, emit, state, api, props }),
    calcCollapseTags: calcCollapseTags({ refs, state, nextTick }),
    watchInputHover: watchInputHover({ refs }),
    handleMouseenter: handleMouseenter({ refs, state }),
    handleMouseleave: handleMouseleave({ state })
  })
}

const initWatch = ({ watch, state, api, props, nextTick, updatePopper }) => {
  watch(() => state.disabled, api.computePresentContent)

  watch(() => props.modelValue, api.watchValue)

  watch(() => state.checkedValue, api.watchCheckedValue)

  watch(
    () => props.options,
    () => nextTick(api.computePresentContent),
    { deep: true, immediate: true }
  )

  watch(
    () => state.presentText,
    (value) => presentTextHandler({ state, value })
  )

  watch(
    () => state.presentTags,
    (value, oldvalue) => {
      state.multiple && (value.length || oldvalue.length) && nextTick(() => api.updateStyle())
    }
  )

  watch(
    () => state.filtering,
    () => nextTick(() => updatePopper())
  )

  watch(() => state.multiple, api.setInputHeightToTag)

  watch(
    () => state.dropDownVisible,
    (value) => value && setTimeout(() => updatePopper())
  )

  watch(
    () => Array.isArray(state.checkedValue) && state.checkedValue.length,
    () => setTimeout(() => updatePopper())
  )

  watch([() => state.inputHover, () => state.dropDownVisible], api.watchInputHover)
}

export const renderless = (
  props,
  { computed, onMounted, onBeforeUnmount, onDeactivated, onUpdated, onBeforeUpdate, reactive, toRefs, watch, inject },
  { t, refs, emit, nextTick, constants, parent, slots, dispatch }
) => {
  parent.tinyForm = parent.tinyForm || inject('form', null)

  const { updatePopper } = userPopper({
    reactive,
    watch,
    emit,
    props: {
      ...props,
      placement: DATEPICKER.PlacementMap.left,
      popperOptions: { boundariesPadding: 0, gpuAcceleration: false },
      visibleArrow: true,
      offset: 0,
      boundariesPadding: 5,
      arrowOffset: 35
    },
    toRefs,
    refs,
    slots,
    nextTick,
    onBeforeUnmount,
    onDeactivated
  })

  const api = {}
  const state = initState({ reactive, props, computed, parent, api, t, constants, refs, inject })

  initApi({ api, state, constants, dispatch, emit, refs, props, updatePopper, nextTick, parent, t })

  initWatch({ watch, state, api, props, nextTick, updatePopper })

  onBeforeUpdate(api.handleBeforeUpdate)
  onUpdated(api.updateStyle)
  onMounted(api.selfMounted)

  parent.$on('handle-clear', (event) => {
    api.handleClear(event)
  })

  onBeforeUnmount(() => removeResizeListener(parent.$el, api.updateStyle))

  return api
}
