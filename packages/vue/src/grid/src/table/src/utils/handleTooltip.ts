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
import { h } from '@opentiny/vue-common'

export function createTooltipRange({ _vm, cell, column, isHeader }) {
  let range = document.createRange()
  let rangeEnd

  range.setStart(cell, 0)

  if (_vm.headerSuffixIconAbsolute) {
    if (column.sortable && column.filter && isHeader) {
      rangeEnd = cell.childNodes.length - 2
    } else if ((column.sortable || column.filter) && isHeader) {
      rangeEnd = cell.childNodes.length - 1
    } else {
      rangeEnd = cell.childNodes.length
    }
  } else {
    rangeEnd = column.sortable && isHeader ? cell.childNodes.length - 1 : cell.childNodes.length
  }

  range.setEnd(cell, rangeEnd)

  return range
}

/*
 * 预期 contentMethod 可以返回字符串或者vnode（jsx）
 * 1、返回空串，则不显示 tooltip 提示
 * 2、返回非空字符串，则处理字符串中的换行字符
 * 3、返回 null 或 undefined，则按之前默认逻辑处理
 */
export function processContentMethod({ _vm, column, content, contentMethod, event, isHeader, row, showTip }) {
  if (contentMethod) {
    // 自定义表格tip提示，既支持字符串也支持jsx或者h函数写法
    _vm.tooltipContent=contentMethod({ event, column, row, showTip, isHeader, content }, h)
  } else {
    _vm.tooltipContent = content
  }
}
