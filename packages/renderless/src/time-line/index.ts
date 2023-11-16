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
import type {
  ITimelineProps,
  ITimelineRenderlessParams,
  ITimelineItem,
  ITimelineStatusCls,
  ITimelineCustomCls
} from '@/types'

export const getDate = (dateTime: string): { date: string; time: string } => ({
  date: format(dateTime, 'yyyy-MM-dd'),
  time: format(dateTime, 'hh:mm')
})

export const getStatus =
  ({ state, t }: Pick<ITimelineRenderlessParams, 'state' | 't'>) =>
  (value: number): string => {
    const status = state.current - value

    return status > 0 ? t('ui.steps.done') : status === 0 ? t('ui.steps.doing') : t('ui.steps.wait')
  }

export const computedSpace =
  ({ props }: Pick<ITimelineRenderlessParams, 'props'>) =>
  (): string | number => {
    const { space } = props
    if (/^\d+$/.test(space)) {
      return `${space}px`
    }

    return space
  }

export const handleClick =
  ({ emit, state }: Pick<ITimelineRenderlessParams, 'emit' | 'state'>) =>
  ({ index, node }: { index: number; node: ITimelineItem }): void => {
    if (!node.disabled) {
      emit('click', state.isReverse ? state.nodes.length - index - 1 : index, node)
    }
  }

export const getStatusCls =
  ({ constants, state }: Pick<ITimelineRenderlessParams, 'constants' | 'state'>) =>
  (index: number, node?: ITimelineItem): ITimelineStatusCls => {
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

export const computedData =
  ({ props, state }: Pick<ITimelineRenderlessParams, 'props' | 'state'>) =>
  (): ITimelineItem[] => {
    if (props.data) {
      return state.isReverse
        ? props.data.map((item, i) => ({ ...props.data[props.data.length - 1 - i], index: i }))
        : props.data.map((item, i) => ({ ...item, index: i }))
    }

    return state.timelineItems
  }

export const computedCurrent =
  ({ props, state }: Pick<ITimelineRenderlessParams, 'props' | 'state'>) =>
  (): number =>
    state.isReverse ? state.nodes.length - props.active - 1 : props.active

export const computedIsReverse = (props: ITimelineProps) => (): boolean => props.reverse && props.vertical

export const computedStackNodes =
  ({ state, constants }: Pick<ITimelineRenderlessParams, 'state' | 'constants'>) =>
  (): ITimelineItem[] => {
    if (state.nodes.length >= constants.STACK_NODES_MAX) {
      state.showData = true
      return state.nodes.slice(0, constants.LIMITED_STACK_NODES)
    }
    return state.nodes
  }

export const changeStatus =
  ({ state }: Pick<ITimelineRenderlessParams, 'state'>) =>
  (): boolean => {
    state.showAll = !state.showAll
    return state.showAll
  }

export const computedWrapperClass =
  ({ props }: Pick<ITimelineRenderlessParams, 'props'>) =>
  (): ITimelineCustomCls => {
    const { vertical, reverse, textPosition, showDivider } = props
    const wrapperClass = [] as ITimelineCustomCls

    if (vertical) {
      wrapperClass.push('tiny-steps-timeline', { reverse, 'tiny-timeline__shape-dot': props.shape === 'dot' })
    } else {
      wrapperClass.push('tiny-steps-normal', textPosition === 'right' ? 'text-right' : 'text-bottom')
    }

    if (showDivider && textPosition === 'right') {
      wrapperClass.push('show-divider')
    }

    return wrapperClass
  }

export const toggleFold =
  ({ props }) =>
  (node: ITimelineItem): boolean => {
    const isFold = !props.data[node.index].fold
    props.data[node.index].fold = isFold
    return isFold
  }