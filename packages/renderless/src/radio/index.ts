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
import { IRadioRenderlessParams, IRadioState } from '@/types'

export const handleChange =
  ({
    constants,
    dispatch,
    emit,
    state,
    nextTick
  }: Pick<IRadioRenderlessParams, 'constants' | 'dispatch' | 'emit' | 'state' | 'nextTick'>) =>
  (): void => {
    nextTick(() => {
      emit('change', state.model)

      state.isGroup && dispatch(constants.RADIO_GROUP, 'handleChange', [state.model])
    })
  }

export const isGroup =
  ({ constants, parent: $parent, state }: Pick<IRadioRenderlessParams, 'constants' | 'parent' | 'state'>) =>
  (): boolean => {
    let parent = $parent.$parent.$parent

    while (parent) {
      if (parent.$options.componentName !== constants.RADIO_GROUP) {
        parent = parent.$parent
      } else {
        state.radioGroup = parent as unknown as IRadioRenderlessParams['parent']

        return true
      }
    }

    return false
  }

export const radioSize =
  ({ props, state }: Pick<IRadioRenderlessParams, 'props' | 'state'>) =>
  (): IRadioState['radioSize'] => {
    if (state.isGroup && state.radioGroup?.state?.radioGroupSize) {
      return state.radioGroup.state.radioGroupSize
    } else {
      return props.size
    }
  }

export const isDisabled =
  ({ props, state }: Pick<IRadioRenderlessParams, 'props' | 'state'>) =>
  (): boolean =>
    props.disabled || state.radioGroup?.disabled || state.formDisabled

export const isDisplayOnly =
  ({ props }: Pick<IRadioRenderlessParams, 'props'>) =>
  (): boolean =>
    props.displayOnly

export const tabIndex =
  ({ props, state }: Pick<IRadioRenderlessParams, 'props' | 'state'>) =>
  (): number =>
    state.isDisabled || (state.isGroup && state.model !== props.label) ? -1 : 0

export const getModel =
  ({ props, state }: Pick<IRadioRenderlessParams, 'props' | 'state'>) =>
  (): IRadioState['model'] =>
    state.isGroup && state.radioGroup ? state.radioGroup.modelValue : props.modelValue

export const setModel =
  ({
    constants,
    dispatch,
    emit,
    props,
    vm,
    state
  }: Pick<IRadioRenderlessParams, 'constants' | 'dispatch' | 'emit' | 'props' | 'vm' | 'state'>) =>
  (val: IRadioState['model']): void => {
    if (state.isGroup) {
      dispatch(constants.RADIO_GROUP, 'update:modelValue', [val])
    } else {
      emit('update:modelValue', val)
    }

    vm.$refs.radio && (vm.$refs.radio.checked = state.model === props.label)
  }

export const toggleEvent = ({ props, vm, type }: Pick<IRadioRenderlessParams, 'props' | 'vm' | 'type'>) => {
  const radioEl = vm.$refs.radio

  if (radioEl) {
    Object.keys(props.events).forEach((ev) => {
      radioEl[type + 'EventListener'](ev, props.events[ev])
    })
  }
}

export const dispatchDisplayedValue =
  ({ state, dispatch, api }: Pick<IRadioRenderlessParams, 'state' | 'dispatch' | 'api'>) =>
  (): void => {
    if (state.isDisplayOnly) {
      dispatch('FormItem', 'displayed-value-changed', {
        type: 'radio',
        val: api.getDisplayedValue()
      })
    }
  }

export const getDisplayedValue =
  ({ vm, state, props }: Pick<IRadioRenderlessParams, 'vm' | 'props' | 'state'>) =>
  (): string => {
    if (state.model === props.label) {
      return (vm.$refs.label && vm.$refs.label.innerText) || props.text || props.label
    } else {
      return ''
    }
  }
