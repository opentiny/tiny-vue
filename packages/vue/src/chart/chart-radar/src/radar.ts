import { getFormatted, itemPoint, itemLabel, itemContent, isNull } from '@opentiny/vue-chart-core'

const getRadarLegend = (rows, dimension, legendName, legendVisible) => {
  let legendData = rows.map((row) => row[dimension]).filter((i) => i)
  function formatter(value) {
    return isNull(legendName[value]) ? value : legendName[value]
  }

  return { show: legendVisible, data: legendData, formatter }
}

const getRadarTooltip = (dataType, radar, digit) => {
  const { typeTemp = [], nameTemp = [] } = {}

  radar.indicator.forEach((item, i) => {
    typeTemp[i] = dataType[item.name]
    nameTemp[i] = item.name
  })

  function formatter(item) {
    const tplt = []
    tplt.push(itemPoint(item.color))
    tplt.push(`${item.name}<br />`)
    item.data.value.forEach((val, i) => {
      tplt.push(`${itemLabel(nameTemp[i])}`)
      tplt.push(`${itemContent(getFormatted(val, typeTemp[i], digit))}<br />`)
    })
    return tplt.join('')
  }

  return { formatter }
}

const getRadarSetting = (rows, metrics, labelMap) => {
  const settingBase = {
    indicator: []
  }
  let indicatorTemp = {}

  rows.forEach((items) => {
    metrics.forEach((item) => {
      const key = isNull(labelMap[item]) ? item : labelMap[item]
      if (indicatorTemp[key]) {
        indicatorTemp[key].push(items[item])
      } else {
        indicatorTemp[key] = [items[item]]
      }
    })
  })

  settingBase.indicator = Object.keys(indicatorTemp).map((key) => ({
    name: key,
    max: Math.max.apply(null, indicatorTemp[key])
  }))

  settingBase.data = indicatorTemp
  settingBase.axisLabel = false
  return settingBase
}

const getRadarSeries = (args) => {
  const { areaStyle, dimension, itemStyle, label, labelMap, lineStyle, metrics, radar, rows } = args
  let radarIndexObj = {}

  radar.indicator.forEach((item, i) => (radarIndexObj[item.name] = i))

  const seriesData = rows.map((row) => {
    const serieData = {
      value: [],
      name: row[dimension]
    }

    Object.keys(row).forEach((key) => {
      if (~metrics.indexOf(key)) {
        let k = isNull(labelMap[key]) ? radarIndexObj[key] : radarIndexObj[labelMap[key]]
        serieData.value[k] = row[key]
      }
    })

    return serieData
  })

  const result = { data: seriesData, name: 'data', type: 'radar' }

  label && (result.label = label)
  itemStyle && (result.itemStyle = itemStyle)
  lineStyle && (result.lineStyle = lineStyle)
  areaStyle && (result.areaStyle = areaStyle)

  return [result]
}

export const radar = (columns, rows, settings, extra) => {
  const { dataType = {}, legendName = {}, labelMap = {}, dimension = columns[0] } = settings
  const { digit = 2, label, itemStyle, lineStyle, areaStyle } = settings
  const { tooltipVisible, legendVisible } = extra
  let metrics = columns.slice()

  if (!settings.metrics) {
    metrics.splice(columns.indexOf(dimension), 1)
  } else {
    metrics = settings.metrics
  }

  const legend = legendVisible ? getRadarLegend(rows, dimension, legendName, legendVisible) : { show: false }
  const radar = getRadarSetting(rows, metrics, labelMap)
  const tooltip = tooltipVisible ? getRadarTooltip(dataType, radar, digit) : { show: false }
  const seriesParams = { rows, dimension, metrics, radar }

  Object.assign(seriesParams, { label, itemStyle, lineStyle, labelMap, areaStyle })

  const series = getRadarSeries(seriesParams)
  let dataTemp = {}

  rows.forEach((items, index) => {
    const tempKey = items[dimension]
    dataTemp[tempKey] = {}
    metrics.forEach((item) => {
      const key = isNull(labelMap[item]) ? item : labelMap[item]
      dataTemp[tempKey][key] = items[item]
    })
  })
  return { legend, data: dataTemp, radar, tipHtml: tooltip.formatter, series }
}
