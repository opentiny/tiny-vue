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

// 存储已安装的插件列表,避免重复安装
const installedPlugins = []

// 按钮和菜单的存储映射,用于管理表格的按钮和菜单配置
const Buttons = StoreMap
const Menus = StoreMap

/**
 * Grid表格核心对象,提供插件安装、配置管理等功能
 */
export const Grid = {
  /**
   * 安装Grid插件
   * @param {Object} Plugin - 需要安装的插件对象,必须包含install方法
   * @param {Object} options - 插件的配置选项
   * @returns {Object} 返回Grid实例,支持链式调用
   */
  use(Plugin, options) {
    // 检查插件是否有效且包含install方法
    if (Plugin && Plugin.install) {
      // 检查插件是否已安装,避免重复安装
      if (!installedPlugins.includes(Plugin)) {
        // 调用插件的install方法进行安装
        Plugin.install(this, options)
        // 将插件添加到已安装列表
        installedPlugins.push(Plugin)
      }
    }

    return this
  },

  // 全局配置设置函数
  setup: Setup,

  // 拦截器,用于拦截和处理表格的各种事件
  interceptor: Interceptor,

  // 渲染器,用于自定义表格的渲染逻辑
  renderer: Renderer,

  // 按钮配置存储
  buttons: Buttons,

  // 菜单配置存储
  menus: Menus,

  // 是否启用tooltip功能的标志
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
