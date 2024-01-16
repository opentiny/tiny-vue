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
  ICollapseProps,
  ICollapseState,
  ICollapseApi,
  ISharedRenderlessParamHooks,
  ICollapseRenderlessParamUtils
} from '@/types'

import { setActiveNames, handleItemClick } from './index'

export const api = ['state']

export const renderless = (
  props: ICollapseProps,
  { reactive, watch }: ISharedRenderlessParamHooks,
  { parent, emit, constants }: ICollapseRenderlessParamUtils
) => {
  const eventName = constants.EVENT_NAME.CollapseItemClick

  const state: ICollapseState = reactive({
    activeNames: []
  })

  const api: ICollapseApi = {
    state,
    setActiveNames: setActiveNames({ emit, props, state })
  }

  api.handleItemClick = handleItemClick({ api, props, state })

  watch(
    () => props.modelValue,
    (value, oldValue) => {
      if (value !== oldValue && oldValue) {
        emit('change', value)
      }
      state.activeNames = value || value === 0 ? [].concat(value) : []
    },
    { immediate: true, deep: true }
  )

  parent.$on(eventName, api.handleItemClick)

  return api
}
