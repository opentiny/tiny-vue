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

import { queryChange } from './index'

export const api = ['state', 'queryChange']

export const renderless = (props, { onMounted, reactive, watch, inject }, { broadcast, vm }) => {
  const select = inject('select')
  const constants = select._constants

  const state = reactive({
    visible: true
  })

  const api = {
    state,
    queryChange: queryChange({ select, state, vm })
  }

  watch(
    () => props.disabled,
    (value) => {
      broadcast(constants.COMPONENT_NAME.Option, constants.EVENT_NAME.handleGroupDisabled, value)
    },
    { immediate: true }
  )

  onMounted(() => {
    if (props.disabled) {
      broadcast(constants.COMPONENT_NAME.Option, constants.EVENT_NAME.handleGroupDisabled, props.disabled)
    }

    select.state.selectEmitter.on(constants.EVENT_NAME.queryChange, api.queryChange)
  })

  return api
}
