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

import { IRadioApi, IRadioProps, IRadioState, ISharedRenderlessParamHooks, IRadioRenderlessParamUtils } from '@/types'
import {
  handleChange,
  isGroup,
  radioSize,
  isDisabled,
  isDisplayOnly,
  tabIndex,
  getModel,
  setModel,
  toggleEvent,
  dispatchDisplayedValue,
  getDisplayedValue
} from './index'

export const api = ['state', 'handleChange']

export const renderless = (
  props: IRadioProps,
  { onMounted, onBeforeUnmount, computed, reactive, inject, watch }: ISharedRenderlessParamHooks,
  { vm, parent, emit, constants, nextTick, dispatch }: IRadioRenderlessParamUtils
): IRadioApi => {
  parent.tinyForm = parent.tinyForm || inject('form', null)

  const api = {} as IRadioApi

  const state: IRadioState = reactive({
    vertical: inject('radioVertical', false),
    size: props.size || inject('size', null),
    focus: false,
    radioGroup: null,
    isGroup: computed(() => api.isGroup()),
    radioSize: computed(() => api.radioSize()),
    isDisabled: computed(() => api.isDisabled()),
    isDisplayOnly: computed(() => api.isDisplayOnly() || (parent.tinyForm || {}).displayOnly),
    tabIndex: computed(() => api.tabIndex()),
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    model: computed({
      get: () => api.getModel(),
      set: (val) => api.setModel(val)
    })
  })

  Object.assign(api, {
    state,
    radioSize: radioSize({ props, state }),
    getModel: getModel({ props, state }),
    isGroup: isGroup({ constants, parent, state }),
    tabIndex: tabIndex({ props, state }),
    isDisabled: isDisabled({ props, state }),
    isDisplayOnly: isDisplayOnly({ props }),
    setModel: setModel({ constants, dispatch, emit, props, vm, state }),
    handleChange: handleChange({ constants, dispatch, emit, state, nextTick }),
    dispatchDisplayedValue: dispatchDisplayedValue({ state, api, dispatch }),
    getDisplayedValue: getDisplayedValue({ vm, state, props })
  })

  watch(() => state.isDisplayOnly, api.dispatchDisplayedValue)

  onMounted(() => {
    api.dispatchDisplayedValue()
    dispatch('Tooltip', 'tooltip-update')
    toggleEvent({ props, vm, type: 'add' })
  })

  onBeforeUnmount(() => {
    toggleEvent({ props, vm, type: 'remove' })
  })

  return api
}
