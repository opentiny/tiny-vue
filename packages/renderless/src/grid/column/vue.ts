import { useRelation } from '../../common/deps/useRelation'
import GlobalConfig from '../../../../vue/src/grid/src/config'

import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '../../../types/shared.type'
import { setColumnFormat } from '../../grid/utils'

import { Cell } from '../../../../vue/src/grid/src/cell'

// import { useInstanceSlots } from '../../../../vue-common'

const { columnLevelKey, defaultColumnName } = GlobalConfig

interface IGridColumnProps {
  formatConfig
}

interface IGridColumnRenderlessParams extends ISharedRenderlessFunctionParams {
  reactive
  inject
  getCurrentInstance
  onUpdated
  watch
  nextTick
}

interface IGridColumnRenderlessParamUtils extends ISharedRenderlessParamUtils<any> {
  slots
}

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
  props: IGridColumnProps,
  { reactive, inject, getCurrentInstance, onUpdated, watch, nextTick, onUnmounted }: IGridColumnRenderlessParams,
  { slots }: IGridColumnRenderlessParamUtils,
  { isVue2 }
): IGridColumnApi => {
  const state = initState({ props, reactive, inject, slots })

  !state.$table.isTagUsageSence && (state.$table.isTagUsageSence = true)
  let slotsCache = {}

  //   useInstanceSlots()

  useRelation({ relationKey: `${columnLevelKey}-${state.$table.id}` })

  watch(
    () => props.formatConfig,
    () => setColumnFormat(state.columnConfig, props)
  )

  const currentInstance = getCurrentInstance()
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
    state
  })

  return api
}
