import { getRowkey } from '@opentiny/vue-renderless/grid/utils'

const TEMPORARY_CHILDREN = '_$children_'
const TEMPORARY_SHOW = '_$show_'

let rowUniqueId = 0

const getRowUniqueId = () => `row_${++rowUniqueId}`

const ROWKEY_MAP = new WeakMap()

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

const TOTALROWS_MAP = new WeakMap()

const setTotalRows = (_vm) => {
  const { afterFullData, scrollYLoad, treeConfig, treeExpandeds } = _vm
  let totalRows = afterFullData.length

  if (scrollYLoad && treeConfig) {
    const { children } = treeConfig

    Array.isArray(treeExpandeds) && treeExpandeds.forEach((expandRow) => Array.isArray(expandRow[children]) && (totalRows += expandRow[children].length))
  }

  TOTALROWS_MAP.set(_vm, totalRows)
}

const getTableCellKey = ({ $table, column, row }) => {
  if (!ROWKEY_MAP.has($table)) {
    setTableRowKey($table)
  }

  return `${row[ROWKEY_MAP.get($table)]}-${column.id}`
}

const setTreeScrollYCache = (_vm) => {
  setTotalRows(_vm)
}

const getChart = (_vm) => {
  const { afterFullData, scrollYLoad, treeConfig, treeExpandeds } = _vm

  if (!scrollYLoad || !treeConfig) return

  const { children, temporaryChildren = TEMPORARY_CHILDREN, temporaryShow = TEMPORARY_SHOW } = treeConfig
  const isValidArr = (arr) => Array.isArray(arr) && arr.length
  const isExpand = (row) => ~treeExpandeds.indexOf(row)
  const chart = []

  const fnRow = (row, level) => {
    const chartItem = Array.from({ length: level + 1 })

    row[temporaryShow] = false
    row[temporaryChildren] = []

    chartItem.splice(level, 1, row)
    chart.push(chartItem)

    if (isExpand(row) && isValidArr(row[children])) {
      row[children].forEach((child) => fnRow(child, level + 1))
    }
  }

  if (isValidArr(afterFullData)) {
    afterFullData.forEach((row) => fnRow(row, 0))
  }

  return chart
}

const sliceTreeData = ({ afterFullData, renderSize, scrollYLoad, startIndex, treeConfig, treeExpandeds }) => {
  const { temporaryChildren = TEMPORARY_CHILDREN, temporaryShow = TEMPORARY_SHOW } = treeConfig
  const chart = getChart({ afterFullData, scrollYLoad, treeConfig, treeExpandeds })
  const subChart = chart.slice(startIndex, startIndex + renderSize)
  const subTree = []

  const fnSubTree = (subChart, chart, startIndex, subTree) => {
    subChart.forEach((chartItem, i) => {
      let row = chartItem[chartItem.length - 1]

      row[temporaryShow] = true

      if (chartItem.length === 1) {
        subTree.push(row)
      } else {
        let maxLen = chartItem.length
        let parent
        let j = startIndex + i - 1
        let chartItemJ

        const fnParent = () => {
          for (; j >= 0; j--) {
            chartItemJ = chart[j]

            if (chartItemJ.length < maxLen) {
              maxLen = chartItemJ.length
              parent = chartItemJ[chartItemJ.length - 1]

              if (parent[temporaryChildren]) {
                !~parent[temporaryChildren].indexOf(row) && parent[temporaryChildren].push(row)
              } else {
                parent[temporaryChildren] = [row]
              }

              row = parent
            }

            if (chartItemJ.length === 1) {
              return row
            }
          }
        }

        fnParent()

        if (!~subTree.indexOf(parent)) {
          subTree.push(parent)
        }
      }
    })
  }

  fnSubTree(subChart, chart, startIndex, subTree)

  return subTree
}

const sliceFullData = ({ afterFullData, renderSize, scrollYLoad, startIndex, treeConfig, treeExpandeds }) => {
  let result

  if (scrollYLoad) {
    if (treeConfig) {
      result = sliceTreeData({ afterFullData, renderSize, scrollYLoad, startIndex, treeConfig, treeExpandeds })
    } else {
      result = afterFullData.slice(startIndex, startIndex + renderSize)
    }
  } else {
    result = afterFullData.slice(0)
  }

  return result
}

const getTotalRows = (_vm) => {
  const { afterFullData, scrollYLoad, treeConfig } = _vm
  let totalRows = afterFullData.length

  if (scrollYLoad && treeConfig) {
    if (!TOTALROWS_MAP.get(_vm)) {
      setTotalRows(_vm)
    }

    totalRows = TOTALROWS_MAP.get(_vm)
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
  const { lastStartIndex, renderSize, scrollXLoad, startIndex, tableColumn } = args
  const { treeConfig, visibleColumn, visibleColumnChanged } = args

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

  return {
    tableColumn: tableColumn2,
    lastStartIndex: lastStartIndex2,
    visibleColumnChanged: visibleColumnChanged2,
    sliced
  }
}

const clearOnTableUnmount = ($table) => {
  if (ROWKEY_MAP.has($table)) {
    ROWKEY_MAP.delete($table)
  }

  if (TOTALROWS_MAP.has($table)) {
    TOTALROWS_MAP.delete($table)
  }
}

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
  sliceVisibleColumn
}
