import { addClass, removeClass } from '@opentiny/vue-renderless/common/deps/dom'
import { getOffsetPos, computeDragLeft, emitEvent } from '../utils'

export const uploadColumn =
  ({ state, props, parent }) =>
  () => {
    state.headerColumn = props.isGroup ? parent._sliceColumnTree(props.tableColumn) : [props.tableColumn]
  }

export const created =
  ({ api }) =>
  () =>
    api.uploadColumn()

export const resizeMousedown =
  ({ vm, parent }) =>
  (event, params) => {
    const $el = vm.$el
    const $table = parent

    let { clientX: dragClientX, target: dragBtnElem } = event
    let { column } = params
    let { dragLeft = 0, minInterval = 36, fixedOffsetWidth = 0 } = {}
    let { resizeBar: resizeBarElem, tableBody } = $table.$refs
    let { cell = dragBtnElem.parentNode, dragBtnWidth = dragBtnElem.clientWidth } = {}
    let { pos = getOffsetPos(dragBtnElem, $el), tableBodyElem = tableBody.$el } = {}
    let dragMinLeft = pos.left - cell.clientWidth + dragBtnWidth + minInterval
    let dragPosLeft = pos.left + Math.floor(dragBtnWidth / 2)
    let { oldMousemove = document.onmousemove, oldMouseup = document.onmouseup } = {}

    // 处理拖动事件
    let handleMousemoveEvent = function (event) {
      event.stopPropagation()
      event.preventDefault()

      let { offsetX = event.clientX - dragClientX, left = offsetX + dragPosLeft } = {}
      let scrollLeft = tableBodyElem.scrollLeft
      let args = { cell, dragMinLeft, dragPosLeft, fixedOffsetWidth }
      Object.assign(args, { left, minInterval, tableBodyElem })

      let ret = computeDragLeft(args)
      left = ret.left
      dragMinLeft = ret.dragMinLeft
      dragLeft = ret.dragLeft
      resizeBarElem.style.left = `${dragLeft - scrollLeft}px`
    }

    resizeBarElem.style.display = 'block'
    addClass($table.$el, 'tiny-grid-cell__resize')
    $table._isResize = true

    document.onmousemove = handleMousemoveEvent
    document.onmouseup = () => {
      documentOnmouseup({ oldMousemove, oldMouseup, column, dragPosLeft, dragLeft, resizeBarElem, $table, params })
    }
    handleMousemoveEvent(event)
  }

const documentOnmouseup = function ({
  oldMousemove,
  oldMouseup,
  column,
  dragPosLeft,
  dragLeft,
  resizeBarElem,
  $table,
  params
}) {
  document.onmousemove = oldMousemove
  document.onmouseup = oldMouseup

  let resizeWidth = column.renderWidth + dragLeft - dragPosLeft
  resizeWidth = typeof resizeWidth === 'number' ? resizeWidth : parseInt(resizeWidth, 10) || 40
  column.resizeWidth = resizeWidth < 40 ? 40 : resizeWidth

  resizeBarElem.style.display = 'none'
  removeClass($table.$el, 'tiny-grid-cell__resize')
  Object.assign($table, { _isResize: false, _lastResizeTime: Date.now() })

  $table.analyColumnWidth()
  $table.recalculate()
  updateResizableToolbar($table)
  emitEvent($table, 'resizable-change', [params])
}

function updateResizableToolbar($table) {
  const toolbarVm = $table.getVm('toolbar')

  if (toolbarVm) {
    toolbarVm.updateResizable()
  }
}
