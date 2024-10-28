import { getFormatted, getMapJSON, itemPoint, itemLabel, itemContent, isNull } from '@opentiny/vue-huicharts-core'

const getLegendMap = (args, legendItemStyle) => {
  const { metrics, legendName, labelMap } = args

  if (!labelMap && !legendName) {
    return { data: metrics }
  }

  const data = labelMap ? metrics.map((item) => (isNull(labelMap[item]) ? item : labelMap[item])) : metrics

  return {
    ...legendItemStyle,
    data,
    formatter(name) {
      return isNull(legendName[name]) ? name : legendName[name]
    }
  }
}

const getTooltip = ({ dataType, digit, dataStore, metrics, color, labelMap }) => {
  function formatter(item) {
    const tplt = []

    if (!item.name) {
      return ''
    }

    tplt.push(`${itemLabel(item.name)}<br>`)

    metrics.forEach((label, index) => {
      const title = isNull(labelMap[label]) ? label : labelMap[label]

      tplt.push(`${itemPoint(color[index])}${itemLabel(title)}`)
      if (dataStore[item.name]) {
        tplt.push(itemContent(getFormatted(dataStore[item.name][label], dataType[label], digit)))
      } else {
        tplt.push(itemContent('-'))
      }

      tplt.push('<br>')
    })

    return tplt.join('')
  }

  return { trigger: 'item', formatter }
}

const setGeoLabel = (value, target, label) => {
  if (typeof value === 'object') {
    target[label] = value
  } else if (value) {
    target[label] = { show: true }
  }
}

const getSeries = (args) => {
  const { position, selectData, dimension, metrics, rows, label, selectedMode, roam, center, aspectScale, zoom } = args
  const { boundingCoords, labelMap, scaleLimit, mapGrid, itemStyle = { areaColor: 'rgba(25,25,25,0.05)' } } = args
  const { result = [], mapBase = { type: 'map', map: position } } = {}
  const { emphasis = { itemStyle: { areaColor: 'rgba(25,25,25,0.2)' }, label: { color: '#191919' } } } = {}

  metrics.forEach((itemName) => {
    const name = !isNull(labelMap[itemName]) ? labelMap[itemName] : itemName
    const data = []
    const itemResult = {
      name,
      data,
      selectedMode,
      roam,
      center,
      aspectScale,
      boundingCoords,
      zoom,
      scaleLimit,
      ...mapBase
    }

    if (mapGrid) {
      Object.keys(mapGrid).forEach((key) => (itemResult[key] = mapGrid[key]))
    }

    setGeoLabel(itemStyle, itemResult, 'itemStyle')
    setGeoLabel(label, itemResult, 'label')

    rows.forEach((row) => itemResult.data.push({ name: row[dimension], value: row[itemName], selected: selectData }))

    itemResult.emphasis = emphasis
    itemResult.label = { color: '#191919', ...itemResult.label }

    result.push(itemResult)
  })

  return result
}

const registerMap = (args, mapOrigin, echarts) => {
  const { _once, registerSign, beforeRegisterMap, beforeRegisterMapOnce } = args
  const { registerSignOnce, position, specialAreas } = args

  if (!_once[registerSign] && beforeRegisterMap) {
    mapOrigin = beforeRegisterMap(mapOrigin)
  }

  if (!_once[registerSign] && beforeRegisterMapOnce && !_once[registerSignOnce]) {
    _once[registerSignOnce] = true
    mapOrigin = beforeRegisterMapOnce(mapOrigin)
  }

  if (!_once[registerSign]) {
    _once[registerSign] = true
    echarts.registerMap(position, mapOrigin, specialAreas)
  }
}

export const map = (columns, rows, settings, extra) => {
  const { position = '', selectData = false, selectedMode, label = true, dataType = {}, digit = 2 } = settings
  const { dimension = columns[0], roam, center, aspectScale, boundingCoords, zoom } = settings
  const { scaleLimit, legendName = {}, labelMap = {}, mapGrid, itemStyle, positionJsonLink, emphasis } = settings
  const { beforeRegisterMap, beforeRegisterMapOnce, mapURLProfix = extra.baseUrl || '', specialAreas = {} } = settings
  const { mapOrigin } = settings

  let metrics = columns.slice(0)

  if (!settings.metrics) {
    metrics.splice(columns.indexOf(dimension), 1)
  } else {
    metrics = settings.metrics
  }

  const { tooltipVisible, legendVisible, color, _once, echarts } = extra
  const dataStore = {}

  rows.forEach((row) => (dataStore[row[dimension]] = row))

  const tooltip = tooltipVisible
    ? getTooltip({ dataType, digit, dataStore, metrics, color, labelMap })
    : { show: false }
  const legend = legendVisible ? { show: true, ...getLegendMap({ metrics, legendName, labelMap }) } : { show: false }
  const seriesParams = { position, selectData, label, itemStyle, dimension, metrics, rows, selectedMode, roam }

  Object.assign(seriesParams, { center, aspectScale, boundingCoords, zoom, labelMap, scaleLimit, mapGrid, emphasis })

  const series = getSeries(seriesParams)
  const registerSign = `MAP_REGISTER_${position}`
  const registerSignOnce = `ONCE_MAP_REGISTER_${position}`
  const registerOptions = { _once, beforeRegisterMap, beforeRegisterMapOnce, position }

  Object.assign(registerOptions, { specialAreas, registerSign, registerSignOnce })

  if (mapOrigin) {
    registerMap(registerOptions, mapOrigin, echarts)

    return { series, tooltip, legend, tipHtml: tooltip.formatter }
  }

  const param = { position, positionJsonLink, beforeRegisterMapOnce, mapURLProfix }

  return getMapJSON(param).then((json) => {
    registerMap(registerOptions, json, echarts)
    return { series, tooltip, legend, tipHtml: tooltip.formatter }
  })
}
