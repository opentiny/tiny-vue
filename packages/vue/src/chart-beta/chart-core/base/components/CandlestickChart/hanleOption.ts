import { isArray } from '../../util/type'
import cloneDeep from '../../util/cloneDeep'
import { VOLUMEGRID } from './BaseOption'
import merge from '../../util/merge'
import chartToken from './chartToken'
import { xkey } from '../../option/RectSys'

function handleData(iChartOpt) {
  const { data } = iChartOpt
  const xAxisDataName = xkey(iChartOpt)
  if (data && data.length !== 0) {
    const time = []
    const total = []
    data.forEach((item) => {
      time.push(item[xAxisDataName])
      const totalItem = [item.open, item.close, item.lowest, item.highest]
      if (item.volume) {
        totalItem.push(item.volume)
      }
      total.push(totalItem)
    })
    return {
      time,
      total
    }
  }
  return null
}

function handleAxis(baseOpt, data, volume) {
  const { xAxis } = baseOpt
  if (isArray(xAxis)) {
    const len = xAxis.length
    if (volume && len === 1) {
      const secXaxis = cloneDeep(xAxis[0])
      xAxis.push(secXaxis)
    }
    xAxis.forEach((x, xIndex) => {
      x.data = data.time
      x.boundaryGap = false
      x.axisLine.onZero = false
      if (xIndex === 1) {
        x.axisLabel.show = false
        x.axisTick.show = false
        x.gridIndex = 1
      }
    })
  } else {
    xAxis.data = data.time
    xAxis.boundaryGap = false
    xAxis.axisLine.onZero = false
  }

  const { yAxis } = baseOpt
  const lenY = yAxis.length
  if (volume && lenY === 1) {
    const secYaxis = cloneDeep(yAxis[0])
    yAxis.push(secYaxis)
  }
  yAxis.forEach((y, yIndex) => {
    y.scale = true
    if (yIndex === 1) {
      y.axisLabel.show = false
      y.splitLine.show = false
      y.gridIndex = 1
    }
  })
}

function handleDataZoom(baseOpt, iChartOpt) {
  const { dataZoom } = iChartOpt
  baseOpt.dataZoom[0].show = true
  baseOpt.dataZoom[0].xAxisIndex = [0, 1]
  baseOpt.dataZoom[0].bottom = '6%'
  if (dataZoom) {
    merge(baseOpt.dataZoom[0], dataZoom)
  }
}

function handleLegend(baseOpt, iChartOpt) {
  const { legend } = iChartOpt
  if (legend) {
    merge(baseOpt.legend, legend)
  }
}

function handleTooltip(baseOpt, iChartOpt) {
  const inerTooltip = { ...baseOpt.tooltip }
  delete inerTooltip.axisPointer
  inerTooltip.axisPointer = { type: 'cross' }
  baseOpt.tooltip = inerTooltip
  if (iChartOpt.tooltip) {
    merge(baseOpt.tooltip, iChartOpt.tooltip)
  }
}

function handleGrid(baseOpt, iChartOpt) {
  const { volume, grid } = iChartOpt
  // 用户没有自定义grid,并且需要去显示volume,使用默认值
  if (!grid && volume) {
    baseOpt.grid = cloneDeep(VOLUMEGRID)
  }
}

function handleAxisPointer(baseOpt) {
  const axisPointer = {
    link: [
      {
        xAxisIndex: 'all'
      }
    ],
    label: {
      color: chartToken.axisPointerLabelColor
    }
  }
  baseOpt.axisPointer = axisPointer
}

export { handleData, handleAxis, handleDataZoom, handleLegend, handleTooltip, handleGrid, handleAxisPointer }
