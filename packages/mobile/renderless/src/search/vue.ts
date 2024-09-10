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
  ISearchState,
  ISearchProps,
  ISearchApi,
  ISharedRenderlessParamHooks,
  ISearchRenderlessParamUtils
} from '@/types'

import {
  clear,
  handleChange,
  handleInput,
  showSelector,
  changeKey,
  searchClick,
  clickOutside,
  beforeDestroy,
  mounted,
  formatSearchTypes,
  setDefaultType,
  searchEnterKey,
  emitInput
} from './index'

export const api = [
  'state',
  'handleChange',
  'handleInput',
  'showSelector',
  'changeKey',
  'searchClick',
  'searchEnterKey',
  'inputStyle',
  'formatSearchTypes',
  'setDefaultType',
  'clear'
]

export const useFormatSearchTypes = ({ computed, props, reactive, toRefs, watch }) => {
  const api = {
    setDefaultType,
    formatSearchTypes
  }

  const state = reactive({
    searchValue: props.typeValue,
    types: computed(() => api.formatSearchTypes(props.searchTypes))
  })

  watch(
    () => props.typeValue,
    () => {
      state.searchValue = api.setDefaultType(props.searchTypes, props.typeValue)
    },
    { immediate: true }
  )

  return {
    api,
    state: toRefs(state)
  }
}

export const renderless = (
  props: ISearchProps,
  { computed, onBeforeUnmount, onMounted, reactive, toRefs, watch }: ISharedRenderlessParamHooks,
  { vm, parent, emit, nextTick }: ISearchRenderlessParamUtils
): ISearchApi => {
  const formatSearchTypes = useFormatSearchTypes({
    computed,
    props,
    reactive,
    toRefs,
    watch
  })

  const state: ISearchState = reactive({
    show: false,
    focus: false,
    hovering: false,
    collapse: props.mini,
    currentValue: props.modelValue,
    ...formatSearchTypes.state,
    showClear: computed(() => props.clearable && (state.focus || state.hovering) && state.currentValue),
    formItemSize: computed(() => (parent.formItem || {}).formItemSize),
    searchSize: computed(() => props.size || state.formItemSize)
  })

  const api = {
    state,
    changeKey: changeKey({ state, emit }),
    handleChange: handleChange({ emit, state }),
    showSelector: showSelector({ vm, state }),
    searchClick: searchClick({ emit, props, state }),
    clickOutside: clickOutside({ parent, props, state }),
    emitInput: emitInput({ emit }),
    ...formatSearchTypes.api
  } as ISearchApi

  Object.assign(api, {
    clear: clear({ api, emit, vm, state }),
    handleInput: handleInput({ api, props, state }),
    searchEnterKey: searchEnterKey({ api, props, vm, nextTick })
  })

  onMounted(mounted({ api }))
  onBeforeUnmount(beforeDestroy({ api }))

  watch(
    () => props.modelValue,
    (value) => (state.currentValue = value)
  )

  return api
}
