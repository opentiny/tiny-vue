import { createHandlerOnEnd, onEndEvent } from './rowDrop'
export default {
  // 处理列拖拽
  columnDrop() {
    this.$nextTick(() => {
      const { plugin, onBeforeMove, filter } = this.dropConfig
      const mainHeaderTable = this.elemStore['main-header-table']

      this.columnSortable = plugin.create(mainHeaderTable.querySelector('.tiny-grid-header__row'), {
        handle: '.tiny-grid-header__column:not(.col__fixed)',
        filter,
        onEnd: (event) => {
          onEndEvent({ event, _this: this })
        },
        onStart: (event) => {
          this.$emit('column-drop-start', event, this)
        },
        onMove: (event) => {
          const cancel = typeof onBeforeMove === 'function' ? onBeforeMove('column', null, event, this) : true
          this.$emit('column-drop-move', event, this)
          return cancel === undefined || cancel
        }
      })
    })
  },
  // 处理行拖拽
  rowDrop() {
    this.$nextTick(() => {
      // refresh：是否在拖拽后刷新数据，默认为true
      const { plugin, onBeforeMove, filter, refresh = true, trigger } = this.dropConfig
      const mainBodyWrapper = this.elemStore['main-body-wrapper']

      this.rowSortable = plugin.create(mainBodyWrapper.querySelector('tbody'), {
        handle: trigger || '.tiny-grid-body__row',
        filter,
        onEnd: createHandlerOnEnd({ _vm: this, refresh }),
        onStart: (event) => {
          this.$emit('row-drop-start', event, this)
        },
        onMove: (event) => {
          const insertRecords = this.getInsertRecords()
          // 包含新增数据的表格不可再拖动行顺序
          if (insertRecords.length) {
            return false
          }

          const { dragged } = event
          // 获取被拖拽的行，这里在拖拽过程中被频繁触发，待优化
          const selfRow = this.getRowNode(dragged).item
          const cancel = typeof onBeforeMove === 'function' ? onBeforeMove('row', selfRow, event, this) : true

          this.$emit('row-drop-move', event, this)

          return cancel === undefined || cancel
        }
      })
    })
  }
}
