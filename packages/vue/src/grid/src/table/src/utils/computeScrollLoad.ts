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
import browser from '@opentiny/vue-renderless/common/browser'

let isWebkit = browser['-webkit'] && browser.name !== 'edge'

export function computeScrollYLoad({ _vm, scrollLoad, scrollY, scrollYLoad, scrollYStore, tableBodyElem }) {
  if (scrollYLoad || scrollLoad) {
    // 获取表格体默认第一行的高度
    scrollYStore.rowHeight = _vm.getRowHeight()
  }

  if (scrollYLoad) {
    // scrollY.vSize用户配置的可视区域渲染行数
    let visibleYSize = toNumber(scrollY.vSize || Math.ceil(tableBodyElem.clientHeight / scrollYStore.rowHeight))

    scrollYStore.visibleSize = visibleYSize

    // 自动优化
    if (!scrollY.oSize) {
      scrollYStore.offsetSize = visibleYSize
    }

    // scrollY.rSize用户配置的每次渲染行数
    if (!scrollY.rSize) {
      // 如果是webkit内核浏览器则渲染行数*2否则就+2行（ie浏览器）
      scrollYStore.renderSize = visibleYSize + (isWebkit ? 2 : visibleYSize)
    }

    // 计算需要渲染的表格数据，并更新YSpace元素高度用来显示正确的滚动条长度
    _vm.updateScrollYData()
  } else {
    _vm.updateScrollYSpace()
  }
}

export function computeScrollXLoad({ _vm, scrollX, scrollXLoad, scrollXStore, tableBodyElem, visibleColumn }) {
  if (scrollXLoad) {
    let firstColumn = visibleColumn[0]
    // 获取x轴虚拟滚动每列宽度
    let cWidth = firstColumn ? firstColumn.renderWidth : 40
    // 获取每次需要渲染的列数
    let visibleXSize = toNumber(scrollX.vSize || Math.ceil(tableBodyElem.clientWidth / cWidth))

    scrollXStore.visibleSize = visibleXSize
    // 自动优化
    if (!scrollX.oSize) {
      scrollXStore.offsetSize = visibleXSize
    }

    if (!scrollX.rSize) {
      scrollXStore.renderSize = visibleXSize + 2
    }

    // 处理x轴虚拟滚动渲染数据
    _vm.updateScrollXData()
  } else {
    _vm.updateScrollXSpace()
  }
}
