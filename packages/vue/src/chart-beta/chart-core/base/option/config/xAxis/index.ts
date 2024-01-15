import base from './base'
import name from './name'
import axisLine from './axisLine'
import axisLabel from './axisLabel'
import axisMargin from './axisMargin'
import boundaryGap from './boundaryGap'
import merge from '../../../util/merge'
import { toArray } from '../../../util/type'

function xAxis(iChartOpt, chartName) {
  let xAxisResult = iChartOpt.xAxis || {}
  xAxisResult = toArray(xAxisResult).map((xAxisItem) => {
    const xAxisUnit = base()
    // 坐标轴名称
    name(xAxisUnit, xAxisItem, iChartOpt)
    // 坐标轴两边留白策略
    boundaryGap(xAxisUnit, xAxisItem, iChartOpt)
    // 刻度标签
    axisLabel(xAxisUnit, xAxisItem, iChartOpt)
    // 坐标轴刻度
    axisLine(xAxisUnit, xAxisItem, iChartOpt)
    // 坐标轴前后留白
    axisMargin(xAxisUnit, xAxisItem, iChartOpt)
    // 覆盖属性
    merge(xAxisUnit, xAxisItem)
    return xAxisUnit
  })
  return xAxisResult
}

/**
 * 配置横轴样式
 */
export default xAxis
