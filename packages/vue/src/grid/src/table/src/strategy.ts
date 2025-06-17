import { hooks } from '@opentiny/vue-common'
import { getRowkey } from '@opentiny/vue-renderless/grid/utils'
import { arrayEach, isEqual } from '@opentiny/vue-renderless/grid/static'
import { buildRenderGraph } from '../../composable'

const { toRaw } = hooks

const VIRTUAL_ROW_KEY = '_$virtual_'

const difference = (arr, other) => arr.filter((i) => other.findIndex((j) => i.id === j.id) === -1)

const sliceVisibleColumn = (args) => {
  const { lastStartIndex, renderSize, scrollXLoad, startIndex, tableColumn, columnStore } = args
  const { treeConfig, visibleColumn, visibleColumnChanged } = args
  const { leftList, rightList } = columnStore

  const changeFrom = tableColumn.reduce((p, c) => p + c.id, '')

  let tableColumn2 = tableColumn
  let lastStartIndex2 = lastStartIndex
  let visibleColumnChanged2 = visibleColumnChanged
  let sliced = false
  let addedColumn = []

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

  const changeTo = tableColumn2.reduce((p, c) => p + c.id, '')

  if (changeFrom === changeTo) {
    tableColumn2 = tableColumn
    sliced = false
  } else {
    addedColumn = difference(tableColumn2, tableColumn)
  }

  return {
    tableColumn: tableColumn2,
    lastStartIndex: lastStartIndex2,
    visibleColumnChanged: visibleColumnChanged2,
    sliced,
    addedColumn
  }
}

/** 判断是否是虚拟行 */
const isVirtualRow = (row) => row && row[VIRTUAL_ROW_KEY]

/** 普通表分组场景，按数据顺序对数据进行分组 */
const orderingGroupBy = (arr, key, equals, active, rowKey) => {
  const result = []
  const virtualItems = []
  // 虚拟行id计数
  let virtualRowId = 0
  const createVirtualItem = (vItem) => {
    vItem = {
      [VIRTUAL_ROW_KEY]: true,
      [rowKey]: `row_g_${++virtualRowId}`,
      value: null,
      children: [],
      fold: false,
      hover: false
    }
    result.push(vItem)
    virtualItems.push(vItem)
    return vItem
  }

  let virtualItem = createVirtualItem()
  let prevSibling, equalsParam

  arrayEach(arr, (item, i) => {
    if (i > 0) {
      prevSibling = arr[i - 1]
      equalsParam = { prevRow: prevSibling, row: item }
    }
    // 如果当前行和前一行分组字段不相同，就创建一个新的虚拟行
    if (i > 0 && !equals(prevSibling[key], item[key], equalsParam)) {
      virtualItem = createVirtualItem()
    }

    virtualItem.children.push(item)
    result.push(item)
  })

  arrayEach(virtualItems, (vItem) => {
    vItem.value = vItem.children[0][key]
    // 设置虚拟行的展开状态
    if (typeof active === 'function') {
      const expand = active(vItem)
      vItem.fold = typeof expand === 'boolean' ? !expand : false
    }
  })

  const rawResult = result.map(toRaw)

  arrayEach(virtualItems.slice().reverse(), (vItem) => {
    if (!vItem.fold) return

    // 如果合起，对分组数据进行移除
    const index = rawResult.indexOf(toRaw(vItem.children[0]))

    if (index > -1) {
      result.splice(index, vItem.children.length)
    }
  })

  return result
}

/** 普通表分组场景，在全量数据筛选排序之后，进行分组处理生成虚拟行 */
const buildRowGroupFullData = (fullData, _vm) => {
  const { treeConfig, rowGroup } = _vm
  const { field, equals, activeMethod } = rowGroup || {}

  // 是否具有虚拟行：非树表（普通表），分组表，存在数据
  _vm.hasVirtualRow = !treeConfig && rowGroup && field && fullData.length > 0

  if (_vm.hasVirtualRow) {
    // 在配置满足条件时，进行分组构建
    _vm.groupFullData = orderingGroupBy(fullData, field, equals || isEqual, activeMethod, getRowkey(_vm))
  }
}

/** 普通表分组场景，分组行点击处理 */
const handleRowGroupFold = (row, _vm) => {
  const { hasVirtualRow, groupFullData, rowGroup = {} } = _vm
  const { closeable = true } = rowGroup

  if (!hasVirtualRow || !closeable || !isVirtualRow(row)) return

  row.fold = !row.fold

  const copy = groupFullData.slice(0).map(toRaw)
  const index = copy.indexOf(toRaw(row.children[0]))

  if (row.fold) {
    if (index > -1) {
      // 如果被合起且子列在 groupFullData 内就进行移除
      copy.splice(index, row.children.length)
    }
  } else if (index === -1) {
    // 如果被展开且子列不在 groupFullData 内就进行添加
    copy.splice(copy.indexOf(toRaw(row)) + 1, 0, ...row.children)
  }

  _vm.groupFullData = copy
  buildRenderGraph(_vm)
  _vm.handleTableData().then(_vm.recalculate)
}

// 获取列的固定样式（参数为column和$table）
const getFixedStyle = ({ fixedDetails }, { overflowX }) => (fixedDetails && overflowX ? fixedDetails.getStyle() : {})

// 获取列的固定类（参数为column和$table）
const getFixedClass = ({ fixedDetails }, { overflowX }) => ({
  'fixed__column': fixedDetails && overflowX,
  ...(fixedDetails && overflowX ? fixedDetails.getClass() : {})
})

export { sliceVisibleColumn, buildRowGroupFullData, handleRowGroupFold, isVirtualRow, getFixedStyle, getFixedClass }
