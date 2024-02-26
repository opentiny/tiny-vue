import Theme from '../../../feature/token'
import proxy from '../../../util/proxy'

function getChartToken() {
  const {
    areaStyle: { color: colorBgTransparent }
  } = Theme.config.AreaChart

  const { colorError } = Theme.config.colorState

  return {
    colorAreaTP: colorBgTransparent,
    colorError
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
