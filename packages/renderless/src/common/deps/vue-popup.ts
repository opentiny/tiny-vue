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

import { merge } from '../object'
import PopupManager from './popup-manager'
import { addClass } from './dom'
import { ISharedRenderlessFunctionParams } from 'types/shared.type'

let idSeed = 1
const isServer = typeof window === 'undefined'

interface IPopupState {
  opened: boolean
  rendered: boolean
}
type IPopupInputParams = ISharedRenderlessFunctionParams<never> & {
  api: { open: Function; close: Function }
  state: IPopupState
  props: any
}

const setWatchFn = ({
  onMounted,
  onBeforeUnmount,
  watch,
  vm,
  api,
  props,
  state,
  nextTick
}: Pick<
  IPopupInputParams,
  'onMounted' | 'onBeforeUnmount' | 'watch' | 'vm' | 'api' | 'props' | 'state' | 'nextTick'
>) => {
  onMounted(() => {
    vm._popupId = `popup-${idSeed++}`
    PopupManager.register(vm._popupId, vm)
  })

  onBeforeUnmount(() => {
    PopupManager.deregister(vm._popupId)
    PopupManager.closeModal(vm._popupId)
  })

  watch(
    () => props.visible,
    (val) => {
      if (val) {
        if (vm._opening) {
          return
        }
        if (state.rendered) {
          api.open()
        } else {
          state.rendered = true
          nextTick(() => {
            api.open()
          })
        }
      } else {
        api.close()
      }
    }
  )
}

const openFn =
  ({ state, vm }: Pick<IPopupInputParams, 'state' | 'vm'>) =>
  (options: any) => {
    if (!state.rendered) {
      state.rendered = true
    }

    const props: any = merge({}, vm.$props || vm, options)

    if (vm._closeTimer) {
      clearTimeout(vm._closeTimer)
      vm._closeTimer = null
    }

    clearTimeout(vm._openTimer)

    // 复用doOpen
    const doOpen = () => {
      if (isServer || state.opened) {
        return
      }

      vm._opening = true

      const dom = vm.$el
      const modal = props.modal
      const zIndex = props.zIndex

      if (zIndex) {
        PopupManager.zIndex = zIndex
      }

      if (modal) {
        if (vm._closing) {
          PopupManager.closeModal(vm._popupId)
          vm._closing = false
        }

        PopupManager.openModal(
          vm._popupId,
          PopupManager.nextZIndex(),
          props.modalAppendToBody ? undefined : dom,
          props.modalClass,
          props.modalFade
        )

        if (props.lockScroll) {
          // 必须先计算宽度，再添加popLockClass。 下面2行不能交换
          PopupManager.fixBodyBorder()
          addClass(document.body, PopupManager.popLockClass)
        }
      }

      if (getComputedStyle(dom).position === 'static') {
        dom.style.position = 'absolute'
      }

      dom.style.zIndex = PopupManager.nextZIndex().toString()
      state.opened = true

      vm._opening = false
    }
    const openDelay = Number(props.openDelay)

    if (openDelay > 0) {
      vm._openTimer = setTimeout(() => {
        vm._openTimer = null
        doOpen()
      }, openDelay)
    } else {
      doOpen()
    }
  }
const closeFn =
  ({ state, vm }: Pick<IPopupInputParams, 'state' | 'vm'>) =>
  () => {
    if (vm._openTimer !== null) {
      clearTimeout(vm._openTimer)
      vm._openTimer = null
    }

    clearTimeout(vm._closeTimer)

    // 复用 doClose
    const doClose = () => {
      vm._closing = true

      state.opened = false
      PopupManager.closeModal(vm._popupId)
      vm._closing = false
    }

    const closeDelay = Number(vm.closeDelay)

    if (closeDelay > 0) {
      vm._closeTimer = setTimeout(() => {
        vm._closeTimer = null
        doClose()
      }, closeDelay)
    } else {
      doClose()
    }
  }

/** vue-popup 只是dialog-box 自己使用的包， 封装了一些state和几个方法，处理mount,unmount 和watch。 它内部封装了 PopupManager 的调用！
 * 计划：drawer/image 等组件均使用该函数
 */
export default (options: IPopupInputParams) => {
  const { api, nextTick, onBeforeUnmount, onMounted, props, reactive, toRefs, vm, watch } = options
  const state = reactive<IPopupState>({
    opened: false,
    rendered: false
  })

  setWatchFn({ onMounted, onBeforeUnmount, watch, vm, api, props, state, nextTick })

  const open = openFn({ state, vm })
  const close = closeFn({ state, vm })

  return { open, close, PopupManager, ...toRefs(state) }
}
