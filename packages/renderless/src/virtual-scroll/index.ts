/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of state source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
// 二分法查找
const binarySearch = (list, value) => {
  let start = 0
  let end = list.length - 1
  let tempIndex = null
  while (start <= end) {
    let midIndex = parseInt((start + end) / 2)
    let midValue = list[midIndex].bottom
    if (midValue === value) {
      return midIndex + 1
    } else if (midValue < value) {
      start = midIndex + 1
    } else if (midValue > value) {
      if (tempIndex === null || tempIndex > midIndex) {
        tempIndex = midIndex
      }
      end = end - 1
    }
  }
  return tempIndex
}

// 获取列表起始索引
const getStartIndex = ({ state, scrollTop = 0 }) => {
  if (!state || !state.positions) return null
  // 二分法查找
  return binarySearch(state.positions, scrollTop)
}

// 渲染后更新列表
export const updatePositions =
  ({ state, items }) =>
  () => {
    if (!items.value?.length) return
    const nodes = items.value
    nodes.forEach((node) => {
      let rect = node.getBoundingClientRect() // 获取列表大小和位置的对象
      const height = rect.height // 真实列表高度
      let index = +node.id.slice(1) // 索引
      let oldHeight = state.positions[index].height
      let dValue = oldHeight - height
      // 存在差值
      if (dValue) {
        state.positions[index].bottom = state.positions[index].bottom - dValue
        state.positions[index].height = height
        // 依次更新positions中后续列表
        for (let k = index + 1; k < state.positions.length; k++) {
          state.positions[k].top = state.positions[k - 1].bottom
          state.positions[k].bottom = state.positions[k].bottom - dValue
        }
      }
    })
  }

// 虚拟滚动逻辑
export const handleScroll =
  ({ props, state, virtualScroll, nextTick, items, ...rest }) =>
  async (event) => {
    if (!virtualScroll.value) return

    const scrollPosition =
      props.direction === 'vertical' ? virtualScroll.value.scrollTop : virtualScroll.value.scrollLeft
    if (props.itemSize) {
      const viewNum = Math.ceil(props.viewSize / props.itemSize) // 向上取整得到可视页面显示的条数
      const viewStart = ~~(scrollPosition / props.itemSize) // 向下取整得到滚动区域的显示的第一条的索引

      // 计算缓存区的大小对应的条数
      const bufferItems = Math.ceil(props.buffer / props.itemSize)

      // 计算要显示的范围，使用Diff算法来更新数据范围
      const start = viewStart - viewNum - bufferItems > 0 ? viewStart - viewNum - bufferItems : 0 // 上一屏第一条下标
      const end =
        viewStart + 2 * viewNum + bufferItems < state.data.length
          ? viewStart + 2 * viewNum + bufferItems
          : state.data.length // 下一屏最后一个数据的索引（以免超出范围）

      state.visibleData = state.data.slice(start, end) // 间接利用Diff算法来算出上下屏的显示范围，将全列表数据按照范围给到显示数据中
      state.translate = start * props.itemSize // 实现平滑过渡，先渲染上一屏的内容，然后再渲染显示区域的内容
    } else {
      // 使用动态渲染
      const viewNum = Math.ceil(props.viewSize / props.estimatedItemSize)
      const startIndex = getStartIndex({ state, scrollTop: scrollPosition })

      // 缓存区条数
      // const bufferItems = Math.ceil(props.buffer / props.estimatedItemSize)
      const start = startIndex - viewNum > 0 ? startIndex - viewNum : 0
      const end = Math.min(start + 2 * viewNum, state.data.length) // 下一屏最后一个数据的索引
      const newVisibleData = state.data.slice(start, end) // 计算新的可视数据
      // 为了新增和移除数据进行复用
      const addedData = newVisibleData.filter((item) => !state.visibleData.includes(item))
      const removedData = state.visibleData.filter((item) => !newVisibleData.includes(item))
      // 更新可视数据
      state.visibleData = newVisibleData
      state.translate = start >= 1 ? state.positions[start - 1].bottom : 0
    }
  }

// 计算数据总高度
export const calculateTotalSize =
  ({ props, state }) =>
  () => {
    if (props.itemSize) {
      return props.itemSize * state.data.length
    } else if (state.positions && state.positions.length > 0) {
      return state.positions[state.positions.length - 1].bottom
    } else {
      return 0
    }
  }

// 初始化动态高度列表
export const initPositions =
  ({ props, state }) =>
  () => {
    state.positions = state.data.map((item, index) => ({
      index,
      top: index * props.estimatedItemSize,
      bottom: (index + 1) * props.estimatedItemSize,
      height: props.estimatedItemSize
    }))
  }
