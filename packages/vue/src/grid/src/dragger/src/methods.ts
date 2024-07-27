import { createHandlerOnEnd, getSortColumns } from './rowDrop'
export default {
  // 处理列拖拽
  columnDrop(headerEl) {
    const { plugin, onBeforeMove, filter } = this.dropConfig
    const columnDropContainer = headerEl.querySelector('.tiny-grid__header .tiny-grid-header__row')

    const columnDropOptions = {
      handle: '.tiny-grid-header__column:not(.col__fixed)',
      filter,
      onEnd: (event) => {
        const { item, newIndex, oldIndex } = event
        let { fullColumn, tableColumn } = this.getTableColumn()
        const sortVisibleCols = getSortColumns(tableColumn)
        let targetThElem = item
        let wrapperElem = targetThElem.parentNode
        let newColumn = sortVisibleCols[newIndex]

        if (newColumn.fixed) {
          // 错误的移动
          if (newIndex > oldIndex) {
            for (let i = newIndex; i >= oldIndex; i--) {
              wrapperElem.insertBefore(targetThElem, wrapperElem.children[i])
            }
          } else {
            for (let i = newIndex; i <= oldIndex; i++) {
              wrapperElem.insertBefore(targetThElem, wrapperElem.children[i])
            }

            wrapperElem.insertBefore(wrapperElem.children[oldIndex], targetThElem)
          }

          return Modal.message({
            message: GlobalConfig.i18n('ui.grid.error.dargFixed'),
            status: 'error'
          })
        }
        // 转换真实索引
        let oldColumnIndex = this.getColumnIndex(sortVisibleCols[oldIndex])
        let newColumnIndex = this.getColumnIndex(sortVisibleCols[newIndex])
        // 移动到目标列
        let currCol = fullColumn.splice(oldColumnIndex, 1)[0]

        fullColumn.splice(newColumnIndex, 0, currCol)
        this.loadColumn(fullColumn)
        this.$emit('column-drop-end', event, this)

        const toolbarVm = this.getVm('toolbar')

        this.isDragHeaderSorting && toolbarVm && toolbarVm.updateSetting()
      },
      onStart: (event) => {
        this.$emit('column-drop-start', event, this)
      },
      onMove: (event) => {
        const cancel = typeof onBeforeMove === 'function' ? onBeforeMove('column', null, event, this) : true

        this.$emit('column-drop-move', event, this)

        return cancel === undefined || cancel
      }
    }

    return plugin.create(columnDropContainer, columnDropOptions)
  },
  // 处理行拖拽
  rowDrop(bodyEl) {
    const { plugin, onBeforeMove, filter, refresh = true, rowHandle } = this.dropConfig
    const rowDropContainer = bodyEl.querySelector('.tiny-grid__body tbody')

    const rowDropOptions = {
      handle: rowHandle === 'index' ? '.tiny-grid-body__row>td.col__index>.row__drop-handle' : '.tiny-grid-body__row',
      filter,
      onEnd: createHandlerOnEnd({ _vm: this, refresh }),
      onStart: (event) => {
        this.$emit('row-drop-start', event, this)
      },
      onMove: (event) => {
        let insertRecords = this.getInsertRecords()
        // 包含新增数据的表格不可再拖动行顺序
        if (insertRecords.length) return false

        let { dragged } = event
        let selfRow = this.getRowNode(dragged).item
        const cancel = typeof onBeforeMove === 'function' ? onBeforeMove('row', selfRow, event, this) : true

        this.$emit('row-drop-move', event, this)

        return cancel === undefined || cancel
      }
    }

    return plugin.create(rowDropContainer, rowDropOptions)
  }
}
