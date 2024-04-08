import Theme from '../../feature/token'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    axisLine: {
      lineStyle: { color: colorAxisLine }
    },
    visualMap: {
      text: { color: colorTextPrimary }
    },
    label: { color: colorLabel },
    custom: {
      style: { stroke: colorBorder }
    }
  } = Theme.config.HeatMapChart

  return {
    axisLineColor: colorAxisLine,
    visualMapTextColor: colorTextPrimary,
    labelColor: colorLabel,
    customStrokeColor: colorBorder
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
