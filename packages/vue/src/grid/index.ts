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
import * as GridTools from './src/tools'
import { version } from './package.json'

// 右键菜单、内置编辑器、导出、键盘操作、校验、响应式改变表格宽高（auto-resize）、筛选
const components = [Menu, Edit, Export, Keyboard, Validator, Resize, Filter]

// 设置全局参数,配置GlobalConfig，提供比如国际化方法
GridAdapter.setup({ i18n: t })
GridAdapter.t = t

// 把各个插件的方法都合并会$table
components.map((component) => component.install(Table))



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
