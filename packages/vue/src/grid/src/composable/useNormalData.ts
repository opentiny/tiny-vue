import { hooks } from '@opentiny/vue-common'

export const useNormalData = ({ props, tableFullColumn }) => {
  const $table: any = hooks.getCurrentInstance()?.proxy
  // 原始数据
  const rawData = hooks.ref([])
  // 原始数据版本
  const rawDataVersion = hooks.ref(0)
  // 所有的可编辑列
  const editorColumns = hooks.ref([])
  const editorColumnKey = hooks.ref('')

  hooks.watch(tableFullColumn, (_tableFullColumn) => {
    let columns = []
    let columnKeys = []

    for (let i = 0; i < _tableFullColumn.length; i++) {
      const column = _tableFullColumn[i]

      if (column.property && column.editor) {
        columns.push(column)
        columnKeys.push(column.propety)
      }
    }

    const keyString = columnKeys.sort().join()

    if (editorColumnKey.value !== keyString) {
      editorColumnKey.value = keyString
      editorColumns.value = columns
    }
  })

  // 在可编辑列改变时，尝试规范化可编辑字段，包括原始数据和临时插入数据
  hooks.watch(editorColumns, (_editorColumns) => {
    if (props.editConfig && _editorColumns.length > 0) {
      const _insertData = $table.editStore.insertList || []
      const _rawData = rawData.value || []
      const _data = [..._insertData, ..._rawData]

      if (Array.isArray(_data)) {
        _data.forEach((row) => $table.defineField(row, false, _editorColumns))
      }
    }
  })

  // 在原始数据改变时，尝试规范化可编辑字段。不处理临时插入数据，因为后续会被清理掉。
  hooks.watch(rawData, (_rawData) => {
    const _editorColumns = editorColumns.value

    if (props.editConfig && _editorColumns.length > 0) {
      const _data = _rawData || []

      if (Array.isArray(_data)) {
        _data.forEach((row) => $table.defineField(row, false, _editorColumns))
        rawDataVersion.value += 1
      }
    }
  })

  hooks.watch(rawDataVersion, () => {
    // 设置数据查找缓存，对数据进行备份，深度克隆
    $table.updateCache(true, props.saveSource === 'deep')
    // 处理数据改变
    $table.handleDataChange()
  })

  return { rawData, rawDataVersion }
}
