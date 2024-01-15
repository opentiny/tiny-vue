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
  ILabelState,
  ILabelProps,
  ILabelRenderlessParamUtils,
  ISharedRenderlessParamHooks,
  ILabelApi
} from '@/types'
import { handleClick, computeLabel, computeLabelClass } from './index'

export const api = ['state', 'handleClick', 'computeLabel', 'computeLabelStyle', 'computeLabelClass']

export const renderless = (
  props: ILabelProps,
  { computed, onBeforeUnmount, reactive, watch, inject }: ISharedRenderlessParamHooks,
  { emit, parent }: ILabelRenderlessParamUtils
) => {
  parent.tinyForm = parent.tinyForm || inject('form', null)

  const state: ILabelState = reactive({
    label: computed(() => api.computeLabel()),
    type: props.type,
    color: props.color,
    size: props.size,
    labelClass: computed(() => api.computeLabelClass()),
    isRequired: props.isRequired
  })

  const api: ILabelApi = {
    state,
    handleClick: handleClick({ emit, state }),
    computeLabel: computeLabel(props),
    // computeLabelStyle: computeLabelStyle(props, state),
    computeLabelClass: computeLabelClass(props)
  }

  return api
}
