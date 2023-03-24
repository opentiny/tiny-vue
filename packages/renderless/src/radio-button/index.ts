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

export const handleChange = ({ constants, nextTick, dispatch, state }) => () => {
  nextTick(() => {
    dispatch(constants.RADIO_GROUP, 'handleChange', [state.value])
  })
}

export const getValue = (state) => () => state.radioGroup.modelValue

export const setValue = ({ state }) => (val) => state.radioGroup.$emit('update:modelValue', val)

export const getGroup = ({ constants, parent: $parent }) => () => {
  let parent = $parent.$parent

  while (parent) {
    if (parent.$options.componentName !== constants.RADIO_GROUP) {
      parent = parent.$parent
    } else {
      return parent
    }
  }

  return false
}

export const getStyle = (state) => () => ({
  backgroundColor: state.radioGroup.fill || '',
  borderColor: state.radioGroup.fill || '',
  boxShadow: state.radioGroup.fill ? `-1px 0 0 0 ${state.radioGroup.fill}` : '',
  color: state.radioGroup.textColor || ''
})

export const toggleEvents = ({ refs, props }) => (isUnBind = false) => {
  const radioEl = refs.radio

  Object.keys(props.events).forEach((ev) => {
    radioEl[(isUnBind ? 'remove' : 'add') + 'EventListener'](ev, props.events[ev])
  })
}
