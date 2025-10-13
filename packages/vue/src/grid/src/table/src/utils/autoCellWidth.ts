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
import { calcHeader } from '../../../composable'

export const calcTableWidth = ($table) => {
  // 列宽最少限制 72px, saas为40px
  const minCellWidth = $table.$grid?.designConfig?.minWidth || 72
  const { columnStore, fit, elemStore } = $table
  const bodyWrapper = elemStore['main-body-wrapper']
  const { clientWidth: bdoyClientWidth, offsetWidth, offsetHeight } = bodyWrapper
  // 解决浏览器出现缩放时，出现滚动条的问题。
  const clientWidth = bdoyClientWidth - 1
  const bodyWidth = clientWidth

  let {
    pxList: pxArr,
    scaleList: scaleArr,
    pxMinList: pxMinArr,
    scaleMinList: scaleMinArr,
    autoList: autoArr,
    resizeList: resizeArr
  } = columnStore

  let remainWidth = clientWidth
  let totalWidth = 0

  // 存放宽度，避免多次修改column.renderWidth引起的重新render
  const minArr = new Array(pxMinArr.length + scaleMinArr.length)

  // 最小宽
  pxMinArr.forEach((column, index) => {
    const width = parseInt(column.minWidth)

    totalWidth += width
    minArr[index + scaleMinArr.length] = width
  })

  // 最小百分比
  let meanWidth = remainWidth / 100

  scaleMinArr.forEach((column, index) => {
    const width = Math.floor(parseInt(column.minWidth) * meanWidth)

    totalWidth += width
    minArr[index] = width
  })

  // 固定百分比
  scaleArr.forEach((column) => {
    const width = Math.floor(parseInt(column.width) * meanWidth)

    totalWidth += width
    column.renderWidth = width
  })

  // 固定宽
  pxArr.forEach((column) => {
    const width = parseInt(column.width)

    totalWidth += width
    column.renderWidth = width
  })

  // 调整了列宽
  resizeArr.forEach((column) => {
    const width = parseInt(column.resizeWidth)

    totalWidth += width
    column.renderWidth = width
  })

  remainWidth -= totalWidth
  meanWidth = remainWidth > 0 ? Math.floor(remainWidth / (scaleMinArr.length + pxMinArr.length + autoArr.length)) : 0

  if (fit) {
    if (remainWidth > 0) {
      scaleMinArr.concat(pxMinArr).forEach((column, index) => {
        totalWidth += meanWidth
        minArr[index] += meanWidth
      })
    }
  } else {
    meanWidth = minCellWidth
  }

  // 自适应修补一些列的宽度
  autoArr.forEach((column, index) => {
    let width = Math.max(meanWidth, minCellWidth)
    let renderWidth = width
    totalWidth += width

    if (fit && index === autoArr.length - 1) {
      // 如果所有列足够放的情况下，修补列之间的误差
      let odiffer = clientWidth - totalWidth

      if (odiffer > 0) {
        renderWidth += odiffer
        totalWidth = clientWidth
      }
    }

    column.renderWidth = renderWidth
  })

  const remainingSpace = bodyWidth - totalWidth
  // 如果还有空间剩余
  if (fit && remainingSpace > 0) {
    scaleMinArr
      .concat(pxMinArr)
      .slice(0, remainingSpace)
      .forEach((column, index) => {
        totalWidth += 1
        minArr[index] += 1
      })
  }

  scaleMinArr.concat(pxMinArr).forEach((column, index) => {
    column.renderWidth = minArr[index]
  })

  return { totalWidth, offsetWidth, offsetHeight }
}

const setLeftOrRightPosition = ({ columnList, direction, headerEl, bodyEl, scrollbarWidth }) => {
  // 这里需要浅拷贝一份，避免改变原始数据的顺序
  const colList = columnList.slice()

  // 如果是右测冻结则需要反转数组后再进行循环
  if (direction === 'right') {
    colList.reverse()
  }

  colList.reduce((pos, column) => {
    // 可能存在没有表头的情况，所以需要兼容处理下
    const ths = headerEl?.querySelectorAll(`[data-colid=${column.id}]`) || []
    const tds = bodyEl.querySelectorAll(`[data-colid=${column.id}]`)
    const allFixed = [...Array.from(ths), ...Array.from(tds)]
    allFixed.forEach((td) => {
      td.style[direction] = `${pos}px`
    })
    column.style = column.style || {}
    column.style[direction] = pos
    pos += column.renderWidth

    return pos
  }, 0)
}

// 设置分组父表头冻结列sticky布局的left和right值
const setGroupHeaderPosition = ({ columnChart, direction }) => {
  // 这里需要浅拷贝一份，避免改变原始数据的顺序
  const colChart = columnChart.slice()
  const finishColumns = new Set()
  // 如果是右测冻结则需要反转数组后再进行循环
  if (direction === 'right') {
    colChart.reverse()
  }

  colChart.forEach((columns) => {
    const len = columns.length
    if (len === 1) {
      return
    }

    const leafColumn = columns[len - 1]
    const leafDirectionPos = leafColumn?.style?.[direction] ?? null

    if (leafDirectionPos !== null) {
      columns.forEach((column, index) => {
        // 叶子节点则返回
        if (index === columns.length - 1) {
          return
        }
        column.style = column.style || {}
        if (!finishColumns.has(column.id)) {
          column.style[direction] = leafDirectionPos
          finishColumns.add(column.id)
        }
      })
    }
  })
}

// 设置分组父表头冻结列是否左侧最后一项，或者是否右侧第一项
const setGroupHeaderLastOrFirst = ({ columnChart, leftList, rightList }) => {
  columnChart.forEach((columns) => {
    const len = columns.length
    const leafColumn = columns[len - 1]

    const isFixedLeftLast = leftList[leftList.length - 1] === leafColumn
    const isFixedRightFirst = rightList[0] === leafColumn

    columns.forEach((column) => {
      column.isFixedLeftLast = column.isFixedLeftLast || isFixedLeftLast
      column.isFixedRightFirst = column.isFixedRightFirst || isFixedRightFirst
    })
  })
}

export const calcFixedStickyPosition = ({ headerEl, bodyEl, columnStore, scrollbarWidth, columnChart, isGroup }) => {
  // 获取左侧和右侧冻结列
  const { leftList, rightList } = columnStore
  setLeftOrRightPosition({ columnList: leftList, direction: 'left', headerEl, bodyEl, scrollbarWidth })
  setLeftOrRightPosition({ columnList: rightList, direction: 'right', headerEl, bodyEl, scrollbarWidth })
  if (isGroup) {
    setGroupHeaderPosition({ columnChart, direction: 'left' })
    setGroupHeaderPosition({ columnChart, direction: 'right' })
    setGroupHeaderLastOrFirst({ columnChart, leftList, rightList })
  }
}

export function calcFixedDetails(_vm) {
  const { collectColumn, visibleColumn, columnStore, isGroup } = _vm
  const { leftList, rightList } = columnStore

  visibleColumn.forEach(({ fixedDetails }) => {
    if (fixedDetails) {
      fixedDetails.isLeftLast = false
      fixedDetails.isRightFirst = false
      fixedDetails.left = 0
      fixedDetails.right = 0
    }
  })

  let length = leftList.length
  let value = 0

  if (Array.isArray(leftList) && length > 0) {
    leftList.forEach(({ fixedDetails, renderWidth }, i) => {
      fixedDetails.isLeftLast = i === length - 1
      fixedDetails.left = value

      value += renderWidth
    })
  }

  length = rightList.length
  value = 0

  if (Array.isArray(rightList) && length > 0) {
    const reversed = [...rightList].reverse()

    reversed.forEach(({ fixedDetails, renderWidth }, i) => {
      fixedDetails.isRightFirst = i === length - 1
      fixedDetails.right = value

      value += renderWidth
    })
  }

  if (isGroup) {
    const header = calcHeader(collectColumn)
    const leftWidth = []
    const rightWidth = []
    const leftIndices = leftList.map((col) => (leftWidth.push(col.renderWidth), header.leafColumns.indexOf(col)))
    const rightIndices = rightList.map((col) => (rightWidth.push(col.renderWidth), header.leafColumns.indexOf(col)))
    const leftTable = []
    const rightTable = []

    header.headerTable.forEach((levelCols, level) => {
      if (level < header.maxLevel) {
        leftTable.push(leftIndices.map((i) => levelCols[i]))
        rightTable.push(rightIndices.map((i) => levelCols[i]))
      }
    })

    leftTable.forEach((cols) => {
      const row = cols.reduce((p, c) => (c && !p.includes(c) ? p.push(c) : null, p), [])

      if (row.length > 0) {
        row[row.length - 1].fixedDetails.isLeftLast = true

        row.forEach((c) => {
          const s = cols.indexOf(c)
          const e = cols.lastIndexOf(c)

          c.fixedDetails.left = leftWidth.slice(0, s).reduce((t, c) => (t += c), 0)
          c.renderWidth = leftWidth.slice(s, e + 1).reduce((t, c) => (t += c), 0)
        })
      }
    })

    rightTable.forEach((cols) => {
      const row = cols.reduce((p, c) => (c && !p.includes(c) ? p.push(c) : null, p), []).reverse()

      if (row.length > 0) {
        row[row.length - 1].fixedDetails.isRightFirst = true

        let right = 0

        row.forEach((c) => {
          const s = cols.indexOf(c)
          const e = cols.lastIndexOf(c)

          c.renderWidth = rightWidth.slice(s, e + 1).reduce((t, c) => (t += c), 0)
          c.fixedDetails.right = right

          right += c.renderWidth
        })
      }
    })
  }
}
