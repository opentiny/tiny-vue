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
  IActionMenuApi,
  IActionMenuProps,
  IActionMenuState,
  ISharedRenderlessParamHooks,
  IActionMenuRenderlessParamUtils
} from '@/types'
import {
  handleMoreClick,
  handleItemClick,
  visibleChange,
  computedMaxShowNum,
  computedSpacing,
  computedMoreText,
  computedSuffixIcon
} from './index'

export const api = ['state', 'handleMoreClick', 'handleItemClick', 'visibleChange']

export const renderless = (
  props: IActionMenuProps,
  { computed, reactive }: ISharedRenderlessParamHooks,
  { emit, t, designConfig }: IActionMenuRenderlessParamUtils
): IActionMenuApi => {
  const api = {} as IActionMenuApi

  const state: IActionMenuState = reactive({
    visibleOptions: computed(() => props.options.slice(0, state.maxShowNum)),
    isCardMode: computed(() => props.mode === 'card'),
    moreOptions: computed(() => props.options.slice(state.maxShowNum)),
    spacing: computed(() => api.computedSpacing()),
    maxShowNum: computed(() => api.computedMaxShowNum()),
    moreText: computed(() => api.computedMoreText()),
    suffixIcon: computed(() => api.computedSuffixIcon())
  })

  Object.assign(api, {
    state,
    handleMoreClick: handleMoreClick(emit),
    handleItemClick: handleItemClick(emit),
    visibleChange: visibleChange(emit),
    computedMaxShowNum: computedMaxShowNum({ props, state }),
    computedSpacing: computedSpacing({ props, state, designConfig }),
    computedMoreText: computedMoreText({ props, state, t }),
    computedSuffixIcon: computedSuffixIcon({ props, state })
  })

  return api
}
