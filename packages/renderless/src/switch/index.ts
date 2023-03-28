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

import { isNull } from '@opentiny/vue-renderless/common/type'

export const toggle = ({ emit, props, state }) => (event) => {
  event.preventDefault()

  if (state.disabled) {
    return false
  }

  const change = () => {
    state.currentValue = state.currentValue === props.trueValue ? props.falseValue : props.trueValue

    emit('update:modelValue', state.currentValue)
    emit('change', state.currentValue)
  }

  props.beforeChange ? props.beforeChange(change) : change()
}

export const computedWarpClasses = ({ prefixCls, props, state }) => () => [
  `${prefixCls}`,
  {
    [`${prefixCls}-checked`]: state.currentValue === props.trueValue,
    [`${prefixCls}-disabled`]: state.disabled,
    mini: props.mini,
    disabled: state.disabled
  }
]

export const computedInnerClasses = ({ prefixCls }) => () => `${prefixCls}-inner`

export const computedStyle = ({ props, state }) => () => {
  let size = ''

  if (!isNull(props.modelValue)) {
    size = typeof props.modelValue === 'number' ? `${props.modelValue}px` : props.modelValue
  }

  return {
    fontSize: size,
    backgroundColor: props.trueValue === state.currentValue ? props.activeColor : props.inactiveColor
  }
}
