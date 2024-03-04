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

import { handleClick, setDropdownTabs } from './index'

export const api = ['state', 'handleClick', ' setDropdownTabs']

export const renderless = (props, { inject, reactive }) => {
  const state = reactive({
    hide: true,
    dropdownTabs: props.tabs || [],
    rootTabs: inject('rootTabs')
  })

  const api = {
    state,
    handleClick: handleClick(state),
    setDropdownTabs: setDropdownTabs(state)
  }

  return api
}
