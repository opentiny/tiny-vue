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
import type {
  ICascaderProps,
  ICascaderApi,
  ICascaderState,
  ICascaderConstants,
  ISharedRenderlessFunctionParams,
  ICascadeRenderlessParamUtils
} from '@/types'

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
  'handleMouseleave',
  'computePresentContent'
]

const initState = ({
  reactive,
  props,
  computed,
  parent,
  api,
  t,
  constants,
  vm,
  inject
}: {
  reactive: ISharedRenderlessFunctionParams<null>['reactive']
  props: ICascaderProps
  computed: ISharedRenderlessFunctionParams<null>['computed']
  parent: ICascadeRenderlessParamUtils['parent']
  api: ICascaderApi
  t: ICascadeRenderlessParamUtils['t']
  constants: ICascaderConstants
  vm: ICascadeRenderlessParamUtils['vm']
  inject: ISharedRenderlessFunctionParams<null>['inject']
}) => {
  const state = reactive({
    showAutoWidth: inject('showAutoWidth', null),
    /** popper 元素是否显示。 它是通过v-show 绑定到页面上，造成隐藏时，popperJs并没有destory,有一定的性能影响 */
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
    isDisplayOnly: computed(() => state.displayOnly || (parent.tinyForm || {}).displayOnly),
    config: computed(() => api.getConfig()),
    multiple: computed(() => state.config.multiple),
    leafOnly: computed(() => !state.config.checkStrictly),
    readonly: computed(() => !props.filterable || state.multiple),
    clearBtnVisible: computed(() => api.computClearVisible()),
    panel: computed(() => vm.$refs.panel),
    placeholder: computed(() => props.placeholder || t(constants.placeholder)),
    inputValues: computed(() => (state.multiple ? state.presentText : state.inputValue)),
    collapseTagsLength: 0,
    isHidden: false,
    tooltipVisible: false,
    tooltipContent: ''
  })

  return state as ICascaderState
}

const initApi = ({
  api,
  state,
  constants,
  dispatch,
  emit,
  vm,
  props,
  updatePopper,
  nextTick,
  parent,
  t
}: {
  api: ICascaderApi
  state: ICascaderState
  constants: ICascaderConstants
  dispatch: ICascadeRenderlessParamUtils['dispatch']
  emit: ICascadeRenderlessParamUtils['emit']
  vm: ICascadeRenderlessParamUtils['vm']
  props: ICascaderProps
  updatePopper: (popperElm?: HTMLElement | undefined) => void
  nextTick: ICascadeRenderlessParamUtils['nextTick']
  parent: ICascadeRenderlessParamUtils['parent']
  t: ICascadeRenderlessParamUtils['t']
}) => {
  Object.assign(api, {
    state,
    handleFocus: handleFocus(emit),
    handleClear: handleClear(state),
    getCheckedNodes: getCheckedNodes(state),
    deleteTag: deleteTag({ emit, state, api }),
    handleDropdownLeave: handleDropdownLeave(state),
    focusFirstNode: focusFirstNode({ vm, state }),
    computClearVisible: computClearVisible({ props, state }),
    showPlaceholder: showPlaceholder({ props, state, t, constants }),
    updateStyle: updateStyle({ parent, vm, state, updatePopper, nextTick, props }),
    getSuggestions: getSuggestions({ nextTick, props, state, updatePopper }),
    handleExpandChange: handleExpandChange({ constants, emit, dispatch, nextTick, state, updatePopper }),
    getConfig: getConfig({ parent, props }),
    setInputHeightToTag: setInputHeightToTag({ nextTick, parent, state }),
    handleSuggestionClick: handleSuggestionClick({ api, state }),
    handleDelete: handleDelete({ api, state }),
    computePresentText: computePresentText({ props, state }),
    handleSuggestionKeyDown: handleSuggestionKeyDown({ api }),
    handleInput: handleInput({ api, state, vm }),
    handleKeyDown: handleKeyDown({ api }),
    watchValue: watchValue({ api, state }),
    computePresentTags: computePresentTags({ api, props, state }),
    computePresentContent: computePresentContent({ api, state }),
    watchCheckedValue: watchCheckedValue({ constants, dispatch, api, nextTick, emit, state }),
    toggleDropDownVisible: toggleDropDownVisible({ emit, vm, state, updatePopper }),
    selfMounted: selfMounted({ api, parent, props, vm, state }),
    handleBeforeUpdate: handleBeforeUpdate({ props, api, state }),
    handleBlur: handleBlur({ emit, api, props }),
    calcCollapseTags: calcCollapseTags({ vm, state, nextTick }),
    watchInputHover: watchInputHover({ vm }),
    handleMouseenter: handleMouseenter({ vm, state }),
    handleMouseleave: handleMouseleave({ state })
  })
}

const initWatch = ({
  watch,
  state,
  api,
  props,
  nextTick,
  updatePopper
}: {
  watch: ISharedRenderlessFunctionParams<null>['watch']
  state: ICascaderState
  api: ICascaderApi
  props: ICascaderProps
  nextTick: ICascadeRenderlessParamUtils['nextTick']
  updatePopper: (popperElm?: HTMLElement | undefined) => void
}) => {
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
  props: ICascaderProps,
  {
    computed,
    onMounted,
    onBeforeUnmount,
    onDeactivated,
    onUpdated,
    onBeforeUpdate,
    reactive,
    toRefs,
    watch,
    inject
  }: ISharedRenderlessFunctionParams<null>,
  { t, emit, nextTick, constants, parent, slots, dispatch, vm }: ICascadeRenderlessParamUtils
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
      visibleArrow: false,
      offset: 0,
      boundariesPadding: 5,
      arrowOffset: 35
    },
    toRefs,
    vm,
    slots,
    nextTick,
    onBeforeUnmount,
    onDeactivated
  } as any)

  const api: Partial<ICascaderApi> = {}
  const state = initState({ reactive, props, computed, parent, api: api as ICascaderApi, t, constants, vm, inject })

  initApi({ api: api as ICascaderApi, state, constants, dispatch, emit, vm, props, updatePopper, nextTick, parent, t })

  initWatch({ watch, state, api: api as ICascaderApi, props, nextTick, updatePopper })

  onBeforeUpdate((api as ICascaderApi).handleBeforeUpdate)
  onUpdated((api as ICascaderApi).updateStyle)
  onMounted((api as ICascaderApi).selfMounted)

  parent.$on('handle-clear', (event: ICascaderState) => {
    ;(api as ICascaderApi).handleClear(event)
  })

  onBeforeUnmount(() => removeResizeListener(parent.$el, api.updateStyle))

  return api
}
