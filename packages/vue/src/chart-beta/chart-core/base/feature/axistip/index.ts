import Theme from '../token'
import { isArray } from '../../util/type'

// 给文本中的label添加气泡
function axistip(echartsDom, echartsIns, eChartOption) {
  if (isArray(eChartOption)) {
    eChartOption.xAxis?.forEach((item) => {
      item.triggerEvent = true
    })
  }

  // 创建气泡容器
  const tipContainer = document.createElement('div')
  tipContainer.className = 'labeltip'

  echartsIns.on('mousemove', (param) => {
    if (param.componentType === 'xAxis') {
      tipContainer.textContent = param.value

      const tipContainerReact = tipContainer.getBoundingClientRect()
      const echartsDomRect = echartsDom.getBoundingClientRect()
      const echartsDomStyle = getComputedStyle(echartsDom)
      const echartsDomBorder =
        parseFloat(echartsDomStyle.borderRightWidth) + parseFloat(echartsDomStyle.borderLeftWidth)

      const tipContainerW = tipContainerReact.width
      const tipContainerH = tipContainerReact.height
      const { offsetX, offsetY } = param.event

      let tipLeft = 0
      let tipTop = 0

      // 判断tips 容器宽度是否小于图表容器
      if (tipContainerW < echartsDomRect.width - echartsDomBorder) {
        tipTop = offsetY - 16

        // 处理临界值 >0,向右  <0 向左
        const reviseL = echartsDomRect.width - echartsDomBorder - offsetX - tipContainerW - 16
        if (reviseL > 0) {
          tipLeft = offsetX + 16
        } else {
          tipLeft = offsetX - tipContainerW - 16
        }
      } else {
        tipTop = offsetY - tipContainerH - 16
      }

      tipContainer.style.cssText = `
        position: absolute;
        display: inline-block;
        word-break: break-all;
        padding: 8px;
        top:${tipTop}px;
        left:${tipLeft}px;
        color: ${Theme.config.tooltipTextColor};
        font-size: 14px;
        background: ${Theme.config.tooltipBg};
        box-shadow:0 ${Theme.config.tooltipShadowOffsetY}px 
        ${Theme.config.tooltipShadowBlur}px 0 ${Theme.config.tooltipShadowColor};
      `
    }
  })

  echartsIns.on('mouseout', (param) => {
    if (param.componentType === 'xAxis') {
      tipContainer.textContent = ''
      tipContainer.style.cssText = `
      opacity:0;
      position: absolute;
      display: inline-block;
      word-break: break-all;
      padding: 8px;
      font-size: 14px;`
    }
  })
  echartsDom.appendChild(tipContainer)
}

export default axistip
