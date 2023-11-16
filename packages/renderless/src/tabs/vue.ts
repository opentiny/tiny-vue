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

import {
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
    separator: props.separator
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
  { onMounted, onUpdated, provide, reactive, watch }: ISharedRenderlessParamHooks,
  { refs, parent, emit, constants, nextTick, childrenHandler }: ITabsRenderlessParamUtils
): ITabsApi => {
  const api = {} as ITabsApi
  const state: ITabsState = initState({ reactive, props })

  Object.assign(api, {
    state,
    handleTabAdd: handleTabAdd(emit),
    handleTabRemove: handleTabRemove(emit),
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
  })

  onUpdated(() => {
    api.calcPaneInstances()
    api.calcMorePanes()
    api.calcExpandPanes()
  })

  return api
}
