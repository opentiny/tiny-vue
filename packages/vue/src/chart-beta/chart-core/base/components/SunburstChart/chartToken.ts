import Theme from '../../feature/token'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    itemStyle: { borderColor: colorBorder },
    label: { color: colorLabel }
  } = Theme.config.SunburstChart

  return {
    itemBorderColor: colorBorder,
    labelColor: colorLabel
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
