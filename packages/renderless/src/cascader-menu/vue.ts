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
  ICascaderMenuState,
  ICascaderMenuProps,
  ISharedRenderlessParamHooks,
  ICascaderMenuApi,
  ICascaderMenuRenderlessParamUtils
} from '@/types'
import { handleExpand, handleMouseMove, clearHoverZone } from './index'
import { CASCADER } from '../common'
import { random } from '../common/string'

export const api = ['state', 'handleMouseMove', 'handleExpand']

export const renderless = (
  props: ICascaderMenuProps,
  { computed, reactive }: ISharedRenderlessParamHooks,
  { vm, parent }: ICascaderMenuRenderlessParamUtils
): ICascaderMenuApi => {
  const refs = vm.$refs
  const api = {} as ICascaderMenuApi
  const state: ICascaderMenuState = reactive({
    activeNode: null,
    hoverTimer: null,
    id: Math.floor(random() * 10000),
    isEmpty: computed(() => !props.nodes.length),
    menuId: computed(() => `${CASCADER.MenuConnector}${state.id}-${props.index}`)
  })

  Object.assign(api, {
    state,
    clearHoverZone: clearHoverZone(refs),
    handleExpand: handleExpand(state),
    handleMouseMove: handleMouseMove({ api, parent, refs, state, svg: CASCADER.SvgStr })
  })

  return api
}
