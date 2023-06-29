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

export const computedContent = ({ props, state }) => () =>
  typeof state.valueRef === 'number' && typeof props.max === 'number'
    ? (props.max < state.valueRef ? `${props.max}+` : state.valueRef)
    : state.valueRef

export const computedValueRef = ({ props }) => () => {
  if (typeof props.value === 'number') {
    return props.value
  }

  return typeof props.modelValue === 'number' ? props.modelValue : undefined
}
