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

// 自适应
const adaptive = ({ autoArr, meanWidth, minCellWidth, tableWidth, fit, bodyWidth }) => {
  autoArr.forEach((column, index) => {
    let width = Math.max(meanWidth, minCellWidth)

    column.renderWidth = width
    tableWidth += width

    if (fit && index === autoArr.length - 1) {
      // 如果所有列足够放的情况下，修补列之间的误差
      let odiffer = bodyWidth - tableWidth

      if (odiffer > 0) {
        column.renderWidth += odiffer
        tableWidth = bodyWidth
      }
    }
  })

  return tableWidth
}

const initTableWidth = ({ remainWidth, columnStore }) => {
  let tableWidth = 0
  let { resizeList: resizeArr, pxMinList: pxMinArr, pxList: pxArr } = columnStore
  let { scaleList: scaleArr, scaleMinList: scaleMinArr } = columnStore

  // 最小宽
  pxMinArr.forEach((column) => {
    let minWidth = parseInt(column.minWidth)

    tableWidth += minWidth
    column.renderWidth = minWidth
  })
  // 最小百分比
  let meanWidth = remainWidth / 100

  scaleMinArr.forEach((column) => {
    let scaleWidth = Math.floor(parseInt(column.minWidth) * meanWidth)

    tableWidth += scaleWidth
    column.renderWidth = scaleWidth
  })
  // 固定百分比
  scaleArr.forEach((column) => {
    let scaleWidth = Math.floor(parseInt(column.width) * meanWidth)

    tableWidth += scaleWidth
    column.renderWidth = scaleWidth
  })
  // 固定宽
  pxArr.forEach((column) => {
    let width = parseInt(column.width)

    tableWidth += width
    column.renderWidth = width
  })
  // 调整了列宽
  resizeArr.forEach((column) => {
    let width = parseInt(column.resizeWidth)

    tableWidth += width
    column.renderWidth = width
  })

  return { tableWidth, meanWidth }
}

export const calcTableWidth = ({ bodyWidth, columnStore, fit, minCellWidth, remainWidth }) => {
  let { tableWidth, meanWidth } = initTableWidth({ remainWidth, columnStore })
  let { pxMinList: pxMinArr, scaleMinList: scaleMinArr, autoList: autoArr } = columnStore

  remainWidth -= tableWidth
  meanWidth = remainWidth > 0 ? Math.floor(remainWidth / (scaleMinArr.length + pxMinArr.length + autoArr.length)) : 0

  if (fit) {
    if (remainWidth > 0) {
      scaleMinArr.concat(pxMinArr).forEach((column) => {
        tableWidth += meanWidth
        column.renderWidth += meanWidth
      })
    }
  } else {
    meanWidth = minCellWidth
  }

  return adaptive({ autoArr, meanWidth, minCellWidth, tableWidth, fit, bodyWidth })
}
