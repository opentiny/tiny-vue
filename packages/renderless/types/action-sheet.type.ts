import type { CSSProperties, ExtractPropTypes } from 'vue'
import type { actionSheetProps } from '@/action-sheet/src'
import type { ISharedRenderlessParamUtils } from './shared.type'

export interface IActionSheetState {
  toggle: boolean
  active: null | string
  sheetMaskStyle: CSSProperties
  sheetContentStyle: CSSProperties
  scroll: null | object
}

export type IActionSheetProps = ExtractPropTypes<typeof actionSheetProps>

export type IActionSheetRenderlessParamUtils = ISharedRenderlessParamUtils<null>

export interface IActionSheetApi {
  state: IActionSheetState
  setSheetStyle: ({ state, props }: { state: IActionSheetState; props: IActionSheetProps }) => void
  initScrollMenu: ({
    state,
    nextTick,
    refs,
    BScroll
  }: {
    state: IActionSheetState
    nextTick: IActionSheetRenderlessParamUtils['nextTick']
    refs: IActionSheetRenderlessParamUtils['refs']
    BScroll: object
  }) => void
  visibleHandle: ({ emit, state }: { emit: IActionSheetRenderlessParamUtils['emit']; state: IActionSheetState }) => void
  watchVisible: (value: boolean) => void
  menuHandle: (item: any) => void
  confirm: () => void
  selectOption: (option: any) => void
  actionSelectOption: (option: any, index: any) => void
  close: () => void
  hide: () => void
}
