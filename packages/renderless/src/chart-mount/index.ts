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

import { getFormated, getStackMap, getLegend, set } from '../chart-core/deps/utils'
import { isNull } from '../common/type'
import { itemPoint, itemLabel, itemContent, SAAS_DEFAULT_COLORS_10 } from '../chart-core/deps/constants'

const getLineXAxis = (args) => {
  const { xAxisType, dimension, rows, xAxisName, axisVisible } = args

  return dimension.map((item, idx) => ({
    nameLocation: 'middle',
    type: xAxisType,
    name: xAxisName[idx] || '',
    nameGap: 22,
    show: axisVisible,
    data: rows.map((row) => row[item]),
    axisTick: { show: true, lineStyle: { color: '#191919', opacity: 0.1, width: 2 }, alignWithLabel: true },
    axisLine: { show: true, lineStyle: { color: '#191919', opacity: 0.1, width: 2 } },
    axisPointer: { show: true, type: 'line', lineStyle: { color: '#191919', opacity: 0.3, type: 'solid' } }
  }))
}

const setSingLineSeries = ({ defaultSeriesItem, seriesItem }) => {
  defaultSeriesItem.showSymbol = true
  set(defaultSeriesItem, 'emphasis.itemStyle.color', SAAS_DEFAULT_COLORS_10[0])
  seriesItem.label = { show: true, ...seriesItem.label }
  seriesItem.itemStyle = { color: 'transparent', ...seriesItem.itemStyle }
  seriesItem.lineStyle = { color: SAAS_DEFAULT_COLORS_10[0], ...seriesItem.lineStyle }
  seriesItem.animation = seriesItem.animation || false
}

const getLineSeries = (args) => {
  const { areaStyle, axisSite, dimension, itemStyle, label, symbolTypeIndex, symbol } = args
  const { labelMap, lineStyle, metrics, nullAddZero, rows, stack, color, smooth } = args

  const dataTempObj = {}
  const stackMapData = stack && getStackMap(stack)
  let series = []

  metrics.forEach((item) => (dataTempObj[item] = []))

  rows.forEach((row) => {
    metrics.forEach((item) => {
      let value = null

      if (!isNull(row[item])) {
        value = row[item]
      } else if (nullAddZero) {
        value = 0
      }

      dataTempObj[item].push([row[dimension[0]], value])
    })
  })

  metrics.forEach((item, i, arr) => {
    let name = !isNull(labelMap[item]) ? labelMap[item] : item
    const isSmooth = !(smooth === false)
    let seriesItem = { smooth: isSmooth, name, type: 'pictorialBar', data: dataTempObj[item] }

    const emphasis = { itemStyle: { borderColor: '#fff', borderWidth: 2 } }
    const symbolType = [
      'path://path://M10 600 Q 95 0 180 600',
      'path://M0,10 L10,10 L5,0 L0,10 z',
      'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z'
    ]
    let defaultSeriesItem = {
      symbol: symbolType[symbolTypeIndex] || symbol,
      showSymbol: false,
      emphasis,
      itemStyle: {
        opacity: 1 / (arr.length - i)
      }
    }

    metrics.length === 1 && !isSmooth && setSingLineSeries({ defaultSeriesItem, seriesItem })

    seriesItem = Object.assign(defaultSeriesItem, seriesItem)
    axisSite.right && (seriesItem.yAxisIndex = ~axisSite.right.indexOf(item) ? 1 : 0)
    stack && stackMapData[item] && (seriesItem.stack = stackMapData[item])
    label && (seriesItem.label = label)
    itemStyle && (seriesItem.itemStyle = itemStyle)
    lineStyle && (seriesItem.lineStyle = lineStyle)
    areaStyle && (seriesItem.areaStyle = areaStyle)
    series.push(seriesItem)
  })

  return series
}

const getLineYAxis = (args) => {
  const { yAxisType, yAxisName, scale, axisVisible, max, min, digit } = args

  const yAxisBase = {
    type: 'value',
    show: axisVisible,
    axisTick: {
      show: false
    }
  }

  let yAxis = []

  for (let k = 0; k < 2; k++) {
    if (yAxisType[k]) {
      yAxis[k] = {
        ...yAxisBase,
        axisLabel: {
          formatter(val) {
            return getFormated(val, yAxisType[k], digit)
          }
        }
      }
    } else {
      yAxis[k] = { ...yAxisBase }
    }

    yAxis[k].name = yAxisName[k] || ''
    yAxis[k].scale = scale[k] || false
    yAxis[k].min = min[k] || null
    yAxis[k].max = max[k] || null
  }

  return yAxis
}

const getLineTooltip = (args) => {
  const { axisSite, yAxisType, digit, labelMap, tooltipFormatter } = args
  const rightItemsArr = axisSite.right || []

  const rightListArr = labelMap
    ? rightItemsArr.map((item) => (labelMap[item] === undefined ? item : labelMap[item]))
    : rightItemsArr

  return {
    formatter(items) {
      if (tooltipFormatter) {
        return tooltipFormatter.apply(null, arguments)
      }

      let template = []
      const { name, axisValueLabel } = items[0]
      const title = name || axisValueLabel

      template.push(`${title}<br>`)

      items.forEach(({ seriesName, data, color }) => {
        if (color === 'transparent' && items.length === 1) {
          color = SAAS_DEFAULT_COLORS_10[0]
        }
        let showData = null

        const type = ~rightListArr.indexOf(seriesName) ? yAxisType[1] : yAxisType[0]

        const itemData = Array.isArray(data) ? data[1] : data
        showData = getFormated(itemData, type, digit)

        template.push(itemPoint(color))
        template.push(`${itemLabel(seriesName)}${itemContent(showData)}`)
        template.push('<br>')
      })

      return template.join('')
    },
    trigger: 'axis'
  }
}

export const mount = (columns, rows, settings, extra) => {
  rows = Array.isArray(rows) ? rows : []
  columns = Array.isArray(columns) ? columns : []

  const { axisSite = {}, yAxisType = ['normal', 'normal'], xAxisType = 'category', yAxisName = [] } = settings
  const {
    dimension = [columns[0]],
    xAxisName = [],
    axisVisible = true,
    area,
    stack,
    symbolTypeIndex = 0,
    symbol = ''
  } = settings
  const { scale = [false, false], min = [null, null], max = [null, null], nullAddZero = false, digit = 2 } = settings
  const { legendName = {}, labelMap = {}, label, itemStyle, lineStyle, areaStyle, smooth } = settings

  const { tooltipVisible, legendVisible, tooltipFormatter, color } = extra
  let metrics = columns.slice()

  if (axisSite.right && axisSite.left) {
    metrics = axisSite.left.concat(axisSite.right)
  } else if (settings.metrics) {
    metrics = settings.metrics
  } else if (axisSite.left && !axisSite.right) {
    metrics = axisSite.left
  } else {
    metrics.splice(columns.indexOf(dimension[0]), 1)
  }

  let legendItemStyle
  if (metrics.length === 1) {
    legendItemStyle = { itemStyle: { color: SAAS_DEFAULT_COLORS_10[0] } }
  }

  const legend = legendVisible && getLegend({ legendName, metrics, labelMap, legendItemStyle })

  const tooltip =
    tooltipVisible && getLineTooltip({ axisSite, digit, labelMap, tooltipFormatter, xAxisType, yAxisType })

  const xAxis = getLineXAxis({ axisVisible, dimension, xAxisName, xAxisType, rows })

  const yAxis = getLineYAxis({ axisVisible, digit, max, min, scale, yAxisType, yAxisName })
  const seriesParam = { areaStyle, area, axisSite, dimension, itemStyle, lineStyle, symbolTypeIndex, symbol }

  Object.assign(seriesParam, { label, labelMap, metrics, nullAddZero, rows, xAxisType, stack, color, smooth })

  const series = getLineSeries(seriesParam)

  let options = { legend, xAxis, series, yAxis, tooltip }
  return { ...options, ...settings }
}
