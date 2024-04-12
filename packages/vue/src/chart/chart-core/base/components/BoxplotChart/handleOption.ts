import defendXSS from '../../util/defendXSS'

/**
 * 设置图的方向
 */
export function setDirection(baseOption, direction) {
  if (direction && direction === 'horizontal') {
    const temp = baseOption.xAxis
    baseOption.xAxis = baseOption.yAxis
    baseOption.yAxis = temp
  }
}

function tooltipFormatter(params) {
  const { data, color, seriesType } = params
  const labels = ['下限', '下四分位数', '中位数', '上四分位数', '上限']
  let htmlString = ''
  if (seriesType === 'boxplot') {
    const arr = []
    labels.forEach((item, index) => {
      htmlString = `<div>
                            <span style="display:inline-block;width:10px;height:10px;
                            margin-right:4px;border-radius:5px;border-style: solid;border-width:1px;
                            border-color:${defendXSS(color)};background-color:${defendXSS(color)};"></span>
                            <span style="display:inline-block;width:90px">${defendXSS(item)}:</span><span>${defendXSS(
                              data[index + 1]
                            )}</span>
                       </div>`
      arr.push(htmlString)
    })
    htmlString = arr.join('<br/>')
  } else {
    htmlString = `<div>
                            <span style="display:inline-block;width:10px;height:10px;
                            margin-right:4px;border-radius:5px;border-style: solid;border-width:1px;
                            border-color:${defendXSS(color)};background-color:${defendXSS(color)};"></span>
                            <span style="display:inline-block;width:90px">离散点:</span><span>${defendXSS(
                              data[1]
                            )}</span>
                       </div>`
  }
  return htmlString
}

/**
 * 配置默认的鼠标悬浮提示框
 */
export function setTooltip(baseOpt) {
  if (!baseOpt.tooltip.formatter) {
    baseOpt.tooltip.formatter = tooltipFormatter
  }
}
