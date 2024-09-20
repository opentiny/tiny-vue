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
  ICheckboxApi,
  ICheckboxProps,
  ICheckboxState,
  ISharedRenderlessParamHooks,
  ICheckboxRenderlessParams,
  ICheckboxRenderlessParamUtils
} from '@/types'
import {
  addToStore,
  removeFromStore,
  handleChange,
  computedGetModelGet,
  computedGetModelSet,
  computedIsChecked,
  computedIsGroup,
  computedStore,
  computedIsLimitDisabled,
  computedIsDisabled,
  computedIsDisplayOnly,
  computedIsGroupDisplayOnly,
  computedFormItemSize,
  computedCheckboxSize,
  computedDisplayLabel,
  mounted,
  toggleEvent,
  computedIsShowText,
  computedShowText,
  handleLabelMouseenter,
  handleMouseleave
} from './index'

export const api = ['state', 'handleChange', 'computedStore', 'handleLabelMouseenter', 'handleMouseleave']

const initState = ({ reactive, computed, parent, api, inject, props }) => {
  const state: ICheckboxState = reactive({
    size: computed(() => props.size || inject('size', null) || (parent.tinyForm || {}).size),
    vertical: inject('vertical', null),
    iconPosition: props.iconPosition || inject('iconPosition', 'center'),
    focus: false,
    selfModel: false,
    showLabel: false,
    isLimitExceeded: false,
    checkboxGroup: null,
    store: computed(() => api.computedStore()),
    isGroup: computed(() => api.computedIsGroup()),
    isChecked: computed(() => api.computedIsChecked()),
    isDisabled: computed(() => api.computedIsDisabled()),
    checkboxSize: computed(() => api.computedCheckboxSize()),
    isLimitDisabled: computed(() => api.computedIsLimitDisabled()),
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    formDisplayOnly: computed(() => (parent.tinyForm || {}).displayOnly),
    isDisplayOnly: computed(() => api.computedIsDisplayOnly()),
    isGroupDisplayOnly: computed(() => api.computedIsGroupDisplayOnly()),
    displayLabel: computed(() => api.computedDisplayLabel()),
    inputDisabled: computed(() => state.isDisabled || state.isDisplayOnly || state.isGroupDisplayOnly),
    model: computed({
      get: () => api.computedGetModelGet(),
      set: (value) => api.computedGetModelSet(value)
    }),
    showText: computed(() => api.computedShowText()),
    isShowText: computed(() => api.computedIsShowText()),
    shape: inject('shape', null) || props.shape,
    tooltipVisible: false,
    displayedValue: ''
  })

  return state
}

const initApi = ({
  api,
  state,
  dispatch,
  props,
  parent,
  constants,
  formItemSize,
  emit,
  nextTick,
  t,
  vm
}: Pick<
  ICheckboxRenderlessParams & ICheckboxRenderlessParamUtils & ISharedRenderlessParamHooks,
  'api' | 'state' | 'dispatch' | 'props' | 'parent' | 'constants' | 'formItemSize' | 'emit' | 'nextTick' | 't' | 'vm'
>) => {
  Object.assign(api, {
    state,
    addToStore: addToStore({ state, props }),
    removeFromStore: removeFromStore({ state, props }),
    computedStore: computedStore({ state, props }),
    computedFormItemSize: computedFormItemSize(props),
    computedIsChecked: computedIsChecked({ state, props }),
    computedIsLimitDisabled: computedIsLimitDisabled(state),
    computedIsDisabled: computedIsDisabled({ state, props }),
    computedIsDisplayOnly: computedIsDisplayOnly({ state, props }),
    computedIsGroupDisplayOnly: computedIsGroupDisplayOnly({ state }),
    computedGetModelGet: computedGetModelGet({ state, props }),
    computedIsGroup: computedIsGroup({ state, parent, constants }),
    computedCheckboxSize: computedCheckboxSize({ state, props, formItemSize }),
    computedGetModelSet: computedGetModelSet({ state, dispatch, emit, constants }),
    mounted: mounted({ emit, props, api, parent }),
    handleChange: handleChange({ state, props, emit, nextTick, dispatch, constants }),
    computedDisplayLabel: computedDisplayLabel({ state, props, t }),
    computedIsShowText: computedIsShowText({ props }),
    computedShowText: computedShowText({ props }),
    handleLabelMouseenter: handleLabelMouseenter({ state, vm }),
    handleMouseleave: handleMouseleave(state)
  } as Partial<ICheckboxApi>)
}

export const renderless = (
  props: ICheckboxProps,
  { computed, onMounted, onBeforeUnmount, reactive, watch, inject }: ISharedRenderlessParamHooks,
  { vm, parent, emit, constants, nextTick, dispatch, t }: ICheckboxRenderlessParamUtils
): ICheckboxApi => {
  const api = { dispatch } as ICheckboxApi
  const formItemSize = computed(() => api.computedFormItemSize())
  const state: ICheckboxState = initState({ reactive, computed, parent, api, inject, props })

  parent.tinyForm = parent.tinyForm || inject('form', null)

  initApi({ api, state, dispatch, props, parent, constants, formItemSize, emit, nextTick, t, vm })

  watch(
    () => props.modelValue,
    (value) => props.validateEvent && api.dispatch(constants.FORM_ITEM, constants.FORM_CHANGE, value)
  )

  watch(
    () => props.checked,
    (value) => {
      value ? api.addToStore() : api.removeFromStore()
    }
  )

  onBeforeUnmount(() => {
    toggleEvent({ parent, props, type: 'remove' })
  })

  onMounted(() => {
    dispatch('Tooltip', 'tooltip-update')
    toggleEvent({ parent, props, type: 'add' })
    api.mounted()
  })

  return api
}
