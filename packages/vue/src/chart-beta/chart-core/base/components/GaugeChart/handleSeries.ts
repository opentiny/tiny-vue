import { codeToHex, codeToRGB } from '../../util/color'
import cloneDeep from '../../util/cloneDeep'
import Theme from '../../feature/theme'

export const emptySeriesUnit = {
  type: 'gauge',
  startAngle: 0,
  endAngle: 0,
  center: ['50%', '50%'],
  radius: '50%',
  splitNumber: 2,
  axisLine: { show: false },
  axisLabel: { show: false },
  splitLine: { show: false },
  itemStyle: { show: false },
  axisTick: { show: false },
  pointer: { show: false },
  detail: { show: false },
  title: { show: false },
  data: []
}

export const seriesInit = {
  name: '',
  type: 'gauge',
  // 仪表盘轨道底色
  axisLine: {
    roundCap: true,
    lineStyle: {
      width: 10
    }
  },
  // 仪表盘进度条
  progress: {
    show: true,
    roundCap: true,
    width: 10
  },
  // 大刻度数量
  splitNumber: 4,
  // 大刻度线样式
  splitLine: {
    distance: 0,
    length: 10,
    lineStyle: {
      width: 2
    }
  },
  // 大刻度数值
  axisLabel: {
    distance: 16,
    fontSize: 14,
    color: 'red'
  },
  // 小刻度线样式
  axisTick: {
    distance: 0,
    length: 10,
    lineStyle: {
      color: 'transparent',
      width: 2
    }
  },
  // 指针样式
  pointer: {
    show: false,
    icon: 'path://M511.999488 819.413462 72.8374 204.586538 951.1626 204.586538Z',
    length: '10%',
    width: 16,
    offsetCenter: [0, '-108%']
  },
  title: {
    show: false
  },
  detail: {
    valueAnimation: true
  },
  data: []
}

// 设置刻度线现实与否/刻度线数量
function handleSplitLine(iChartOption, seriesUnit) {
  if (iChartOption.splitLine) {
    if (iChartOption.splitLine.show !== undefined) {
      seriesUnit.splitLine.show = iChartOption.splitLine.show
    } else {
      seriesUnit.splitLine.show = true
    }
  } else {
    seriesUnit.splitLine.show = true
  }
  if (seriesUnit.splitLine.show) {
    seriesUnit.splitNumber = iChartOption.splitNumber || 4
  } else {
    seriesUnit.splitNumber = -1
  }
  if (iChartOption.itemStyle) {
    const { lineStyle, width } = iChartOption.itemStyle
    seriesUnit.splitLine.length = (lineStyle && lineStyle.length) || width || 10
    seriesUnit.splitLine.distance = width ? width * -1 : -3
  } else {
    seriesUnit.splitLine.length = 10
    seriesUnit.splitLine.distance = -3
  }
  if (iChartOption.itemStyle && iChartOption.itemStyle.lineStyle) {
    if (iChartOption.itemStyle.lineStyle.color) {
      seriesUnit.splitLine.lineStyle.color = iChartOption.itemStyle.lineStyle.color
    } else {
      seriesUnit.splitLine.lineStyle.color = Theme.color.base.subfont
    }
    seriesUnit.splitLine.lineStyle.width = iChartOption.itemStyle.lineStyle.width || 4
  }
}

// 根据主题设置刻度线的颜色
function handleTheme(iChartOption) {
  const { orbitalColor } = iChartOption
  const colorBase = Theme.color.base
  seriesInit.axisLine.lineStyle.color = [[1, orbitalColor || colorBase.subg]]
  seriesInit.splitLine.lineStyle.color = colorBase.axis
  seriesInit.axisLabel.color = colorBase.axislabel
}

// 配置仪表盘中心文本
function handleDetail(seriesUnit, text, data) {
  const colorBase = Theme.color.base
  seriesUnit.detail.formatter =
    text.formatter ||
    function (value) {
      return `{value|${value}}\n{name|${data[0].name}}`
    }
  seriesUnit.detail.offsetCenter = text.offset || [0, 0]
  seriesUnit.detail.rich = text.formatterStyle || {
    value: {
      fontSize: 60,
      fontWeight: 'bolder',
      color: colorBase.font
    },
    name: {
      fontSize: 14,
      color: colorBase.font,
      padding: [24, 0, 0, 0]
    }
  }
}

// 设置仪表盘进度条宽度
function handleProgress(seriesUnit, iChartOption, data) {
  const { itemStyle } = iChartOption
  seriesUnit.progress.width = itemStyle ? (itemStyle.width ? itemStyle.width : 10) : 10
  if (data && data.length !== 0 && data[0].value === 0) {
    seriesUnit.progress.roundCap = false
  }
}

// 设置仪表盘进度条宽度
function handleAxisLine(seriesUnit, iChartOption) {
  const { itemStyle } = iChartOption
  seriesUnit.axisLine.lineStyle.width = itemStyle ? (itemStyle.width ? itemStyle.width : 10) : 10
}

// 轨道颜色分块
function setSplitColor(series, splitColor) {
  series.axisLine.lineStyle.color = splitColor
  series.axisLine.roundCap = false
  series.progress.show = false
  series.pointer.itemStyle = { color: 'auto' }
}

// 给series配置progress渐变色，并考虑纯色情况
function setGradientColor(series, gradientColor) {
  const linearColor = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1 / (series.data[0].value / series.max),
    y2: 0,
    colorStops: gradientColor.map((item, index) => {
      return {
        offset: index === 0 ? 0 : index / (gradientColor.length - 1),
        color: item
      }
    }),
    global: false
  }
  // 考虑纯色情况
  if (linearColor.colorStops.length === 1) {
    linearColor.colorStops.push({
      offset: 1,
      color: gradientColor[0]
    })
  }
  series.progress.itemStyle = { color: linearColor }
  series.pointer.itemStyle = { color: linearColor }
}

// 轨道颜色分块外环光晕效果
function setOuterHalo(seriesHalo, splitColor, theme) {
  const temp = cloneDeep(emptySeriesUnit)
  const outerGaugeHalo = cloneDeep(temp)
  outerGaugeHalo.startAngle = seriesHalo.startAngle
  outerGaugeHalo.endAngle = seriesHalo.endAngle
  outerGaugeHalo.center = seriesHalo.center
  const distance = seriesHalo.pointer.lineDistance.slice(0, seriesHalo.pointer.lineDistance.length - 1) - 0
  outerGaugeHalo.radius = `${parseFloat(seriesHalo.radius) + distance}%`
  outerGaugeHalo.axisLine = {
    lineStyle: {
      width: 1,
      opacity: 0.3,
      color: splitColor
    }
  }
  outerGaugeHalo.splitNumber = splitColor.length
  outerGaugeHalo.splitLine = {
    // 不同颜色之间的中缝
    distance: 8,
    length: 10,
    lineStyle: {
      width: 2,
      color: ''
    }
  }
  // 2022/7/18 暂时把分割颜色屏蔽掉 darkColor、lightColor
  switch (theme) {
    case 'dark':
      outerGaugeHalo.splitLine.lineStyle.color = 'transparent'
      break
    default:
      outerGaugeHalo.splitLine.lineStyle.color = 'transparent'
      break
  }
  return outerGaugeHalo
}

// progress渐变色外环光晕效果
function setProgressOuterHalo(series, gradientColor, mask, iChartOption) {
  const temp = cloneDeep(emptySeriesUnit)
  const linearColor = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: gradientColor.map((item, index) => {
      return {
        offset: index === 0 ? 0 : index / (gradientColor.length - 1),
        color: item
      }
    }),
    global: false
  }
  const outerGauge = cloneDeep(temp)
  outerGauge.startAngle = series.startAngle
  outerGauge.endAngle = series.endAngle
  // 是否开启蒙层及角度
  if (mask && mask.show) {
    outerGauge.startAngle = series.startAngle - 5
    outerGauge.endAngle = series.endAngle + 5
  }
  outerGauge.center = series.center
  const distance = series.pointer.lineDistance.slice(0, series.pointer.lineDistance.length - 1) - 0
  outerGauge.radius = `${parseFloat(series.radius) + distance}%`
  outerGauge.axisLine = {
    lineStyle: {
      width: 1,
      opacity: 0.3,
      color: [[1, linearColor]]
    }
  }
  // 开启蒙层outerGauge原先的光晕线变为蒙层区域，配置样式
  if (mask && mask.show) {
    const { pointerStyle } = iChartOption
    outerGauge.axisLine = {
      lineStyle: {
        width: mask.width || ((pointerStyle && pointerStyle.lineDistance) || '5%').replace('%', '') * 2.5,
        opacity: 0.1,
        color: [[1, linearColor]]
      }
    }
  }
  return outerGauge
}

// 蒙层开启后，配置高亮光晕线
function setHightLightGauge(series, iChartOption) {
  const { gradientColor, mask } = iChartOption
  // 是否开启蒙层
  if (mask && mask.show) {
    const { pointerStyle } = iChartOption
    const outerGauge = cloneDeep(emptySeriesUnit)
    outerGauge.startAngle = series.startAngle - 5
    outerGauge.endAngle = series.endAngle + 5
    outerGauge.center = series.center
    const seriesRadius = series.radius.replace('%', '')
    const pointerRadius = (pointerStyle && pointerStyle.lineDistance) || '5%'
    outerGauge.radius = `${seriesRadius - 0 + (pointerRadius.replace('%', '') - 0)}%`
    if (mask.hightLight !== false) {
      mask.hightLight = true
    }
    // 是否开启蒙层高亮
    if (mask && mask.hightLight) {
      const linearColor = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: gradientColor.map((item, index) => {
          return {
            offset: index === 0 ? 0 : index / (gradientColor.length - 1),
            color: codeToRGB(codeToHex(item), 0.5)
          }
        }),
        global: false
      }
      const max = iChartOption.max || 100
      outerGauge.axisLine = {
        lineStyle: {
          width: 1,
          opacity: 1,
          color: [
            // [0.28, linearColor],
            [(iChartOption.data[0].value - (5 * max) / 100) / max, codeToRGB(codeToHex(gradientColor[0]), 0.5)],
            [(iChartOption.data[0].value + (5 * max) / 100) / max, codeToRGB(codeToHex(gradientColor[0]), 1)],
            [1, linearColor]
          ]
        }
      }
    } else {
      const linearColor = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: gradientColor.map((item, index) => {
          return {
            offset: index === 0 ? 0 : index / (gradientColor.length - 1),
            color: item
          }
        }),
        global: false
      }
      outerGauge.axisLine = {
        lineStyle: {
          width: 1,
          opacity: 0.3,
          color: [[1, linearColor]]
        }
      }
    }
    return outerGauge
  }
}

// 添加一个空series，使用该空series的pointer来作为阈值线的红线
function setMarkLine(series, markLine, marklineColor) {
  const temp = cloneDeep(emptySeriesUnit)
  const markGauge = cloneDeep(temp)
  markGauge.name = 'markLine'
  markGauge.min = series.min
  markGauge.max = series.max
  markGauge.startAngle = series.startAngle
  markGauge.endAngle = series.endAngle
  markGauge.center = series.center
  markGauge.radius = series.radius
  markGauge.animation = false
  markGauge.pointer = {
    icon: 'path://M0 0 L30 0 L30 100 L0 100 Z',
    width: 3,
    length: 15,
    offsetCenter: [0, '-86%'],
    itemStyle: {
      color: marklineColor
    }
  }
  markGauge.data = [{ value: markLine }]
  return markGauge
}

function handleOther(iChartOption, seriesUnit, series, theme, data) {
  const colorState = Theme.color.state
  const marklineColor = colorState.error
  if (iChartOption.splitColor && iChartOption.splitColor.length > 0) {
    setSplitColor(seriesUnit, iChartOption.splitColor)
  } else if (iChartOption.gradientColor && iChartOption.gradientColor.length > 0) {
    setGradientColor(seriesUnit, iChartOption.gradientColor)
  }
  // 若有阈值线，超过阈值线时为告警红色
  if (iChartOption.markLine && data[0].value >= iChartOption.markLine) {
    seriesUnit.pointer.itemStyle = { color: marklineColor }
    seriesUnit.progress.itemStyle = { color: marklineColor }
  }
  series.push(seriesUnit)
  // 轨道颜色分块、progress外环光晕效果
  if (iChartOption.splitColor && iChartOption.splitColor.length > 0) {
    const outerGauge = setOuterHalo(seriesUnit, iChartOption.splitColor, theme)
    // 是否展示外层光晕
    if (iChartOption.itemStyle && iChartOption.itemStyle.outerGauge) {
      if (iChartOption.itemStyle.outerGauge.show === false) {
        outerGauge.axisLine.lineStyle.width = 0
        outerGauge.axisLine.lineStyle.opacity = 0
      }
    }
    series.push(outerGauge)
  } else if (iChartOption.gradientColor && iChartOption.gradientColor.length > 1) {
    const outerGauge = setProgressOuterHalo(seriesUnit, iChartOption.gradientColor, iChartOption.mask, iChartOption)
    // 是否展示外层光晕
    if (iChartOption.itemStyle && iChartOption.itemStyle.outerGauge) {
      if (!iChartOption.itemStyle.outerGauge.show) {
        outerGauge.axisLine.lineStyle.width = 0
        outerGauge.axisLine.lineStyle.opacity = 0
      }
    }
    series.push(outerGauge)
    // 蒙层及高亮
    const hightLightGauge = setHightLightGauge(seriesUnit, iChartOption)
    series.push(hightLightGauge)
  }
  // 阈值线
  if (iChartOption.markLine) {
    const markGauge = setMarkLine(seriesUnit, iChartOption.markLine, marklineColor)
    series.push(markGauge)
  }
}

/**
 * 组装echarts所需要的series
 * @param {主题} theme
 * @param {数据} data
 * @returns
 */
function handleSeries(iChartOption) {
  const seriesName = iChartOption.seriesName
  const theme = iChartOption.theme
  const data = iChartOption.data
  const text = iChartOption.text || {}
  const chartPosition = iChartOption.position || iChartOption.chartPosition || {}
  const axisLabelStyle = iChartOption.axisLabelStyle || {}
  const { pointerStyle, pointer, min, max, startAngle, endAngle, silent } = iChartOption
  // 更改仪表盘轨道底色
  handleTheme(iChartOption)
  // 更换刻度文本颜色、字号、字体宽度等样式
  if (axisLabelStyle.color) {
    seriesInit.axisLabel.color = axisLabelStyle.color
  } else {
    seriesInit.axisLabel.color = Theme.color.base.axislabel
  }
  seriesInit.axisLabel.distance = axisLabelStyle.distance || 16
  seriesInit.axisLabel.fontWeight = axisLabelStyle.fontWeight || 400
  seriesInit.axisLabel.fontSize = axisLabelStyle.fontSize || 14
  // 组装数据
  const series = []
  const seriesUnit = cloneDeep(seriesInit)
  seriesUnit.name = seriesName || iChartOption.name
  seriesUnit.data = data
  // 控制刻度线及刻度文本是否展示;大刻度数量以及判断刻度文本是否显示
  handleSplitLine(iChartOption, seriesUnit)
  // 中间文本
  handleDetail(seriesUnit, text, data)
  // 进度条宽度
  handleProgress(seriesUnit, iChartOption, data)
  handleAxisLine(seriesUnit, iChartOption)
  // 指针
  seriesUnit.pointer.show = pointer || false
  seriesUnit.pointer.width = (pointerStyle && pointerStyle.width) || 16
  seriesUnit.pointer.length = (pointerStyle && pointerStyle.length) || '10%'
  seriesUnit.pointer.offsetCenter[1] = (pointerStyle && pointerStyle.pointerDistance) || '-108%'
  seriesUnit.pointer.lineDistance = (pointerStyle && pointerStyle.lineDistance) || '5%'
  // 位置
  seriesUnit.center = chartPosition.center || ['50%', '50%']
  // 半径
  seriesUnit.radius = chartPosition.radius || '70%'
  // 最小值
  seriesUnit.min = min || 0
  // 最大值
  seriesUnit.max = max || 100
  // 开始角度
  seriesUnit.startAngle = startAngle === undefined ? 225 : startAngle
  // 结束角度
  seriesUnit.endAngle = endAngle === undefined ? -45 : endAngle
  // 轨道颜色分块、progress渐变只能二选一
  handleOther(iChartOption, seriesUnit, series, theme, data)
  // 是否关闭hover态的效果，默认为false
  series[0].silent = silent || false
  return series
}

export default handleSeries
