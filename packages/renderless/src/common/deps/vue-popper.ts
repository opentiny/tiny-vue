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

import PopupManager from './popup-manager'
import PopperJS from './popper'
import { on } from './dom'
import { ISharedRenderlessFunctionParams } from 'types/shared.type'
import Popper from './popper'

interface IPopperState {
  popperJS: Popper
  appended: boolean
  popperElm: HTMLElement
  showPopper: boolean
  referenceElm: HTMLElement
  currentPlacement: string
}

type IPopperInputParams = ISharedRenderlessFunctionParams<never> & {
  api: { open: Function; close: Function }
  state: IPopperState
  props: any
}

/** 给 popper 的click添加stop, 阻止冒泡 */
const stop = (e: Event) => e.stopPropagation()

const isServer = typeof window === 'undefined'

// 由于多个组件传入reference元素的方式不同，所以这里从多处查找。
const getReference = ({
  state,
  props,
  refs,
  slots
}: Pick<IPopperInputParams, 'state' | 'props' | 'refs' | 'slots'>) => {
  let reference = state.referenceElm || props.reference || (refs.reference && refs.reference.$el) || refs.reference

  if (!reference && slots.reference && slots.reference()[0]) {
    state.referenceElm = slots.reference()[0].elm || slots.reference()[0].el
    reference = state.referenceElm
  }

  return reference
}

export default (options: IPopperInputParams) => {
  const { parent, emit, nextTick, onBeforeUnmount, onDeactivated, props, watch, reactive, refs, slots, toRefs } =
    options
  const state = reactive<IPopperState>({
    popperJS: null as any,
    appended: false, // arrow 是否添加
    popperElm: null as any,
    showPopper: props.manual ? Boolean(props.modelValue) : false,
    referenceElm: null as any,
    currentPlacement: ''
  })

  /** 创建箭头函数 */
  const appendArrow = (el: HTMLElement) => {
    if (state.appended) {
      return
    }

    state.appended = true
    const div = document.createElement('div')

    div.setAttribute('x-arrow', '')
    div.className = 'popper__arrow'
    el.appendChild(div)
  }

  // 如果触发源是隐藏的，其弹出层也设置为隐藏。组件可以通过 props.popperOptions.followReferenceHide = true/false来控制
  const followHide = (popperInstance: PopperJS) => {
    const { followReferenceHide = true } = props?.popperOptions
    const { _popper: popper, _reference: reference } = popperInstance

    if (followReferenceHide && getComputedStyle(reference).position !== 'fixed' && reference.offsetParent === null) {
      popper.style.display = 'none'
    }
  }

  const createPopper = () => {
    if (isServer) {
      return
    }

    state.currentPlacement = state.currentPlacement || props.placement

    if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(state.currentPlacement)) {
      return
    }

    const options = props.popperOptions || {}
    state.popperElm = state.popperElm || props.popper || refs.popper
    const popper = state.popperElm
    let reference = getReference({ state, props, refs, slots })

    if (!popper || !reference || reference.nodeType !== Node.ELEMENT_NODE) {
      return
    }

    if (props.visibleArrow) {
      appendArrow(popper)
    }

    // 使用的组件比较多，所以 appendToBody popperAppendToBody 这2个属性都要监听
    if (props.appendToBody || props.popperAppendToBody) {
      document.body.appendChild(state.popperElm)
    } else {
      // 只有tooltip 传入parent了
      parent && parent.$el && parent.$el.appendChild(state.popperElm)
      options.forceAbsolute = true
    }

    options.placement = state.currentPlacement
    options.offset = props.offset || 0
    options.arrowOffset = props.arrowOffset || 0
    options.adjustArrow = props.adjustArrow || false

    // 创建一个popperJS, 内部会立即调用一次update() 并 applyStyle等操作
    state.popperJS = new PopperJS(reference, popper, options)
    // 1、所有使用vue-popper的都有该事件；2、有的组件会多次触发 created
    emit('created', state)

    if (typeof options.onUpdate === 'function') {
      state.popperJS.onUpdate(options.onUpdate)
    }

    state.popperJS._popper.style.zIndex = PopupManager.nextZIndex().toString()
    followHide(state.popperJS)
    on(state.popperElm, 'click', stop)
  }

  /** 第一次 updatePopper 的时候，才真正执行创建 */
  const updatePopper = (popperElm?: HTMLElement) => {
    if (popperElm) {
      state.popperElm = popperElm
    }

    const popperJS = state.popperJS
    if (popperJS) {
      popperJS.update()
    } else {
      createPopper()
    }
  }

  /** 调用state.popperJS.destroy()。  默认不会移除popper dom
   *  doDestroy() 默认执行的条件是： state.popperJS 有值且 state.showPopper = false.
   *  当state.showPopper 为true时， 需要 doDestroy(true)!
   */
  const doDestroy = (forceDestroy?: boolean) => {
    if (!state.popperJS || (state.showPopper && !forceDestroy)) {
      return
    }
    state.popperJS.destroy() // 并未移除popper的dom
    state.popperJS = null as any
  }

  /** remove时，执行真的移除popper dom操作。*/
  const destroyPopper = (remove: 'remove' | boolean) => {
    if (remove) {
      if (state.popperElm) {
        state.popperElm.remove()
      }
    }
  }

  // 注意： 一直以来，state.showPopper 为false时，并未调用doDestory. 像popover只是依赖这个值来 给reference元素 v-show一下
  watch(
    () => state.showPopper,
    (val) => {
      if (props.disabled) {
        return
      }
      if (val) {
        nextTick(updatePopper)
      }
      props.trigger === 'manual' && emit('update:modelValue', val)
    }
  )

  onBeforeUnmount(() => {
    nextTick(() => {
      doDestroy(true)
      destroyPopper('remove')
    })
  })

  onDeactivated(() => {
    doDestroy(true)
    destroyPopper('remove')
  })

  return { updatePopper, destroyPopper, doDestroy, ...toRefs(state) }
}
