import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer'
import { customElements, customConfig, STATICPATH, hasLabelElements } from '../utils'
import { append as svgAppend, create as svgCreate } from 'tiny-svg'

export default class CustomRenderer extends BaseRenderer {
  constructor(eventBus, styles, bpmnRenderer) {
    super(eventBus, 2000)
    let computeStyle = styles.computeStyle

    this.drawElements = function (parentNode, element) {
      const type = element.type // 获取到类型
      if (type !== 'label') {
        if (customElements.includes(type)) {
          // or customConfig[type]
          return drawCustomElements(parentNode, element)
        }
        const shape = bpmnRenderer.drawShape(parentNode, element)
        return shape
      } else {
        return element
      }
    }
  }

  canRender() {
    return true
  }

  drawShape(parentNode, element) {
    return this.drawElements(parentNode, element)
  }
}

CustomRenderer.$inject = ['eventBus', 'styles', 'bpmnRenderer']

function drawCustomElements(parentNode, element) {
  const { type } = element
  const { field, attr } = customConfig[type]
  const url = `${STATICPATH}${field}.png`
  const customIcon = svgCreate('image', {
    ...attr,
    href: url
  })
  element.width = attr.width // 这里我是取了巧, 直接修改了元素的宽高
  element.height = attr.height
  svgAppend(parentNode, customIcon)
  // 判断是否有name属性来决定是否要渲染出label
  if (!hasLabelElements.includes(type) && element.businessObject.name) {
    const text = svgCreate('text', {
      x: attr.x,
      y: attr.y + attr.height + 20,
      'font-size': '14',
      'fill': '#000'
    })
    text.innerHTML = element.businessObject.name
    svgAppend(parentNode, text)
  }
  return customIcon
}
