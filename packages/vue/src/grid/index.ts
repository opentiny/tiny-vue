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
import { t } from '@opentiny/vue-locale'
import '@opentiny/vue-theme/grid/index.less'
import GridAdapter from './src/adapter'
import Table from './src/table'
import GridColumn from './src/column'
import Grid from './src'
import Menu from './src/menu'
import Edit from './src/edit'
import Export from './src/export'
import Keyboard from './src/keyboard'
import Validator from './src/validator'
import Resize from './src/resize'
import Filter from './src/filter'
import GridConfig from './src/config'
import GridRadio from './src/radio'
import GridButton from './src/button'
import FetchData from './src/fetch-data'
import Pager from './src/pager'
import Toolbar from './src/toolbar'
import ColumnAnchor from './src/column-anchor'
import Dragger from './src/dragger'
import Sort from './src/sort'
import Tooltip from './src/tooltip'
import Checkbox from './src/checkbox'
import Tree from './src/tree'
import * as GridTools from './src/tools'
import { version } from './package.json'
import type { Plugin } from './src/types/index.type'

/**
 * Menu 右键菜单
 * Edit 内置编辑器
 * Export 导出
 * Keyboard 键盘操作
 * Validator 校验
 * Resize 响应式改变表格宽高（auto-resize）
 * Filter 筛选
 * FetchData 远程数据处理
 * Pager 分页处理逻辑
 * Toolbar 工具栏处理逻辑
 * ColumnAnchor 表格列锚点
 * Dragger 拖拽相关逻辑
 * Sort 排序相关逻辑
 * Tooltip 提示相关逻辑
 * Checkbox 多选相关逻辑
 * Tree 树表相关逻辑
 */
const plugins: Plugin[] = [
  Menu,
  Edit,
  Export,
  Keyboard,
  Validator,
  Resize,
  Filter,
  FetchData,
  Pager,
  Toolbar,
  ColumnAnchor,
  Dragger,
  Sort,
  Tooltip,
  Checkbox,
  Tree
]

// 设置全局参数,配置GlobalConfig，提供比如国际化方法
GridAdapter.setup({ i18n: t })
GridAdapter.t = t

// 将每个插件的方法都合并回自己的宿主组件
plugins.map((plugin) => plugin.install(plugin.host === 'grid' ? Grid : Table))

// 让用户可以通过grid组件的方法间接调用内层table组件的方法
const getWrapFunc = (name) =>
  function (...args) {
    const tinyTable = this.$refs.tinyTable
    if (tinyTable) {
      return this.$refs.tinyTable[name].apply(tinyTable, args)
    }
  }

// 将table组件的方法，传递给grid组件使用，this指向全部指向tinyTable
Object.keys(Table.methods).forEach((name) => {
  if (!Grid.methods[name]) {
    Grid.methods[name] = getWrapFunc(name)
  }
})

Grid.version = version

Grid.install = function (Vue) {
  Vue.component(Grid.name, Grid)
}

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Grid.install(window.Vue)
  }
}

export default Grid
// 按需引入插件
export { GridColumn, GridConfig, GridAdapter, GridRadio, GridButton, GridTools }
