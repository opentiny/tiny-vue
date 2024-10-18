import getScrollbarSize from '../common/deps/scrollbar-width'

export const computedBarSize = (props) => () => {
  let barSize = +props.scrollbarSize

  if (isNaN(barSize) || barSize < 0) {
    barSize = getScrollbarSize()
  }

  return barSize
}

export const analyzeScrolling =
  ({ props, state }) =>
  () => {
    const width = +props.width
    const height = +props.height
    const scrollbarSize = state.scrollbarSize
    const columnSizes = props.columnSizes
    const rowSizes = props.rowSizes

    const columnTotal = columnSizes.reduce((p, c) => p + c, 0)
    const rowTotal = rowSizes.reduce((p, r) => p + r, 0)

    const result = {
      isScrollX: false,
      isScrollY: false,
      columnTotal,
      rowTotal
    }

    if (columnTotal > width && rowTotal > height) {
      result.isScrollX = true
      result.isScrollY = true
    } else if (columnTotal <= width && rowTotal <= height) {
      result.isScrollX = false
      result.isScrollY = false
    } else if (columnTotal <= width && rowTotal > height) {
      result.isScrollX = columnTotal + scrollbarSize > width
      result.isScrollY = true
    } else if (columnTotal > width && rowTotal <= height) {
      result.isScrollX = true
      result.isScrollY = rowTotal + scrollbarSize > height
    }

    return result
  }

const preprocessVirtualScrollSlice = ({ items, itemSizes, fixedItems }) => {
  const hasStart = fixedItems[0].length > 0
  const hasEnd = fixedItems[1].length > 0
  const startInfos = []
  const infos = []
  const endInfos = []
  let startSize = 0
  let endSize = 0

  items.forEach((item, i) => {
    const raw = item
    const size = itemSizes[i]
    const info = {
      raw,
      size,
      start: 0,
      end: 0,
      index: i,
      fixed: undefined,
      offset: undefined,
      startLast: undefined,
      endFirst: undefined,
      isLast: undefined
    }

    if (hasStart && fixedItems[0].includes(i)) {
      startInfos.push(info)
      startSize += size
      info.fixed = 'start'
    } else if (hasEnd && fixedItems[1].includes(i)) {
      endInfos.push(info)
      endSize += size
      info.fixed = 'end'
    } else {
      infos.push(info)
    }
  })

  let allInfos = [...infos]

  if (hasStart || hasEnd) {
    allInfos = [...startInfos, ...infos, ...endInfos]

    if (hasStart && startInfos[startInfos.length - 1]) {
      startInfos[startInfos.length - 1].startLast = true
    }

    if (hasEnd && endInfos[0]) {
      endInfos[0].endFirst = true
    }
  }

  if (allInfos[allInfos.length - 1]) {
    allInfos[allInfos.length - 1].isLast = true
  }

  let reverseAllInfos = [...allInfos].reverse()
  let total = 0

  allInfos.forEach((info) => {
    info.start = total
    total += info.size
  })

  total = 0

  reverseAllInfos.forEach((info) => {
    info.end = total
    total += info.size
  })

  return { startSize, endSize, startInfos, infos, endInfos }
}

const virtualScrollSlice = ({
  size,
  buffer,
  startSize,
  endSize,
  startInfos,
  infos,
  endInfos,
  pos,
  isScroll,
  barSize
}) => {
  const list = []
  const viewStart = pos + startSize - buffer
  const viewEnd = pos + size - endSize + buffer - (isScroll ? barSize : 0)

  startInfos.forEach((info) => list.push(info))

  let firstInfo, firstOffset

  for (let i = 0; i < infos.length; i++) {
    const info = infos[i]

    const itemStart = info.start
    const itemEnd = itemStart + info.size

    if (itemEnd < viewStart) {
      continue
    }

    if ((itemStart >= viewStart && itemStart < viewEnd) || (itemEnd > viewStart && itemEnd <= viewEnd)) {
      list.push(info)

      if (!firstInfo) {
        firstInfo = info
        firstOffset = itemStart - (pos + startSize)
      }

      info.offset = firstOffset
    } else if (firstInfo) {
      break
    }
  }

  endInfos.forEach((info) => list.push(info))

  return list
}

export const createVirtualScroll =
  ({ api, props, state }) =>
  () => {
    let { width, height, columns, columnSizes, rows, rowSizes, columnBuffer, rowBuffer, fixedColumns, fixedRows } =
      props
    let { scrollbarSize } = state

    width = +width
    height = +height
    columnBuffer = +columnBuffer
    rowBuffer = +rowBuffer

    const { isScrollX, isScrollY, columnTotal, rowTotal } = api.analyzeScrolling()
    const boxStyle = { width: `${width}px`, height: `${height}px`, position: 'relative', overflow: 'auto' }
    const xAxisStyle = { width: `${columnTotal}px`, height: '1px' }
    const yAxisStyle = { height: `${rowTotal - 1}px`, width: '1px' }
    const viewBaseStyle = { width: '100%', height: '100%', position: 'absolute', overflow: 'clip' }

    const {
      startSize: colStartSize,
      endSize: colEndSize,
      startInfos: colStartInfos,
      infos: colInfos,
      endInfos: colEndInfos
    } = preprocessVirtualScrollSlice({ items: columns, itemSizes: columnSizes, fixedItems: fixedColumns })

    const {
      startSize: rowStartSize,
      endSize: rowEndSize,
      startInfos: rowStartInfos,
      infos: rowInfos,
      endInfos: rowEndInfos
    } = preprocessVirtualScrollSlice({ items: rows, itemSizes: rowSizes, fixedItems: fixedRows })

    return {
      sliceColumn: (scrollLeft) =>
        virtualScrollSlice({
          pos: scrollLeft,
          size: width,
          buffer: columnBuffer,
          startSize: colStartSize,
          endSize: colEndSize,
          startInfos: colStartInfos,
          infos: colInfos,
          endInfos: colEndInfos,
          isScroll: isScrollY,
          barSize: scrollbarSize
        }),
      sliceRow: (scrollTop) =>
        virtualScrollSlice({
          pos: scrollTop,
          size: height,
          buffer: rowBuffer,
          startSize: rowStartSize,
          endSize: rowEndSize,
          startInfos: rowStartInfos,
          infos: rowInfos,
          endInfos: rowEndInfos,
          isScroll: isScrollX,
          barSize: scrollbarSize
        }),
      buildView: ({ slicedCols, slicedRows, scrollLeft, scrollTop }) => {
        const viewRows = []
        const viewCols = []
        const result = {
          isScrollX,
          isScrollY,
          boxStyle,
          xAxisStyle,
          yAxisStyle,
          viewStyle: { left: `${scrollLeft}px`, top: `${scrollTop}px`, ...viewBaseStyle },
          viewRows,
          viewCols
        }

        let rowWidth = 0

        slicedCols.forEach((info) => {
          rowWidth += info.size

          viewCols.push({
            info,
            key: `c-${info.index}`,
            style: {
              width: `${info.size}px`,
              position: info.fixed ? 'sticky' : undefined,
              zIndex: info.fixed ? 1 : undefined,
              left: info.fixed === 'start' ? `${info.start}px` : undefined,
              right: info.fixed === 'end' ? `${info.end}px` : undefined,
              transform: info.offset === undefined ? undefined : `translateX(${info.offset}px)`
            }
          })
        })

        slicedRows.forEach((info) => {
          viewRows.push({
            info,
            key: `r-${info.index}`,
            style: {
              width: `${rowWidth}px`,
              height: `${info.size}px`,
              position: info.fixed ? 'sticky' : undefined,
              top: info.fixed === 'start' ? `${info.start}px` : undefined,
              bottom: info.fixed === 'end' ? `${info.end}px` : undefined,
              zIndex: info.fixed ? 2 : undefined,
              transform: info.offset === undefined ? undefined : `translateY(${info.offset}px)`
            }
          })
        })

        return result
      }
    }
  }

export const onScroll =
  ({ emit, state }) =>
  (e, force = false) => {
    const sLeft = e ? e.target.scrollLeft : 0
    const sTop = e ? e.target.scrollTop : 0
    const rangeThreshold = 5

    if (state.scrollLeft !== sLeft || force) {
      state.scrollLeft = sLeft
      state.slicedCols = state.vs.sliceColumn(sLeft)
    }

    if (state.scrollTop !== sTop || force) {
      state.scrollTop = sTop
      state.slicedRows = state.vs.sliceRow(sTop)
    }

    state.ctx = state.vs.buildView({
      slicedCols: state.slicedCols,
      slicedRows: state.slicedRows,
      scrollLeft: sLeft,
      scrollTop: sTop
    })

    if (state.isReady) {
      state.isTop = sTop < rangeThreshold
      state.isBottom = sTop > state.maxTop - rangeThreshold
      state.isLeft = sLeft < rangeThreshold
      state.isRight = sLeft > state.maxLeft - rangeThreshold
    }

    state.slotParams = {
      viewRows: state.ctx.viewRows,
      viewCols: state.ctx.viewCols,
      isScrollX: state.ctx.isScrollX,
      isScrollY: state.ctx.isScrollY,
      isTop: state.isTop,
      isBottom: state.isBottom,
      isLeft: state.isLeft,
      isRight: state.isRight
    }

    emit('change', state.slotParams)
  }

export const refresh =
  ({ api, state, vm, nextTick }) =>
  (options = {}) => {
    // 在刷新时，默认不保持之前的滚动位置
    const { isKeepScrollTop = false, isKeepScrollLeft = false } = options || {}

    const lastTop = isKeepScrollTop ? state.scrollTop : 0
    const lastLeft = isKeepScrollLeft ? state.scrollLeft : 0

    state.vs = api.createVirtualScroll()

    api.onScroll({ target: { scrollLeft: lastLeft, scrollTop: lastTop } }, true)

    nextTick(() => {
      state.maxTop = vm.$el.scrollHeight - vm.$el.offsetHeight
      state.maxLeft = vm.$el.scrollWidth - vm.$el.offsetWidth

      vm.$el.scrollTop = lastTop
      vm.$el.scrollLeft = lastLeft
    })
  }
