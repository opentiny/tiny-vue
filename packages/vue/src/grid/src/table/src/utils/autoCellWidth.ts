/**
 * 处理自适应列宽的函数
 * @param autoArr - 需要自适应的列数组
 * @param meanWidth - 平均宽度
 * @param minCellWidth - 最小单元格宽度
 * @param tableWidth - 表格总宽度
 * @param fit - 是否需要填充满容器
 * @param bodyWidth - 表格容器宽度
 */
const adaptive = ({ autoArr, meanWidth, minCellWidth, tableWidth, fit, bodyWidth }) => {
  autoArr.forEach((column, index) => {
    let width = Math.max(meanWidth, minCellWidth)

    column.renderWidth = width
    tableWidth += width

    if (fit && index === autoArr.length - 1) {
      // 如果所有列足够放的情况下，修补列之间的误差
      let odiffer = bodyWidth - tableWidth

      if (odiffer > 0) {
        column.renderWidth += odiffer
        tableWidth = bodyWidth
      }
    }
  })

  return tableWidth
}

/**
 * 初始化表格宽度，计算每一列的渲染宽度
 * @param remainWidth - 剩余可用宽度
 * @param columnStore - 列配置存储对象，包含不同类型的列数组
 * @returns {Object} 返回计算后的表格总宽度和平均宽度
 */
const initTableWidth = ({ remainWidth, columnStore }) => {
  // 初始化表格总宽度
  let tableWidth = 0

  // 从columnStore中解构出不同类型的列数组:
  // resizeArr - 用户手动调整过宽度的列
  // pxMinArr - 设置了最小像素宽度(min-width="100px")的列
  // pxArr - 设置了固定像素宽度(width="100px")的列
  let { resizeList: resizeArr, pxMinList: pxMinArr, pxList: pxArr } = columnStore

  // scaleArr - 设置了百分比宽度(width="20%")的列
  // scaleMinArr - 设置了最小百分比宽度(min-width="20%")的列
  let { scaleList: scaleArr, scaleMinList: scaleMinArr } = columnStore

  // 1. 首先处理设置了最小像素宽度的列
  // 这些列的宽度不能小于设定的最小宽度
  pxMinArr.forEach((column) => {
    let minWidth = parseInt(column.minWidth)
    tableWidth += minWidth
    column.renderWidth = minWidth
  })

  // 计算1%宽度对应的像素值,用于处理百分比宽度
  let meanWidth = remainWidth / 100

  // 2. 处理设置了最小百分比宽度的列
  // 将百分比转换为实际像素值
  scaleMinArr.forEach((column) => {
    let scaleWidth = Math.floor(parseInt(column.minWidth) * meanWidth)
    tableWidth += scaleWidth
    column.renderWidth = scaleWidth
  })

  // 3. 处理设置了固定百分比宽度的列
  scaleArr.forEach((column) => {
    let scaleWidth = Math.floor(parseInt(column.width) * meanWidth)
    tableWidth += scaleWidth
    column.renderWidth = scaleWidth
  })

  // 4. 处理设置了固定像素宽度的列
  pxArr.forEach((column) => {
    let width = parseInt(column.width)
    tableWidth += width
    column.renderWidth = width
  })

  // 5. 最后处理用户手动调整过宽度的列
  // 这些列的宽度优先级最高
  resizeArr.forEach((column) => {
    let width = parseInt(column.resizeWidth)
    tableWidth += width
    column.renderWidth = width
  })

  // 返回计算后的表格总宽度和平均宽度
  // tableWidth用于后续的自适应计算
  // meanWidth用于计算剩余空间的分配
  return { tableWidth, meanWidth }
}

/**
 * 计算表格的总宽度，并处理列的自适应和填充逻辑
 * @param bodyWidth - 表格容器的宽度
 * @param columnStore - 列配置存储对象
 * @param fit - 是否需要填充满容器
 * @param minCellWidth - 最小单元格宽度
 * @returns {number} 返回计算后的表格总宽度
 */
export const calcTableWidth = ({ bodyWidth, columnStore, fit, minCellWidth }) => {
  // 初始化表格宽度和平均宽度
  let { tableWidth, meanWidth } = initTableWidth({ remainWidth: bodyWidth, columnStore })
  // 获取最小像素宽度列、最小百分比宽度列和自适应列
  let { pxMinList: pxMinArr, scaleMinList: scaleMinArr, autoList: autoArr } = columnStore

  // 计算剩余可用宽度
  const remainWidth = bodyWidth - tableWidth
  // 计算每列平均可分配宽度
  // 如果有剩余宽度,则平均分配给最小宽度列和自适应列
  // 如果没有剩余宽度,则为0
  meanWidth = remainWidth > 0 ? Math.floor(remainWidth / (scaleMinArr.length + pxMinArr.length + autoArr.length)) : 0

  // 如果需要填充满容器
  if (fit) {
    // 如果有剩余宽度
    if (remainWidth > 0) {
      // 将剩余宽度平均分配给最小百分比宽度列和最小像素宽度列
      scaleMinArr.concat(pxMinArr).forEach((column) => {
        tableWidth += meanWidth
        column.renderWidth += meanWidth
      })
    }
  } else {
    // 如果不需要填充满容器,则使用最小单元格宽度
    meanWidth = minCellWidth
  }

  // 处理自适应列的宽度
  tableWidth = adaptive({ autoArr, meanWidth, minCellWidth, tableWidth, fit, bodyWidth })

  // 计算处理完自适应列后与容器的剩余空间
  const remainingSpace = bodyWidth - tableWidth

  // 如果需要填充满容器且还有剩余空间
  if (fit && remainingSpace > 0) {
    // 将剩余空间以1px为单位分配给最小百分比宽度列和最小像素宽度列
    // 分配数量不超过剩余空间大小
    scaleMinArr
      .concat(pxMinArr)
      .slice(0, remainingSpace)
      .forEach((column) => {
        tableWidth += 1
        column.renderWidth += 1
      })
  }
  return tableWidth
}

/**
 * 设置固定列的左侧或右侧定位位置
 * @param columnList - 需要处理的列数组
 * @param direction - 方向，'left' 或 'right'
 * @param headerEl - 表头DOM元素
 * @param bodyEl - 表体DOM元素
 * @param scrollbarWidth - 滚动条宽度
 */
const setLeftOrRightPosition = ({ columnList, direction, headerEl, bodyEl, scrollbarWidth }) => {
  // 这里需要浅拷贝一份，避免改变原始数据的顺序
  const colList = columnList.slice()

  // 如果是右测冻结则需要反转数组后再进行循环
  if (direction === 'right') {
    colList.reverse()
  }

  colList.reduce((pos, column) => {
    // 可能存在没有表头的情况，所以需要兼容处理下
    const ths = headerEl?.querySelectorAll(`[data-colid=${column.id}]`) || []
    const tds = bodyEl.querySelectorAll(`[data-colid=${column.id}]`)
    const allFixed = [...Array.from(ths), ...Array.from(tds)]
    allFixed.forEach((td) => {
      // 有纵向滚动条时，表头右冻结列需要补偿right定位
      let compensatingWidth = 0
      if (direction === 'right' && scrollbarWidth && td.className.includes('header__column')) {
        compensatingWidth = scrollbarWidth
      }

      td.style[direction] = `${pos + compensatingWidth}px`
    })
    column.style = column.style || {}
    column.style[direction] = pos
    pos += column.renderWidth

    return pos
  }, 0)
}

/**
 * 设置分组表头中固定列的定位位置
 * 处理多级表头情况下的固定列定位
 * @param columnChart - 列层级关系图
 * @param direction - 方向，'left' 或 'right'
 */
const setGroupHeaderPosition = ({ columnChart, direction }) => {
  // 这里需要浅拷贝一份，避免改变原始数据的顺序
  const colChart = columnChart.slice()
  const finishColumns = new Set()
  // 如果是右测冻结则需要反转数组后再进行循环
  if (direction === 'right') {
    colChart.reverse()
  }

  colChart.forEach((columns) => {
    const len = columns.length
    if (len === 1) {
      return
    }

    const leafColumn = columns[len - 1]
    const leafDirectionPos = leafColumn?.style?.[direction] ?? null

    if (leafDirectionPos !== null) {
      columns.forEach((column, index) => {
        // 叶子节点则返回
        if (index === columns.length - 1) {
          return
        }
        column.style = column.style || {}
        if (!finishColumns.has(column.id)) {
          column.style[direction] = leafDirectionPos
          finishColumns.add(column.id)
        }
      })
    }
  })
}

/**
 * 标记分组表头中的特殊固定列
 * 设置左侧最后一个固定列和右侧第一个固定列的标记
 * @param columnChart - 列层级关系图
 * @param leftList - 左侧固定列数组
 * @param rightList - 右侧固定列数组
 */
const setGroupHeaderLastOrFirst = ({ columnChart, leftList, rightList }) => {
  columnChart.forEach((columns) => {
    const len = columns.length
    const leafColumn = columns[len - 1]

    const isFixedLeftLast = leftList[leftList.length - 1] === leafColumn
    const isFixedRightFirst = rightList[0] === leafColumn

    columns.forEach((column) => {
      column.isFixedLeftLast = column.isFixedLeftLast || isFixedLeftLast
      column.isFixedRightFirst = column.isFixedRightFirst || isFixedRightFirst
    })
  })
}

/**
 * 计算并设置固定列的粘性定位位置
 * 主要处理固定列的位置计算和样式设置
 * @param headerEl - 表头DOM元素
 * @param bodyEl - 表体DOM元素
 * @param columnStore - 列配置存储对象
 * @param scrollbarWidth - 滚动条宽度
 * @param columnChart - 列层级关系图
 * @param isGroup - 是否是分组表头
 */
export const calcFixedStickyPosition = ({ headerEl, bodyEl, columnStore, scrollbarWidth, columnChart, isGroup }) => {
  // 获取左侧和右侧冻结列
  const { leftList, rightList } = columnStore
  setLeftOrRightPosition({ columnList: leftList, direction: 'left', headerEl, bodyEl, scrollbarWidth })
  setLeftOrRightPosition({ columnList: rightList, direction: 'right', headerEl, bodyEl, scrollbarWidth })
  if (isGroup) {
    setGroupHeaderPosition({ columnChart, direction: 'left' })
    setGroupHeaderPosition({ columnChart, direction: 'right' })
    setGroupHeaderLastOrFirst({ columnChart, leftList, rightList })
  }
}
