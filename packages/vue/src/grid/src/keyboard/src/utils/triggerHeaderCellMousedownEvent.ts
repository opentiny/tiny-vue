import { addClass, removeClass, hasClass } from '@opentiny/utils'
import { throttle } from '@opentiny/utils'
import { getRowNodes, getCellNodeIndex, getEventTargetNode } from '../../../utils/utils'

export function handleHeaderCellMousedownEvent({ $el, _vm, bodyList, cell, headerList, startCell }) {
  let oldMousemove = document.onmousemove
  let oldMouseup = document.onmouseup
  let updateEvent = (event) => {
    event.preventDefault()
    let { flag, targetElem } = getEventTargetNode(event, $el, 'tiny-grid-header__column')
    if (!flag) {
      let tmp = getEventTargetNode(event, $el, 'tiny-grid-body__column')

      flag = tmp.flag
      targetElem = tmp.targetElem
    }
    if (flag && !hasClass(targetElem, 'col__index')) {
      let colIndex = [...targetElem.parentNode.children].indexOf(targetElem)
      let lastCell = bodyList[bodyList.length - 1].children[colIndex]
      let headCell = headerList[0].children[colIndex]

      _vm.handleHeaderChecked(getRowNodes(headerList, getCellNodeIndex(headCell), getCellNodeIndex(cell)))
      _vm.handleChecked(getRowNodes(bodyList, getCellNodeIndex(startCell), getCellNodeIndex(lastCell)))
    }
  }

  let updateEventThrot = throttle(80, false, updateEvent, true)

  addClass($el, 'tiny-grid-cell__checked')

  document.onmousemove = updateEventThrot
  document.onmouseup = function () {
    removeClass($el, 'tiny-grid-cell__checked')

    document.onmousemove = oldMousemove
    document.onmouseup = oldMouseup
  }
}
