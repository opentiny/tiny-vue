import type { CSSProperties, ExtractPropTypes } from 'vue'
import type { ISharedRenderlessParamUtils } from '@mobile-root/shared.type'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const actionSheetProps = {
  menus: {
    type: Array,
    default: () => []
  },
  modelValue: [Number, String, Array],
  beforeClose: Function,
  visible: {
    type: Boolean,
    default: false
  },
  ellipsis: {
    type: Boolean,
    default: false
  },
  height: {
    type: String,
    default: '100%'
  },
  valueField: {
    type: String,
    default: 'id'
  },
  textField: {
    type: String,
    default: 'label'
  },
  title: String,
  showHeader: {
    type: Boolean,
    default: true
  },
  showFooter: {
    type: Boolean,
    default: false
  },
  showClose: {
    type: Boolean,
    default: () => true
  },
  fullscreen: {
    type: Boolean,
    default: () => false
  },
  customClass: [String, Object, Array],
  contentClass: String,
  type: {
    type: String,
    default: 'normal'
  },
  mask: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  flex: {
    type: Boolean,
    default: true
  },
  contentPosition: {
    type: Boolean,
    default: false
  },
  contentStyle: {
    type: Object,
    default: () => ({})
  }
}

export interface IActionSheetState {
  toggle: boolean
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
