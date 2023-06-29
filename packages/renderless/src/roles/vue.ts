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

import { showList, show, hide, getRoleList, changeRole, initService } from './index'

export const api = ['state', 'showList', 'show', 'hide', 'changeRole']

export const renderless = (props, { computed, reactive }, { emit, service, constants }) => {
  const $service = initService(service, props)
  let api = {}

  const state = reactive({
    currentRole: '',
    currentId: '',
    showPopover: true,
    showIcon: true,
    roleList: computed(() => api.getRoleList())
  })

  api = {
    state,
    show: show(state),
    hide: hide(state),
    showList: showList(state),
    getRoleList: getRoleList({ constants, service: $service, state }),
    changeRole: changeRole({ constants, emit, props, service: $service, state })
  }

  return api
}
