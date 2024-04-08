import cloneDeep from '../../util/cloneDeep'
import defendXSS from '../../util/defendXSS'
import chartToken from './chartToken'

// 给图例和x轴赋值
export function handleData(baseOpt, legendData, xAxisData) {
  if (!baseOpt.legend.data) {
    baseOpt.legend.data = legendData
  }
  baseOpt.xAxis.forEach((item) => {
    item.data = xAxisData
  })
}

export function onlyOnePoint(baseOption) {
  baseOption.series.forEach((item) => {
    if (item.data.length === 1) {
      item.showSymbol = true
    }
  })
}

// 针对离散数据, 创建同名Series, 显示离散数据的单个点
export function discrete(iChartOption, baseOption) {
  if (iChartOption.discrete) {
    // 创建同名Series
    baseOption.series.forEach((series) => {
      const newSeries = cloneDeep(series)
      newSeries.symbol = 'circle'
      newSeries.symbolSize = chartToken.symbolSizeSM
      newSeries.itemStyle.borderWidth = chartToken.borderZero
      newSeries.showSymbol = true
      newSeries.showAllSymbol = true
      newSeries.emphasis = {
        itemStyle: {
          opacity: 0
        }
      }
      const discreteData = []
      for (let index = 0; index < newSeries.data.length; index++) {
        const pre = newSeries.data[index - 1]
        const next = newSeries.data[index]
        const cur = newSeries.data[index + 1]
        if (!isNullValue(pre) || !isNullValue(cur)) {
          discreteData.push(null)
        } else {
          discreteData.push(next)
        }
      }
      newSeries.data = discreteData
      baseOption.series.push(newSeries)
    })
    // 覆盖tipHtml，过滤同名Series
    const dataLength = baseOption.legend.data.length
    const tipFormatter = baseOption.tooltip.formatter
    baseOption.tooltip.formatter = (params, ticket, callback) => {
      if (tipFormatter) {
        return tipFormatter(params.slice(0, dataLength), ticket, callback)
      } else {
        return defaultFormatter(params, dataLength)
      }
    }
  }
}

function isNullValue(value) {
  return value === '' || value === undefined || value === null
}

export function defaultFormatter(params, dataLength) {
  let htmlString = ''
  params.forEach((item, index) => {
    // 只显示实线数据的tooltip
    if (index < dataLength) {
      if (index === 0) {
        htmlString += `<div style="margin-bottom:4px;">${defendXSS(item.name)}</div>`
      }
      htmlString += `<div>
                              <span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:${defendXSS(
                                item.color
                              )};"></span>
                              <span style="margin-left:5px;>
                                  <span style="display:inline-block; margin-right:8px;min-width:60px;">${defendXSS(
                                    item.seriesName
                                  )}</span> 
                                  <span style="font-weight:bold">${defendXSS(item.value)}</span>
                              </span>
                          </div>`
    }
  })
  return htmlString
}
