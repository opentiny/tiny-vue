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
import type { CSSProperties } from 'vue'
import type { IAlertRenderlessParams, ITinyVm } from '@/types'

export const ALERT_TIMEOUT = 2000

export const watchAutoHide =
  ({ api, props }: Pick<IAlertRenderlessParams, 'api' | 'props'>) =>
  (newVal: boolean) => {
    if (props.autoHide && newVal) {
      const timer = setTimeout(() => {
        api.handleClose()
        clearTimeout(timer)
      }, ALERT_TIMEOUT)
    }
  }

export const computedClass =
  ({ props, mode }) =>
  (): string[] => {
    const { type, size, center } = props
    if (mode === 'mobile') {
      const alertClass = ['tiny-mobile-alert', 'tiny-mobile-alert--' + type, 'tiny-mobile-alert--' + size]
      if (center) {
        alertClass.push('is-center')
      }

      return alertClass
    }

    return []
  }

export const computedStyle =
  ({ props, mode }) =>
  (): CSSProperties | null => {
    if (mode === 'mobile') {
      const style = {
        top: isNaN(props.offset) ? props.offset : `${props.offset}px`
      }
      return style
    }

    return null
  }

export const handleClose =
  ({ emit, state }: Pick<IAlertRenderlessParams, 'emit' | 'state'>) =>
  () => {
    state.show = false
    emit('close')
  }

export const computedGetIcon =
  ({ constants, props, designConfig }: Pick<IAlertRenderlessParams, 'constants' | 'props' | 'designConfig'>) =>
  () => {
    const designIcon = designConfig?.icons?.[props.type]

    return props.icon || designIcon || constants.ICON_MAP[props.type]
  }

export const computedGetTitle =
  ({ constants, t, props }: Pick<IAlertRenderlessParams, 'constants' | 't' | 'props'>) =>
  () =>
    props.title || t(constants.TITLE_MAP[props.type])

export const handleHeaderClick =
  ({ state, props, vm }: Pick<IAlertRenderlessParams, 'state' | 'props' | 'vm'>) =>
  () => {
    if (props.showFoldable) {
      state.contentVisible = !state.contentVisible
    }
    if (vm.$refs.ContentDescribe) {
      state.contentDescribeHeight = vm.$refs.ContentDescribe.scrollHeight

      if (state.contentDescribeHeight > state.contentMaxHeight) {
        state.scrollStatus = true
      }
    }
    if (vm.$refs.ContentDefault) {
      state.contentDefaultHeight = vm.$refs.ContentDefault.scrollHeight

      if (state.contentDefaultHeight > state.contentMaxHeight) {
        state.scrollStatus = true
      }
    }
  }

const getEl = (node: ITinyVm): HTMLElement => {
  return node.$el || node
}

export const handlerTargetNode =
  ({ props, parent, vm, nextTick }) =>
  () => {
    const { target } = props
    const { $parent } = parent
    nextTick(() => {
      const alertParentNode = $parent?.$refs[target]
      if (!target || !alertParentNode) {
        return
      }

      const targetNode = Array.isArray(alertParentNode) ? alertParentNode[0] : alertParentNode
      getEl(targetNode).insertBefore(vm.$el, getEl(targetNode).firstChild)
    })
  }