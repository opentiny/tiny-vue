import Theme from '../../feature/theme'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    symbolSize,
    symbolSizeSM,
    symbolSizeLG,
    areaStyle: { color: areaStyleColor },
    rich: { fontSize, lineHeight, lineHeightSM },
    itemStyle: {
      borderWidth: { border, borderSM },
      borderColor
    },
    lineStyle: {
      width: { lineWidth, lineWidthLG, lineWidthZero }
    }
  } = Theme.config.RadarChart

  const { errorColor } = Theme.config.colorState
  const {
    radarAxisLineWidth,
    radarSplitLineWidth,
    radiusAxisLineColor,
    radarSplitLineColor,
    radarAxisLabelColor,
    lineColorTp,
    radarAxisLineType,
    radarSplitLineType
  } = Theme.config

  return {
    symbolSize,
    areaStyleColor,
    fontSize,
    lineHeight,
    lineHeightSM,
    symbolSizeSM,
    symbolSizeLG,
    border,
    borderSM,
    lineWidth,
    lineWidthLG,
    lineWidthZero,
    errorColor,
    radarAxisLineWidth,
    radarSplitLineWidth,
    radiusAxisLineColor,
    radarSplitLineColor,
    radarAxisLabelColor,
    lineColorTp,
    borderColor,
    radarAxisLineType,
    radarSplitLineType
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
