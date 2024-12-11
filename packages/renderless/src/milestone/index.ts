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
  IMilestoneRenderlessParams,
  IMilestoneGetMileContentParams,
  IMilestonePropsDataFlags,
  IMilestoneHandleFlagClickParams,
  IMilestoneHandleClickParams,
  IMilestoneNode,
  IMilestoneIconStyle,
  IMilestoneFlagOperateParams
} from '@/types'

export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  if (hex.includes('var')) {
    hex = hex.replace(/var\(|\)/g, '')
    hex = getComputedStyle(document.documentElement).getPropertyValue(hex)
  }
  hex = hex.replace(/\s*#/g, '')

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16)
  }
}

export const handleClick =
  ({ emit }: Pick<IMilestoneRenderlessParams, 'emit'>) =>
  ({ index, node }: IMilestoneHandleClickParams) => {
    emit('click', index, node)
  }

/* istanbul ignore next */
export const flagOperate =
  ({ constants, refs, state }: Pick<IMilestoneRenderlessParams, 'constants' | 'refs' | 'state'>) =>
  ({ event, over, text }: IMilestoneFlagOperateParams) => {
    const tooltip = refs.tooltip

    if (over) {
      const textEl = event.target.querySelector(constants.FLAG_CONTENT_CLS)

      state.tipContent = text
      tooltip.state.referenceElm = event.target
      tooltip.doDestroy()
      tooltip.setExpectedState(true)
      textEl && textEl.scrollWidth > textEl.clientWidth && tooltip.handleShowPopper()
    } else {
      tooltip.setExpectedState(false)
      tooltip.handleClosePopper()
    }
  }

export const getMileIcon =
  ({ constants, props }: Pick<IMilestoneRenderlessParams, 'constants' | 'props'>) =>
  (node: IMilestoneNode): IMilestoneIconStyle => {
    const smbConstants = {
      STATUS_COLOR_MAP: {
        DEFAULT: {
          BORDER_COLOR: '#C2C2C2',
          BACKGROUND_COLOR: '#FFFFFF',
          COLOR: '#191919',
          BOX_SHADOW_PX: '0px 0px 0px 4px',
          FLAG_CONTENT_CLS: '.content'
        },
        COMPLETED: {
          BORDER_COLOR: '#191919',
          BACKGROUND_COLOR: '#FFFFFF',
          COLOR: '#191919',
          BOX_SHADOW_PX: '0px 0px 0px 4px',
          FLAG_CONTENT_CLS: '.content'
        },
        DOING: {
          BORDER_COLOR: '#191919',
          BACKGROUND_COLOR: '#191919',
          COLOR: '#FFFFFF',
          BOX_SHADOW_PX: '0px 0px 0px 4px',
          FLAG_CONTENT_CLS: '.content'
        }
      }
    }
    const status = node[props.statusField]
    // 状态色
    const statusColor = props.milestonesStatus[status]

    if (props.solid || status === constants.STATUS_MAP.DOING) {
      return {
        'background-color': statusColor || smbConstants.STATUS_COLOR_MAP.DOING.BACKGROUND_COLOR + '!important',
        color: smbConstants.STATUS_COLOR_MAP.DOING.COLOR + '!important',
        'border-color': statusColor || smbConstants.STATUS_COLOR_MAP.DOING.BORDER_COLOR,
        boxShadow: 'unset'
      }
    }

    if (status === constants.STATUS_MAP.COMPLETED) {
      return {
        'background-color': smbConstants.STATUS_COLOR_MAP.COMPLETED.BACKGROUND_COLOR + '!important',
        color: statusColor || smbConstants.STATUS_COLOR_MAP.COMPLETED.COLOR + '!important',
        'border-color': statusColor || smbConstants.STATUS_COLOR_MAP.COMPLETED.BORDER_COLOR,
        boxShadow: 'unset'
      }
    }

    return {
      background: smbConstants.STATUS_COLOR_MAP.DEFAULT.BACKGROUND_COLOR + '!important',
      color: statusColor || smbConstants.STATUS_COLOR_MAP.DEFAULT.COLOR + '!important',
      'border-color': statusColor || smbConstants.STATUS_COLOR_MAP.DEFAULT.BORDER_COLOR,
      boxShadow: 'unset'
    }
  }

export const getMileContent =
  (props: IMilestoneRenderlessParams['props']) =>
  ({ data, index }: IMilestoneGetMileContentParams): IMilestonePropsDataFlags[] => {
    const content = data[props.flagBefore ? index : index + 1][props.flagField]
    return Array.isArray(content) ? content : []
  }

export const getLineColor =
  (props: IMilestoneRenderlessParams['props']) =>
  (status: string): { background: string } => {
    let background = ''

    if (status) {
      if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(props.lineStyle)) {
        background = props.lineStyle
      }

      if (props.lineStyle === 2) {
        background = props.milestonesStatus[status]
      } else if (props.lineStyle === 1) {
        background = status === props.completedField ? props.milestonesStatus[status] : ''
      }

      background += ' !important'
    }

    return { background }
  }

export const handleFlagClick =
  (emit: IMilestoneRenderlessParams['emit']) =>
  ({ idx, flag }: IMilestoneHandleFlagClickParams) => {
    emit('flagclick', idx, flag) // deprecated 原事件flagclick v3.5.0废弃，v3.17.0移除；移除原因：命名规范
    emit('flag-click', idx, flag)
  }

export const getFlagStyle =
  (props) =>
  ({ index, idx }) => {
    return {
      left: `calc(${(100 / props.data[props.flagBefore ? index : index + 1][props.flagField].length) * idx}%  + ${
        idx * 8
      }px)`
    }
  }
