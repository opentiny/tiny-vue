import Theme from '../../feature/token'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    itemStyle: { borderWidth, borderColor, borderRadius, color },
    label: { color: colorLabel, fontSize },
    barWidth
  } = Theme.config.BarChart

  const {
    colorState: { colorError }
  } = Theme.config

  return {
    borderWidth,
    borderColor,
    borderRadius,
    color,
    labelColor: colorLabel,
    fontSize,
    barWidth,
    colorError
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
