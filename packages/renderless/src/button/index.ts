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

export const handleClick = ({ emit, props, state }) => (event) => {
  if (props.nativeType === 'button' && props.resetTime > 0) {
    state.disabled = true

    state.timer = setTimeout(() => {
      state.disabled = false
    }, props.resetTime)
  }

  emit('click', event)
}

export const clearTimer = (state) => () => clearTimeout(state.timer)
