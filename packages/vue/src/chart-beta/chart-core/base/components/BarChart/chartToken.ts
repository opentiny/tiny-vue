import Theme from '../../feature/theme'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    itemStyle: { borderWidth, borderColor, borderRadius, color },
    label: { color: labelColor, fontSize },
    barWidth
  } = Theme.config.BarChart

  const {
    colorState: { errorColor }
  } = Theme.config

  return {
    borderWidth,
    borderColor,
    borderRadius,
    color,
    labelColor,
    fontSize,
    barWidth,
    errorColor
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
