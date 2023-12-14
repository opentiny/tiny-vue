import Theme from '../../feature/theme'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    itemStyle: { borderWidth, borderColor, borderWidthZero, borderRadius },
    label: { distance, color: labelColor, fontSize },
    lineStyle: { color: lineColor },
    emptyCircleStyle: { color: emptyColor }
  } = Theme.config.PieChart

  return {
    borderWidth,
    borderColor,
    borderWidthZero,
    distance,
    labelColor,
    lineColor,
    emptyColor,
    fontSize,
    borderRadius
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
