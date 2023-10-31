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
  IRadioGroupApi,
  IRadioGroupProps,
  IRadioGroupState,
  ISharedRenderlessParamHooks,
  IRadioGroupRenderlessParamUtils
} from '@/types'
import { handleKeydown, mounted } from './index'

export const api = ['state', 'handleKeydown']

export const renderless = (
  props: IRadioGroupProps,
  { computed, onMounted, reactive, watch, provide }: ISharedRenderlessParamHooks,
  { parent, dispatch }: IRadioGroupRenderlessParamUtils
): IRadioGroupApi => {
  const state: IRadioGroupState = reactive({
    radioGroupSize: computed(() => props.size),
    tag: 'div',
    activeStyle: props.fill
  })

  parent.$on('handleChange', (value) => {
    parent.$emit('change', value)
  })

  const api: IRadioGroupApi = {
    state,
    dispatch,
    onMounted: mounted(parent),
    handleKeydown: handleKeydown(parent)
  }

  watch(
    () => props.modelValue,
    (value) => {
      api.dispatch('FormItem', 'form.change', [value])
    }
  )

  onMounted(api.onMounted)

  provide('radioVertical', props.vertical)

  provide('showTips', props.showTips)

  provide('size', props.size)

  return api
}
