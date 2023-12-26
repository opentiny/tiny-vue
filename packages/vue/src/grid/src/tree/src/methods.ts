import { filterTree, remove, isArray, findTree, get, eachTree } from '@opentiny/vue-renderless/grid/static/'
import { getTableRowKey, setTreeScrollYCache } from '../../table/src/strategy'
import { emitEvent } from '@opentiny/vue-renderless/grid/utils'

export default {
  // 展开树节点事件
  triggerTreeExpandEvent(event, { row }) {
    let { currentColumn, currentRow } = this
    let rest = this.toggleTreeExpansion(row)
    let eventParams = { $table: this, row, rowIndex: this.getRowIndex(row) }
    emitEvent(this, 'toggle-tree-change', [eventParams, event])
    this.$nextTick(() => {
      if (currentRow) {
        this.setCurrentRow(currentRow)
      } else if (currentColumn) {
        this.setCurrentColumn(currentColumn)
      }
    })
    return rest
  },
  // 切换/展开树节点
  toggleTreeExpansion(row) {
    return this.setTreeExpansion(row)
  },
  // 处理默认展开树节点
  handleDefaultTreeExpand() {
    let { tableFullData, treeConfig } = this
    if (!treeConfig) {
      return
    }
    let { children, expandAll, expandRowKeys: rowids } = treeConfig
    let treeExpandeds = []
    let rowkey = getTableRowKey(this)
    let isNonEmptyArr = (arr) => isArray(arr) && arr.length
    // 展开所有行
    let doExpandAll = () => {
      filterTree(tableFullData, (row) => isNonEmptyArr(row[children]) && treeExpandeds.push(row), treeConfig)
      this.treeExpandeds = treeExpandeds
    }
    // 展开指定行
    let doExpandRows = () => {
      rowids.forEach((rowid) => {
        let matchObj = findTree(tableFullData, (item) => rowid === get(item, rowkey), treeConfig)

        matchObj && isNonEmptyArr(matchObj.item[children]) && treeExpandeds.push(matchObj.item)
      })
      this.treeExpandeds = treeExpandeds
    }

    if (expandAll) {
      doExpandAll()
    } else if (rowids) {
      doExpandRows()
    }

    setTreeScrollYCache(this)
  },
  setAllTreeExpansion(expanded) {
    let { tableFullData, treeConfig } = this
    let children = treeConfig.children
    let treeExpandeds = []
    if (expanded) {
      let rowHandler = (row) => {
        if (row[children] && row[children].length) {
          treeExpandeds.push(row)
        }
      }
      eachTree(tableFullData, rowHandler, treeConfig)
    }
    this.treeExpandeds = treeExpandeds

    setTreeScrollYCache(this)

    return this.$nextTick().then(this.recalculate)
  },
  // 设置展开树形节点，二个参数设置这一行展开与否：支持单行，支持多行
  setTreeExpansion(rows, expanded) {
    let { treeConfig, treeExpandeds, tableFullData } = this
    let { accordion, children } = treeConfig
    let isToggle = arguments.length === 1
    if (!rows) {
      return this.$nextTick().then(this.recalculate)
    }
    if (!isArray(rows)) {
      rows = [rows]
    }
    if (accordion) {
      rows = rows.slice(rows.length - 1, rows.length)
    }

    // 这里需要进行一次浅拷贝，不能直接操作vue observe的数组，不然vue频繁的get、set、toRaw、reactive等操作从而导致卡顿
    const treeExpandedsCopy = [...treeExpandeds]
    rows.forEach((row) => {
      if (row[children] && row[children].length) {
        const index = treeExpandedsCopy.indexOf(row)
        if (accordion) {
          // 同一级只能展开一个
          const matchObj = findTree(tableFullData, (item) => item === row, treeConfig)
          remove(treeExpandedsCopy, (item) => ~matchObj.items.indexOf(item))
        }
        if (~index && (isToggle || !expanded)) {
          treeExpandedsCopy.splice(index, 1)
          return
        }
        if (!~index && (isToggle || expanded)) {
          treeExpandedsCopy.push(row)
        }
      }
    })

    this.treeExpandeds = treeExpandedsCopy

    setTreeScrollYCache(this)

    return this.$nextTick().then(this.recalculate)
  },
  hasTreeExpand(row) {
    return ~this.treeExpandeds.indexOf(row)
  },
  clearTreeExpand() {
    const hasExpand = this.treeExpandeds.length
    this.treeExpandeds = []
    setTreeScrollYCache(this)
    return this.$nextTick().then(() => (hasExpand ? this.recalculate() : 0))
  }
}
