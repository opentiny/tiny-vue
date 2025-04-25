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
// 导入国际化工具函数
import { t } from '@opentiny/vue-locale'

// 导入grid组件的样式文件
import '@opentiny/vue-theme/grid/index.less'

// 导入grid适配器,用于配置和扩展grid功能
import GridAdapter from './src/adapter'

// 导入表格基础组件
import Table from './src/table'

// 导入表格列组件
import GridColumn from './src/column'

// 导入grid主组件
import Grid from './src'

// 导入右键菜单插件
import Menu from './src/menu'

// 导入编辑器插件
import Edit from './src/edit'

// 导入导出功能插件
import Export from './src/export'

// 导入键盘操作插件
import Keyboard from './src/keyboard'

// 导入表单验证插件
import Validator from './src/validator'

// 导入自适应大小插件
import Resize from './src/resize'

// 导入过滤功能插件
import Filter from './src/filter'

// 导入全局配置
import GridConfig from './src/config'

// 导入单选功能组件
import GridRadio from './src/radio'

// 导入数据获取插件
import FetchData from './src/fetch-data'

// 导入分页器插件
import Pager from './src/pager'

// 导入工具栏插件
import Toolbar from './src/toolbar'

// 导入列锚点插件
import ColumnAnchor from './src/column-anchor'

// 导入异步列插件
import AsyncColumn from './src/async-column'

// 导入拖拽功能插件
import Dragger from './src/dragger'

// 导入排序功能插件
import Sort from './src/sort'

// 导入提示框插件
import Tooltip from './src/tooltip'

// 导入多选功能插件
import Checkbox from './src/checkbox'

// 导入树形表格插件
import Tree from './src/tree'

// 导入工具函数集合
import * as GridTools from './src/tools'

// 导入版本号
import { version } from './package.json'

// 导入插件类型定义
import type { Plugin } from './src/types/index.type'

// 定义需要安装的插件列表
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
  Tree,
  AsyncColumn
]

// 设置全局参数,配置国际化方法
GridAdapter.setup({ i18n: t })
GridAdapter.t = t

// 遍历安装所有插件,根据插件的host属性决定安装到Grid还是Table组件上
plugins.map((plugin) => plugin.install(plugin.host === 'grid' ? Grid : Table))

/**
 * 创建包装函数,用于代理table组件的方法到grid组件
 * @param {string} name - 方法名
 * @returns {Function} 返回包装后的函数
 */
const getWrapFunc = (name) =>
  function (...args) {
    const tinyTable = this.$refs.tinyTable
    if (tinyTable) {
      return this.$refs.tinyTable[name].apply(tinyTable, args)
    }
  }

// 将table组件的所有方法复制到grid组件中
Object.keys(Table.methods).forEach((name) => {
  if (!Grid.methods[name]) {
    Grid.methods[name] = getWrapFunc(name)
  }
})

// 设置组件版本号
Grid.version = version

/**
 * 安装方法,用于Vue.use()安装组件
 * @param {Object} Vue - Vue构造函数
 */
Grid.install = function (Vue) {
  Vue.component(Grid.name, Grid)
}

/* istanbul ignore next */
// 在运行时环境下自动安装组件
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Grid.install(window.Vue)
  }
}

export default Grid
// 按需引入插件
export { GridColumn, GridConfig, GridAdapter, GridRadio, GridTools }
