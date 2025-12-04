import { hooks } from '@opentiny/vue-common'

export const useNormalData = ({ props, visibleColumn }) => {
  const $table = hooks.getCurrentInstance()?.proxy
  // 原始数据
  const rawData = hooks.ref([])
  // 原始数据版本
  const rawDataVersion = hooks.ref(0)

  hooks.watch([rawData, () => visibleColumn.value], ([_data, _visibleColumn]) => {
    if (props.editConfig && Array.isArray(_data) && _data.length > 0 && _visibleColumn.length > 0) {
      // 对于可编辑表格，如果编辑器对应数据行字段不存在，通过编辑器修改字段时会动态添加字段
      // 对于旧数据处理：watch -> handleDataChange -> loadTableData -> updateCache
      // 在Vue2，这种动态添加字段会触发选项式watch data，更新cache，最终导致脏数据状态不显示
      // 在Vue3，不会触发选项式watch data 和更新cache，不会导致脏数据状态不显示
      // 这里修复这种数据处理过程的不一致性：在数据改变后，先规范化数据，再更新数据缓存，再处理数据改变
      _data.forEach((row) => $table.defineField(row))
      rawDataVersion.value += 1
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
