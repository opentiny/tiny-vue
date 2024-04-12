import Theme from '../../feature/token'
import proxy from '../../util/proxy'

function getChartToken() {
  const {
    itemStyle: { borderWidth, borderColor, borderWidthNone, borderRadius },
    label: { distance, color: colorLabel, fontSize },
    lineStyle: { color: colorLabelLine },
    emptyCircleStyle: { color: emptyColor }
  } = Theme.config.PieChart

  return {
    borderWidth,
    borderColor,
    borderWidthNone,
    distance,
    labelColor: colorLabel,
    labelLineColor: colorLabelLine,
    emptyColor,
    fontSize,
    borderRadius
  }
}

const chartToken = proxy(getChartToken)

export default chartToken
