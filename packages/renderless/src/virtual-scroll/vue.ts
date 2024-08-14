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

// 定义组件的整体架构和生命周期管理
import { initPositions, updatePositions, calculateTotalSize, handleScroll } from './index'
import { initService } from '../user'

// 提供函数索引
export const api = [
  'state',
  'handleScroll',
  'virtualScroll',
  'items',
  'initPositions',
  'updatePositions',
  'calculateTotalSize'
]
// 管理virtual-scroll相关的逻辑和状态，不涉及实际渲染部分
export const renderless = (props, { reactive, nextTick, watch, computed, onMounted, ref, onUpdated }, { service }) => {
  service = initService({ props, service })

  const api = {}
  // 初始化状态（与data类似）
  const state = reactive({
    data: [...props.data],
    visibleData: [],
    translate: 0,
    totalSize: 0,
    // totalSize: computed(() => ()),
    positions: [] // 不定高度的列表缓存
  })
  const virtualScroll = ref(null) // 初始为 null，实际 DOM 元素在挂载时会赋值
  const items = ref([]) // 列表数组*
  // 将处理virtual-scroll的方法绑定到api中（用initApi函数调用index.ts中的方法，添加到api对象）
  Object.assign(api, {
    state,
    virtualScroll,
    items,
    handleScroll: handleScroll({ state, props, virtualScroll, nextTick, items }),
    updatePositions: updatePositions({ state, items, props }),
    initPositions: initPositions({ props, state }),
    calculateTotalSize: calculateTotalSize({ props, state })
  })

  // 组件挂载后加载滚动事件
  onMounted(() => {
    if (!virtualScroll.value) return
    api.initPositions()
    api.handleScroll()
    state.totalSize = api.calculateTotalSize()
  })

  // 列表完成获取列表的每一项并完成(重新渲染并更新DOM之后被调用)
  // watch(items, () => nextTick(api.updatePositions), {
  //   deep: true,
  //   flush: 'post'
  // })
  // 监听属性和状态的变化+处理相应的逻辑（调用事件处理函数）+会调用index.ts的样式计算函数来调整样式
  watch(
    () => state.visibleData,
    (newVisibleData) => {
      state.totalSize = api.calculateTotalSize()
    },
    { immediate: true }
  )
  watch(
    () => state.translate,
    (newTranslate) => {
      // 当 translate 变化时的处理逻辑
      // 可以在这里处理平移变化带来的影响
    },
    { immediate: true }
  )
  watch(
    () => props.data,
    (newData) => {
      state.data = [...newData]
      // api.initPositions()
    },
    { immediate: true }
  )
  watch(
    () => props.viewSize,
    (newViewSize) => {
      // api.handleScroll() // 视图高度变化时重新计算可视数据和滚动位置
    },
    { immediate: true }
  )

  // 返回所有方法的api对象
  return api
}
