import Theme from '../../feature/theme'
import { setChartPadding } from './handleOptipn'

/**
 * 组装series所需要的series
 */
const label = {
  // 图元的距离
  distance: 10,
  fontSize: 12
}
const lineStyle = {
  width: 1,
  // 连线的曲度
  curveness: 0.5
}
function handleTypeSeries(type) {
  let seriesUnit = {}
  switch (type) {
    case 'LineTreeChart':
      seriesUnit = {
        type: 'tree',
        data: [],
        symbol: 'circle',
        layout: 'orthogonal',
        // 文本样式
        label,
        // 设置连线的样式
        lineStyle,
        // 图元设置
        itemStyle: {},
        leaves: {
          label: {}
        },
        // 初始动画的时长，
        animationDuration: 550,
        // 数据更新动画的时长。
        animationDurationUpdate: 750
      }
      break
    case 'RingTreeChart':
      seriesUnit = {
        type: 'tree',
        data: [],
        symbol: 'circle',
        layout: 'radial',
        // 文本样式
        label: {
          // 图元的距离
          distance: 10,
          fontSize: 12
        },
        // 设置连线的样式
        lineStyle: {
          width: 1,
          // 连线的曲度
          curveness: 0.5
        },
        // 图元的设置
        itemStyle: {},
        // 初始动画的时长，
        animationDuration: 550,
        // 数据更新动画的时长。
        animationDurationUpdate: 750
      }
      break
  }
  return seriesUnit
}

/**
 * 组装echarts所需要的series
 */
export function setSeries(type, theme, iChartOption) {
  const { data } = iChartOption
  if (!data) return
  if (data && data.length !== 0) {
    const series = []
    data.forEach((dataItem) => {
      const seriesItem = handleTypeSeries(type)
      // 设置图表padding
      const position = setChartPadding(type, iChartOption)
      Object.assign(seriesItem, position)
      seriesItem.name = dataItem.name
      // 设置数据
      seriesItem.data = dataItem.data
      // 设置图元大小
      seriesItem.symbolSize = iChartOption.symbolSize ? iChartOption.symbolSize : 10
      // 设置初始打开层级
      seriesItem.initialTreeDepth = iChartOption.initialTreeDepth ? iChartOption.initialTreeDepth : 1
      // 设置主题文本颜色
      seriesItem.label.color = Theme.color.base.font
      // 设置主题线条颜色
      seriesItem.lineStyle.color = Theme.color.base.axis
      // 设置主题图元颜色
      seriesItem.itemStyle.color = theme === 'dark' ? '#1F55B5' : '#5990FD'
      // 设置具体属性
      switch (type) {
        case 'LineTreeChart':
          // 设置线型
          seriesItem.edgeShape = iChartOption.lineType ? iChartOption.lineType : 'curve'
          // 设置起点方向
          if (!iChartOption.direction) {
            seriesItem.label.position = 'left'
            seriesItem.leaves.label.position = 'right'
            seriesItem.orient = 'LR'
          } else if (iChartOption.direction === 'top') {
            seriesItem.label.position = 'top'
            seriesItem.label.rotate = -90
            seriesItem.label.align = 'right'
            seriesItem.label.verticalAlign = 'middle'
            seriesItem.leaves.label.position = 'bottom'
            seriesItem.leaves.label.align = 'left'
            seriesItem.orient = 'TB'
          } else if (iChartOption.direction === 'right') {
            seriesItem.label.position = 'right'
            seriesItem.leaves.label.position = 'left'
            seriesItem.orient = 'RL'
          } else if (iChartOption.direction === 'bottom') {
            seriesItem.label.position = 'bottom'
            seriesItem.label.rotate = 90
            seriesItem.label.align = 'right'
            seriesItem.label.verticalAlign = 'middle'
            seriesItem.leaves.label.position = 'top'
            seriesItem.leaves.label.align = 'left'
            seriesItem.orient = 'BT'
          } else {
            seriesItem.label.position = 'left'
            seriesItem.leaves.label.position = 'right'
            seriesItem.orient = 'LR'
          }
          break
        case 'RingTreeChart':
          break
      }
      series.push(seriesItem)
    })
    return series
  }
}
