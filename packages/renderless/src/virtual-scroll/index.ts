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
// start, end
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
  if (!state || !state.positions) return 0
  // 二分法查找
  return binarySearch(state.positions, scrollTop)
}

// pos = 1w, n = 20, 1w-n * n
// 渲染后更新列表
export const updatePositions =
  ({ state, items, props }) =>
  () => {
    if (!items.value?.length) return
    const nodes = items.value
    const positions = state.positions
    let dValue = 0
    const attr = props.direction === 'vertical' ? 'height' : 'width'
    nodes.forEach((node) => {
      const s = node.getBoundingClientRect()[attr] // 获取列表大小和位置的对象
      let index = +node.id.slice(1) // 索引
      let oldS = positions[index].height
      dValue = oldS - s
      if (!dValue) return
      // 存在差值
      positions[index].bottom = positions[index].bottom - dValue
      positions[index].height = s
      // 依次更新positions中后续列表
      for (let k = index + 1; k < index + nodes.length; k++) {
        positions[k].top = positions[k - 1].bottom
        positions[k].bottom = positions[k].bottom - dValue
      }
    })
    console.log(dValue, nodes.length, positions.length, 'd')
    if (!dValue || !nodes.length) return
    for (let k = nodes.length; k < positions.length; k++) {
      positions[k].top = positions[k - 1].bottom
      positions[k].bottom = positions[k].bottom - dValue
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

// 虚拟滚动逻辑
export const handleScroll = ({ props, state, virtualScroll, nextTick, items, ...rest }) => {
  return async (event) => {
    if (!virtualScroll.value) return
    await nextTick()
    const size = virtualScroll.value.getBoundingClientRect()[props.direction === 'vertical' ? 'height' : 'width']
    const viewNum = Math.floor(size / (props.itemSize ?? props.estimatedItemSize))
    // console.log(virtualScroll.value.getBoundingClientRect().height, viewNum, state)

    const scrollPosition =
      props.direction === 'vertical' ? virtualScroll.value.scrollTop : virtualScroll.value.scrollLeft
    if (props.itemSize) {
      // const viewNum = Math.ceil(props.viewSize / props.itemSize) // 向上取整得到可视页面显示的条数
      const viewStart = ~~(scrollPosition / props.itemSize) // 向下取整得到滚动区域的显示的第一条的索引

      // 计算缓存区的大小对应的条数
      const bufferItems = props.buffer * viewNum
      // 计算要显示的范围，使用Diff算法来更新数据范围
      const start = viewStart - viewNum - bufferItems > 0 ? viewStart - viewNum - bufferItems : 0 // 上一屏第一条下标
      const end =
        viewStart + 2 * viewNum + bufferItems < state.data.length
          ? viewStart + 2 * viewNum + bufferItems
          : state.data.length // 下一屏最后一个数据的索引（以免超出范围）

      state.visibleData = state.data.slice(start, end) // 间接利用Diff算法来算出上下屏的显示范围，将全列表数据按照范围给到显示数据中
      state.translate = start * props.itemSize // 实现平滑过渡，先渲染上一屏的内容，然后再渲染显示区域的内容
      return
    }

    // 使用动态渲染
    const startIndex = getStartIndex({ state, scrollTop: scrollPosition }) //*
    const start = startIndex > 0 ? startIndex : 0
    const end = Math.min(startIndex + viewNum + 2, state.data.length)
    state.visibleData = state.data.slice(start, end) // 计算新的可视数据
    state.translate = start >= 1 ? state.positions[start - 1].bottom : 0
    state.translate = state.translate > 0 ? state.translate : 0
    await nextTick(updatePositions({ state, items, props }))
    state.totalSize = calculateTotalSize({ state, props })
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
