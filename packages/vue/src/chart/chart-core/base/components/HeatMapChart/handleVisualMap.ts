import min from '../../util/sort/min'
import max from '../../util/sort/max'
import { VISUALMAPUNIT, CHARTTYPE } from './BaseOption'
import cloneDeep from '../../util/cloneDeep'
import merge from '../../util/merge'
import chartToken from './chartToken'

/**
 * 设置日历热力图视觉滑块控制手柄
 */
function handleCalendar(iChartOption, visualMapItem, maxValue, minValue) {
  visualMapItem.show = !!iChartOption.handle
  if (iChartOption.handle) {
    visualMapItem.inverse = !!iChartOption.handle.inverse
    visualMapItem.text = iChartOption.handle.text || [maxValue, minValue]
    visualMapItem.orient = iChartOption.handle.orient || 'vertical'
    visualMapItem.calculable = !!iChartOption.handle.calculable
    visualMapItem.textStyle.color = chartToken.visualMapTextColor
    visualMapItem.itemWidth = iChartOption.handle.width || 20
    visualMapItem.itemHeight = iChartOption.handle.height || 400
    if (iChartOption.handle.position) {
      merge(visualMapItem, iChartOption.handle.position)
    } else {
      visualMapItem.right = '4%'
      visualMapItem.bottom = '6%'
    }
  }
  if (!iChartOption.changeProperty || iChartOption.changeProperty === 'opcity') {
    visualMapItem.inRange = { opacity: [0, 1] }
  } else {
    visualMapItem.inRange = { color: iChartOption.color }
  }
}

/**
 * 组装echarts所需要的series
 */
export function setVisualMap(baseOpt, type, data, iChartOption) {
  const visualMap = []
  const visualMapItem = cloneDeep(VISUALMAPUNIT[type])
  const intervalData = {
    RectangularHeatMapChart: data,
    CalendarHeatMapChart: data[2],
    HexagonHeatMapChart: data[0]
  }
  const intervalArr = intervalData[type].map((item) => {
    return item[2]
  })
  const minValue = min(intervalArr)
  const maxValue = max(intervalArr)
  visualMapItem.min = minValue
  visualMapItem.max = maxValue
  if (type === CHARTTYPE[1]) {
    // 设置视觉滑块控制手柄  设置VisualMap控制的热力变化属性
    handleCalendar(iChartOption, visualMapItem, maxValue, minValue)
  }
  if (type === CHARTTYPE[2]) {
    visualMapItem.inRange.color = iChartOption.color
  }
  visualMap.push(visualMapItem)
  baseOpt.visualMap = visualMap
}
