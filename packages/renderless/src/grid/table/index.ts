import { isEmptyObject, isObject } from '../../common/type'
import { hasChildrenList } from '../utils'
import GlobalConfig from '../../../../vue/src/grid/src/config'
import { extend } from '../../../common/object'

/**
 * some utils
 */
const run = (names, $table) => names.forEach((name) => $table[name].apply($table))

/**
 * computed state
 */

export const computedCtxMenuOpts =
  ({ props }) =>
  () =>
    extend(true, {}, GlobalConfig.menu, props.contextMenu)

export const computedBodyCtxMenu =
  ({ state }) =>
  () => {
    return state.ctxMenuOpts.body && state.ctxMenuOpts.body.options ? state.ctxMenuOpts.body.options : []
  }

export const computedCtxMenuList =
  ({ state }) =>
  () => {
    let rest = []
    state.ctxMenuStore.list.forEach((list) => list.forEach((item) => rest.push(item)))
    return rest
  }

export const computedHasFilter =
  ({ state }) =>
  () =>
    state.tableColumn.some((column) => isObject(column.filter) && !isEmptyObject(column.filter))

export const computedHeaderCtxMenu =
  ({ state }) =>
  () =>
    state.ctxMenuOpts.header && state.ctxMenuOpts.header.options ? state.ctxMenuOpts.header.options : []

export const computedIsCtxMenu =
  ({ state }) =>
  () =>
    state.headerCtxMenu.length || state.bodyCtxMenu.length

export const computedIsGroup = (state) => () => state.collectColumn.some((column) => hasChildrenList(column))

export const computedIsResizable =
  ({ state, props }) =>
  () =>
    props.resizable || state.tableFullColumn.some((column) => column.resizable)

export const computedOptimizeOpts =
  ({ props }) =>
  () =>
    extend(true, {}, GlobalConfig.sortConfig, props.sortConfig)

export const computedSortOpts =
  ({ props }) =>
  () =>
    extend(true, {}, GlobalConfig.sortConfig, props.sortConfig)

export const computedTooltipContentOpts =
  ({ state, props }) =>
  () => {
    return extend(
      true,
      {
        content: props.tooltipContent,
        pre: state.tooltipContentPre, //  pre 元素可定义预格式化的文本
        placement: 'right',
        type: props.tooltipConfig.effect ? undefined : 'normal'
      },
      props.tooltipConfig
    )
  }

export const computedVSize =
  ({ props, vm }) =>
  () =>
    props.size || (vm.$parent && vm.$parent.size) || (vm.$parent && vm.$parent.vSize)

export const computedVaildTipOpts =
  ({ sate, props }) =>
  () => {
    return extend(
      true,
      {
        isArrow: false,
        placement: 'top',
        type: 'error',
        content: sate.validTipContent
      },
      props.tooltipConfig
    )
  }

export const computedValidOpts =
  ({ props, vm }) =>
  () => {
    const config = Object.assign(
      { message: 'tooltip' },
      GlobalConfig.validConfig,
      vm.$grid?.designConfig?.validConfig,
      props.validConfig
    )

    config.isMessageTooltip = config.message === 'tooltip'
    config.isMessageDefault = config.message === 'default'
    config.isMessageInline = config.message === 'inline'

    return config
  }

export const computedTableBodyHeight =
  ({ state }) =>
  () =>
    state.tableBodyHeight === 0 ? 'calc(100% - 36px)' : `${state.tableBodyHeight}px`

// TODO:修改
export const computedIsThemeTiny =
  ({ state }) =>
  () =>
    state.tinyTheme === 'tiny'

export const computedIsThemeSaas =
  ({ state }) =>
  () =>
    state.tinyTheme === 'saas'
export const computedIsViewDefault =
  ({ props }) =>
  () =>
    props.view === 'default'

export const computedIsShapeTable =
  ({ state, props, vm }) =>
  () =>
    // 表格处于默认视图或mf视图大屏时显示为普通表格；其它视图都显示为多端形式
    state.isViewDefault || (props.viewType === V_MF && vm.$grid.currentBreakpoint !== 'default')

export const computedColumnNames =
  ({ props }) =>
  () => {
    const customColumnNames = props.customColumnNames
    const columnNames = [GlobalConfig.defaultColumnName]

    const pushIfNot = (columnName) => {
      if (typeof columnName === 'string' && !columnNames.includes(columnName)) {
        columnNames.push(columnName)
      }
    }

    if (Array.isArray(customColumnNames) && customColumnNames.length > 0) {
      customColumnNames.forEach(pushIfNot)
    } else if (typeof customColumnNames === 'string') {
      pushIfNot(customColumnNames)
    }

    return columnNames
  }

/**
 * Component Methods
 */
export const getParentElem =
  ({ vm }) =>
  () => {
    const $el = vm.$grid ? vm.$grid.$el : vm.$el
    return $el.parentNode
  }

// TODO:修改
export const updateParentHeight =
  ({ state, vm, api }) =>
  () => {
    if (vm.$grid) {
      vm.$grid.updateParentHeight()
    } else {
      state.parentHeight = api.getParentElem().clientHeight
    }
  }

export const getParentHeight =
  ({ state }) =>
  () => {
    return state.parentHeight
  }

// TODO:修改
export const clearAll =
  ({ state, vm }) =>
  (silent) => {
    const { fetchOption = {} } = vm.$grid
    const { isReloadFilter } = fetchOption

    run(['clearScroll', 'clearSort', 'clearCurrentRow', 'clearCurrentColumn'], this)
    run(['clearSelection', 'clearRowExpand', 'clearTreeExpand'], this)

    if (typeof isReloadFilter === 'undefined' ? TINYGrid._filter : !isReloadFilter) {
      vm.clearFilter(silent)
    }

    if (state.keyboardConfig || state.mouseConfig) {
      run(['clearIndexChecked', 'clearHeaderChecked', 'clearChecked', 'clearSelected', 'clearCopyed'], this)
    }

    return vm.clearActived()
  }

export const refreshData =
  ({ state, api, vm }) =>
  (data) => {
    const next = () => {
      state.tableData = []
      return api.loadTableData(data || state.tableFullData)
    }
    return vm.$nextTick().then(next)
  }

export const refreshStyle =
  ({ props, el, vm }) =>
  () => {
    const $el = el
    const rowSpan = props.rowSpan
    const spanMethod = props.spanMethod
    // 存在合并时才刷新样式
    if ($el && (rowSpan || spanMethod)) {
      let transform = $el.style.transform
      let restore = () =>
        setTimeout(() => {
          $el.style.transform = transform
        })
      $el.style.transform = 'scale(0.99999)'
      return vm.$nextTick().then(restore)
    }
    return vm.$nextTick()
  }
