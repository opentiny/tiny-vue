/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import { extend } from '../../object'
import { on, off } from '../dom'
import screenfull from './screenfull'

const defaults = {
  callback: () => undefined,
  fullscreenClass: 'fullscreen',
  pageOnly: false,
  teleport: false
}

let token
let parentNode

const setStyle = (element, style) => {
  element.style.position = style.position
  element.style.left = style.left
  element.style.top = style.top
  element.style.width = style.width
  element.style.height = style.height
  element.style.zIndex = style.zIndex
}

const resetElement = (api) => {
  const targetEle = api.targetElement

  if (targetEle) {
    // 移除全屏class
    targetEle.classList.remove(api.opts.fullscreenClass)

    if (api.opts.teleport || api.opts.pageOnly) {
      if (api.opts.teleport && parentNode) {
        // 还原位置
        parentNode.insertBefore(targetEle, token)
        parentNode.removeChild(token)
      }
      // 移除样式
      if (targetEle.__styleCache) {
        setStyle(targetEle, targetEle.__styleCache)
      }
    }
  }
}

const setTargetStyle = (target, options) => {
  const { position, left, top, width, height, zIndex } = target.style
  // 添加全屏class
  target.classList.add(options.fullscreenClass)
  // teleport或者网页全屏时，为目标元素添加全屏样式
  if (options.teleport || options.pageOnly) {
    const style = {
      position: 'fixed',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%'
    }

    target.__styleCache = { position, left, top, width, height, zIndex }
    options.zIndex && (style.zIndex = options.zIndex)
    setStyle(target, style)
  }
}

const getOptions = (screenfull, options, target) => {
  options = extend({}, defaults, options)

  // body不可teleport
  if (target === document.body) {
    options.teleport = false
  }
  // 不支持全屏api则自动启用网页全屏
  if (!screenfull.isEnabled) {
    options.pageOnly = true
  }
  return options
}

const api = {
  targetElement: null,
  opts: null,
  isEnabled: screenfull.isEnabled,
  isFullscreen: false,
  toggle(target, options, force) {
    if (force === undefined) {
      // 如果已经是全屏状态，则退出
      return !this.isFullscreen ? this.request(target, options) : this.exit()
    }

    return force ? this.request(target, options) : this.exit()
  },
  request(targetEle, options) {
    if (this.isFullscreen) {
      return Promise.resolve()
    }
    // 默认全屏对象为body
    if (!targetEle) {
      targetEle = document.body
    }

    this.opts = getOptions(screenfull, options, targetEle)

    setTargetStyle(targetEle, this.opts)
    // teleport：将目标元素挪到body下，并在原地留一个标记用于还原
    if (this.opts.teleport) {
      parentNode = targetEle.parentNode

      if (parentNode) {
        token = document.createComment('fullscreen-token')
        parentNode.insertBefore(token, targetEle)
        document.body.appendChild(targetEle)
      }
    }

    if (this.opts.pageOnly) {
      // 网页全屏模式 按键回调
      const keypressCallback = (e) => {
        if (e.key === 'Escape') {
          off(document, 'keyup', keypressCallback)
          this.exit()
        }
      }

      this.isFullscreen = true
      this.targetElement = targetEle

      off(document, 'keyup', keypressCallback)
      on(document, 'keyup', keypressCallback)

      if (this.opts.callback) {
        this.opts.callback(this.isFullscreen)
      }

      return Promise.resolve()
    } else {
      // 全屏api模式 全屏api事件回调
      const fullScreenCallback = () => {
        if (!screenfull.isFullscreen) {
          // 退出全屏时解绑回调
          screenfull.off('change', fullScreenCallback)
          resetElement(this)
        }

        this.isFullscreen = screenfull.isFullscreen

        this.targetElement = !this.opts.teleport ? screenfull.targetElement : targetEle || null

        if (this.opts.callback) {
          this.opts.callback(screenfull.isFullscreen)
        }
      }

      screenfull.on('change', fullScreenCallback)

      return screenfull.request(this.opts.teleport ? document.body : targetEle)
    }
  },
  exit() {
    if (!this.isFullscreen) {
      return Promise.resolve()
    }

    if (this.opts.pageOnly) {
      resetElement(this)

      this.isFullscreen = false
      this.targetElement = null

      if (this.opts.callback) {
        this.opts.callback(this.isFullscreen)
      }

      return Promise.resolve()
    }

    return screenfull.exit()
  }
}

// 向下兼容
api.support = api.isEnabled
api.getState = () => api.isFullscreen
api.enter = api.request

export default api
