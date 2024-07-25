import type {
  IGridRenderlessParams,
  IGridState,
  IGridProps,
  ISharedRenderlessParamHooks,
  IGridRenderlessParamUtils
} from '@/types'

import { emitter, resolveMode, resolveTheme, useBreakpoint } from '@opentiny/vue-common'
import { extend } from '../../common/object'
import { getListeners } from '../utils'
import { connect, getVm, getviewCls, updateParentHeight } from './index'

export const api = [
  'state',
  'designConfig',
  'tinyTheme',
  'tinyMode',
  'currentBreakpoint',
  'viewCls',
  'connect',
  'getVm',
  'updateParentHeight'
]

export const methods = {
  methods: ''
}

const initState = ({
  reactive,
  computed,
  props,
  parent,
  constants
}: Pick<IGridRenderlessParams, 'reactive' | 'computed' | 'props' | 'parent' | 'constants'>) => {
  const GlobalConfig: any = constants?.GLOBAL_CONFIG
  const propKeys = constants?.TinyGridTablePropKeys
  const { themes, viewConfig } = GlobalConfig
  const { SAAS: T_SAAS } = themes

  const state: IGridState = reactive({
    emitter: emitter(),
    vmStore: Object.create(null),
    fetchOption: null,
    filterData: [],
    listeners: {},
    pagerConfig: null,
    // 存放标记为删除的行数据
    pendingRecords: [],
    sortData: {},
    tableCustoms: [],
    tableData: [],
    tableLoading: false,
    tablePage: {
      total: 0,
      pageSize: 10,
      currentPage: 1
    },
    // 表格事件
    tableListeners: {},
    columnAnchorParams: {},
    columnAnchorKey: '',
    tasks: {},
    fullScreenClass: '',
    isInitialLoading: true, // 是否首次加载数据
    // 工具栏按钮保存和删除时是否弹出提示信息
    isMsg: computed(() => state.proxyOpts.message !== false),
    tableProps: computed(() => {
      const rest = {}
      // 这里收集table组件的props，然后提供给下层组件使用
      propKeys.forEach((key) => (rest[key] = props[key]))
      return rest
    }),
    proxyOpts: computed(() => {
      return extend(true, {}, GlobalConfig.grid.proxyConfig, props.proxyConfig)
    }),
    vSize: computed(() => props.size || (parent && parent.size) || (parent && parent.vSize)),
    seqIndex: computed(() => {
      let seqIndexValue = props.startIndex

      if ((props.seqSerial || props.scrollLoad) && props.pagerConfig) {
        seqIndexValue = (props.pagerConfig.currentPage - 1) * pagerConfig.pageSize + props.startIndex
      }

      return seqIndexValue
    })
    // TODO：isThemeSaas、isModeMobileFirst、isViewGantt
  })

  return state
}

const initWatch = ({ watch, props, refs }: Pick<IGridRenderlessParams, 'watch' | 'props' | 'refs'>) => {
  watch(
    () => props.column,
    (cols) => {
      refs.loadColumn(cols)
    }
  )
}

const initApi = ({
  api,
  state,
  dispatch,
  broadcast,
  vm,
  constants
}: Pick<IGridRenderlessParams, 'api' | 'state' | 'dispatch' | 'broadcast' | 'vm' | 'constants'>) => {
  Object.assign(api, {
    state,
    dispatch,
    broadcast,
    viewCls: getviewCls({ constants, vm }),
    connect: connect({ state, vm }),
    getVm: getVm({ state }),
    updateParentHeight: updateParentHeight({ state, vm })
  })
}

export const renderless = (
  props: IGridProps,
  context: ISharedRenderlessParamHooks,
  { vm, refs, parent, emit, constants, nextTick, broadcast, dispatch, mode, attrs }: IGridRenderlessParamUtils
): any => {
  const api = {}
  const { computed, onMounted, onBeforeUnmount, reactive, watch, ref, unref } = context

  const state = initState({ reactive, computed, props, parent, constants })

  let { customs, events } = props

  // 处理通过配置式方式传递过来的事件列表events
  const listeners = {}
  if (events) {
    for (let event in events) {
      if (Object.prototype.hasOwnProperty.call(events, event)) {
        let evkey = event.replace(/\B([A-Z])/g, '-$1').toLowerCase()

        listeners[evkey] = events[event]

        if (!['pageChange', 'sortChange', 'filterChange', 'toolbarButtonClick'].indexOf(event)) {
          state.emitter.on(evkey, events[event])
        }
      }
    }

    state.listeners = listeners
  }

  state.tableListeners = getListeners(attrs, listeners)

  const tinyTheme = ref(resolveTheme(props, context))
  const tinyMode = ref(resolveMode(props, context))
  const breakpoint = useBreakpoint()

  // 实例缓存，解决grid/toolbar/table等相互关联问题
  // state.vmStore = Object.create(null)

  // TODO：初始化fetchApi选项

  // 初始化表格个性化配置，用户可以配置customs
  if (customs) {
    state.tableCustoms = customs
  }

  // TODO：在created生命周期阶段执行fetch-data

  methods.methods = initApi({ api, state, dispatch, broadcast, vm, constants })

  initWatch({ watch, props, refs })

  // TODO：缓存实例处理
  // onBeforeUnmount(() => {
  //   const gridVm = hooks.getCurrentInstance().proxy

  //   gridVm.removeIntersectionObserver()
  //   // 清空被缓存实例
  //   gridVm.vmStore = null
  // })

  onMounted(() => {
    let { columns, fetchOption, autoLoad, pagerSlot, prefetch } = props
    // TODO：pager插槽中内置pager组件事件处理
    // if (pagerSlot) {
    //   const {
    //     componentOptions: { listeners = {} },
    //     componentInstance
    //   } = pagerSlot

    //   if (!listeners['size-change']) {
    //     componentInstance.$on('size-change', this.pageSizeChange)
    //   }

    //   if (!listeners['current-change']) {
    //     componentInstance.$on('current-change', this.pageCurrentChange)
    //   }
    // }

    if (columns && columns.length) {
      refs.loadColumn(columns)
    }
  })

  return api
}
