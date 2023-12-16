import Theme from '../../../feature/theme'

function getBaseRadiusAxis() {
  return {
    axisLine: {
      show: false,
      lineStyle: {
        color: Theme.config.radiusAxisLineColor,
        width: Theme.config.radiusAxisLineWidth,
        type: Theme.config.radiusAxisLineType
      }
    },
    axisTick: {
      length: 5,
      show: false,
      lineStyle: {
        color: Theme.config.radiusAxisTickLineColor,
        width: Theme.config.radiusAxisTickLineWidth,
        type: Theme.config.radiusAxisTickLineType
      }
    },
    axisLabel: {
      show: true,
      color: Theme.config.radiusAxisLabelColor,
      fontSize: Theme.config.radiusAxisLabelFontSize,
      align: 'right',
      margin: Theme.config.radiusAxisLabelGap * 5,
      interval: 0
    },
    splitLine: {
      lineStyle: {
        type: Theme.config.radiusAxisSplitLineType,
        color: Theme.config.radiusAxisSplitLineColor,
        width: Theme.config.radiusAxisSplitLineWidth
      }
    }
  }
}

function base(chartName) {
  const radiusAxisOption = getBaseRadiusAxis()
  return radiusAxisOption
}

export default base
