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

export const handleChange = ({ emit, state }) => () => {
  if (!state.disabled) {
    emit('change', state.value)
  }
}

export const handleClick = ({ emit, props, state }) => (node) => {
  if (!state.disabled) {
    state.value = node[props.valueField]
    emit('update:modelValue', state.value)
  }
}

export const moreNodeClick = ({ emit, props, state }) => (node) => {
  if (!state.disabled) {
    const index = state.moreData.indexOf(node)

    state.moreData.splice(index, 1, state.buttonData[state.buttonData.length - 1])
    state.buttonData.splice(state.buttonData.length - 1, 1, node)
    state.value = node[props.valueField]
    emit('update:modelValue', state.value)
  }
}
