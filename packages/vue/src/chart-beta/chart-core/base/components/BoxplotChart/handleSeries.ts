import cloneDeep from '../../util/cloneDeep'
import Theme from '../../feature/theme'

const datasetInit = [
  {
    source: []
  },
  {
    transform: {
      type: 'boxplot'
    }
  },
  {
    fromDatasetIndex: 1,
    fromTransformResult: 1
  }
]

const seriesInit = [
  {
    name: 'boxplot',
    type: 'boxplot',
    datasetIndex: 1,
    itemStyle: {
      color: ''
    }
  },
  {
    name: 'outlier',
    type: 'scatter',
    datasetIndex: 2
  }
]

/**
 * 组装echarts所需要的dataset
 * @param {传入数据} data
 * @returns
 */
export function setDataset(data) {
  const dataset = cloneDeep(datasetInit)
  dataset[0].source = data
  return dataset
}

/**
 * 组装echarts所需要的series
 * @param {传入主题} theme
 * @returns
 */
export function setSeries(theme) {
  const series = cloneDeep(seriesInit)
  series[0].itemStyle.color = Theme.color.base.bg
  return series
}
