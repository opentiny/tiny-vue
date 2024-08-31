import { getRows, getYAxis, getTooltip, isNull } from '@opentiny/vue-huicharts-core'

const getStackMap = (stack) => {
  const result = {}

  Object.keys(stack).forEach((item) => {
    stack[item].forEach((name) => {
      result[name] = item
    })
  })

  return result
}

const getLineXAxis = (args) => {
  const { axisVisible, axisLabel, xAxisType } = args

  return {
    show: axisVisible,
    axisLabel,
    type: xAxisType
  }
}

const getLegend = (args) => {
  const { legendName } = args
  let legendBase = {
    show: true,
    orient: 'horizontal',
    position: { left: 'center', bottom: 15 }
  }
  let formatter = function (name) {
    return !legendName[name] ? name : legendName[name]
  }
  return {
    show: true,
    formatter
  }
}
export const line = (columns, rows, settings, extra) => {
  rows = Array.isArray(rows) ? rows : []
  columns = Array.isArray(columns) ? columns : []
  const {
    axisSite = {},
    yAxisType = ['normal', 'normal'],
    xAxisType = 'category',
    yAxisName = [],
    axisLabel = {}
  } = settings

  const { dimension = [columns[0]], xAxisName = [], axisVisible = true, area = false, stack } = settings

  const { min = [null, null], max = [null, null], nullAddZero = false, digit = 2, scale = false } = settings

  const { legendName = {}, labelMap = {}, label, itemStyle, lineStyle, areaStyle, smooth } = settings

  const { tooltipVisible, legendVisible, extend } = extra

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

  const legend = legendVisible ? getLegend({ legendName, metrics, labelMap }) : { show: false }

  const tooltip = tooltipVisible ? getTooltip({ axisSite, yAxisType, digit }) : { show: false }

  const yAxis = getYAxis({ max, min, yAxisType, yAxisName, metrics, axisSite, digit, scale })

  const xAxis = getLineXAxis({ axisVisible, axisLabel, xAxisType })

  const seriesParam = { areaStyle, area, axisSite, dimension, itemStyle, lineStyle }

  Object.assign(seriesParam, { label, labelMap, metrics, nullAddZero, rows, xAxisType, stack, smooth, extend })
  const series = getLineSeries(seriesParam)

  const data = getRows({ columns, metrics, labelMap, rows, dimension })
  let options = {
    data,
    xAxis,
    yAxis,
    metrics,
    series,
    legend,
    tooltip,
    stack,
    tipHtml: tooltip.formatter,
    itemStyle,
    axisSite,
    area
  }
  return { ...options }
}

const getLineSeries = (args) => {
  const { areaStyle, axisSite, area, dimension, itemStyle, label } = args
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

  metrics.forEach((item, i) => {
    let name = !isNull(labelMap[item]) ? labelMap[item] : item
    const isSmooth = !(smooth === false)
    let seriesItem = { smooth: isSmooth, name, type: 'line', data: dataTempObj[item] }
    const emphasis = { itemStyle: { borderColor: '#fff', borderWidth: 2 } }
    let defaultSeriesItem = { symbol: 'circle', symbolSize: 8, showSymbol: false, emphasis }
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
