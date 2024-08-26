import GlobalConfig from '../../../../vue/src/grid/src/config'

import type { ISharedRenderlessParamUtils, ISharedRenderlessParamHooks } from '@/types'
import { setColumnFormat } from '../../grid/utils'

import { Cell } from '../../../../vue/src/grid/src/cell'

import { useRelation } from '../../../../vue-common'

const { columnLevelKey } = GlobalConfig

interface IGridColumnApi {}

export const api = ['state', ...Object.keys(Cell)]

const initState = ({ props, reactive, inject, slots }) => {
  const $grid = inject('$grid')
  const $table = inject('$table')

  return reactive({
    // 创建表格列实例化对象
    columnConfig: Cell.createColumn($table, props),
    slots,
    $grid,
    $table,
    // 如果是静态数据源，就拿第一行数据
    firstRow: !$grid.fetchOption && $grid.data && $grid.data.length ? $grid.data[0] : {}
  })
}

export const renderless = (
  props,
  { reactive, inject, getCurrentInstance, onUpdated, watch, nextTick }: ISharedRenderlessParamHooks,
  { slots }: ISharedRenderlessParamUtils
): IGridColumnApi => {
  const state = initState({ props, reactive, inject, slots })

  !state.$table.isTagUsageSence && (state.$table.isTagUsageSence = true)
  let slotsCache = {}

  useRelation({ relationKey: `${columnLevelKey}-${state.$table.id}` })

  watch(
    () => props.formatConfig,
    () => setColumnFormat(state.columnConfig, props)
  )

  const currentInstance = getCurrentInstance()!
  const instance = currentInstance.proxy

  onUpdated(() => {
    // vue2的slots会对$scopedSlots做一层代理，因此获取不到更新
    const noProxySlots = instance.$scopedSlots || instance.slots
    const slotsChange = Object.keys(noProxySlots || {}).some((key) => !(slotsCache?.[key] === noProxySlots[key]))
    if (slotsChange) {
      slotsCache = { ...noProxySlots }
      state.columnConfig.slots = slotsCache
    }
  })

  nextTick(() => (state.columnConfig.slots = instance.instanceSlots))

  Object.assign(api, {
    state,
    ...Cell
  })

  return api
}
