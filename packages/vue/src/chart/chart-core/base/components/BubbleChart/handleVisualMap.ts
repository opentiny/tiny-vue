import min from '../../util/sort/min'
import max from '../../util/sort/max'

export function setVisualMap(baseOption, iChartOption, legendData) {
  const visualMap = []
  const bubbleSize = iChartOption.bubbleSize || [10, 70]
  const radius = baseOption.dataset[0].source.map((item) => {
    return item[2]
  })
  const minValue = min(radius)
  const maxValue = max(radius)
  const seriesIndex = new Array(legendData.length).fill(0).map((item, index) => {
    return index
  })
  visualMap.push({
    show: false,
    dimension: 2,
    min: minValue,
    max: maxValue,
    seriesIndex,
    inRange: {
      symbolSize: bubbleSize
    }
  })
  return visualMap
}

// 设置数据集
export function setDataset(baseOption, iChartOption) {
  let source = []
  Object.keys(iChartOption.data).forEach((key) => {
    source = source.concat(iChartOption.data[key])
  })
  return [
    {
      source
    }
  ]
}
