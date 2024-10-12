import { getFormatted, itemLabel, isNull, isObject } from '@opentiny/vue-huicharts-core'

const getTooltip = (args) => {
  const { tooltipFormatter, dataType, digit } = args
  const formatter = (options) => {
    if (tooltipFormatter) {
      return tooltipFormatter(...arguments)
    }

    const { seriesName, data } = options
    const { value, name } = data

    return `${itemLabel(seriesName)} ${getFormatted(value, dataType[seriesName], digit)} ${name}`
  }

  return formatter
}

// 设置指针形状
const getPoint = () => ({
  show: false,
  width: 10,
  length: 10,
  icon: 'path://M511.999488 819.413462 72.8374 204.586538 951.1626 204.586538Z',
  offsetCenter: [0, '-108%'],
  itemStyle: { color: 'auto' }
})

// 组装series
function getSeries(args) {
  const { rows, dimension, metrics, seriesMap, dataName, dataType, digit, labelMap } = args

  const series = rows.map((row) => {
    const label = row[dimension]
    const seriesItem = seriesMap[label]

    const formatter2 = (value) => getFormatted(value, dataType[label], digit)

    const result = {
      type: 'gauge',
      name: !isNull(labelMap[label]) ? labelMap[label] : label,
      data: [{ name: dataName[label] || '', value: row[metrics] }],
      detail: {
        fontSize: 60,
        color: '#191919',
        offsetCenter: [0, 0],
        valueAnimation: true,
        formatter: !dataType
          ? '{value}'
          : (value) => {
            const res = getFormatted(value, dataType[label], digit)
            return dataType[label] === 'percent' ? res.split('%')[0] + '{percent|%}' : res
          },
        rich: { percent: { fontSize: 12, color: '#4e4e4e', padding: [0, 0, -20, 0] } }
      },
      axisLabel: { formatter: formatter2 },
      itemStyle: { color: '#6D8FF0' },
      pointer: getPoint(),
      axisLine: { roundCap: true },
      progress: { show: true, roundCap: true, width: 8, color: 'red' },
      axisTick: { show: false },
      splitLine: { length: 8, distance: 0, lineStyle: { width: 1, color: 'rgba(25,25,25,0.10)' } },
      title: { show: true, offsetCenter: [0, '25%'], color: '#191919', fontSize: 15 }
    }

    if (seriesItem) {
      Object.keys(seriesItem).forEach((key) =>
        isObject(result[key]) ? Object.assign(result[key], seriesItem[key]) : (result[key] = seriesItem[key])
      )
    }

    return result
  })
  return series
}

export const getIChartOption = (columns, rows, settings, extra) => {
  const { dataName = {}, dataType = {}, digit = 2, labelMap = {} } = settings
  const { dimension = columns[0], metrics = columns[1], seriesMap = {} } = settings
  const { tooltipFormatter, tooltipVisible } = extra
  const tooltip = tooltipVisible && getTooltip({ tooltipFormatter, dataType, digit })
  const seriesParams = { rows, dimension, metrics, seriesMap, dataName, dataType, digit, labelMap }
  const series = getSeries(seriesParams)
  const seriesName = series[0].name
  // Ichart 配置项
  const ichartOption = {
    tipHtml: tooltip,
    series,
    seriesName
  }
  return ichartOption
}
