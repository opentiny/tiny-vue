import { isObject } from '../../util/type'
import cloneDeep from '../../util/cloneDeep'
import chartToken from './chartToken'

export const handleSeriesInit = () => {
  return {
    type: 'radar',
    name: 'data',
    // 使用的雷达坐标系
    radarIndex: 0,
    // 拐点的标记大小
    symbolSize: chartToken.symbolSize,
    // 拐点样式
    itemStyle: {
      borderWidth: chartToken.border
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
        opacity: 0.5
      }
    },
    data: []
  }
}

/**
 * 组装echarts所需要的series
 * @param {主题} theme
 * @param {数据} data
 * @returns
 */
export function setSeries(iChartOption, radarKeys, data) {
  const { isWaveRadar, theme } = iChartOption
  // 组装数据
  const series = []
  const dataNames = Object.keys(data)
  const seriesUnit = cloneDeep(handleSeriesInit())
  // 更改拐点边框样式
  seriesUnit.itemStyle.borderColor = chartToken.borderColor
  // 华为云的主题下的特殊处理，之后通过token解决，暂时这样处理
  if (theme.toLowerCase().includes('cloud-dark') || theme.toLowerCase().includes('cloud-light')) {
    // 普通
    seriesUnit.symbolSize = chartToken.symbolSizeSM
    seriesUnit.itemStyle.borderWidth = chartToken.borderSM
    seriesUnit.areaStyle.opacity = 0.1
    seriesUnit.emphasis.areaStyle.opacity = 0.2
    //  异型
    if (isWaveRadar) {
      seriesUnit.symbolSize = chartToken.symbolSizeLG
      seriesUnit.itemStyle.borderWidth = chartToken.border
      seriesUnit.areaStyle.opacity = 0.2
      seriesUnit.lineStyle.width = chartToken.lineWidthLG
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
  series.push(seriesUnit)
  return series
}

function handleRedPointerRadar(chartPosition, radarKeys, dataNameIndex, radarMax, dataName, baseOption) {
  const max = baseOption.radar[0].indicator.find((item) => item.name === dataName).max
  const redPointerRadar = {
    // 雷达位置，保持和初始坐标系一致，
    center: chartPosition.center || ['50%', '50%'],
    // 雷达半径，保持和初始坐标系一致，
    radius: chartPosition.radius || '50%',
    // 控制指示器名称是否显示
    axisName: {
      show: false
    },
    startAngle: 90 + (360 / radarKeys.length) * dataNameIndex, // 轴线的角度根据需求自己定义,起始点是水平方向
    // 指示器轴的分割段数，和初始坐标轴一致
    splitNumber: 4,
    shape: 'circle',
    // 坐标轴圆环分隔区域填充
    splitArea: {
      show: false
    },
    // 坐标轴射线
    axisLine: {
      show: true,
      lineStyle: {
        width: chartToken.radarAxisLineWidth,
        color: chartToken.lineColorTp
      }
    },
    // 坐标轴圆环分隔线
    splitLine: {
      lineStyle: {
        width: chartToken.radarSplitLineWidth,
        color: chartToken.lineColorTp
      }
    },
    indicator: [{ name: '', max }]
  }
  return redPointerRadar
}

function handleRedPointerSeries(index, theme, dataValue, seriesName, noMarkLine) {
  const alarmColor = chartToken.errorColor
  const redPointerSeries = {
    nmae: 'threshold',
    type: 'radar',
    // 拐点大小
    symbolSize: chartToken.symbolSizeLG,
    silent: true,
    z: 99,
    // 使用的雷达坐标系的索引
    radarIndex: 2 + index,
    // 拐点的样式
    itemStyle: {
      color: alarmColor,
      borderColor: chartToken.borderColor,
      borderWidth: chartToken.border,
      shadowBlur: 15,
      shadowColor: alarmColor
    },
    // 隐藏标示线
    lineStyle: {
      width: chartToken.lineWidthZero,
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
  return redPointerSeries
}

// 计算出大于等于阈值的数据
function getExceededMarkLineValue(data, markLineValue, isThreshold) {
  const obj = []
  const names = Object.keys(data)
  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    const keys = Object.keys(data[name])
    for (let j = 0; j < keys.length; j++) {
      const key = keys[j]
      if (isThreshold) {
        const cusMark = markLineValue?.threshold[key]
        if (cusMark && data[name][key] >= cusMark) {
          obj.push({
            seriesName: name,
            dataName: key,
            dataValue: data[name][key]
          })
        }
      } else {
        if (data[name][key] >= markLineValue) {
          obj.push({
            seriesName: name,
            dataName: key,
            dataValue: data[name][key]
          })
        }
      }
    }
  }

  return obj
}

/**
 * 根据参数计算出圆盘图的半径
 */
export function setMarkLineSeries(baseOption, iChartOption, radarKeys, isCustomMaxVal) {
  // 阈值
  const markLineValue = iChartOption.markLine
  if (markLineValue !== undefined) {
    // 主题
    const theme = iChartOption.theme
    // 数据
    const data = iChartOption.data
    const isThreshold = !!(isObject(markLineValue) && markLineValue?.threshold)
    // 超过阈值的数据
    const exceeded = getExceededMarkLineValue(data, markLineValue, isThreshold)
    // 图表位置
    const chartPosition = iChartOption.chartPosition || iChartOption.position || {}
    // 雷达图坐标系最外圈代表的数值
    const radarMax = iChartOption.radarMax
    exceeded.forEach((item, index) => {
      const seriesName = item.seriesName
      const dataName = item.dataName
      const dataNameIndex = radarKeys.indexOf(dataName)
      const dataValue = item.dataValue
      // 需要高亮红点的坐标系,一个红点对应一个坐标系，需要去修改相应的数据
      const redPointerRadar = handleRedPointerRadar(
        chartPosition,
        radarKeys,
        dataNameIndex,
        radarMax,
        dataName,
        baseOption
      )
      // 红点数据
      const redPointerSeries = handleRedPointerSeries(index, theme, dataValue, seriesName, isThreshold)
      baseOption.radar.push(redPointerRadar)
      baseOption.series.push(redPointerSeries)
    })
  }
}
