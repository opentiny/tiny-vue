import { scrollEvent, buildParamFunc } from './index'
import type { IGridFooterRenderlessParamUtils, ISharedRenderlessParamHooks, IGridFooterApi } from '@/types'

export const api = ['state', 'scrollEvent', 'buildParamFunc']

export const renderless = (
  props,
  context: ISharedRenderlessParamHooks,
  { vm }: IGridFooterRenderlessParamUtils
): any => {
  const { onMounted, inject } = context

  const parent: Object = inject('$table') as Object

  const api: IGridFooterApi = {
    scrollEvent: scrollEvent({ parent }),
    buildParamFunc: buildParamFunc()
  }

  onMounted(() => {
    let { $el, $refs } = vm
    let elemStore = parent.elemStore
    let keyPrefix = 'main-header-'

    elemStore[`${keyPrefix}wrapper`] = $el
    elemStore[`${keyPrefix}table`] = $refs.table
    elemStore[`${keyPrefix}colgroup`] = $refs.colgroup
    elemStore[`${keyPrefix}list`] = $refs.thead
    elemStore[`${keyPrefix}x-space`] = $refs.xSpace
    elemStore[`${keyPrefix}repair`] = $refs.repair
  })

  return api
}
