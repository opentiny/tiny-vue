import type { ExtractPropTypes, ComponentPublicInstance } from 'vue'
import { tabsProps, $constants } from '@/tabs/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils, ITinyVm } from './shared.type'
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
} from '../src/tabs'

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
