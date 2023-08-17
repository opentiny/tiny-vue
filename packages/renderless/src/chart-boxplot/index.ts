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

import { getFormated, htmlHandler, getLegend } from '../chart-core/deps/utils'
import { itemPoint, itemLabel, itemContent } from '../chart-core/deps/constants'

const getXAxis = (args) => {
  const { columns, xAxisName, axisVisible, xAxisType } = args

  return [
    {
      type: xAxisType,
      nameLocation: 'middle',
      nameGap: 22,
      name: xAxisName || '',
      axisTick: { show: true, lineStyle: { color: '#eee' } },
      data: columns,
      show: axisVisible
    }
  ]
}

const getSeries = (args) => {
  const { area, areaStyle, itemStyle, label, lineStyle, outliers = [], rows } = args
  let { series = [], arr = ['boxplot', 'scatter'] } = {}

  arr.forEach((item) => {
    if (item === 'scatter' && !outliers.length) {
      return
    }

    let data = item === 'boxplot' ? rows : outliers
    let seriesItem = { name: '', type: item, data }

    area && (seriesItem.areaStyle = {})
    label && (seriesItem.label = label)
    lineStyle && (seriesItem.lineStyle = lineStyle)
    itemStyle && (seriesItem.itemStyle = itemStyle)
    areaStyle && (seriesItem.areaStyle = areaStyle)

    series.push(seriesItem)
  })

  return series
}

const factoryFmt =
  ({ yAxisType, i, digit }) =>
  (val) =>
    getFormated(val, yAxisType[i], digit)

const getYAxis = (args) => {
  const { axisVisible, digit, max, min, scale, yAxisName, yAxisType } = args
  const yAxisBase = { type: 'value', axisTick: { show: false }, show: axisVisible }
  let { yAxis = [], len = yAxisType.length >= 2 ? 2 : 1, i = 0 } = {}

  for (; i < len; i++) {
    if (!yAxisType[i]) {
      yAxis[i] = { ...yAxisBase }
    } else {
      let formatter = factoryFmt({ yAxisType, i, digit })
      let yAxisAdv = { axisLabel: { formatter } }

      yAxis[i] = { ...yAxisBase, ...yAxisAdv }

      let name = yAxisName[i] || ''

      Object.assign(yAxis[i], { name, scale: scale[i] || false, min: min[i] || null, max: max[i] || null })
    }
  }

  return yAxis
}

const tooltipTemplate = ({ data, seriesType, seriesName, color, value, name }, tooltipLabel) => {
  let tpl = []

  if (seriesType === 'boxplot') {
    const tips = []

    tooltipLabel.forEach((label, idx) => {
      tips.push(`${itemPoint(color)}${itemLabel(label)}${itemContent(data[idx + 1])}`)
    })

    tpl.push(tips.join('<br/>'))
  } else {
    tpl.push(itemPoint(color))

    if (Array.isArray(value)) {
      tpl.push(value.join(': '))
    } else {
      tpl.push(`${seriesName || name}: `)
      tpl.push(value)
    }

    tpl.push('<br>')
  }

  return tpl
}

const getTooltip = (args) => {
  const { tooltipFormatter, tooltipLabel } = args

  return {
    trigger: 'item', // axis item
    formatter(items) {
      if (tooltipFormatter) {
        return tooltipFormatter.apply(null, arguments)
      }

      let tpl = []
      const { name, axisValueLabel } = items[0] || {}
      const title = name || axisValueLabel

      title && tpl.push(`${title}<br>`)

      if (Array.isArray(items)) {
        items.forEach((item) => {
          tpl = tpl.concat(tooltipTemplate(item, tooltipLabel))
        })
      } else {
        tpl = tooltipTemplate(items, tooltipLabel)
      }

      return tpl.join('')
    }
  }
}

export const boxplot = (columns, rows, settings, extra) => {
  rows = Array.isArray(rows) ? rows : []
  columns = Array.isArray(columns) ? columns : []

  const { axisSite = {}, yAxisType = ['normal'], xAxisType = 'category', yAxisName = '', xAxisName = '' } = settings
  const { axisVisible = true, area, scale = [false, false], min = [null, null], max = [null, null] } = settings
  const { nullAddZero = false, digit = 2, legendName = {}, labelMap = {}, label, itemStyle } = settings
  const { lineStyle, areaStyle, tooltipLabel = ['lower', 'Q1', 'median', 'Q3', 'upper'] } = settings
  const { legendVisible, outliers, tooltipFormatter, tooltipVisible } = extra
  let metrics = columns.slice()

  if (axisSite.right && axisSite.left) {
    metrics = axisSite.left.concat(axisSite.right)
  } else if (!axisSite.right && axisSite.left) {
    metrics = axisSite.left
  } else if (settings.metrics) {
    metrics = settings.metrics
  }

  const legend = legendVisible && getLegend({ metrics, legendName, labelMap })
  const getParams = () => ({ tooltipFormatter, tooltipLabel: htmlHandler(tooltipLabel), digit })
  const tooltip = tooltipVisible && getTooltip(getParams())
  const xAxis = getXAxis({ columns, xAxisName, axisVisible, xAxisType })
  const yAxisParams = { yAxisName, yAxisType, axisVisible }

  Object.assign(yAxisParams, { scale, min, max, digit })

  const yAxis = getYAxis(yAxisParams)
  const seriesParams = { rows, axisSite, metrics, area, nullAddZero, labelMap, label }

  Object.assign(seriesParams, { itemStyle, lineStyle, areaStyle, xAxisType, outliers })

  const series = getSeries(seriesParams)

  return { legend, xAxis, series, yAxis, tooltip }
}
