import { isObject } from '../../util/type'
import chartToken from './chartToken'
import Theme from '../../feature/token'

function getSeriesUnit() {
  return {
    type: 'radar',
    name: 'data',
    // 使用的雷达坐标系
    radarIndex: 0,
    // 拐点的标记大小
    symbolSize: chartToken.symbolSize,
    // 拐点样式
    itemStyle: {
      borderWidth: chartToken.symbolBorderWidthSM,
      borderColor: chartToken.borderColor
    },
    // 填充面积
    areaStyle: {
      opacity: 0.2
    },
    lineStyle: {
      width: chartToken.lineWidth
    },
    // 高亮的样式
    emphasis: {
      focus: 'none',
      areaStyle: {
        opacity: 0.4
      }
    },
    data: []
  }
}

function setSeries(baseOpt, iChartOpt, radarKeys, data) {
  const { isWaveRadar, theme } = iChartOpt
  const dataNames = Object.keys(data)
  const seriesUnit = getSeriesUnit()
  // 华为云的主题下的特殊处理，之后通过token解决，暂时这样处理
  if (theme.toLowerCase().includes('cloud-dark') || theme.toLowerCase().includes('cloud-light')) {
    // 普通
    seriesUnit.areaStyle.opacity = 0.1
    seriesUnit.emphasis.areaStyle.opacity = 0.2
    //  异型
    if (isWaveRadar) {
      seriesUnit.symbolSize = chartToken.symbolSizeLG
      seriesUnit.itemStyle.borderWidth = chartToken.symbolBorderWidth
      seriesUnit.areaStyle.opacity = 0.2
      seriesUnit.emphasis.areaStyle.opacity = 0.4
    }
  }
  dataNames.forEach((name) => {
    const radarData = {
      name,
      value: radarKeys.map((key) => {
        return data[name][key]
      })
    }
    seriesUnit.data.push(radarData)
  })
  baseOpt.series.push(seriesUnit)
}

function getRedPointerRadar() {
  return {
    // 雷达位置，保持和初始坐标系一致，
    center: ['50%', '50%'],
    // 雷达半径，保持和初始坐标系一致，
    radius: '50%',
    // 控制指示器名称是否显示
    axisName: {
      show: false
    },
    startAngle: undefined, // 轴线的角度根据需求自己定义,起始点是水平方向
    // 指示器轴的分割段数，和初始坐标轴一致
    splitNumber: 4,
    shape: 'circle',
    // 坐标轴圆环分隔区域填充
    splitArea: {
      show: false
    },
    // 坐标轴射线
    axisLine: {
      show: false
    },
    // 坐标轴圆环分隔线
    splitLine: {
      show: false
    },
    indicator: undefined
  }
}

function handleRedPointerRadar(baseOption, radarKeys, dataNameIndex, dataName) {
  const max = baseOption.radar[0].indicator.find((item) => item.name === dataName).max
  const redPointerRadar = getRedPointerRadar()
  redPointerRadar.center = baseOption.radar[0].center
  redPointerRadar.radius = baseOption.radar[0].radius
  redPointerRadar.startAngle = 90 + (360 / radarKeys.length) * dataNameIndex
  redPointerRadar.indicator = [{ name: '', max }]
  return redPointerRadar
}

function handleRedPointerSeries(index, dataValue, seriesName) {
  const { colorError } = Theme.config.colorState
  return {
    name: 'threshold',
    type: 'radar',
    // 拐点大小
    symbolSize: chartToken.symbolSizeLG,
    silent: true,
    z: 99,
    // 使用的雷达坐标系的索引
    radarIndex: 2 + index,
    // 拐点的样式
    itemStyle: {
      color: colorError,
      borderColor: chartToken.borderColor,
      borderWidth: chartToken.symbolBorderWidth,
      shadowBlur: 15,
      shadowColor: colorError
    },
    // 隐藏标示线
    lineStyle: {
      width: chartToken.lineWidthNone,
      labelLine: {
        show: false
      }
    },
    data: [
      {
        value: dataValue,
        name: seriesName // 数据的名称，为了图例的点击消失生效，和系列的名字保持一致
      }
    ]
  }
}

// 计算出大于等于阈值的数据
function getExceededMarkLineValue(data, markLine, isThreshold) {
  const thresholdPoint = []
  const names = Object.keys(data)
  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    const keys = Object.keys(data[name])
    for (let j = 0; j < keys.length; j++) {
      const key = keys[j]
      const markLineVal = isThreshold ? markLine.threshold[key] : markLine
      if (markLineVal && data[name][key] >= markLineVal) {
        thresholdPoint.push({
          seriesName: name,
          dataName: key,
          dataValue: data[name][key]
        })
      }
    }
  }
  return thresholdPoint
}

/**
 * 根据参数计算出圆盘图的半径
 */
export function setMarkLineSeries(baseOpt, iChartOpt, radarKeys) {
  // 阈值
  const { markLine } = iChartOpt
  if (markLine) {
    const { data } = iChartOpt
    const isThreshold = !!(isObject(markLine) && markLine?.threshold)
    // 超过阈值的数据
    const exceeded = getExceededMarkLineValue(data, markLine, isThreshold)
    exceeded.forEach((item, index) => {
      const seriesName = item.seriesName
      const dataName = item.dataName
      const dataNameIndex = radarKeys.indexOf(dataName)
      const dataValue = item.dataValue
      // 需要高亮红点的坐标系,一个红点对应一个坐标系，需要去修改相应的数据
      const redPointerRadar = handleRedPointerRadar(baseOpt, radarKeys, dataNameIndex, dataName)
      // 红点数据
      const redPointerSeries = handleRedPointerSeries(index, dataValue, seriesName, isThreshold)
      baseOpt.radar.push(redPointerRadar)
      baseOpt.series.push(redPointerSeries)
    })
  }
}

export { setSeries }
