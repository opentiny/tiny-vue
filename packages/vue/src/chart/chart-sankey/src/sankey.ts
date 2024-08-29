import { getFormatted, itemPoint, itemLabel, itemContent, isNull } from '@opentiny/vue-huicharts-core'

const getTooltip = (args) => {
  const { digit, itemDataType, linksDataType } = args
  const formatter = function (item) {
    const { name, data, value, color } = item

    const tplt = []

    color && tplt.push(itemPoint(color))
    tplt.push(itemLabel(`${name}`))

    if (!data || !data.source) {
      tplt.push(`${itemContent(getFormatted(value, itemDataType, digit))}<br />`)
    } else {
      tplt.push(`${itemContent(getFormatted(value, linksDataType, digit))}<br />`)
    }

    return tplt.join('')
  }

  return { trigger: 'item', formatter }
}

const getSeries = (args) => {
  const { dimension, itemStyle, label, lineStyle, links, metrics, rows, useDataValue, valueFull } = args
  const dataMap = {}
  const seriesData = rows.map((row) => {
    dataMap[row[dimension]] = row[metrics]
    return { name: row[dimension], value: row[metrics] }
  })

  let { innerLinks = links, mapHandler = null } = {}

  if (useDataValue) {
    mapHandler = (link) => ({ ...link, value: dataMap[link.target] })
  } else if (!valueFull) {
    mapHandler = (link) => (isNull(link.value) ? { ...link, value: dataMap[link.target] } : link)
  }

  if (mapHandler) {
    innerLinks = links.map(mapHandler)
  }

  const result = { type: 'sankey', data: seriesData, links: innerLinks }

  let total = 0

  seriesData.forEach((item) => {
    const isExist = innerLinks.some((data) => data.target === item.name)
    if (!isExist) {
      total += item.value
    }
  })

  return [result]
}

export const sankey = (columns, rows, settings) => {
  const { dataType = ['normal', 'normal'], dimension = columns[0], digit = 2, label } = settings
  const { links, lineStyle, itemStyle, metrics = columns[1], useDataValue = false, valueFull = false } = settings

  if (!links) {
    return
  }

  const { itemDataType = dataType[0], linksDataType = dataType[1] } = {}
  const tooltip = getTooltip({ itemDataType, linksDataType, digit })

  const seriesParams = { rows, dimension, metrics, links, valueFull, useDataValue, label, itemStyle, lineStyle }
  const series = getSeries(seriesParams)

  const data = {
    nodes: series[0].data,
    links: series[0].links
  }

  series[0].tooltip = {}
  series[0].tooltip.valueFormatter = tooltip.valueFormatter

  return { data, tooltip, series, tipHtml: tooltip.formatter, label, itemStyle, lineStyle }
}
