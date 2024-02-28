import Theme from '../../feature/token'
import proxy from '../../util/proxy'

const getChartToken = () => {
  const {
    symbolSize: { symbolSizeSM, symbolSizeLG },
    itemStyle: { borderZero, border, borderColor },
    lineStyle: { lineWidth },
    markLine: {
      lineStyle: { color }
    }
  } = Theme.config.LineChart

  const { colorError } = Theme.config.colorState

  const { tooltipTextColor, visualMapPiecesColor, visualMapDashColor } = Theme.config

  return {
    symbolSizeSM,
    borderZero,
    symbolSizeLG,
    lineWidth,
    color,
    border,
    borderColor,
    colorError,
    tooltipTextColor,
    visualMapPiecesColor,
    visualMapDashColor
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
