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
  ITabNavState,
  ITabNavApi,
  ITabNavProps,
  ISharedRenderlessParamHooks,
  ITabNavRenderlessParamUtils
} from '@/types'
import {
  computedNavStyle,
  computedSizeName,
  updated,
  visibilityChangeHandler,
  windowBlurHandler,
  windowFocusHandler,
  scrollToActiveTab,
  scrollIntoView,
  mounted,
  moreTabShow,
  expandTabShow,
  expandTabHide,
  computedHeaderStyle,
  beforeUnmount,
  scrollPrev,
  scrollNext,
  changeTab,
  setFocus,
  removeFocus,
  sortableEvent,
  handleTabDragStart,
  handleTabDragEnd,
  watchCurrentName,
  handleTitleMouseenter,
  handleTitleMouseleave
} from './index'

export const api = [
  'state',
  'setFocus',
  'removeFocus',
  'scrollPrev',
  'scrollNext',
  'changeTab',
  'scrollToActiveTab',
  'scrollIntoView',
  'moreTabShow',
  'expandTabShow',
  'expandTabHide',
  'computedHeaderStyle',
  'swiperHandle',
  'updated',
  'handleTitleMouseenter',
  'handleTitleMouseleave'
]

export const renderless = (
  props: ITabNavProps,
  { computed, inject, onBeforeUnmount, onMounted, onUpdated, reactive, markRaw }: ISharedRenderlessParamHooks,
  { parent, vm, nextTick, mode: tinyMode, emit }: ITabNavRenderlessParamUtils
): ITabNavApi => {
  const api = { mounted, beforeUnmount, computedNavStyle, computedSizeName } as ITabNavApi
  const state = reactive({
    dragging: false,
    navOffset: 0,
    lineStyle: {
      width: 20,
      offset: 0
    },
    scrollable: false,
    isFocus: false,
    focusable: false,
    showMoreItem: false,
    isActive: false,
    tooltipVisible: false,
    tooltipContent: '',
    showMoreTabs: props.showMoreTabs,
    showExpandItem: false,
    showExpandTabs: props.showExpandTabs,
    expandHeaderStyle: {},
    mode: props._mode || parent.$mode || tinyMode || 'pc',
    rootTabs: inject('rootTabs'),
    sizeName: computed(() => api.computedSizeName(state)),
    navStyle: computed(() => api.computedNavStyle(state)),
    navSortableObj: {},
    separator: inject('separator', null)
  }) as ITabNavState

  Object.assign(api, {
    state,
    setFocus: setFocus(state),
    removeFocus: removeFocus(state),
    moreTabShow: moreTabShow(state),
    expandTabShow: expandTabShow({ api, state }),
    expandTabHide: expandTabHide(state),
    scrollPrev: scrollPrev({ vm, state }),
    scrollNext: scrollNext({ vm, state }),
    windowBlurHandler: windowBlurHandler(state),
    windowFocusHandler: windowFocusHandler(state),
    visibilityChangeHandler: visibilityChangeHandler(state),
    scrollToActiveTab: scrollToActiveTab({ parent, vm, state }),
    scrollIntoView: scrollIntoView({ parent, vm, state }),
    computedHeaderStyle: computedHeaderStyle({ vm, state }),
    watchCurrentName: watchCurrentName({ nextTick, vm, state }),
    handleTabDragStart: handleTabDragStart({ state, vm, emit }),
    handleTabDragEnd: handleTabDragEnd({ state, vm, nextTick }),
    sortableEvent: sortableEvent({ api, props, state, vm, emit, markRaw }),
    handleTitleMouseenter: handleTitleMouseenter({ state, vm }),
    handleTitleMouseleave: handleTitleMouseleave({ state })
  })

  Object.assign(api, { updated: updated({ api, vm, state }), changeTab: changeTab(api) })
  onUpdated(() => api.updated())
  onMounted(() => api.mounted({ api, parent }))
  onBeforeUnmount(() => api.beforeUnmount({ api, parent }))

  return api
}
