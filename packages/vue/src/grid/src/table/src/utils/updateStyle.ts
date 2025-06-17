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
import { toNumber } from '@opentiny/vue-renderless/grid/static/'
import { isScale } from '@opentiny/vue-renderless/grid/utils'
import GlobalConfig from '../../../config'

// 计算表格整体宽高
export function handleLayout(_vm) {
  const { tableFullData, height, parentHeight, scrollXLoad, tableColumn } = _vm
  let { maxHeight, minHeight, totalWidth } = _vm
  let customHeight, scaleToPx

  if (height === 'auto') {
    customHeight = parentHeight
  } else {
    scaleToPx = Math.floor((parseInt(height) / 100) * parentHeight)
    customHeight = isScale(height) ? scaleToPx : toNumber(height)
  }

  if (customHeight > 0) {
    if (tableFullData?.length <= 0) {
      if (customHeight < GlobalConfig.emptyMinHeight) {
        _vm.bodyWrapperHeight = GlobalConfig.emptyMinHeight
      } else {
        _vm.bodyWrapperHeight = customHeight
      }
    } else {
      _vm.bodyWrapperHeight = customHeight
    }
  }

  if (maxHeight) {
    maxHeight = isScale(maxHeight) ? Math.floor((parseInt(maxHeight) / 100) * parentHeight) : toNumber(maxHeight)

    _vm.bodyWrapperMaxHeight = maxHeight
  }

  if (minHeight) {
    minHeight = isScale(minHeight) ? Math.floor((parseInt(minHeight) / 100) * parentHeight) : toNumber(minHeight)

    if (maxHeight && minHeight > maxHeight) {
      minHeight = maxHeight
    }

    _vm.bodyWrapperMinHeight = minHeight
  }

  _vm.bodyTableWidth = scrollXLoad
    ? tableColumn.reduce((previous, column) => previous + column.renderWidth, 0)
    : totalWidth
}
