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

import type {
  ITabsState,
  ITabsApi,
  ITabsProps,
  ISharedRenderlessParamHooks,
  ITabsRenderlessParamUtils,
  ITabsRenderlessParams
} from '@/types'
import {
  calcMorePanes,
  calcExpandPanes,
  calcPaneInstances,
  handleTabClick,
  handleTabAdd,
  handleTabRemove,
  setCurrentName,
  changeCurrentName,
  created,
  changeDirection,
  handleTabDragStart,
  handleTabDragOver,
  handleTabDragEnd
} from './index'

export const api = [
  'state',
  'handleTabAdd',
  'calcPaneInstances',
  'calcMorePanes',
  'handleTabRemove',
  'handleTabClick',
  'handleTabDragStart',
  'handleTabDragOver',
  'handleTabDragEnd',
  'setCurrentName',
  'getNavRefs'
]

const initState = ({ reactive, props }: Pick<ITabsRenderlessParams, 'reactive' | 'props'>): ITabsState =>
  reactive({
    panes: [],
    currentName: props.modelValue || props.activeName,
    currentIndex: -1,
    showPanesCount: -1,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    direction: '',
    expandPanesWidth: '',
    activeIndex: 1,
    separator: props.separator,
    headerOnly: props.headerOnly
  }) as ITabsState

const initWatcher = ({
  watch,
  props,
  api,
  state,
  nextTick,
  refs
}: Pick<ITabsRenderlessParams, 'watch' | 'props' | 'api' | 'state' | 'nextTick' | 'refs'>) => {
  watch(() => props.modelValue, api.setCurrentName)

  watch(() => props.activeName, api.setCurrentName)

  watch(
    () => state.currentName,
    () => {
      nextTick(() => {
        refs.nav.scrollToActiveTab()
        // scrollToActiveTab → updated 调整 navOffset 可能触发多轮 DOM 更新，
        // 用 rAF 确保所有布局计算完成后再读取 getBoundingClientRect，消除滞后
        requestAnimationFrame(() => {
          api.calcMorePanes()
        })
      })
    },
    { deep: true }
  )

  watch(
    () => props.showMoreTabs,
    (value) => {
      if (!value) {
        state.morePanes = []
        state.showPanesCount = -1
      }
    },
    { immediate: true }
  )
}

export const renderless = (
  props: ITabsProps,
  { onMounted, onUpdated, provide, reactive, watch, onUnmounted }: ISharedRenderlessParamHooks,
  { vm, refs, parent, emit, constants, nextTick, childrenHandler }: ITabsRenderlessParamUtils
): ITabsApi => {
  const api = {} as ITabsApi
  const state: ITabsState = initState({ reactive, props })

  Object.assign(api, {
    state,
    handleTabAdd: handleTabAdd(emit),
    handleTabRemove: handleTabRemove({ emit, props }),
    changeDirection: changeDirection({ props, state }),
    changeCurrentName: changeCurrentName({ emit, state }),
    calcMorePanes: calcMorePanes({ parent, props, state, refs }),
    calcExpandPanes: calcExpandPanes({ parent, props, state }),
    calcPaneInstances: calcPaneInstances({ constants, parent, state, childrenHandler }),
    handleTabDragStart: handleTabDragStart({ emit }),
    handleTabDragOver: handleTabDragOver({ emit }),
    handleTabDragEnd: handleTabDragEnd({ state, emit }),
    handleTabClick: handleTabClick({ api, emit, props, refs }),
    setCurrentName: setCurrentName({ api, props, refs, state }),
    created: created({ api, parent, state })
  })

  api.created()

  provide('rootTabs', parent)

  provide('separator', state.separator)

  initWatcher({ watch, props, api, state, nextTick, refs })

  onMounted(() => {
    api.calcPaneInstances()
    api.calcMorePanes()
    api.calcExpandPanes()
    // TabNav 在 render 中通过 $nextTick 异步 $forceUpdate，
    // 用 rAF 确保所有级联 DOM 更新完成后再重算
    requestAnimationFrame(() => {
      api.calcMorePanes()
    })
  })

  onUpdated(() => {
    api.calcPaneInstances()
    api.calcMorePanes()
    api.calcExpandPanes()
    // 同上
    requestAnimationFrame(() => {
      api.calcMorePanes()
    })
  })

  onUnmounted(() => {
    vm.$off('tab-nav-update')
  })

  return api
}
