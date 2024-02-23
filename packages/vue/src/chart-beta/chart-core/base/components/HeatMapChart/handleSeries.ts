import { CHARTTYPE, SERIESUNIT } from './BaseOption'
import cloneDeep from '../../util/cloneDeep'
import chartToken from './chartToken'

// 蜂窝的render函数
function handleRenderItem(params, api) {
  // 六边形中心坐标,根据画布的左上方定位
  const center = api.coord([api.value(0), api.value(1)])
  const points = [] // 六边形的坐标数组
  const viewRadius = api.size([api.value(3), api.value(3)]) // 六边形的半径
  let angle = Math.PI / 6 // 角度
  for (let i = 0; i < 6; i++, angle += Math.PI / 3) {
    points.push([center[0] + viewRadius[0] * Math.cos(angle), center[1] + viewRadius[0] * Math.sin(angle)])
  }
  return {
    type: 'group',
    children: [
      {
        type: 'polygon',
        shape: {
          points
        },
        style: {
          stroke: chartToken.customStrokeColor,
          fill: api.visual('color'),
          lineWidth: 1
        }
      }
    ]
  }
}

function handleRectangularSeries(seriesUnit, iChartOpt, data) {
  seriesUnit.symbolSize = iChartOpt.rectangleSize || 8
  seriesUnit.data = data
}

function handleCalendarSeries(seriesUnit, iChartOpt, data) {
  seriesUnit.data = data[2]
  seriesUnit.itemStyle.borderColor = iChartOpt.borderColor || iChartOpt.color
  seriesUnit.label.show = iChartOpt.showLabel ?? true
  seriesUnit.label.color = chartToken.labelColor
  if (iChartOpt.changeProperty && iChartOpt.changeProperty === 'color') {
    seriesUnit.itemStyle.borderWidth = 0
  }
}

function handleHexagonSeries(seriesUnit, data) {
  seriesUnit.data = data[0]
  seriesUnit.renderItem = handleRenderItem
}

const seriesHandler = {
  RectangularHeatMapChart: handleRectangularSeries,
  CalendarHeatMapChart: handleCalendarSeries,
  HexagonHeatMapChart: handleHexagonSeries
}

function handleSeries(baseOpt, iChartOpt, data, type) {
  const series = []
  const seriesItem = cloneDeep(SERIESUNIT[type])
  // 设置具体属性
  if (type === CHARTTYPE[2]) {
    seriesHandler[type](seriesItem, data)
  } else {
    seriesHandler[type](seriesItem, iChartOpt, data)
  }
  series.push(seriesItem)
  baseOpt.series = series
}
export { handleSeries }
