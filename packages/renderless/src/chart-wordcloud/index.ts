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

import { random } from '../common/string'
import { itemLabel, itemContent } from '../chart-core/deps/constants'

const isArr = Array.isArray

const getSeries = (args) => {
  const { color, dimension, metrics, rows, shape, sizeMax, sizeMin } = args
  let normalColor

  if (!isArr(color) && !!color) {
    normalColor = color
  } else {
    normalColor = () => {
      const rgb = [Math.round(random() * 160), Math.round(random() * 160), Math.round(random() * 160)].join(',')
      return 'rgb(' + rgb + ')'
    }
  }

  let textStyle = { normal: { color: normalColor }, color: normalColor }
  const baseType = { type: 'wordCloud', textStyle, shape, sizeRange: [sizeMin, sizeMax] }
  const len = isArr(color) ? color.length : 0

  baseType.data = rows.slice().map((row, i) => {
    const text = { name: row[dimension], value: row[metrics] }

    if (len > 0) {
      let wordColor = color[i % len]
      text.textStyle = {
        normal: {
          color: wordColor
        },
        color: wordColor
      }
    }

    return text
  })

  Object.assign(baseType, { rotationRange: [0, 0], gridSize: 10 })

  return [baseType]
}

const getTooltip = (args) => {
  const { tooltipFormatter } = args

  function formatter(params) {
    const { data } = params
    const { name, value } = data

    if (tooltipFormatter) {
      return tooltipFormatter.apply(null, params)
    }

    return `${itemLabel(name)}${itemContent(value)}`
  }

  return { show: true, formatter }
}

const shapeSquare = (theta) => Math.min(1 / Math.abs(Math.cos(theta)), 1 / Math.abs(Math.sin(theta)))

export const wordcloud = (columns, rows, settings, extra) => {
  const { dimension = columns[0], metrics = columns[1], color = '' } = settings
  const { sizeMax = 60, sizeMin = 12, shape } = settings
  const { tooltipVisible, tooltipFormatter, color: colors } = extra
  const seriesParams = { dimension, metrics, rows, sizeMax, sizeMin }
  Object.assign(seriesParams, { color: color || colors, shape: shape || shapeSquare })
  const series = getSeries(seriesParams)
  const tooltip = tooltipVisible && getTooltip({ tooltipFormatter })

  return { series, tooltip }
}
