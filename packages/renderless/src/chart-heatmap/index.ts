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

import { getFormated, getBmap, getAmap, getMapJSON } from '../chart-core/deps/utils'
import { HEAT_MAP_COLOR, itemPoint, itemLabel, itemContent } from '../chart-core/deps/constants'

const getAxisList = (rows, label) => {
  const result = []

  rows.forEach((row) => !result.includes(row[label]) && result.push(row[label]))

  return result
}

const getData = (args) => {
  const { extraMetrics, innerXAxisList, innerYAxisList, metrics, rows, type, xDim, yDim } = args
  let result = null

  if (type !== 'cartesian') {
    result = rows.map((row) => ({ value: [row[xDim], row[yDim], metrics ? row[metrics] : 1] }))
  } else {
    result = rows.map((row) => {
      let { xIndex, yIndex, value, extra } = {}

      yIndex = innerYAxisList.indexOf(row[yDim])
      xIndex = innerXAxisList.indexOf(row[xDim])
      extra = extraMetrics.map((m) => row[m] || '-')
      value = metrics ? row[metrics] : 1

      return { value: [xIndex, yIndex, value].concat(extra), label: { show: true, color: '#191919' } }
    })
  }

  return result
}

let getAxis = (list, name, type) => ({
  data: list,
  name,
  nameLocation: 'end',
  type: 'category',
  splitArea: { show: false },
  splitLine: { show: true, lineStyle: { color: '#6d8ff0' } },
  axisLabel: { show: true, color: '#4E4E4E' },
  offset: type === 'y' ? 25 : 5,
  zlevel: 1
})

const getVisualMap = (args) => {
  const { innerMin: min, innerMax: max, type, heatColor, series } = args
  let { extra } = {}

  if (type === 'map') {
    extra = {}
    !series[0].data.length && (extra.show = false)
  } else if (type === 'bmap' || type === 'amap') {
    extra = { show: false }
  } else {
    extra = { dimension: 2 }
  }

  const defaultColor = type === 'map' || type === 'bmap' || type === 'amap' ? HEAT_MAP_COLOR : ['#fff', '#6D8FF0']

  return Object.assign(extra, {
    min,
    max,
    calculable: true,
    left: 'right',
    bottom: 'center',
    orient: 'vertical',
    align: 'left',
    borderColor: '#6D8FF0',
    inverse: true,
    inRange: { color: heatColor || defaultColor }
  })
}

const getSeries = (args) => [{ type: 'heatmap', data: args.chartData }]

const getTooltip = (args) => {
  const { dataType, innerXAxisList, innerYAxisList, digit, extraMetrics, metrics } = args

  function formatter({ color, data }) {
    let { value: dataVal } = data
    let [xDim, yDim, value, ...extraData] = dataVal
    const tplt = [itemContent(`${innerXAxisList[xDim]} ~ ${innerYAxisList[yDim]}<br>`)]

    extraMetrics.forEach((m, index) => tplt.push(`${m}: ${extraData[index]}<br>`))

    tplt.push(`${itemPoint(color)}${itemLabel(metrics)}${itemContent(getFormated(value, dataType, digit))}<br>`)

    return tplt.join('')
  }

  return { trigger: 'item', formatter }
}

const fixParam = ({ type, rows, dimension, metrics, extraMetrics, chartData, innerXAxisList, innerYAxisList }) => {
  let chartDataParams

  if (type !== 'cartesian') {
    chartDataParams = { rows, xDim: dimension[0], yDim: dimension[1] }

    Object.assign(chartDataParams, { metrics, type, extraMetrics })

    chartData = getData(chartDataParams)
  } else {
    let flag = !innerXAxisList || !innerXAxisList.length

    flag && (innerXAxisList = getAxisList(rows, dimension[0]))

    flag = !innerYAxisList || !innerYAxisList.length

    flag && (innerYAxisList = getAxisList(rows, dimension[1]))

    chartDataParams = { xDim: dimension[0], yDim: dimension[1], rows }

    Object.assign(chartDataParams, { innerXAxisList, innerYAxisList, metrics, type, extraMetrics })

    chartData = getData(chartDataParams)
  }

  return { chartData, innerXAxisList, innerYAxisList }
}

const getResult = (args) => {
  let { type, options, pointSize, blurSize, res, key, v, url, bmap, mapOrigin, geo, beforeRegisterMap } = args
  let { echarts, specialAreas, position, positionJsonLink, beforeRegisterMapOnce } = args
  let { mapURLProfix, amap, tooltip, xAxis, yAxis } = args

  if (type === 'bmap') {
    Object.assign(options.series[0], { coordinateSystem: 'bmap', pointSize, blurSize })

    res = getBmap({ key, version: v, url }).then(() => ({ bmap, ...options }))
  } else if (type === 'map') {
    options.series[0].coordinateSystem = 'geo'
    // 根据echart v5文档，注册地图的api修改为：echarts.registerMap('china',{geoJSON: someJson})
    let jsonStr = JSON.stringify(mapOrigin)

    if (jsonStr) {
      const geoAttr = { map: jsonStr, ...geo }

      beforeRegisterMap && (jsonStr = beforeRegisterMap(mapOrigin))
      echarts.registerMap(jsonStr, { geoJSON: mapOrigin }, specialAreas)
      res = new Promise((resolve) => resolve({ geo: geoAttr, ...options }))
    }
    // 如果用户没有提供数据，根据用户提供的mapURLProfix/position.json的位置，get请求地图文件 .
    else {
      let params = { position, positionJsonLink, beforeRegisterMapOnce, mapURLProfix }

      res = getMapJSON(params).then((json) => {
        const geoAttr = { map: position, ...geo }

        beforeRegisterMap && (json = beforeRegisterMap(json))
        echarts.registerMap(position, { geoJSON: json }, specialAreas)

        return { geo: geoAttr, ...options }
      })
    }
  } else if (type === 'amap') {
    Object.assign(options.series[0], { coordinateSystem: 'amap', pointSize, blurSize })

    res = getAmap(key, v).then(() => ({ amap, ...options }))
  } else {
    res = { tooltip, xAxis, yAxis, ...options }
  }

  return res
}

export const heatmap = (columns, rows, settings, extra) => {
  const { type = 'cartesian' } = settings // cartesian, map, bmap,
  const { dimension = [columns[0], columns[1]] } = settings
  const { dataType = 'normal', min, max, digit, bmap, amap, geo, key, v = '2.0', url } = settings
  const { position, mapOrigin, positionJsonLink, beforeRegisterMap, pointSize = 10, blurSize = 5 } = settings
  const { heatColor, yAxisName, xAxisName, beforeRegisterMapOnce, specialAreas = {} } = settings
  const { metrics = columns[2], mapURLProfix = 'https://unpkg.com/echarts@3.6.2/map/json/' } = settings
  const { tooltipVisible, echartsLib: echarts } = extra

  let { xAxisList: innerXAxisList, yAxisList: innerYAxisList } = settings
  // add extraMetrics prop for data which only display in tooltip
  let { chartData = [], extraMetrics = [], mainColumn = dimension.concat([metrics]) } = {}

  columns.forEach((column) => !~mainColumn.indexOf(column) && extraMetrics.push(column))

  let ret = fixParam({ type, rows, dimension, metrics, extraMetrics, chartData, innerXAxisList, innerYAxisList })

  chartData = ret.chartData
  innerXAxisList = ret.innerXAxisList
  innerYAxisList = ret.innerYAxisList

  let metricsList = metrics ? rows.map((row) => row[metrics]) : [0, 5]

  !metricsList.length && (metricsList = [0])

  const innerMin = min || Math.min.apply(null, metricsList)
  const innerMax = max || Math.max.apply(null, metricsList)
  const xAxis = getAxis(innerXAxisList, xAxisName, 'x')
  const yAxis = getAxis(innerYAxisList, yAxisName, 'y')
  const series = getSeries({ chartData })
  const visualMap = getVisualMap({ innerMin, innerMax, type, heatColor, series })
  const tooltipParams = { dataType, innerXAxisList, innerYAxisList, digit, extraMetrics, metrics }
  const tooltip = tooltipVisible && getTooltip(tooltipParams)
  const options = { visualMap, series, grid: { left: 25, right: 80, width: 'auto', height: 'auto' } }

  let res
  let args = { type, options, pointSize, blurSize, res, key, v, url, bmap, mapOrigin, geo, beforeRegisterMap }

  Object.assign(args, { echarts, specialAreas, position, positionJsonLink, beforeRegisterMapOnce })
  Object.assign(args, { mapURLProfix, amap, tooltip, xAxis, yAxis })

  res = getResult(args)

  return res
}
