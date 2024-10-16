import { isObject, itemLabel, itemContent } from '@opentiny/vue-huicharts-core'

const getTreeLegend = (args) => {
  const { dimension, rows } = args
  const result = rows.map((row) => row[dimension])

  return { data: result }
}

const getTreeTooltip = (opts) => {
  const { tooltipFormatter } = opts

  return {
    trigger: 'item',
    triggerOn: 'mousemove',
    formatter(item, ...args) {
      if (tooltipFormatter) {
        return tooltipFormatter(item, ...args)
      }

      const template = []
      const { treeAncestors, value } = item
      const names = []
      treeAncestors.forEach((ancestor, idx) => {
        idx && names.push(ancestor.name)
      })
      template.push(`${itemLabel(names.join('.'))}`)
      template.push(`${itemContent(value)}`)

      return template.join('')
    }
  }
}

const getTreeSeries = (args) => {
  const { dimension, metrics, rows, seriesMap } = args
  const series = []

  rows.forEach((row) => {
    const seriesItem = seriesMap[row[dimension]]
    const result = {
      type: 'tree',
      name: row[dimension],
      data: row[metrics]
    }

    if (seriesItem) {
      Object.keys(seriesItem).forEach((key) => {
        if (!isObject(result[key])) {
          result[key] = seriesItem[key]
        } else {
          Object.assign(result[key], seriesItem[key])
        }
      })
    }

    series.push(result)
  })

  return series
}

export const tree = (columns, rows, settings, extra) => {
  const { dimension = columns[0], metrics = columns[1], seriesMap = {} } = settings
  const { legendVisible, tooltipFormatter, tooltipVisible } = extra
  const seriesParam = { dimension, metrics, rows, seriesMap }
  const series = getTreeSeries(seriesParam)
  const legendParam = { dimension, rows }
  const legend = legendVisible && rows.length > 1 && getTreeLegend(legendParam)
  const tooltip = tooltipVisible && getTreeTooltip({ tooltipFormatter })

  const data = rows.map((item) => ({
    name: item.name,
    data: item.value
  }))
  return { data, series, legend, tooltip, tipHtml: tooltip.formatter, type: 'LineTreeHuiCharts', initialTreeDepth: 3 }
}
