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

const DEF_MA = [5, 10, 20, 30]
const DEF_DOWN_COLOR = '#eb171f'
const DEF_UP_COLOR = '#00a874'
const DEF_START = 50
const DEF_END = 100
const SHOW_FALSE = { show: false }
let defaultKName = ''

const getCandleLegend = (args) => {
  const { MA, labelMap, legendName, showMA } = args
  let data = [defaultKName]

  showMA && (data = data.concat(MA.map((v) => `MA${v}`)))
  labelMap && (data = data.map((v) => (isNull(labelMap[v]) ? v : labelMap[v])))

  function formatter(name) {
    return isNull(legendName[name]) ? name : legendName[name]
  }

  return { data, formatter }
}

const getCandleTooltip = (args) => {
  const { dataType, digit, labelMap, metrics } = args

  function position(pos, params, el, elRect, size) {
    const result = { top: 10 }
    const side = pos[0] < size.viewSize[0] / 2 ? 'right' : 'left'

    result[side] = 60

    return result
  }

  function formatter(options) {
    const tplt = []

    tplt.push(`${itemContent(options[0].axisValue)}<br>`)

    options.forEach((opt) => {
      const { color, componentSubType, data, seriesName } = opt

      const name = isNull(labelMap[seriesName]) ? seriesName : labelMap[seriesName]

      tplt.push(`${itemPoint(color)}${itemContent(name)}: `)

      if (componentSubType === 'candlestick') {
        tplt.push('<br>')

        metrics.slice(0, 4).forEach((m, i) => {
          const name = isNull(labelMap[m]) ? m : labelMap[m]
          const value = getFormated(data[i + 1], dataType, digit)

          tplt.push(`${itemLabel(`- ${name}`)}${itemContent(value)}<br>`)
        })
      } else if (componentSubType === 'line') {
        const value = getFormated(data, dataType, digit)
        tplt.push(`${itemContent(value)}<br>`)
      } else if (componentSubType === 'bar') {
        const value = getFormated(data[1], dataType, digit)
        tplt.push(`${itemContent(value)}<br>`)
      }
    })

    return tplt.join('')
  }

  return { axisPointer: { type: 'cross' }, formatter, position, trigger: 'axis' }
}

const getCandleVisualMap = (args) => {
  const { MA, downColor, showMA, upColor } = args
  let seriesIndex = showMA ? 1 + MA.length : 1
  let pieces = [
    { value: 1, color: downColor },
    { value: -1, color: upColor }
  ]

  return { dimension: 2, pieces, seriesIndex, show: false }
}

const getCandleGrid = (args) => {
  const { showVol } = args
  let height = showVol ? '50%' : '65%'

  return [
    { containLabel: false, left: '10%', right: '8%', top: '10%', height },
    { containLabel: false, left: '10%', right: '8%', top: '65%', height: '16%' }
  ]
}

const getCandleXAxis = (args) => {
  const { dims: data } = args
  const { type = 'category', scale = true, boundaryGap = false, splitLine = SHOW_FALSE } = {}
  const { axisLine = { onZero: false }, axisTick = SHOW_FALSE, axisLabel = SHOW_FALSE } = {}
  const { min = 'dataMin', max = 'dataMax', gridIndex = 1 } = {}

  return [
    { axisLine, boundaryGap, data, max, min, scale, splitLine, type },
    { axisLine, boundaryGap, data, max, min, scale, splitLine, type, axisLabel, axisTick, gridIndex }
  ]
}

const getCandleYAxis = (args) => {
  const { dataType, digit } = args
  const { scale = true, gridIndex = 1, splitNumber = 2, axisLine = SHOW_FALSE } = {}
  const { axisTick = SHOW_FALSE, axisLabel = SHOW_FALSE, splitLine = SHOW_FALSE } = {}
  const formatter = (val) => getFormated(val, dataType, digit)

  return [
    { scale, axisTick, axisLabel: { formatter } },
    { scale, axisTick, axisLabel, gridIndex, splitNumber, axisLine, splitLine }
  ]
}

const getCandleDataZoom = (args) => {
  const { start, end } = args

  return [
    { type: 'inside', xAxisIndex: [0, 1], start, end },
    { type: 'slider', xAxisIndex: [0, 1], start, end, show: true, top: '85%' }
  ]
}

const calculateMA = (dayCount, data, digit) => {
  let result = []

  data.forEach((d, k) => {
    if (k < dayCount) {
      result.push('-')
    } else {
      let { acc = 0, i = 0 } = {}

      for (; i < dayCount; i++) {
        acc += data[k - i][1]
      }

      result.push(Number((acc / dayCount).toFixed(digit)))
    }
  })

  return result
}

const getCandleSeries = (args) => {
  const { MA, digit, downColor, itemStyle, labelMap, showMA, showVol, upColor, values, volumes } = args
  const style = itemStyle || { color: upColor, color0: downColor, borderColor: null, borderColor0: null }
  const lineStyle = { opacity: 0.5 }
  const name = isNull(labelMap[defaultKName]) ? defaultKName : labelMap[defaultKName]
  const series = [{ name, data: values, type: 'candlestick', itemStyle: style }]

  if (showMA) {
    MA.forEach((d) => {
      const key = `MA${d}`
      const serieName = isNull(labelMap[key]) ? key : labelMap[key]
      const serieData = calculateMA(d, values, digit)

      series.push({ name: serieName, data: serieData, type: 'line', lineStyle, smooth: true })
    })
  }

  if (showVol) {
    series.push({ name: 'Volume', data: volumes, type: 'bar', xAxisIndex: 1, yAxisIndex: 1 })
  }

  return series
}

export const candle = (columns, rows, settings, extra) => {
  const { dimension = columns[0], metrics = columns.slice(1, 6), digit = 2, itemStyle } = settings
  const { labelMap = {}, legendName = {}, MA = DEF_MA, showMA = false, showVol = false } = settings
  const { showDataZoom = false, downColor = DEF_DOWN_COLOR, upColor = DEF_UP_COLOR } = settings
  const { start = DEF_START, end = DEF_END, dataType } = settings
  const { tooltipVisible, legendVisible, t } = extra
  const isLiteData = Array.isArray(rows[0])
  const { dims = [], values = [], volumes = [] } = {}
  const candleMetrics = metrics.slice(0, 4)
  const volumeMetrics = metrics[4]

  defaultKName = t('ui.chart.kName')

  if (isLiteData) {
    rows.forEach((row) => {
      const itemResult = []

      dims.push(row[columns.indexOf(dimension)])

      candleMetrics.forEach((item) => itemResult.push(row[columns.indexOf(item)]))

      values.push(itemResult)

      volumeMetrics && volumes.push(row[columns.indexOf(volumeMetrics)])
    })
  } else {
    rows.forEach((row, index) => {
      const itemResult = []

      dims.push(row[dimension])

      candleMetrics.forEach((item) => itemResult.push(row[item]))

      values.push(itemResult)

      if (volumeMetrics) {
        const status = row[metrics[0]] > row[metrics[1]] ? 1 : -1

        volumes.push([index, row[volumeMetrics], status])
      }
    })
  }

  let params = { MA, labelMap, legendName, showMA }
  const legend = legendVisible && getCandleLegend(params)

  params = { dataType, digit, labelMap, metrics }

  const tooltip = tooltipVisible && getCandleTooltip(params)

  params = { downColor, upColor, MA, showMA }

  const visualMap = showVol && getCandleVisualMap(params)
  const dataZoom = showDataZoom && getCandleDataZoom({ start, end })
  const grid = getCandleGrid({ showVol })
  const xAxis = getCandleXAxis({ dims })
  const yAxis = getCandleYAxis({ dataType, digit })

  params = { values, volumes, upColor, downColor, showMA }
  Object.assign(params, { MA, showVol, labelMap, digit, itemStyle })

  const series = getCandleSeries(params)

  const axisPointer = { link: { xAxisIndex: 'all' } }

  return { legend, tooltip, visualMap, grid, xAxis, yAxis, dataZoom, series, axisPointer }
}
