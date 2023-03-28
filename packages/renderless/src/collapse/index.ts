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

export const setActiveNames = ({ emit, props, state }) => (activeNames) => {
  activeNames = [].concat(activeNames)
  const value = props.accordion ? activeNames[0] : activeNames
  state.activeNames = activeNames

  emit('update:modelValue', value)
  emit('change', value)
}

export const handleItemClick = ({ api, props, state }) => (item) => {
  const activeNames = state.activeNames.slice(0)
  const index = activeNames.indexOf(item.name)
  const beforeClose = () => {
    let result = props.beforeClose ? props.beforeClose(item, state.activeNames) : true

    return new Promise((resolve) => {
      if (result && result.then) {
        result.then(() => resolve(true)).catch(() => resolve(false))
      } else {
        resolve(result)
      }
    })
  }

  beforeClose().then((next) => {
    if (props.accordion) {
      if (next || !activeNames.length) {
        api.setActiveNames(activeNames[0] === item.name ? '' : item.name)
      }
    } else {
      index > -1 ? next && activeNames.splice(index, 1) : activeNames.push(item.name)

      api.setActiveNames(activeNames)
    }
  })
}
