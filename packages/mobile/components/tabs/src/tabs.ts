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
import type { ExtractPropTypes, ComponentPublicInstance } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils, ITinyVm } from '@mobile-root/shared.type'
import type {
  calcPaneInstances,
  calcMorePanes,
  calcExpandPanes,
  handleTabClick,
  handleTabRemove,
  handleTabAdd,
  setCurrentName,
  changeCurrentName,
  created,
  changeDirection,
  handleTabDragStart,
  handleTabDragOver,
  handleTabDragEnd
} from './renderless'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const $constants = {
  TAB_ITEM: 'TabItem'
}

export const tabsProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  tabStyle: String,
  activeName: String,
  withClose: Boolean,
  withAdd: Boolean,
  size: String,
  activeColor: {
    type: String,
    default: ''
  },
  modelValue: {},
  editable: Boolean,
  position: {
    type: String,
    default: 'top'
  },
  beforeLeave: Function,
  stretch: Boolean,
  showMoreTabs: Boolean,
  swipeable: {
    type: Boolean,
    default: true
  },
  popperClass: String,
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  dropConfig: {
    type: Object,
    default: () => null
  },
  separator: Boolean,
  // tiny 新增
  showExpandTabs: Boolean,
  expandTabsTitle: String,
  expandTabsMode: String,
  tooltipConfig: [String, Object],
  optimized: {
    type: Boolean,
    default: true
  },
  beforeClose: Function,
  overflowTitle: Boolean,
  titleWidth: String
}

export interface ITabsState {
  panes: ITabsPaneVm[] | []
  currentName: string
  currentIndex: number
  showPanesCount: number
  startX: number
  startY: number
  deltaX: number
  deltaY: number
  offsetX: number
  offsetY: number
  direction: string
  expandPanesWidth: string | number
  activeIndex: number
  morePanes?: ITabsPaneVm[]
  separator?: boolean
}

/**
 *tab根元素实例对象
 */
export type ITabsVm = ComponentPublicInstance & { state: ITabsState } & ITabsProps

export type ITabsPaneVm = ITinyVm<{ TAB_ITEM: string }> | ITabsPane | ITabsVm

/**
 * pane对象类型
 */
export interface ITabsPane {
  name: string
  disabled: boolean
  state: ITabsState
}

/**
 * 自定义拖拽事件
 */
export interface ITabsCustomEvent {
  originalEvent: DragEvent
  oldDraggableIndex: number
  newDraggableIndex: number
}

export interface ITabsApi {
  state: ITabsState
  handleTabAdd: ReturnType<typeof handleTabAdd>
  handleTabRemove: ReturnType<typeof handleTabRemove>
  changeDirection: ReturnType<typeof changeDirection>
  changeCurrentName: ReturnType<typeof changeCurrentName>
  calcMorePanes: ReturnType<typeof calcMorePanes>
  calcExpandPanes: ReturnType<typeof calcExpandPanes>
  calcPaneInstances: ReturnType<typeof calcPaneInstances>
  handleTabDragStart: ReturnType<typeof handleTabDragStart>
  handleTabDragOver: ReturnType<typeof handleTabDragOver>
  handleTabDragEnd: ReturnType<typeof handleTabDragEnd>
  handleTabClick: ReturnType<typeof handleTabClick>
  setCurrentName: ReturnType<typeof setCurrentName>
  created: ReturnType<typeof created>
}

export type ITabsProps = ExtractPropTypes<typeof tabsProps>

export type ITabsConstants = typeof $constants

export type ITabsRenderlessParamUtils = ISharedRenderlessParamUtils<ITabsConstants>

export type ITabsRenderlessParams = ISharedRenderlessFunctionParams<ITabsConstants> & {
  state: ITabsState
  props: ITabsProps
  api: ITabsApi
}
