import { getColor, codeToRGB } from '../../util/color'
import cloneDeep from '../../util/cloneDeep'
import { getMarkLineDefault } from '../../option/config/mark'
import Theme from '../../feature/theme'
import merge from '../../util/merge'
export const seriesInit = {
  // 数据
  data: [],
  // 气泡图
  type: 'scatter',
  // 鼠标hover时显示label，并且其他legend变成灰色
  emphasis: {
    label: {
      show: true,
      color: '#ffffff',
      fontSize: 14,
      formatter(param) {
        return param.data[3]
      },
      position: 'top'
    }
  },
  // 气泡样式
  itemStyle: {}
}

/**
 * 组装echarts所需要的series
 * @param {图表数据} seriesData
 * @param {图例数据} legendData
 * @param {主题} theme
 * @param {是否面积图} isArea
 * @param {是否曲线} isSmooth
 * @param {是否阶梯线} isStep
 * @param {阈值线} markLine
 * @param {阈值箭头} markPoint
 * @param {颜色集合} colors
 * @returns
 */
export function setSeries({ theme, legendData, data, markLine, color, iChartOption }) {
  // 更改hover时显示的label颜色
  seriesInit.emphasis.label.color = Theme.color.base.axislabel
  const series = []
  legendData.forEach((legend, index) => {
    const seriesUnit = cloneDeep(seriesInit)
    const itemBorderColor = getColor(color, index)
    // 设置图元透明度
    const itemColor = codeToRGB(itemBorderColor, iChartOption.symbolOpacity || 0.2)
    // 阈值线
    if (markLine) {
      seriesUnit.markLine = cloneDeep(getMarkLineDefault())
      if (markLine.y) {
        seriesUnit.markLine.data.push({ yAxis: markLine.y })
      }
      if (markLine.x) {
        seriesUnit.markLine.data.push({ xAxis: markLine.x })
      }
    }
    // 数据 / 数据名称
    seriesUnit.name = legend
    seriesUnit.data = data[legend]
    seriesUnit.itemStyle = {
      color: itemColor,
      borderColor: itemBorderColor,
      borderWidth: 1
    }
    series.push(seriesUnit)
  })
  return series
}

// 添加seires属性
export function handleSeriesExtra(baseOpt, iChartOption) {
  const { symbol, symbolRotate, symbolOffset, cursor, label, itemStyle, emphasis } = iChartOption
  baseOpt.series.forEach((item, index) => {
    item.symbol = symbol
    item.symbolRotate = symbolRotate
    item.symbolOffset = symbolOffset
    item.cursor = cursor
    item.label = label
    merge(item.itemStyle, itemStyle)
    merge(item.emphasis, emphasis)
  })
}
