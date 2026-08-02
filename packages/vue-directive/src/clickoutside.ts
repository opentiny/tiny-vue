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

import { on, isServer } from '@opentiny/utils'

const nodeList = []
const nameSpace = '@@clickoutsideContext'
let startClick
let startClickPath
let seed = 0

if (!isServer) {
  on(document, 'mousedown', (event) => {
    startClick = event
    // composedPath() 在事件派发完成后会返回空数组，这里在派发中缓存 mousedown 的完整路径
    startClickPath = event.composedPath ? event.composedPath() : [event.target]
    nodeList
      .filter((node) => node[nameSpace].mousedownTrigger)
      .forEach((node) => node[nameSpace].documentHandler(event, startClick, startClickPath))
  })

  on(document, 'mouseup', (event) => {
    nodeList
      .filter((node) => !node[nameSpace].mousedownTrigger)
      .forEach((node) => {
        const isMouseupTrigger = node[nameSpace]?.mouseupTrigger
        node[nameSpace].documentHandler(
          event,
          isMouseupTrigger ? event : startClick,
          // mouseupTrigger 模式下 mousedown 参数即当前派发中的 mouseup 事件，路径仍有效；
          // 否则 mousedown 已派发完毕，必须使用派发时缓存的路径
          isMouseupTrigger ? null : startClickPath
        )
      })
    startClick = null
    startClickPath = null
  })
}

const createDocumentHandler = (el, binding, vnode) =>
  function (mouseup = {}, mousedown = {}, cachedMousedownPath) {
    const popperElm = vnode.context.popperElm || (vnode.context.state && vnode.context.state.popperElm)

    // 使用 event.composedPath() 来处理 Shadow DOM 场景。
    // composedPath() 会返回事件的完整路径，即使事件穿过了 Shadow DOM 的边界。
    // 这确保了即使 popperElm 在 Shadow DOM 外部（或组件本身在 Shadow DOM 内部），
    // 我们也能准确判断点击是否发生在组件或其 popper 内部。
    // 注意：composedPath() 在事件派发完成后会返回空数组，而 mousedown 在 mouseup
    // 处理时早已派发完毕，因此 mousedown 的路径必须在派发时缓存（cachedMousedownPath）后传入。
    const mousedownPath =
      cachedMousedownPath && cachedMousedownPath.length
        ? cachedMousedownPath
        : mousedown?.composedPath?.() || [mousedown?.target]
    const mouseupPath = mouseup?.composedPath?.() || [mouseup?.target]
    const isClickInEl = mousedownPath.includes(el) || mouseupPath.includes(el)
    const isClickInPopper = popperElm && (mousedownPath.includes(popperElm) || mouseupPath.includes(popperElm))

    if (!mousedown?.target || !mouseup?.target || isClickInEl || isClickInPopper) {
      return
    }

    if (binding.expression && el[nameSpace].methodName && vnode.context[el[nameSpace].methodName]) {
      vnode.context[el[nameSpace].methodName]()
    } else {
      el[nameSpace].bindingFn && el[nameSpace].bindingFn()
    }
  }

/**
 * 当没有修饰符时，需要同时满足在目标元素外同步按下和释放鼠标才会触发回调。
 * ```html
 * <div v-clickoutside="handleClose"> // 在元素外部点击时触发
 * <div v-clickoutside.mousedown="handleClose"> // 在元素外部按下鼠标时触发
 * <div v-clickoutside.mouseup="handleClose"> // 在元素外部松开鼠标时触发
 * ```
 */
export default {
  bind: (el, binding, vnode) => {
    nodeList.push(el)
    const id = seed++
    const { modifiers, expression, value } = binding
    const { mousedown = false, mouseup = false } = modifiers || {}
    el[nameSpace] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: expression,
      bindingFn: value,
      mousedownTrigger: mousedown,
      mouseupTrigger: mouseup
    }
  },

  update: (el, binding, vnode) => {
    const { modifiers, expression, value } = binding
    const { mousedown = false, mouseup = false } = modifiers || {}
    el[nameSpace].documentHandler = createDocumentHandler(el, binding, vnode)
    el[nameSpace].methodName = expression
    el[nameSpace].bindingFn = value
    el[nameSpace].mousedownTrigger = mousedown
    el[nameSpace].mouseupTrigger = mouseup
  },

  unbind: (el) => {
    if (el.nodeType !== Node.ELEMENT_NODE) {
      return
    }

    let len = nodeList.length

    for (let i = 0; i < len; i++) {
      if (nodeList[i][nameSpace].id === el[nameSpace].id) {
        nodeList.splice(i, 1)
        break
      }
    }

    if (nodeList.length === 0 && startClick) {
      startClick = null
      startClickPath = null
    }
    delete el[nameSpace]
  }
}
