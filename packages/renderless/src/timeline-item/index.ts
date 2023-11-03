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
import {
  ITimelineItemRenderlessParams,
  ITimelineItem,
  ITimelineStatusCls,
  ITimelineCustomCls,
  ITimelineItemApi
} from '@/types'

export const getDate = (dateTime: string): { date: string; time: string } => ({
  date: format(dateTime, 'yyyy-MM-dd'),
  time: format(dateTime, 'hh:mm')
})

export const getStatus =
  ({ state, t }: Pick<ITimelineItemRenderlessParams, 'state' | 't'>) =>
  (value: number): string => {
    const status = state.current - value

    return status > 0 ? t('ui.steps.done') : status === 0 ? t('ui.steps.doing') : t('ui.steps.wait')
  }

export const computedWidth =
  () =>
  (width: string | number): string | number => {
    return /^\d+$/.test(String(width)) ? `${width}px` : width || ''
  }

export const handleClick =
  ({ emit, state }: Pick<ITimelineItemRenderlessParams, 'emit' | 'state'>) =>
  (node: ITimelineItem): void => {
    const { index } = node || {}
    if (!node.disabled) {
      emit('click', state.isReverse ? state.nodesLength - index - 1 : index, node)
    }
  }

export const getStatusCls =
  ({ constants, state }: Pick<ITimelineItemRenderlessParams, 'constants' | 'state'>) =>
  (node: ITimelineItem): ITimelineStatusCls => {
    const { index } = node

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
  ({ state, api }: Pick<ITimelineItemRenderlessParams, 'state' | 'api'>) =>
  (): number =>
    state.isReverse ? state.nodesLength - api.rootProps.active - 1 : api.rootProps.active

export const computedIsReverse = (api: ITimelineItemApi) => (): boolean =>
  api.rootProps.reverse && api.rootProps.vertical

export const computedItemCls =
  ({ props, api, state }: Pick<ITimelineItemRenderlessParams, 'props' | 'api' | 'state'>) =>
  (): ITimelineCustomCls => {
    const itemClass: ITimelineCustomCls = []
    if (api.rootProps.vertical) {
      itemClass.push('timeline')
      if (props.node.type) {
        itemClass.push(`timeline-item--${props.node.type}`)
      }
    } else {
      itemClass.push('normal')
    }

    itemClass.push(api.getStatusCls(props.node))

    if (state.computedLineWidth) {
      itemClass.push('no-flex')
    }

    return itemClass
  }

export const computedItemStyle =
  ({ props, state, api }: Pick<ITimelineItemRenderlessParams, 'props' | 'state' | 'api'>) =>
  (): { width?: string | number; height?: string | number; flex?: string } | null => {
    const { index } = props.node
    const { computedSpace, nodesLength } = state
    const { textPosition, vertical } = api.rootProps

    if (vertical) {
      return { height: index === nodesLength - 1 ? '' : computedSpace }
    }

    if (textPosition === 'right') {
      if (computedSpace && !state.computedLineWidth) {
        return { flex: `0 0 ${computedSpace}` }
      }

      return null
    }

    return { width: computedSpace || 100 / nodesLength + '%' }
  }
