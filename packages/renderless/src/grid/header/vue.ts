import type {
  IGridHeaderApi,
  IGridHeaderProps,
  IGridHeaderRenderlessParams,
  IGridHeaderRenderlessParamUtils,
  IGridHeaderState,
  ISharedRenderlessParamHooks
} from '@/types'
import { reactive } from 'vue'
import { uploadColumn, created, resizeMousedown } from '.'

export const api = ['state', 'uploadColumn', 'resizeMousedown']

const initState = () => {
  const state: IGridHeaderState = {
    headerColumn: reactive([])
  }
  return state
}

const initApi = ({
  vm,
  api,
  state,
  props,
  parent
}: Pick<IGridHeaderRenderlessParams, 'vm' | 'state' | 'api' | 'props'> & { parent: Object }) => {
  return Object.assign(api, {
    state,
    uploadColumn: uploadColumn({ state, props, parent }),
    created: created({ api }),
    resizeMousedown: resizeMousedown({ vm, parent })
  })
}

export const renderless = (
  props: IGridHeaderProps,
  context: ISharedRenderlessParamHooks,
  { vm }: IGridHeaderRenderlessParamUtils
): any => {
  const { onMounted, watch, inject } = context

  // TODO: add type, eg: FooInstance = InstanceType<typeof Foo>
  const parent: Object = inject('$table') as Object

  const api = {} as IGridHeaderApi

  onMounted(() => {
    let { $el, $refs } = vm // 在renderless中通过vm来访问
    let elemStore = parent.elemStore
    let keyPrefix = 'main-header-'

    elemStore[`${keyPrefix}wrapper`] = $el
    elemStore[`${keyPrefix}table`] = $refs.table
    elemStore[`${keyPrefix}colgroup`] = $refs.colgroup
    elemStore[`${keyPrefix}list`] = $refs.thead
    elemStore[`${keyPrefix}x-space`] = $refs.xSpace
    elemStore[`${keyPrefix}repair`] = $refs.repair
  })

  const state = initState()

  initApi({ vm, api, state, props, parent })

  api.created()

  watch(() => props.tableColumn, api.uploadColumn)

  return api
}
