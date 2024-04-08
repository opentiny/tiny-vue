import Theme from '../../feature/token'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    axisLine: {
      lineStyle: { color: colorAxisLine }
    },
    splitLine: {
      lineStyle: { color: colorAxisSplitLine }
    },
    axisLabel: { color: colorTextSecondary },
    detail: {
      rich: { color: colorTextPrimary }
    }
  } = Theme.config.GaugeChart

  const { colorState } = Theme.config

  return {
    marklineColor: colorState.colorError,
    axisLineColor: colorAxisLine,
    splitLineColor: colorAxisSplitLine,
    axisLabelColor: colorTextSecondary,
    detailRichColor: colorTextPrimary
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
