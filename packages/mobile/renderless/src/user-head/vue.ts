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

import type { IUserHeadApi, IUserHeadProps, IUserHeadRenderlessParamUtils, IUserHeadState } from 'types/user-head.type'
import {
  computedMessage,
  computedStyle,
  computedFontSize,
  computedLabel,
  getInternalValue,
  handleClick,
  mouseEnter
} from './index'
import type { ISharedRenderlessParamHooks } from 'types/shared.type'

export const api = ['state', 'handleClick', 'mouseEnter']

export const renderless = (
  props: IUserHeadProps,
  { reactive, computed, inject }: ISharedRenderlessParamHooks,
  { mode, emit }: IUserHeadRenderlessParamUtils
): IUserHeadApi => {
  const groupSize = inject('groupSize', null)

  const state: IUserHeadState = reactive({
    internalValue: computed(() => api.getInternalValue()),
    label: computed(() => api.computedLabel()),
    style: computed(() => api.computedStyle()),
    message: computed(() => api.computedMessage()),
    fontSize: computed(() => api.computedFontSize()),
    size: groupSize || props.size,
    color: inject('color', null) || props.color,
    backgroundColor: inject('backgroundColor', null) || props.backgroundColor
  })

  const api: IUserHeadApi = {
    state,
    computedLabel: computedLabel({ state, props }),
    computedStyle: computedStyle({ state, props }),
    computedMessage: computedMessage({ props }),
    computedFontSize: computedFontSize({ props, state, mode }),
    getInternalValue: getInternalValue({ props }),
    handleClick: handleClick(emit),
    mouseEnter: mouseEnter(emit)
  }

  return api
}
