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
import binarySearch from './utils/utils'

// 获取列表起始索引
const getStartIndex = ({ state, scrollTop = 0 }) => {
  if (!state || !state.positions) return 0
  // 二分法查找
  return binarySearch(state.positions, scrollTop)
}

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
      const s = node.getBoundingClientRect()[attr]
      let index = +node.id.slice(1)
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
    if (!dValue || !nodes.length) return
    for (let k = nodes.length; k < positions.length; k++) {
      positions[k].top = positions[k - 1].bottom
      positions[k].bottom = positions[k].bottom - dValue
    }
    if (!dValue) return
  }

// 计算数据总高度
export const calculateTotalSize = ({ props, state }) => {
  if (props.itemSize) {
    return props.itemSize * state.data.length
  }
  const lastPosition = state.positions?.[state.positions.length - 1]
  return lastPosition ? lastPosition.bottom : 0
}
// 虚拟滚动逻辑
export const handleScroll = ({ props, state, virtualScroll, nextTick, items, ...rest }) => {
  let animationFrameId: number | null = null
  const processScroll = async () => {
    if (!virtualScroll.value) return
    await nextTick()
    let start, end, totalSize, bufferSize
    const size = props.visibleSize

    const viewNum = Math.ceil(size / (props.itemSize ?? props.estimatedItemSize))

    const scrollPosition =
      props.direction === 'vertical' ? virtualScroll.value.scrollTop : virtualScroll.value.scrollLeft
    if (state.temporary.prerender) {
      start = 0
      end = Math.min(props.prerender, state.data.length)
      totalSize = null
    } else {
      if (props.itemSize) {
        const viewStart = ~~(scrollPosition / props.itemSize)

        // 计算缓存区的大小对应的条数
        const bufferItems = props.buffer * viewNum
        // 计算要显示的范围，使用Diff算法来更新数据范围
        start = viewStart - bufferItems > 0 ? viewStart - bufferItems : 0
        end =
          viewStart + viewNum + bufferItems < state.data.length ? viewStart + viewNum + bufferItems : state.data.length

        state.visibleData = state.data.slice(start, end)

        state.translate = start * props.itemSize

        return
      }

      // 使用动态渲染
      const startIndex = getStartIndex({ state, scrollTop: scrollPosition })
      const bufferCount = viewNum * props.buffer
      const endIndex = startIndex + viewNum
      const aboveCount = Math.min(startIndex, bufferCount)
      const belowCount = Math.min(state.data.length - endIndex, bufferCount)
      start = startIndex - aboveCount
      end = endIndex + belowCount
      state.visibleData = state.data.slice(start, end) // 计算新的可视数据
      if (startIndex >= 1) {
        bufferSize = state.positions[startIndex].top - (state.positions[start] ? state.positions[start].top : 0)
        state.translate = state.positions[startIndex - 1].bottom - bufferSize
      } else {
        state.translate = 0
      }
      await updatePositions({ state, items, props })
      totalSize = calculateTotalSize({ state, props })
    }
    state.totalSize = totalSize
  }
  return (event) => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
    }
    animationFrameId = requestAnimationFrame(() => {
      processScroll()
    })
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
// 滚动到指定距离
export const scrollToPosition =
  ({ virtualScroll, props }) =>
  (position) => {
    const scrollProperty = props.direction === 'vertical' ? 'scrollTop' : 'scrollLeft'
    const viewPort = virtualScroll.value
    if (viewPort) {
      viewPort[scrollProperty] = position
    }
  }
// 滚动到指定项目
export const scrollToItem =
  ({ api, props, state }) =>
  (index) => {
    let position
    if (props.itemSize === null) {
      position = index > 0 ? state.positions[index - 1].bottom : 0 // 无
    } else {
      position = (index - 1) * props.itemSize
    }
    api.scrollToPosition(position)
  }
