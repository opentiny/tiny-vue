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

  const state: ICollapseState = reactive<{
    activeNames: any[]
  }>({
    activeNames: []
  })

  const api: ICollapseApi = {
    state,
    setActiveNames: setActiveNames({ emit, props, state }),
    handleItemClick: () => {}
  }

  api.handleItemClick = handleItemClick({ api, props, state })
  watch(
    () => props.modelValue,
    (value, oldValue) => {
      if (Array.isArray(value)) {
        if (value && value !== oldValue && oldValue) {
          try {
            value.forEach((val) => {
              let result = props.beforeClose ? props.beforeClose(val || null, state.activeNames, null) : true
              if (!result) {
                throw new Error('error')
              }
            })
          } catch (e) {
            return
          }
        }

        state.activeNames = value as string[]
      } else {
        if (value && value !== oldValue && oldValue) {
          let result = props.beforeClose ? props.beforeClose(value || null, state.activeNames, null) : true
          if (!result) {
            return
          }
        }
        state.activeNames = [value as string]
      }
    },
    { immediate: true, deep: true }
  )

  parent.$on(eventName, api.handleItemClick)

  return api
}
