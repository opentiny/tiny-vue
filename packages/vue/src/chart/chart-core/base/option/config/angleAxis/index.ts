import base from './base'
import merge from '../../../util/merge'

function angleAxis(iChartOption, chartName) {
  let angleAxisOpt
  switch (chartName) {
    case 'JadeJueChart':
      angleAxisOpt = base(chartName)
      merge(angleAxisOpt, iChartOption.angleAxis)
      break
    case 'PolarBarChart':
      angleAxisOpt = base(chartName)
      angleAxisOpt.type = 'category'
      angleAxisOpt.axisLine.show = true
      angleAxisOpt.axisLabel.show = false
      angleAxisOpt.splitLine.show = true
      merge(angleAxisOpt, iChartOption.angleAxis)
      break
    case 'CircleProcessChart':
      angleAxisOpt = {
        max: 100,
        show: false
      }
      break
    default:
      break
  }
  return angleAxisOpt
}

export default angleAxis
