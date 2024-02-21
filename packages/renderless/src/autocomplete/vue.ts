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

import debounce from '../common/deps/debounce'
import userPopper from '../common/deps/vue-popper'
import type { Ref } from 'vue'
import { guid } from '../common/string'
import {
  computedVisible,
  watchVisible,
  mounted,
  getData,
  handleChange,
  handleFocus,
  handleBlur,
  handleClear,
  close,
  open,
  handleKeyEnter,
  select,
  highlight
} from './index'
import type {
  IAutoCompleteProps,
  IAutoCompleteState,
  IAutoCompleteApi,
  ISharedRenderlessFunctionParams,
  IAutoCompleteRenderlessParamUtils
} from '@/types'

export const api = [
  'state',
  'select',
  'suggestionState',
  'getInput',
  'handleChange',
  'close',
  'open',
  'handleFocus',
  'handleBlur',
  'handleClear',
  'handleKeyEnter',
  'highlight',
  'select',
  'doDestroy'
]

const initState = ({
  reactive,
  $prefix,
  computed,
  inject
}: {
  reactive: ISharedRenderlessFunctionParams<null>['reactive']
  $prefix: string
  computed: ISharedRenderlessFunctionParams<null>['computed']
}) => {
  const state = reactive<IAutoCompleteState>({
    showAutoWidth: inject('showAutoWidth', null),
    popperElm: null,
    activated: false,
    suggestions: [],
    loading: false,
    highlightedIndex: -1,
    suggestionDisabled: false,
    id: $prefix + '-' + guid(),
    suggestionVisible: computed(() => computedVisible(state))
  })

  return state as IAutoCompleteState
}

export const initSuggestionState = ({
  reactive,
  parent,
  showPopper,
  popperElm,
  referenceElm
}: {
  reactive: ISharedRenderlessFunctionParams<null>['reactive']
  parent: IAutoCompleteRenderlessParamUtils['parent']
  showPopper: Ref<boolean>
  popperElm: Ref<HTMLElement>
  referenceElm: Ref<HTMLElement>
}) => {
  return reactive({
    parent,
    dropdownWidth: '',
    showPopper,
    popperElm,
    referenceElm
  })
}

const initApi = ({ api, state, doDestroy, suggestionState, emit, vm, props, updatePopper, nextTick, constants }) => {
  api.getData = getData({ props, state, updatePopper, nextTick })

  Object.assign(api, {
    state,
    doDestroy,
    suggestionState,
    close: close(state),
    open: open(api),
    handleBlur: handleBlur({ emit, state }),
    mounted: mounted({ vm, state, suggestionState }),
    highlight: highlight({ constants, vm, state }),
    handleClear: handleClear({ emit, state }),
    select: select({ emit, nextTick, props, state }),
    watchVisible: watchVisible({ suggestionState, vm }),
    handleChange: handleChange({ api, emit, state, props }),
    handleFocus: handleFocus({ api, emit, props, state }),
    handleKeyEnter: handleKeyEnter({ api, emit, nextTick, props, state }),
    debouncedGetData: debounce(props.debounce, api.getData)
  })
}

export const renderless = (
  props: IAutoCompleteProps,
  {
    computed,
    onBeforeUnmount,
    onMounted,
    reactive,
    watch,
    toRefs,
    onDeactivated,
    inject
  }: ISharedRenderlessFunctionParams<null>,
  { $prefix, vm, parent, emit, constants, nextTick, slots }: IAutoCompleteRenderlessParamUtils
) => {
  const api: Partial<IAutoCompleteApi> = {}
  const state = initState({ reactive, $prefix, computed, inject })

  const { showPopper, popperElm, referenceElm, doDestroy, updatePopper } = userPopper({
    reactive,
    watch,
    vm,
    emit,
    slots,
    nextTick,
    props,
    onBeforeUnmount,
    toRefs,
    onDeactivated
  } as any)

  const suggestionState = initSuggestionState({ reactive, parent, showPopper, popperElm, referenceElm })

  initApi({ api, state, doDestroy, suggestionState, emit, vm, props, updatePopper, nextTick, constants })

  watch(() => state.suggestionVisible, (api as IAutoCompleteApi).watchVisible)

  onMounted((api as IAutoCompleteApi).mounted)

  return api
}
