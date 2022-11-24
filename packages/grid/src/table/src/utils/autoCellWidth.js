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
