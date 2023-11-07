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

import { ICollapseItemRenderlessParams } from '@/types'

export const handleFocus =
  ({ state, interval }: Pick<ICollapseItemRenderlessParams, 'state' | 'interval'>) =>
  () => {
    setTimeout(() => {
      if (!state.isClick) {
        state.focusing = true
      } else {
        state.isClick = false
      }
    }, interval)
  }

export const handleHeaderClick =
  ({
    componentName,
    dispatch,
    eventName,
    props,
    parent,
    state
  }: Pick<ICollapseItemRenderlessParams, 'componentName' | 'dispatch' | 'eventName' | 'props' | 'parent' | 'state'>) =>
  () => {
    if (props.disabled) {
      return
    }

    dispatch(componentName, eventName, parent)

    state.focusing = false
    state.isClick = true
  }

export const handleEnterClick =
  ({
    componentName,
    dispatch,
    eventName,
    parent
  }: Pick<ICollapseItemRenderlessParams, 'componentName' | 'dispatch' | 'eventName' | 'parent'>) =>
  () =>
    dispatch(componentName, eventName, parent)
