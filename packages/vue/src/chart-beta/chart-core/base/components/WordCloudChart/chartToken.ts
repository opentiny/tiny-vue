import Theme from '../../feature/token'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    emphasis: {
      textStyle: { textShadowColor: colorShadow }
    }
  } = Theme.config.WordCloudChart

  return {
    emphasisTextShadowColor: colorShadow
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
