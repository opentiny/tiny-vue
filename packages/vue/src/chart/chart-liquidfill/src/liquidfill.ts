import { getFormatted, isObject, itemLabel, itemContent } from '@opentiny/vue-chart-core'

const isArr = Array.isArray

const getTooltip = (data) => {
  const { tooltipFormatter, dataType, digit } = data
  function formatter(options, ...args) {
    const { seriesName, value } = options

    if (!tooltipFormatter) {
      return [`${itemLabel(seriesName)}`, itemContent(getFormatted(value, dataType, digit))].join('')
    }

    return tooltipFormatter(options, ...args)
  }

  return formatter
}

const getSeries = (args) => {
  const { dimension, metrics, rows, seriesMap, wave } = args
  let itemWave = wave
  const len = isArr(seriesMap) ? seriesMap.length : 0

  return rows.slice().map((item, index) => {
    let { data = [], result = { type: 'liquidFill' }, name = item[dimension] } = {}
    let { val = Number(item[metrics]), itemMap = {} } = {}

    if (isArr(seriesMap)) {
      itemMap = seriesMap[index] ? seriesMap[index] : seriesMap[len - 1]
    } else if (isObject(seriesMap[name])) {
      itemMap = seriesMap[name]
    }

    if (isArr(wave) && isArr(wave[0])) {
      itemWave = !isArr(wave[index]) ? wave[wave.length - 1] : wave[index]
    }

    data.push({ value: val })

    if (itemWave.length && itemWave) {
      data = data.concat(itemWave.map((val) => ({ value: val })))
    }

    result.itemStyle = { shadowBlur: 0 }
    result.label = { color: '#6D8FF0' }
    result.backgroundStyle = { color: '#F4F3F9' }
    result.outline = { itemStyle: { borderColor: '#6D8FF0', shadowBlur: 0 } }
    !itemMap.color && (result.itemStyle = Object.assign(result.itemStyle, { color: '#6D8FF0' }))

    result = Object.assign(result, { data, name }, itemMap)

    return result
  })
}

export const getIChartOption = (columns, rows, settings, extra) => {
  const { dimension = columns[0], metrics = columns[1] } = settings
  const { seriesMap = {}, dataType = 'percent', digit = 2, wave = [] } = settings
  const { tooltipVisible, tooltipFormatter } = extra
  const tooltip = tooltipVisible && getTooltip({ tooltipFormatter, dataType, digit })
  const series = getSeries({ rows, columns, dimension, metrics, seriesMap, wave })
  // Ichart 配置项
  const ichartOption = {
    tipHtml: tooltip,
    legend: { show: false },
    series
  }
  return ichartOption
}
