import cloneDeep from '../../util/cloneDeep'
import chartToken from './chartToken'

export const seriesInit = {
  type: 'funnel',
  width: '80%',
  min: 0,
  max: 100,
  minSize: '0%',
  maxSize: '100%',
  left: 'center',
  top: 60,
  bottom: 60,
  funnelAlign: 'center',
  orient: 'vertical',
  sort: 'descending',
  gap: 10,
  itemStyle: {
    borderColor: '',
    borderWidth: 1
  },
  label: {},
  data: []
}

const SIZE_NAME = ['width', 'height', 'min', 'max', 'minSize', 'maxSize']
const POSITION_NAME = ['left', 'right', 'top', 'bottom', 'funnelAlign', 'orient']

/**
 * 组装echarts所需要的series
 * @param {传入数据} iChartOption
 * @returns
 */
export function setSeries(iChartOption) {
  const { data, sort, size, position, gap } = iChartOption
  let series = []
  const selfSeries = iChartOption.series
  // 处理series里多个数据的优先级配置方法
  if (selfSeries !== undefined && selfSeries.length != 0) {
    selfSeries.forEach((seriesItem) => {
      const seriesUnit = seriesItem
      // 处理size的优先级
      for (let index = 0; index < SIZE_NAME.length; index++) {
        const name = SIZE_NAME[index]
        if (seriesUnit[name] === undefined) {
          if (iChartOption.size && iChartOption.size[name]) {
            // 下面说明一级属性的赋值给series
            seriesUnit[name] = iChartOption.size[name]
          } else {
            // series的不存在size，把初始化的赋值给series
            seriesUnit[name] = seriesInit[name]
          }
        }
      }
      // 处理position的优先级
      for (let index = 0; index < POSITION_NAME.length; index++) {
        const name = POSITION_NAME[index]
        if (seriesUnit[name] === undefined) {
          if (iChartOption.position && iChartOption.position[name]) {
            // 下面说明一级属性的赋值给series
            seriesUnit[name] = iChartOption.position[name]
          } else {
            // series的不存在position，把初始化的赋值给series
            seriesUnit[name] = seriesInit[name]
          }
        }
      }
      // 处理label
      const defaultLabel = {
        show: true,
        color: chartToken.labelColor
      }
      seriesUnit.label = Object.assign(defaultLabel, seriesUnit.label)
      // 处理gap、sort的优先级
      const config = ['gap', 'sort']
      for (let index = 0; index < config.length; index++) {
        const name = config[index]
        if (seriesUnit[name] === undefined) {
          if (iChartOption && iChartOption[name]) {
            // 把一级属性值赋给series
            seriesUnit[name] = iChartOption[name]
          } else {
            // 把初始化的赋值给series
            seriesUnit[name] = seriesInit[name]
          }
        }
      }
      // 处理图形边框颜色
      const defaultItemStyle = {
        borderColor: chartToken.borderColor,
        borderWidth: 1
      }
      seriesUnit.itemStyle = Object.assign(defaultItemStyle, seriesUnit.itemStyle)
    })
    series = selfSeries
  } else {
    // 处理单个数据的默认配置
    const seriesUnit = cloneDeep(seriesInit)
    data && (seriesUnit.data = data)
    // 配置项变成一级属性，处理sort和gap
    sort && (seriesUnit.sort = sort)
    gap && (seriesUnit.gap = gap)
    // 配置漏斗图的label
    setLabel(seriesUnit, iChartOption)
    // 处理漏斗图的size和position
    setSize(size, seriesUnit)
    setPosition(position, seriesUnit)
    // 处理图形边框颜色
    seriesUnit.itemStyle.borderColor = chartToken.borderColor
    series.push(seriesUnit)
  }
  return series
}

// 处理漏斗图的大小
function setSize(size, seriesUnit) {
  for (let index = 0; index < SIZE_NAME.length; index++) {
    const name = SIZE_NAME[index]
    if (size !== undefined && size[name] !== undefined) {
      seriesUnit[name] = size[name]
    }
  }
}

// 处理漏斗图的位置
function setPosition(position, seriesUnit) {
  for (let index = 0; index < POSITION_NAME.length; index++) {
    const name = POSITION_NAME[index]
    if (position !== undefined && position[name] !== undefined) {
      seriesUnit[name] = position[name]
    }
  }
}

// 设置label的属性主要是formatter
function setLabel(seriesUnit, iChartOption) {
  seriesUnit.label.color = chartToken.labelColor
  seriesUnit.label.position = 'inside'
  seriesUnit.label.show = true
  Object.assign(seriesUnit.label, iChartOption.label)
}
