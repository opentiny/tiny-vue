import base from './base'
import { getTextWidth } from '../../../util/dom'
import merge from '../../../util/merge'
import completePadding from './titlePadding'

/**
 * 配置纵轴名称
 */
function title(iChartOption, chartName, nameTextStyle = {}) {
  let name = ''
  if (iChartOption.yAxisName) {
    name = iChartOption.yAxisName
  }
  if (iChartOption.yAxis && iChartOption.yAxis.name) {
    name = iChartOption.yAxis.name
  }
  if (iChartOption.yAxis && iChartOption.yAxis.length === 1 && iChartOption.yAxis[0].name) {
    name = iChartOption.yAxis[0].name
  }
  let theme = iChartOption.theme
  let padding = iChartOption.padding
  let title = base(theme)
  // 名称
  title.text = name
  // 如果图表为柱状图，并且为横向
  if (chartName === 'BarChart' && iChartOption.direction === 'horizontal') {
    const nameLength = getTextWidth(name, 12)
    title.right = padding[1] - nameLength - 24
    title.bottom = padding[2]
    title.textAlign = 'left'
  } else {
    // 位置
    title.padding[0] = padding[0] - 30
    title.padding[3] = padding[3]
  }
  // y轴文本的样式需要合并到title配置上
  merge(title.textStyle, nameTextStyle)
  merge(title.padding, completePadding(nameTextStyle.padding))
  delete title.textStyle.padding
  return title
}

export default title
