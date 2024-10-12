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
import type { IBadgeRenderlessParams, IBadgeContent } from '@/types'
import type { StyleValue } from 'vue'

export const computedContent =
  ({ props, state }: Pick<IBadgeRenderlessParams, 'props' | 'state'>) =>
  (): IBadgeContent =>
    (typeof props.value === 'number' || typeof props.value === 'string') && typeof props.max === 'number'
      ? props.max < Number(state.valueRef)
        ? `${props.max}+`
        : state.valueRef
      : state.valueRef

export const computedValueRef =
  ({ props }: Pick<IBadgeRenderlessParams, 'props'>) =>
  (): number | string | undefined => {
    if (typeof props.value === 'number' || typeof props.value === 'string') {
      return props.value
    } else {
      return undefined
    }
  }

export const computedTransform =
  ({ designConfig, props }: Pick<IBadgeRenderlessParams, 'designConfig' | 'props'>) =>
  (): StyleValue => {
    if (designConfig?.transform === 'unset') {
      return null
    }
    return {
      transform: `translate(
        ${props.offset[0]}${typeof props.offset[0] === 'number' ? 'px' : ''},
        ${props.offset[1]}${typeof props.offset[1] === 'number' ? 'px' : ''}
      )`
    }
  }
