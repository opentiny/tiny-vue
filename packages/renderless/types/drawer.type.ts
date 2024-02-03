import type { ExtractPropTypes, ComputedRef } from 'vue'
import type { drawerProps } from '@/drawer/src'
import type {
  close,
  watchVisible,
  watchToggle,
  confirm,
  mousedown,
  mouseup,
  mousemove,
  addDragEvent,
  removeDragEvent,
  showScrollbar,
  hideScrollbar,
  watchVisibleNotImmediate
} from '../src/drawer'

export interface IDrawerState {
  toggle: boolean
  width: number
  dragEvent: { x: number; isDrag: boolean; offsetWidth: number }
  computedWidth: ComputedRef<string>
}
export type IDrawerProps = ExtractPropTypes<typeof drawerProps>
export interface IDrawerApi {
  state: IDrawerState
  confirm: ReturnType<typeof confirm>
  close: ReturnType<typeof close>
  mousemove: ReturnType<typeof mousemove>
  mouseup: ReturnType<typeof mouseup>
  mousedown: ReturnType<typeof mousedown>
  addDragEvent: ReturnType<typeof addDragEvent>
  removeDragEvent: ReturnType<typeof removeDragEvent>
  watchVisible: ReturnType<typeof watchVisible>
  watchToggle: ReturnType<typeof watchToggle>
  showScrollbar: ReturnType<typeof showScrollbar>
  hideScrollbar: ReturnType<typeof hideScrollbar>
  watchVisibleNotImmediate: ReturnType<typeof watchVisibleNotImmediate>
}
export type IDrawerCT = ReturnType<typeof drawerProps._constants.default>
