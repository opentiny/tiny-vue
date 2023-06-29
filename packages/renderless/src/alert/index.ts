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

export const handleClose = ({ emit, state }) => () => {
  state.show = false
  emit('close')
}

export const computedGetIcon = ({ constants, props, designConfig }) => () => {
  const designIcon = designConfig?.icons?.[props.type]

  return props.icon || designIcon || constants.ICON_MAP[props.type]
}

export const computedGetTitle = ({ constants, t, props }) => () => props.title || t(constants.TITLE_MAP[props.type])

export const handleHeaderClick = ({ state, props, vm }) => () => {
  if (props.showFoldable) {
    state.contentVisible = !state.contentVisible
  }

  if (vm.$refs.ContentDescribe) {
    state.contentDescribeHeight = vm.$refs.ContentDescribe.scrollHeight

    if (state.contentDescribeHeight > state.contentMaxHeight) {
      state.scrollStatus = true
    }
  }
  if (vm.$refs.ContentDefault) {
    state.contentDefaultHeight = vm.$refs.ContentDefault.scrollHeight

    if (state.contentDefaultHeight > state.contentMaxHeight) {
      state.scrollStatus = true
    }
  }
}
