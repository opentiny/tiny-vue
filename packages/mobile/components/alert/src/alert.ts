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

import type { ExtractPropTypes, CSSProperties } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'

export type { ISharedRenderlessParamHooks, ITinyVm } from '@mobile-root/shared.type'

export const $constants = {
  ICON_MAP: {
    success: 'icon-success',
    error: 'icon-error',
    info: 'icon-help',
    warning: 'icon-warning'
  },
  TITLE_MAP: {
    success: 'ui.alert.success',
    error: 'ui.alert.error',
    info: 'ui.alert.info',
    warning: 'ui.alert.warning'
  },
  CONTENT_MAXHEUGHT: 252
}

export const alertProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  icon: [String, Object],
  type: {
    type: String,
    default: 'info'
  },
  size: {
    type: String,
    default: 'normal'
  },
  description: {
    type: String,
    default: ''
  },
  title: {
    type: String
  },
  center: Boolean,
  showIcon: {
    type: Boolean,
    default: true
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeText: {
    type: String,
    default: ''
  },
  singleLine: {
    type: Boolean,
    default: false
  },
  scrolling: {
    type: Boolean,
    default: false
  },
  showFoldable: {
    type: Boolean,
    default: false
  },
  customClass: [String, Object, Array],
  offset: {
    type: [Number, String],
    default: 0
  },
  autoHide: {
    type: Boolean,
    default: false
  },
  target: {
    type: String,
    default: ''
  }
}

export interface IAlertState {
  show: boolean
  getIcon: string
  getTitle: string
  contentVisible: boolean
  contentDescribeHeight: number
  contentDefaultHeight: number
  contentMaxHeight: number
  scrollStatus: boolean
}

export type IAlertProps = ExtractPropTypes<typeof alertProps>

export type IAlertConstants = typeof $constants

export type IAlertRenderlessParams = ISharedRenderlessFunctionParams<IAlertConstants> & {
  api: IAlertApi
  state: IAlertState
  props: IAlertProps
}

export interface IAlertApi {
  state: IAlertState
  computedGetIcon: () => string
  computedGetTitle: () => string
  handleClose: () => void
  handleHeaderClick: () => void
  watchAutoHide: (value: boolean) => void
  computedStyle: () => CSSProperties
}

export type IAlertRenderlessParamUtils = ISharedRenderlessParamUtils<IAlertConstants>
