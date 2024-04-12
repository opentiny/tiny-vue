import grid from '../config/grid'
import xAxis from '../config/xAxis'
import yAxis from '../config/yAxis'
import legend from '../config/legend'
import tooltip from '../config/tooltip'
import datazoom from '../config/datazoom'

// 暴露出去的方法
import xkey from '../config/xAxis/xkey'
import xdata from '../config/xAxis/xdata'
import ydata from '../config/yAxis/ydata'
import ldata from '../config/legend/ldata'

// 组装直角坐标系所需的基础配置
function RectCoordSys(baseOpt, iChartOpt, chartName) {
  // 图表padding
  baseOpt.grid = grid(iChartOpt)
  // 图表基础颜色
  baseOpt.color = iChartOpt.color
  // 图表x坐标轴
  baseOpt.xAxis = xAxis(iChartOpt, chartName)
  // 图表y坐标轴
  baseOpt.yAxis = yAxis(baseOpt, iChartOpt, chartName)
  // 图表鼠标悬浮提示框
  baseOpt.tooltip = tooltip(iChartOpt, chartName)
  // 图表图例
  baseOpt.legend = legend(iChartOpt, chartName)
  // 图表datazoom
  baseOpt.dataZoom = datazoom(iChartOpt)
}

export default RectCoordSys

/**
 * xkey:  获取到x轴的key name
 * xdata: 获取到x轴的数据
 * ydata: 获取到y轴的数据
 * ldata: 获取到legend的数据
 */
export { xkey, xdata, ldata, ydata }
