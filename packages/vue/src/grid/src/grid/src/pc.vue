<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/grid/grid/vue'
import { h, setup, defineComponent } from '@opentiny/vue-common'
import TinyGridTable from '../../table'
import GlobalConfig from '../../config'

const { themes, viewConfig } = GlobalConfig
const { SAAS: T_SAAS } = themes
const { GANTT: V_GANTT, MF: V_MF, CARD: V_CARD } = viewConfig

const TinyGridTablePropKeys = Object.keys(TinyGridTable.props)

export const $constants = {
  GLOBAL_CONFIG: GlobalConfig,
  TinyGridTablePropKeys
}

export const gridProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  columns: Array,
  proxyConfig: Object,
  fetchData: Object,
  saveData: Object,
  deleteData: Object,
  toolbar: Object,
  pager: Object,
  dataset: Object,
  autoLoad: {
    type: Boolean,
    default: true
  },
  seqSerial: {
    type: Boolean,
    default: false
  },
  events: Object,
  ...TinyGridTable.props,
  isBeforePageChange: Boolean,
  showSaveMsg: {
    type: Boolean,
    default: false
  },
  isMultipleHistory: Boolean,
  selectToolbar: [Boolean, Object]
}

// 渲染主入口，创建表格最外层节点
function createRender(opt) {
  const {
    h,
    _vm,
    vSize,
    props,
    selectToolbar,
    slots,
    $slots,
    tableOns,
    renderedToolbar,
    loading,
    pagerConfig,
    pager,
    tableLoading,
    viewType,
    columnAnchorParams,
    columnAnchor,
    fullScreenClass
  } = opt
  return h(
    'div',
    {
      class: {
        [`tiny-grid__wrapper tiny-grid view_${viewType}`]: true,
        '!bg-transparent sm:!bg-color-bg-1': viewType === V_MF || viewType === V_CARD,
        [`size__${vSize}`]: vSize,
        'tiny-grid__animat': props.optimization.animat,
        [fullScreenClass]: true
      }
    },
    [
      selectToolbar ? null : renderedToolbar,
      columnAnchor ? _vm.renderColumnAnchor(columnAnchorParams, _vm) : null,
      // 这里会渲染tiny-grid-column插槽内容，从而获取列配置
      h(TinyGridTable, { props, on: tableOns, ref: 'tinyTable' }, slots.default && slots.default())
      // TODO：渲染分页组件
    ]
  )
}

const Grid = defineComponent({
  emits: [],
  provide() {
    return { $grid: this }
  },
  components: {
    TinyGridTable
  },
  props: gridProps,
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  },
  render() {
    const {
      state,
      editConfig,
      fetchOption,
      loading,
      optimization,
      pager,
      pagerConfig,
      remoteFilter,
      remoteSort,
      selectToolbar
    } = this as any
    const { seqIndex, slots: $slots, toolbar, designConfig, viewType } = this as any
    const { columnAnchor } = this

    const {
      columnAnchorParams,
      fullScreenClass,
      tableCustoms,
      data: tableData,
      vSize,
      tableLoading,
      tableProps,
      listeners,
      tableListeners
    } = state as any

    // grid全局替换smb图标
    if (designConfig?.icons) {
      Object.assign(GlobalConfig.icon, designConfig.icons)
    }

    // 初始化虚拟滚动优化配置
    const optimizOpt = { ...GlobalConfig.optimization, ...optimization }
    const props = { ...tableProps, optimization: optimizOpt, startIndex: seqIndex }

    // 在用户没有配置stripe时读取design配置
    if (designConfig?.stripe !== undefined && !props.stripe) {
      // aurora规范默认带斑马条纹
      props.stripe = designConfig?.stripe
    }

    const tableOns = { ...listeners, ...tableListeners }
    const { handleRowClassName: rowClassName, sortChangeEvent, filterChangeEvent } = this

    // fetchApi状态下初始化 loading、remoteSort、remoteFilter
    if (fetchOption) {
      Object.assign(props, { loading: loading || tableLoading, data: tableData, rowClassName })
      remoteSort && (tableOns['sort-change'] = sortChangeEvent)
      remoteFilter && (tableOns['filter-change'] = filterChangeEvent)
    }

    // 处理表格工具栏和个性化数据
    toolbar && !(toolbar.setting && toolbar.setting.storage) && (props.customs = tableCustoms)
    toolbar && (tableOns['update:customs'] = (value) => (this.tableCustoms = value))
    // 列就绪事件处理
    tableOns['column-init-ready'] = this.handleColumnInitReady

    // 这里handleActiveMethod处理一些编辑器的声明周期的拦截，用户传递过来的activeMethod优先级最高
    if (editConfig) {
      props.editConfig = {
        trigger: 'click',
        mode: 'cell',
        showStatus: true,
        ...editConfig,
        activeMethod: this.handleActiveMethod
      }
    }

    // TODO：获取工具栏的渲染器

    const renderedToolbar = null

    // 创建表格最外层容器，并加载table组件
    return createRender({
      h,
      _vm: this,
      vSize,
      props,
      selectToolbar,
      renderedToolbar,
      tableOns,
      slots: this.slots,
      $slots,
      loading,
      pager,
      pagerConfig,
      tableLoading,
      viewType,
      columnAnchorParams,
      columnAnchor,
      fullScreenClass
    })
  }
})

export default Grid
</script>
