import { hooks } from '@opentiny/vue-common'
import { find } from '@opentiny/vue-renderless/grid/static'

export const useRowGroup = ({ props, visibleColumn, tableFullColumn, tableColumn, columnStore }) => {
  const state = hooks.reactive({
    rowGroup: hooks.toRef(props, 'rowGroup'),
    visibleColumn,
    tableFullColumn,
    tableColumn,
    columnStore
  })

  if (!state.rowGroup) return

  const $table = hooks.getCurrentInstance()?.proxy

  hooks.watch([visibleColumn, tableColumn], () => {
    // 取可见列中第一个rowGroup.field作为分组列
    let targetColumn = find(state.visibleColumn, (col) => col.property === state.rowGroup.field)

    // 如果rowGroup.field指定的列不存在或不可见，就取第一个field配置存在的列
    if (!targetColumn) {
      targetColumn = find(state.visibleColumn, (col) => !!col.property)
    }

    if (targetColumn) {
      $table._rowGroupTargetColumn = targetColumn

      const index = state.tableColumn.indexOf(targetColumn)

      const length = state.tableColumn.length
      let targetColumnColspan = state.rowGroup.colspan || 1

      targetColumnColspan = Math.max(targetColumnColspan, 1)

      if (targetColumnColspan > 1) {
        let leftIndex = -1
        let rightIndex = -1

        if ((leftIndex = state.columnStore.leftList.length) > 0) {
          leftIndex = leftIndex - 1
        }

        if (state.columnStore.rightList.length > 0) {
          rightIndex = state.tableColumn.indexOf(state.columnStore.rightList[0]) - 1
        }

        let max

        if (leftIndex > -1 && index <= leftIndex) {
          max = leftIndex - index + 1
        } else if (rightIndex > -1 && index <= rightIndex) {
          max = rightIndex - index + 1
        } else {
          max = length - index
        }

        targetColumnColspan = Math.min(targetColumnColspan, max)
      }

      for (let i = 0; i < length; i++) {
        const vCol = state.tableColumn[i]

        if (vCol === targetColumn) {
          vCol._rowGroupColspan = targetColumnColspan
          vCol._stickyClass = 'fixed-left-last__column'
        } else {
          vCol._rowGroupColspan = i > index && i < index + targetColumnColspan ? 0 : 1
        }
      }
    }
  })

  hooks.onBeforeUnmount(() => {
    delete $table._rowGroupTargetColumn

    state.tableFullColumn.forEach((column) => {
      delete column._rowGroupColspan
      delete column._stickyClass
    })
  })
}
