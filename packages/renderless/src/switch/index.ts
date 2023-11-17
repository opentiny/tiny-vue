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

import type { StyleValue } from 'vue'
import { ISwitchRenderlessParams, ISwitchClass } from '@/types'

export const toggle =
  ({ emit, props, state }: Pick<ISwitchRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (event: KeyboardEvent | MouseEvent): void => {
    event.preventDefault()

    if (state.disabled || props.types === 'loading') {
      return
    }

    const change = () => {
      state.currentValue = state.currentValue === props.trueValue ? props.falseValue : props.trueValue

      emit('update:modelValue', state.currentValue)
      emit('change', state.currentValue)
    }

    props.beforeChange ? props.beforeChange(change) : change()
  }

export const computedWarpClasses =
  ({ prefixCls, props, state }: Pick<ISwitchRenderlessParams, 'prefixCls' | 'props' | 'state'>) =>
  (): ISwitchClass => {
    return [
      {
        [prefixCls]: true,
        [`${prefixCls}-checked`]: state.currentValue === props.trueValue,
        [`${prefixCls}-disabled`]: state.disabled,
        mini: props.mini,
        disabled: state.disabled
      }
    ]
  }

export const computedInnerClasses =
  ({ prefixCls }: Pick<ISwitchRenderlessParams, 'prefixCls'>) =>
  (): string =>
    `${prefixCls}-inner`

export const computedStyle =
  ({ props, state }: Pick<ISwitchRenderlessParams, 'props' | 'state'>) =>
  (): StyleValue => {
    return {
      backgroundColor: props.trueValue === state.currentValue ? props.trueColor : props.falseColor
    }
  }
