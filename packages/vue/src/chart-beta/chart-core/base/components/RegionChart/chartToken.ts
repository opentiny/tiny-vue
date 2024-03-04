import Theme from '../../feature/token'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    visualMap: {
      textStyle: { color: colorTextPrimary }
    }
  } = Theme.config.RegionChart

  return {
    visualMapTextColor: colorTextPrimary
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
