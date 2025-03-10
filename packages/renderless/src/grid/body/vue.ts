import { scrollEvent } from './index'
import type { ISharedRenderlessParamHooks } from '@/types'

export const api = ['state', 'scrollEvent']

export const renderless = (props, context: ISharedRenderlessParamHooks, { vm }): any => {
  const { onMounted, inject, onBeforeUnmount, onUpdated } = context

  const $table = inject('$table')

  const api = {
    scrollEvent: scrollEvent({ parent: $table })
  }

  onMounted(() => {
    const { $el, $refs } = vm as any

    const { dropConfig } = $table
    const { elemStore } = $table.state
    const keyPrefix = 'main-body-'

    // 表体第一层div，出现滚动条的dom元素
    elemStore[`${keyPrefix}wrapper`] = $el
    // 表体table元素
    elemStore[`${keyPrefix}table`] = $refs.table
    // colgroup元素，保持表头和表体宽度保持一致
    elemStore[`${keyPrefix}colgroup`] = $refs.colgroup
    // tbody元素
    elemStore[`${keyPrefix}list`] = $refs.tbody
    // x轴滚动条占位元素
    elemStore[`${keyPrefix}xSpace`] = $refs.xSpace
    // y轴滚动条占位元素
    elemStore[`${keyPrefix}ySpace`] = $refs.ySpace
    // 空数据元素
    elemStore[`${keyPrefix}emptyBlock`] = $refs.emptyBlock

    // 表体第一层div监听滚动事件
    $el.onscroll = vm.scrollEvent
    $el._onscroll = vm.scrollEvent

    if (dropConfig) {
      const { plugin, row = true } = dropConfig
      plugin && row && (vm.rowSortable = $table.rowDrop(vm.$el))
    }
  })

  onBeforeUnmount(() => {
    const { $el } = vm as any

    $el.onscroll = null
    $el._onscroll = null

    vm.rowSortable && vm.rowSortable.destroy()
  })

  onUpdated(() => {
    const { fixedType } = vm
    !fixedType && $table.updateTableBodyHeight()
  })

  return api
}
