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
import type { dialogBoxProps, $constants } from '@/dialog-box/src'
import type {
  handleCancel,
  handleConfirm,
  updatePopper,
  handleWrapperClick,
  hide,
  handleClose,
  watchVisible,
  computedStyle,
  computedBodyStyle,
  mounted,
  unMounted,
  computedAnimationName,
  afterEnter,
  afterLeave,
  hideScrollbar,
  showScrollbar,
  handleDrag
} from '../src/dialog-box'
import type {
  ISharedRenderlessFunctionParams,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils
} from './shared.type'

export type IDialogBoxProps = ExtractPropTypes<typeof dialogBoxProps>

export type IDialogBoxConstants = typeof $constants

export interface IDialogBoxState {
  emitter: ReturnType<ISharedRenderlessParamUtils<IDialogBoxConstants>['emitter']>
  key: number
  x: number | string | null
  y: number | string | null
  top: number | string | null
  left: number | string | null
  max: number | string | null
  move: boolean
  closed: boolean
  dragable: boolean
  isFull: boolean
  style: { [key: string]: string | number }
  bodyStyle: { [key: string]: string | number }
  animationName: string
  opened?: boolean
  rendered?: boolean
}

export interface IDialogBoxApi {
  state: IDialogBoxState
  open: (options: any) => void
  close: () => void
  broadcast: ISharedRenderlessParamUtils<IDialogBoxConstants>['broadcast']
  handleCancel: ReturnType<typeof handleCancel>
  handleConfirm: ReturnType<typeof handleConfirm>
  updatePopper: ReturnType<typeof updatePopper>
  handleWrapperClick: ReturnType<typeof handleWrapperClick>
  hide: ReturnType<typeof hide>
  handleClose: ReturnType<typeof handleClose>
  watchVisible: ReturnType<typeof watchVisible>
  computedStyle: ReturnType<typeof computedStyle>
  computedBodyStyle: ReturnType<typeof computedBodyStyle>
  mounted: ReturnType<typeof mounted>
  unMounted: ReturnType<typeof unMounted>
  computedAnimationName: ReturnType<typeof computedAnimationName>
  afterEnter: ReturnType<typeof afterEnter>
  afterLeave: ReturnType<typeof afterLeave>
  hideScrollbar: ReturnType<typeof hideScrollbar>
  showScrollbar: ReturnType<typeof showScrollbar>
  handleDrag: ReturnType<typeof handleDrag>
}

export type IDialogBoxRenderlessParams = ISharedRenderlessFunctionParams<IDialogBoxConstants> & {
  api: IDialogBoxApi
  props: IDialogBoxProps
  state: IDialogBoxState
}

export type IDialogBoxRenderlessParamUtils = ISharedRenderlessParamUtils<IDialogBoxConstants>

export type IDialogBoxMergeStateParam = Pick<IDialogBoxRenderlessParams, 'reactive' | 'state' | 'toRefs'> & {
  usePopups: object
}

export type IDialogBoxInitApiParam = Pick<
  IDialogBoxRenderlessParams,
  'api' | 'state' | 'parent' | 'props' | 'emit' | 'constants' | 'nextTick' | 'vm' | 'broadcast'
> & { usePopups: object; lockScrollClass: string }

export interface IDialogBoxInitWatchParam {
  watch: ISharedRenderlessParamHooks['watch']
  state: IDialogBoxState
  api: IDialogBoxApi
  props: IDialogBoxProps
}

export interface IDialogBoxStyle {
  width?: string | number
  height?: string | number
  maxHeight?: string | number
  top?: string | number
  right?: string | number
  left?: string | number
}
