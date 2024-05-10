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
  ICollapseItemProps,
  ICollapseItemState,
  ICollapseItemApi,
  ISharedRenderlessParamHooks,
  ICollapseItemRenderlessParamUtils
} from '@/types'
import { handleFocus, handleEnterClick, handleHeaderClick } from './index'
import { guid } from '../common/string'

export const api = ['state', 'isActive', 'handleFocus', 'handleEnterClick', 'handleHeaderClick']

export const renderless = (
  props: ICollapseItemProps,
  { computed, reactive }: ISharedRenderlessParamHooks,
  { parent, constants, dispatch }: ICollapseItemRenderlessParamUtils
) => {
  const _constants = parent.collapse?._constants || parent._constants
  const componentName = _constants.COMPONENT_NAME.Collapse
  const eventName = _constants.EVENT_NAME.CollapseItemClick
  const state: ICollapseItemState = reactive({
    id: guid(),
    isClick: false,
    focusing: false,
    contentHeight: 0,
    contentWrapStyle: { height: 'auto', display: 'block' },
    isActive: computed(
      () => parent.collapse?.state.activeNames.includes(props.name) || parent?.state?.activeNames?.includes(props.name)
    )
  })

  const api: ICollapseItemApi = {
    state,
    handleFocus: handleFocus({ state, interval: constants.INTERVAL }),
    handleEnterClick: handleEnterClick({ componentName, dispatch, eventName, parent }),
    handleHeaderClick: handleHeaderClick({ componentName, dispatch, eventName, props, parent, state })
  }

  return api
}
