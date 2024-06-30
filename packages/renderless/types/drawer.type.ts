import type { ExtractPropTypes } from 'vue'
import type { drawerProps, $constants } from '@/drawer/src'
import type {
  open,
  close,
  watchVisible,
  confirm,
  mousedown,
  mouseup,
  mousemove,
  addDragEvent,
  removeDragEvent,
  showScrollbar,
  hideScrollbar,
  computedWidth,
  handleClose
} from '../src/drawer'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export interface IDrawerState {
  visible: boolean
  width: number
  height: number
  dragEvent: { x: number; y: number; isDrag: boolean; offsetWidth: number; offsetHeight: number }
  computedWidth: string
  btnOrderReversed: boolean
}

export type IDrawerProps = ExtractPropTypes<typeof drawerProps>

export interface IDrawerApi {
  state: IDrawerState
  open: ReturnType<typeof open>
  confirm: ReturnType<typeof confirm>
  close: ReturnType<typeof close>
  mousemove: ReturnType<typeof mousemove>
  mouseup: ReturnType<typeof mouseup>
  mousedown: ReturnType<typeof mousedown>
  addDragEvent: ReturnType<typeof addDragEvent>
  removeDragEvent: ReturnType<typeof removeDragEvent>
  watchVisible: ReturnType<typeof watchVisible>
  showScrollbar: ReturnType<typeof showScrollbar>
  hideScrollbar: ReturnType<typeof hideScrollbar>
  computedWidth: ReturnType<typeof computedWidth>
  handleClose: ReturnType<typeof handleClose>
}

export type IDrawerCT = ReturnType<typeof drawerProps._constants.default>

export type IDrawerConstants = typeof $constants

export type IDrawerRenderlessParams = ISharedRenderlessFunctionParams<IDrawerConstants> & {
  api: IDrawerApi
  state: IDrawerState
  props: IDrawerProps
}

export type IDrawerRenderlessParamUtils = ISharedRenderlessParamUtils<IDrawerConstants>
