import Theme from '../../../feature/theme'
import proxy from '../../../util/proxy'

function getChartToken() {
  const {
    areaStyle: { color: colorAreaTP }
  } = Theme.config.AreaChart

  const { errorColor } = Theme.config.colorState

  return {
    colorAreaTP,
    errorColor
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
