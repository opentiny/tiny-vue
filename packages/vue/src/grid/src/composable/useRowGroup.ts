import { hooks } from '@opentiny/vue-common'
import { find } from '@opentiny/vue-renderless/grid/static'

const createUseRowGroup =
  ({ reactive, watch, getCurrentInstance, onBeforeUnmount }) =>
  ({ rowGroup, visibleColumn, tableFullColumn, tableColumn }) => {
    const state = reactive({
      rowGroup,
      visibleColumn,
      tableFullColumn,
      tableColumn
    })

    if (!state.rowGroup) return

    const $table = getCurrentInstance().proxy

    watch([visibleColumn, tableColumn], () => {
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
          targetColumnColspan = Math.min(targetColumnColspan, length - index)
        }

        for (let i = 0; i < length; i++) {
          const vCol = state.tableColumn[i]

          if (vCol === targetColumn) {
            vCol._rowGroupColspan = targetColumnColspan
          } else {
            vCol._rowGroupColspan = i > index && i < index + targetColumnColspan ? 0 : 1
          }
        }
      }
    })

    onBeforeUnmount(() => {
      delete $table._rowGroupTargetColumn

      state.tableFullColumn.forEach((column) => {
        delete column._rowGroupColspan
      })
    })
  }

export const useRowGroup = createUseRowGroup(hooks)
