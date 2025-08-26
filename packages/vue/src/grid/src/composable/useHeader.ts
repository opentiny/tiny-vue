import { hooks } from '@opentiny/vue-common'

export const calcHeader = (collectColumn) => {
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
    } else if (parent) {
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

  return { leafColumns, headerTable, rowspanMap, maxLevel }
}

const calcSpan = (tableColumn, header, headerRowHeight) => {
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
          height: rowspan * headerRowHeight,
          top: i * headerRowHeight
        }
      })
  })

  return subTable
}

export const useHeader = (props, bodyVm, headerRowHeight) => {
  const headerTable = hooks.ref([])
  const $table = bodyVm.$parent
  const { showHeader } = $table
  const header = hooks.ref()

  hooks.watch(
    () => props.collectColumn,
    () => {
      const head = (header.value = calcHeader(props.collectColumn))
      if (showHeader) {
        $table.headerHeight = (head.maxLevel + 1) * headerRowHeight.value
      }
    }
  )

  hooks.watch([() => props.tableColumn, header], () => {
    const head = header.value

    if (showHeader && head) {
      headerTable.value = calcSpan(props.tableColumn, head, headerRowHeight.value)
    }
  })

  return { headerTable }
}
