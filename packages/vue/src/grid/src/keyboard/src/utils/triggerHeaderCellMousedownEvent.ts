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
