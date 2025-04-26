import { arrayEach, toNumber } from '../../../utils/static/'
import { isScale } from '../../../utils/utils'

/**
 * 设置表格元素的宽度
 * @param {Object} params - 参数对象
 * @param {number} params.scrollbarWidth - 滚动条宽度
 * @param {number} params.tWidth - 表格宽度
 * @param {HTMLElement} params.tableElem - 表格元素
 */
function setTableElemWidth({ scrollbarWidth, tWidth, tableElem }) {
  if (tableElem && tWidth === null) {
    tableElem.style.width = tWidth
  }

  if (tableElem && tWidth !== null) {
    tableElem.style.width = `${tWidth + scrollbarWidth}px`
  }
}

/**
 * 获取表格宽度
 * @param {Object} params - 参数对象
 * @param {boolean} params.scrollXLoad - 是否启用横向滚动加载
 * @param {number} params.tWidth - 表格宽度
 * @param {Array} params.tableColumn - 表格列配置
 * @returns {Object} 返回表格列配置和宽度
 */
function getTableWidth({ scrollXLoad, tWidth, tableColumn }) {
  if (scrollXLoad) {
    tWidth = tableColumn.reduce((previous, column) => previous + column.renderWidth, 0)
  }

  return { tableColumn, tWidth }
}

/**
 * 布局表尾
 * @param {Object} params - 参数对象
 * @param {Object} params.elemStore - 元素存储对象
 * @param {number} params.customHeight - 自定义高度
 * @param {number} params.footerHeight - 表尾高度
 * @param {number} params.headerHeight - 表头高度
 * @param {boolean} params.scrollXLoad - 是否启用横向滚动加载
 * @param {number} params.scrollbarWidth - 滚动条宽度
 * @param {HTMLElement} params.tableElem - 表格元素
 * @param {number} params.scrollbarHeight - 滚动条高度
 * @param {Array} params.tableColumn - 表格列配置
 * @param {number} params.tableHeight - 表格高度
 * @param {number} params.tableWidth - 表格宽度
 * @param {HTMLElement} params.wrapperElem - 包装元素
 * @param {HTMLElement} params.fixedWrapperElem - 固定列包装元素
 * @returns {Array} 返回表格列配置
 */
function layoutFooter({
  elemStore,
  customHeight,
  footerHeight,
  headerHeight,
  scrollXLoad,
  scrollbarWidth,
  tableElem,
  scrollbarHeight,
  tableColumn,
  tableHeight,
  tableWidth,
  wrapperElem,
  fixedWrapperElem
}) {
  // 如果是使用优化模式
  let tWidth = tableWidth
  // 如果是固定列与设置了超出隐藏
  let ret = getTableWidth({ scrollXLoad, tWidth, tableColumn })
  // 为表尾设置虚拟滚动占位宽度
  const spaceElem = elemStore['main-footer-x-space']
  if (spaceElem) {
    spaceElem.style.width = `${tableWidth}px`
  }

  tableColumn = ret.tableColumn
  tWidth = ret.tWidth
  // 如果是固定列
  if (wrapperElem && fixedWrapperElem) {
    wrapperElem.style.top = `${customHeight ? customHeight - footerHeight : tableHeight + headerHeight}px`
  }

  if (wrapperElem) {
    wrapperElem.style.marginTop = `${-scrollbarHeight - 1}px`
  }

  setTableElemWidth({ scrollbarWidth, tWidth, tableElem })

  return tableColumn
}

/**
 * 计算colgroup元素中每个col元素的width属性，保证表头和表格体保持对齐
 * @param {Object} params - 参数对象
 * @param {Object} params.elemStore - 元素存储对象
 * @param {Object} params.fullColumnIdData - 完整的列ID数据
 * @param {string} params.layout - 布局类型
 * @param {number} params.scrollbarWidth - 滚动条宽度
 */
function layoutColgroup({ elemStore, fullColumnIdData, layout, scrollbarWidth }) {
  let colgroupElem = elemStore[`main-${layout}-colgroup`]
  let colElemHandler = (colElem) => {
    let colid = colElem.getAttribute('name')

    if (colid === 'col_gutter') {
      colElem.width = `${scrollbarWidth || ''}`
    }

    if (fullColumnIdData[colid]) {
      let column = fullColumnIdData[colid].column
      colElem.width = `${column.renderWidth || ''}`
    }
  }

  if (colgroupElem) {
    arrayEach(colgroupElem.children, colElemHandler)
  }
}

/**
 * 布局表头
 * @param {Object} params - 参数对象
 * @param {Object} params.elemStore - 元素存储对象
 * @param {string} params.layout - 布局类型
 * @param {boolean} params.scrollXLoad - 是否启用横向滚动加载
 * @param {number} params.scrollbarWidth - 滚动条宽度
 * @param {Array} params.tableColumn - 表格列配置
 * @param {HTMLElement} params.tableElem - 表格元素
 * @param {number} params.tableWidth - 表格宽度
 * @returns {Array} 返回表格列配置
 */
function layoutHeader({ elemStore, layout, scrollXLoad, scrollbarWidth, tableColumn, tableElem, tableWidth }) {
  let tWidth = tableWidth
  let repairElem = elemStore[`main-${layout}-repair`]

  if (scrollXLoad) {
    tWidth = tableColumn.reduce((previous, column) => previous + column.renderWidth, 0)
  }

  setTableElemWidth({ scrollbarWidth, tWidth, tableElem })

  if (repairElem) {
    repairElem.style.width = `${tableWidth}px`
  }

  return tableColumn
}

/**
 * 布局表格
 * @param {Object} params - 参数对象
 * @param {number} params.tWidth - 表格宽度
 * @param {HTMLElement} params.tableElem - 表格元素
 */
function layoutTable({ tWidth, tableElem }) {
  if (tableElem) {
    tableElem.style.width = tWidth ? `${tWidth}px` : tWidth
  }
}

/**
 * 布局表格体包装器
 * @param {Object} params - 参数对象
 * @param {number} params.footerHeight - 表尾高度
 * @param {number} params.customHeight - 自定义高度
 * @param {number} params.headerHeight - 表头高度
 * @param {number} params.maxHeight - 最大高度
 * @param {number} params.minHeight - 最小高度
 * @param {number} params.parentHeight - 父元素高度
 * @param {HTMLElement} params.wrapperElem - 包装元素
 * @returns {Object} 返回最大高度和最小高度
 */
function layoutBodyWrapper({
  footerHeight,
  customHeight,
  headerHeight,
  maxHeight,
  minHeight,
  parentHeight,
  wrapperElem
}) {
  if (wrapperElem) {
    // 如果设置了自定义高度
    if (customHeight > 0) {
      // 计算内容区域高度 = 自定义高度 - 表头高度 - 表尾高度
      const contentHeight = customHeight - headerHeight - footerHeight

      // 设置包装器元素的固定高度
      wrapperElem.style.height = `${contentHeight}px`
    }

    // 如果设置了最大高度
    if (maxHeight) {
      // 如果最大高度是百分比,则根据父元素高度计算实际像素值
      // 否则转换为数字
      maxHeight = isScale(maxHeight) ? Math.floor((parseInt(maxHeight) / 100) * parentHeight) : toNumber(maxHeight)

      // 计算内容区域最大高度 = 最大高度 - 表头高度 - 表尾高度
      const contentHeight = maxHeight - headerHeight - footerHeight

      // 设置包装器元素的最大高度
      wrapperElem.style.maxHeight = `${contentHeight}px`
    }

    // 如果设置了最小高度
    if (minHeight) {
      // 如果最小高度是百分比,则根据父元素高度计算实际像素值
      // 否则转换为数字
      minHeight = isScale(minHeight) ? Math.floor((parseInt(minHeight) / 100) * parentHeight) : toNumber(minHeight)

      // 设置包装器元素的最小高度 = 最小高度 - 表头高度 - 表尾高度
      wrapperElem.style.minHeight = `${minHeight - headerHeight - footerHeight}px`
    }
  }

  return { maxHeight, minHeight }
}

/**
 * 布局空数据块
 * @param {Object} params - 参数对象
 * @param {HTMLElement} params.emptyBlockElem - 空数据块元素
 * @param {number} params.tWidth - 表格宽度
 */
function layoutEmptyBlock({ emptyBlockElem, tWidth }) {
  if (emptyBlockElem) {
    emptyBlockElem.style.width = tWidth ? `${tWidth}px` : tWidth || ''
  }
}

/**
 * 布局表格体
 * @param {Object} options - 配置对象
 * @returns {Object} 返回最大高度、最小高度和表格列配置
 */
function layoutBody(options) {
  // 从options中解构出布局相关的参数
  let { customHeight, elemStore, footerHeight, headerHeight, layout } = options
  // 从options中解构出高度和滚动相关的参数
  let { maxHeight, minHeight, parentHeight, scrollXLoad } = options
  // 从options中解构出表格元素相关的参数
  let { tableColumn, tableElem, tableWidth, wrapperElem } = options
  // 获取空数据块元素
  let emptyBlockElem = elemStore[`main-${layout}-emptyBlock`]

  // 调用layoutBodyWrapper处理表格主体包装器的布局
  // 包括设置高度、最大/最小高度等
  let ret = layoutBodyWrapper({
    customHeight,
    footerHeight,
    headerHeight,
    maxHeight,
    minHeight,
    parentHeight,
    wrapperElem
  })

  // 获取处理后的最大和最小高度
  maxHeight = ret.maxHeight
  minHeight = ret.minHeight

  // 保存表格宽度
  let tWidth = tableWidth

  // 处理表格宽度
  // 如果启用了横向虚拟滚动,会根据实际情况调整表格和列的宽度
  ret = getTableWidth({ scrollXLoad, tWidth, tableColumn })
  tableColumn = ret.tableColumn // 更新列配置
  tWidth = ret.tWidth // 更新表格宽度

  // 设置表格元素的宽度
  layoutTable({ tWidth, tableElem })

  // 设置空数据块的宽度
  layoutEmptyBlock({ emptyBlockElem, tWidth })

  // 返回处理后的高度和列配置信息
  return { maxHeight, minHeight, tableColumn }
}

/**
 * 处理布局
 * @param {Object} params - 参数对象
 * @returns {Object} 返回表格列配置、最大高度和最小高度
 */
export function handleLayout(params) {
  // 从参数中解构出所需的配置项
  let {
    _vm, // Vue实例
    columnStore, // 列存储对象
    customHeight, // 自定义高度
    fixedColumn, // 固定列配置
    fixedWrapperElem, // 固定列包装器元素
    layout, // 布局类型(header/body/footer)
    maxHeight, // 最大高度
    minHeight, // 最小高度
    parentHeight, // 父容器高度
    tableColumn // 表格列配置
  } = params

  // 从Vue实例中解构出所需的属性和方法
  let {
    elemStore, // 元素存储对象
    footerHeight, // 表尾高度
    fullColumnIdData, // 完整列ID数据
    headerHeight, // 表头高度
    showFooter // 是否显示表尾
  } = _vm
  let {
    overflowX, // 横向溢出处理方式
    overflowY, // 纵向溢出处理方式
    scrollXLoad, // 是否启用横向虚拟滚动
    scrollbarHeight, // 滚动条高度
    scrollbarWidth // 滚动条宽度
  } = _vm
  let {
    showOverflow: allColumnOverflow, // 所有列的溢出显示方式
    tableHeight, // 表格高度
    tableWidth // 表格宽度
  } = _vm

  // 获取主布局的包装器和表格元素
  let wrapperElem = elemStore[`main-${layout}-wrapper`]
  let tableElem = elemStore[`main-${layout}-table`]

  /*
   * 根据不同的布局类型(header/body/footer)进行相应的样式处理
   */
  if (layout === 'header') {
    // 处理表头布局,主要处理横向虚拟滚动
    tableColumn = layoutHeader({ elemStore, layout, scrollXLoad, scrollbarWidth, tableColumn, tableElem, tableWidth })
  } else if (layout === 'body') {
    // 处理表格主体布局,包括固定列、滚动条、溢出等
    let ret = layoutBody({
      ...{ allColumnOverflow, columnStore, customHeight, elemStore, fixedColumn, fixedWrapperElem },
      ...{ footerHeight, headerHeight, layout, maxHeight, minHeight, overflowX, overflowY },
      ...{
        parentHeight,
        scrollXLoad,
        scrollbarHeight,
        scrollbarWidth,
        showFooter,
        tableColumn,
        tableElem,
        tableHeight,
        tableWidth,
        wrapperElem
      }
    })

    // 更新最大/最小高度和列配置
    maxHeight = ret.maxHeight
    minHeight = ret.minHeight
    tableColumn = ret.tableColumn
  } else if (layout === 'footer') {
    // 处理表尾布局
    tableColumn = layoutFooter({
      elemStore,
      customHeight,
      fixedWrapperElem,
      footerHeight,
      headerHeight,
      scrollXLoad,
      scrollbarHeight,
      scrollbarWidth,
      tableColumn,
      tableElem,
      tableHeight,
      tableWidth,
      wrapperElem
    })
  }

  // 处理colgroup,确保表头和表格体的列宽对齐
  layoutColgroup({ elemStore, fullColumnIdData, layout, scrollbarWidth })

  // 返回处理后的列配置和高度信息
  return { tableColumn, maxHeight, minHeight }
}
