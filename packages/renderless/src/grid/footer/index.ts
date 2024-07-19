import { isNull } from '../../common/type'
import { emitEvent, updateCellTitle } from '../utils'

export const scrollEvent =
  ({ parent }) =>
  (event) => {
    // 滚动处理： 如果存在列固定左侧，同步更新滚动状态；如果存在列固定右侧，同步更新滚动状态。
    const $table = parent

    let { $refs, lastScrollLeft, scrollXLoad } = $table
    let { tableBody, tableFooter, tableHeader } = $refs
    let headerElem = tableHeader ? tableHeader.$el : null
    let bodyElem = tableBody ? tableBody.$el : null
    let footerElem = tableFooter ? tableFooter.$el : null
    let scrollLeft = footerElem.scrollLeft
    let isX = scrollLeft !== lastScrollLeft
    let setElemScrollLeft = (elem, scrollLeft) => {
      if (elem) {
        elem.scrollLeft = scrollLeft
      }
    }
    let eventParams = [{ $table, isX, isY: false, scrollLeft, scrollTop: bodyElem.scrollTop, type: 'footer' }, event]

    $table.lastScrollTime = Date.now()
    $table.lastScrollLeft = scrollLeft

    setElemScrollLeft(headerElem, scrollLeft)
    setElemScrollLeft(bodyElem, scrollLeft)

    if (scrollXLoad && isX) {
      $table.triggerScrollXEvent(event)
    }

    emitEvent($table, 'scroll', eventParams)
  }
export const buildParamFunc = () => (opt) => {
  let { $columnIndex, $rowIndex, $table, allAlign, allColumnOverflow, allFooterAlign } = opt
  let { column, footerData, footerSpanMethod, tableListeners } = opt
  let { showOverflow, footerAlign, align, footerClassName } = column
  let fixedHiddenColumn = column.fixed
  let cellOverflowValue = isNull(showOverflow) ? allColumnOverflow : showOverflow
  let footAlign = footerAlign || align || allFooterAlign || allAlign
  let isShowEllipsis = cellOverflowValue === 'ellipsis'
  let isShowTitle = cellOverflowValue === 'title'
  let showTooltip = cellOverflowValue === true || cellOverflowValue === 'tooltip'
  let hasEllipsis = isShowTitle || showTooltip || isShowEllipsis
  let attrs = { 'data-colid': column.id }
  let tfOns = {}
  let columnIndex = $table.getColumnIndex(column)
  let params = {
    $table,
    $rowIndex,
    column,
    columnIndex,
    $columnIndex
  }

  addListenerMouseover({ $table, params, showTitle: isShowTitle, showTooltip, tfOns })

  addListenerMouseout({ $table, showTooltip, tfOns })

  addListenerClick({ $table, params, tableListeners, tfOns })

  addListenerDblclick({ $table, params, tableListeners, tfOns })
  // 处理行或者列的合并
  doFooterSpan({ attrs, footerData, footerSpanMethod, params })

  return {
    attrs,
    columnIndex,
    fixedHiddenColumn,
    footAlign,
    footerClassName,
    hasEllipsis,
    isShowEllipsis,
    isShowTitle,
    showTooltip,
    params,
    tfOns
  }
}

function doFooterSpan({ attrs, footerData, footerSpanMethod, params }) {
  if (footerSpanMethod) {
    let { rowspan = 1, colspan = 1 } = footerSpanMethod({ data: footerData, ...params }) || {}

    if (!rowspan || !colspan) {
      return null
    }

    attrs.rowspan = rowspan
    attrs.colspan = colspan
  }
}

function addListenerDblclick({ $table, params, tableListeners, tfOns }) {
  if (tableListeners['footer-cell-dblclick']) {
    tfOns.dblclick = (event) => {
      emitEvent($table, 'footer-cell-dblclick', [{ cell: event.currentTarget, ...params }, event])
    }
  }
}

function addListenerClick({ $table, params, tableListeners, tfOns }) {
  if (tableListeners['footer-cell-click']) {
    tfOns.click = (event) => {
      emitEvent($table, 'footer-cell-click', [{ cell: event.currentTarget, ...params }, event])
    }
  }
}

function addListenerMouseout({ $table, showTooltip, tfOns }) {
  if (showTooltip) {
    tfOns.mouseout = () => {
      $table.clostTooltip()
    }
  }
}

function addListenerMouseover({ $table, params, showTitle, showTooltip, tfOns }) {
  if (showTitle || showTooltip) {
    tfOns.mouseover = (event) => {
      if (showTitle) {
        updateCellTitle(event)
      } else if (showTooltip) {
        $table.triggerFooterTooltipEvent(event, params)
      }
    }
  }
}
