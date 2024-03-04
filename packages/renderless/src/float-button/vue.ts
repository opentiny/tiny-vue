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
import type {
  ISharedRenderlessParamHooks,
  IFloatButtonProps,
  IFloatButtonApi,
  IFloatButtonRenderlessParamUtils,
  IFloatButtonState
} from '@/types'

import { handleClick, clearTimer, handleScroll } from './index'

export const api = ['state', 'handleClick']
const watchVariable = ({ watch, props, state, nextTick, vm, emit }) => {
  watch(
    () => props.disabled,
    (value) => {
      state.disabled = value
    },
    { immediate: true }
  )
  watch(
    () => props.open,
    (value) => {
      state.open = value
    },
    { immediate: true }
  )
  watch(
    () => state.open,
    (value) => {
      if (value) {
        let beforeRootDom = vm.$refs.tinyFloatButton
        let beforeRootDomStyle = beforeRootDom?.getClientRects()[0] || 0
        nextTick(() => {
          if (!beforeRootDomStyle) {
            beforeRootDom = vm.$refs.tinyFloatButton
            beforeRootDomStyle = beforeRootDom.getClientRects()[0]
          }
          const dom = vm.$refs.tinyFloatButtonOpen
          const style = `left:0px;bottom:${beforeRootDomStyle.height + 4 + 'px'};`
          dom?.setAttribute('style', style)
        })
      }
    },
    { immediate: true }
  )
  watch(
    () => props.trigger,
    (value) => {
      if (value === 'hover' && !state.hasEvent) {
        nextTick(() => {
          const dom = vm.$refs.tinyFloatButton
          dom.addEventListener('mouseover', (event: MouseEvent) => {
            state.open = true
            emit('mouseover', event)
          })
          dom.addEventListener('mouseout', (event: MouseEvent) => {
            state.open = false
            emit('mouseout', event)
          })
          state.hasEvent = true
        })
      }
    },
    { immediate: true }
  )
  watch(
    () => props.backTop,
    (value) => {
      if (value) {
        handleScroll({ props, vm, state })
      }
    },
    { immediate: true }
  )
  watch(
    () => props.element,
    () => {
      if (props.backTop) {
        handleScroll({ props, vm, state })
      }
    }
  )
}
export const renderless = (
  props: IFloatButtonProps,
  { computed, onBeforeUnmount, reactive, watch, inject, nextTick }: ISharedRenderlessParamHooks,
  { emit, parent, vm }: IFloatButtonRenderlessParamUtils
) => {
  parent.tinyForm = parent.tinyForm || inject('form', null)
  const state: IFloatButtonState = reactive({
    timer: 0,
    disabled: props.disabled,
    open: props.open,
    hasEvent: false,
    show: true,
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    buttonDisabled: computed(
      () => props.disabled || state.disabled || (parent.buttonGroup || {}).disabled || state.formDisabled
    )
  })

  watchVariable({ props, vm, watch, state, nextTick, emit })
  const api: IFloatButtonApi = {
    state,
    clearTimer: clearTimer(state),
    handleClick: handleClick({ emit, props, state })
  }

  onBeforeUnmount(api.clearTimer)

  return api
}
