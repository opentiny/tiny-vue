import { isArray, isObject } from '../../util/type'
import cloneDeep from '../../util/cloneDeep'
import defendXSS from '../../util/defendXSS'
import merge from '../../util/merge'
import chartToken from './chartToken'

/**
 * 从数据中拿出雷达的所有维度
 */
export function getRadarKeys(data) {
  const radarKeys = []
  const seriesNames = Object.keys(data)
  for (let i = 0; i < seriesNames.length; i++) {
    const seriesName = seriesNames[i]
    const seriesData = data[seriesName]
    const dataNames = Object.keys(seriesData)
    for (let j = 0; j < dataNames.length; j++) {
      const dataName = dataNames[j]
      if (!radarKeys.includes(dataName)) {
        radarKeys.push(dataName)
      }
    }
  }
  return radarKeys
}

function handleFormatter(formatter, tooltip, radarKeys, markLine, alarmColor) {
  const isThreshold = !!(isObject(markLine) && markLine?.threshold)
  if (formatter) {
    tooltip.formatter = (params, ticket, callback) => {
      return formatter(params, radarKeys, ticket, callback)
    }
  } else {
    tooltip.formatter = (params) => {
      const data = params.data
      const dataName = data.name
      let htmlString = `<div style="margin-bottom:4px;">${defendXSS(dataName)}</div>`
      if (markLine) {
        data.value.forEach((item, index) => {
          let color
          if (isThreshold) {
            const markVal = markLine.threshold[radarKeys[index]]
            if (markVal) {
              color = item >= markVal ? alarmColor : params.color
            } else {
              color = params.color
            }
          } else {
            color = item >= markLine ? alarmColor : params.color
          }
          htmlString += `<div style="margin-bottom:4px;">
          <span style="display:inline-block;width:8px;
          height:8px;margin-right:8px;border-radius:5px;
          background-color:${defendXSS(color)};"></span>
          <span style="display:inline-block;margin-right:8px;
          min-width:60px;font-size:12px">${defendXSS(radarKeys[index])}</span>
          <span style="font-size:14px">${defendXSS(item || '-')}</span>
          </div>`
        })
      } else {
        data.value.forEach((item, index) => {
          htmlString += `<div style="margin-bottom:4px;">
          <span style="display:inline-block;width:8px;
          height:8px;margin-right:8px;border-radius:5px;background-color:${defendXSS(params.color)};"></span>
          <span style="display:inline-block;margin-right:8px;
          min-width:60px;font-size:12px">${defendXSS(radarKeys[index])}</span>
          <span style="font-size:14px">${defendXSS(item || '-')}</span>
    </div>`
        })
      }
      return htmlString
    }
  }
}

/**
 * 配置鼠标悬浮提示框
 */
export function setTooltip(baseOption, iChartOption, radarKeys) {
  const formatter = iChartOption.tipHtml
  const markLine = iChartOption.markLine
  // 阈值告警色
  const alarmColor = chartToken.errorColor
  handleFormatter(formatter, baseOption.tooltip, radarKeys, markLine, alarmColor)
}

/**
 * 配置图表图例
 */

const splitArea = {
  show: false
}
function handleAxisLine(colorBase) {
  const axisLine = {
    lineStyle: {
      color: chartToken.radiusAxisLineColor,
      width: chartToken.radarAxisLineWidth,
      type: chartToken.radarAxisLineType
    }
  }
  return axisLine
}

function handleAxisLabel(radarMark) {
  const axisLabel = {
    show: radarMark !== false,
    margin: -20
  }
  return axisLabel
}

function handleSplitLine(colorBase) {
  const splitLine = {
    lineStyle: {
      color: chartToken.radarSplitLineColor,
      width: chartToken.radarSplitLineWidth,
      type: chartToken.radarSplitLineType
    }
  }
  return splitLine
}
function handleRich(alarmColor, colorBase) {
  const rich = {
    a: {
      // 指示器name的样式
      color: chartToken.radarAxisLabelColor,
      align: 'center',
      fontSize: chartToken.fontSize,
      lineHeight: chartToken.lineHeightSM
    },
    b: {
      // 数据value样式
      color: chartToken.radarAxisLabelColor,
      fontSize: chartToken.fontSize,
      align: 'center',
      lineHeight: chartToken.lineHeight,
      padding: [0, 0, 4, 0]
    },
    c: {
      // 高亮数据value样式
      color: alarmColor,
      fontSize: chartToken.fontSize,
      align: 'center',
      lineHeight: chartToken.lineHeight,
      padding: [0, 0, 4, 0]
    }
  }
  return rich
}

function handleRaderOption({
  chartPosition,
  axisLine,
  axisLabel,
  splitArea,
  splitLine,
  indicator,
  dataLength,
  rich,
  markLineValue,
  data,
  unit
}) {
  const radar = {
    // 雷达坐标系位置
    center: chartPosition.center || ['50%', '50%'],
    // 雷达坐标系半径
    radius: chartPosition.radius || '50%',
    // 指示器名称与轴的距离
    axisNameGap: 15,
    // 指示器轴的分割段数
    splitNumber: 4,
    shape: 'circle',
    // 坐标轴的标签是否响应和触发鼠标事件
    triggerEvent: false,
    // 坐标轴射线
    axisLine,
    // 坐标轴射线的刻度,只显示一条射线的刻度,其他射线的刻度需要在指示器数据indicator中每项单独配置axisLabel: { show: false }
    axisLabel,
    // 坐标轴圆环分隔区域填充
    splitArea,
    // 坐标轴圆环分隔线
    splitLine,
    // 坐标轴数据
    indicator,
    // 指示器名称样式设置
    axisName: {
      rich,
      formatter: (indicatorName) => {
        // 只有一组数据时，显示“名称 + 数值”
        if (dataLength === 1) {
          const d = data[Object.keys(data)[0]]
          const v = d[indicatorName]
          if (markLineValue && v >= markLineValue) {
            return `{c|${v}}{c|${unit}}\n{a|${indicatorName}}`
          } else {
            return `{b|${v}}{b|${unit}}\n{a|${indicatorName}}`
          }
        } else if (dataLength > 1) {
          return `{a|${indicatorName}}`
        }
      }
    }
  }
  return radar
}

function handleUnit(iChartOption) {
  if (iChartOption.unit || iChartOption.unit === '') return iChartOption.unit
  return '%'
}

function handleRader(iChartOption, indicator, dataLength, data) {
  const chartPosition = iChartOption.chartPosition || iChartOption.position || {}
  const { radar } = iChartOption
  // 阈值告警色
  const alarmColor = chartToken.errorColor
  const axisLine = handleAxisLine()
  const axisLabel = handleAxisLabel(iChartOption.radarMark)
  const splitLine = handleSplitLine()
  const rich = handleRich(alarmColor)
  const markLineValue = iChartOption.markLine
  const unit = handleUnit(iChartOption)
  const inerRadar = handleRaderOption({
    iChartOption,
    chartPosition,
    axisLine,
    axisLabel,
    splitArea,
    splitLine,
    indicator,
    dataLength,
    markLineValue,
    rich,
    data,
    unit
  })

  if (radar) {
    merge(inerRadar, radar)
  }
  // 坐标轴的相关配置
  if (radar?.indicator) {
    const mixinIndicator = inerRadar.indicator.map((i) => {
      const coveredIndicator = radar.indicator.find((indicate) => indicate.name === i.name)
      return coveredIndicator || i
    })
    inerRadar.indicator = mixinIndicator
  }

  return inerRadar
}

/**
 * 配置雷达地图
 */
export function setRadar(radarKeys, iChartOption, isCustomMaxVal) {
  // 数据
  const data = iChartOption.data
  // 数据key值
  const dataLength = Object.keys(data).length
  // 雷达图坐标系最外圈代表的数值
  const radarMax = iChartOption.radarMax
  const isRadarMaxArr = isArray(radarMax)
  // 雷达图坐标系数据
  const indicator = radarKeys.map((name, index) => {
    if (!isRadarMaxArr) {
      // 非数组的形式默认所有维度共享一个最大值，只显示一个维度的刻度
      if (index === 0) {
        return { name, max: radarMax }
      } else {
        return { name, max: radarMax, axisLabel: { show: false } }
      }
    } else {
      const { radarMark } = iChartOption
      const inerMax = getRadarMax(data, iChartOption, isCustomMaxVal)
      const isName = radarMax.find((item) => item.name === name)
      const cusIndicator = isName || {}
      return { name, max: inerMax, axisLabel: { show: !!radarMark }, ...cusIndicator }
    }
  })
  const radar = handleRader(iChartOption, indicator, dataLength, data)
  return radar
}
// 阈值线的专用radar
const marklineRadar = {
  center: undefined,
  // 阈值线的radius应该是一个百分比，或者是实际的像素值
  radius: undefined,
  splitNumber: 1,
  shape: 'circle',
  axisName: {
    show: false
  },
  axisLine: {
    show: false
  },
  axisLabel: {
    show: false
  },
  splitArea: {
    show: false
  },
  splitLine: {
    lineStyle: {
      width: chartToken.radarSplitLineWidth,
      color: undefined,
      type: 'dashed'
    }
  },
  indicator: undefined
}

// 处理单独配置的阈值线的series
function handleCusMarLineSer(baseOption, markLine, radarKeys) {
  const { threshold } = markLine
  const alarmColor = chartToken.errorColor
  const thresholdData = radarKeys.map((item) => {
    const data = threshold[item] || 0
    return data
  })
  const thresholdSeries = {
    type: 'radar',
    symbol: 'none',
    // 拐点大小
    symbolSize: chartToken.symbolSize,
    silent: true,
    // 使用的雷达坐标系的索引
    radarIndex: 1,
    areaStyle: {
      color: chartToken.areaStyleColor
    },
    lineStyle: {
      color: alarmColor,
      type: 'dashed'
    },
    data: []
  }
  thresholdSeries.data = [{ name: '', value: thresholdData }]
  baseOption.series.push(thresholdSeries)
}

/**
 * 配置阈值线
 */
export function setMarkLine(baseOption, iChartOption, radarKeys) {
  const { markLine } = iChartOption
  const chartPosition = iChartOption.chartPosition || iChartOption.position || {}
  // 阈值线告警色
  const alarmColor = chartToken.errorColor
  // 雷达图半径
  const radius = chartPosition.radius || '50%'
  // 雷达图有中心文本的情况下radius需要写成数组
  const radiusIsArray = isArray(radius)
  // 雷达图最大值，可能为undefined
  const radarMax = iChartOption.radarMax
  // 阈值
  let markLineValue = iChartOption.markLine
  if (markLineValue !== undefined) {
    const markRadar = cloneDeep(marklineRadar)
    markRadar.center = chartPosition.center || ['50%', '50%']
    markRadar.radius = chartPosition.radius || '50%'
    // 判断markLine是否是
    if (isObject(markLine) && markLine?.threshold) {
      markRadar.indicator = cloneDeep(baseOption.radar[0].indicator)
      handleCusMarLineSer(baseOption, markLine, radarKeys)
    } else {
      markLineValue = parseFloat(markLineValue)
      let marklineRadius
      if (radiusIsArray) {
        const disRadius = parseFloat(radius[1]) - parseFloat(radius[0])
        marklineRadius =
          disRadius * (markLineValue / radarMax) + parseFloat(radius[0]) + (radius.toString().includes('%') ? '%' : '')
      } else {
        marklineRadius = (markLineValue / radarMax) * parseFloat(radius) + (radius.toString().includes('%') ? '%' : '')
      }
      // 阈值线
      markRadar.radius = marklineRadius
      markRadar.splitLine.lineStyle.color = alarmColor
      markRadar.indicator = new Array(radarKeys.length).fill({ name: '' })
    }
    baseOption.radar.push(markRadar)
  }
}

function handleCusMax(iChartOpt) {
  let max = 0
  const { radarMax, radar } = iChartOpt
  if (isArray(radarMax)) {
    radarMax.forEach((item) => {
      if (item.max > max) max = item.max
    })
  }
  if (radar?.indicator) {
    radar.indicator.forEach((el) => {
      if (el.max > max) max = el.max
    })
  }
  return max
}

function findDataMax(keys, data) {
  let max
  for (let j = 0; j < keys.length; j++) {
    const key = keys[j]
    if (max === undefined) {
      max = data[key]
    }
    max = Math.max(max, data[key])
  }
  return max
}

/**
 * 或得雷达图数据的最大值
 */
export function getRadarMax(data, iChartOpt, isCustomMaxVal) {
  let max
  // 处理自定义max情况下的雷达图的默认最大值为未自定义的系列数据的最大值
  let cusDataName
  const { radarMax, radar } = iChartOpt
  if (isCustomMaxVal) {
    if (isArray(radarMax)) {
      cusDataName = radarMax.map((item) => item.name)
    }
    if (radar?.indicator) {
      cusDataName = radar.indicator.map((i) => i.name)
    }
  }
  const names = Object.keys(data)
  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    const keys = Object.keys(data[name])
    if (isCustomMaxVal) {
      // 过滤出自定义的系列
      const dataKeys = keys.filter((name) => {
        if (!cusDataName.includes(name)) return name
      })
      max = findDataMax(dataKeys, data[name])
      // 所有系列都自定义的情况，最大值取自定义里面的最大值
      if (max === undefined) {
        max = handleCusMax(iChartOpt)
      }
    } else {
      max = findDataMax(keys, data[name])
    }
  }
  return max
}
