import {
  getFormatted,
  cloneDeep,
  getStackMap,
  get,
  set,
  isNull,
  getRows,
  getTooltip
} from '@opentiny/vue-chart-core-beta'

const VALUE_AXIS_OPACITY = 0.5

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
    show: axisVisible
  }))
}

const getBarMeaAxis = (args) => {
  const { axisVisible, digit, max, meaAxisName = [], meaAxisType, min, scale } = args
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

const factoryFmt =
  ({ meaAxisType, i, digit }) =>
  (val) =>
    getFormatted(val, meaAxisType[i], digit)

const getLegend = (args) => {
  const { legendName } = args
  let legendBase = {
    show: true
  }
  let formatter = function (name) {
    return !legendName[name] ? name : legendName[name]
  }
  return {
    ...legendBase,
    formatter
  }
}

const getDims = (rows, dimension) => rows.map((row) => row[dimension[0]])

const getValueAxisData = (dims) => {
  const max = Math.max(...dims)
  const min = Math.min(...dims)
  let { result = [], i = min } = {}

  for (; i <= max; i++) {
    result.push(i)
  }

  return result
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
  secondAxis = (isHistogram ? axisSite?.right : axisSite?.top) || []
  secondDimAxisIndex = isHistogram ? 'yAxisIndex' : 'xAxisIndex'
  stackMap = stack && getStackMap(stack)
  metrics.forEach((item) => (seriesTemp[item] = []))
  innerRows.forEach((row) => metrics.forEach((item) => seriesTemp[item].push(row[item])))

  series = Object.keys(seriesTemp).map((item) => {
    let name = !isNull(labelMap[item]) ? labelMap[item] : item
    let type = ~showLine.indexOf(item) ? 'line' : 'bar'
    let axisIndex = ~secondAxis.indexOf(item) ? '1' : '0'

    let seriesItem = { name, type, [secondDimAxisIndex]: axisIndex }

    const defaultItemStyle = {}

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
    }

    itemStyle && (seriesItem.itemStyle = itemStyle)

    let itemOpacity = opacity || get(seriesItem, 'itemStyle.opacity')

    dimAxisType === 'value' && Object.assign(seriesItem, { barGap, barCategoryGap: '1%' })
    dimAxisType === 'value' && isNull(itemOpacity) && (itemOpacity = VALUE_AXIS_OPACITY)

    !isNull(itemOpacity) && set(seriesItem, 'itemStyle.opacity', itemOpacity)

    return seriesItem
  })

  return series.length ? series : false
}

const getDataValue = (data, dimension, metrics, innerRows, dims) => {
  let dimensionData = dimension[0]
  let dataTemp = {}
  data.forEach((item, index) => {
    dataTemp[item[dimensionData]] = item
  })
  let dataItemTemp = {}
  metrics.forEach((item, index) => {
    dataItemTemp[item] = null
  })

  const max = Math.max(...dims)
  const min = Math.min(...dims)
  let { result = [], i = min, index } = {}

  for (; i <= max; i++) {
    index = dims.indexOf(i)
    result.push(~index ? dataTemp[i] : { [dimensionData]: i, ...dataItemTemp })
  }

  return result
}

export const histogram = (columns, rows, settings, extra, isHistogram = true) => {
  const innerRows = cloneDeep(rows)
  const { axisSite = {}, dimension = [columns[0]], axisLabel = {}, axisVisible = true } = settings

  const {
    digit = 2,
    dataOrder = false,
    scale = [false, false],
    min = [null, null],
    max = [null, null],
    stack = {}
  } = settings

  const { tooltipVisible, legendVisible } = extra

  const { labelMap = {}, legendName = {}, label, itemStyle = {}, showLine, barGap = '-100%', opacity } = settings

  let { metrics = columns.slice(), meaAxisType, dimAxisType, meaAxisName, dimAxisName = true, dims } = {}

  if (dataOrder) {
    let { label, order } = dataOrder
    if (label && order) {
      innerRows.sort((a, b) => (order === 'desc' ? a[label] - b[label] : b[label] - a[label]))
    }
  }
  let xAxis = {}
  let yAxis = {}
  dims = getDims(innerRows, dimension)
  if (isHistogram) {
    if (axisSite.right && axisSite.left) {
      metrics = axisSite.left.concat(axisSite.right)
    } else if (settings.metrics) {
      metrics = settings.metrics
    } else if (axisSite.left && !axisSite.right) {
      metrics = axisSite.left
    } else {
      metrics.splice(columns.indexOf(dimension[0]), 1)
    }
    dimAxisType = settings.xAxisType || 'category'
    meaAxisType = settings.yAxisType || ['normal', 'normal']
    dimAxisName = settings.xAxisName || ''
    meaAxisName = settings.yAxisName || []
    xAxis = getBarDimAxis({ innerRows, dimAxisName, dimension, axisVisible, dimAxisType, dims })

    yAxis = getBarMeaAxis({ meaAxisName, meaAxisType, axisVisible, digit, scale, min, max })
  } else {
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
    xAxis = getBarDimAxis({ innerRows, dimAxisName, dimension, axisVisible, dimAxisType, dims })
    yAxis = getBarMeaAxis({ axisVisible, meaAxisType, meaAxisName, scale, digit, max, min })
  }

  if (opacity) {
    const itemStyleBase = {
      opacity
    }
    Object.assign(itemStyle, itemStyleBase)
  }
  let data = getRows({ columns, metrics, labelMap, rows: innerRows, dimension })
  if (dimAxisType === 'value') {
    data = getDataValue(data, dimension, metrics, innerRows, dims)
  }

  const lineDataName = showLine ? [...showLine] : []
  const legend = legendVisible ? getLegend({ legendName, metrics, labelMap }) : { show: false }
  const tooltip = tooltipVisible ? getTooltip({ axisSite, yAxisType: meaAxisType }) : { show: false }
  const tipHtml = tooltip.formatter
  let args = { innerRows, metrics, stack, axisSite, isHistogram, labelMap, itemStyle, label }
  Object.assign(args, { showLine, dimAxisType, dimension, barGap, opacity, dims })
  let options = {
    data,
    itemStyle,
    tipHtml,
    lineDataName,
    legend,
    tooltip,
    yAxis,
    xAxis,
    label,
    stack,
    series: getBarSeries(args)
  }
  if (typeof options.stack === 'object' && options.stack !== null && Object.keys(options.stack).length > 0) {
    options.type = 'stack'
  }
  return options
}
