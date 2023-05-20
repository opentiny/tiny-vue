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

import { getFormated } from '../chart-core/deps/utils'
import { itemPoint, itemLabel, itemContent } from '../chart-core/deps/constants'
import { isNull } from '../common/type'

const getFunnelTooltip = (dataType, digit) => {
  function formatter(item) {
    let tpl = []
    tpl.push(itemPoint(item.color))

    tpl.push(`${itemLabel(item.name)}${itemContent(getFormated(item.data.realValue, dataType, digit))}`)

    return tpl.join('')
  }

  return { trigger: 'item', formatter }
}

const getFunnelLegend = (args) => {
  const { data, legendName } = args

  function formatter(name) {
    return isNull(legendName[name]) ? name : legendName[name]
  }

  return { data, formatter }
}

const getFunnelSeries = (args) => {
  const { ascending, dimension, itemStyle, label, labelLine, metrics, rows, sequence, useDefaultOrder } = args
  let { series = { type: 'funnel' }, falseFunnel = false } = {}

  series.minSize = 8

  let innerRows = rows.sort((a, b) => sequence.indexOf(a[dimension]) - sequence.indexOf(b[dimension]))

  innerRows.some((row, index) => index && row[metrics] > innerRows[index - 1][metrics] && (falseFunnel = true))

  const step = 100 / innerRows.length

  if (falseFunnel && !useDefaultOrder) {
    const handler = (row, index) => ({ name: row[dimension], value: (index + 1) * step, realValue: row[metrics] })

    series.data = innerRows.slice().reverse().map(handler)
  } else {
    series.data = innerRows.map((row) => ({ name: row[dimension], value: row[metrics], realValue: row[metrics] }))
  }

  let total = 0
  rows.forEach((row) => {
    total += row[metrics]
  })
  series.label = {
    position: 'inside',
    color: '#fff',
    formatter(item) {
      let { value } = item
      return `${Number(value / total).toFixed(2) * 100}%`
    }
  }

  ascending && (series.sort = 'ascending')
  label && (series.label = label)
  labelLine && (series.labelLine = labelLine)
  itemStyle && (series.itemStyle = itemStyle)

  return series
}

export const funnel = (outerColumns, outerRows, settings, extra) => {
  const { columns = outerColumns.slice(), rows = outerRows.slice() } = {}
  const { dataType = 'normal', dimension = columns[0], sequence = rows.map((row) => row[dimension]) } = settings
  const { digit = 2, ascending, label, labelLine, legendName = {}, itemStyle, filterZero, useDefaultOrder } = settings
  const { tooltipVisible, legendVisible } = extra
  let metrics

  if (settings.metrics) {
    metrics = settings.metrics
  } else {
    let temp = columns.slice()

    temp.splice(columns.indexOf(dimension), 1)
    metrics = temp[0]
  }

  let innerRows = rows.sort((a, b) => sequence.indexOf(a[dimension]) - sequence.indexOf(b[dimension]))

  filterZero && (innerRows = innerRows.filter((row) => row[metrics]))

  const tooltip = tooltipVisible && getFunnelTooltip(dataType, digit)
  const legend = legendVisible && getFunnelLegend({ data: innerRows.map((row) => row[dimension]), legendName })
  const seriesParam = { dimension, metrics, rows: innerRows, sequence, ascending }

  Object.assign(seriesParam, { label, labelLine, itemStyle, filterZero, useDefaultOrder })

  const series = getFunnelSeries(seriesParam)

  return { tooltip, legend, series }
}
