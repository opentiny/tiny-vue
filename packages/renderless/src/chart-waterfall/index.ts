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
import { isNull } from '../common/type'
import { itemLabel, itemContent, SAAS_DEFAULT_COLORS_10 } from '../chart-core/deps/constants'

const getWaterfallTooltip = (dataType, digit) => {
  let trigger = 'axis'
  let axisPointer = { type: 'shadow' }
  let formatter = function (items) {
    const item = items[1]

    return [`${itemContent(item.name)}<br/>${itemLabel(item.seriesName)}`, `${itemContent(getFormated(item.value, dataType, digit))}`].join('')
  }

  return { trigger, axisPointer, formatter }
}

const getWaterfallXAxis = (args) => {
  const { axisVisible, dimension, labelMap, remainName, remainStatus, rows, totalName, xAxisName } = args

  let xAxisData = [totalName].concat(rows.map((row) => row[dimension]))

  remainStatus === 'have-remain' && (xAxisData = xAxisData.concat([remainName]))

  let name = (labelMap && labelMap[xAxisName]) || xAxisName

  const xAxis = { type: 'category', name, splitLine: { show: false }, data: xAxisData, show: axisVisible }
  const axisLine = { show: true, lineStyle: { color: '#191919', opacity: 0.1, width: 2 } }
  const axisPointer = { type: 'shadow', z: 1, shadowStyle: { color: '#f5f5f5' } }

  return {
    ...xAxis,
    axisLine,
    axisPointer
  }
}

const getWaterfallYAxis = (args) => {
  const { axisVisible, dataType, digit, labelMap, yAxisName } = args
  let name = !isNull(labelMap[yAxisName]) ? labelMap[yAxisName] : yAxisName
  let formatter = function (val) {
    return getFormated(val, dataType, digit)
  }

  return { type: 'value', name, axisTick: { show: false }, axisLabel: { formatter }, show: axisVisible }
}

const getWaterfallSeries = (args) => {
  const { dataSum, dataType, digit, metrics, remainStatus, rows, t, totalNum } = args
  const seriesBase = { type: 'bar', stack: t('ui.chart.summation') }
  let { dataSumTemp = dataSum, totalNumTemp = totalNum, assistData, mainData } = {}
  const rowData = rows.map((row) => row[metrics])

  if (remainStatus === 'have-remain') {
    assistData = [0].concat(rows.map((row) => (totalNumTemp -= row[metrics]))).concat([0])
    mainData = [totalNum].concat(rowData).concat([totalNum - dataSum])
  } else {
    assistData = [0].concat(rows.map((row) => (dataSumTemp -= row[metrics])))
    mainData = [dataSum].concat(rowData)
  }

  const series = []
  let seriesAdv = {
    name: t('ui.chart.auxiliary'),
    itemStyle: { opacity: 0 },
    emphasis: { itemStyle: { opacity: 0 } },
    data: assistData
  }

  series.push(Object.assign(seriesAdv, seriesBase))

  let formatter = function (item) {
    return getFormated(item.value, dataType, digit)
  }

  seriesAdv = {
    name: t('ui.chart.value'),
    label: { show: true, position: 'top', formatter },
    data: mainData
  }

  series.push(
    Object.assign(seriesAdv, {
      ...seriesBase,
      itemStyle: { borderRadius: [4, 4, 0, 0] },
      color: SAAS_DEFAULT_COLORS_10[0]
    })
  )

  return series
}

const getWaterfallRemainStatus = (dataSum, totalNum) => (!totalNum ? 'not-total' : totalNum <= dataSum ? 'none-remain' : 'have-remain')

export const waterfall = (columns, rows, settings, extra) => {
  const { tooltipVisible, t } = extra
  const { axisVisible = true, dataType = 'normal', dimension = columns[0] } = settings
  const { remainName = t('ui.chart.other'), totalName = t('ui.chart.total') } = settings
  const { totalNum, xAxisName = dimension, digit = 2, labelMap = {} } = settings

  let metricsTemp = columns.slice()

  metricsTemp.splice(metricsTemp.indexOf(dimension), 1)

  const { metrics = metricsTemp[0], yAxisName = metrics } = {}
  const tooltip = tooltipVisible && getWaterfallTooltip(dataType, digit)

  const dataSum = parseFloat(rows.reduce((pre, cur) => pre + Number(cur[metrics]), 0).toFixed(digit))
  const remainStatus = getWaterfallRemainStatus(dataSum, totalNum)
  const xAxisParams = { dimension, rows, remainStatus, totalName }

  Object.assign(xAxisParams, { remainName, xAxisName, labelMap, axisVisible })

  const xAxis = getWaterfallXAxis(xAxisParams)
  const yAxisParams = { dataType, yAxisName, axisVisible, digit, labelMap }
  const yAxis = getWaterfallYAxis(yAxisParams)
  const seriesParams = { dataType, rows, dimension, metrics }

  Object.assign(seriesParams, { totalNum, remainStatus, dataSum, digit, t })

  const series = getWaterfallSeries(seriesParams)

  return { series, tooltip, xAxis, yAxis }
}
