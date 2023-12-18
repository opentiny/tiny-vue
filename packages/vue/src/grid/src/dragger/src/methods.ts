import { createHandlerOnEnd } from './rowDrop'
export default {
  // 处理列拖拽
  columnDrop() {
    this.$nextTick(() => {
      const { plugin, onBeforeMove, filter } = this.dropConfig
      this.columnSortable = plugin.create(
        this.$el.querySelector('.body__wrapper>.tiny-grid__header .tiny-grid-header__row'),
        {
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
        }
      )
    })
  },
  // 处理行拖拽
  rowDrop() {
    this.$nextTick(() => {
      const { plugin, onBeforeMove, filter, refresh = true, trigger } = this.dropConfig
      this.rowSortable = plugin.create(this.$el.querySelector('.body__wrapper>.tiny-grid__body tbody'), {
        handle: trigger || '.tiny-grid-body__row',
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
      })
    })
  }
}
