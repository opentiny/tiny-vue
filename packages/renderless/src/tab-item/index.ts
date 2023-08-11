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

export const computedIsClosable =
  ({ rootTabs, props }) =>
  () =>
    props.withClose || rootTabs.withClose

export const computedActive =
  ({ nextTick, props, state }) =>
  () => {
    const active = state.rootTabs.state.currentName === (props.name || state.index)

    if (active) {
      state.loaded = true

      nextTick(() => {
        state.animateShow = true
      })
    } else {
      state.animateShow = false
    }

    return active
  }

export const computedPaneName =
  ({ props, state }) =>
  () =>
    props.name || state.index

export const watchTitle = (parent) => () => parent.$emit('tab-nav-update')
