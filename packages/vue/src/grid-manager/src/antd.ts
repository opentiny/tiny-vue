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
import { GridAdapter } from '@opentiny/vue-grid'

export default function () {
  function handleClearEvent(params, event) {
    if (!params) {
      return
    }

    const getTarget = params.$table.getEventTargetNode
    const bodyEl = document.body

    if (
      getTarget(event, bodyEl, 'ant-select-dropdown').flag ||
      getTarget(event, bodyEl, 'ant-cascader-menus').flag ||
      getTarget(event, bodyEl, 'ant-calendar-picker-container').flag ||
      getTarget(event, bodyEl, 'ant-time-picker-panel').flag
    ) {
      return false
    }
  }

  GridAdapter.interceptor.add('event.clear_actived', handleClearEvent)
  GridAdapter.interceptor.add('event.clear_filter', handleClearEvent)
}
