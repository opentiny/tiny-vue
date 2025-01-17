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

import type { ExtractPropTypes } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'
import type { computedFontSize, computedLabel, computedMessage, computedStyle, getInternalValue } from './renderless'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const $constants = {
  ITEM_NAME: '.user-head-item'
}

export const userHeadProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  /**
   * @property {Boolean} [min=false] - 小尺寸模式
   */
  min: Boolean,

  /**
   * @property {Boolean} [round=true] - 圆形模式
   */
  round: Boolean,

  /**
   * @property {String} [color=#ffffff] - 文字颜色
   */
  color: {
    type: String,
    default: '#ffffff'
  },

  /**
   * @property {String} [backgroundColor=#BBBBBB] - 背景色
   */
  backgroundColor: {
    type: String,
    default: '#B5BBC1'
  },

  /**
   * @property {String} [type=label] - 头像类型，icon|image|label 可选
   */
  type: {
    type: String,
    default: 'label',
    validator: (value: string) => Boolean(~['icon', 'image', 'label'].indexOf(value))
  },

  /**
   * @property {String} - 头像资源
   * type=icon 时为图标类名，type=label时为字体串，type=image时为资源路径
   */
  value: {
    type: [Object, String],
    default: null
  },

  /**
   * @property {String} - 头像资源
   * type=icon 时为图标类名，type=label时为字体串，type=image时为资源路径
   */
  modelValue: {
    type: [Object, String],
    default: null
  },

  /**
   * @property {Number} - 消息计数
   */
  messageTotal: [Number, String],

  /**
   * @property {String} [messageType=details] - 消息类型 details|basic 可选
   */
  messageType: {
    type: String,
    default: 'details',
    validator: (value: string) => Boolean(~['details', 'basic'].indexOf(value))
  },

  /**
   * @property {Number} [messageUpperLimit=0] - 消息显示上限
   */
  messageUpperLimit: {
    type: Number,
    default: 0
  },
  size: {
    type: Number,
    default: 40
  }
}

export interface IUserHeadState {
  internalValue: string | Record<string, any>
  label: string
  style: ReturnType<ReturnType<typeof computedStyle>>
  message: string
  fontSize: { fontSize: string }
  size: number
  color: string
  backgroundColor: string
}

export type IUserHeadProps = ExtractPropTypes<typeof userHeadProps>

export type IUserHeadConstants = typeof $constants

export type IUserHeadRenderlessParams = ISharedRenderlessFunctionParams<IUserHeadConstants> & {
  api: IUserHeadApi
  state: IUserHeadState
  props: IUserHeadProps
}

export interface IUserHeadApi {
  state: IUserHeadState
  computedLabel: ReturnType<typeof computedLabel>
  computedStyle: ReturnType<typeof computedStyle>
  computedMessage: ReturnType<typeof computedMessage>
  computedFontSize: ReturnType<typeof computedFontSize>
  getInternalValue: ReturnType<typeof getInternalValue>
  handleClick: (event: Event) => void
  mouseEnter: (event: Event) => void
}

export type IUserHeadRenderlessParamUtils = ISharedRenderlessParamUtils<IUserHeadConstants>
