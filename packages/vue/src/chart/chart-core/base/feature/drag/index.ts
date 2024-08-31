import { pxToNumber } from '../../util/convert'
import merge from '../../util/merge'

const DOM_WIDTH = 10000
const DOM_HEIGHT = 10000

// 画布拖拽管理器，具有通用性
// 支持鼠标拖拽和鼠标滚轮缩放
class DragManager {
  constructor(container, option) {
    option = merge({ scale: 1 }, option)
    // 画布容器
    this.container = container
    // 当前缩放值
    this.scale = option.scale || 1
    // 创建被拖拽画布
    this.insertDragDom()
    // 初始化画布位置到屏幕正中心
    this.initPosition()
    // 创建操作按钮
    this.createTools()
    this.scaleUnit = 0.1
    this.scaleLimit = {
      min: 0.5,
      max: 2
    }
    this.draging = false
    this.dom.addEventListener('mousedown', this.bindMouseDown.bind(this))
    this.dom.addEventListener('mousemove', this.bindMouseMove.bind(this))
    this.dom.addEventListener('mouseup', this.bindMouseUp.bind(this))
    this.dom.addEventListener('mousewheel', this.bindMouseWheel.bind(this))
    this.container.addEventListener('mouseleave', this.bindMouseLeave.bind(this))
    // 设施画布初始化缩放
    let center = {
      x: this.containerRect.left + this.containerRect.width / 2,
      y: this.containerRect.top + this.containerRect.height / 2
    }
    this.scaleDom(center.x, center.y, this.scale)
  }

  // 插入拖拽画布
  insertDragDom() {
    this.dom = document.createElement('div')
    this.dom.setAttribute('class', 'drag-container')
    this.container.appendChild(this.dom)
  }

  // 初始化this.dom的位置为屏幕正中间
  initPosition() {
    this.containerRect = this.container.getBoundingClientRect()
    this.dom.style.top = ((DOM_HEIGHT - this.containerRect.height) / 2) * -1 + 'px'
    this.dom.style.left = ((DOM_WIDTH - this.containerRect.width) / 2) * -1 + 'px'
  }

  // 鼠标按下事件
  bindMouseDown(e) {
    this.draging = false
    this.startPos = {
      domx: pxToNumber(this.dom.style.left),
      domy: pxToNumber(this.dom.style.top),
      mousex: e.clientX,
      mousey: e.clientY
    }
  }

  // 鼠标拖拽事件
  bindMouseMove(e) {
    if (this.startPos) {
      this.draging = true
      let moveX = e.clientX - this.startPos.mousex
      let moveY = e.clientY - this.startPos.mousey
      if (moveX === 0 && moveY === 0) return
      this.draging = true
      let targetX = this.startPos.domx + moveX
      let targetY = this.startPos.domy + moveY
      let target = this.limitPosition(targetX, targetY)
      this.dom.style.top = target.y + 'px'
      this.dom.style.left = target.x + 'px'
    }
  }

  // 鼠标抬起事件
  bindMouseUp(e) {
    if (this.draging && this.startPos) {
      e.stopPropagation()
      e.preventDefault()
    }
    this.startPos = undefined
  }

  // 鼠标离开容器事件
  bindMouseLeave(e) {
    if (this.draging) {
      let mouseupEvent = new Event('mouseup')
      this.dom.dispatchEvent(mouseupEvent)
      e.stopPropagation()
      e.preventDefault()
    }
  }

  // 鼠标滚轮放大缩小
  bindMouseWheel(e) {
    let unit
    if (e.deltaY < 0) {
      if (this.scale === this.scaleLimit.max) return
      unit = this.scaleUnit
    } else if (e.deltaY > 0) {
      if (this.scale === this.scaleLimit.min) return
      unit = -1 * this.scaleUnit
    }
    this.scale += unit
    this.scale = Number(this.scale.toFixed(1))
    this.scale = Math.max(this.scale, this.scaleLimit.min)
    this.scale = Math.min(this.scale, this.scaleLimit.max)
    this.scaleDom(e.clientX, e.clientY, unit)
  }

  // 画布移动dx、dy距离
  moveDom(dx, dy) {
    this.dom.style.top = pxToNumber(this.dom.style.top) + dy + 'px'
    this.dom.style.left = pxToNumber(this.dom.style.left) + dx + 'px'
  }

  // 画布以x、y(client类型)为中心进行缩放, size是指每次更改了多少缩放值
  scaleDom(x, y, size) {
    let domRect = this.dom.getBoundingClientRect()
    // 缩放前位置
    let mouseInDom = {
      x: ((x - domRect.left) / domRect.width) * DOM_WIDTH,
      y: ((y - domRect.top) / domRect.height) * DOM_HEIGHT
    }
    // 缩放后位置
    let dx = (DOM_WIDTH / 2 - mouseInDom.x) * size
    let dy = (DOM_HEIGHT / 2 - mouseInDom.y) * size
    this.dom.style.transform = `scale(${this.scale})`
    this.moveDom(dx, dy)
  }

  // 移动画布，使target显示在容器正中心的位置
  moveTargetToCenter(target, callback) {
    if (!target) {
      return
    }
    let targetRect = target.getBoundingClientRect()
    let containerRect = this.container.getBoundingClientRect()
    let dx = containerRect.left + containerRect.width / 2 - targetRect.left - targetRect.width / 2
    let dy = containerRect.top + containerRect.height / 2 - targetRect.top - targetRect.height / 2
    this.moveDom(dx, dy)
    callback && callback()
  }

  // 重置画布位置为屏幕中心
  resetPosition() {
    this.initPosition()
  }

  // 以屏幕为中心，重置画布缩放值为1
  resetScale() {
    let size = 1 - this.scale
    this.scale = 1
    let center = {
      x: this.containerRect.left + this.containerRect.width / 2,
      y: this.containerRect.top + this.containerRect.height / 2
    }
    this.scaleDom(center.x, center.y, size)
  }

  // 重置画布为初始状态
  reset() {
    this.resetPosition()
    this.resetScale()
  }

  // 修正画布位置，使画布x,y最大值不超过0，最小值不超过（容器宽度 - 画布宽度)
  limitPosition(targetX, targetY) {
    // 拖拽位置最大为0
    targetX = Math.min(0, targetX)
    targetY = Math.min(0, targetY)
    // 拖拽位置最小为（容器宽度 - 画布宽度)
    targetX = Math.max(targetX, (DOM_WIDTH - this.containerRect.width) * -1)
    targetY = Math.max(targetY, (DOM_HEIGHT - this.containerRect.height) * -1)
    return {
      x: targetX,
      y: targetY
    }
  }

  // 创建操作按钮
  createTools() {
    let stateDom = `<div class="drag-tools">
            <div class="drag-tool-item drag-tool-enlarge">加</div>
            <div class="drag-tool-item drag-tool-center">原</div>
            <div class="drag-tool-item drag-tool-shrunk">减</div>
        </div>`
    this.container.insertAdjacentHTML('beforeend', stateDom)
    this.container.getElementsByClassName('drag-tool-enlarge')[0].addEventListener('click', () => {
      this.bindMouseWheel({
        deltaY: 100,
        clientX: this.containerRect.left + this.containerRect.width / 2,
        clientY: this.containerRect.top + this.containerRect.height / 2
      })
    })
    this.container.getElementsByClassName('drag-tool-center')[0].addEventListener('click', () => {
      this.resetScale()
    })
    this.container.getElementsByClassName('drag-tool-shrunk')[0].addEventListener('click', () => {
      this.bindMouseWheel({
        deltaY: -100,
        clientX: this.containerRect.left + this.containerRect.width / 2,
        clientY: this.containerRect.top + this.containerRect.height / 2
      })
    })
  }

  // 获取拖拽画布
  getDragDom() {
    return this.dom
  }

  unInstall() {
    this.container.innerHTML = null
    this.dom = null
  }
}

export default DragManager
