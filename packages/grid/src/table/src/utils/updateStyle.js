/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { arrayEach, toNumber } from '@opentiny/vue-renderless/grid/static/'
import { isScale } from '@opentiny/vue-renderless/grid/utils'
import browser from '@opentiny/vue-renderless/common/browser'

function setTableElemWidth({ scrollbarWidth, tWidth, tableElem }) {
  if (tableElem && tWidth === null) {
    tableElem.style.width = tWidth
  }

  if (tableElem && tWidth !== null) {
    tableElem.style.width = `${tWidth + scrollbarWidth}px`
  }
}

function getTableWidth({ allColumnOverflow, fixedColumn, fixedType, scrollXLoad, tWidth, tableColumn }) {
  let isFixedAllColumnOverflow = fixedType && allColumnOverflow

  if (isFixedAllColumnOverflow) {
    tableColumn = fixedColumn
    tWidth = tableColumn.reduce((previous, column) => previous + column.renderWidth, 0)
  }

  if (!isFixedAllColumnOverflow && scrollXLoad && fixedType) {
    tableColumn = fixedColumn
  }

  if (!isFixedAllColumnOverflow && scrollXLoad) {
    tWidth = tableColumn.reduce((previous, column) => previous + column.renderWidth, 0)
  }

  return { tableColumn, tWidth }
}

function layoutFooter({
  customHeight,
  fixedColumn,
  fixedType,
  allColumnOverflow,
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
  let ret = getTableWidth({ allColumnOverflow, fixedColumn, fixedType, scrollXLoad, tWidth, tableColumn })

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

function layoutColgroup({ elemStore, fullColumnIdData, layout, name, scrollbarWidth }) {
  let colgroupElem = elemStore[`${name}-${layout}-colgroup`]

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

function layoutHeader({ elemStore, fixedColumn, fixedType, layout, name, scrollXLoad, scrollbarWidth, tableColumn, tableElem, tableWidth }) {
  let tWidth = tableWidth
  let repairElem = elemStore[`${name}-${layout}-repair`]

  if (scrollXLoad && fixedType) {
    tableColumn = fixedColumn
  }

  if (scrollXLoad) {
    tWidth = tableColumn.reduce((previous, column) => previous + column.renderWidth, 0)
  }

  setTableElemWidth({ scrollbarWidth, tWidth, tableElem })

  if (repairElem) {
    repairElem.style.width = `${tableWidth}px`
  }

  return tableColumn
}

function layoutTable({ fixedType, overflowY, scrollbarWidth, tWidth, tableElem }) {
  if (tableElem) {
    tableElem.style.width = tWidth ? `${tWidth}px` : tWidth

    // 兼容性处理
    if (overflowY && fixedType && (browser['-moz'] || browser.name === 'safari')) {
      tableElem.style.paddingRight = `${scrollbarWidth}px`
    }
  }
}

function layoutBodyWrapper({
  fixedType,
  footerHeight,
  customHeight,
  headerHeight,
  maxHeight,
  minHeight,
  overflowX,
  parentHeight,
  showFooter,
  wrapperElem,
  scrollbarWidth,
  scrollbarHeight
}) {
  if (wrapperElem) {
    if (customHeight > 0) {
      const barWidth = showFooter ? (overflowX ? scrollbarWidth : 0) : scrollbarHeight
      const contentHeight = customHeight - headerHeight - footerHeight

      wrapperElem.style.height = `${fixedType ? contentHeight - barWidth : contentHeight}px`
    }

    if (maxHeight) {
      maxHeight = isScale(maxHeight) ? Math.floor((parseInt(maxHeight) / 100) * parentHeight) : toNumber(maxHeight)

      const barHeight = showFooter ? 0 : scrollbarHeight
      const contentHeight = maxHeight - headerHeight

      wrapperElem.style.maxHeight = `${fixedType ? contentHeight - barHeight : contentHeight}px`
    }

    if (minHeight) {
      minHeight = isScale(minHeight) ? Math.floor((parseInt(minHeight) / 100) * parentHeight) : toNumber(minHeight)

      if (maxHeight) {
        const outerHeight = headerHeight + scrollbarWidth

        if (maxHeight - minHeight < outerHeight) {
          minHeight = maxHeight - outerHeight
        }
      }

      wrapperElem.style.minHeight = `${minHeight}px`
    }
  }

  return { maxHeight, minHeight }
}

function layoutEmptyBlock({ emptyBlockElem, tWidth }) {
  if (emptyBlockElem) {
    emptyBlockElem.style.width = tWidth ? `${tWidth}px` : tWidth || ''
  }
}

function layoutBodyFixedWrapper({
  customHeight,
  columnStore,
  fixedWrapperElem,
  footerHeight,
  fixedType,
  scrollbarWidth,
  headerHeight,
  tableHeight,
  scrollbarHeight,
  showFooter,
  wrapperElem
}) {
  if (fixedWrapperElem) {
    let isRightFixed = fixedType === 'right'
    let fixedColumn = columnStore[`${fixedType}List`]

    if (wrapperElem) {
      wrapperElem.style.top = `${headerHeight}px`
    }

    const contentHeight = customHeight > 0 ? customHeight - headerHeight - footerHeight : tableHeight
    const barHeight = scrollbarHeight * (showFooter ? 2 : 1)

    fixedWrapperElem.style.height = `${contentHeight + headerHeight + footerHeight - barHeight}px`
    fixedWrapperElem.style.width = `${fixedColumn.reduce((previous, column) => previous + column.renderWidth, isRightFixed ? scrollbarWidth : 0)}px`
  }
}

function layoutBody(options) {
  let { allColumnOverflow, columnStore, customHeight, elemStore, fixedColumn, fixedType, fixedWrapperElem, footerHeight, headerHeight, layout, name } = options
  let { maxHeight, minHeight, overflowX, overflowY, parentHeight, scrollXLoad, scrollbarHeight } = options
  let { scrollbarWidth, showFooter, tableColumn, tableElem, tableHeight, tableWidth, wrapperElem } = options
  let emptyBlockElem = elemStore[`${name}-${layout}-emptyBlock`]

  let ret = layoutBodyWrapper({
    customHeight,
    fixedType,
    footerHeight,
    headerHeight,
    maxHeight,
    minHeight,
    overflowX,
    parentHeight,
    scrollbarHeight,
    scrollbarWidth,
    showFooter,
    wrapperElem
  })

  maxHeight = ret.maxHeight
  minHeight = ret.minHeight

  // 如果是固定列
  layoutBodyFixedWrapper({
    columnStore,
    customHeight,
    fixedType,
    fixedWrapperElem,
    footerHeight,
    headerHeight,
    scrollbarHeight,
    scrollbarWidth,
    showFooter,
    tableHeight,
    wrapperElem
  })
  let tWidth = tableWidth

  // 如果是固定列与设置了超出隐藏
  ret = getTableWidth({ allColumnOverflow, fixedColumn, fixedType, scrollXLoad, tWidth, tableColumn })
  tableColumn = ret.tableColumn
  tWidth = ret.tWidth
  layoutTable({ fixedType, overflowY, scrollbarWidth, tWidth, tableElem })
  layoutEmptyBlock({ emptyBlockElem, tWidth })
  return { maxHeight, minHeight, tableColumn }
}

export function handleLayout(params) {
  let { _vm, columnStore, customHeight, fixedColumn, fixedType, fixedWrapperElem, layout, maxHeight, minHeight, name, parentHeight, tableColumn } = params
  let { border, elemStore, footerHeight, fullColumnIdData, headerHeight, showFooter } = _vm
  let { isGroup, overflowX, overflowY, scrollXLoad, scrollbarHeight, scrollbarWidth } = _vm
  let { showHeaderOverflow: allColumnHeaderOverflow, showOverflow: allColumnOverflow, tableHeight, tableWidth } = _vm

  let wrapperElem = elemStore[`${name}-${layout}-wrapper`]
  let tableElem = elemStore[`${name}-${layout}-table`]

  /*
   * 表头体样式处理
   * 横向滚动渲染
   */
  if (layout === 'header') {
    tableColumn = layoutHeader({ elemStore, fixedColumn, fixedType, layout, name, scrollXLoad, scrollbarWidth, tableColumn, tableElem, tableWidth })
  } else if (layout === 'body') {
    let ret = layoutBody({
      ...{ allColumnOverflow, columnStore, customHeight, elemStore, fixedColumn, fixedType, fixedWrapperElem },
      ...{ footerHeight, headerHeight, layout, maxHeight, minHeight, name, overflowX, overflowY },
      ...{ parentHeight, scrollXLoad, scrollbarHeight, scrollbarWidth, showFooter, tableColumn, tableElem, tableHeight, tableWidth, wrapperElem }
    })

    maxHeight = ret.maxHeight
    minHeight = ret.minHeight
    tableColumn = ret.tableColumn
  } else if (layout === 'footer') {
    tableColumn = layoutFooter({
      allColumnOverflow,
      customHeight,
      fixedColumn,
      fixedType,
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

  layoutColgroup({ allColumnHeaderOverflow, allColumnOverflow, border, elemStore, fullColumnIdData, isGroup, layout, name, scrollbarWidth })

  return { tableColumn, maxHeight, minHeight }
}
