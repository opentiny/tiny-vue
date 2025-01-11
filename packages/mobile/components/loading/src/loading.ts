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
import type { ExtractPropTypes, Component } from 'vue'
import { constants } from './service'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'
import type { setText, close, handleAfterLeave } from './renderless'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const loadingProps = {
  type: {
    type: String,
    validator: (value: string) => Boolean(~['primary', 'simple'].indexOf(value))
  },
  loadtext: {
    type: String,
    default: () => constants.LOAD_ICON_TEXT
  },
  _constants: {
    type: Object,
    default: () => constants
  },
  loadingImg: {
    type: String
  },
  size: {
    type: String,
    default: 'small'
  }
}

export interface ILoadingState {
  text: string | null
  spinner: Component | null
  visible: boolean
  customClass: string
  background: string | null
  fullscreen: boolean
  closed: boolean
  size: string
  body?: boolean
  lock?: boolean
  target?: HTMLElement | string
  tiny_mode?: string
  type?: string
}

export type ILoadingProps = ExtractPropTypes<typeof loadingProps>

export type ILoadingConstants = typeof constants

export type ILoadingRenderlessParams = ISharedRenderlessFunctionParams<ILoadingConstants> & {
  state: ILoadingState
  props: ILoadingProps
}

export interface ILoadingApi {
  state: ILoadingState
  setText: ReturnType<typeof setText>
  handleAfterLeave: ReturnType<typeof handleAfterLeave>
  close: ReturnType<typeof close>
}

export type ILoadingRenderlessParamUtils = ISharedRenderlessParamUtils<ILoadingConstants>
