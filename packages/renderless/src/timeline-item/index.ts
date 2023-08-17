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

import { format } from '../common/date'

export const getDate = (dateTime) => ({
  date: format(dateTime, 'yyyy-MM-dd'),
  time: format(dateTime, 'hh:mm')
})

export const getStatus =
  ({ state, t }) =>
  (value) => {
    const status = state.current - value

    return status > 0 ? t('ui.steps.done') : status === 0 ? t('ui.steps.doing') : t('ui.steps.wait')
  }

export const computedSpace =
  ({ props, api }) =>
  () => {
    const space = props.space || api.rootProps.space
    if (/^\d+$/.test(space)) {
      return `${space}px`
    }

    return space
  }

export const handleClick =
  ({ emit, state }) =>
  (node) => {
    const { index } = node || {}
    if (!node.disabled) {
      emit('click', state.isReverse ? state.nodesLength - index - 1 : index, node)
    }
  }

export const getStatusCls =
  ({ constants, state }) =>
  (node?) => {
    const { index } = node || {}

    const { PROCESS_DONE_CLS, PROCESS_CUR_CLS, PROCESS_WAIT_CLS, PROCESS_DISABLED_CLS, PROCESS_ERROR_CLS } = constants
    const cls = {}
    const reverse = state.isReverse

    if (node?.disabled) {
      cls[PROCESS_DISABLED_CLS] = true
    } else if (node?.error) {
      cls[PROCESS_ERROR_CLS] = true
    } else {
      cls[PROCESS_DONE_CLS] = reverse ? index > state.current : index < state.current
      cls[PROCESS_CUR_CLS] = index === state.current
      cls[PROCESS_WAIT_CLS] = reverse ? index < state.current : index > state.current
    }

    return cls
  }

export const computedCurrent =
  ({ state, api }) =>
  () =>
    state.isReverse ? state.nodesLength - api.rootProps.active - 1 : api.rootProps.active

export const computedIsReverse = (api) => () => api.rootProps.reverse && api.rootProps.vertical

export const computedItemCls =
  ({ props, api }) =>
  () => {
    const itemClass: (string | object)[] = []
    if (api.rootProps.vertical) {
      itemClass.push('timeline')
    } else {
      itemClass.push('normal')
    }

    itemClass.push(api.getStatusCls(props.node))
    return itemClass
  }

export const computedItemStyle =
  ({ props, state, api }) =>
  () => {
    const { index } = props.node
    const { computedSpace, nodesLength } = state
    const { textPosition, vertical } = api.rootProps

    if (vertical) {
      return { height: index === nodesLength - 1 ? '' : computedSpace || '88px' }
    }

    if (textPosition === 'right') {
      if (computedSpace) {
        return { flex: `0 0 ${computedSpace}` }
      }

      return null
    }

    return { width: computedSpace || 100 / nodesLength + '%' }
  }
