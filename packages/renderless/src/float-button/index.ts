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
import type { IFloatButtonRenderlessParams, IFloatButtonState } from '@/types'

export const handleScroll = ({ props, state }: Pick<IFloatButtonRenderlessParams, 'props' | 'state' | 'vm'>) => {
  if (props.element) {
    const beforeHeight = props.element.scrollTop || document.documentElement.scrollTop || document.body.scrollTop
    if (beforeHeight <= props.visibilityHeight) {
      state.show = false
    }
    props.element.onscroll = function () {
      state.show = true
      const height = props.element.scrollTop || document.documentElement.scrollTop || document.body.scrollTop
      if (height <= props.visibilityHeight) {
        state.show = false
      }
    }
  }
}
export const handleClick =
  ({ emit, props, state }: Pick<IFloatButtonRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (event: MouseEvent): void => {
    if (props.trigger === 'click' && props.resetTime > 0 && !props.backTop) {
      state.disabled = true
      state.open = !state.open
      state.timer = window.setTimeout(() => {
        state.disabled = false
      }, props.resetTime)
    }
    if (!props.trigger && (props.href || props.target) && !props.backTop) {
      window.open(props.href, props.target)
    }
    if (props.backTop) {
      props.element?.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    emit('click', event)
  }

export const clearTimer = (state: IFloatButtonState) => (): void => clearTimeout(state.timer)
