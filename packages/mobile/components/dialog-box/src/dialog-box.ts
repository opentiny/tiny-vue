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

import { $prefix } from '@mobile-root/common'
import type { ExtractPropTypes } from 'vue'
import type {
  handleCancel,
  handleConfirm,
  updatePopper,
  handleWrapperClick,
  useMouseEventDown,
  useMouseEventUp,
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
} from './renderless'

import type {
  ISharedRenderlessFunctionParams,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils
} from '@mobile-root/shared.type'

export type { ISharedRenderlessParamHooks }

export const $constants = {
  DIALOG_SLIDER_RIGHT: 'dialog-slideRight',
  DIALOG_FADE: 'dialog-fade',
  SELECT_DROPDOWN: $prefix + 'SelectDropdown',
  DROPDOWN_MENU: $prefix + 'DropdownMenu',
  DIALOG_BOX_CLASS: 'div.tiny-dialog-box',
  PC_SCROLL_LOCK_CLASS: 'dialog-box__scroll-lock',
  MOBILE_SCROLL_LOCK_CLASS: 'mobile-dialog-box__scroll-lock',
  Mode: 'pc',
  scrollLockClass(mode) {
    return mode === this.Mode ? this.PC_SCROLL_LOCK_CLASS : this.MOBILE_SCROLL_LOCK_CLASS
  }
}

export const dialogBoxProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  appendToBody: {
    type: Boolean,
    default: () => false
  },
  beforeClose: Function,
  center: {
    type: Boolean,
    default: () => false
  },
  closeOnClickModal: {
    type: Boolean,
    default: () => true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: () => true
  },
  destroyOnClose: {
    type: Boolean,
    default: () => false
  },
  dialogClass: {
    type: String,
    default: () => ''
  },
  draggable: {
    type: Boolean,
    default: () => false
  },
  dragOutsideWindow: {
    type: Boolean,
    default: () => false
  },
  fullscreen: {
    type: Boolean,
    default: () => false
  },
  isFormReset: {
    type: Boolean,
    default: () => true
  },
  lockScroll: {
    type: Boolean,
    default: () => true
  },
  modal: {
    type: Boolean,
    default: () => true
  },
  modalAppendToBody: {
    type: Boolean,
    default: () => true
  },
  resize: {
    type: Boolean,
    default: () => false
  },
  rightSlide: {
    type: Boolean,
    default: () => false
  },
  showClose: {
    type: Boolean,
    default: () => true
  },
  showHeader: {
    type: Boolean,
    default: () => true
  },
  title: {
    type: String,
    default: () => ''
  },
  top: String,
  visible: {
    type: Boolean,
    default: () => false
  },
  width: {
    type: String,
    default: () => '500px'
  },
  maxHeight: {
    type: String,
    default: () => ''
  }
}

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
  mouseUpWrapperFlag: boolean
  mouseDownWrapperFlag: boolean
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
  useMouseEventDown: ReturnType<typeof useMouseEventDown>
  useMouseEventUp: ReturnType<typeof useMouseEventUp>
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
