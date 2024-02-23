import * as echarts from 'echarts'
import Theme from '../../feature/theme'

/**
 * 针对趋势线需求，图表需要进行特殊处理
 */
export function handleTrendLine(option, iChartOption, plugins) {
  const ecStat = plugins.ecStat
  if (iChartOption.trendLineConfig) {
    if (ecStat) {
      echarts.registerTransform(ecStat.transform.regression)
      const theme = iChartOption.theme
      // 集合数据
      option.dataset.push({
        transform: {
          type: 'ecStat:regression',
          config: iChartOption.trendLineConfig
        }
      })
      // 趋势线
      option.series.push({
        name: 'trendline',
        type: 'line',
        smooth: true,
        datasetIndex: 1,
        symbolSize: 0.1,
        symbol: 'circle',
        label: {
          show: true,
          fontSize: 14,
          color: Theme.color.base.axislabel
        },
        labelLayout: {
          dx: -20
        },
        encode: {
          label: 2,
          tooltip: 1
        },
        silent: true
      })
    } else {
      throw new Error('您必须安装echarts-stat才可以使用趋势线功能')
    }
  }
}
