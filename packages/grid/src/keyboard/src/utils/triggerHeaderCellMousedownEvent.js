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
import { addClass, removeClass, hasClass } from '@opentiny/vue-renderless/common/deps/dom'
import throttle from '@opentiny/vue-renderless/common/deps/throttle'
import { getRowNodes, getCellNodeIndex, getEventTargetNode } from '@opentiny/vue-renderless/grid/utils'

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
