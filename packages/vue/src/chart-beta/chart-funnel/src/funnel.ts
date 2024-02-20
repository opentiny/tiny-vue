import { getFormatted, itemPoint, itemLabel, itemContent } from '@opentiny/vue-chart-core-beta'

const getMetrics = (args) => {
  const { dimension, columns, settings } = args
  let metrics
  if (settings.metrics) {
    metrics = settings.metrics
  } else {
    const temp = columns.slice()
    temp.splice(columns.indexOf(dimension), 1)
    metrics = temp[0]
  }

  return metrics
}

const getFunnelLegend = (args) => {
  const { legendVisible, data, legendName } = args
  if (!legendVisible) {
    return {
      show: false
    }
  }

  const show = true
  function formatter(name) {
    if (legendName[name] === null || legendName[name] === undefined || legendName[name] === 'undefined') {
      return name
    }

    return legendName[name]
  }

  return { show, data, formatter }
}

const getFunnelTooltip = (dataType, digit) => {
  function formatter(item) {
    const tpl = []
    tpl.push(itemPoint(item.color))
    tpl.push(`${itemLabel(item.name)}${itemContent(getFormatted(item.data.realValue, dataType, digit))}`)
    return tpl.join('')
  }

  return formatter
}

const getFunnelSeries = (args) => {
  const selfSeries = []
  const { dimension, metrics, rows, sequence, label, labelLine, itemStyle, useDefaultOrder, ascending } = args
  let { series = { type: 'funnel' }, falseFunnel = false } = {}
  series.minSize = 8
  const innerRows = rows.sort((a, b) => sequence.indexOf(a[dimension]) - sequence.indexOf(b[dimension]))
  innerRows.some((row, index) => index && row[metrics] > innerRows[index - 1][metrics] && (falseFunnel = true))
  const step = 100 / innerRows.length
  let total = 0
  rows.forEach((row) => {
    total += row[metrics]
  })

  if (falseFunnel && !useDefaultOrder) {
    const handler = (row, index) => ({ name: row[dimension], value: (index + 1) * step, realValue: row[metrics] })
    series.data = innerRows.slice().reverse().map(handler)
    series.label = {
      position: 'inside',
      color: '#fff',
      formatter(item) {
        const { value } = item
        return `${Number(value / total).toFixed(2) * 100}%`
      }
    }
  } else {
    // 自动按数值排序
    innerRows.sort((a, b) => b[metrics] - a[metrics])
    series.data = innerRows.map((row, index) => ({
      name: row[dimension],
      value: (innerRows.length - index) * step,
      realValue: row[metrics]
    }))
    series.label = {
      position: 'inside',
      color: '#fff',
      formatter(item) {
        const { data } = item
        return `${Number(data.realValue / total).toFixed(2) * 100}%`
      }
    }
  }

  ascending && (series.sort = 'ascending')
  label && (series.label = label)
  labelLine && (series.labelLine = labelLine)
  itemStyle && (series.itemStyle = itemStyle)

  selfSeries.push(series)
  return selfSeries
}

// Ichart配置项
export const getIChartOption = (outerColumns, outerRows, settings, extra) => {
  const { columns = outerColumns.slice(), rows = outerRows.slice() } = {}
  const { dataType = 'normal', dimension = columns[0], sequence = rows.map((row) => row[dimension]) } = settings
  const { digit = 2, ascending, label, labelLine, legendName = {}, itemStyle, filterZero, useDefaultOrder } = settings
  const { tooltipVisible, legendVisible } = extra

  const metrics = getMetrics({ dimension, columns, settings })

  // 根据sequence对rows中的元素进行排序
  let innerRows = rows.sort((a, b) => sequence.indexOf(a[dimension]) - sequence.indexOf(b[dimension]))

  // 过滤innerRows中所有metrics值为零的行
  filterZero && (innerRows = innerRows.filter((row) => row[metrics]))

  // 悬浮提示框内容配置
  const tooltip = tooltipVisible && getFunnelTooltip(dataType, digit)

  // 图例配置
  const legend = getFunnelLegend({ legendVisible, data: innerRows.map((row) => row[dimension]), legendName })

  const seriesParam = {
    dimension,
    metrics,
    rows: innerRows,
    sequence,
    label,
    labelLine,
    itemStyle,
    useDefaultOrder,
    ascending
  }

  const series = getFunnelSeries(seriesParam)

  // Ichart 配置项
  const ichartOption = {
    legend,
    tipHtml: tooltip,
    series
  }
  return ichartOption
}
