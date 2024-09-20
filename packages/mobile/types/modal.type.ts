import type { ExtractPropTypes } from 'vue'
import type { modalProps, $constants } from '@/modal/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { mouseEnterEvent, mouseLeaveEvent } from '../src/modal'

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
