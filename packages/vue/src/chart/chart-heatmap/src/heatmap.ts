import {
  getFormatted,
  getMapJSON,
  itemPoint,
  itemLabel,
  itemContent,
  HEAT_MAP_COLOR
} from '@opentiny/vue-huicharts-core'
import * as echartsLib from 'echarts'

const getAxisList = (rows, label) => {
  const result = []

  rows.forEach((row) => !result.includes(row[label]) && result.push(row[label]))

  return result
}

const getData = (args) => {
  const { extraMetrics, innerXAxisList, innerYAxisList, metrics, rows, type, xDim, yDim } = args
  let result = null
  if (type !== 'cartesian') {
    result = rows.map((row) => [row[xDim], row[yDim], metrics ? row[metrics] : 1])
  } else {
    result = rows.map((row) => {
      let { xIndex, yIndex, value, extra } = {}
      yIndex = innerYAxisList.indexOf(row[yDim])
      xIndex = innerXAxisList.indexOf(row[xDim])
      extra = extraMetrics.map((m) => row[m] || '-')
      value = metrics ? row[metrics] : 1
      return {
        xDim: row[xDim],
        yDim: row[yDim],
        metrics: row[metrics]
      }
    })
  }

  return result
}

const getAxis = (list, name, type) => ({
  data: list,
  name,
  nameLocation: 'end',
  type: 'category',
  splitArea: { show: false },
  splitLine: { show: true, lineStyle: { color: '#6d8ff0' } },
  axisLabel: { show: true, color: '#4E4E4E' },
  position: type === 'y' ? 25 : 5,
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
    height: 140,
    position: {
      left: 'right',
      bottom: 'center'
    },
    orient: 'vertical',
    align: 'left',
    inverse: true,
    inRange: { color: heatColor || defaultColor }
  })
}

const getSeries = (args) => {
  const series = {
    type: 'heatmap',
    data: args.chartData
  }
  return [series]
}

const getTooltip = (args) => {
  const { dataType, innerXAxisList, innerYAxisList, digit, extraMetrics, metrics } = args
  function formatter({ data, color }) {
    const xDim = data[0]
    const yDim = data[1]
    const value = data[2]
    const tplt = [itemContent(`${innerXAxisList[xDim]} ~ ${innerYAxisList[yDim]}`) + '<br>']
    // ExtraMetrics.forEach((m, index) => tplt.push(`${m}: ${extraData[index]}<br>`))
    tplt.push(`${itemPoint(color)}${itemLabel(metrics)}${itemContent(getFormatted(value, dataType, digit))}<br>`)
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
  let { type, options, pointSize, blurSize, res, key, v, url, bmap, mapOrigin, geo, beforeRegisterMap, visualMap } =
    args

  const { echarts = echartsLib, specialAreas, position, positionJsonLink, beforeRegisterMapOnce } = args
  const { mapURLProfix, amap, tooltip, xAxis, yAxis } = args
  if (type === 'bmap' || type === 'amap') {
    Object.assign(options.series[0], { coordinateSystem: type, pointSize, blurSize })
    res = {
      ...args
    }
  } else if (type === 'map') {
    options.series[0].coordinateSystem = 'geo'
    // 根据echart v5文档，注册地图的api修改为：echarts.registerMap('china',{geoJSON: someJson})
    let jsonStr = JSON.stringify(mapOrigin)
    if (jsonStr) {
      const geoAttr = { map: jsonStr, ...geo }
      beforeRegisterMap && (jsonStr = beforeRegisterMap(mapOrigin))
      echarts.registerMap(jsonStr, { geoJSON: mapOrigin }, specialAreas)
      res = { geo: geoAttr, ...options }
    }
    // 如果用户没有提供数据，根据用户提供的mapURLProfix/position.json的位置，get请求地图文件 .
    else {
      const params = { position, positionJsonLink, beforeRegisterMapOnce, mapURLProfix }
      res = getMapJSON(params).then((json) => {
        const geoAttr = { map: position, ...geo }
        beforeRegisterMap && (json = beforeRegisterMap(json))
        echarts.registerMap(position, { geoJSON: json }, specialAreas)
        return { geo: geoAttr, ...options, handle: visualMap }
      })
    }
  } else {
    res = { tooltip, xAxis, yAxis, ...options, handle: visualMap }
  }

  return res
}

export const heatmap = (columns, rows, settings, extra) => {
  const { type = 'cartesian' } = settings // Cartesian, map, bmap,
  const { dimension = [columns[0], columns[1]] } = settings
  const { dataType = 'normal', min, max, digit, bmap, amap, geo, key, v = '2.0', url } = settings
  const { position, mapOrigin, positionJsonLink, beforeRegisterMap, pointSize = 10, blurSize = 5 } = settings
  const { heatColor, yAxisName, xAxisName, beforeRegisterMapOnce, specialAreas = {} } = settings
  const { metrics = columns[2], mapURLProfix = 'https://unpkg.com/echarts@3.6.2/map/json/' } = settings
  const { tooltipVisible, echartsLib: echarts } = extra
  let { xAxisList: innerXAxisList, yAxisList: innerYAxisList } = settings
  // Add extraMetrics prop for data which only display in tooltip
  let { chartData = [], extraMetrics = [], mainColumn = dimension.concat([metrics]) } = {}
  columns.forEach((column) => !~mainColumn.indexOf(column) && extraMetrics.push(column))
  const ret = fixParam({ type, rows, dimension, metrics, extraMetrics, chartData, innerXAxisList, innerYAxisList })
  chartData = ret.chartData
  innerXAxisList = ret.innerXAxisList
  innerYAxisList = ret.innerYAxisList
  let metricsList = metrics ? rows.map((row) => row[metrics]) : [0, 5]
  !metricsList.length && (metricsList = [0])
  const innerMin = min || Math.min.apply(null, metricsList)
  const innerMax = max || Math.max.apply(null, metricsList)
  const xAxis = getAxis(innerXAxisList, xAxisName, 'x')
  const yAxis = getAxis(innerYAxisList, yAxisName, 'y')
  const series = getSeries({ chartData, type })
  const visualMap = getVisualMap({ innerMin, innerMax, type, heatColor, series })
  const tooltipParams = { dataType, innerXAxisList, innerYAxisList, digit, extraMetrics, metrics }
  const tooltip = tooltipVisible ? getTooltip(tooltipParams) : { show: false }
  const options = { visualMap, series }
  let res
  const args = {
    type,
    visualMap,
    series,
    options,
    pointSize,
    blurSize,
    key,
    v,
    url,
    bmap,
    mapOrigin,
    geo,
    beforeRegisterMap
  }
  Object.assign(args, { echarts, specialAreas, position, positionJsonLink, beforeRegisterMapOnce })
  Object.assign(args, { mapURLProfix, amap, tooltip })
  if (type === 'cartesian') {
    Object.assign(args, { xAxis, yAxis })
  }

  res = getResult(args)
  res.data = chartData
  if (type === 'cartesian') {
    res.type = 'CalendarHeatMapChart'
  }

  return res
}
