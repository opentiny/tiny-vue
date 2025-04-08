/**
 * MIT License
 *
 * Copyright (c) 2019 Xu Liangzhan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
import { arrayEach, toNumber } from '@opentiny/vue-renderless/grid/static/'
import { isScale } from '@opentiny/vue-renderless/grid/utils'

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
 * @param {number} params.scrollbarWidth - 滚动条宽度
 * @returns {Object} 返回最大高度和最小高度
 */
function layoutBodyWrapper({
  footerHeight,
  customHeight,
  headerHeight,
  maxHeight,
  minHeight,
  parentHeight,
  wrapperElem,
  scrollbarWidth
}) {
  if (wrapperElem) {
    if (customHeight > 0) {
      const contentHeight = customHeight - headerHeight - footerHeight

      wrapperElem.style.height = `${contentHeight}px`
    }

    if (maxHeight) {
      maxHeight = isScale(maxHeight) ? Math.floor((parseInt(maxHeight) / 100) * parentHeight) : toNumber(maxHeight)

      const contentHeight = maxHeight - headerHeight - footerHeight

      wrapperElem.style.maxHeight = `${contentHeight}px`
    }

    if (minHeight) {
      minHeight = isScale(minHeight) ? Math.floor((parseInt(minHeight) / 100) * parentHeight) : toNumber(minHeight)

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
  let { customHeight, elemStore, footerHeight, headerHeight, layout } = options
  let { maxHeight, minHeight, parentHeight, scrollXLoad } = options
  let { scrollbarWidth, tableColumn, tableElem, tableWidth, wrapperElem } = options
  let emptyBlockElem = elemStore[`main-${layout}-emptyBlock`]

  let ret = layoutBodyWrapper({
    customHeight,
    footerHeight,
    headerHeight,
    maxHeight,
    minHeight,
    parentHeight,
    scrollbarWidth,
    wrapperElem
  })

  maxHeight = ret.maxHeight
  minHeight = ret.minHeight

  let tWidth = tableWidth

  // 如果是固定列与设置了超出隐藏
  ret = getTableWidth({ scrollXLoad, tWidth, tableColumn })
  tableColumn = ret.tableColumn
  tWidth = ret.tWidth
  layoutTable({ tWidth, tableElem })
  layoutEmptyBlock({ emptyBlockElem, tWidth })
  return { maxHeight, minHeight, tableColumn }
}

/**
 * 处理布局
 * @param {Object} params - 参数对象
 * @returns {Object} 返回表格列配置、最大高度和最小高度
 */
export function handleLayout(params) {
  let {
    _vm,
    columnStore,
    customHeight,
    fixedColumn,
    fixedWrapperElem,
    layout,
    maxHeight,
    minHeight,
    parentHeight,
    tableColumn
  } = params
  let { elemStore, footerHeight, fullColumnIdData, headerHeight, showFooter } = _vm
  let { overflowX, overflowY, scrollXLoad, scrollbarHeight, scrollbarWidth } = _vm
  let { showOverflow: allColumnOverflow, tableHeight, tableWidth } = _vm

  let wrapperElem = elemStore[`main-${layout}-wrapper`]
  let tableElem = elemStore[`main-${layout}-table`]
  /*
   * 表头体样式处理
   * 横向滚动渲染
   */
  if (layout === 'header') {
    tableColumn = layoutHeader({ elemStore, layout, scrollXLoad, scrollbarWidth, tableColumn, tableElem, tableWidth })
  } else if (layout === 'body') {
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

    maxHeight = ret.maxHeight
    minHeight = ret.minHeight
    tableColumn = ret.tableColumn
  } else if (layout === 'footer') {
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
  // 计算colgroup元素中每个col元素的width属性，保证表头和表格体保持对齐
  layoutColgroup({ elemStore, fullColumnIdData, layout, scrollbarWidth })

  return { tableColumn, maxHeight, minHeight }
}
