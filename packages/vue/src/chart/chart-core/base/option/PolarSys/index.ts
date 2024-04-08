import title from '../config/polarTitle'
import legend from '../config/legend'
import tooltip from '../config/tooltip'
import angleAxis from '../config/angleAxis'
import radiusAxis from '../config/radiusAxis'
import polar from '../config/polar'

// 极坐标系所需的基础配置
function PolarCoordSys(baseOpt, iChartOpt, chartName) {
  // 图表基础颜色
  baseOpt.color = iChartOpt.color

  // 图表的圆环角度轴
  baseOpt.angleAxis = angleAxis(iChartOpt, chartName)

  // 图表的圆环径向轴
  baseOpt.radiusAxis = radiusAxis(iChartOpt, chartName)

  // 图表的圆环位置
  baseOpt.polar = polar(iChartOpt, chartName)

  // 图表鼠标悬浮提示框
  baseOpt.tooltip = tooltip(iChartOpt, chartName)

  // 图表中间的文字使用 title 属性实现
  baseOpt.title = title(iChartOpt, chartName)

  // 图表图例
  baseOpt.legend = legend(iChartOpt)
}

export default PolarCoordSys
