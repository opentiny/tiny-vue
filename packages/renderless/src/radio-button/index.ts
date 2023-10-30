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

import { IRadioButtonRenderlessParams, IRadioGroupProps, IRadioButtonState } from '@/types'

export const handleChange =
  ({
    constants,
    nextTick,
    dispatch,
    state
  }: Pick<IRadioButtonRenderlessParams, 'constants' | 'nextTick' | 'dispatch' | 'state'>) =>
  (): void => {
    nextTick(() => {
      dispatch(constants.RADIO_GROUP, 'handleChange', [state.value])
    })
  }

export const getValue = (state: IRadioButtonRenderlessParams['state']) => (): IRadioGroupProps['modelValue'] =>
  state.radioGroup?.modelValue

export const setValue =
  ({ state }: Pick<IRadioButtonRenderlessParams, 'state'>) =>
  (val: IRadioGroupProps['modelValue']): void =>
    state.radioGroup?.$emit('update:modelValue', val)

export const getGroup =
  ({ constants, parent: $parent }: Pick<IRadioButtonRenderlessParams, 'constants' | 'parent'>) =>
  (): IRadioButtonState['radioGroup'] | null => {
    let parent = $parent.$parent

    while (parent) {
      if (parent.$options.componentName !== constants.RADIO_GROUP) {
        parent = parent.$parent
      } else {
        return parent
      }
    }

    return null
  }

export const getStyle = (state: IRadioButtonRenderlessParams['state']) => () => ({
  backgroundColor: state.radioGroup?.fill || '',
  borderColor: state.radioGroup?.fill || '',
  boxShadow: state.radioGroup?.fill ? `-1px 0 0 0 ${state.radioGroup.fill}` : '',
  color: state.radioGroup?.textColor || ''
})

export const toggleEvents =
  ({ vm, props }: Pick<IRadioButtonRenderlessParams, 'vm' | 'props'>) =>
  (isUnBind = false): void => {
    const radioEl = vm.$refs.radio

    Object.keys(props.events).forEach((ev) => {
      radioEl[(isUnBind ? 'remove' : 'add') + 'EventListener'](ev, props.events[ev])
    })
  }

export const keydownHandle =
  ({ state, props }: Pick<IRadioButtonRenderlessParams, 'state' | 'props'>) =>
  (): void => {
    state.value = state.isDisabled ? state.value : props.label
  }

export const handleFocus = (state: IRadioButtonRenderlessParams['state']) => (): boolean => (state.focus = true)

export const handleBlur = (state: IRadioButtonRenderlessParams['state']) => (): boolean => (state.focus = false)
