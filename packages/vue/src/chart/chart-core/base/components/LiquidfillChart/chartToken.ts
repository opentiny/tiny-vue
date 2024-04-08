import Theme from '../../feature/token'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    label: { color: colorLabel },
    backgroundStyle: { color: colorBgPrimary }
  } = Theme.config.LiquidfillChart

  const { colorGroup } = Theme.config

  return {
    labelColor: colorLabel,
    colorGroup,
    backgroundColor: colorBgPrimary
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
