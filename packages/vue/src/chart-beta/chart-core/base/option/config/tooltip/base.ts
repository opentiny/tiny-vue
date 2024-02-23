import Theme from '../../../feature/token'

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
        color: Theme.config.tooltipAxisPointerShadowColor
      }
    },
    textStyle: {
      color: Theme.config.tooltipTextColor,
      fontSize: Theme.config.tooltipTextFontSize
    },
    borderWidth: Theme.config.tooltipBorderWidth,
    padding: Theme.config.tooltipPadding,
    backgroundColor: Theme.config.tooltipBg,
    formatter: undefined,
    extraCssText: `box-shadow:0 ${Theme.config.tooltipShadowOffsetY}px 
    ${Theme.config.tooltipShadowBlur}px 0 ${Theme.config.tooltipShadowColor};`
  }
}

function base(chartName) {
  return getbaseOption(chartName)
}

export default base
