import Theme from '../../feature/token'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    emphasis: {
      label: { color: colorLabel }
    }
  } = Theme.config.BubbleChart

  return {
    emphasisLabelColor: colorLabel,
    labelColor: colorLabel
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
