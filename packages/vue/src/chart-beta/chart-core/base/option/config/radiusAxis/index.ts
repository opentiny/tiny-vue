import base from './base'
import merge from '../../../util/merge'
import Theme from '../../../feature/token'

function radiusAxis(iChartOption, chartName) {
  let radiusAxisOpt
  switch (chartName) {
    case 'JadeJueChart':
      radiusAxisOpt = base(chartName)
      break
    case 'PolarBarChart':
      radiusAxisOpt = base(chartName)
      radiusAxisOpt.axisLabel.margin = Theme.config.radiusAxisLabelGap
      merge(radiusAxisOpt, iChartOption.radiusAxis)
      break
    case 'CircleProcessChart':
      radiusAxisOpt = {
        type: 'category',
        show: false
      }
      break
    default:
      break
  }

  return radiusAxisOpt
}

export default radiusAxis
