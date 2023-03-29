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

import PopupManager from '@opentiny/vue-renderless/common/deps/popup-manager'
import PopperJS from '@opentiny/vue-renderless/common/deps/popper'
import { on, off } from '@opentiny/vue-renderless/common/deps/dom'

const stop = (e) => {
  e.stopPropagation()
}
const isServer = typeof window === 'undefined'

const getReference = ({ state, props, refs, slots }) => {
  let reference = state.referenceElm || props.reference || (refs.reference && refs.reference.$el) || refs.reference

  if (!reference && slots.reference && slots.reference()[0]) {
    state.referenceElm = slots.reference()[0].elm || slots.reference()[0].el
    reference = state.referenceElm
  }

  return reference
}

const getReferMaxZIndex = (reference) => {
  if (!reference || !reference.nodeType) {
    return
  }

  let getZIndex = (dom) => parseInt(window.getComputedStyle(dom).zIndex, 10) || 0
  let max = getZIndex(reference)
  let z

  do {
    reference = reference.parentNode
    z = getZIndex(reference)
    max = z > max ? z : max
    // webcomponents场景下，shadowRoot的nodeType是文档片段，文档片段没有父节点且无法做为getComputedStyle的参数
  } while (reference !== document.body && reference?.parentNode?.nodeType !== 11)

  return `${max + 1}`
}

const appendPopper = ({ options, props, state, parent }) => {
  if (props.appendToBody || props.popperAppendToBody) {
    document.body.appendChild(state.popperElm)
  } else {
    parent && parent.$el && parent.$el.appendChild(state.popperElm)
    options.forceAbsolute = true
  }
}

const setWatchFn = ({ watch, props, state, emit, nextTick, updatePopper, destroyPopper, onBeforeUnmount, onDeactivated, doDestroy }) => {
  watch(
    () => props.modelValue,
    (val) => {
      if (props.trigger === 'manual') {
        state.showPopper = val
        emit('update:modelValue', val)
      }
    }
  )

  watch(
    () => state.showPopper,
    (val) => {
      if (props.disabled) {
        return
      }

      val ? nextTick(updatePopper) : destroyPopper()
      props.trigger === 'manual' && emit('update:modelValue', val)
    }
  )

  const removeBodyElm = () => {
    if (state.popperElm && state.popperElm.parentNode === document.body) {
      off(state.popperElm, 'click', stop)
      document.body.removeChild(state.popperElm)
    }
  }

  onBeforeUnmount(() => {
    nextTick(() => {
      doDestroy(true)
      removeBodyElm()
    })
  })

  onDeactivated(() => {
    doDestroy(true)
    removeBodyElm()
  })
}

const createPopperFn = ({ state, props, refs, slots, appendArrow, emit, resetTransformOrigin, nextTick, updatePopper, nextZIndex, parent }) => (dom) => {
  if (isServer) {
    return
  }

  state.currentPlacement = state.currentPlacement || props.placement

  if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(state.currentPlacement)) {
    return
  }

  const options = props.popperOptions || { gpuAcceleration: false }
  state.popperElm = state.popperElm || props.popper || refs.popper || dom
  const popper = state.popperElm
  let reference = getReference({ state, props, refs, slots })

  if (!popper || !reference || reference.nodeType !== Node.ELEMENT_NODE) {
    return
  }

  if (props.visibleArrow) {
    appendArrow(popper)
  }

  appendPopper({ options, props, state, parent })

  if (props.popperJS && state.popperJS.destroy) {
    state.popperJS.destroy()
  }

  options.placement = state.currentPlacement
  options.offset = props.offset || 0
  options.arrowOffset = props.arrowOffset || 0
  options.adjustArrow = props.adjustArrow || false

  state.popperJS = new PopperJS(reference, popper, options)
  state.popperJS.onCreate(() => {
    emit('created', state)
    resetTransformOrigin()
    // 原来代码逻辑会触发2次updatePopper,暂时注释掉这一处，待观察
    // new PopperJS 内部已经调用this.update了，所以屏蔽： nextTick(updatePopper)
  })

  if (typeof options.onUpdate === 'function') {
    state.popperJS.onUpdate(options.onUpdate)
  }

  state.popperJS._popper.style.zIndex = nextZIndex(state.popperJS._reference)
  on(state.popperElm, 'click', stop)
}

const appendArrowFn = (state) => (el) => {
  let hash
  if (state.appended) {
    return
  }
  state.appended = true

  for (const item in el.attributes) {
    if (el.attributes[item].name.startsWith('_v-')) {
      hash = el.attributes[item].name
      break
    }
  }

  const div = document.createElement('div')

  if (hash) {
    div.setAttribute(hash, '')
  }

  div.setAttribute('x-arrow', '')
  div.className = 'popper__arrow'
  el.appendChild(div)
}

const resetTransformOriginFn = (state, props) => () => {
  if (!props.transformOrigin) {
    return
  }

  const placementMap = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' }
  const placement = state.popperJS._popper.getAttribute('x-placement').split('-')[0]
  const origin = placementMap[placement]

  if (typeof props.transformOrigin === 'string') {
    state.popperJS._popper.style.transformOrigin = props.transformOrigin
  } else {
    state.popperJS._popper.style.transformOrigin = ['top', 'bottom'].includes(placement) ? `center ${origin}` : `${origin} center`
  }
}

export default ({ parent, emit, nextTick, onBeforeUnmount, onDeactivated, props, watch, reactive, refs, slots, toRefs }) => {
  const state = reactive({
    popperJS: null,
    appended: false,
    popperElm: null,
    showPopper: props.manual ? Boolean(props.modelValue) : false,
    referenceElm: null,
    currentPlacement: ''
  })

  const nextZIndex = (reference) => (props.zIndex === 'relative' ? getReferMaxZIndex(reference) : PopupManager.nextZIndex())
  const appendArrow = appendArrowFn(state)
  const resetTransformOrigin = resetTransformOriginFn(state, props)
  let createPopper
  const updatePopper = (dom) => {
    const popperJS = state.popperJS
    if (popperJS) {
      popperJS.update()
      if (popperJS._popper && dom !== true) {
        // dom===true的场景仅在select组件动态更新面版时，不更新zIndex
        popperJS._popper.style.zIndex = nextZIndex(popperJS._reference)
      }
    } else {
      createPopper(dom)
    }
  }
  createPopper = createPopperFn({ state, props, refs, slots, appendArrow, emit, resetTransformOrigin, nextTick, updatePopper, nextZIndex, parent })
  const doDestroy = (forceDestroy) => {
    if (!state.popperJS || (state.showPopper && !forceDestroy)) {
      return
    }
    state.popperJS.destroy()
    state.popperJS = null
  }
  const destroyPopper = (remove) => {
    if (state.popperJS) {
      resetTransformOrigin()
    }

    if (remove) {
      if (state.popperElm) {
        const parentNode = state.popperElm.parentNode
        if (parentNode) {
          parentNode.removeChild(state.popperElm)
        }
      }
    }
  }
  setWatchFn({ watch, props, state, emit, nextTick, updatePopper, destroyPopper, onBeforeUnmount, onDeactivated, doDestroy })

  return { doDestroy, appendArrow, createPopper, updatePopper, destroyPopper, resetTransformOrigin, ...toRefs(state) }
}
