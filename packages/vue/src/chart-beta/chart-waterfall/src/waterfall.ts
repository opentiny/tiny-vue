/**
 * Dimension	维度	string	默认 columns 第一项为维度
 * metrics	指标	string	默认 columns 第二项为指标
 * dataType	数据类型	string	可选值: KMB, normal, percent
 * totalNum	总量	number	默认瀑布图总量为所有数据的和
 * totalName	总量的显示文案	string	默认显示总计
 * remainName	剩余的显示文案	string	默认显示其他
 * digit	设置数据类型为 percent 时保留的位数	number	默认为 2
 * axisVisible 隐藏xy轴坐标和文本
 * xAxisName 备用x轴名称，优先级低于dimension
 * labelMap  坐标轴名称映射, 设置别名
 */

import { itemLabel, itemContent, getFormatted } from '@opentiny/vue-chart-core-beta'

const getWaterfallTooltip = (dataType, digit) => {
  const formatter = (items) => {
    const item = items[0]
    return `${itemContent(item.name)}<br/>
    ${itemLabel(item.seriesName)} ${itemContent(getFormatted(item.value, dataType, digit))}`
  }

  return formatter
}

const getWaterfallXAxis = (args) => {
  const { axisVisible, labelMap, xAxisName } = args

  const name = (labelMap && labelMap[xAxisName]) || xAxisName

  return { data: name, show: axisVisible }
}

const getWaterfallYAxis = (args) => {
  const { axisVisible, labelMap, yAxisName } = args
  const isNull = (x) => x === null || x === undefined
  const name = !isNull(labelMap[yAxisName]) ? labelMap[yAxisName] : yAxisName
  return { name, show: axisVisible }
}

const getData = (args) => {
  const { rows, totalNum, remainName, dataSum, remainStatus, dimension, metrics, digit } = args
  const data = [...rows]
  if (remainStatus === 'have-remain') {
    data.push({
      [dimension]: remainName,
      [metrics]: parseFloat(totalNum - dataSum).toFixed(digit)
    })
  }

  return data
}

export const waterfall = (columns, rows, settings, extra) => {
  const { tooltipVisible, t } = extra
  const { axisVisible = true, dataType = 'normal', dimension = columns[0] } = settings
  const { remainName = t('ui.chart.other'), totalName = t('ui.chart.total') } = settings
  const { totalNum, xAxisName = dimension, digit = 2, labelMap = {} } = settings

  let { metrics } = settings
  if (metrics === undefined) {
    const metricsTemp = columns.slice().filter((val) => val !== dimension)
    metrics = metricsTemp[0]
  }

  const yAxisName = metrics

  // 指标总量
  const dataSum = parseFloat(rows.reduce((pre, cur) => pre + Number(cur[metrics]), 0).toFixed(digit))
  // 判断是否有剩余指标
  const remainStatus = totalNum ? (totalNum > dataSum ? 'have-remain' : 'none-remain') : 'not-total'

  const xAxis = getWaterfallXAxis({ axisVisible, labelMap, xAxisName })
  const yAxis = getWaterfallYAxis({ axisVisible, labelMap, yAxisName })

  const seriesParams = { dataType, rows, dimension, metrics }
  Object.assign(seriesParams, { totalNum, remainStatus, dataSum, digit })

  const data = getData({ rows, totalNum, totalName, remainName, dataSum, remainStatus, dimension, metrics })

  const ichartOption = {
    type: 'water-fall',
    xAxis,
    yAxis,
    data,
    totalName,
    totalPosition: 'start',
    label: {
      show: true,
      position: 'top',
      formatter: (item) => getFormatted(item.value, dataType, digit)
    },
    legend: {
      show: false
    }
  }

  if (tooltipVisible) {
    ichartOption.tipHtml = getWaterfallTooltip(dataType, digit)
  } else {
    ichartOption.tooltip = {
      show: false
    }
  }

  return ichartOption
}
