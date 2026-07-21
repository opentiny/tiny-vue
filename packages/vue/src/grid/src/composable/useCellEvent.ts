/* eslint-disable no-cond-assign */
import { hooks } from '@opentiny/vue-common'
import { off, on, isNull, fastdom } from '@opentiny/utils'
import { isUndefined } from '@opentiny/vue-renderless/grid/static/'
import { updateCellTitle, emitEvent } from '@opentiny/vue-renderless/grid/utils'

const getEventSource = (e, $table) => {
  const target = e.target
  const tableEl = target.closest('.tiny-grid__body')

  if (tableEl.dataset?.tableid !== String($table.id)) return

  let cellEl = target.closest('.tiny-grid-header__column')
  let rowEl, part, rowType, row, column, rowid

  if (cellEl) {
    rowEl = cellEl.parentNode
    part = 'header'
  } else if ((cellEl = target.closest('.tiny-grid-body__column'))) {
    rowEl = cellEl.parentNode
    part = 'body'
  } else if ((cellEl = target.closest('.tiny-grid-footer__column'))) {
    rowEl = cellEl.parentNode
    part = 'footer'
  }

  if (!part || !cellEl || !rowEl) return

  column = $table.getColumnNode(cellEl)?.item
  rowid = rowEl.dataset?.rowid

  if (rowid?.startsWith('row_g_')) {
    rowType = 'virtual'
  } else if (part === 'body') {
    rowType = 'normal'

    if ($table.editStore.insertMap.has(rowid)) {
      // 新增行不进缓存，需要单独查找
      row = $table.editStore.insertMap.get(rowid)
    } else {
      row = $table.getRowNode(rowEl)?.item
    }
  }

  return { part, rowType, row, column, cell: cellEl, tr: rowEl }
}

const parseNumber = (numStr) => (isUndefined(numStr) ? numStr : parseInt(numStr, 10))

const normalOverflow = (overflow, _overflow) => {
  overflow = isNull(overflow) ? _overflow : overflow

  const overflowTitle = overflow === 'title'
  const overflowTooltip = overflow === true || overflow === 'tooltip'
  const overflowEllipsis = overflow === 'ellipsis'
  const overflowHint = overflowTitle || overflowTooltip || overflowEllipsis

  return { overflow, overflowTitle, overflowTooltip, overflowEllipsis, overflowHint }
}

export const getConfigOverflow = (column, $table) => {
  const { showOverflow: _cellOverflow, showHeaderOverflow: _headerOverflow } = $table
  const { showTip, showOverflow, showHeaderTip, showHeaderOverflow } = column || {}

  const {
    overflowTitle: cellOverflowTitle,
    overflowTooltip: cellOverflowTooltip,
    overflowEllipsis: cellOverflowEllipsis,
    overflowHint: cellOverflowHint
  } = normalOverflow(showOverflow, _cellOverflow)

  const {
    overflowTitle: headerOverflowTitle,
    overflowTooltip: headerOverflowTooltip,
    overflowEllipsis: headerOverflowEllipsis,
    overflowHint: headerOverflowHint
  } = normalOverflow(showHeaderOverflow, _headerOverflow)

  return {
    cellTip: showTip,
    cellOverflowTitle,
    cellOverflowTooltip,
    cellOverflowEllipsis,
    cellOverflowHint,
    headerTip: showHeaderTip,
    headerOverflowTitle,
    headerOverflowTooltip,
    headerOverflowEllipsis,
    headerOverflowHint
  }
}

const getEventParams = ({ row, column, cell, tr }, $table) => {
  const { showTip, showHeaderTip } = column || {}
  const rowIndex = $table.getRowIndex(row)
  const columnIndex = $table.getColumnIndex(column)
  const { seq, colindex } = cell?.dataset || {}
  const { rowindex, rowlevel } = tr?.dataset || {}

  return {
    $table,
    row,
    column,
    cell,
    rowIndex,
    columnIndex,
    showTip,
    showHeaderTip,
    seq: parseNumber(seq),
    $rowIndex: parseNumber(rowindex),
    $columnIndex: parseNumber(colindex),
    level: parseNumber(rowlevel)
  }
}

// 滚动、拖动过程中不需要触发
const isOperateMouse = ($table) => {
  return (
    $table._isResize || ($table.lastScrollTime && Date.now() < $table.lastScrollTime + $table.optimizeOpts.delayHover)
  )
}

const hideAlignLines = ($table, cell) => {
  if (!$table.mouseConfig?.hover || cell) {
    return
  }
  const xBar = $table.elemStore['main-body-alignXBar']
  const yBar = $table.elemStore['main-body-alignYBar']
  if (xBar) {
    xBar.style.display = 'none'
  }
  if (yBar) {
    yBar.style.display = 'none'
  }
}

const showAlignLines = ($table, cell) => {
  if (!$table.mouseConfig?.hover) {
    return
  }
  const xBar = $table.elemStore['main-body-alignXBar']
  const yBar = $table.elemStore['main-body-alignYBar']
  if (xBar) {
    xBar.style.display = 'block'
    xBar.style.top = cell.offsetTop - 1 + 'px'
    xBar.style.setProperty('--after-top-offset', cell.offsetHeight + 'px')
  }
  if (yBar) {
    yBar.style.display = 'block'
    yBar.style.left = cell.offsetLeft - 1 + 'px'
    yBar.style.setProperty('--after-left-offset', cell.offsetWidth + 'px')
  }
}

export const useCellEvent = ({ table, $table }) => {
  let isBound = false
  const hoverCell = hooks.shallowRef()
  const hoverCellContext = hooks.shallowRef()
  const hoverRow = hooks.shallowRef()
  const hoverText = hooks.shallowRef()
  let textContent

  const handleMouseEnter = (e) => {
    if (isOperateMouse($table)) return
    const source = getEventSource(e, $table)

    if (source) {
      const params = getEventParams(source, $table)

      if (hoverCell.value !== source.cell) {
        hoverCell.value = source.cell
        hoverCellContext.value = { params, source, e }
        textContent =
          hoverCell.value.querySelector('.tiny-grid-cell-text') || hoverCell.value.querySelector('.tiny-grid-cell')
      }

      if (e.target === textContent) {
        hoverText.value = textContent
      }

      if (source.part !== 'body') {
        hoverRow.value = null
      } else if (hoverRow.value !== source.row) {
        hoverRow.value = source.row
      }
    }
  }

  const handleMouseLeave = (e) => {
    if (isOperateMouse($table)) return

    const target = e.target

    if (target === hoverText.value) {
      hoverText.value = null
    }

    if (target.localName === 'table' && target.dataset?.tableid === String($table.id)) {
      hoverRow.value = hoverCell.value = hoverCellContext.value = null
    }
  }

  const handleMouseDown = (e) => {
    const source = getEventSource(e, $table)

    if (source) {
      const params = getEventParams(source, $table)
      const { mouseConfig = {} } = $table

      if (source.part === 'header' && mouseConfig.checked) {
        $table.triggerHeaderCellMousedownEvent(e, params)
      }

      if (source.part === 'body' && (mouseConfig.checked || mouseConfig.selected)) {
        $table.triggerCellMousedownEvent(e, params)
      }
    }
  }

  const handleClick = (e) => {
    const source = getEventSource(e, $table)

    if (source) {
      const params = getEventParams(source, $table)
      const column = source.column || {}
      const { editor } = column
      const satisfy = (equal, trigger) => trigger === 'row' || (equal(column) && trigger === 'cell')
      const {
        editConfig,
        expandConfig = {},
        highlightCurrentColumn,
        highlightCurrentRow,
        mouseConfig = {},
        radioConfig = {},
        selectConfig = {},
        sortOpts,
        tableListeners,
        treeConfig = {}
      } = $table

      if (
        source.part === 'header' &&
        (highlightCurrentColumn ||
          tableListeners['header-cell-click'] ||
          mouseConfig.checked ||
          sortOpts.trigger === 'cell')
      ) {
        $table.triggerHeaderCellClickEvent(e, params)
      }

      if (
        source.part === 'body' &&
        (highlightCurrentRow ||
          tableListeners['cell-click'] ||
          mouseConfig.checked ||
          (editor && editConfig) ||
          satisfy(() => true, expandConfig.trigger) ||
          satisfy(({ type }) => type === 'radio', radioConfig.trigger) ||
          satisfy(({ type }) => type === 'selection', selectConfig.trigger) ||
          satisfy(({ treeNode }) => treeNode, treeConfig.trigger))
      ) {
        const { bubbling, trigger } = treeConfig
        const isTreeNodeStopPropagation =
          !bubbling &&
          (!trigger || trigger === 'default') &&
          $table.getEventTargetNode(e, hoverCell.value, 'tiny-grid-tree__node-btn').flag
        if (!isTreeNodeStopPropagation) {
          // 捕获阶段单元格进入编辑态，常显态的点击事件会被vue移除从而不会执行
          fastdom.mutate(() => {
            $table.triggerCellClickEvent(e, params)
          })
        }
      }

      if (source.part === 'footer' && tableListeners['footer-cell-click']) {
        emitEvent($table, 'footer-cell-click', [params, e])
      }
    }
  }

  const handleDoubleClick = (e) => {
    const source = getEventSource(e, $table)

    if (source) {
      const params = getEventParams(source, $table)
      const column = source.column || {}
      const { editor } = column
      const { editConfig, tableListeners } = $table
      const triggerDblclick = editor && editConfig && editConfig.trigger === 'dblclick'

      if (source.part === 'header' && tableListeners['header-cell-dblclick']) {
        emitEvent($table, 'header-cell-dblclick', [params, e])
      }

      if (source.part === 'body' && (triggerDblclick || tableListeners['cell-dblclick'])) {
        $table.triggerCellDBLClickEvent(e, params)
      }

      if (source.part === 'footer' && tableListeners['footer-cell-dblclick']) {
        emitEvent($table, 'footer-cell-dblclick', [params, e])
      }
    }
  }

  const bindMouseEvents = (target) => {
    on(target, 'mouseenter', handleMouseEnter, true)
    on(target, 'mouseleave', handleMouseLeave, true)
    on(target, 'mousedown', handleMouseDown, true)
    on(target, 'click', handleClick, true)
    on(target, 'dblclick', handleDoubleClick, true)
  }

  const unbindMouseEvents = (target) => {
    off(target, 'mouseenter', handleMouseEnter, true)
    off(target, 'mouseleave', handleMouseLeave, true)
    off(target, 'mousedown', handleMouseDown, true)
    off(target, 'click', handleClick, true)
    off(target, 'dblclick', handleDoubleClick, true)
  }

  hooks.onBeforeUnmount(() => {
    if (isBound && table.value) {
      unbindMouseEvents(table.value)
      isBound = false
      hoverRow.value = hoverCell.value = hoverCellContext.value = null
      $table.hoverCell = null
    }
  })

  hooks.watch(table, (table, old) => {
    if (isBound && old) {
      unbindMouseEvents(old)
      isBound = false
    }

    if (!isBound && table) {
      bindMouseEvents(table)
      isBound = true
    }
  })

  hooks.watch(hoverText, (curText, preText) => {
    const { params, source, e } = hoverCellContext.value
    const column = source.column || {}
    const { headerOverflowTitle, headerOverflowTooltip, headerTip, cellOverflowTitle, cellOverflowTooltip, cellTip } =
      getConfigOverflow(column, $table)

    $table.hoverText = curText

    if (preText) {
      if (source.part === 'header') {
        if (headerTip || headerOverflowTooltip) {
          $table.clostTooltip()
        }
      } else if (source.part === 'body') {
        if (cellTip || cellOverflowTooltip) {
          $table.clostTooltip()
        }
      } else if (source.part === 'footer') {
        if (cellOverflowTooltip) {
          $table.clostTooltip()
        }
      }
    }

    if (curText) {
      if (source.part === 'header') {
        if (headerOverflowTitle) {
          updateCellTitle(e, source.cell)
        } else if (headerTip || headerOverflowTooltip) {
          $table.triggerHeaderTooltipEvent(e, params)
        }
      } else if (source.part === 'body') {
        if (cellOverflowTitle) {
          updateCellTitle(e, source.cell)
        } else if (cellTip || cellOverflowTooltip) {
          $table.triggerTooltipEvent(e, params)
        }
      } else if (source.part === 'footer') {
        if (cellOverflowTitle) {
          updateCellTitle(e, source.cell)
        } else if (cellOverflowTooltip) {
          $table.triggerFooterTooltipEvent(e, params)
        }
      }
    }
  })

  hooks.watch([hoverCell, hoverCellContext], ([curCell, curCtx], [preCell, preCtx]) => {
    const { tableListeners } = $table

    if (preCell) {
      const { params, source, e } = preCtx

      if (source.part === 'body') {
        if (tableListeners['cell-mouseleave']) {
          emitEvent($table, 'cell-mouseleave', [params, e])
        }
        hideAlignLines($table, curCell)
      }
    }

    if (curCell) {
      const { params, source, e } = curCtx

      $table.hoverCell = curCell

      if (source.part === 'body') {
        if (tableListeners['cell-mouseenter']) {
          emitEvent($table, 'cell-mouseenter', [params, e])
        }
        showAlignLines($table, curCell)
      }
    }
  })
}
