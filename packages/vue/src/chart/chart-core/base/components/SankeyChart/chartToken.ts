import Theme from '../../feature/token'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    label: { color: colorLabel }
  } = Theme.config.SankeyChart

  return {
    labelColor: colorLabel
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
