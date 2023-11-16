import type { ExtractPropTypes } from 'vue'
import { ITabsVm, ITabsProps } from './tabs.type'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import { tabNavPcProps } from '@/tabs/src/tab-nav'
import type {
  computedNavStyle,
  scrollIntoView,
  computedSizeName,
  updated,
  mounted,
  beforeUnmount,
  visibilityChangeHandler,
  windowBlurHandler,
  windowFocusHandler,
  scrollToActiveTab,
  scrollPrev,
  scrollNext,
  changeTab,
  setFocus,
  removeFocus,
  moreTabShow,
  expandTabShow,
  expandTabHide,
  computedHeaderStyle,
  handleTabDragStart,
  handleTabDragEnd,
  sortableEvent,
  watchCurrentName
} from '../src/tab-nav'

export type ITabNavProps = { _mode: string } & ExtractPropTypes<typeof tabNavPcProps> & ITabsProps

interface ITabNavStyle {}

interface ITabNavScrollable {
  prev: number
  next: boolean
}

export interface ITabNavState {
  dragging: boolean
  navOffset: number
  lineOffset: number
  scrollable: boolean | ITabNavScrollable
  isFocus: boolean
  focusable: boolean
  showMoreItem: boolean
  isActive: boolean
  showMoreTabs: boolean
  showExpandItem: boolean
  showExpandTabs: boolean
  expandHeaderStyle: {}
  mode: string
  rootTabs: ITabsVm
  sizeName: string
  navStyle: ITabNavStyle
  navSortableObj: object
  separator: boolean | null
}

export interface ITabNavApi {
  state: ITabNavState
  setFocus: ReturnType<typeof setFocus>
  removeFocus: ReturnType<typeof removeFocus>
  moreTabShow: ReturnType<typeof moreTabShow>
  expandTabShow: ReturnType<typeof expandTabShow>
  expandTabHide: ReturnType<typeof expandTabHide>
  scrollPrev: ReturnType<typeof scrollPrev>
  scrollNext: ReturnType<typeof scrollNext>
  windowBlurHandler: ReturnType<typeof windowBlurHandler>
  windowFocusHandler: ReturnType<typeof windowFocusHandler>
  visibilityChangeHandler: ReturnType<typeof visibilityChangeHandler>
  scrollToActiveTab: ReturnType<typeof scrollToActiveTab>
  scrollIntoView: ReturnType<typeof scrollIntoView>
  computedHeaderStyle: ReturnType<typeof computedHeaderStyle>
  watchCurrentName: ReturnType<typeof watchCurrentName>
  handleTabDragStart: ReturnType<typeof handleTabDragStart>
  handleTabDragEnd: ReturnType<typeof handleTabDragEnd>
  sortableEvent: ReturnType<typeof sortableEvent>
  computedSizeName: typeof computedSizeName
  computedNavStyle: typeof computedNavStyle
  beforeUnmount: typeof beforeUnmount
  mounted: typeof mounted
  changeTab: ReturnType<typeof changeTab>
  updated: ReturnType<typeof updated>
}

export type ITabNavRenderlessParamUtils = ISharedRenderlessParamUtils<never>

export type ITabNavRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: ITabNavState
  props: ITabNavProps
  api: ITabNavApi
  rootTabs: ITabsVm
}
