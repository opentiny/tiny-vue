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
  initPositions,
  updatePositions,
  calculateTotalSize,
  handleScroll,
  scrollToItem,
  scrollToPosition
} from './index'
import { initService } from '../user'

export const api = [
  'state',
  'handleScroll',
  'virtualScroll',
  'items',
  'initPositions',
  'updatePositions',
  'calculateTotalSize',
  'scrollToItem'
]
export const renderless = (props, { reactive, nextTick, watch, onMounted, ref }, { service }) => {
  service = initService({ props, service })

  const api = {}
  const state = reactive({
    data: [...props.data],
    visibleData: [],
    translate: 0,
    totalSize: 0,
    positions: [], // 不定高度的列表缓存
    lastUpdateTime: Date.now()
  })
  const virtualScroll = ref(null)
  const items = ref([]) // 列表数组*
  Object.assign(api, {
    state,
    virtualScroll,
    items,
    handleScroll: handleScroll({ state, props, virtualScroll, nextTick, items }),
    updatePositions: updatePositions({ state, items, props }),
    initPositions: initPositions({ props, state }),
    calculateTotalSize: calculateTotalSize({ props, state }),
    scrollToItem: scrollToItem({ api, props, state }),
    scrollToPosition: scrollToPosition({ api, virtualScroll, state, props })
  })
  api.initPositions()
  state.temporary = {}
  if (props.prerender) {
    state.temporary.prerender = true
    api.handleScroll()
  }

  // 组件挂载后加载滚动事件
  onMounted(() => {
    if (!virtualScroll.value) return
    nextTick(() => {
      api.initPositions()
      state.temporary.prerender = false
      api.handleScroll()
      state.totalSize = api.calculateTotalSize
    })
  })
  watch(
    () => state.visibleData,
    (newVisibleData) => {
      state.totalSize = api.calculateTotalSize
    },
    { immediate: true }
  )

  return api
}
