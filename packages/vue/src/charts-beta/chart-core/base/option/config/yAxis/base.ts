import Theme from '../../../feature/theme'

function getBaseOption() {
  return {
    type: 'value',
    axisLine: {
      show: false,
      lineStyle: {
        width: Theme.config.yAxisLineWidth,
        type: Theme.config.yAxisLineType,
        color: Theme.config.yAxisLineColor
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        width: Theme.config.yAxisTickLineWidth,
        type: Theme.config.yAxisTickLineType,
        color: Theme.config.yAxisTickLineColor
      }
    },
    axisLabel: {
      color: Theme.config.yAxisLabelColor,
      fontSize: Theme.config.yAxisLabelFontSize
    },
    nameTextStyle: {
      color: Theme.config.yAxisNameColor,
      fontSize: Theme.config.yAxisNameFontSize
    },
    splitLine: {
      show: true,
      lineStyle: {
        width: Theme.config.yAxisSplitLineWidth,
        type: Theme.config.yAxisSplitLineType,
        color: Theme.config.yAxisSplitLineColor
      },
      minInterval: undefined,
      maxInterval: undefined
    }
  }
}

function base() {
  return getBaseOption()
}

export default base
