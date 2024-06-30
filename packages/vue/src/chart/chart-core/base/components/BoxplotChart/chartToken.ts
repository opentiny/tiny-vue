import Theme from '../../feature/token'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    itemStyle: { color: colorBgPrimary }
  } = Theme.config.BoxplotChart

  return {
    itemColor: colorBgPrimary
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
