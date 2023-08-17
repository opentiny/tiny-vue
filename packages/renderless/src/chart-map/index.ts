/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import { getFormated, getMapJSON, getLegend as getLegendMap } from '../chart-core/deps/utils'
import { itemPoint, itemLabel, itemContent } from '../chart-core/deps/constants'
import { isNull } from '../common/type'

const getTooltip = ({ dataType, digit, dataStore, metrics, color, labelMap }) => {
  function formatter(item) {
    let tplt = []

    if (!item.name) {
      return ''
    }

    tplt.push(`${itemLabel(item.name)}<br>`)

    metrics.forEach((label, index) => {
      let title = isNull(labelMap[label]) ? label : labelMap[label]

      tplt.push(`${itemPoint(color[index])}${itemLabel(title)}`)
      if (dataStore[item.name]) {
        tplt.push(itemContent(getFormated(dataStore[item.name][label], dataType[label], digit)))
      } else {
        tplt.push(itemContent('-'))
      }
      tplt.push('<br>')
    })

    return tplt.join('')
  }

  return { formatter }
}

const setGeoLabel = (value, target, label) => {
  if (typeof value === 'object') {
    target[label] = value
  } else if (value) {
    target[label] = { show: true }
  }
}

const getSeries = (args) => {
  let { position, selectData, dimension, metrics, rows, label, selectedMode, roam, center, aspectScale, zoom } = args
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

  const { tooltipVisible, legendVisible, color, _once, echartsLib: echarts } = extra
  const dataStore = {}

  rows.forEach((row) => (dataStore[row[dimension]] = row))

  const tooltip = tooltipVisible && getTooltip({ dataType, digit, dataStore, metrics, color, labelMap })
  const legend = legendVisible && getLegendMap({ metrics, legendName, labelMap })
  const seriesParams = { position, selectData, label, itemStyle, dimension, metrics, rows, selectedMode, roam }

  Object.assign(seriesParams, { center, aspectScale, boundingCoords, zoom, labelMap, scaleLimit, mapGrid, emphasis })

  const series = getSeries(seriesParams)
  const registerSign = `MAP_REGISTER_${position}`
  const registerSignOnce = `ONCE_MAP_REGISTER_${position}`
  const registerOptions = { _once, beforeRegisterMap, beforeRegisterMapOnce, position }

  Object.assign(registerOptions, { specialAreas, registerSign, registerSignOnce })

  if (mapOrigin) {
    registerMap(registerOptions, mapOrigin, echarts)

    return { series, tooltip, legend }
  } else {
    const param = { position, positionJsonLink, beforeRegisterMapOnce, mapURLProfix }

    return getMapJSON(param).then((json) => {
      registerMap(registerOptions, json, echarts)
      return { series, tooltip, legend }
    })
  }
}
