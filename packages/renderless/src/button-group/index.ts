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
import type { IButtonGroupRenderlessParams, IButtonGroupNode, IButtonGroupItemClass } from '@/types'

export const handleChange =
  ({ emit, state }: Pick<IButtonGroupRenderlessParams, 'emit' | 'state'>) =>
  (): void => {
    if (!state.disabled) {
      emit('change', state.value)
    }
  }

export const handleClick =
  ({ emit, props, state }: Pick<IButtonGroupRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (node: IButtonGroupNode): void => {
    if (!state.disabled && !node.disabled) {
      state.value = node[props.valueField]
      emit('update:modelValue', state.value)
    }
  }

export const moreNodeClick =
  ({ emit, props, state }: Pick<IButtonGroupRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (node: IButtonGroupNode): void => {
    if (!state.disabled) {
      const index = state.moreData.indexOf(node)

      state.moreData.splice(index, 1, state.buttonData[state.buttonData.length - 1])
      state.buttonData.splice(state.buttonData.length - 1, 1, node)
      state.value = node[props.valueField]
      emit('update:modelValue', state.value)
    }
  }

export const getItemClass =
  ({ props, state }: Pick<IButtonGroupRenderlessParams, 'props' | 'state'>) =>
  (node: IButtonGroupNode): IButtonGroupItemClass => {
    if (state.disabled || node.disabled) {
      return { disabled: true }
    }

    return props.plain
      ? {
          plain: props.plain,
          medium: props.size === 'medium',
          small: props.size === 'small',
          mini: props.size === 'mini'
        }
      : {}
  }
