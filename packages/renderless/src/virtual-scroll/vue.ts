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
export const renderless = (props, { reactive, nextTick, watch, onMounted, ref }) => {
  const api = {}
  const state = reactive({
    data: [...props.data],
    visibleData: [],
    translate: 0,
    totalSize: 0,
    positions: []
  })
  const virtualScroll = ref(null)
  const items = ref([])
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
  const handle = () => {
    if (!virtualScroll.value) return
    nextTick(() => {
      api.initPositions()
      state.totalSize = api.calculateTotalSize()
      api.handleScroll()
    })
  }

  onMounted(handle)
  watch(
    () => props.data,
    (newData) => {
      state.data = newData
      state.totalSize = api.calculateTotalSize()
      nextTick(api.handleScroll)
    },
    { deep: true }
  )
  watch(
    () => props.data,
    (newData) => {
      state.data = newData
      nextTick(api.handleScroll)
    },
    { deep: true }
  )

  return api
}
