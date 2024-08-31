import { BASICUNIT, CHARTTYPENAME, DOUBLEBASICOPTION } from './BaseOption'
import merge from '../../util/merge'
import defendXSS from '../../util/defendXSS'
import { isString, isArray } from '../../util/type'
import { handleBarColor } from './handleSeries'
import cloneDeep from '../../util/cloneDeep'
import chartToken from './chartToken'

function handleGridWidth(baseOpt, padding, chartInstance) {
  const right = padding[1]
  const left = padding[3]
  const containerWidth = chartInstance.getWidth()
  const isStrR = isString(right)
  const isStrL = isString(left)
  const isPtR = isStrR && right.includes('%')
  const isPtL = isStrL && left.includes('%')
  baseOpt.grid[0].left = left
  baseOpt.grid[1].right = right
  // 左右都是百分比
  if (isPtR && isPtL) {
    const width = (100 - parseInt(left) - parseInt(right)) / 2
    baseOpt.grid[0].width = `${width}%`
    baseOpt.grid[1].width = `${width}%`
    return
  }
  const leftPadding = isPtL ? (containerWidth * parseInt(left)) / 100 : parseInt(left)
  const rightPadding = isPtR ? (containerWidth * parseInt(right)) / 100 : parseInt(right)
  const horizontalPadding = leftPadding + rightPadding
  const gridWidth = (containerWidth - horizontalPadding) / 2
  baseOpt.grid[0].width = gridWidth
  baseOpt.grid[1].width = gridWidth
}

function handleDoubleGrid(baseOpt, iChartOpt, chartInstance) {
  const { padding } = iChartOpt
  baseOpt.grid[0].top = padding[0]
  baseOpt.grid[0].bottom = padding[2]
  baseOpt.grid[1].top = padding[0]
  baseOpt.grid[1].bottom = padding[2]
  handleGridWidth(baseOpt, padding, chartInstance)
}

function handleMergeOption(target, source) {
  target.forEach((item, index) => {
    merge(item, isArray(source) ? source[index] : source)
  })
}

function handleGrid(baseOpt, iChartOpt, doubleSide, chartInstance) {
  if (doubleSide) {
    baseOpt.grid = cloneDeep(DOUBLEBASICOPTION.grid)
    handleDoubleGrid(baseOpt, iChartOpt, chartInstance)
  } else {
    baseOpt.grid[0].containLabel = false
  }
  if (iChartOpt.grid) {
    handleMergeOption(baseOpt.grid, iChartOpt.grid)
  }
}

function handleYaxis(baseOpt, iChartOpt, dataSet, doubleSide) {
  if (doubleSide) {
    baseOpt.yAxis = cloneDeep(DOUBLEBASICOPTION.yAxis)
    baseOpt.yAxis[0].show = true
    baseOpt.yAxis[0].axisLine.lineStyle.color = chartToken.axisLineColor
    baseOpt.yAxis[0].data = dataSet.barName[0]
    baseOpt.yAxis[1].data = dataSet.barName[1]
  } else {
    baseOpt.yAxis[0].inverse = true
    baseOpt.yAxis[0].show = false
    baseOpt.yAxis[0].data = iChartOpt.name === CHARTTYPENAME.ProcessBarChart ? dataSet.barName : dataSet.seriesName
    baseOpt.yAxis[0].type = 'category'
  }
  if (iChartOpt.yAxis) {
    handleMergeOption(baseOpt.yAxis, iChartOpt.yAxis)
  }
}

function handleXaxis(baseOpt, doubleSide, iChartOpt) {
  if (doubleSide) {
    baseOpt.xAxis = cloneDeep(DOUBLEBASICOPTION.xAxis)
  } else {
    baseOpt.xAxis[0].show = false
    baseOpt.xAxis[0].type = 'value'
    // 保证图表能横向撑满容器
    baseOpt.xAxis[0].max = 'dataMax'
  }
  if (iChartOpt.xAxis) {
    handleMergeOption(baseOpt.xAxis, iChartOpt.xAxis)
  }
}

function handleDataZoom(baseOpt, initIchartOption) {
  if (initIchartOption.dataZoom) {
    handleMergeOption(baseOpt.dataZoom, initIchartOption.dataZoom)
  }
}

function handleLegend(baseOpt, dataSet, doubleSide, initIchartOption) {
  if (doubleSide) {
    baseOpt.legend.data = dataSet.seriesName.map((item) => {
      return {
        name: item
      }
    })
  } else {
    baseOpt.legend.show = false
  }
  if (initIchartOption.legend) {
    merge(baseOpt.legend, initIchartOption.legend)
  }
}

function handleTipValue(params, dataSet, doubleSide) {
  let value
  if (doubleSide) {
    value =
      dataSet.barData[Math.floor(params.seriesIndex / 2)][params.dataIndex]._initValue ||
      dataSet.barData[Math.floor(params.seriesIndex / 2)][params.dataIndex].value
  } else {
    value = dataSet.barData[params.dataIndex]._initValue || dataSet.barData[params.dataIndex].value
  }
  return value
}

function handleTipFormatter(baseOpt, iChartOpt, dataSet, doubleSide) {
  const { unit, tipHtml } = iChartOpt
  if (tipHtml) {
    baseOpt.tooltip.formatter = tipHtml
    return
  }
  const innerUnit = unit || unit === '' ? unit : BASICUNIT
  const isItemTooltip = baseOpt.tooltip.trigger === 'item'
  const ichartTooltipFormatter = iChartOpt?.tooltip?.formatter

  baseOpt.tooltip.formatter = (echartsParams) => {
    const params = isItemTooltip ? echartsParams : echartsParams[0]
    const name = params.name
    const seriesName = params.seriesName
    const value = handleTipValue(params, dataSet, doubleSide)
    const color =
      seriesName === 'background' || seriesName === 'backgroundLeft' || seriesName === 'backgroundRight'
        ? handleBarColor(params, iChartOpt, dataSet, doubleSide, true)
        : params.color
    const validData = value === null || value === undefined
    if (ichartTooltipFormatter) {
      const customParams = { ...params, value, color, data: value, unit: innerUnit }
      return ichartTooltipFormatter(customParams)
    }
    if (name === 'null') return
    const htmlString = `
                          <div>
                              <span style="display:inline-block;width:10px;height:10px;
                              border-radius:5px;background-color:${defendXSS(color)};">
                              </span>
                              <span style="margin-left:5px;">
                                  <span style="display:inline-block;margin-right:8px;min-width:80px;">${defendXSS(
                                    name
                                  )}</span> 
                                  <span style="font-weight:bold">${validData ? '--' : defendXSS(value)}${defendXSS(
                                    innerUnit
                                  )}</span>
                              </span>
                          </div>
                      `
    return htmlString
  }
}

function handleStackTipFormatter(baseOpt, iChartOpt) {
  baseOpt.tooltip.trigger = 'axis'
  const { tipHtml } = iChartOpt
  if (tipHtml) {
    baseOpt.tooltip.formatter = tipHtml
    return
  }
  baseOpt.tooltip.formatter = (params) => {
    const name = params[0].name
    if (name === 'null') return
    let htmlString = `<div style="margin-bottom:4px;">${defendXSS(name)}</div>`
    params.forEach((param, index) => {
      if (index > 1) {
        const value = param.data._initValue || param.data.value
        htmlString += `<div>
      <span style="display:inline-block;width:10px;height:10px;
      border-radius:5px;background-color:${defendXSS(param.color)};">
      </span>
      <span style="margin-left:5px;">
          <span style="display:inline-block;margin-right:8px;min-width:80px;">${defendXSS(param.seriesName)}</span>
          <span style="font-weight:bold">${defendXSS(value) || (defendXSS(value) === 0 ? defendXSS(value) : '--')}${
            defendXSS(iChartOpt.unit) || ''
          }</span>
      </span>
  </div>
`
      }
    })
    return htmlString
  }
}

function handleTooltip(baseOpt, iChartOpt, dataSet, doubleSide) {
  baseOpt.tooltip.axisPointer.type = 'none'
  baseOpt.tooltip.trigger = 'item'
  if (iChartOpt.tooltip) {
    merge(baseOpt.tooltip, iChartOpt.tooltip)
    // 当不显示tip的时候鼠标移动上去没有小手效果
    if (iChartOpt.tooltip.show === false) {
      baseOpt.series.forEach((item) => {
        item.cursor = 'auto'
      })
    }
  }
  if (iChartOpt.name === CHARTTYPENAME.ProcessBarChart) {
    handleTipFormatter(baseOpt, iChartOpt, dataSet, doubleSide)
  } else {
    handleStackTipFormatter(baseOpt, iChartOpt)
  }
}
export { handleGrid, handleYaxis, handleXaxis, handleDataZoom, handleLegend, handleTooltip }
