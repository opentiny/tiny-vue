import { changeRgbaOpacity } from '../../util/color'
import { SYMBOLCOLOR, CHARTTYPE } from './BaseOption'
import xAxis from '../../option/config/xAxis'
import yAxis from '../../option/config/yAxis'
import grid from '../../option/config/grid'
import tooltip from '../../option/config/tooltip'

import defendXSS from '../../util/defendXSS'
import chartToken from './chartToken'
import merge from '../../util/merge'
import { isArray } from '../../util/type'

function setHeatMapDeaultIchartOption(iChartOpt) {
  if (!iChartOpt.color) {
    iChartOpt.color = SYMBOLCOLOR[iChartOpt.type]
  }
  const padding = iChartOpt.chartPadding || iChartOpt.padding
  if (!padding && iChartOpt.type === CHARTTYPE[1]) {
    iChartOpt.padding = iChartOpt.handle ? [50, 120, 20, 20] : [50, 30, 20, 20]
  }
}

/**
 * 矩形热力图自定义提示框回调函数
 */
function rectangularFormatter(params) {
  const color = params.color
  const data = params.data
  const [x, y, z, name] = data
  let htmlString = `<div style="margin-bottom:4px;">
                                矩形热力图
                            </div>`
  htmlString += `<div style="margin-bottom:4px;">
                            <span style="display:inline-block;width:10px;height:10px;
                            margin-right:8px;border-style: solid;border-width:1px;
                            border-color:${defendXSS(changeRgbaOpacity(color, 1))};background-color:${defendXSS(
                              color
                            )};"></span>
                            <span>${defendXSS(name)}</span>
                        </div>`
  htmlString += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;min-width:60px;">x维度</span> 
                                <span>${defendXSS(x)}</span>
                            </div>`
  htmlString += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;min-width:60px;">y维度</span> 
                                <span>${defendXSS(y)}</span>
                            </div>`
  htmlString += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;
                                min-width:60px;">透明度维度</span> 
                                <span>${defendXSS(z)}</span>
                            </div>`
  return htmlString
}

/**
 * 日历热力图自定义提示框回调函数
 */
function calendarFormatter(params) {
  const color = params.color
  const data = params.data
  const name = params.name
  const [, , z] = data
  let htmlDom = `<div style="margin-bottom:4px;">
                                日历热力图
                            </div>`
  htmlDom += `<div style="margin-bottom:4px;">
                            <span style="display:inline-block;width:10px;
                            height:10px;margin-right:8px;border-style: solid;
                            border-width:1px;border-color:${defendXSS(
                              changeRgbaOpacity(color, 1)
                            )};background-color:${defendXSS(color)};"></span>
                            <span>${defendXSS(name)}</span>
                        </div>`
  htmlDom += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;
                                min-width:60px;">Value</span> 
                                <span>${defendXSS(z)}</span>
                            </div>`
  return htmlDom
}

/**
 * 蜂窝热力图自定义提示框回调函数
 */
function hexagonFormatter(params) {
  const color = params.color
  const data = params.data
  const [x, y, z, name] = data
  let html = `<div style="margin-bottom:4px;">
                            蜂窝热力图
                            </div>`
  html += `<div style="margin-bottom:4px;">
                            <span style="display:inline-block;width:10px;
                            height:10px;margin-right:8px;border-style: solid;
                            border-width:1px;border-color:${defendXSS(
                              changeRgbaOpacity(color, 1)
                            )};background-color:${defendXSS(color)};"></span>
                            <span>${defendXSS(name)}</span>
                        </div>`
  html += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;min-width:60px;">x维度</span> 
                                <span>${defendXSS(x)}</span>
                            </div>`
  html += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;min-width:60px;">y维度</span> 
                                <span>${defendXSS(y)}</span>
                            </div>`
  html += `
                            <div>
                                <span style="display:inline-block;margin-right:8px;min-width:60px;">颜色维度</span> 
                                <span>${defendXSS(z)}</span>
                            </div>`
  return html
}

function handleRectangularXaxis(xAxis) {
  xAxis.type = 'value'
  xAxis.axisLine.show = false
}

function handleCalendarXaxis(xAxis, data) {
  xAxis.data = data[0]
  xAxis.axisTick.show = false
  // 给文本设置左侧padding，使其不溢出
  xAxis.axisLabel.padding = [0, 0, 0, (10 * data[0][0].length) / 2]
}

function handleHexagonXaxis(xAxis, data) {
  xAxis.type = 'value'
  xAxis.axisLine.show = false
  xAxis.axisTick.show = false
  xAxis.axisLabel.show = false
  xAxis.min = 0
  xAxis.max = data[1]
}

// x轴的处理函数
const xAxisHandler = {
  RectangularHeatMapChart: handleRectangularXaxis,
  CalendarHeatMapChart: handleCalendarXaxis,
  HexagonHeatMapChart: handleHexagonXaxis
}

function handleXaxis(baseOpt, type, data, iChartOpt, initIchartOpt) {
  const basicXaxis = xAxis(iChartOpt)
  xAxisHandler[type](basicXaxis[0], data)
  baseOpt.xAxis = basicXaxis
  if (initIchartOpt.xAxis) {
    baseOpt.xAxis.forEach((item, index) => {
      merge(item, isArray(initIchartOpt.xAxis) ? initIchartOpt.xAxis[index] : initIchartOpt.xAxis)
    })
  }
}

function handleCalendarYaxis(yAxis, data) {
  yAxis.type = 'category'
  yAxis.data = data[1]
  yAxis.splitLine.show = false
  yAxis.axisLabel.margin = 20
  yAxis.axisLine = {
    show: true,
    lineStyle: {
      width: 2,
      color: chartToken.axisLineColor
    }
  }
}

function handleHexagonYaxis(yAxis, data) {
  yAxis.axisLine.show = false
  yAxis.splitLine.show = false
  yAxis.axisLabel.show = false
  yAxis.min = 0
  yAxis.max = data[2]
}

// y轴的处理函数
const yAxisHandler = {
  CalendarHeatMapChart: handleCalendarYaxis,
  HexagonHeatMapChart: handleHexagonYaxis
}

function handleYaxis(baseOpt, type, data, iChartOpt, initIchartOpt) {
  const basicYaxis = yAxis(baseOpt, iChartOpt)
  if (type !== CHARTTYPE[0]) {
    yAxisHandler[type](basicYaxis[0], data, iChartOpt)
  }
  baseOpt.yAxis = basicYaxis
  if (initIchartOpt.yAxis) {
    baseOpt.yAxis.forEach((item, index) => {
      merge(item, isArray(initIchartOpt.yAxis) ? initIchartOpt.yAxis[index] : initIchartOpt.yAxis)
    })
  }
}

function handleColor(baseOpt, iChartOpt) {
  baseOpt.color = iChartOpt.color
}

function handleGrid(baseOpt, iChartOpt) {
  const basicGrid = grid(iChartOpt)
  baseOpt.grid = basicGrid
}

const heatMapTooltipFormatter = {
  RectangularHeatMapChart: rectangularFormatter,
  CalendarHeatMapChart: calendarFormatter,
  HexagonHeatMapChart: hexagonFormatter
}

function handleTooltip(baseOpt, iChartOpt, type) {
  const basicTooltip = tooltip(iChartOpt)
  if (!iChartOpt.tipHtml && !iChartOpt?.tooltip?.formatter) {
    basicTooltip.formatter = heatMapTooltipFormatter[type]
  }
  basicTooltip.trigger = 'item'
  baseOpt.tooltip = basicTooltip
}

export { handleXaxis, setHeatMapDeaultIchartOption, handleYaxis, handleColor, handleGrid, handleTooltip }
