import { isString, isArray, isDOM } from './type'
import { appendHTML, appendDom } from './dom'

export function insertCenterDom(container, option) {
  if (!option.centerDom) return
  // 用户传入的中心dom渲染回调
  const { centerDom } = option
  let containerWidth = Math.min(container.clientWidth, container.clientHeight)
  let position = getComputedStyle(container).position
  if (position === 'static') {
    container.style.position = 'relative'
  }
  // 计算出中心圆宽度
  let radius = getCenterDomRadius(option)
  // 生成中心dom的容器
  let centerDomContainer = createCenterDomContainer(containerWidth, radius)
  // 生成中心自定义dom
  let customDom = centerDom(centerDomContainer)
  isString(customDom) && appendHTML(centerDomContainer, customDom)
  isDOM(customDom) && appendDom(centerDomContainer, customDom)
  appendDom(container, centerDomContainer)
}

export function removeCenterDom(container) {
  let centerDomContainer = container.getElementsByClassName('hui_center_dom_container')
  Array.prototype.slice.call(centerDomContainer).forEach((element) => {
    element.remove()
  })
}

export function resizeCenterDom(container, option) {
  let centerDomContainer = container?.getElementsByClassName('hui_center_dom_container')
  let containerWidth = Math.min(container?.clientWidth, container?.clientHeight)
  let radius = getCenterDomRadius(option)
  if (centerDomContainer) {
    Array.prototype.slice.call(centerDomContainer).forEach((element) => {
      setSize(element, radius, containerWidth)
    })
  }
}

const getCenterDomRadius = (option) => {
  let radius = option.position?.radius || '50%'
  if (isArray(radius)) {
    radius = percentToDecimal(radius[0])
  } else {
    radius = percentToDecimal(radius) * 0.5
  }
  return radius
}

const createCenterDomContainer = (containerWidth, radius) => {
  let centerDomContainer = document.createElement('div')
  centerDomContainer.classList.add('hui_center_dom_container')
  centerDomContainer.style.cssText = `
        top: 50%;
        left: 50%;
        display: flex;
        color: #191919;
        position: absolute;
        border-radius: 50%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        transform: translate(-50%, -50%);
        background: rgb(255, 255, 255);
        box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1)`
  // 动态计算大小
  setSize(centerDomContainer, radius, containerWidth)
  return centerDomContainer
}

const setSize = (dom, radius, width) => {
  dom.style.width = width * radius + 'px'
  dom.style.height = width * radius + 'px'
}

const percentToDecimal = (percent) => {
  return parseFloat(percent) / 100
}
