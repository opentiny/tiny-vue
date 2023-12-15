import Theme from '../../feature/theme'
import proxy from '../../util/proxy'

const getChartToken = () => {
  const {
    symbolSize: { symbolSizeXS, symbolSize },
    itemStyle: { borderZero, borderLG, border, borderColor },
    lineStyle: { lineWidthLG, lineWidth },
    markLine: {
      lineStyle: { color }
    }
  } = Theme.config.LineChart

  const { errorColor } = Theme.config.colorState

  const { tooltipFontColor, visualMapPiecesColor, visualMapDashColor } = Theme.config

  return {
    symbolSizeXS,
    borderZero,
    lineWidthLG,
    symbolSize,
    borderLG,
    lineWidth,
    color,
    border,
    borderColor,
    errorColor,
    tooltipFontColor,
    visualMapPiecesColor,
    visualMapDashColor
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
