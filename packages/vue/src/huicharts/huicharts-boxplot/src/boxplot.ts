import { getFormatted, itemPoint, itemLabel, itemContent, htmlHandler } from '@opentiny/vue-huicharts-core'

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
    getFormatted(val, yAxisType[i], digit)

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

const getLegend = (args) => {
  const { metrics, labelMap, legendName } = args

  return {
    show: true
  }
}

const getTooltip = () => ({
  trigger: 'item',
  formatter(item) {
    const tpl = []
    const { name, value, color, dataType } = item

    color && tpl.push(itemPoint(color))
    tpl.push(itemLabel(`${name}`, !value))
    if (dataType === 'node') {
      value && tpl.push(`${itemContent(value)}<br />`)
    }

    return tpl.join('')
  }
})

const getGraphSeries = () => [
  { type: 'graph', label: { textBorderWidth: 1, color: '#fff', textBorderColor: 'inherit' } }
]

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

  return { xAxis, yAxis, data: extra.data }
}
