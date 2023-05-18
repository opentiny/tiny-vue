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

import { isBoolean } from '../static'
import { initFilter } from './common'

let columnUniqueId = 0

function setBasicProperty(column, context) {
  column.id = `col_${++columnUniqueId}`
  column.type = context.type
  column.prop = context.prop
  column.rules = context.rules
  column.required = context.required
  column.property = context.field || context.prop
  column.title = context.title
  column.label = context.label
  column.width = context.width
  column.minWidth = context.minWidth
  column.resizable = context.resizable
  column.fixed = context.fixed
  column.align = context.align
  column.headerAlign = context.headerAlign
  column.footerAlign = context.footerAlign
  column.showOverflow = context.showOverflow
  column.showHeaderOverflow = context.showHeaderOverflow
  column.showTip = context.showTip
  column.showHeaderTip = context.showHeaderTip
  column.className = context.class || context.className
  column.headerClassName = context.headerClassName
  column.footerClassName = context.footerClassName
  column.indexMethod = context.indexMethod
  column.formatText = context.formatText
  column.formatValue = context.formatValue
  column.format = context.formatConfig
  column.sortable = context.sortable
  column.sortBy = context.sortBy
  column.sortMethod = context.sortMethod
  column.remoteSort = context.remoteSort
  column.filterMultiple = isBoolean(context.filterMultiple) ? context.filterMultiple : true
  column.filterMethod = context.filterMethod
  column.filterRender = context.filterRender
  column.filter = context.filter && initFilter(context.filter)
  column.treeNode = context.treeNode
  column.renderer = context.renderer
  column.editor = context.editor
}

function ColumnConfig(context, { renderHeader, renderCell, renderData } = {}, config = {}) {
  // 基本属性
  setBasicProperty(this, context)
  // 自定义参数
  this.params = context.params
  // 渲染属性
  this.visible = true
  this.level = 1
  this.rowSpan = 1
  this.colSpan = 1
  this.order = null
  this.renderWidth = 0 // 表格列最终的宽度，会将多种尺寸（number、%、auto）全部转化为固定的px尺寸
  this.renderHeight = 0
  this.resizeWidth = 0
  this.renderLeft = 0
  this.model = {}
  this.renderHeader = renderHeader || context.renderHeader
  this.renderCell = renderCell || context.renderCell
  this.renderData = renderData
  this.showIcon = isBoolean(context.showIcon) ? context.showIcon : true
  this.loading = false
  // 单元格插槽，只对 grid 有效
  this.slots = context.slots
  this.own = context
  this.asyncPrefix = config.constant.asyncPrefix
}

export const getColumnConfig = (context, options, config) => (context instanceof ColumnConfig ? context : new ColumnConfig(context, options, config))
