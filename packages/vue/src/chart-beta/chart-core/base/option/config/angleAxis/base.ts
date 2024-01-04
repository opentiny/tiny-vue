import Theme from '../../../feature/theme'

function getBaseAngleAxis() {
  return {
    splitNumber: 6,
    startAngle: 90,
    axisLine: {
      show: false,
      lineStyle: {
        color: Theme.config.angleAxisLineColor,
        width: Theme.config.angleAxisLineWidth,
        type: Theme.config.angleAxisLineType
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: Theme.config.angleAxisSplitLineColor,
        width: Theme.config.angleAxisSplitLineWidth,
        type: Theme.config.angleAxisSplitLineType
      }
    },
    axisTick: {
      show: false,
      length: 5,
      lineStyle: {
        color: Theme.config.angleAxisTickLineColor,
        width: Theme.config.angleAxisTickLineWidth,
        type: Theme.config.angleAxisTickLineType
      }
    },
    axisLabel: {
      show: true,
      fontSize: Theme.config.angleAxisLabelFontSize,
      color: Theme.config.angleAxisLabelColor,
      formatter: undefined
    }
  }
}

function base(chartName) {
  const angleAxisOption = getBaseAngleAxis()
  return angleAxisOption
}

export default base
