import Theme from '../../feature/token'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    axisPointer: {
      label: { color: colorTextSecondary }
    }
  } = Theme.config.CandlestickChart

  const { colorState } = Theme.config

  return {
    axisPointerLabelColor: colorTextSecondary,
    colorState
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
