import { emitEvent } from '@opentiny/vue-renderless/grid/utils'

export default {
  // 设置单选行
  setRadioRow(row) {
    row !== this.selectRow && this.clearRadioRow()
    this.selectRow = row
    return this.$nextTick()
  },

  clearRadioRow() {
    let { selectRow: radioRow } = this
    radioRow && (this.selectRow = null)
    return this.$nextTick()
  },
  getRadioRow() {
    let { selectRow: radioRow } = this
    return radioRow
  },
  // 处理单选框默认勾选
  handleRadioDefChecked() {
    let { fullDataRowIdData } = this
    let { checkRowKey } = this.radioConfig || {}
    let rowid = checkRowKey && encodeURIComponent(checkRowKey)
    let rowCache = fullDataRowIdData[rowid]
    if (rowid && rowCache) {
      this.setRadioRow(rowCache.row)
    }
  },
  // 单选，行选中事件
  triggerRadioRowEvent(event, params) {
    let { selectRow } = this
    let { checkMethod } = this.radioConfig || {}
    if (checkMethod && !checkMethod(params)) {
      return
    }
    this.setRadioRow(params.row)
    this.setCurrentRow(params.row)
    if (selectRow !== params.row) {
      emitEvent(this, 'radio-change', [params, event])
    }
  }
}
