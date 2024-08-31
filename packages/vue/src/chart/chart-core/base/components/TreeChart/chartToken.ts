import Theme from '../../feature/token'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    label: { color: colorLabel },
    lineStyle: { color: colorAxisLine }
  } = Theme.config.TreeChart

  const { colorState } = Theme.config

  return {
    colorInfo: colorState.colorInfo,
    lineColor: colorAxisLine,
    labelColor: colorLabel
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
