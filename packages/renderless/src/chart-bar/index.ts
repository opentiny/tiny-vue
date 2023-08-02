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

import { getFormated, getStackMap, get, set, cloneDeep } from '../chart-core/deps/utils'
import { itemPoint, itemLabel, itemContent } from '../chart-core/deps/constants'
import { isNull } from '../common/type'

// default opacity of bar while dim-axis type is 'value'
const VALUE_AXIS_OPACITY = 0.5

const getValueAxisData = (dims) => {
  const max = Math.max(...dims)
  const min = Math.min(...dims)
  let { result = [], i = min } = {}

  for (; i <= max; i++) {
    result.push(i)
  }

  return result
}

const getBarDimAxis = (args) => {
  const { innerRows, dimAxisName, dimension, axisVisible, dimAxisType, dims } = args

  return dimension.map((item) => ({
    type: 'category',
    name: dimAxisName,
    nameLocation: 'middle',
    nameGap: 22,
    data: dimAxisType === 'value' ? getValueAxisData(dims) : innerRows.map((row) => row[item]),
    axisLabel: {
      formatter(value) {
        return String(value)
      }
    },
    show: axisVisible,
    axisTick: { show: true, alignWithLabel: true, lineStyle: { color: '#191919', opacity: 0.1, width: 2 } },
    axisLine: { show: true, lineStyle: { color: '#191919', opacity: 0.1, width: 2 } },
    axisPointer: { type: 'shadow', z: 1, shadowStyle: { color: '#f5f5f5' } }
  }))
}

const factoryFmt = ({ meaAxisType, i, digit }) => (val) => getFormated(val, meaAxisType[i], digit)

const getBarMeaAxis = (args) => {
  const { axisVisible, digit, max, meaAxisName, meaAxisType, min, scale } = args
  const meaAxisBase = { type: 'value', axisTick: { show: false }, show: axisVisible }
  let { meaAxis = [], i = 0, formatter } = {}

  for (; i < 2; i++) {
    if (meaAxisType[i]) {
      formatter = factoryFmt({ meaAxisType, i, digit })

      meaAxis[i] = { ...meaAxisBase, axisLabel: { formatter } }
    } else {
      meaAxis[i] = { ...meaAxisBase }
    }

    Object.assign(meaAxis[i], {
      max: max[i] || null,
      min: min[i] || null,
      name: meaAxisName[i] || '',
      scale: scale[i] || false
    })
  }

  return meaAxis
}

const getBarTooltip = (args) => {
  const { axisSite, digit, isHistogram, labelMap, meaAxisType } = args
  let secondAxis = (!isHistogram ? axisSite.top : axisSite.right) || []

  if (labelMap) {
    secondAxis = secondAxis.map((item) => (typeof labelMap[item] === 'undefined' ? item : labelMap[item]))
  }

  let formatter = function (items) {
    let { tplt = [], seriesName, type } = {}

    tplt.push(`${items[0].name}<br>`)

    items.forEach((item) => {
      seriesName = item.seriesName
      type = ~secondAxis.indexOf(seriesName) ? meaAxisType[1] : meaAxisType[0]

      tplt.push(itemPoint(item.color))
      tplt.push(itemLabel(seriesName))
      tplt.push(itemContent(getFormated(item.value, type, digit)))
      tplt.push('<br>')
    })

    return tplt.join('')
  }

  return { trigger: 'axis', formatter }
}

const getValueData = (seriesTemp, dims) => {
  const max = Math.max(...dims)
  const min = Math.min(...dims)
  let { result = [], i = min, index } = {}

  for (; i <= max; i++) {
    index = dims.indexOf(i)
    result.push(~index ? seriesTemp[index] : null)
  }

  return result
}

const getBarSeries = (args) => {
  const { axisSite, barGap, dimAxisType, dims, innerRows, isHistogram, itemStyle } = args
  const { label, labelMap, metrics, opacity, showLine = [], stack } = args
  let { secondAxis, secondDimAxisIndex, series = [], seriesTemp = {}, stackMap, stackNum = 0 } = {}

  secondAxis = (isHistogram ? axisSite.right : axisSite.top) || []
  secondDimAxisIndex = isHistogram ? 'yAxisIndex' : 'xAxisIndex'
  stackMap = stack && getStackMap(stack)

  metrics.forEach((item) => (seriesTemp[item] = []))
  innerRows.forEach((row) => metrics.forEach((item) => seriesTemp[item].push(row[item])))

  series = Object.keys(seriesTemp).map((item) => {
    let name = !isNull(labelMap[item]) ? labelMap[item] : item
    let type = ~showLine.indexOf(item) ? 'line' : 'bar'
    let data = dimAxisType === 'value' ? getValueData(seriesTemp[item], dims) : seriesTemp[item]
    let axisIndex = ~secondAxis.indexOf(item) ? '1' : '0'

    let seriesItem = { name, type, data, [secondDimAxisIndex]: axisIndex }

    if (seriesItem.type === 'line') {
      const emphasis = { itemStyle: { borderColor: '#fff', borderWidth: 2 } }
      const defaultSeriesItem = { symbol: 'circle', symbolSize: 8, showSymbol: false, emphasis }

      seriesItem = Object.assign(defaultSeriesItem, seriesItem)
    }

    const defaultItemStyle = { borderRadius: isHistogram ? [4, 4, 0, 0] : [0, 4, 4, 0] }
    const defaultLabel = { position: 'top' }

    stack && stackMap[item] && (seriesItem.stack = stackMap[item])

    if (Object.keys(stack).length) {
      // 堆叠图
      if (stackNum === Object.keys(stackMap).length - 1 || isNull(seriesItem.stack)) {
        seriesItem.itemStyle = Object.assign(defaultItemStyle, seriesItem.itemStyle)
      }
      if (!isNull(seriesItem.stack)) {
        stackNum++
      }

      seriesItem.itemStyle = { borderWidth: 2, borderColor: 'transparent', ...seriesItem.itemStyle }
    } else {
      // 非堆叠图
      seriesItem.itemStyle = Object.assign(defaultItemStyle, seriesItem.itemStyle)
    }

    seriesItem.label = Object.assign(defaultLabel, label)

    itemStyle && (seriesItem.itemStyle = itemStyle)

    let itemOpacity = opacity || get(seriesItem, 'itemStyle.opacity')

    dimAxisType === 'value' && Object.assign(seriesItem, { barGap, barCategoryGap: '1%' })
    dimAxisType === 'value' && isNull(itemOpacity) && (itemOpacity = VALUE_AXIS_OPACITY)

    !isNull(itemOpacity) && set(seriesItem, 'itemStyle.opacity', itemOpacity)

    return seriesItem
  })

  return series.length ? series : false
}

const getLegend = (args) => {
  const { metrics, labelMap, legendName } = args

  if (!legendName && !labelMap) {
    return { data: metrics }
  }

  const data = labelMap ? metrics.map((item) => (isNull(labelMap[item]) ? item : labelMap[item])) : metrics

  return {
    data,
    formatter(name) {
      return !isNull(legendName[name]) ? legendName[name] : name
    }
  }
}

const getDims = (rows, dimension) => rows.map((row) => row[dimension[0]])

export const bar = (columns, rows, settings, extra) => {
  const innerRows = cloneDeep(rows)
  const { axisSite = {}, dimension = [columns[0]], axisVisible = true, stack = {} } = settings
  const { digit = 2, dataOrder = false, scale = [false, false], min = [null, null], max = [null, null] } = settings
  const { legendName = {}, labelMap = {}, label, itemStyle, showLine, barGap = '-100%', opacity } = settings
  const { tooltipVisible, legendVisible } = extra
  let { metrics = columns.slice(), meaAxisType, dimAxisType, meaAxisName, dimAxisName, isHistogram = false } = {}

  if (axisSite.bottom && axisSite.top) {
    metrics = axisSite.top.concat(axisSite.bottom)
  } else if (!axisSite.right && axisSite.bottom) {
    metrics = axisSite.bottom
  } else if (settings.metrics) {
    metrics = settings.metrics
  } else {
    metrics.splice(columns.indexOf(dimension[0]), 1)
  }

  dimAxisType = settings.yAxisType || 'category'
  meaAxisType = settings.xAxisType || ['normal', 'normal']
  dimAxisName = settings.yAxisName || ''
  meaAxisName = settings.xAxisName || []

  if (dataOrder) {
    let { label, order } = dataOrder

    if (label && order) {
      innerRows.sort((a, b) => (order === 'desc' ? a[label] - b[label] : b[label] - a[label]))
    }
  }

  let dims = getDims(innerRows, dimension)
  let legend = legendVisible && getLegend({ metrics, labelMap, legendName })
  let yAxis = getBarDimAxis({ innerRows, dimAxisName, dimension, axisVisible, dimAxisType, dims })
  let xAxis = getBarMeaAxis({ axisVisible, meaAxisType, meaAxisName, scale, digit, max, min })
  let args = { axisSite, isHistogram, metrics, stack, itemStyle, label, labelMap, showLine }

  Object.assign(args, { dimAxisType, dims, barGap, dimension, innerRows, opacity })

  let tooltip = tooltipVisible && getBarTooltip({ axisSite, isHistogram, meaAxisType, digit, labelMap })
  let options = { legend, yAxis, series: getBarSeries(args), xAxis, tooltip }

  return options
}

export const histogram = (columns, rows, settings, extra) => {
  const innerRows = cloneDeep(rows)
  const { axisSite = {}, dimension = [columns[0]], stack = {}, axisVisible = true } = settings
  const { digit = 2, dataOrder = false, scale = [false, false], min = [null, null], max = [null, null] } = settings
  const { labelMap = {}, legendName = {}, label, itemStyle, showLine, barGap = '-100%', opacity } = settings
  const { tooltipVisible, legendVisible } = extra

  if (dataOrder) {
    let { label, order } = dataOrder

    if (label && order) {
      innerRows.sort((a, b) => (order === 'desc' ? a[label] - b[label] : b[label] - a[label]))
    }
  }

  let { metrics, meaAxisType, dimAxisType, meaAxisName, dimAxisName, isHistogram = true, dims, legend } = {}

  metrics = columns.slice()

  if (axisSite.right && axisSite.left) {
    metrics = axisSite.left.concat(axisSite.right)
  } else if (!axisSite.right && axisSite.left) {
    metrics = axisSite.left
  } else if (settings.metrics) {
    metrics = settings.metrics
  } else {
    metrics.splice(columns.indexOf(dimension[0]), 1)
  }

  dimAxisType = settings.xAxisType || 'category'
  meaAxisType = settings.yAxisType || ['normal', 'normal']
  dimAxisName = settings.xAxisName || ''
  meaAxisName = settings.yAxisName || []
  dims = getDims(innerRows, dimension)
  legend = legendVisible && getLegend({ metrics, labelMap, legendName })

  let xAxis = getBarDimAxis({ innerRows, dimAxisName, dimension, axisVisible, dimAxisType, dims })
  let yAxis = getBarMeaAxis({ meaAxisName, meaAxisType, axisVisible, digit, scale, min, max })
  let args = { innerRows, metrics, stack, axisSite, isHistogram, labelMap, itemStyle, label }

  Object.assign(args, { showLine, dimAxisType, dimension, barGap, opacity, dims })

  let tooltip = tooltipVisible && getBarTooltip({ axisSite, isHistogram, meaAxisType, digit, labelMap })
  let options = { legend, yAxis, series: getBarSeries(args), xAxis, tooltip }

  return options
}
