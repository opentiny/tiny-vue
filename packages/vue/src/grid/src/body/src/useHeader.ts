import { hooks } from '@opentiny/vue-common'

const calcHeader = (collectColumn) => {
  let maxLevel = 0
  const leafColumns = []
  const parentMap = new WeakMap()
  const levelMap = new WeakMap()

  const traverseTree = (tree, level, parent) => {
    if (Array.isArray(tree) && tree.length > 0) {
      if (level > maxLevel) {
        maxLevel = level
      }

      tree.forEach((item) => {
        if (parent) {
          parentMap.set(item, parent)
        }

        levelMap.set(item, level)

        traverseTree(item.children, level + 1, item)
      })
    } else {
      leafColumns.push(parent)
    }
  }

  traverseTree(collectColumn, 0, null)

  const headerTable = []
  const rowspanMap = new WeakMap()

  for (let i = 0; i <= maxLevel; i++) {
    headerTable[i] = new Array(leafColumns.length).fill(0)
  }

  leafColumns.forEach((column, index) => {
    const level = levelMap.get(column)

    rowspanMap.set(column, maxLevel - level + 1)
    headerTable[level][index] = column

    for (let l = level - 1; l >= 0; l--) {
      column = headerTable[l][index] = parentMap.get(column)
    }
  })

  return { leafColumns, headerTable, rowspanMap }
}

const calcSpan = (tableColumn, header, rowHeight) => {
  const indices = tableColumn.map((c) => header.leafColumns.indexOf(c))
  const subTable = []

  header.headerTable.forEach((cols, i) => {
    const countMap = new WeakMap()

    subTable[i] = indices
      .map((j) => cols[j])
      .reduce((p, col) => {
        if (col) {
          if (!p.includes(col)) {
            p.push(col)
          }

          if (countMap.has(col)) {
            countMap.set(col, countMap.get(col) + 1)
          } else {
            countMap.set(col, 1)
          }
        }
        return p
      }, [])
      .map((column) => {
        const rowspan = header.rowspanMap.get(column) || 1
        return {
          id: column.id,
          column,
          colspan: countMap.get(column),
          rowspan,
          height: rowspan * rowHeight,
          top: i * rowHeight
        }
      })
  })

  return subTable
}

export const useHeader = (props, vm, rowHeight) => {
  const headerTable = hooks.ref([])
  const { showHeader } = vm.$parent

  let header

  if (showHeader) {
    hooks.watch(
      () => props.collectColumn,
      () => {
        header = calcHeader(props.collectColumn)
      }
    )

    hooks.watch(
      () => props.tableColumn,
      () => {
        headerTable.value = calcSpan(props.tableColumn, header, rowHeight.value)
      }
    )
  }

  return { headerTable }
}
