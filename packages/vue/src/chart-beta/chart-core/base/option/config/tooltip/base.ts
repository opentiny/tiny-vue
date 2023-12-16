import Theme from '../../../feature/theme'

const chartType = [
  'CircleProcessChart',
  'GaugeChart',
  'RadarChart',
  'FunnelChart',
  'JadeJueChart',
  'LiquidfillChart',
  'PieChart',
  'PolarBarChart',
  'SunburstChart'
]

function getbaseOption(chartName) {
  const trigger = chartName && chartType.includes(chartName) ? 'item' : 'axis'
  return {
    trigger,
    confine: true,
    borderRadius: Theme.config.tooltipBorderRaduis,
    axisPointer: {
      z: 0,
      type: 'line',
      lineStyle: {
        type: Theme.config.tooltipAxisPointerLineType,
        width: Theme.config.tooltipAxisPointerLineWidth,
        color: Theme.config.tooltipAxisPointerLineColor
      },
      shadowStyle: {
        color: Theme.config.tooltipAxisPointerShadow
      }
    },
    textStyle: {
      color: Theme.config.tooltipAxisPointerTextColor,
      fontSize: Theme.config.tooltipTextFontSize
    },
    borderWidth: 0,
    // 待定
    padding: [14, 16],
    backgroundColor: Theme.config.tooltipBg,
    formatter: undefined
  }
}

function base(chartName) {
  return getbaseOption(chartName)
}

export default base
