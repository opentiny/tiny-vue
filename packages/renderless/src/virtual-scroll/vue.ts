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
import { handleScroll } from './index'
import { initService } from '../user'

// import { initUser, showCard, showDetail, computedTextField, computedValueField } from './index'
// 提供函数索引
export const api = ['state', 'handleScroll', 'showCard', 'showDetail']
// 管理virtual-scroll相关的逻辑和状态，不涉及实际渲染部分
export const renderless = (props, { reactive, watch, computed, onMounted }, { service }) => {
  service = initService({ props, service })

  const api = {}
  // 初始化状态（与data类似）
  const state = reactive({
    data: [...props.data],
    visibleData: [],
    translate: 0,
    totalHeight: computed(() => props.itemHeight * state.data.length)
  })
  const virtualScroll = { value: null } // 初始为 null，实际 DOM 元素在挂载时会赋值
  // 将处理virtual-scroll的方法绑定到api中（用initApi函数调用index.ts中的方法，添加到api对象）
  Object.assign(api, {
    state,
    handleScroll: handleScroll({ state, props, virtualScroll })
  })
  // 监听属性和状态的变化+处理相应的逻辑（调用事件处理函数）+会调用index.ts的样式计算函数来调整样式
  // watch(() => props.modelValue, api.initUser, { immediate: true })
  watch(
    () => state.visibleData,
    (newVisibleData) => {},
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
      // state.totalHeight = props.itemHeight * state.data.length
      api.handleScroll() // 处理数据变化后的滚动计算
    },
    { immediate: true }
  )
  watch(
    () => props.viewHeight,
    (newViewHeight) => {
      api.handleScroll() // 视图高度变化时重新计算可视数据和滚动位置
    },
    { immediate: true }
  )
  // 组件挂载后加载滚动事件
  onMounted(() => {
    // 在 onMounted 钩子中绑定滚动事件处理函数
    if (virtualScroll.value) {
      virtualScroll.value.addEventListener('scroll', () => {
        api.handleScroll() // 在滚动事件触发时调用 api.handleScroll()
      })
      // 初始化时调用滚动处理函数
      // api.handleScroll()
    }
  })

  // 返回所有方法的api对象
  return api
}
