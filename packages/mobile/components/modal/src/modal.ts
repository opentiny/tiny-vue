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
import type { mouseEnterEvent, mouseLeaveEvent } from './renderless'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const $constants = {
  MODAL_STATUS: {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    LOADING: 'loading'
  },
  NODAL_TYPE: {
    ALERT: 'alert',
    CONFIRM: 'confirm',
    MESSAGE: 'message'
  },
  STATUS_MAPPING_CLASSS: {
    INFO: 'tiny-modal-svg__info',
    SUCCESS: 'tiny-modal-svg__success',
    WARNING: 'tiny-modal-svg__warning',
    ERROR: 'tiny-modal-svg__error',
    LOADING: 'tiny-modal-svg__refresh roll'
  },
  PC_SCROLL_LOCK_CLASS: 'tiny-dialog-box__scroll-lock',
  MOBILE_FIRST_SCROLL_LOCK_CLASS: 'tiny-modal-lockscroll',
  Mode: 'pc',
  SCROLL_LOCK_CLASS(mode) {
    return mode === this.Mode ? this.PC_SCROLL_LOCK_CLASS : this.MOBILE_FIRST_SCROLL_LOCK_CLASS
  }
}

export const modalProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  animat: { type: Boolean, default: () => true },
  beforeClose: Function,
  duration: { type: [Number, String], default: () => 3000 },
  escClosable: Boolean,
  events: Object,
  fullscreen: Boolean,
  height: [Number, String],
  id: String,
  isFormReset: {
    type: Boolean,
    default: true
  },
  lockScroll: Boolean,
  lockView: { type: Boolean, default: () => true },
  marginSize: { type: [Number, String], default: 10 },
  mask: { type: Boolean, default: () => true },
  maskClosable: Boolean,
  message: [String, Function, Object],
  minHeight: { type: [Number, String], default: () => 200 },
  minWidth: { type: [Number, String], default: () => 340 },
  modelValue: Boolean,
  resize: Boolean,
  showFooter: Boolean,
  showHeader: { type: Boolean, default: true },
  status: {
    type: [String, Object],
    default: ''
  },
  title: String,
  top: { type: [Number, String], default: 80 },
  type: { type: String, default: 'alert' },
  vSize: String,
  width: [Number, String],
  zIndex: [Number, String],
  description: String,
  options: Array,
  showClose: { type: Boolean, default: true },
  confirmContent: String,
  cancelContent: String,
  position: {
    type: String,
    default: '',
    validator(val: string) {
      return ['', 'bottom-right'].includes(val)
    }
  },
  customClass: String,
  confirmBtnProps: { type: Object, default: () => ({}) },
  cancelBtnProps: { type: Object, default: () => ({}) },
  footerDragable: Boolean,
  tiny_theme: String,
  slots: Object
}

type zoomLocatType = null | {
  top: number
  left: number
  width: number
  height: number
}

export interface IModalState {
  emitter: ISharedRenderlessParamUtils<never>['emitter']
  visible: boolean
  contentVisible: boolean
  cumsumZindex: number
  modalTop: number
  modalZindex: number | string
  zoomLocat: zoomLocatType
  isMsg: boolean
  prevEvent: null | Event
  options: any[]
  theme: string | undefined
}

export type IModalProps = ExtractPropTypes<typeof modalProps>

export type IModalConstants = typeof $constants

export type IModalRenderlessParams = ISharedRenderlessFunctionParams<IModalConstants> & {
  api: IModalApi
  state: IModalState
  props: IModalProps
}

export interface IModalApi {
  state: IModalState
  broadcast: () => void
  computedIsMsg: (props: IModalProps) => boolean
  updateStyle: () => void
  getBox: () => IModalRenderlessParams['vm']
  watchValue: (visible: boolean) => void
  created: () => void
  mounted: () => void
  beforeUnmouted: () => void
  selfClickEvent: (event: MouseEvent) => void
  mouseEnterEvent: ReturnType<typeof mouseEnterEvent>
  mouseLeaveEvent: ReturnType<typeof mouseLeaveEvent>
  updateZindex: () => void
  handleEvent: (type: string, event: Event, options?: any[]) => void
  closeEvent: (event: PointerEvent) => void
  confirmEvent: (event: PointerEvent) => void
  cancelEvent: (event: PointerEvent) => void
  open: () => void
  addMsgQueue: () => void
  removeMsgQueue: () => void
  close: (type: string) => void
  handleGlobalKeydownEvent: (event: KeyboardEvent) => void
  maximize: () => Promise<void>
  revert: () => Promise<void>
  toggleZoomEvent: (event: PointerEvent) => void
  mousedownEvent: (event: MouseEvent) => void
  dragEvent: (event: MouseEvent) => void
  resetDragStyle: () => void
}

export type IModalRenderlessParamUtils = ISharedRenderlessParamUtils<IModalConstants>

export interface IModalEmitParam {
  type: string
  $modal: IModalRenderlessParamUtils['parent']
  options?: any[]
}

export type IModalEmitZoomParam = {
  params: IModalEmitParam
  event: Event
} & Pick<IModalRenderlessParams, 'parent' | 'emit'>

interface IModalSizeInfo {
  width: number
  height: number
  top: number
  offsetWidth: number
  offsetHeight: number
  visibleWidth: number
  visibleHeight: number
  minWidth: number | string
  minHeight: number | string
  x: number
  y: number
  temp: number
  offsetLeft: number
  offsetTop: number
  marginSize: number | string
  left: number
  modalBoxElem: IModalRenderlessParams['vm']
}

export type IModalComputeLeftParam = Pick<
  IModalSizeInfo,
  'width' | 'offsetWidth' | 'x' | 'minWidth' | 'temp' | 'offsetLeft' | 'marginSize' | 'left'
>

export type IModalComputeTopParam = Pick<
  IModalSizeInfo,
  'height' | 'offsetHeight' | 'y' | 'minHeight' | 'temp' | 'offsetTop' | 'marginSize' | 'top'
>

export type IModalComputeRightParam = Pick<
  IModalSizeInfo,
  'width' | 'offsetWidth' | 'x' | 'minWidth' | 'temp' | 'visibleWidth' | 'offsetLeft' | 'marginSize'
>
export type IModalComputeBottomParam = Pick<
  IModalSizeInfo,
  'height' | 'offsetHeight' | 'y' | 'minHeight' | 'temp' | 'visibleHeight' | 'offsetTop' | 'marginSize'
>

export type IModalUpdateWlParam = Pick<
  IModalSizeInfo,
  'width' | 'offsetWidth' | 'x' | 'minWidth' | 'temp' | 'offsetLeft' | 'marginSize' | 'left' | 'modalBoxElem'
>

export type IModalUpdateWrParam = Pick<
  IModalSizeInfo,
  'width' | 'offsetWidth' | 'x' | 'minWidth' | 'temp' | 'visibleWidth' | 'offsetLeft' | 'marginSize' | 'modalBoxElem'
>

export type IModalUpdateStParam = Pick<
  IModalSizeInfo,
  'height' | 'offsetHeight' | 'y' | 'minHeight' | 'temp' | 'offsetTop' | 'marginSize' | 'top' | 'modalBoxElem'
>

export type IModalUpdateSbParam = Pick<
  IModalSizeInfo,
  'height' | 'offsetHeight' | 'y' | 'minHeight' | 'temp' | 'visibleHeight' | 'offsetTop' | 'marginSize' | 'modalBoxElem'
>

export interface IModalRet {
  width?: number
  height?: number
  top?: number
  left?: number
}

export interface IModalUpdateDeltaParam {
  event: MouseEvent
  delta: {
    x: number
    y: number
  }
  state: IModalRenderlessParams['state']
}

export type IModalDragDirection = 'wl' | 'wr' | 'st' | 'sb' | 'swst' | 'sest' | 'swlb' | 'selb'

export interface IModalSetModalBoxStyleParam {
  delta: { x: number; y: number }
  params: {
    type: IModalDragDirection
    props: IModalProps
    disX: number
    disY: number
  } & Pick<IModalSizeInfo, 'offsetTop' | 'offsetLeft' | 'visibleHeight' | 'visibleWidth' | 'modalBoxElem'>
}
