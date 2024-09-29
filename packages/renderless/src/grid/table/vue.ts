import type { ISharedRenderlessParamHooks } from '@/types'
import GlobalConfig from '../../../../vue/src/grid/src/config'
import { extend } from '../../../common/object'

export const api = ['state', 'scrollEvent']

const initState = ({ reactive, computed, props }) => {
  return reactive({
    // 存储异步加载过的行\列数据
    asyncRenderMap: {},
    // 存放列相关的信息
    columnStore: {
      // 自适应的列表集合
      autoList: [],
      centerList: [],
      // 左侧冻结列表集合
      leftList: [],
      // 右侧冻结列表集合
      rightList: [],
      // 固定像素宽度列表集合
      pxList: [],
      // 设置了最小宽度列表集合
      pxMinList: [],
      // 可调整列宽列表集合
      resizeList: [],
      // 百分比宽度列表集合
      scaleList: [],
      // 百分比最小宽度列表集合
      scaleMinList: []
    },
    // 存放快捷菜单的信息
    ctxMenuStore: {
      list: [],
      selectChild: null,
      selected: null,
      showChild: false,
      style: null,
      visible: false
    },
    // 当前行
    currentRow: null,
    // 存放可编辑相关信息
    editStore: {
      editorAutoRefreshKey: 0,
      // 激活
      actived: { column: null, row: null },
      // 所有选中
      checked: { columns: [], rows: [], tColumns: [], tRows: [] },
      // 已复制源
      copyed: { columns: [], cut: false, rows: [] },
      indexs: { columns: [] },
      insertList: [],
      removeList: [],
      // 选中源
      selected: { column: null, row: null },
      titles: { columns: [] }
    },
    // 已展开的行
    expandeds: [],
    // 当前选中的筛选列
    filterStore: {
      column: null,
      condition: { input: '', relation: 'equals' },
      id: '',
      multi: false,
      options: [],
      visible: false
    },
    // 表尾合计数据
    footerData: [],
    // 所有列已禁用
    headerCheckDisabled: false,
    // 是否全选
    isAllSelected: false,
    // 多选属性，有选中且非全选状态
    isIndeterminate: false,
    // 是否存在横向滚动条
    overflowX: false,
    // 是否存在纵向滚动条
    overflowY: true,
    // 存储滚动加载，上次滚动的位置
    scrollLoadStore: { bodyHeight: 0, scrollHeight: 0 },
    // 是否启用了横向 X 可视渲染方式加载
    scrollXLoad: false,
    // 是否启用了纵向 Y 可视渲染方式加载
    scrollYLoad: false,
    // 横向滚动条的高度
    scrollbarHeight: 0,
    // 纵向滚动条的宽度
    scrollbarWidth: 0,
    // 单选属性，选中行
    selectRow: null,
    // 存放多选工具栏相关信息
    selectToolbarStore: {
      layout: { height: 0, left: 0, top: 0, width: 0, zIndex: 1 },
      visible: false
    },
    // 多选属性，已选中的列
    selection: [],
    // 渲染中的数据
    tableData: [],
    // tooltip提示内容
    tooltipContent: '',
    // tooltip提示内容是否处理换行字符
    tooltipContentPre: false,
    // 已展开树节点
    treeExpandeds: [],
    // 树节点不确定状态的列表
    treeIndeterminates: [],
    // 存放数据校验相关信息
    validStore: {
      column: null,
      content: '',
      isArrow: false,
      row: null,
      rule: null,
      visible: false
    },
    // 校验tip提示内容
    validTipContent: '',
    // 在编辑模式下 单元格在失去焦点验证的状态
    validatedMap: {},
    // 表尾边框线是否显示和位置
    showFooterBorder: false,
    footerBorderBottom: 0,
    tableBodyHeight: 0,
    // 表格父容器的高度
    parentHeight: 0,
    ctxMenuOpts: computed(() => extend(true, {}, GlobalConfig.menu, props.contextMenu)),
    hasTip: computed(() => TINYGrid._tooltip)
  })
}

export const renderless = (props, context: ISharedRenderlessParamHooks, { vm }): any => {
  const api = {} as any
  return api
}
