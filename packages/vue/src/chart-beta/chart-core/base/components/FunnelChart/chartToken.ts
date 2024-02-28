import Theme from '../../feature/token'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    itemStyle: { borderColor: colorBorder },
    label: { color: colorLabel }
  } = Theme.config.FunnelChart

  return {
    labelColor: colorLabel,
    borderColor: colorBorder
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
