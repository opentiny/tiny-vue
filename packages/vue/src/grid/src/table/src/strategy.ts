import { getRowkey } from '@opentiny/vue-renderless/grid/utils'
import { warn } from '../../tools'

const TEMPORARY_CHILDREN = '_$children_'
const TEMPORARY_SHOW = '_$show_'
const ROWKEY_MAP = new WeakMap()
const TOTALROWS_MAP = new WeakMap()
const CHART_MAP = new WeakMap()

let rowUniqueId = 0

const getRowUniqueId = () => `row_${++rowUniqueId}`
const isValidArray = (arr) => Array.isArray(arr) && arr.length

const setTableRowKey = ($table) => {
  if (!ROWKEY_MAP.has($table)) {
    ROWKEY_MAP.set($table, getRowkey($table))
  }

  return ROWKEY_MAP.get($table)
}

const getTableRowKey = ($table) => {
  if (!ROWKEY_MAP.has($table)) {
    setTableRowKey($table)
  }

  return ROWKEY_MAP.get($table)
}

const getTableCellKey = ({ $table, column, row }) => {
  if (!ROWKEY_MAP.has($table)) {
    setTableRowKey($table)
  }

  return `${row[ROWKEY_MAP.get($table)]}-${column.id}`
}

const setTreeScrollYCache = (_vm) => {
  setCacheChartMap(_vm)
  setTotalRows(_vm)
}

const buildChart = (_vm) => {
  const { afterFullData, scrollYLoad, treeConfig, treeExpandeds } = _vm

  if (!scrollYLoad || !treeConfig) return

  const chart = []
  const stack = []
  const isExpanded = (row) => ~treeExpandeds.indexOf(row)
  const { children } = treeConfig
  const iterate = (arr, chart) => isValidArray(arr) && arr.forEach((row) => traverse(row, chart))
  const traverse = (row, chart) => {
    chart.push([...stack, row])

    if (isExpanded(row)) {
      stack.push(row)
      iterate(row[children], chart)
      stack.pop()
    }
  }

  iterate(afterFullData, chart)

  return chart
}

const clearTreeShow = (_vm) => {
  const { afterFullData, scrollYLoad, treeConfig, _subTree } = _vm

  if (!scrollYLoad || !treeConfig) return

  const { children, temporaryChildren = TEMPORARY_CHILDREN, temporaryShow = TEMPORARY_SHOW } = treeConfig
  const iterate = (arr) => isValidArray(arr) && arr.forEach((child) => traverse(child))
  const traverse = (row) => {
    row[temporaryShow] = false
    row[temporaryChildren] = []
    iterate(row[children])
  }

  iterate(_subTree || afterFullData)
}

const sliceTreeData = (_vm) => {
  clearTreeShow(_vm)

  const chart = getCacheChartMap(_vm)
  const { scrollYStore, treeConfig } = _vm
  const { renderSize, startIndex } = scrollYStore
  const subChart = chart.slice(startIndex, startIndex + renderSize)
  const subTree = []
  const { temporaryChildren = TEMPORARY_CHILDREN, temporaryShow = TEMPORARY_SHOW } = treeConfig
  const pushIfNot = (arr, item) => !~arr.indexOf(item) && arr.push(item)

  subChart.forEach((chartItem) => {
    const lastIndex = chartItem.length - 1

    for (let i = lastIndex; i > -1; i--) {
      if (i === lastIndex) {
        chartItem[i][temporaryShow] = true
      } else {
        pushIfNot(chartItem[i][temporaryChildren], chartItem[i + 1])
      }
    }

    pushIfNot(subTree, chartItem[0])
  })

  // 优化清除，只清除被渲染的数据，而不是全量数据
  _vm._subTree = subTree
  return subTree
}

const sliceFullData = (_vm) => {
  let { afterFullData, scrollYLoad, scrollYStore, treeConfig } = _vm
  let { renderSize, startIndex } = scrollYStore
  let result

  if (scrollYLoad) {
    if (treeConfig) {
      result = sliceTreeData(_vm)
    } else {
      result = afterFullData.slice(startIndex, startIndex + renderSize)
    }
  } else {
    result = afterFullData.slice(0)
  }

  return result
}

const setTotalRows = (_vm) => {
  const { afterFullData, scrollYLoad, treeConfig } = _vm
  let totalRows = afterFullData.length

  if (scrollYLoad && treeConfig) {
    totalRows = getCacheChartMap(_vm).length
  }

  TOTALROWS_MAP.set(_vm, totalRows)
}

const getTotalRows = (_vm) => {
  const { afterFullData, scrollYLoad, scrollLoad, treeConfig } = _vm
  let totalRows = afterFullData.length

  if (scrollYLoad && treeConfig) {
    if (!TOTALROWS_MAP.get(_vm)) {
      setTotalRows(_vm)
    }

    totalRows = TOTALROWS_MAP.get(_vm)
  }

  // 滚动分页场景总行数由（afterFullData.length）调整为（scrollLoad.pageSize），解决最后一页数据不足时滚动条位置改变问题
  if (scrollLoad) {
    totalRows = scrollLoad.pageSize || 10
  }

  return totalRows
}

const getTreeChildrenKey = ({ scrollYLoad, treeConfig }) => {
  if (!treeConfig) {
    return
  }

  let { children: childrenKey, temporaryChildren = TEMPORARY_CHILDREN } = treeConfig

  if (scrollYLoad) {
    childrenKey = temporaryChildren
  }

  return childrenKey
}

const getTreeShowKey = ({ scrollYLoad, treeConfig }) => {
  if (!treeConfig) {
    return
  }

  let treeShowKey = ''
  const { temporaryShow = TEMPORARY_SHOW } = treeConfig

  if (scrollYLoad) {
    treeShowKey = temporaryShow
  }

  return treeShowKey
}

const sliceVisibleColumn = (args) => {
  const { lastStartIndex, renderSize, scrollXLoad, startIndex, tableColumn, columnStore } = args
  const { treeConfig, visibleColumn, visibleColumnChanged } = args
  const { leftList, rightList } = columnStore

  let tableColumn2 = tableColumn
  let lastStartIndex2 = lastStartIndex
  let visibleColumnChanged2 = visibleColumnChanged
  let sliced = false

  if (scrollXLoad && treeConfig) {
    if (visibleColumnChanged || !~lastStartIndex || lastStartIndex !== startIndex) {
      tableColumn2 = visibleColumn.slice(startIndex, startIndex + renderSize)
      lastStartIndex2 = startIndex
      visibleColumnChanged2 = false
      sliced = true
    }
  } else {
    tableColumn2 = visibleColumn.slice(startIndex, startIndex + renderSize)
    sliced = true
  }

  // x轴虚拟滚动时，需要一直保持冻结列显示
  tableColumn2 = Array.from(new Set([...leftList, ...tableColumn2, ...rightList]))

  return {
    tableColumn: tableColumn2,
    lastStartIndex: lastStartIndex2,
    visibleColumnChanged: visibleColumnChanged2,
    sliced
  }
}

const removeSliceColumnTree = (_vm) => _vm._sliceColumnTree && (_vm._sliceColumnTree = null)

const clearOnTableUnmount = ($table) => {
  if (ROWKEY_MAP.has($table)) {
    ROWKEY_MAP.delete($table)
  }

  if (TOTALROWS_MAP.has($table)) {
    TOTALROWS_MAP.delete($table)
  }

  if (CHART_MAP.has($table)) {
    CHART_MAP.delete($table)
  }

  removeSliceColumnTree($table)
}

const setCacheChartMap = (_vm) => CHART_MAP.set(_vm, buildChart(_vm))

const getCacheChartMap = (_vm) => CHART_MAP.get(_vm)

// 返回一个函数，用于多级表头场景对表头进行虚滚剪切
const sliceColumnTree = (_vm) => {
  const { collectColumn } = _vm
  const columnChart = []
  const stack = []
  const fixedMap = new WeakMap()
  let maxLevel = 1

  const buildColumnChart = (columns, columnChart, stack) => {
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i]

      setColumnLevel(column, stack)
      column.rowSpan = 1
      column.colSpan = 1

      if (stack.length === 0) {
        fixedMap.set(column, column.fixed || '')
      }

      if (Array.isArray(column.children) && column.children.length) {
        stack.push(column)
        buildColumnChart(column.children, columnChart, stack)
        stack.pop()
      } else {
        const chartItem = [...stack, column]

        columnChart.push(chartItem)

        if (chartItem.length > 1) {
          chartItem.slice(1).forEach(({ fixed }) => {
            const rootColumn = chartItem[0]
            const cachedFixed = fixedMap.get(rootColumn)

            if (fixed) {
              if (cachedFixed && cachedFixed !== fixed) {
                warn('ui.grid.error.groupColumnFixedError')
              } else if (!cachedFixed) {
                fixedMap.set(rootColumn, fixed)
              }
            }
          })
        }
      }
    }
  }

  const setColumnLevel = (column, stack) => {
    column.level = stack.length + 1

    if (column.level > maxLevel) {
      maxLevel = column.level
    }
  }

  const setColumnRowSpan = (columnChart) => {
    columnChart.forEach((cols) => {
      const lastColumn = cols[cols.length - 1]
      lastColumn.rowSpan = maxLevel - lastColumn.level + 1
    })
  }

  const findChartItem = (lastColumn) => {
    for (let i = 0; i < columnChart.length; i++) {
      const chartItem = columnChart[i]

      if (chartItem[chartItem.length - 1] === lastColumn) {
        return chartItem
      }
    }
  }

  // 如果多表头子树上存在一个冻结列，那么所有列都应该是此种冻结
  const tryRepairFixedType = (chart) => {
    chart.forEach((item) => {
      const rootColumn = item[0]
      item.forEach((col) => {
        col.fixed = fixedMap.get(rootColumn)
      })
    })
  }

  buildColumnChart(collectColumn, columnChart, stack)
  setColumnRowSpan(columnChart)
  tryRepairFixedType(columnChart)

  _vm.columnChart = columnChart
  return () => {
    const { tableColumn } = _vm
    const levelColumns = []
    const subChart = []

    tableColumn.forEach((column) => {
      subChart.push(findChartItem(column))
    })

    subChart.forEach((chartItem) => {
      chartItem.forEach((column) => {
        const levelIndex = column.level - 1

        if (!levelColumns[levelIndex]) levelColumns[levelIndex] = []

        const levelArr = levelColumns[levelIndex]

        if (levelArr[levelArr.length - 1] === column) {
          column.colSpan += 1
        } else {
          levelArr.push(column)
          column.colSpan = 1
        }
      })
    })

    return levelColumns
  }
}

const setSliceColumnTree = (_vm) => _vm.isGroup && (_vm._sliceColumnTree = sliceColumnTree(_vm))

export {
  clearOnTableUnmount,
  getRowUniqueId,
  getTableCellKey,
  getTableRowKey,
  getTotalRows,
  getTreeChildrenKey,
  getTreeShowKey,
  setTreeScrollYCache,
  setTableRowKey,
  sliceFullData,
  sliceVisibleColumn,
  setSliceColumnTree
}
