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

let isWebkit = browser['-webkit']

export function computeScrollYLoad({ _vm, scrollLoad, scrollY, scrollYLoad, scrollYStore, tableBodyElem }) {
  if (scrollYLoad || scrollLoad) {
    // 获取表格体默认第一行的高度
    scrollYStore.rowHeight = _vm.getRowHeight()
  }

  if (scrollYLoad) {
    // scrollY.vSize用户配置的可视区域渲染行数
    const bodyHeight = toNumber(
      tableBodyElem.style?.height || tableBodyElem.style?.maxHeight || tableBodyElem.clientHeight
    )
    let visibleYSize = toNumber(scrollY.vSize || Math.ceil(bodyHeight / scrollYStore.rowHeight))

    scrollYStore.visibleSize = visibleYSize

    // 自动优化
    if (!scrollY.oSize) {
      scrollYStore.offsetSize = visibleYSize
    }

    // scrollY.rSize用户配置的每次渲染行数
    if (!scrollY.rSize) {
      // 如果是webkit内核浏览器则渲染行数+2,性能差的浏览器就*2，防止滚动时出现较多白屏
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
    /**
     * 使用 “列渲染宽度累加方式” 优化默认 visibleSize 的计算，
     * 旧的使用总宽度除以第一列宽度方式，会出现 visibleSize 很大出现渲染空白问题。
     */
    const clientWidth = tableBodyElem.clientWidth
    let width = 0
    let visibleXSize = 0
    const len = visibleColumn.length
    const colsWidth = visibleColumn?.map((i) => i.renderWidth).sort((a, b) => a - b) || []
    for (let i = 0; i < len; i++) {
      width += colsWidth[i]
      // 当虚拟滚动可见列宽度大于表格宽度或者循环结束，保存可见列大小
      if (width > clientWidth || i === len - 1) {
        visibleXSize = i + 1
        break
      }
    }

    visibleXSize = toNumber(scrollX.vSize || visibleXSize)

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
