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
import { Interceptor, StoreMap } from '@opentiny/vue-renderless/grid/core'
import Setup from './src/setup'
import Renderer from './src/renderer'

const installedPlugins = []

const Buttons = StoreMap
const Menus = StoreMap

export const Grid = {
  use(Plugin, options) {
    if (Plugin && Plugin.install) {
      if (installedPlugins.indexOf(Plugin) === -1) {
        Plugin.install(this, options)
        installedPlugins.push(Plugin)
      }
    }

    return this
  },
  setup: Setup,
  interceptor: Interceptor,
  renderer: Renderer,
  buttons: Buttons,
  menus: Menus,
  _tooltip: true
}

export { Menus, Buttons, Interceptor, Renderer }

const handleClearEvent = (params, event) => {
  if (params && params.$table) {
    const getTarget = params.$table.getEventTargetNode
    const bodyEl = document.body

    if (
      getTarget(event, bodyEl, 'tiny-autocomplete-suggestion').flag ||
      getTarget(event, bodyEl, 'tiny-select-dropdown').flag ||
      getTarget(event, bodyEl, 'tiny-cascader__dropdown').flag ||
      getTarget(event, bodyEl, 'tiny-cascader-menus').flag ||
      getTarget(event, bodyEl, 'tiny-picker-panel').flag ||
      getTarget(event, bodyEl, 'hae-popup').flag ||
      getTarget(event, bodyEl, 'tiny-popper').flag ||
      getTarget(event, bodyEl, 'tiny-dialog-box').flag
    ) {
      return false
    }
  }
}

Grid.interceptor.add('event.clear_actived', handleClearEvent)
Grid.interceptor.add('event.clear_filter', handleClearEvent)

export default Grid
